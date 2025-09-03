import type { EventItem } from "@/types/schedule";

export const HACKATHON_EVENTS: EventItem[] = [
  { time: "Day 1 - 10:00", title: "Hackathon Starts & Team Formation" },
  { time: "Day 1 - 12:00", title: "Lunch" },
  { time: "Day 1 - 20:00", title: "Midway Check-in" },
  { time: "Day 2", title: "Development Continues" },
  { time: "Day 3 - 15:00", title: "Coding Ends" },
  { time: "Day 3 - 16:00", title: "Presentations" },
  { time: "Day 3 - 18:00", title: "Awards & Closing" },
];

// TODO: HackathonのICSデータが準備できたら、この値をtrueに変更して「View Schedule」表示に戻す
export const HAS_HACKATHON_SCHEDULE = false;

export const SIDE_EVENTS_CALENDAR_URL =
  "https://lu.ma/embed/calendar/cal-FMaPKHYZLXA2VzT/events";
export const TICKET_URL = "https://app.moongate.id/e/ethtokyo2025";
