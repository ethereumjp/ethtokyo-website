import fs from "node:fs/promises";
import path from "node:path";
import {
  RESPONSIVE_SIZES,
  optimizeImageFile,
} from "../src/utils/imageOptimizer";

const GALLERY_IMAGES_DIR = path.join(
  process.cwd(),
  "public/2025/images/gallery",
);
const OPTIMIZED_IMAGES_DIR = path.join(
  process.cwd(),
  "public/2025/images/gallery-optimized",
);

async function optimizeGalleryImages() {
  try {
    console.log("🎨 ギャラリー画像の最適化を開始します...");

    // 最適化ディレクトリを作成
    await fs.mkdir(OPTIMIZED_IMAGES_DIR, { recursive: true });

    // 画像ファイルを取得
    const files = await fs.readdir(GALLERY_IMAGES_DIR);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|webp)$/i.test(file),
    );

    console.log(`📁 ${imageFiles.length}個の画像ファイルを発見しました`);

    // 各画像を最適化
    for (const file of imageFiles) {
      const inputPath = path.join(GALLERY_IMAGES_DIR, file);
      const fileName = path.parse(file).name;

      console.log(`🔄 ${file} を最適化中...`);

      // 複数サイズで最適化
      const sizes = Object.entries(RESPONSIVE_SIZES);

      for (const [sizeName, size] of sizes) {
        const outputFileName = `${fileName}-${sizeName}.webp`;
        const outputPath = path.join(OPTIMIZED_IMAGES_DIR, outputFileName);

        await optimizeImageFile(inputPath, outputPath, {
          width: size.width,
          height: size.height,
          format: "webp",
          quality: 80,
          fit: "cover",
        });
      }

      // オリジナルサイズの最適化版も作成
      const originalOptimizedPath = path.join(
        OPTIMIZED_IMAGES_DIR,
        `${fileName}-original.webp`,
      );
      await optimizeImageFile(inputPath, originalOptimizedPath, {
        format: "webp",
        quality: 85,
      });

      console.log(`✅ ${file} の最適化が完了しました`);
    }

    console.log("🎉 すべての画像の最適化が完了しました！");
    console.log(
      `📂 最適化された画像は ${OPTIMIZED_IMAGES_DIR} に保存されました`,
    );
  } catch (error) {
    console.error("❌ 画像最適化中にエラーが発生しました:", error);
    process.exit(1);
  }
}

// スクリプトが直接実行された場合のみ実行
if (require.main === module) {
  optimizeGalleryImages();
}

export { optimizeGalleryImages };
