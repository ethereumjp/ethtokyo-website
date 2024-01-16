import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import seikaiha from "public/seikaiha.png";
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
      <br />
      <p>Follow us for updates</p>
      <Socials />
    </section>
  );
};

export default ScheduleSection;
