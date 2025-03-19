"use client";

import React from "react";

import Me from "@/app/sections/me";
import Education from "@/app/sections/education";
import Techs from "@/app/sections/techs";
import Experience from "@/app/sections/experience";
import ScrollSpy from "react-ui-scrollspy";
import { BottomNavbar, Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Skills } from "@/app/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-4 px-2 py-8 md:py-10 overflow-x-hidden">
      <section id="me">
        <Me />
        <Techs />
      </section>
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
