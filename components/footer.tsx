import { Link } from "@heroui/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center max-md:py-8 py-1">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://www.heroui.com/"
        title="heroui.com homepage"
      >
        <span className="text-default-600">
          Built from scratch with Next.Js &
        </span>
        <p className="text-primary">HeroUI</p>
      </Link>
    </footer>
  );
}
