import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export interface ImageOptimizationOptions {
  quality?: number;
  format?: "webp" | "avif" | "jpeg" | "png";
  width?: number;
  height?: number;
  fit?: "cover" | "contain" | "fill" | "inside" | "outside";
}

const DEFAULT_OPTIONS: ImageOptimizationOptions = {
  quality: 80,
  format: "webp",
  fit: "cover",
};

/**
 * 画像を最適化してバッファを返す
 */
export async function optimizeImage(
  inputBuffer: Buffer,
  options: ImageOptimizationOptions = {},
): Promise<Buffer> {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  let sharpInstance = sharp(inputBuffer);

  // リサイズ
  if (opts.width || opts.height) {
    sharpInstance = sharpInstance.resize(opts.width, opts.height, {
      fit: opts.fit,
      withoutEnlargement: true,
    });
  }

  // フォーマット変換と品質設定
  switch (opts.format) {
    case "webp":
      sharpInstance = sharpInstance.webp({ quality: opts.quality });
      break;
    case "avif":
      sharpInstance = sharpInstance.avif({ quality: opts.quality });
      break;
    case "jpeg":
      sharpInstance = sharpInstance.jpeg({ quality: opts.quality });
      break;
    case "png":
      sharpInstance = sharpInstance.png({ quality: opts.quality });
      break;
    default:
      sharpInstance = sharpInstance.webp({ quality: opts.quality });
  }

  return await sharpInstance.toBuffer();
}

/**
 * 画像ファイルを最適化して保存
 */
export async function optimizeImageFile(
  inputPath: string,
  outputPath: string,
  options: ImageOptimizationOptions = {},
): Promise<void> {
  const inputBuffer = await fs.readFile(inputPath);
  const optimizedBuffer = await optimizeImage(inputBuffer, options);

  // 出力ディレクトリを作成
  const outputDir = path.dirname(outputPath);
  await fs.mkdir(outputDir, { recursive: true });

  await fs.writeFile(outputPath, optimizedBuffer);
}

/**
 * 複数のサイズで画像を最適化
 */
export async function optimizeImageMultipleSizes(
  inputBuffer: Buffer,
  sizes: Array<{ width: number; height?: number }>,
  options: ImageOptimizationOptions = {},
): Promise<
  Array<{ size: { width: number; height?: number }; buffer: Buffer }>
> {
  const results = await Promise.all(
    sizes.map(async (size) => {
      const buffer = await optimizeImage(inputBuffer, {
        ...options,
        width: size.width,
        height: size.height,
      });
      return { size, buffer };
    }),
  );

  return results;
}

/**
 * 画像のメタデータを取得
 */
export async function getImageMetadata(inputBuffer: Buffer) {
  return await sharp(inputBuffer).metadata();
}

/**
 * 画像の品質を自動調整（ファイルサイズベース）
 */
export async function optimizeForFileSize(
  inputBuffer: Buffer,
  targetSizeKB: number,
  options: ImageOptimizationOptions = {},
): Promise<Buffer> {
  let quality = options.quality || 80;
  let buffer: Buffer;

  do {
    buffer = await optimizeImage(inputBuffer, { ...options, quality });
    quality -= 10;
  } while (buffer.length > targetSizeKB * 1024 && quality > 20);

  return buffer;
}

/**
 * レスポンシブ画像用のサイズ設定
 */
export const RESPONSIVE_SIZES = {
  thumbnail: { width: 300, height: 200 },
  small: { width: 640, height: 480 },
  medium: { width: 1024, height: 768 },
  large: { width: 1920, height: 1080 },
};

/**
 * デバイス別の最適化設定
 */
export const DEVICE_OPTIMIZATIONS = {
  mobile: {
    quality: 70,
    format: "webp" as const,
    maxWidth: 640,
  },
  tablet: {
    quality: 80,
    format: "webp" as const,
    maxWidth: 1024,
  },
  desktop: {
    quality: 85,
    format: "webp" as const,
    maxWidth: 1920,
  },
};
