import Layout from "@/components/layouts/base";
import { CountdownPanel } from "@/components/organisms/Countdown";
import Header from "@/components/organisms/Header";
import JudgesSection from "@/components/organisms/Judges";
import MentorsSection from "@/components/organisms/Mentors";
import ScheduleSection from "@/components/organisms/Schedule";
import SpeakersSection from "@/components/organisms/Speakers";
import StatementSection from "@/components/organisms/Statement";
import SupportersSection from "@/components/organisms/Supporters";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import topHero from "public/images/hero_top.jpg";
import seikaiha from "public/images/seikaiha.png";
import ETHTokyoLogo from "public/logo/ETHTokyoLogo.png";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  const TriangleJpWaveBackground = ({ children }: ComponentProps) => {
    const jpWaveBackgroundStyle = css`
      background: linear-gradient(
        to right,
        #773E6B 50%,
        #773E6B 50%,
        ${brand.Miyabi} 50%,
        ${brand.Miyabi} 100%
      );
      clip-path: polygon(calc(50% - 380px) 0, calc(50% + 380px) 0, 50% 500px);
      height: 500px;
      text-align: center;
    `;

    return (
      <div css={jpWaveBackgroundStyle}>
        <div
          css={css`
            background: url(${seikaiha.src}), repeat;
            height: 100%;
          `}
        >
          {children}
        </div>
      </div>
    );
  };

  const EventLogo = () => {
    return (
      <Image
        src={ETHTokyoLogo}
        alt="ETHTokyo logo"
        css={css`
          height: auto;
          max-width: 256px;
          padding-left: 11px;
          padding-top: 1rem;
        `}
      />
    );
  };

  const TopSection = () => {
    const topBackgroundStyle = css`
      background-image: url(${topHero.src});
      background-position: top 4rem center;
      background-size: cover;
      height: 100vh;
      width: 100%;
    `;

    return (
      <section id="top" css={topBackgroundStyle}>
        <TriangleJpWaveBackground>
          <p css={css`line-height: 0; margin: 0; padding: 1.5rem 0;`}>
            Ethereum Community Hackathon
          </p>

          <EventLogo />
          <div css={css`padding: 1rem 0;`}>
            <h1>Aug 23-26, 2024</h1>
            <h1>Tokyo, Japan</h1>
          </div>
        </TriangleJpWaveBackground>
        {/* <CountdownPanel /> */}
      </section>
    );
  };

  const LinkedButton = (props: {
    href: string;
    text: string;
    color: string;
    disabled?: boolean;
  }) => (
    <Link
      href={props.disabled ? "#" : props.href}
      css={css`text-decoration: none;`}
    >
      <button
        type="button"
        css={css`
          align-items: center;
          background-color: ${props.disabled ? neutral.Grey4 : props.color};
          border: none;
          border-radius: 12px;
          color: ${neutral.White};
          cursor: pointer;
          display: flex;
          flex-direction: column;
          font-size: 1.5rem;
          height: 100%;
          justify-content: center;
          margin: 0;
          padding: 0.5rem 1rem;
          transition: background-color 0.3s ease;
          width: 100%;

          ${mq.tablet}{
            font-size: 2rem;
            padding: 1rem 2rem;
          }

          &:hover {
            background-color: ${props.disabled ? neutral.Grey3 : themeLight.PrimaryHover};
          }
        `}
        disabled={props.disabled}
      >
        <span>{props.text}</span>
        {props.disabled && <span css={css`font-size: 1rem;`}>[SOLD OUT]</span>}
      </button>
    </Link>
  );

  const GetTicketsSection = () => (
    <div
      css={css`background-color:black; background-image: url(${seikaiha.src}); padding: 4rem; text-align: center;`}
    >
      <h2
        css={css` font-size: 3rem; font-weight:600; line-height: 1.2; margin: 0 0 2rem;`}
        id="schedule"
      >
        Event Schedule
      </h2>
      <div
        css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-bottom: 4rem;

        ${mq.laptop} {
          flex-direction: row;
          justify-content: center;
        }
      `}
      >
        <a
          href="/timetable/DAY1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
          color: ${brand.JordyBlue};
          font-size: 2rem;
          padding: 0 1rem;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `}
        >
          Day 1 (Hackathon)
        </a>
        <a
          href="/timetable/DAY2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
          color: ${brand.JordyBlue};
          font-size: 2rem;
          padding: 0 1rem;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `}
        >
          Day 2 (Hackathon)
        </a>
        <a
          href="/timetable/DAY3.pdf"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
          color: ${brand.JordyBlue};
          font-size: 2rem;
          padding: 0 1rem;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `}
        >
          Day 3 (Hackathon)
        </a>
        <a
          href="/timetable/DAY4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
          color: ${brand.JordyBlue};
          font-size: 2rem;
          padding: 0 1rem;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `}
        >
          Day 4 (Conference)
        </a>
      </div>
      <h2
        css={css` font-size: 3rem; font-weight:600; line-height: 1.2; margin: 0 0 2rem;`}
        id="registration"
      >
        Participate
      </h2>
      <br />
      <div
        css={css`
          align-items: stretch;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          width: fit-content;

          ${mq.laptop} {
            flex-direction: row;
          }

          & > *:not(:last-child) {
            margin-bottom: 1.5rem;
            ${mq.laptop} {
              margin-bottom: 0;
              margin-right: 2rem;
            }
          }
        `}
      >
        <LinkedButton
          href="https://app.moongate.id/e/eth-tokyo-2024"
          text="Volunteer pass"
          color="green"
          disabled
        />
        <LinkedButton
          href="/apply"
          text="Hackathon registration"
          color={brand.BluePantone}
          disabled
        />
        <LinkedButton
          href="https://app.moongate.id/e/eth-tokyo-2024"
          text="Conference tickets"
          color="brown"
        />
      </div>
    </div>
  );

  return (
    <Layout pageTitle="">
      <Header />
      <div>
        <TopSection />
        <StatementSection />
        <GetTicketsSection />
        <SpeakersSection />
        <MentorsSection />
        <JudgesSection />
        <SupportersSection />
        <ScheduleSection />
      </div>
    </Layout>
  );
};

export default Page;
