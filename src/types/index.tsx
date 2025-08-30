import type { ReactNode } from "react";

export interface PageProps {
  pageTitle: string;
  params?: {
    id: string[];
  };
  searchParams?: { [key: string]: string | string[] | undefined };
  children?: ReactNode;
}

export interface ComponentProps {
  children?: ReactNode;
}

interface Contributor {
  name: string;
  linkToOnlinePresence: string;
  role: string;
  org: string;
  orgUrl: string;
  imagePath: string;
}

export interface Mentor extends Contributor {}

export interface Judge extends Contributor {}

// Re-export venue types
export * from "./venue";
