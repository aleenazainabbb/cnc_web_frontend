"use client";

import { ReactNode } from "react";
import usePacContainerClass from "./hooks/usePacContainerClass";


export default function ClientWrapper({ children }: { children: ReactNode }) {
  usePacContainerClass("my-autocomplete-dropdown");
  return <>{children}</>;
}
