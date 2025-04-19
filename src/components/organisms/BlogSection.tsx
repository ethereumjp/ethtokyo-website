import { blogData } from "@/data/eventData";
import {
  cardHeadingStyle,
  cardParagraphStyle,
  cardStyle,
  containerStyle,
  headingStyle,
  multiGridStyle,
  sectionStyle,
} from "@/themes/styles/common";
import type { FC } from "react";

const BlogSection: FC = () => {
  return (
    <section css={sectionStyle} id="blog">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Blog</h2>
        <div css={multiGridStyle}>
          {blogData.map((post) => (
            <div key={post.id} css={cardStyle}>
              <h3 css={cardHeadingStyle}>{post.title}</h3>
              <p css={cardParagraphStyle}>{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
