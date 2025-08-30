import { EXTERNAL_LINKS } from "@/constants/venue";
import {
  airportCardStyle,
  airportInfoStyle,
  linkStyle,
  transportListStyle,
} from "@/themes/styles/venue";
import type { AirportInfo } from "@/types/venue";
import type { FC } from "react";

interface AirportInfoProps {
  airports: AirportInfo[];
}

const AirportInfoComponent: FC<AirportInfoProps> = ({ airports }) => {
  return (
    <div>
      <p>
        Tokyo has two airports:{" "}
        <a
          href={EXTERNAL_LINKS.NARITA_AIRPORT}
          target="_blank"
          rel="noreferrer"
          css={linkStyle}
        >
          Narita International Airport (NRT)
        </a>{" "}
        and{" "}
        <a
          href={EXTERNAL_LINKS.HANEDA_AIRPORT}
          target="_blank"
          rel="noreferrer"
          css={linkStyle}
        >
          Haneda International Airport (HND)
        </a>
        . They are both well connected with the railway system.
      </p>

      <div css={airportInfoStyle}>
        {airports.map((airport) => (
          <div key={airport.code} css={airportCardStyle}>
            <h4>
              {airport.name} ({airport.code})
            </h4>
            <p>{airport.travelTime}</p>
            <ul css={transportListStyle}>
              {airport.transportOptions.map((option) => (
                <li key={`${airport.code}-${option.name}`}>
                  {option.name}: {option.time}, {option.price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirportInfoComponent;
