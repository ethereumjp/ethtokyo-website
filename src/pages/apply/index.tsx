import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { NextPage } from "next";
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
          ETHTokyo2024への参加登録方法は、Ethereumスマートコントラクトの中に隠されています。
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
          <span css={css`color: ${brand.Shuiro}; word-wrap: break-word;`}>
            0x4C80b90BeECE732C6ec4EdeE0298799d67eB48cD
          </span>
          です。
        </li>
        <li>
          参加登録フォームのURLを見つけたら、自身のプロフィールを提出してください。
        </li>
        <li>
          プロフィールを提出したハッカーへ、当日の参加証となるNFTを送付します。
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
          To participate as a hacker in ETHTokyo, you must find the hidden
          registration form inside an Ethereum smart contract.
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
          <span css={css`color: ${brand.Shuiro}; word-wrap: break-word;`}>
            0x4C80b90BeECE732C6ec4EdeE0298799d67eB48cD
          </span>
          .
        </li>
        <li>
          Once you discover the registration form link, head to the URL submit
          your profile.
        </li>
        <li>
          We will airdrop an NFT to those who have successfully submitted the
          registration form. The NFT will act as your registration pass.
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
