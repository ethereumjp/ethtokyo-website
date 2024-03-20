import Layout from "@/components/layouts/base";
import ScheduleSection from "@/components/organisms/Schedule";
import StatementSection from "@/components/organisms/Statement";
import { brand, neutral } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import { NextPage } from "next";
import Image from "next/image";
import topHero from "public/images/hero_top.jpg";
import seikaiha from "public/images/seikaiha.png";
import ETHTokyoLogo from "public/logo/ETHTokyoLogo.png";

import { useEffect, useState } from "react";

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
      z-index: -1;
    `;

    const CountdownPanel = () => {
      const panelWrapperStyle = css`
        display: flex;
        justify-content: space-evenly;
        padding: 4rem;
        text-align: center;
      `;

      const numberPanelStyle = css`
        background-color: ${brand.Miyabi};
        background-color: #552266BF;
        border-radius: 1rem;
        color: ${neutral.White};
        font-size: 8rem;
        font-weight: 600;
        padding: 0 1rem;
      `;

      const countDown = (target: number, now: number) => {
        const diffTime = target - now;

        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        return [days, hours, minutes, seconds];
      };

      const [now, setNow] = useState(new Date().getTime());
      useEffect(() => {
        const secTimer = setInterval(() => {
          setNow(new Date().getTime());
        }, 1000);

        return () => clearInterval(secTimer);
      }, []);

      const eventDate = new Date("Aug 23, 2024").getTime();
      const [days, hrs, mins, secs] = countDown(eventDate, now);

      return (
        <div css={panelWrapperStyle}>
          <div css={numberPanelStyle}>
            {days.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
            <hr
              css={css`border: 0; border-bottom: 1px solid white; height: 1px; margin:0;`}
            />
            <p css={css`font-size: 2rem; font-weight: 400; margin:1rem;`}>
              days
            </p>
          </div>
          <div css={numberPanelStyle}>
            {hrs.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
            <hr
              css={css`border: 0; border-bottom: 1px solid white; height: 1px; margin:0;`}
            />
            <p css={css`font-size: 2rem; font-weight: 400; margin:1rem;`}>
              hours
            </p>
          </div>
          <div css={numberPanelStyle}>
            {mins.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
            <hr
              css={css`border: 0; border-bottom: 1px solid white; height: 1px; margin:0;`}
            />
            <p css={css`font-size: 2rem; font-weight: 400; margin:1rem;`}>
              minutes
            </p>
          </div>
          <div css={numberPanelStyle}>
            {secs.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
            <hr
              css={css`border: 0; border-bottom: 1px solid white; height: 1px; margin:0;`}
            />
            <p css={css`font-size: 2rem; font-weight: 400; margin:1rem;`}>
              seconds
            </p>
          </div>
        </div>
      );
    };

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
        <CountdownPanel />
      </section>
    );
  };

  return (
    <Layout pageTitle="">
      <div>
        <TopSection />
        <StatementSection />
        <ScheduleSection />
      </div>
    </Layout>
  );
};

export default Page;
