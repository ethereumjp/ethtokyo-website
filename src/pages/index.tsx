import Layout from "@/components/layouts/base";
// import { CountdownPanel } from "@/components/organisms/Countdown";
import ScheduleSection from "@/components/organisms/Schedule";
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
        <StatementSection />
        <div
          css={css`
            background-image: url(${seikaiha.src});
            background: linear-gradient(0deg, #000, ${brand.Shuiro});
          `}
        >
          <ScheduleSection />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
