export interface Event {
  uid: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  url: string;
  speakers: string;
  startDateTime?: Date;
}

export interface EventItem {
  time: string;
  title: string;
  speakers?: string;
  duration?: string;
  id?: string;
  location?: string;
  url?: string;
}

export interface ScheduleCardProps {
  title: string;
  date: string;
  location: string;
  address: string;
  mapUrl?: string | null;
  events: EventItem[];
  hasDetailedSchedule?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  isLoading?: boolean;
}

export type ScheduleType = "conference" | "hackathon";

export interface ExpandedSchedules {
  conference: boolean;
  hackathon: boolean;
}
