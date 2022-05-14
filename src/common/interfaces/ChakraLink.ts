import { ReactNode } from "react";

export interface ChakraLinkInterface {
  as?: "button" | "flex";
  href: string;
  styles?: Record<string, any>;
  isExternal?: boolean; // only works if is not button
  children: ReactNode;
}
