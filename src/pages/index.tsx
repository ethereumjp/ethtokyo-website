import Layout from "@/components/layouts/base";
import AboutSection from "@/components/organisms/AboutSection";
import TicketSection from "@/components/organisms/TicketSection";
import ConferenceSection from "@/components/organisms/ConferenceSection";
import HeroSection from "@/components/organisms/HeroSection";
import ScheduleSection from "@/components/organisms/ScheduleSection";
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
      {/* <ConferenceSection /> */}
      <ScheduleSection />
      <TracksSection />
      <VenueSection />
      <TicketSection />
    </Layout>
  );
};

export default Page;
