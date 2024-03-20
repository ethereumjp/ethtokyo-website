import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const countDown = (target: number, now: number) => {
  const diffTime = target - now;

  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const NumberPanel = (props: { no: number; text: string }) => {
  const numberPanelStyle = css`
    background-color: ${brand.Miyabi};
    background-color: #552266BF;
    border-radius: 1rem;
    color: ${neutral.White};
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0.25rem;
    padding: 0 0.75rem;

    ${mq.laptop}{
      font-size: 8rem;
      margin: 0;
      padding: 0 2rem;
    }
  `;

  return (
    <div css={numberPanelStyle}>
      {props.no.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
      <hr
        css={css`border: 0; border-bottom: 1px solid white; height: 1px; margin:0;`}
      />
      <p
        css={css`font-size: 0.75rem; font-weight: 400; margin: 0; ${mq.laptop}{font-size: 2rem; margin:1rem;}`}
      >
        {props.text}
      </p>
    </div>
  );
};

export const CountdownPanel = () => {
  const countdownContainerStyle = css`
    display: flex;
    justify-content: center;
    padding: 1rem;
    text-align: center;

    ${mq.laptop}{
      justify-content: space-evenly;
      padding: 4rem;
    }
  `;

  const [now, setNow] = useState(new Date().getTime());
  useEffect(() => {
    const secTimer = setInterval(() => {
      setNow(new Date().getTime());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  const eventDate = new Date("Aug 23, 2024").getTime();
  const [days, hrs, mins, secs] = countDown(eventDate, now);

  return (
    <div css={countdownContainerStyle}>
      <NumberPanel no={days} text="days" />
      <NumberPanel no={hrs} text="hours" />
      <NumberPanel no={mins} text="minutes" />
      <NumberPanel no={secs} text="seconds" />
    </div>
  );
};
