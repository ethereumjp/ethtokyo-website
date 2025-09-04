import type { Event } from "@/types/schedule";

// ICSファイルのフィールド名
const ICS_FIELDS = {
  BEGIN_EVENT: "BEGIN:VEVENT",
  END_EVENT: "END:VEVENT",
  UID: "UID",
  SUMMARY: "SUMMARY",
  DESCRIPTION: "DESCRIPTION",
  DTSTART_JST: "DTSTART;TZID=JST",
  DTEND_JST: "DTEND;TZID=JST",
  LOCATION: "LOCATION",
  URL: "URL",
} as const;

// ICSパース時のエラー型
export class ICSParseError extends Error {
  constructor(
    message: string,
    public field?: string,
    public value?: string,
  ) {
    super(message);
    this.name = "ICSParseError";
  }
}

// ICSフィールドの値とメタデータ
interface ICSField {
  name: string;
  value: string;
  lineNumber: number;
}

// パース中のイベント状態
interface ParsingEvent {
  fields: ICSField[];
  lineNumber: number;
}

/**
 * ICSファイルの内容をパースしてイベントの配列を返す
 * @param icsContent - ICSファイルの内容
 * @returns パースされたイベントの配列
 * @throws ICSParseError パースに失敗した場合
 */
export function parseICSData(icsContent: string): Event[] {
  try {
    const normalizedContent = normalizeICSContent(icsContent);
    const lines = normalizedContent.split("\n");
    const events: Event[] = [];
    let currentEvent: ParsingEvent | null = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;

      if (line === ICS_FIELDS.BEGIN_EVENT) {
        currentEvent = { fields: [], lineNumber };
      } else if (line === ICS_FIELDS.END_EVENT) {
        if (currentEvent) {
          const event = parseEventFromFields(currentEvent.fields);
          if (event) {
            events.push(event);
          }
          currentEvent = null;
        }
      } else if (currentEvent && line.trim()) {
        const field = parseICSField(line, lineNumber);
        if (field) {
          currentEvent.fields.push(field);
        }
      }
    }

    // 開始時刻でソート（より正確なソート）
    return sortEventsByStartTime(events);
  } catch (error) {
    if (error instanceof ICSParseError) {
      throw error;
    }
    throw new ICSParseError(
      `Failed to parse ICS data: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * ICSファイルの内容を正規化する
 */
function normalizeICSContent(content: string): string {
  return content
    .replace(/\r\n/g, "\n") // Windows改行を統一
    .replace(/\r/g, "\n"); // Mac改行を統一
}

/**
 * ICSフィールドをパースする
 */
function parseICSField(line: string, lineNumber: number): ICSField | null {
  // 行がスペースで始まる場合は、前のフィールドの続き
  if (/^\s/.test(line)) {
    return null; // 継続行は上位で処理
  }

  const colonIndex = line.indexOf(":");
  if (colonIndex === -1) {
    return null;
  }

  const name = line.substring(0, colonIndex);
  const value = line.substring(colonIndex + 1);

  return { name, value, lineNumber };
}

/**
 * フィールドの配列からEventオブジェクトを作成する
 */
function parseEventFromFields(fields: ICSField[]): Event | null {
  try {
    const eventData: Partial<Event> = {};

    for (const field of fields) {
      parseFieldValue(eventData, field);
    }

    // 必須フィールドの検証
    if (!eventData.uid || !eventData.title) {
      return null;
    }

    return eventData as Event;
  } catch (error) {
    console.warn("Failed to parse event from fields:", error);
    return null;
  }
}

/**
 * フィールドの値をEventオブジェクトに設定する
 */
function parseFieldValue(eventData: Partial<Event>, field: ICSField): void {
  try {
    switch (field.name) {
      case ICS_FIELDS.UID:
        eventData.uid = field.value;
        break;

      case ICS_FIELDS.SUMMARY: {
        // バックスラッシュを削除し、タイトルとスピーカーを分離
        const { title, speakers } = parseSummaryField(field.value);
        eventData.title = title;
        eventData.speakers = speakers;
        break;
      }

      case ICS_FIELDS.DESCRIPTION:
        eventData.description = field.value;
        break;

      case ICS_FIELDS.DTSTART_JST:
        eventData.startTime = formatTime(field.value);
        eventData.startDateTime = parseDateTime(field.value);
        break;

      case ICS_FIELDS.DTEND_JST:
        eventData.endTime = formatTime(field.value);
        break;

      case ICS_FIELDS.LOCATION:
        eventData.location = field.value;
        break;

      case ICS_FIELDS.URL:
        eventData.url = field.value;
        break;
    }
  } catch (error) {
    console.warn(`Failed to parse field ${field.name}:`, error);
  }
}

/**
 * SUMMARYフィールドからタイトルとスピーカーを抽出する
 */
function parseSummaryField(value: string): { title: string; speakers: string } {
  const cleanValue = value.replace(/\\/g, "");
  // 最後のハイフン（スピーカー名の前）を探す
  // タイトル内のハイフンは保持し、スピーカー名の前のハイフンのみで分割
  const lastHyphenIndex = cleanValue.lastIndexOf("-");

  if (lastHyphenIndex !== -1) {
    return {
      title: cleanValue.substring(0, lastHyphenIndex).trim(),
      speakers: cleanValue.substring(lastHyphenIndex + 1).trim(),
    };
  }

  return {
    title: cleanValue,
    speakers: "",
  };
}

/**
 * 時刻文字列をフォーマットする（20250912T100000 -> 10:00）
 */
function formatTime(timeStr: string): string {
  try {
    if (!timeStr.includes("T")) {
      return timeStr;
    }

    const timePart = timeStr.split("T")[1];
    if (!timePart || timePart.length < 4) {
      return timeStr;
    }

    const hour = timePart.substring(0, 2);
    const minute = timePart.substring(2, 4);

    const hourNum = Number.parseInt(hour, 10);
    const minuteNum = Number.parseInt(minute, 10);

    // 時間の妥当性チェック
    if (isValidTime(hourNum, minuteNum)) {
      return `${hour}:${minute}`;
    }

    return timeStr;
  } catch (error) {
    console.warn("Failed to format time:", timeStr, error);
    return timeStr;
  }
}

/**
 * 日時文字列をDateオブジェクトにパースする
 */
function parseDateTime(dateTimeStr: string): Date | undefined {
  try {
    // DTSTART;TZID=JST:20250912T100000 の形式を解析
    if (!dateTimeStr.includes("T")) {
      return undefined;
    }

    const dateTimePart = dateTimeStr.split("T")[1];
    if (!dateTimePart || dateTimePart.length < 6) {
      return undefined;
    }

    const year = Number.parseInt(dateTimeStr.substring(0, 4), 10);
    const month = Number.parseInt(dateTimeStr.substring(4, 6), 10) - 1; // 月は0ベース
    const day = Number.parseInt(dateTimeStr.substring(6, 8), 10);
    const hour = Number.parseInt(dateTimeStr.substring(9, 11), 10);
    const minute = Number.parseInt(dateTimeStr.substring(11, 13), 10);
    const second = Number.parseInt(dateTimeStr.substring(13, 15), 10);

    // 時間の妥当性チェック
    if (isValidTime(hour, minute) && isValidDate(year, month, day)) {
      const date = new Date(year, month, day, hour, minute, second);
      return date;
    }

    return undefined;
  } catch (error) {
    console.warn("Failed to parse date time:", dateTimeStr, error);
    return undefined;
  }
}

/**
 * 時刻の妥当性をチェックする
 */
function isValidTime(hour: number, minute: number): boolean {
  return (
    !Number.isNaN(hour) &&
    !Number.isNaN(minute) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
  );
}

/**
 * 日付の妥当性をチェックする
 */
function isValidDate(year: number, month: number, day: number): boolean {
  return (
    !Number.isNaN(year) &&
    !Number.isNaN(month) &&
    !Number.isNaN(day) &&
    year > 1900 &&
    month >= 0 &&
    month <= 11 &&
    day >= 1 &&
    day <= 31
  );
}

/**
 * イベントを開始時刻でソートする
 */
function sortEventsByStartTime(events: Event[]): Event[] {
  return events.sort((a, b) => {
    if (a.startDateTime && b.startDateTime) {
      return a.startDateTime.getTime() - b.startDateTime.getTime();
    }
    return a.startTime.localeCompare(b.startTime);
  });
}

/**
 * カンファレンススケジュールを取得する
 */
export async function fetchConferenceSchedule(): Promise<Event[]> {
  try {
    const response = await fetch("/2025/timetable/conference.ics");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const icsContent = await response.text();
    return parseICSData(icsContent);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Failed to fetch conference schedule:", error);
    throw new Error(`Failed to fetch conference schedule: ${errorMessage}`);
  }
}
