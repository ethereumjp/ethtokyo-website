import Layout from "@/components/layouts/base";
import AboutSection from "@/components/organisms/AboutSection";
import ArchiveSection from "@/components/organisms/ArchiveSection";
import BlogSection from "@/components/organisms/BlogSection";
import MentorSessionsSection from "@/components/organisms/MentorSessionsSection";
import FeaturedSpeakersSection from "@/components/organisms/FeaturedSpeakersSection";
import WorkshopSection from "@/components/organisms/WorkshopSection";
import HeroSection from "@/components/organisms/HeroSection";
import ScheduleSection from "@/components/organisms/ScheduleSection";
import SponsorsSection from "@/components/organisms/SponsorsSection";
import TracksSection from "@/components/organisms/TracksSection";
import VenueSection from "@/components/organisms/VenueSection";
import type { PageProps } from "@/types";
import type { NextPage } from "next";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle="ETHTokyo 2025">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <TracksSection />
      <FeaturedSpeakersSection />
      <MentorSessionsSection />
      <WorkshopSection />
      <ArchiveSection />
      <BlogSection />
      <SponsorsSection />
      <VenueSection />
    </Layout>
  );
};

export default Page;
