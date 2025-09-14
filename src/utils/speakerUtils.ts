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
    // デバッグ用ログ（本番では削除）
    console.log("extractAccountName input URL:", url);

    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    console.log("extractAccountName pathname:", pathname);

    // Twitter/Xの場合
    if (url.includes("x.com") || url.includes("twitter.com")) {
      const match = pathname.match(/^\/([^\/]+)/);
      return match ? `@${match[1]}` : "";
    }

    // LinkedInの場合
    if (url.includes("linkedin.com")) {
      const match = pathname.match(/\/in\/([^\/]+)/);
      if (match) {
        let accountName = match[1];

        // URLエンコードされた文字をデコード
        try {
          accountName = decodeURIComponent(accountName);
        } catch {
          // デコードに失敗した場合は元の文字列を使用
        }

        // 日本語文字が含まれているかチェック（デコード後）
        if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(accountName)) {
          // 日本語が含まれている場合は、より簡潔に「LinkedIn」と表示
          return "LinkedIn";
        }

        // URLエンコードされた文字が含まれているかチェック（デコード前）
        if (/%[0-9A-Fa-f]{2}/.test(match[1])) {
          return "LinkedIn";
        }

        return accountName;
      }
      return "";
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
