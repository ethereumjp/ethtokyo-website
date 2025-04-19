import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import { brand, themeLight } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import type { FC } from "react";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import ScheduleSection from "@/components/organisms/ScheduleSection";
import TracksSection from "@/components/organisms/TracksSection";
import FeaturedSpeakersSection from "@/components/organisms/FeaturedSpeakersSection";
import FeaturedSessionsSection from "@/components/organisms/FeaturedSessionsSection";
import ArchiveSection from "@/components/organisms/ArchiveSection";
import BlogSection from "@/components/organisms/BlogSection";
import SponsorsSection from "@/components/organisms/SponsorsSection";
import VenueSection from "@/components/organisms/VenueSection";

// テクニカルグラフィック
const TechGraphic: FC = () => {
  // コンポーネントの実装がないようですが、残しておきます
  return null;
};

// セクション共通スタイル
const sectionStyle = css`
  padding: 4rem 2rem;
  background: ${themeLight.Background};
`;

const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const headingStyle = css`
  text-align: center;
  color: ${brand.Secondary};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const multiGridStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const cardStyle = css`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  flex: 1 1 220px;
  max-width: 280px;
  text-align: center;
`;

const cardHeadingStyle = css`
  margin: 0;
  font-size: 1.5rem;
  color: ${brand.Secondary};
`;

const cardParagraphStyle = css`
  margin: 0.5rem 0 0;
  color: #777;
`;

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle="ETHTokyo 2025">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <TracksSection />
      <FeaturedSpeakersSection />
      <FeaturedSessionsSection />
      <ArchiveSection />
      <BlogSection />
      <SponsorsSection />
      <VenueSection />
    </Layout>
  );
};

export default Page;
