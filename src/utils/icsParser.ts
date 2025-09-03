export interface Event {
  uid: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  url: string;
  startDateTime?: Date; // ソート用の開始時刻
}

export function parseICSData(icsContent: string): Event[] {
  console.log("Raw ICS content:", icsContent);

  const events: Event[] = [];
  const lines = icsContent.split("\n");

  let currentEvent: Partial<Event> = {};
  let inEvent = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "BEGIN:VEVENT") {
      inEvent = true;
      currentEvent = {};
    } else if (line === "END:VEVENT") {
      if (currentEvent.uid && currentEvent.title) {
        events.push(currentEvent as Event);
      }
      inEvent = false;
      currentEvent = {};
    } else if (inEvent) {
      if (line.startsWith("UID:")) {
        currentEvent.uid = line.substring(4);
      } else if (line.startsWith("SUMMARY:")) {
        currentEvent.title = line.substring(8);
      } else if (line.startsWith("DESCRIPTION:")) {
        currentEvent.description = line.substring(12);
      } else if (line.startsWith("DTSTART;TZID=JST:")) {
        const timeStr = line.substring(18);
        console.log("Raw DTSTART line:", line);
        console.log("Extracted timeStr:", timeStr);
        currentEvent.startTime = formatTime(timeStr);
        // ソート用の開始時刻を保存
        currentEvent.startDateTime = parseDateTime(timeStr);
        console.log(
          "Parsed start time:",
          timeStr,
          "->",
          currentEvent.startTime,
        );
      } else if (line.startsWith("DTEND;TZID=JST:")) {
        const timeStr = line.substring(16);
        console.log("Raw DTEND line:", line);
        console.log("Extracted timeStr:", timeStr);
        currentEvent.endTime = formatTime(timeStr);
        console.log("Parsed end time:", timeStr, "->", currentEvent.endTime);
      } else if (line.startsWith("LOCATION:")) {
        currentEvent.location = line.substring(9);
      } else if (line.startsWith("URL:")) {
        currentEvent.url = line.substring(4);
      }
    }
  }

  console.log("Parsed events:", events);

  // 開始時刻でソート（より正確なソート）
  const sortedEvents = events.sort((a, b) => {
    if (a.startDateTime && b.startDateTime) {
      return a.startDateTime.getTime() - b.startDateTime.getTime();
    }
    return a.startTime.localeCompare(b.startTime);
  });

  console.log("Sorted events:", sortedEvents);
  return sortedEvents;
}

function formatTime(timeStr: string): string {
  console.log("formatTime input:", timeStr);

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
        console.log("formatTime result:", result);
        return result;
      }
      console.warn("Invalid time values:", hour, minute);
      return timeStr;
    }
  }

  console.warn("Invalid time string format:", timeStr);
  return timeStr;
}

function parseDateTime(dateTimeStr: string): Date | undefined {
  console.log("parseDateTime input:", dateTimeStr);

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

      console.log("Parsed date components:", {
        year,
        month,
        day,
        hour,
        minute,
        second,
      });

      // 時間の妥当性チェック
      if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
        const date = new Date(year, month, day, hour, minute, second);
        console.log("Created Date object:", date);
        return date;
      }
      console.warn("Invalid time values:", hour, minute);
      return undefined;
    }
  }

  console.warn("Invalid dateTime string format:", dateTimeStr);
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
