import judges from "@/data/judges.json";
import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import type { Judge } from "@/types";
import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const JudgeSection = () => {
  const [currentJudges, setJudges] = useState<Judge[]>([]);

  useEffect(() => {
    setJudges(judges);
  }, []);

  const JudgeIcon: React.FC<{
    imagePath: string;
    name: string;
    linkToOnlinePresence: string;
    org: string;
    orgUrl: string;
    role: string;
  }> = ({ imagePath, name, linkToOnlinePresence, org, orgUrl, role }) => (
    <div>
      <a
        href={linkToOnlinePresence}
        target="_blank"
        rel="noreferrer"
        css={css`text-decoration: none; :hover{color: ${brand.Shuiro};};`}
      >
        <Image
          src={imagePath}
          alt={name}
          width={96}
          height={96}
          css={css`
          border-radius: 50%;
            height: auto;
            width: 96px;

            ${mq.laptop}{
              width: 144px;
            }
          `}
        />
        <p
          css={css`
            font-size: 0.8rem;
            margin-bottom:0;
            ${mq.laptop}{
              font-size: 1rem;
            };
          `}
        >
          {name}
        </p>
      </a>
      <p
        css={css` font-size: 0.8rem; line-height:1; margin-bottom:0;margin-top:0;
            ${mq.laptop}{
              font-size: 1rem;
            };
          `}
      >
        <a
          css={css`text-decoration: none; :hover{color: ${brand.JordyBlue};};`}
          href={orgUrl}
          target="_blank"
          rel="noreferrer"
        >
          {role}, {org}
        </a>
      </p>
    </div>
  );

  return (
    <section
      id="speakers"
      css={css`
        background-color: ${brand.Miyabi};
        padding: 1rem;
        text-align: center;

        ${mq.laptop}{
          padding: 1rem 2rem;
        }
      `}
    >
      <h2
        css={css`
          font-size: 2rem;
          font-weight: 400;
          margin: 4rem 0 2rem;
          ${mq.laptop} {
            font-size: 3rem;
          }`}
      >
        Judges
      </h2>
      <div
        css={css`
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          justify-items: center;
          margin: 0 auto;
          max-width: 1200px;

          ${mq.tablet} {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }

          ${mq.laptop} {
            gap: 4rem;
          }
        `}
      >
        {currentJudges.map((judge) => (
          <JudgeIcon key={judge.name} {...judge} />
        ))}
      </div>
    </section>
  );
};

export default JudgeSection;
