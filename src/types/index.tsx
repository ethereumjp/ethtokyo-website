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

export interface Judge {
  name: string;
  role: string;
  org: string;
  orgUrl: string;
  imagePath: string;
}
