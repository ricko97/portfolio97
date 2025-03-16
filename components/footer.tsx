import { Link } from "@heroui/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-6">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://www.heroui.com/"
        title="heroui.com homepage"
      >
        <span className="text-default-600">Built from scratch with</span>
        <p className="text-primary">HeroUI</p>
      </Link>
    </footer>
  );
};
