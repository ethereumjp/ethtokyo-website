import Layout from "@/components/layouts/base";
import { CountdownPanel } from "@/components/organisms/Countdown";
import ScheduleSection from "@/components/organisms/Schedule";
import StatementSection from "@/components/organisms/Statement";
import SupportersSection from "@/components/organisms/Supporters";
import { brand } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import { NextPage } from "next";
import Image from "next/image";
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
        <CountdownPanel />
      </section>
    );
  };

  return (
    <Layout pageTitle="">
      <div>
        <TopSection />
        <StatementSection />
        <SupportersSection />
        <ScheduleSection />
      </div>
    </Layout>
  );
};

export default Page;
