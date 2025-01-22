"use client";

import React from "react";

import Me from "@/app/sections/me";
import Education from "@/app/sections/education";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Me />
      <Education />
    </main>
  );
}
