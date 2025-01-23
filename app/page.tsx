"use client";

import React from "react";

import Me from "@/app/sections/me";
import Education from "@/app/sections/education";
import Techs from "@/app/sections/techs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 px-2 py-8 md:py-10 overflow-x-hidden">
      <Me />
      <Techs />
      <Education />
    </main>
  );
}
