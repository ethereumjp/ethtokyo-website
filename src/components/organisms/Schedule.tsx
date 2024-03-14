import { brand, info } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image from "next/image";
import seikaiha from "public/images/seikaiha.png";
import EJLogoFace from "public/logo/EJLogoFace.png";
import { Socials } from "./Socials";

const ScheduleSection = () => {
  return (
    <section
      id="schedule"
      css={css`
        background-color: ${brand.Miyabi};
        background-image: url(${seikaiha.src});
        background-position: center;
        background-repeat: repeat;
        background-size: cover;
        padding: 2rem 0;
        text-align: center;
        width: 100%;
      `}
    >
      <p>Save the date!</p>
      <h2>Aug 23-26, 2024</h2>

      <Image
        src={EJLogoFace}
        alt="Ethereum Japan"
        css={css`
          height: auto;
          max-width: 128px;
        `}
      />

      <p>Follow us for updates</p>
      <Socials />

      <div css={css`margin-top: 2rem;`}>
        <p css={css`font-size: 1rem;`}>
          Looking to sponsor or partner with us?{" "}
          <a
            href="https://forms.gle/9wLvkR1Fw2VyKVM66"
            css={css`
                color: ${info.Attention};

                &:hover {
                  color: ${brand.Shuiro}
                }
            `}
          >
            Check here
          </a>
        </p>
      </div>
    </section>
  );
};

export default ScheduleSection;
