import Layout from "@/components/layouts/base";
import { css } from "@emotion/react";
import { NextPage } from "next";

const HackerGuide: NextPage = () => {
  return (
    <Layout pageTitle="Hacker Guide">
      <div css={css`color:black;`}>
        <h1 css={css`margin:0;`}>Hacker Guide</h1>
        <p>
          Welcome to the ETHTokyo Hacker Guide. Here you will find all the
          information you need to participate in the hackathon.
        </p>
      </div>
    </Layout>
  );
};

export default HackerGuide;
