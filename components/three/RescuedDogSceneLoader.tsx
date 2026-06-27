"use client";

import dynamic from "next/dynamic";

export const RescuedDogSceneLoader = dynamic(
  () => import("@/components/three/RescuedDogScene").then((mod) => mod.RescuedDogScene),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-moss-900" />
  }
);
