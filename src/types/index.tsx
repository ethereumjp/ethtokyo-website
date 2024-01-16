import { ReactNode } from "react";

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
