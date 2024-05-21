import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import { type NextPage } from "next";
import Link from "next/link";

const HackerChallenge: NextPage = () => {
  return (
    <div
      css={css`
        align-items: center;
        background-color: #000000;
        color: #00FF00;
        font-family: Courier, monospace;
        font-size: 1.2rem;
        height: 100vh;
        justify-content: center;
      `}
    >
      <p css={css`font-size: 2rem;`}>
        （日本語） ETHTokyo2024 ハッカー登録手順
      </p>
      <ol
        css={css`
          li {
            margin-bottom: 0.5rem;
          }
        `}
      >
        <li>
          ETHTokyo2024へのチケット購入リンクは、Ethereumスマートコントラクトの中に隠されています。
        </li>
        <li>
          コントラクトは{" "}
          <a
            href="https://sepolia.etherscan.io/"
            css={css`
              color: inherit;
              &:hover {
                color: white;
              }
            `}
          >
            Sepoliaテストネット
          </a>{" "}
          にデプロイされており、アドレスは{" "}
          <span css={css`color: ${brand.Shuiro};`}>
            0xd367775be28552cBFA989b746A662F69E3380121
          </span>
          です。
        </li>
        <li>
          チケット購入ページのURLを見つけたら、そのリンクにアクセスすることで、入場チケットを購入できます。
        </li>
      </ol>

      <p css={css`font-size: 2rem;`}>
        (English) ETHTokyo2024 hacker registration instructions
      </p>
      <ol
        css={css`
          li {
            margin-bottom: 0.5rem;
          }
        `}
      >
        <li>
          The link to the <em>ticket purchase page</em> is hidden inside an
          Ethereum smart contract.
        </li>
        <li>
          The contract is deployed on{" "}
          <a
            href="https://sepolia.etherscan.io/"
            css={css`
              color: inherit;
              &:hover {
                color: white;
              }
            `}
          >
            Sepolia testnet
          </a>
          , at{" "}
          <span css={css`color: ${brand.Shuiro};`}>
            0xd367775be28552cBFA989b746A662F69E3380121
          </span>
          .
        </li>
        <li>
          Once you find out the <em>ticket purchase page</em> URL, head to the
          link to purchase your admissions ticket.
        </li>
      </ol>

      <Link
        href="/"
        css={css`
              color: inherit;
              &:hover {
                color: white;
              }
            `}
      >
        Go back
      </Link>
    </div>
  );
};

export default HackerChallenge;
