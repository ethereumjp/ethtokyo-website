import Layout from "@/components/layouts/base";
import AboutSection from "@/components/organisms/AboutSection";
import ConferenceSection from "@/components/organisms/ConferenceSection";
import HeroSection from "@/components/organisms/HeroSection";
import ScheduleSection from "@/components/organisms/ScheduleSection";
import TicketSection from "@/components/organisms/TicketSection";
import TracksSection from "@/components/organisms/TracksSection";
import VenueSection from "@/components/organisms/VenueSection";
import type { PageProps } from "@/types";
import type { NextPage } from "next";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle="ETHTokyo 2025">
      <HeroSection />
      <AboutSection />
      <TicketSection />
      <ConferenceSection />
      <TracksSection />
      <ScheduleSection />
      <VenueSection />
    </Layout>
  );
};

export default Page;
