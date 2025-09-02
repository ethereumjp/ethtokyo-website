import Layout from "@/components/layouts/BaseLayout";
import AboutSection from "@/components/organisms/sections/AboutSection";
import ConferenceSection from "@/components/organisms/sections/ConferenceSection";
import GallerySection from "@/components/organisms/sections/GallerySection";
import HeroSection from "@/components/organisms/sections/HeroSection";
import OrganizersSection from "@/components/organisms/sections/OrganizersSection";
import PartnersSection from "@/components/organisms/sections/PartnersSection";
import ScheduleSection from "@/components/organisms/sections/ScheduleSection";
import SponsorsSection from "@/components/organisms/sections/SponsorsSection";
import TracksSection from "@/components/organisms/sections/TracksSection";
import VenueSection from "@/components/organisms/sections/VenueSection";
import type { PageProps } from "@/types";
import type { NextPage } from "next";
import { useEffect } from "react";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Layout pageTitle="ETHTokyo 2025">
      <HeroSection />
      <AboutSection />
      <ConferenceSection />
      <TracksSection />
      <GallerySection />
      <ScheduleSection />
      <VenueSection />
      <SponsorsSection />
      <PartnersSection />
      <OrganizersSection />
    </Layout>
  );
};

export default Page;
