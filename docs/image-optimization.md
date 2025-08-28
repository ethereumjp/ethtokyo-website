# 画像最適化ガイド

このプロジェクトでは、`sharp`ライブラリを使用して画像の最適化を行っています。

## 概要

画像最適化により以下の効果が期待できます：

- **ファイルサイズの削減**: WebP形式への変換で50-80%のサイズ削減
- **読み込み速度の向上**: 最適化された画像によりページ読み込みが高速化
- **ユーザー体験の向上**: 遅延読み込みとプログレッシブ表示
- **SEOの改善**: ページ速度スコアの向上

## 使用方法

### 1. 画像最適化スクリプトの実行

```bash
# 依存関係のインストール
yarn install

# 画像最適化の実行
yarn optimize-images
```

このスクリプトは以下の処理を行います：

- `public/2025/images/gallery/` 内の画像を読み込み
- 複数サイズ（thumbnail, small, medium, large）で最適化
- WebP形式に変換
- `public/2025/images/gallery-optimized/` に保存

### 2. 最適化された画像の使用

```tsx
import OptimizedImage from "@/components/common/OptimizedImage";

// 基本的な使用
<OptimizedImage
  src="/2025/images/gallery-optimized/event-image-1-medium.webp"
  alt="Event Image"
  width={640}
  height={480}
/>

// レスポンシブ画像
<OptimizedImage
  src="/2025/images/gallery-optimized/event-image-1-medium.webp"
  alt="Event Image"
  fill={true}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## 最適化設定

### レスポンシブサイズ

```typescript
export const RESPONSIVE_SIZES = {
  thumbnail: { width: 300, height: 200 },  // サムネイル用
  small: { width: 640, height: 480 },      // モバイル用
  medium: { width: 1024, height: 768 },    // タブレット用
  large: { width: 1920, height: 1080 },    // デスクトップ用
};
```

### デバイス別最適化

```typescript
export const DEVICE_OPTIMIZATIONS = {
  mobile: {
    quality: 70,    // 低品質で軽量化
    format: 'webp',
    maxWidth: 640,
  },
  tablet: {
    quality: 80,    // 中品質
    format: 'webp',
    maxWidth: 1024,
  },
  desktop: {
    quality: 85,    // 高品質
    format: 'webp',
    maxWidth: 1920,
  },
};
```

## ベストプラクティス

### 1. 画像サイズの選択

- **サムネイル**: 300x200px (ギャラリー一覧)
- **モバイル**: 640x480px (スマートフォン)
- **タブレット**: 1024x768px (タブレット)
- **デスクトップ**: 1920x1080px (大画面)

### 2. フォーマットの選択

- **WebP**: 最新ブラウザ向け（推奨）
- **AVIF**: 最新ブラウザ向け（最高圧縮率）
- **JPEG**: フォールバック用
- **PNG**: 透明背景が必要な場合

### 3. 品質設定

- **サムネイル**: 70-75%
- **モバイル**: 75-80%
- **デスクトップ**: 80-85%

### 4. 遅延読み込み

```tsx
// 優先度の高い画像
<OptimizedImage
  src="hero-image.webp"
  alt="Hero"
  priority={true}
/>

// 遅延読み込み（デフォルト）
<OptimizedImage
  src="gallery-image.webp"
  alt="Gallery"
  loading="lazy"
/>
```

## パフォーマンス監視

### 1. ファイルサイズの確認

```bash
# 最適化前後のサイズ比較
ls -lh public/2025/images/gallery/
ls -lh public/2025/images/gallery-optimized/
```

### 2. ブラウザでの確認

- Chrome DevTools の Network タブで画像サイズを確認
- Lighthouse でパフォーマンススコアを測定
- WebPageTest で詳細な分析

## トラブルシューティング

### 1. 画像が表示されない

- ファイルパスが正しいか確認
- 最適化スクリプトが正常に実行されたか確認
- ブラウザのキャッシュをクリア

### 2. 最適化が失敗する

- `sharp`ライブラリが正しくインストールされているか確認
- 元画像ファイルが破損していないか確認
- 十分なディスク容量があるか確認

### 3. パフォーマンスが改善されない

- 画像サイズが適切に選択されているか確認
- 遅延読み込みが正しく設定されているか確認
- CDNの使用を検討

## 今後の改善案

1. **自動最適化**: ビルド時に自動で画像最適化を実行
2. **CDN統合**: CloudinaryやImageKitなどのCDNサービスとの連携
3. **プログレッシブJPEG**: 段階的な画像表示の実装
4. **WebP/AVIF対応**: ブラウザ対応状況に応じた自動フォーマット選択

