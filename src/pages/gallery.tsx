import OptimizedImage from "@/components/atoms/OptimizedImage";
import Layout from "@/components/layouts/BaseLayout";
import { type GalleryImage, imagesByCategory } from "@/data/galleryData";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// --- Constants ---
const ITEMS_PER_PAGE = 12;

// --- Styles ---
const categoryFilterStyle = css`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const filterButtonStyle = (isActive: boolean) => css`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${isActive ? brand.Primary : neutral.Grey3};
  background: ${isActive ? brand.Primary : neutral.White};
  color: ${isActive ? neutral.White : neutral.Grey5};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${brand.Primary};
    background: ${isActive ? brand.Primary : themeLight.PrimaryLowContrast};
  }
`;

const galleryGridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  ${mq.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  ${mq.mobileSmall} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const imageCardStyle = css`
  background: transparent;
  border: none;
  border-radius: 16px;
  transition: all 0.15s ease;
  padding: 0;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
  }
`;

const imageWrapperStyle = css`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

const imageStyle = css`
  object-fit: cover;
  transition: transform 0.3s ease;
  ${imageCardStyle}:hover & {
    transform: scale(1.05);
  }
`;

const paginationStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const pageButtonStyle = (isActive: boolean) => css`
  padding: 0.5rem 1rem;
  border: 2px solid ${isActive ? brand.Primary : neutral.Grey3};
  background: ${isActive ? brand.Primary : neutral.White};
  color: ${isActive ? neutral.White : brand.Primary};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;
  &:hover {
    border-color: ${brand.Primary};
    background: ${isActive ? brand.Primary : themeLight.PrimaryLowContrast};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const categoryBadgeStyle = (category: string) => css`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 999;
  background: ${category === "conference" ? brand.Primary : brand.Secondary};
  color: ${neutral.White};
`;

const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const modalContentStyle = css`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: ${neutral.White};
  border-radius: 16px;
  overflow: hidden;
`;

const modalImageStyle = css`
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
`;

const modalInfoStyle = css`
  padding: 1rem;
`;

const closeButtonStyle = css`
  background: rgba(0, 0, 0, 0.7);
  color: ${neutral.White};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-self: right;
  margin: 0.5rem 0.5rem;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const navigationButtonStyle = css`
  background: rgba(0, 0, 0, 0.7);
  color: ${neutral.White};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

// --- Helper Components ---
type CategoryType = "all" | "conference" | "hackathon";

const CategoryFilter: React.FC<{
  selectedCategory: CategoryType;
  onChange: (category: CategoryType) => void;
}> = ({ selectedCategory, onChange }) => (
  <div css={categoryFilterStyle}>
    {(["all", "conference", "hackathon"] as CategoryType[]).map((cat) => (
      <button
        key={cat}
        type="button"
        css={filterButtonStyle(selectedCategory === cat)}
        onClick={() => onChange(cat)}
      >
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>
    ))}
  </div>
);

const GalleryGrid: React.FC<{
  images: GalleryImage[];
  onImageClick: (img: GalleryImage) => void;
  currentPage: number;
}> = ({ images, onImageClick, currentPage }) => (
  <div css={galleryGridStyle}>
    {images.map((image, index) => (
      <button
        key={image.id}
        css={imageCardStyle}
        onClick={() => onImageClick(image)}
        type="button"
      >
        <div css={imageWrapperStyle}>
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            css={imageStyle}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vh"
            priority={currentPage === 1 && index === 0}
          />
        </div>
      </button>
    ))}
  </div>
);

const Pagination: React.FC<{
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  getPageNumbers: () => Array<{ value: number | string; key: string }>;
}> = ({ totalPages, currentPage, onPageChange, getPageNumbers }) =>
  totalPages > 1 ? (
    <div css={paginationStyle}>
      <button
        type="button"
        css={pageButtonStyle(false)}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoChevronBack size={16} />
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page.key}
          type="button"
          css={pageButtonStyle(page.value === currentPage)}
          onClick={() =>
            typeof page.value === "number"
              ? onPageChange(page.value)
              : undefined
          }
          disabled={page.value === "..."}
        >
          {page.value}
        </button>
      ))}
      <button
        type="button"
        css={pageButtonStyle(false)}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoChevronForward size={16} />
      </button>
    </div>
  ) : null;

const Modal: React.FC<{
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
  currentPage: number;
}> = ({ image, onClose, onPrev, onNext, currentIndex, total, currentPage }) => (
  <div
    css={modalOverlayStyle}
    onClick={onClose}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        onClose();
      }
    }}
    aria-label="モーダルを閉じる"
  >
    <div
      css={modalContentStyle}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div css={modalInfoStyle}>
          <div css={categoryBadgeStyle(image.category)}>{image.category}</div>
        </div>
        <button type="button" css={closeButtonStyle} onClick={onClose}>
          <IoClose size={24} />
        </button>
      </div>
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        css={modalImageStyle}
        width={100}
        height={100}
        priority={true}
      />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        `}
      >
        <button
          type="button"
          css={navigationButtonStyle}
          onClick={onPrev}
          aria-label="Previous image"
        >
          <IoChevronBack size={24} />
        </button>
        <div
          css={css`
            flex: 1;
            text-align: center;
            color: ${neutral.Grey4};
            font-size: 0.9rem;
          `}
        >
          {`${currentIndex + 1} / ${total} (Page ${currentPage})`}
        </div>
        <button
          type="button"
          css={navigationButtonStyle}
          onClick={onNext}
          aria-label="Next image"
        >
          <IoChevronForward size={24} />
        </button>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---
const GalleryPage: NextPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered images by category
  const filteredImages = useMemo(
    () => imagesByCategory[selectedCategory],
    [selectedCategory],
  );

  // Images for current page
  const paginatedImages = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredImages, currentPage]);

  // Total number of pages
  const totalPages = useMemo(
    () => Math.ceil(filteredImages.length / ITEMS_PER_PAGE),
    [filteredImages.length],
  );

  // Pagination page numbers
  const getPageNumbers = useCallback(() => {
    const pages: Array<{ value: number | string; key: string }> = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push({ value: i, key: `page-${i}` });
      }
    } else if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        pages.push({ value: i, key: `page-${i}` });
      }
      pages.push({ value: "...", key: "ellipsis-start" });
      pages.push({ value: totalPages, key: `page-${totalPages}` });
    } else if (currentPage >= totalPages - 2) {
      pages.push({ value: 1, key: "page-1" });
      pages.push({ value: "...", key: "ellipsis-end" });
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pages.push({ value: i, key: `page-${i}` });
      }
    } else {
      pages.push({ value: 1, key: "page-1" });
      pages.push({ value: "...", key: "ellipsis-start" });
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push({ value: i, key: `page-${i}` });
      }
      pages.push({ value: "...", key: "ellipsis-end" });
      pages.push({ value: totalPages, key: `page-${totalPages}` });
    }
    return pages;
  }, [totalPages, currentPage]);

  // Modal navigation helpers
  const getCurrentPageImages = useCallback(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredImages, currentPage]);

  const openModal = useCallback(
    (image: GalleryImage) => setSelectedImage(image),
    [],
  );
  const closeModal = useCallback(() => setSelectedImage(null), []);

  const nextImage = useCallback(() => {
    if (!selectedImage) return;
    const currentPageImages = getCurrentPageImages();
    const currentIndex = currentPageImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % currentPageImages.length;
    setSelectedImage(currentPageImages[nextIndex]);
  }, [selectedImage, getCurrentPageImages]);

  const prevImage = useCallback(() => {
    if (!selectedImage) return;
    const currentPageImages = getCurrentPageImages();
    const currentIndex = currentPageImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    if (currentIndex === -1) return;
    const prevIndex =
      currentIndex === 0 ? currentPageImages.length - 1 : currentIndex - 1;
    setSelectedImage(currentPageImages[prevIndex]);
  }, [selectedImage, getCurrentPageImages]);

  const handleCategoryChange = useCallback(
    (category: CategoryType) => {
      setSelectedCategory(category);
      setCurrentPage(1);
      if (selectedImage) setSelectedImage(null);
    },
    [selectedImage],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      if (selectedImage) setSelectedImage(null);
    },
    [selectedImage],
  );

  // Keyboard navigation for modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedImage) return;
      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
      }
    },
    [selectedImage, closeModal, nextImage, prevImage],
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown]);

  // --- Render ---
  return (
    <>
      <Layout pageTitle="Gallery 2024">
        <main css={sectionStyle}>
          <div css={containerStyle}>
            <h1 css={headingStyle}>Gallery 2024</h1>
            <p
              css={css`
                text-align: center;
                color: ${neutral.Grey4};
                font-size: 1.125rem;
                margin-bottom: 2rem;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
              `}
            >
              Relive the memories of ETHTokyo 2024 through photos.
              <br />
              Take a look at the conference and hackathon scenes from last year.
            </p>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onChange={handleCategoryChange}
            />
            <GalleryGrid
              images={paginatedImages}
              onImageClick={openModal}
              currentPage={currentPage}
            />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              getPageNumbers={getPageNumbers}
            />
          </div>
        </main>
        {selectedImage &&
          (() => {
            const currentPageImages = getCurrentPageImages();
            const currentIndex = currentPageImages.findIndex(
              (img) => img.id === selectedImage.id,
            );
            return (
              <Modal
                image={selectedImage}
                onClose={closeModal}
                onPrev={prevImage}
                onNext={nextImage}
                currentIndex={currentIndex}
                total={currentPageImages.length}
                currentPage={currentPage}
              />
            );
          })()}
      </Layout>
    </>
  );
};

export default GalleryPage;
