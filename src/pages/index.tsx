import Layout from "@/components/layouts/base";
// import { CountdownPanel } from "@/components/organisms/Countdown";
import ScheduleSection from "@/components/organisms/Schedule";
import { Socials } from "@/components/organisms/Socials";
import StatementSection from "@/components/organisms/Statement";
import { brand } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import seikaiha from "public/images/seikaiha.png";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle="">
      <div>
        {/* <StatementSection /> replace with new design */}
        <div css={css``}>
          <ScheduleSection />
        </div>
      </div>
      {/* <Socials /> */}
    </Layout>
  );
};

export default Page;
