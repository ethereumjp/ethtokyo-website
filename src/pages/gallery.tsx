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
    id: "event-3",
    src: "/2025/images/gallery/event-image-3.jpg",
    alt: "ETHTokyo Conference Networking",
    category: "conference",
    title: "Networking Sessions",
    description:
      "Participants networking and building connections during breaks.",
  },
  {
    id: "event-4",
    src: "/2025/images/gallery/event-image-4.jpg",
    alt: "ETHTokyo Conference Workshop",
    category: "conference",
    title: "Interactive Workshops",
    description:
      "Hands-on workshops where participants learn practical skills.",
  },
  {
    id: "event-5",
    src: "/2025/images/gallery/event-image-5.jpg",
    alt: "ETHTokyo Conference Panel Discussion",
    category: "conference",
    title: "Panel Discussions",
    description: "Expert panels discussing the future of Ethereum and Web3.",
  },
  {
    id: "event-6",
    src: "/2025/images/gallery/event-image-6.jpg",
    alt: "ETHTokyo Conference Exhibition",
    category: "conference",
    title: "Exhibition Area",
    description: "Showcase of innovative projects and technologies.",
  },
  {
    id: "event-7",
    src: "/2025/images/gallery/event-image-7.jpg",
    alt: "ETHTokyo Conference Community",
    category: "conference",
    title: "Community Building",
    description: "Building strong connections within the Ethereum community.",
  },
  {
    id: "event-8",
    src: "/2025/images/gallery/event-image-8.jpg",
    alt: "ETHTokyo Conference Learning",
    category: "conference",
    title: "Learning Sessions",
    description:
      "Educational sessions covering various aspects of Ethereum development.",
  },
  {
    id: "event-9",
    src: "/2025/images/gallery/event-image-9.jpg",
    alt: "ETHTokyo Conference Innovation",
    category: "conference",
    title: "Innovation Showcase",
    description: "Showcasing cutting-edge innovations in the blockchain space.",
  },
  {
    id: "event-10",
    src: "/2025/images/gallery/event-image-10.jpg",
    alt: "ETHTokyo Conference Collaboration",
    category: "conference",
    title: "Collaborative Sessions",
    description: "Participants working together on shared challenges.",
  },
  {
    id: "event-11",
    src: "/2025/images/gallery/event-image-11.jpg",
    alt: "ETHTokyo Conference Technology",
    category: "conference",
    title: "Technology Deep Dive",
    description: "In-depth technical discussions and presentations.",
  },
  {
    id: "event-12",
    src: "/2025/images/gallery/event-image-12.jpg",
    alt: "ETHTokyo Conference Inspiration",
    category: "conference",
    title: "Inspirational Talks",
    description:
      "Motivational sessions inspiring the next generation of builders.",
  },
  {
    id: "event-13",
    src: "/2025/images/gallery/event-image-13.jpg",
    alt: "ETHTokyo Conference Future",
    category: "conference",
    title: "Future of Web3",
    description:
      "Exploring the future possibilities of decentralized technology.",
  },
  {
    id: "event-14",
    src: "/2025/images/gallery/event-image-14.jpg",
    alt: "ETHTokyo Conference Growth",
    category: "conference",
    title: "Community Growth",
    description:
      "Witnessing the growth and evolution of the Ethereum ecosystem.",
  },
  {
    id: "event-15",
    src: "/2025/images/gallery/event-image-15.jpg",
    alt: "ETHTokyo Conference Knowledge",
    category: "conference",
    title: "Knowledge Sharing",
    description:
      "Sharing valuable insights and experiences across the community.",
  },
  {
    id: "event-16",
    src: "/2025/images/gallery/event-image-16.jpg",
    alt: "ETHTokyo Conference Development",
    category: "conference",
    title: "Developer Sessions",
    description: "Technical sessions focused on Ethereum development.",
  },
  {
    id: "event-17",
    src: "/2025/images/gallery/event-image-17.jpg",
    alt: "ETHTokyo Conference Ecosystem",
    category: "conference",
    title: "Ecosystem Overview",
    description: "Comprehensive overview of the Ethereum ecosystem.",
  },
  {
    id: "event-18",
    src: "/2025/images/gallery/event-image-18.jpg",
    alt: "ETHTokyo Conference Innovation Hub",
    category: "conference",
    title: "Innovation Hub",
    description: "Central hub for innovative ideas and projects.",
  },
  {
    id: "event-19",
    src: "/2025/images/gallery/event-image-19.jpg",
    alt: "ETHTokyo Conference Global Community",
    category: "conference",
    title: "Global Community",
    description: "International participants coming together for ETHTokyo.",
  },
  {
    id: "event-20",
    src: "/2025/images/gallery/event-image-20.jpg",
    alt: "ETHTokyo Conference Technology Showcase",
    category: "conference",
    title: "Technology Showcase",
    description: "Showcasing the latest technologies and developments.",
  },
  {
    id: "event-21",
    src: "/2025/images/gallery/event-image-21.jpg",
    alt: "ETHTokyo Conference Learning Environment",
    category: "conference",
    title: "Learning Environment",
    description: "Creating an optimal environment for learning and growth.",
  },
  {
    id: "event-22",
    src: "/2025/images/gallery/event-image-22.jpg",
    alt: "ETHTokyo Conference Networking Hub",
    category: "conference",
    title: "Networking Hub",
    description: "Vibrant networking opportunities throughout the event.",
  },
  {
    id: "event-23",
    src: "/2025/images/gallery/event-image-23.jpg",
    alt: "ETHTokyo Conference Collaboration Space",
    category: "conference",
    title: "Collaboration Space",
    description: "Dedicated spaces for collaboration and teamwork.",
  },
  {
    id: "event-24",
    src: "/2025/images/gallery/event-image-24.jpg",
    alt: "ETHTokyo Conference Innovation Lab",
    category: "conference",
    title: "Innovation Lab",
    description: "Laboratory environment for testing new ideas and concepts.",
  },
  {
    id: "event-25",
    src: "/2025/images/gallery/event-image-25.jpg",
    alt: "ETHTokyo Conference Community Spirit",
    category: "conference",
    title: "Community Spirit",
    description: "Celebrating the strong spirit of the Ethereum community.",
  },
  {
    id: "event-26",
    src: "/2025/images/gallery/event-image-26.jpg",
    alt: "ETHTokyo Conference Technology Exchange",
    category: "conference",
    title: "Technology Exchange",
    description: "Exchange of technical knowledge and expertise.",
  },
  {
    id: "event-27",
    src: "/2025/images/gallery/event-image-27.jpg",
    alt: "ETHTokyo Conference Future Vision",
    category: "conference",
    title: "Future Vision",
    description: "Envisioning the future of decentralized technology.",
  },
  {
    id: "event-28",
    src: "/2025/images/gallery/event-image-28.jpg",
    alt: "ETHTokyo Conference Growth Mindset",
    category: "conference",
    title: "Growth Mindset",
    description: "Fostering a mindset of continuous growth and improvement.",
  },
  {
    id: "event-29",
    src: "/2025/images/gallery/event-image-29.jpg",
    alt: "ETHTokyo Conference Knowledge Transfer",
    category: "conference",
    title: "Knowledge Transfer",
    description: "Transferring knowledge from experts to the community.",
  },
  {
    id: "event-30",
    src: "/2025/images/gallery/event-image-30.jpg",
    alt: "ETHTokyo Conference Development Focus",
    category: "conference",
    title: "Development Focus",
    description: "Focusing on practical development skills and techniques.",
  },
  {
    id: "event-31",
    src: "/2025/images/gallery/event-image-31.jpg",
    alt: "ETHTokyo Conference Ecosystem Growth",
    category: "conference",
    title: "Ecosystem Growth",
    description: "Supporting the growth of the Ethereum ecosystem.",
  },
  {
    id: "event-32",
    src: "/2025/images/gallery/event-image-32.jpg",
    alt: "ETHTokyo Conference Innovation Center",
    category: "conference",
    title: "Innovation Center",
    description: "Center for innovation and creative problem solving.",
  },
  {
    id: "event-33",
    src: "/2025/images/gallery/event-image-33.jpg",
    alt: "ETHTokyo Conference Global Network",
    category: "conference",
    title: "Global Network",
    description: "Building a global network of Ethereum enthusiasts.",
  },
  {
    id: "event-34",
    src: "/2025/images/gallery/event-image-34.jpg",
    alt: "ETHTokyo Conference Technology Leadership",
    category: "conference",
    title: "Technology Leadership",
    description: "Leadership in technology innovation and development.",
  },
  {
    id: "event-35",
    src: "/2025/images/gallery/event-image-35.jpg",
    alt: "ETHTokyo Conference Learning Community",
    category: "conference",
    title: "Learning Community",
    description: "Building a community focused on continuous learning.",
  },
  {
    id: "event-36",
    src: "/2025/images/gallery/event-image-36.jpg",
    alt: "ETHTokyo Conference Networking Success",
    category: "conference",
    title: "Networking Success",
    description: "Successful networking and relationship building.",
  },
  {
    id: "event-37",
    src: "/2025/images/gallery/event-image-37.jpg",
    alt: "ETHTokyo Conference Collaboration Success",
    category: "conference",
    title: "Collaboration Success",
    description: "Successful collaboration and teamwork outcomes.",
  },
  {
    id: "event-38",
    src: "/2025/images/gallery/event-image-38.jpg",
    alt: "ETHTokyo Conference Innovation Success",
    category: "conference",
    title: "Innovation Success",
    description: "Successful innovation and creative solutions.",
  },
  {
    id: "event-39",
    src: "/2025/images/gallery/event-image-39.jpg",
    alt: "ETHTokyo Conference Community Success",
    category: "conference",
    title: "Community Success",
    description: "Successful community building and engagement.",
  },
  {
    id: "event-40",
    src: "/2025/images/gallery/event-image-40.jpg",
    alt: "ETHTokyo Conference Technology Success",
    category: "conference",
    title: "Technology Success",
    description: "Successful technology demonstrations and implementations.",
  },
  {
    id: "event-41",
    src: "/2025/images/gallery/event-image-41.jpg",
    alt: "ETHTokyo Conference Future Success",
    category: "conference",
    title: "Future Success",
    description: "Successful planning for the future of Ethereum.",
  },
  {
    id: "event-42",
    src: "/2025/images/gallery/event-image-42.jpg",
    alt: "ETHTokyo Conference Growth Success",
    category: "conference",
    title: "Growth Success",
    description: "Successful growth and development initiatives.",
  },
  {
    id: "event-43",
    src: "/2025/images/gallery/event-image-43.jpg",
    alt: "ETHTokyo Conference Knowledge Success",
    category: "conference",
    title: "Knowledge Success",
    description: "Successful knowledge sharing and transfer.",
  },
  {
    id: "event-44",
    src: "/2025/images/gallery/event-image-44.jpg",
    alt: "ETHTokyo Conference Development Success",
    category: "conference",
    title: "Development Success",
    description: "Successful development projects and initiatives.",
  },
  {
    id: "event-45",
    src: "/2025/images/gallery/event-image-45.jpg",
    alt: "ETHTokyo Conference Ecosystem Success",
    category: "conference",
    title: "Ecosystem Success",
    description: "Successful ecosystem development and expansion.",
  },
  {
    id: "event-46",
    src: "/2025/images/gallery/event-image-46.jpeg",
    alt: "ETHTokyo Conference Final Celebration",
    category: "conference",
    title: "Final Celebration",
    description: "Celebrating the successful conclusion of ETHTokyo 2024.",
  },
  {
    id: "event-47",
    src: "/2025/images/gallery/event-image-47.jpg",
    alt: "ETHTokyo Conference Community Celebration",
    category: "conference",
    title: "Community Celebration",
    description: "Celebrating the vibrant and diverse Ethereum community.",
  },
  {
    id: "event-48",
    src: "/2025/images/gallery/event-image-48.jpg",
    alt: "ETHTokyo Conference Innovation Celebration",
    category: "conference",
    title: "Innovation Celebration",
    description: "Celebrating the innovative spirit of the Ethereum ecosystem.",
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
  {
    id: "hackathon-4",
    src: "/2025/images/gallery/hackathon-4.jpg",
    alt: "ETHTokyo Hackathon Brainstorming",
    category: "hackathon",
    title: "Brainstorming Session",
    description: "Teams brainstorming innovative ideas for their projects.",
  },
  {
    id: "hackathon-5",
    src: "/2025/images/gallery/hackathon-5.jpg",
    alt: "ETHTokyo Hackathon Coding",
    category: "hackathon",
    title: "Intensive Coding",
    description:
      "Developers focused on writing code for their hackathon projects.",
  },
  {
    id: "hackathon-6",
    src: "/2025/images/gallery/hackathon-6.jpg",
    alt: "ETHTokyo Hackathon Problem Solving",
    category: "hackathon",
    title: "Problem Solving",
    description:
      "Teams working together to solve complex technical challenges.",
  },
  {
    id: "hackathon-7",
    src: "/2025/images/gallery/hackathon-7.jpg",
    alt: "ETHTokyo Hackathon Innovation",
    category: "hackathon",
    title: "Innovation Workshop",
    description:
      "Workshop sessions focused on innovative blockchain solutions.",
  },
  {
    id: "hackathon-8",
    src: "/2025/images/gallery/hackathon-8.jpg",
    alt: "ETHTokyo Hackathon Mentorship",
    category: "hackathon",
    title: "Mentorship Sessions",
    description: "Experienced mentors guiding hackathon participants.",
  },
  {
    id: "hackathon-9",
    src: "/2025/images/gallery/hackathon-9.jpg",
    alt: "ETHTokyo Hackathon Team Building",
    category: "hackathon",
    title: "Team Building",
    description: "Building strong teams and fostering collaboration.",
  },
  {
    id: "hackathon-10",
    src: "/2025/images/gallery/hackathon-10.jpg",
    alt: "ETHTokyo Hackathon Development Focus",
    category: "hackathon",
    title: "Development Focus",
    description: "Focused development sessions with clear project goals.",
  },
  {
    id: "hackathon-11",
    src: "/2025/images/gallery/hackathon-11.jpg",
    alt: "ETHTokyo Hackathon Creative Process",
    category: "hackathon",
    title: "Creative Process",
    description:
      "The creative process of building innovative blockchain applications.",
  },
  {
    id: "hackathon-12",
    src: "/2025/images/gallery/hackathon-12.jpg",
    alt: "ETHTokyo Hackathon Technical Discussion",
    category: "hackathon",
    title: "Technical Discussion",
    description: "Deep technical discussions about blockchain implementation.",
  },
  {
    id: "hackathon-13",
    src: "/2025/images/gallery/hackathon-13.jpg",
    alt: "ETHTokyo Hackathon Prototyping",
    category: "hackathon",
    title: "Prototyping",
    description: "Rapid prototyping of blockchain applications and features.",
  },
  {
    id: "hackathon-14",
    src: "/2025/images/gallery/hackathon-14.jpg",
    alt: "ETHTokyo Hackathon Testing",
    category: "hackathon",
    title: "Testing & Debugging",
    description: "Testing and debugging blockchain applications.",
  },
  {
    id: "hackathon-15",
    src: "/2025/images/gallery/hackathon-15.jpg",
    alt: "ETHTokyo Hackathon UI/UX Design",
    category: "hackathon",
    title: "UI/UX Design",
    description: "Designing user interfaces for blockchain applications.",
  },
  {
    id: "hackathon-16",
    src: "/2025/images/gallery/hackathon-16.jpg",
    alt: "ETHTokyo Hackathon Smart Contract Development",
    category: "hackathon",
    title: "Smart Contract Development",
    description: "Developing and testing smart contracts on Ethereum.",
  },
  {
    id: "hackathon-17",
    src: "/2025/images/gallery/hackathon-17.jpg",
    alt: "ETHTokyo Hackathon Frontend Development",
    category: "hackathon",
    title: "Frontend Development",
    description:
      "Building user-friendly frontends for blockchain applications.",
  },
  {
    id: "hackathon-18",
    src: "/2025/images/gallery/hackathon-18.jpg",
    alt: "ETHTokyo Hackathon Backend Development",
    category: "hackathon",
    title: "Backend Development",
    description: "Developing robust backends for blockchain applications.",
  },
  {
    id: "hackathon-19",
    src: "/2025/images/gallery/hackathon-19.jpg",
    alt: "ETHTokyo Hackathon Integration",
    category: "hackathon",
    title: "System Integration",
    description: "Integrating various components of blockchain applications.",
  },
  {
    id: "hackathon-20",
    src: "/2025/images/gallery/hackathon-20.jpg",
    alt: "ETHTokyo Hackathon Security",
    category: "hackathon",
    title: "Security Implementation",
    description: "Implementing security measures in blockchain applications.",
  },
  {
    id: "hackathon-21",
    src: "/2025/images/gallery/hackathon-21.jpg",
    alt: "ETHTokyo Hackathon Performance",
    category: "hackathon",
    title: "Performance Optimization",
    description: "Optimizing performance of blockchain applications.",
  },
  {
    id: "hackathon-22",
    src: "/2025/images/gallery/hackathon-22.jpg",
    alt: "ETHTokyo Hackathon Scalability",
    category: "hackathon",
    title: "Scalability Solutions",
    description: "Developing scalable solutions for blockchain applications.",
  },
  {
    id: "hackathon-23",
    src: "/2025/images/gallery/hackathon-23.jpg",
    alt: "ETHTokyo Hackathon Interoperability",
    category: "hackathon",
    title: "Interoperability Development",
    description: "Building interoperable blockchain solutions.",
  },
  {
    id: "hackathon-24",
    src: "/2025/images/gallery/hackathon-24.jpg",
    alt: "ETHTokyo Hackathon DeFi",
    category: "hackathon",
    title: "DeFi Innovation",
    description: "Innovating in the decentralized finance space.",
  },
  {
    id: "hackathon-25",
    src: "/2025/images/gallery/hackathon-25.jpg",
    alt: "ETHTokyo Hackathon NFT",
    category: "hackathon",
    title: "NFT Development",
    description: "Creating innovative NFT applications and platforms.",
  },
  {
    id: "hackathon-26",
    src: "/2025/images/gallery/hackathon-26.jpg",
    alt: "ETHTokyo Hackathon DAO",
    category: "hackathon",
    title: "DAO Development",
    description: "Building decentralized autonomous organizations.",
  },
  {
    id: "hackathon-27",
    src: "/2025/images/gallery/hackathon-27.jpg",
    alt: "ETHTokyo Hackathon Gaming",
    category: "hackathon",
    title: "Blockchain Gaming",
    description: "Developing blockchain-based gaming applications.",
  },
  {
    id: "hackathon-28",
    src: "/2025/images/gallery/hackathon-28.jpg",
    alt: "ETHTokyo Hackathon Social Impact",
    category: "hackathon",
    title: "Social Impact Projects",
    description: "Building blockchain solutions for social impact.",
  },
  {
    id: "hackathon-29",
    src: "/2025/images/gallery/hackathon-29.jpg",
    alt: "ETHTokyo Hackathon Sustainability",
    category: "hackathon",
    title: "Sustainability Solutions",
    description: "Developing sustainable blockchain applications.",
  },
  {
    id: "hackathon-30",
    src: "/2025/images/gallery/hackathon-30.jpg",
    alt: "ETHTokyo Hackathon Education",
    category: "hackathon",
    title: "Educational Tools",
    description: "Creating educational tools for blockchain learning.",
  },
  {
    id: "hackathon-31",
    src: "/2025/images/gallery/hackathon-31.jpg",
    alt: "ETHTokyo Hackathon Healthcare",
    category: "hackathon",
    title: "Healthcare Solutions",
    description: "Developing blockchain solutions for healthcare.",
  },
  {
    id: "hackathon-32",
    src: "/2025/images/gallery/hackathon-32.jpg",
    alt: "ETHTokyo Hackathon Supply Chain",
    category: "hackathon",
    title: "Supply Chain Solutions",
    description: "Building blockchain solutions for supply chain management.",
  },
  {
    id: "hackathon-33",
    src: "/2025/images/gallery/hackathon-33.jpg",
    alt: "ETHTokyo Hackathon Final Projects",
    category: "hackathon",
    title: "Final Project Showcase",
    description: "Showcasing the final projects from the hackathon.",
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
