import { useState, useEffect, useCallback } from "react";
import type { Event, EventItem } from "@/types/schedule";
import { fetchConferenceSchedule } from "@/utils/icsParser";

export const useSchedule = () => {
  const [conferenceEvents, setConferenceEvents] = useState<EventItem[]>([]);
  const [isLoadingConference, setIsLoadingConference] = useState(true);
  const [hasDetailedSchedule, setHasDetailedSchedule] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateDuration = useCallback(
    (startTime: string, endTime: string): string => {
      // 時刻を分に変換する関数
      const timeToMinutes = (timeStr: string): number => {
        const [hours, minutes] = timeStr.split(":").map(Number);
        return hours * 60 + minutes;
      };

      const startMinutes = timeToMinutes(startTime);
      const endMinutes = timeToMinutes(endTime);
      const durationMinutes = endMinutes - startMinutes;

      return `${durationMinutes}min`;
    },
    [],
  );

  const convertEventToEventItem = useCallback(
    (event: Event): EventItem => ({
      time: `${event.startTime}–${event.endTime}`,
      title: event.title,
      speakers: event.speakers,
      duration: calculateDuration(event.startTime, event.endTime),
      id: event.uid,
      location: event.location,
      url: event.url,
    }),
    [calculateDuration],
  );

  const loadConferenceSchedule = useCallback(async () => {
    try {
      setError(null);
      setIsLoadingConference(true);
      const events = await fetchConferenceSchedule();
      const convertedEvents = events.map(convertEventToEventItem);
      setConferenceEvents(convertedEvents);
      setHasDetailedSchedule(events.length > 0);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to load conference schedule";
      setError(errorMessage);
      console.error("Failed to load conference schedule:", err);
    } finally {
      setIsLoadingConference(false);
    }
  }, [convertEventToEventItem]);

  useEffect(() => {
    loadConferenceSchedule();
  }, [loadConferenceSchedule]);

  return {
    conferenceEvents,
    isLoadingConference,
    hasDetailedSchedule,
    error,
    reloadSchedule: loadConferenceSchedule,
  };
};
