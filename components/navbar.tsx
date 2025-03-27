"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Link as SmoothLink } from "react-scroll";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Image } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <div className="flex justify-start items-center gap-1">
          <Image
            alt={"logo"}
            className="rounded-full"
            height={40}
            src={"/rlo.png"}
            width={40}
          />
        </div>
      </NavbarBrand>
      <ul className="hidden md:flex lg:flex gap-4 justify-start ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <SmoothLink
              smooth
              activeClass={"active-scroll-spy"}
              className={clsx("cursor-pointer", {
                "text-primary font-bold": pathname === item.href,
              })}
              data-to-scrollspy-id={item.href}
              duration={500}
              offset={-40}
              spy={true}
              to={item.href}
            >
              <span className={"flex items-center"}>
                {item.icon}&nbsp;{item.label}
              </span>
            </SmoothLink>
          </NavbarItem>
        ))}
      </ul>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex gap-2">
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};

export const BottomNavbar = () => {
  return (
    <nav className="md:hidden z-50 fixed bottom-0 w-full dark:bg-black bg-white shadow-md border-t border-default-100">
      <div className="flex justify-around items-center py-2">
        {siteConfig.navItems.map((item) => (
          <SmoothLink
            key={item.label}
            smooth
            activeClass={"active-scroll-spy"}
            className="flex flex-col items-center text-gray-500 hover:text-blue-500 cursor-pointer"
            data-to-scrollspy-id={item.href}
            duration={500}
            offset={-40}
            spy={true}
            to={item.href}
          >
            {item.bottomIcon}
            <span className="text-xs">{item.label}</span>
          </SmoothLink>
        ))}
      </div>
    </nav>
  );
};
