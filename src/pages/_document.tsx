import { css } from "@emotion/react";
import Document, {
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

type NoncedDocument = DocumentInitialProps & { nonce: string };

const CustomDocument = (props: NoncedDocument) => {
  return (
    <Html prefix="og: https://ogp.me/ns#" lang="en" nonce={props.nonce}>
      <Head nonce={props.nonce}>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="ethtokyo.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ETHTokyo 2025" />
        <meta
          property="og:image"
          content="https://ethtokyo.org/2025/images/thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="ETHTokyo 2025 is a Ethereum hackathon & conference organized by Japanese Ethereum enthusiasts."
        />
        <meta
          name="description"
          content="ETHTokyo 2025 is a Ethereum hackathon & conference organized by Japanese Ethereum enthusiasts."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Ethereum_JP" />
        <meta
          name="twitter:image"
          content="https://ethtokyo.org/2025/images/thumbnail.jpg"
        />
        <meta property="csp-nonce" content={props.nonce} />
      </Head>

      <body nonce={props.nonce} css={css`background-color: #000000;`}>
        <Main />
        <NextScript nonce={props.nonce} />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = async (
  ctx: DocumentContext,
): Promise<NoncedDocument> => {
  const initialProps = await Document.getInitialProps(ctx);
  const nonce = (ctx.req?.headers["x-csp-nonce"] as string) ?? "";

  return { ...initialProps, nonce: nonce };
};

export default CustomDocument;
