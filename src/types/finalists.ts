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
export type SponsorTrackId = "pizzadao" | "ens" | "jsc";
export type AllTrackId = TrackId | SponsorTrackId;
