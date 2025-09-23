export interface Finalist {
  name: string;
  image: string;
  description: string;
  link: string;
  prize: string;
}

export type FinalistData = {
  [key: string]: Finalist[];
};

export type TrackId =
  | "cypherpunks-anonymous"
  | "counterculture-capital"
  | "actually-intelligent";
export type SponsorTrackId = "PizzaDAO" | "ens" | "JAPAN SMART CHAIN";
export type AllTrackId = TrackId | SponsorTrackId;
