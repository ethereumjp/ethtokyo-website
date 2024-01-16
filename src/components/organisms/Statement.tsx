import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ETHDiamondLogo from "public/logo/ETHDiamondLogo.png";

const StatementSection = () => {
  return (
    //background: linear-gradient(45deg, , );
    <section
      id="statement"
      css={css`
        background: linear-gradient(0deg, #FF5544, #FF6F9D);
        border-radius: 0 0 0 0 / 0 0 100% 100%;
        clip-path:  ellipse(120% 100% at 50% 100%);
        margin-top: -4rem;
        z-index: 10;
      `}
    >
      <div
        css={css`
        padding: 4rem 1rem;
        text-align: center;

        ${mq.laptop}{
          margin: 0 auto;
          width:50%;
        }
      `}
      >
        <Image src={ETHDiamondLogo} alt="Ethereum diamond" />

        <h2 css={css`color: ${brand.Miyabi}; font-weight: 300;`}>
          Welcome and join us!
        </h2>

        <p css={css`text-align: justify;`}>
          ETHTokyo is a engaging hackathon for the Ethereum’s global community
          run by the local community. It's a place where people with all sorts
          of backgrounds, ideas, and skills come together to share their love
          for Ethereum and its world. Whether you're a seasoned expert or just
          curious, you'll find friends and inspiration here. Our goal is simple:
          to connect diverse minds and foster the creation of amazing new
          innovations for the future. Join us and be a part of shaping what's
          next in the Ethereum universe!
        </p>
      </div>
    </section>
  );
};

export default StatementSection;
