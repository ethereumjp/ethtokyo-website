import Layout from "@/components/layouts/base";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const HackerChallenge: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout pageTitle="guidelines">
      {isClient ? (
        <div
          css={css`
          align-items: center;
          justify-content: center;
          padding: 1rem;
        `}
        >
          <div
            css={css`background-color: ${brand.Shuiro}; margin: -1rem; padding: 1rem;`}
          >
            <h1>ETHTokyo Hackathon guidelines</h1>
          </div>
          <br />
          <br />
          <div
            css={css`background-color: grey; margin: 0 -1rem; padding: 0 1rem;`}
          >
            <p css={css`font-size: 1.25rem;`}>
              You can find the event timetable in the following links.
              <b>
                <a href="/timetable/DAY1.pdf" css={css`padding: 0 0.5rem;`}>
                  DAY 1
                </a>
                <a href="/timetable/DAY2.pdf" css={css`padding: 0 0.5rem;`}>
                  DAY 2
                </a>
                <a href="/timetable/DAY3.pdf" css={css`padding: 0 0.5rem;`}>
                  DAY 3
                </a>
              </b>
            </p>
          </div>
          <br />
          <h2 css={css`font-weight: 300;`}>Find a team/hacker/idea</h2>
          <p>
            Are you looking a team? A hacker to join your force? A cool idea to
            hop on? Find your teammates on{" "}
            <a
              href="https://github.com/ethereumjp/find-hackathon-team/"
              css={css`color: lightblue; :hover {color: orange;}`}
            >
              Github
            </a>{" "}
            or join the hacker teambuilding workshop on Saturday morning.
          </p>
          <br />
          <h2 css={css`font-weight: 300;`}>Connect and Chat</h2>
          <p>
            Our Discord server is the only official communication channel.
            Please use it to connect with hackers, mentors, and to find the
            latest announcements from the event organizers throughout the
            hackathon.
          </p>
          <br />
          <h2 css={css`font-weight: 300;`}>Food and drinks</h2>
          <p>
            ETHTokyo will cover breakfast and dinner for the entire hackathon.
            For lunch, we encourage everyone to explore Tokyo with your fellow
            hackers! We will also provide various snacks and beverages
            throughout the hackathon.
          </p>
          <br />
          <h2 css={css`font-weight: 300;`}>Hacking rules</h2>
          <p>
            <ul>
              <li>
                A team can not be more than four people. All team members must
                be present at the ETHTokyo venue for your project to be eligible
                for submission.
              </li>
              <li>
                You may plan ahead of time, but all code for your project has to
                be written during the event. Code can only be committed after
                hacking officially starts and only until the submission
                deadline. You cannot use another team's source code.
              </li>
              <li>
                The decision of judges is final for determining prizes and
                awards. Breaking our Code of Conduct will lead to your exclusion
                from the event.
              </li>
            </ul>
          </p>
          <br />
          <h2 css={css`font-weight: 300;`}>Submission Requirements</h2>
          <p>
            <ul>
              <li>A repository link to the open-source code</li>
              <li>
                A presentation file describing any background or relevant
                information to help judges understand the project
              </li>
              <li>
                The contract address(es) of your deployed demo, if any, either
                on a testnet or mainnet of your choice.
              </li>
            </ul>
          </p>
          <p>
            You must submit the project to the specified platform by 11:59 on
            the final day of the hackathon.
          </p>
          <br />
          <h2 css={css`font-weight: 300;`}>Submitting your Project</h2>
          <p>
            Projects will be submitted using AKINDO platform. If you run into
            any problems or have any feedback, it would be much appreciated if
            you would report on channel `#channel-name`.
          </p>
          <h3>The general flow for using the tool is as follows:</h3>
          <p>
            <ol>
              <li>
                Join AKINDO's{" "}
                <a href="https://app.akindo.io/hackathons/3dXM7ZO2WsxvlkXp/">
                  ETHTokyo'24 Hackathon page
                </a>
                . (page is currently disabled and will be published near the
                event.)
              </li>
              <li>
                After joining, create your team. Note that AKINDO refers to the
                team as a <em>project</em>. *You can also create your team
                (project){" "}
                <a href="https://app.akindo.io/create-community">here</a>:
              </li>
              <li>Add team members from the project page</li>
              <li>
                After creating your project, register the product you want to
                submit.
              </li>
              <li>Submit your product to the ETHTokyo'24 hackathon.</li>
              <ul>
                <li>
                  Please be sure to indicate in the comments section when
                  submitting which track or sponsor prize you are submitting to.
                </li>
                <li>
                  If your hack is listed on the Hackathon{" "}
                  <a href="https://app.akindo.io/hackathons/3dXM7ZO2WsxvlkXp?tab=products">
                    submission list page
                  </a>
                  , your submission is complete:
                </li>
                <li>
                  Product submission{" "}
                  <a href="https://youtu.be/SnZzxp-tA6c">demo video link</a>
                </li>
              </ul>
            </ol>
          </p>
          <h3>Some things to keep in mind:</h3>
          <p>
            <ul>
              <li>
                Put as much information into the repository about the project,
                so judges and other hackers only need to look in one place to
                learn as much as possible about the it.
              </li>
              <li>
                Dedicate some time to make a crisp and precice presentation.
                Don't forget to submit it too.
              </li>
              <li>
                Make sure to select the track that fits best to your project.
                Same goes to submitting bounties.
              </li>
            </ul>
          </p>
          <br />
          <h2 css={css`font-weight: 300;`}>Tracks and Prizes</h2>
          <p>
            The winning teams of the track awards each receive 3,000 USDC. (Note: The prize money has been adjusted to 3,000 USDC in consideration of the operating balance of ETH Tokyo 2024.)
            <ul>
              <li>
                <b>Freedom to Transact</b>: This track is for you if you want to
                ensure that anyone, anywhere, anytime can facilitate
                unrestricted transactions. We're looking for projects that
                enable people to access and send money, or value, across borders
                without restrictions, promoting financial inclusion. This track
                is for those who want to hack on peer-to-peer solutions, build
                censorship-resistant applications, and ensure that transactions
                can be private and secure.
              </li>
              <li>
                <b>Robust democracy</b>: This track is all about platforms and
                tools that enable informed and collective decision-making,
                transparent governance, and collaboration and coordination among
                decentralized communities. If you want to build credibly neutral
                systems for voting, governance, and social interaction, and
                systems that counter disproportionate influence of centralized
                powers then this track is for you and your team. Other ideas you
                could hack on are consensus-finding algorithms, sybil
                resistance, and decentralized social reputation.
              </li>
              <li>
                <b>Infrastructure and tooling</b>: This track is the right
                choice for you if you want to hack on tools that enhance
                security and privacy. It's about building projects that
                prioritize defense, decentralization, and resilience to create a
                more secure and freer world. Think topics like encryption,
                counter-surveillance, identity protection, anonymity,
                anti-identity, security, local data handling, and anything that
                armors the individual against intrusive data collection
                practices.
              </li>
            </ul>
          </p>
          <br />
          <h2 css={css`font-weight: 300;`}>Judging Criteria</h2>
          <p>
            You will pitch your project in front of a group of 2 groups of
            judges. There will be Technical Judges and Concept Judges. Each will
            focus on different aspects of your project.
          </p>
          <p>
            <b>Technical Judges</b> will look at the technical sophistication
            and quality of your projects.
          </p>
          <p>
            <ul>
              <li>What technical challenges does the project address?</li>
              <li>Is the project functional?</li>
              <li>Is the code and architecture well-designed?</li>
              <li>Is the codebase clean and maintainable?</li>
              <li>Is the code efficient and optimized?</li>
              <li>Is there a creative approach to problem-solving?</li>
            </ul>
          </p>
          <p>
            <b>Concept Judges</b> will look at the idea, concept, vision of your
            projects and how well they were communicated.
          </p>
          <p>
            <ul>
              <li>What technical challenges does the project address?</li>
              <li>
                Does the project have the potential for real-world impact?{" "}
              </li>
              <li>
                Was the team able to clearly communicate the project and its
                value?
              </li>
              <li>How well does the project fit the hackathon track??</li>
              <li>Does the concept have a strong vision?</li>
              <li>What is the wow or fun factor of the idea??</li>
            </ul>
          </p>
          <br />

          <Link
            href="/"
            css={css`
              color: inherit;
              &:hover {
                color: white;
              }
            `}
          >
            <p>Go back</p>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default HackerChallenge;
