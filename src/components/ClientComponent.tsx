"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Print = dynamic(
  () => import("@/components/Print").then((mod) => mod.Print),
  { ssr: false }
);
export const ClientComponent = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return <div>{isClient && <Print />}</div>;
};
