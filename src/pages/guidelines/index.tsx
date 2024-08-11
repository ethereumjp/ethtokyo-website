import Layout from "@/components/layouts/base";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Link from "next/link";

const HackerChallenge: NextPage = () => {
  return (
    <Layout pageTitle="guidelines">
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
        <div css={css`background-color: grey; margin: -1rem; padding: 0 1rem;`}>
          <p css={css`font-size: 1.25rem;`}>
            You can find the event timetable in the following links.
            <b>
              <a href="/DAY1.pdf" css={css`padding: 0 0.5rem;`}>
                DAY 1
              </a>
              <a href="/DAY2.pdf" css={css`padding: 0 0.5rem;`}>
                DAY 2
              </a>
              <a href="/DAY3.pdf" css={css`padding: 0 0.5rem;`}>
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
          Our Discord server is the only official communication channel. Please
          use it to connect with hackers, mentors, and to find the latest
          announcements from the event organizers throughout the hackathon.
        </p>
        <br />
        <h2 css={css`font-weight: 300;`}>Food and drinks</h2>
        <p>
          ETHTokyo will cover breakfast and dinner for the entire hackathon. For
          lunch, we encourage everyone to explore Tokyo with your fellow
          hackers! We will also provide various snacks and beverages throughout
          the hackathon.
        </p>
        <br />
        <h2 css={css`font-weight: 300;`}>Hacking rules</h2>
        <ul>
          <li>
            A team can not be more than four people. All team members must be
            present at the ETHTokyo venue for your project to be eligible for
            submission.
          </li>
          <li>
            You may plan ahead of time, but all code for your project has to be
            written during the event. Code can only be committed after hacking
            officially starts and only until the submission deadline. You cannot
            use another team's source code.
          </li>
          <li>
            The decision of judges is final for determining prizes and awards.
            Breaking our Code of Conduct will lead to your exclusion from the
            event.
          </li>
        </ul>
        <br />
        <h2 css={css`font-weight: 300;`}>Submission Requirements</h2>
        <ul>
          <li>A repository link to the open-source code</li>
          <li>
            A presentation file describing any background or relevant
            information to help judges understand the project
          </li>
          <li>
            The contract address(es) of your deployed demo, if any, either on a
            testnet or mainnet of your choice.
          </li>
        </ul>
        <p>
          You must submit the project to the specified platform by 11:59 on the
          final day of the hackathon.
        </p>
        <br />
        <h2 css={css`font-weight: 300;`}>Submitting your Project</h2>
        <p>
          Projects will be submitted using AKINDO platform. If you run into any
          problems or have any feedback, it would be much appreciated if you
          would report on channel `#channel-name`.
        </p>
        <h3>The general flow for using the tool is as follows:</h3>
        <ol>
          <li>
            Go to projects.ethberlin.org and sign in with your Zupass
            credentials to receive your role as "hacker".
          </li>
          <li>
            Create or join an existing team Now you can submit projects and join
            team.
          </li>
          <li>...</li>
        </ol>
        <h3>Some things to keep in mind:</h3>
        <li>
          Put as much information into the repository about the project, so
          judges and other hackers only need to look in one place to learn as
          much as possible about the it.
        </li>
        <li>
          Dedicate some time to make a crisp and precice presentation. Don't
          forget to submit it too.
        </li>
        <li>
          Make sure to select the track that fits best to your project. Same
          goes to submitting bounties.
        </li>
        <br />
        <h2 css={css`font-weight: 300;`}>Tracks and Prizes</h2>
        <p>The winning teams of the track awards each receive 5,000 USDC.</p>
        <ul>
          <li>
            Freedom to Transact: This track is for you if you want to ensure
            that anyone, anywhere, anytime can facilitate unrestricted
            transactions. We're looking for projects that enable people to
            access and send money, or value, across borders without
            restrictions, promoting financial inclusion. This track is for those
            who want to hack on peer-to-peer solutions, build
            censorship-resistant applications, and ensure that transactions can
            be private and secure.
          </li>
          <br />
          <li>
            Robust democracy: This track is all about platforms and tools that
            enable informed and collective decision-making, transparent
            governance, and collaboration and coordination among decentralized
            communities. If you want to build credibly neutral systems for
            voting, governance, and social interaction, and systems that counter
            disproportionate influence of centralized powers then this track is
            for you and your team. Other ideas you could hack on are
            consensus-finding algorithms, sybil resistance, and decentralized
            social reputation.
          </li>
          <br />
          <li>
            Infrastructure and tooling: This track is the right choice for you
            if you want to hack on tools that enhance security and privacy. It's
            about building projects that prioritize defense, decentralization,
            and resilience to create a more secure and freer world. Think topics
            like encryption, counter-surveillance, identity protection,
            anonymity, anti-identity, security, local data handling, and
            anything that armors the individual against intrusive data
            collection practices.
          </li>
        </ul>
        <br />
        <h2 css={css`font-weight: 300;`}>Judging Criteria</h2>
        <p>
          You will pitch your project in front of a group of 2 groups of judges.
          There will be Technical Judges and Concept Judges. Each will focus on
          different aspects of your project.
        </p>
        <p>
          <b>Technical Judges</b> will look at the technical sophistication and
          quality of your projects.
        </p>
        <ul>
          <li>What technical challenges does the project address?</li>
          <li>Is the project functional?</li>
          <li>Is the code and architecture well-designed?</li>
          <li>Is the codebase clean and maintainable?</li>
          <li>Is the code efficient and optimized?</li>
          <li>Is there a creative approach to problem-solving?</li>
        </ul>
        <p>
          <b>Concept Judges</b> will look at the idea, concept, vision of your
          projects and how well they were communicated.
        </p>
        <ul>
          <li>What technical challenges does the project address?</li>
          <li>Does the project have the potential for real-world impact? </li>
          <li>
            Was the team able to clearly communicate the project and its value?
          </li>
          <li>How well does the project fit the hackathon track??</li>
          <li>Does the concept have a strong vision?</li>
          <li>What is the wow or fun factor of the idea??</li>
        </ul>
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
          Go back
        </Link>
      </div>
    </Layout>
  );
};

export default HackerChallenge;
