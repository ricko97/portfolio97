"use client";

import React from "react";

import Me from "@/app/sections/me";
import Education from "@/app/sections/education";
import Techs from "@/app/sections/techs";
import Experience from "@/app/sections/experience";
import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-4 px-2 py-8 md:py-10 overflow-x-hidden">
      <ScrollSpy offsetTop={50} scrollThrottle={100} updateHistoryStack={false}>
        <section id="me">
          <Me />
          <Techs />
        </section>
        <Education />
        <Experience />
      </ScrollSpy>
    </main>
  );
}
