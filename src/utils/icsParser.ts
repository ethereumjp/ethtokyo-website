export interface Event {
  uid: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  url: string;
  speakers: string;
  startDateTime?: Date; // ソート用の開始時刻
}

export function parseICSData(icsContent: string): Event[] {
  const events: Event[] = [];

  // ICSファイルの改行を処理して、フィールドを正しく結合
  const normalizedContent = icsContent
    .replace(/\r\n/g, "\n") // Windows改行を統一
    .replace(/\r/g, "\n"); // Mac改行を統一

  const lines = normalizedContent.split("\n");

  let currentEvent: Partial<Event> = {};
  let inEvent = false;
  let currentField = "";
  let currentValue = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line === "BEGIN:VEVENT") {
      inEvent = true;
      currentEvent = {};
      currentField = "";
      currentValue = "";
    } else if (line === "END:VEVENT") {
      // 最後のフィールドの値を保存
      if (currentField && currentValue) {
        saveFieldValue(currentEvent, currentField, currentValue);
      }

      if (currentEvent.uid && currentEvent.title) {
        events.push(currentEvent as Event);
      }
      inEvent = false;
      currentEvent = {};
      currentField = "";
      currentValue = "";
    } else if (inEvent) {
      // 行がスペースで始まる場合は、前のフィールドの続き
      if (/^\s/.test(line)) {
        // 先頭のスペースを除去して結合
        const trimmedLine = line.replace(/^\s+/, "");
        currentValue += trimmedLine;
      } else {
        // 新しいフィールドの開始
        if (currentField && currentValue) {
          // 前のフィールドの値を保存
          saveFieldValue(currentEvent, currentField, currentValue);
        }

        // 新しいフィールドを解析
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
          currentField = line.substring(0, colonIndex);
          currentValue = line.substring(colonIndex + 1);
        }
      }
    }
  }

  // 最後のフィールドの値を保存
  if (currentField && currentValue) {
    saveFieldValue(currentEvent, currentField, currentValue);
  }

  // 開始時刻でソート（より正確なソート）
  const sortedEvents = events.sort((a, b) => {
    if (a.startDateTime && b.startDateTime) {
      return a.startDateTime.getTime() - b.startDateTime.getTime();
    }
    return a.startTime.localeCompare(b.startTime);
  });

  return sortedEvents;
}

function saveFieldValue(
  currentEvent: Partial<Event>,
  field: string,
  value: string,
) {
  switch (field) {
    case "UID":
      currentEvent.uid = value;
      break;
    case "SUMMARY": {
      // バックスラッシュを削除し、タイトルとスピーカーを分離
      const cleanValue = value.replace(/\\/g, "");

      // 最後のハイフン（スピーカー名の前）を探す
      // タイトル内のハイフンは保持し、スピーカー名の前のハイフンのみで分割
      const lastHyphenIndex = cleanValue.lastIndexOf("-");

      if (lastHyphenIndex !== -1) {
        currentEvent.title = cleanValue.substring(0, lastHyphenIndex).trim();
        currentEvent.speakers = cleanValue
          .substring(lastHyphenIndex + 1)
          .trim();
      } else {
        currentEvent.title = cleanValue;
        currentEvent.speakers = "";
      }

      break;
    }
    case "DESCRIPTION":
      currentEvent.description = value;
      break;
    case "DTSTART;TZID=JST":
      currentEvent.startTime = formatTime(value);
      currentEvent.startDateTime = parseDateTime(value);
      break;
    case "DTEND;TZID=JST":
      currentEvent.endTime = formatTime(value);
      break;
    case "LOCATION":
      currentEvent.location = value;
      break;
    case "URL":
      currentEvent.url = value;
      break;
  }
}

function formatTime(timeStr: string): string {
  // 20250912T100000 -> 10:00
  if (timeStr.length >= 6) {
    // 時間部分を抽出（Tの後の6文字）
    const timePart = timeStr.split("T")[1];
    if (timePart && timePart.length >= 4) {
      const hour = timePart.substring(0, 2);
      const minute = timePart.substring(2, 4);

      // 時間の妥当性チェック
      const hourNum = Number.parseInt(hour);
      const minuteNum = Number.parseInt(minute);

      if (hourNum >= 0 && hourNum <= 23 && minuteNum >= 0 && minuteNum <= 59) {
        const result = `${hour}:${minute}`;
        return result;
      }
      return timeStr;
    }
  }

  return timeStr;
}

function parseDateTime(dateTimeStr: string): Date | undefined {
  // DTSTART;TZID=JST:20250912T100000 の形式を解析
  if (dateTimeStr.includes("T")) {
    const dateTimePart = dateTimeStr.split("T")[1];
    if (dateTimePart && dateTimePart.length >= 6) {
      const year = Number.parseInt(dateTimeStr.substring(0, 4));
      const month = Number.parseInt(dateTimeStr.substring(4, 6)) - 1; // 月は0ベース
      const day = Number.parseInt(dateTimeStr.substring(6, 8));
      const hour = Number.parseInt(dateTimeStr.substring(9, 11));
      const minute = Number.parseInt(dateTimeStr.substring(11, 13));
      const second = Number.parseInt(dateTimeStr.substring(13, 15));

      // 時間の妥当性チェック
      if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
        const date = new Date(year, month, day, hour, minute, second);
        return date;
      }
      return undefined;
    }
  }

  return undefined;
}

export async function fetchConferenceSchedule(): Promise<Event[]> {
  try {
    const response = await fetch("/2025/timetable/conference.ics");
    const icsContent = await response.text();
    return parseICSData(icsContent);
  } catch (error) {
    console.error("Failed to fetch conference schedule:", error);
    return [];
  }
}
