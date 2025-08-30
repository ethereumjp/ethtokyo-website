import type { FC } from "react";
import type { TransportOption } from "@/types/venue";
import {
  linkStyle,
  transportOptionsStyle,
  transportOptionStyle,
  transportIconStyle,
  transportTitleStyle,
} from "@/themes/styles/venue";

interface TransportOptionsProps {
  options: TransportOption[];
}

const TransportOptions: FC<TransportOptionsProps> = ({ options }) => {
  return (
    <div>
      <p>
        Tokyo is a city optimized for public transportation. Most of the times,
        the quickest and easiest way to getting from A to B is by trains and
        buses. If you are staying longer than just a few days, you might want to
        consider purchasing a{" "}
        <a
          href="https://www.jreast.co.jp/multi/en/pass/suica.html"
          target="_blank"
          rel="noreferrer"
          css={linkStyle}
        >
          SUICA
        </a>{" "}
        or{" "}
        <a
          href="https://www.pasmo.co.jp/visitors/en/"
          target="_blank"
          rel="noreferrer"
          css={linkStyle}
        >
          PASMO
        </a>{" "}
        card at for the best experience, which can be obtained at pretty much
        any train station. You can use these cards to ride the buses also.
      </p>

      <div css={transportOptionsStyle}>
        {options.map((option) => {
          const IconComponent = option.icon;
          return (
            <div key={option.title} css={transportOptionStyle}>
              <IconComponent size={24} />
              <div>
                <h4 css={transportTitleStyle}>{option.title}</h4>
                <p>
                  {option.description
                    .split(/(?=LUUP|LIME|GO|Uber)/)
                    .map((part, partIndex) => {
                      if (partIndex === 0) return part;

                      const linkMatch = part.match(/^(LUUP|LIME|GO|Uber)/);
                      if (linkMatch) {
                        const linkName = linkMatch[1];
                        const link = option.links?.find(
                          (l) => l.name === linkName,
                        );
                        if (link) {
                          return (
                            <span key={`${option.title}-${partIndex}`}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                css={linkStyle}
                              >
                                {linkName}
                              </a>
                              {part.substring(linkName.length)}
                            </span>
                          );
                        }
                      }
                      return part;
                    })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransportOptions;
