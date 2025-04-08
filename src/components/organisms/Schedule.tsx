import eventDetails from "@/data/eventDetails.json";
import { mq } from "@/themes/settings/breakpoints";
import { css } from "@emotion/react";
import { HiCalendarDays, HiOutlineMapPin } from "react-icons/hi2";
import { Socials } from "./Socials";

const Info = () => {
  return (
    <div>
      <div
        css={css`
        display:flex;
        flex-direction:column;
        justify-content: center;
        padding: 4rem 2rem 2rem 0;
        text-align: center;

        ${mq.laptop} {
          flex-direction:row;
          text-align: start;
        }
      `}
      >
        <div
          css={css`
          align-self: "center";
          ${mq.laptop}{
            align-self: "start";
          }
        `}
        >
          <HiCalendarDays size={60} />
        </div>

        <div
          css={css`
          display: flex;
          flex-direction: column;
          padding: 0 1rem;
        `}
        >
          <div>
            <h2 css={css`margin:0;`}>Conference</h2>
            <p css={css`font-size: 1rem; margin:0;`}>
              {eventDetails.eventDate.conference}
            </p>
          </div>
          <div css={css`margin-top: 1rem;`}>
            <h2 css={css`margin:0;`}>Hackathon</h2>
            <p css={css`font-size: 1rem; margin:0;`}>
              {eventDetails.eventDate.hackathon}
            </p>
          </div>
        </div>
        <div css={css`height:2rem; ${mq.laptop}{width: 2rem;}`} />
        <div
          css={css`
          align-self: "center";
          ${mq.laptop}{
            align-self: "start";
          }`}
        >
          <HiOutlineMapPin size={60} />
        </div>
        <div
          css={css`
          display: flex;
          flex-direction: column;
          padding: 0 1rem;
        `}
        >
          <div css={css``}>
            <h2 css={css`margin:0;`}>TBA</h2>
            {/* <a
              css={css`text-decoration: none; :hover {text-decoration: underline;} ;`}
              href=""
              target="_blank"
              rel="noreferrer"
            > */}
            <p css={css`font-size: 1rem; margin:0;`}>Location, Tokyo</p>
            {/* </a> */}
          </div>
          <div css={css`margin-top: 1rem;`}>
            <h2 css={css`margin:0;`}>Digital Garage</h2>
            <a
              css={css`text-decoration: none; :hover {text-decoration: underline;} ;`}
              href="https://maps.app.goo.gl/aCRdR2pX4qRaUz6MA"
              target="_blank"
              rel="noreferrer"
            >
              <p css={css`font-size: 1rem; margin:0;`}>
                15-1 Udagawacho, Shibuya, Tokyo
              </p>
            </a>
          </div>
        </div>
        <div css={css`height:2rem; ${mq.laptop}{width: 2rem;}`} />
        {/* <div css={css`align-self:center;`}>
          <GoInfo size={60} />
        </div>
        <div css={css`padding: 0 1rem;`}>
          <h2 css={css`margin:0;`}>Nearby Events</h2>

          <p css={css`font-size: 1rem; margin:0;`}>
            <a
              css={css`text-decoration: none; :hover {text-decoration: underline;} ;`}
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQROWEw0KAnb5Npxv6Qvsn1crcDlPagVQgBLcFBCigYG99dEaFtEoE4FmVmmi0P5sQtaq5BGFn4d1Yz/pubhtml"
              target="_blank"
              rel="noreferrer"
            >
              Click to see all events
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

const ScheduleSection = () => {
  return (
    <section
      id="schedule"
      css={css`
        text-align: center;
        width: 100%;
      `}
    >
      <Info />
    </section>
  );
};

export default ScheduleSection;
