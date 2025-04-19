import Layout from "@/components/layouts/base";
import type { PageProps } from "@/types";
import type { NextPage } from "next";
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
