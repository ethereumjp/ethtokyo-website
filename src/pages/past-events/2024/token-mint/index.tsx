import { mq } from "@/themes/settings/breakpoints";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import { Layout } from "../index";

const TokenMintPage: NextPage = () => {
  return (
    <Layout pageTitle="Mint token">
      <div css={css`padding: 2rem 0; text-align: center;`}>
        <h1
          css={css`
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        `}
        >
          ETHTokyo Supporters Collection
        </h1>
        <p
          css={css`
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0 auto 2rem;
          max-width: 800px;
        `}
        >
          Welcome to our exclusive ETHTokyo Supporters Collection! Immerse
          yourself in the beauty of Japanese culture with our unique NFTs. Our
          collection features three distinct types: Matsu (pine), Take (bamboo),
          and Ume (plum blossom). Each piece represents a symbol of strength,
          resilience, and elegance in Japanese tradition. Mint your favorite
          type and own a piece of digital art that celebrates the timeless charm
          of Japan's natural emblems.
        </p>
        <div
          css={css`
            display:flex;
            flex-direction:column;
            justify-content: center;
            ${mq.laptop} {
              flex-direction: row;
            }
          `}
        >
          <iframe
            title="matsu"
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x361B398d0090329bb02C1866dB9D52CFF9f6047B&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F1.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=8d6a2bafca038ece6b625fd8e7dad87d&tokenId=1&theme=light&primaryColor=purple"
            width="600px"
            height="600px"
            style={{ maxWidth: "100%" }}
          />
          <iframe
            title="take"
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x361B398d0090329bb02C1866dB9D52CFF9f6047B&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F1.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=8d6a2bafca038ece6b625fd8e7dad87d&tokenId=2&theme=light&primaryColor=purple"
            width="600px"
            height="600px"
            style={{ maxWidth: "100%" }}
          />
          <iframe
            title="ume"
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x361B398d0090329bb02C1866dB9D52CFF9f6047B&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F1.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=8d6a2bafca038ece6b625fd8e7dad87d&tokenId=3&theme=light&primaryColor=purple"
            width="600px"
            height="600px"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div css={css`padding: 2rem;`} />
        <h1>And for our biggest and tallest supporter, a 1/1 piece: FUJI 🗻</h1>
        <div css={css`display:flex; justify-content: center;`}>
          <iframe
            title="fuji"
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x361B398d0090329bb02C1866dB9D52CFF9f6047B&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F1.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=8d6a2bafca038ece6b625fd8e7dad87d&tokenId=0&theme=light&primaryColor=purple"
            width="600px"
            height="600px"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default TokenMintPage;
