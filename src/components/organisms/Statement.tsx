import eventDetails from "@/data/eventDetails.json";
import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ETHDiamondLogo from "public/logo/ETHDiamondLogo.png";
import ETHTokyoLogo from "public/logo/ETHTokyoLogo.png";

const StatementSection = () => {
  const EventLogo = () => {
    return (
      <Image
        src={ETHTokyoLogo}
        alt="ETHTokyo logo"
        css={css`
          height: auto;
          max-width: 256px;
          padding-left: 11px;
          padding-top: 1rem;
        `}
      />
    );
  };

  return (
    //background: linear-gradient(45deg, , );
    <section
      id="statement"
      css={css`
        background: linear-gradient(0deg, ${brand.Shuiro}, #000);
        border-radius: 0 0 0 0 / 0 0 100% 100%;
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
        {/* <Image src={ETHDiamondLogo} alt="Ethereum diamond" /> */}
        <div css={css`padding: 2rem 0;`}>
          <EventLogo />
        </div>
        <h2 css={css`font-weight: 600;`}>Welcome and join us!</h2>
        <p css={css`text-align: justify; ${mq.laptop}{font-size: 1.25rem;}`}>
          ETHTokyo is a engaging hackathon for the global Ethereum community
          where people with all sorts of backgrounds, ideas, and skills come
          together to share their love for Ethereum and its world. Whether
          you're a seasoned expert or just curious, you'll find friends and
          inspiration here. Our goal is simple: to connect diverse minds and
          foster the creation of amazing new innovations for the future. Join us
          and be a part of shaping what's next in the Ethereum universe!
        </p>
        Further details will be announced soon.
      </div>
    </section>
  );
};

export default StatementSection;
