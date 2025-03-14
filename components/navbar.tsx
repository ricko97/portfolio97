"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo, LinkedinIcon } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800, // Animation duration in milliseconds
      smooth: "easeIn", // Easing effect
    });
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <div className="flex justify-start items-center gap-1">
          <Logo />
          <p className="font-bold text-inherit">RLO</p>
        </div>
      </NavbarBrand>
      <ul className="hidden md:flex lg:flex gap-4 justify-start ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            {item.href === "me" ? (
              <Link
                className={"cursor-pointer text-default-800"}
                data-to-scrollspy-id={item.href}
                onPress={scrollToTop}
              >
                <span className={"flex items-center"}>{item.icon}&nbsp;{item.label}</span>
              </Link>
            ) : (
              <SmoothLink
                smooth
                className={clsx("cursor-pointer", {
                  "text-primary font-bold": pathname === item.href,
                })}
                data-to-scrollspy-id={item.href}
                duration={500}
                to={item.href}
              >
                <span className={"flex items-center"}>{item.icon}&nbsp;{item.label}</span>
              </SmoothLink>
            )}
          </NavbarItem>
        ))}
      </ul>

      <NavbarContent
        className="flex basis-1/5 sm:basis-full"
        justify="end"
      >
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
