import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
  fallbackSrc?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 100vh",
  priority = false,
  className,
  onClick,
  fallbackSrc = "https://picsum.dev/1200/800",
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // srcプロパティが変更されたときにimageSrcを更新
  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackSrc);
    }
  };

  const imageStyle = css`
    transition: opacity 0.3s ease;
    opacity: ${isLoading ? 0.6 : 1};
    
    ${
      onClick &&
      css`
      cursor: pointer;
      &:hover {
        transform: scale(1.02);
      }
    `
    }
  `;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      css={imageStyle}
      onClick={onClick}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
    />
  );
};

export default OptimizedImage;
