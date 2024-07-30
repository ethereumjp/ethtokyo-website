import mentors from "@/data/mentors.json";
import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import type { Mentor } from "@/types";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const MentorsSection = () => {
  const [currentMentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    setMentors(mentors);
  }, []);
  const MentorIcon: React.FC<{
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
        <img
          src={imagePath}
          alt={name}
          width={96}
          height={96}
          css={css`
            border-radius: 50%;
            height: auto;
            width: 96px;

            ${mq.laptop}{
              width: 120px;
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
            margin-bottom:0;
            margin-top:0;
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
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          margin: 0 auto;
          max-width: 1500px;

          ${mq.tablet} {
            gap: 2.5rem;
          }

          ${mq.laptop} {
            gap: 3rem;
          }
        `}
      >
        {currentMentors.map((mentor) => (
          <div
            key={mentor.name}
            css={css`
              flex: 0 0 150px;
              ${mq.tablet} {
                flex: 0 0 160px;
              }
            `}
          >
            <MentorIcon {...mentor} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MentorsSection;
