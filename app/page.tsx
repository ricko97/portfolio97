"use client";

import React from "react";
import { Button, Card, CardFooter, Divider, Image } from "@heroui/react";
import clsx from "clsx";

import { title, subtitle } from "@/components/primitives";
import { IconArrowRightThick } from "@/components/icons";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <section className="flex max-sm:flex-col flex-row justify-between max-sm:gap-12 lg:gap-32 px-4">
        <div className="flex flex-col">
          <span className={title({ color: "blue" })}>{siteConfig.name}</span>
          <div className={subtitle({ class: "mt-4" })}>{siteConfig.intro}</div>
          <Button
            className={"mt-4 text-xl md:w-2/3 lg:w-1/3"}
            color="primary"
            endContent={<IconArrowRightThick />}
            fullWidth={false}
            variant="shadow"
          >
            <NextLink href={"/education"}>Let&#39;s get started</NextLink>
          </Button>
        </div>
        <Image
          alt={"Rick Lionel Onana"}
          className={"rounded-full shadow-inner-xl"}
          height={250}
          src={"/img/me.jpeg"}
          width={750}
        />
      </section>
      <div
        className={
          "flex flex-row gap-8 justify-end items-center text-nowrap self-start my-8 w-full px-4"
        }
      >
        <Divider className={"w-1/3"} orientation={"horizontal"} />
        <span className={`${title({ color: "cyan", size: "sm" })}`}>
          My Stack
        </span>
      </div>

      <section className={"flex flex-col justify-between gap-8 items-start"}>
        <div className={"flex justify-center gap-8 flex-wrap"}>
          {siteConfig.techs.map((tech) => {
            return (
              <Card
                key={tech.name}
                isFooterBlurred
                className={clsx("p-4", {
                  hidden: !tech.active,
                })}
                radius="lg"
              >
                <Image
                  alt={tech.name}
                  className="object-cover"
                  height={100}
                  src={tech.image}
                  width={100}
                />
                <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 py-1 absolute before:rounded-xl rounded-large bottom-0 left-0 shadow-small z-10">
                  <p className="text-md dark:text-white font-bold accent-gray-900">
                    {tech.name}
                  </p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </section>
  );
}
