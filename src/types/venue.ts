export type TabType = "venue" | "travel" | "accommodation";

export type ExpandableItem = "airports" | "transport";

export interface VenueInfo {
  title: string;
  description: string;
  address: string;
  date: string;
  nearbyStations: string[];
  mapEmbedUrl: string;
  imageUrl?: string;
  imageAlt?: string;
  hasImageDescription?: boolean;
  imageDescription?: {
    title: string;
    content: string[];
  };
}

export interface AirportInfo {
  name: string;
  code: string;
  travelTime: string;
  transportOptions: {
    name: string;
    time: string;
    price: string;
  }[];
}

export interface TransportOption {
  icon: React.ComponentType<{ size?: number; css?: React.CSSProperties }>;
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
}

export interface HotelInfo {
  name: string;
  distance: string;
  price?: string;
  onClick: () => void;
}

export interface HotelCategory {
  title: string;
  hotels: HotelInfo[];
}

export interface VenueSectionState {
  activeTab: TabType;
  expandedItems: Record<ExpandableItem, boolean>;
  isImageDescriptionVisible: boolean;
}
