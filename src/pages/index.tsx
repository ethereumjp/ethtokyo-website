import Layout from "@/components/layouts/base";
import ScheduleSection from "@/components/organisms/Schedule";
import StatementSection from "@/components/organisms/Statement";
import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import topHero from "public/images/hero-top.png";
import ETHTokyoLogo from "public/logo/ETHTokyoLogo.png";
import seikaiha from "public/seikaiha.png";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  const TriangleJpWaveBackground = ({ children }: ComponentProps) => {
    const jpWaveStyle = css`
      background-color: ${brand.Miyabi};
      background-image: url(${seikaiha.src});
      background-repeat: repeat;
      clip-path: polygon(-30% 0, 130% 0, 50% 65vh);
      height: 65%;
      text-align: center;

      ${mq.laptop} {
        clip-path: polygon(20% 0, 80% 0, 50% 65vh);
      }
    `;
    return <div css={jpWaveStyle}>{children}</div>;
  };

  const EventLogo = () => {
    return (
      <Image
        src={ETHTokyoLogo}
        alt="ETHTokyo logo"
        css={css`
          height: auto;
          max-width: 240px;
          width: 50vw;

          ${mq.laptop} {
            padding: 1rem
          }
        `}
      />
    );
  };

  const TopSection = () => {
    const topBackgroundStyle = css`
      background-image: url(${topHero.src});
      background-position: top;
      background-size: cover;
      height: 100vh;
      width: 100%;
      z-index: -1;
    `;

    return (
      <section id="top" css={topBackgroundStyle}>
        <TriangleJpWaveBackground>
          <p css={css`line-height: 0; margin: 0; padding: 1.5rem 0;`}>
            Ethereum Community Hackathon
          </p>

          <EventLogo />
          <div
            css={css`
              ${mq.desktop} {
                padding: 2rem 0;
              }
            `}
          >
            <h1>Aug 23-26, 2024</h1>
            <h1>Tokyo, Japan</h1>
          </div>
        </TriangleJpWaveBackground>
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
