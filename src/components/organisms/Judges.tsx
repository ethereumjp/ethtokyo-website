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
    org: string;
    orgUrl: string;
    role: string;
  }> = ({ imagePath, name, org, orgUrl, role }) => (
    <div>
      <a
        href={"/"}
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
        css={css`margin-top:0; margin-bottom:0; font-size: 0.8rem; line-height:1;
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
          align-items: center;
          display: flex;
          flex-flow: row wrap;
          gap: 2rem;
          justify-content: center;

          ${mq.laptop} {
            gap: 4rem;
          }
        `}
      >
        {currentJudges.map((judges) => (
          <JudgeIcon key={judges.name} {...judges} />
        ))}
      </div>
    </section>
  );
};

export default JudgeSection;
