import { css } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "conference" | "hackathon";
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "event-1",
    src: "/2025/images/gallery/event-image-1.jpg",
    alt: "ETHTokyo Conference Audience",
    category: "conference",
    title: "Conference Keynote Sessions",
    description:
      "Main stage keynote sessions. Many participants are listening attentively.",
  },
  {
    id: "event-2",
    src: "/2025/images/gallery/event-image-2.jpg",
    alt: "ETHTokyo Conference Speaker",
    category: "conference",
    title: "Ethereum Community Gathering",
    description:
      "Interaction between speakers and participants. Active discussions are taking place.",
  },
  {
    id: "hackathon-1",
    src: "/2025/images/gallery/hackathon-1.jpg",
    alt: "ETHTokyo Hackathon Team Work",
    category: "hackathon",
    title: "Hackathon Team Collaboration",
    description: "Hackathon teams collaborating on their projects.",
  },
  {
    id: "hackathon-2",
    src: "/2025/images/gallery/hackathon-2.jpg",
    alt: "ETHTokyo Hackathon Development",
    category: "hackathon",
    title: "Intensive Development Session",
    description:
      "Participants working intensively on development. Creative ideas are being born.",
  },
  {
    id: "hackathon-3",
    src: "/2025/images/gallery/hackathon-3.jpg",
    alt: "ETHTokyo Hackathon Presentation",
    category: "hackathon",
    title: "Project Presentation",
    description:
      "Presentation of completed projects. Judges and participants are listening intently.",
  },
];

const GalleryPage: NextPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "conference" | "hackathon"
  >("all");

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const prevIndex =
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const pageStyle = css`
    min-height: 100vh;
    background: linear-gradient(135deg, ${themeLight.PrimaryLowContrast} 0%, ${neutral.White} 100%);
  `;

  const headerStyle = css`
    background: ${neutral.White};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
  `;

  const backButtonStyle = css`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${brand.Primary};
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${themeLight.PrimaryLowContrast};
      transform: translateX(-2px);
    }
  `;

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
    color: ${isActive ? neutral.White : brand.Primary};
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
    margin: 2rem 0;
    
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
    background: ${neutral.White};
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }
  `;

  const imageWrapperStyle = css`
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
  `;

  const imageStyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${imageCardStyle}:hover & {
      transform: scale(1.05);
    }
  `;

  const imageOverlayStyle = css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: ${neutral.White};
    padding: 1.5rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    
    ${imageCardStyle}:hover & {
      transform: translateY(0);
    }
  `;

  const imageTitleStyle = css`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  `;

  const imageDescriptionStyle = css`
    font-size: 0.9rem;
    opacity: 0.9;
    line-height: 1.4;
  `;

  const categoryBadgeStyle = (category: string) => css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
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
    padding: 2rem;
  `;

  const modalTitleStyle = css`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${brand.Secondary};
    margin-bottom: 1rem;
  `;

  const modalDescriptionStyle = css`
    color: ${neutral.Grey4};
    line-height: 1.6;
    margin-bottom: 1rem;
  `;

  const closeButtonStyle = css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: ${neutral.White};
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1001;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(0, 0, 0, 0.9);
      transform: scale(1.1);
    }
  `;

  const navigationButtonStyle = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: ${neutral.White};
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1001;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(0, 0, 0, 0.9);
      transform: translateY(-50%) scale(1.1);
    }
    
    &.prev {
      left: 1rem;
    }
    
    &.next {
      right: 1rem;
    }
  `;

  return (
    <>
      <Head>
        <title>Gallery 2024 - ETHTokyo</title>
        <meta
          name="description"
          content="ETHTokyo 2024 Gallery - Conference and Hackathon photos from last year"
        />
      </Head>

      <div css={pageStyle}>
        <header css={headerStyle}>
          <div css={containerStyle}>
            <a href="/" css={backButtonStyle}>
              ← Back to Home
            </a>
          </div>
        </header>

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

            <div css={categoryFilterStyle}>
              <button
                type="button"
                css={filterButtonStyle(selectedCategory === "all")}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </button>
              <button
                type="button"
                css={filterButtonStyle(selectedCategory === "conference")}
                onClick={() => setSelectedCategory("conference")}
              >
                Conference
              </button>
              <button
                type="button"
                css={filterButtonStyle(selectedCategory === "hackathon")}
                onClick={() => setSelectedCategory("hackathon")}
              >
                Hackathon
              </button>
            </div>

            <div css={galleryGridStyle}>
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  css={imageCardStyle}
                  onClick={() => openModal(image)}
                  type="button"
                >
                  <div css={imageWrapperStyle}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      css={imageStyle}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop";
                      }}
                    />
                    <div css={categoryBadgeStyle(image.category)}>
                      {image.category === "conference"
                        ? "Conference"
                        : "Hackathon"}
                    </div>
                    <div css={imageOverlayStyle}>
                      <div css={imageTitleStyle}>{image.title}</div>
                      <div css={imageDescriptionStyle}>{image.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        {selectedImage && (
          <div
            css={modalOverlayStyle}
            onClick={closeModal}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeModal();
              }
            }}
          >
            <div
              css={modalContentStyle}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <button type="button" css={closeButtonStyle} onClick={closeModal}>
                <IoClose size={24} />
              </button>

              <button
                type="button"
                css={[navigationButtonStyle, css`.prev`]}
                onClick={prevImage}
              >
                <IoChevronBack size={24} />
              </button>

              <button
                type="button"
                css={[navigationButtonStyle, css`.next`]}
                onClick={nextImage}
              >
                <IoChevronForward size={24} />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                css={modalImageStyle}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop";
                }}
              />

              <div css={modalInfoStyle}>
                <h2 css={modalTitleStyle}>{selectedImage.title}</h2>
                <p css={modalDescriptionStyle}>{selectedImage.description}</p>
                <div css={categoryBadgeStyle(selectedImage.category)}>
                  {selectedImage.category === "conference"
                    ? "Conference"
                    : "Hackathon"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryPage;
