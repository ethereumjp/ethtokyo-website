import Layout from "@/components/layouts/BaseLayout";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import { FaDivide } from "react-icons/fa";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle="Merch">
      <div
        css={css`justify-content: center; padding: 2.5rem; margin: 8rem auto; background-color: black  ;`}
      >
        <h1 css={css`text-align: center; color:white;`}>
          Official Merch (Crypto only)
        </h1>
        <Image
          src="/2025/images/payto-safe-qr.png"
          alt="Payto Safe QR"
          width={480}
          height={480}
        />
        <div
          css={css`display: flex; align-items: center; justify-content: center; color: white;`}
        >
          <p css={css`text-align: left;`}>ETHTokyo Water bottle</p>
          <div style={{ flex: 1, height: "1px", backgroundColor: "white" }} />
          <p css={css`text-align: right;`}>$35 (USDC / USDT / DAI)</p>
        </div>
        <p css={css`text-align: center; color: white;`}>
          Pay to address on QR code
        </p>
        <p css={css`text-align: center; color: white;`}>
          <code css={css``}>0x8F559B03d78509d8cda8acA66Ee4a965F57fD491</code>
        </p>
      </div>
    </Layout>
  );
};

export default Page;
