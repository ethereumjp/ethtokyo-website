import type { FinalistData, TrackId, SponsorTrackId } from "@/types/finalists";

/**
 * 指定されたトラックのファイナリストを取得
 */
export const getTrackFinalists = (
  finalistsData: FinalistData,
  trackId: TrackId,
): Finalist[] => {
  return finalistsData[trackId] || [];
};

/**
 * 指定されたスポンサートラックのファイナリストを取得
 */
export const getSponsorTrackFinalists = (
  finalistsData: FinalistData,
  trackId: SponsorTrackId,
): Finalist[] => {
  return finalistsData[trackId] || [];
};

/**
 * ファイナリストが存在するかチェック
 */
export const hasFinalists = (
  finalistsData: FinalistData,
  trackId: string,
): boolean => {
  const finalists = finalistsData[trackId];
  return finalists && finalists.length > 0;
};

/**
 * スポンサートラックの設定
 */
export const SPONSOR_TRACKS = [
  {
    id: "PizzaDAO" as const,
    title: "PizzaDAO",
    emoji: "🍕",
  },
  {
    id: "ens" as const,
    title: "ENS",
    emoji: "🌐",
  },
  {
    id: "JAPAN SMART CHAIN" as const,
    title: "JAPAN SMART CHAIN",
    emoji: "🏗️",
  },
] as const;

import type { Finalist } from "@/types/finalists";
