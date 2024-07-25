import { mq } from "@/themes/settings/breakpoints";
import { brand, info } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import judges from "@/data/judges.json";

interface Judge {
  name: string;
  role: string;
  org: string;
  imagePath: string;
}

const JudgeSection = () => {
  const [currentJudges, setJudges] = useState<Judge[]>([]);

  useEffect(() => {
    setJudges(judges);
  }, []);

  const JudgeIcon: React.FC<{
    imagePath: string;
    name: string;
    org: string;
    role: string;
  }> = ({ imagePath, name, org, role }) => (
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
      <a
        href={"/"}
        target="_blank"
        rel="noreferrer"
        css={css`text-decoration: none; :hover{color: ${brand.JordyBlue};};`}
      >
        <p
          css={css`
            font-size: 0.8rem;
            margin-top:0;
            margin-bottom:0;
            ${mq.laptop}{
              font-size: 1rem;
            };
          `}
        >
          {role}
        </p>
        <p
          css={css`
            font-size: 0.8rem;
            line-height:1;
            margin-top:0;
            ${mq.laptop}{
              font-size: 1rem;
            };
          `}
        >
          {org}
        </p>
      </a>
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
        Mentors
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
      {/* <div>
        <p>
          ❗
          <a
            css={css`:hover {color: ${info.Attention}};`}
            href="https://forms.gle/1wtFYnTRfi4mFnRQ9"
            target="_blank"
            rel="noreferrer"
          >
            We are currently accepting speaker applications
          </a>
          ❗
        </p>
      </div> */}
    </section>
  );
};

export default JudgeSection;
