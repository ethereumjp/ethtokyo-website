// スピーカーの型定義
export interface Speaker {
  name: string;
  image: string;
  title?: string;
  project?: string;
  talkTitle?: string;
  socialLink?: string;
}

// URLからアカウント名を抽出する関数
export const extractAccountName = (url: string): string => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    // Twitter/Xの場合
    if (url.includes("x.com") || url.includes("twitter.com")) {
      const match = pathname.match(/^\/([^\/]+)/);
      return match ? `@${match[1]}` : "";
    }

    // LinkedInの場合
    if (url.includes("linkedin.com")) {
      const match = pathname.match(/\/in\/([^\/]+)/);
      return match ? match[1] : "";
    }

    return "";
  } catch {
    return "";
  }
};

// スピーカーデータを分割する関数
export const splitSpeakers = (speakers: Speaker[], featuredCount = 9) => {
  return {
    featured: speakers.slice(0, featuredCount),
    others: speakers.slice(featuredCount),
  };
};
