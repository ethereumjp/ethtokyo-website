import type {
  AirportInfo,
  HotelCategory,
  TransportOption,
} from "@/types/venue";
import { MdDirectionsBike, MdLocalTaxi } from "react-icons/md";

export const VENUE_CONSTANTS = {
  GRID_BREAKPOINT: "tablet",
  IMAGE_HEIGHT: 400,
  MAP_HEIGHT: 400,
  DESCRIPTION_HEIGHT: 375,
  MIN_CARD_HEIGHT: 300,
} as const;

export const AIRPORTS: AirportInfo[] = [
  {
    name: "Narita International Airport",
    code: "NRT",
    travelTime: "60-90 minutes to central Tokyo",
    transportOptions: [
      { name: "JR Narita Express", time: "~60 min", price: "¥3,070" },
      { name: "Keisei Skyliner", time: "~40 min", price: "¥2,520" },
      { name: "Limousine Bus", time: "~80-120 min", price: "¥3,200" },
    ],
  },
  {
    name: "Haneda International Airport",
    code: "HND",
    travelTime: "30-45 minutes to central Tokyo",
    transportOptions: [
      { name: "Tokyo Monorail", time: "~30 min", price: "¥500" },
      { name: "Keikyu Line", time: "~30 min", price: "¥450" },
      { name: "Limousine Bus", time: "~30-60 min", price: "¥1,200" },
    ],
  },
];

export const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    icon: MdDirectionsBike,
    title: "Scooters & Bikes",
    description:
      "Depending on the area, you will also find scooters and bikes that you can grab around the city, using apps like LUUP and LIME. You should take precaution to stay safe since the streets in Tokyo are generally narrow and crowded.",
    links: [
      {
        name: "LUUP",
        url: "https://play.google.com/store/apps/details?id=sc.luup.luup",
      },
      {
        name: "LIME",
        url: "https://play.google.com/store/apps/details?id=com.limebike",
      },
    ],
  },
  {
    icon: MdLocalTaxi,
    title: "Taxis",
    description: "Taxis are available through apps like GO and Uber.",
    links: [
      {
        name: "GO",
        url: "https://play.google.com/store/apps/details?id=com.dena.automotive.taxibell",
      },
      {
        name: "Uber",
        url: "https://play.google.com/store/apps/details?id=com.ubercab",
      },
    ],
  },
];

export const HOTEL_CATEGORIES: HotelCategory[] = [
  {
    title: "Recommended Hotels Near Venue",
    hotels: [
      {
        name: "Hotel A",
        distance: "5-min walk from venue",
        onClick: () => console.log("Hotel A selected"),
      },
      {
        name: "Hotel B",
        distance: "10-min walk from venue",
        onClick: () => console.log("Hotel B selected"),
      },
      {
        name: "Hotel C",
        distance: "1 station from nearest station",
        onClick: () => console.log("Hotel C selected"),
      },
    ],
  },
  {
    title: "Budget-Friendly Options",
    hotels: [
      {
        name: "Hostel X",
        distance: "about ¥5,000 per night",
        onClick: () => console.log("Hostel X selected"),
      },
      {
        name: "Capsule Hotel Y",
        distance: "about ¥3,000 per night",
        onClick: () => console.log("Capsule Hotel Y selected"),
      },
      {
        name: "Guesthouse Z",
        distance: "about ¥4,000 per night",
        onClick: () => console.log("Guesthouse Z selected"),
      },
    ],
  },
];

export const EXTERNAL_LINKS = {
  NARITA_AIRPORT: "https://maps.app.goo.gl/pEzYqQj1HuTY3ctD7",
  HANEDA_AIRPORT: "https://maps.app.goo.gl/C1rgT7mBmtXzULy68",
  SUICA: "https://www.jreast.co.jp/multi/en/pass/suica.html",
  PASMO: "https://www.pasmo.co.jp/visitors/en/",
  BOOKING_COM: "https://www.booking.com",
  AGODA: "https://www.agoda.com",
} as const;
