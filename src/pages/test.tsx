import Layout from "@/components/layouts/base";
import type { PageProps } from "@/types";
import type { NextPage } from "next/types";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle="">
      <div>hi</div>
    </Layout>
  );
};

export default Page;
