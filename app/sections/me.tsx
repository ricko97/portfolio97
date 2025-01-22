"use client";

import React, { useEffect } from "react";
import { Button, Card, CardFooter, Divider, Image } from "@heroui/react";
import clsx from "clsx";
import NextLink from "next/link";
import { motion } from "motion/react";
import { useAnimation } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import { IconArrowRightThick } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Me() {
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      id="me"
    >
      <motion.section
        animate={mainControls}
        className="flex max-sm:flex-col flex-row items-center justify-between max-sm:gap-8 md:gap-16 lg:gap-16 px-4"
        initial="hidden"
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.5,
          delay: 0.25,
        }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
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
            <NextLink href={"/education"}>Lets get started</NextLink>
          </Button>
        </div>
        <Image
          alt={"Rick Lionel Onana"}
          className="rounded-full shadow-inner-xl max-sm:hidden"
          height="auto"
          src={"/img/me.jpeg"}
          width={900}
        />
        <Image
          alt={"Rick Lionel Onana"}
          className="rounded-full shadow-inner-xl lg:hidden md:hidden"
          height="auto"
          src={"/img/me.jpeg"}
          width={300}
        />
      </motion.section>
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

      <div
        className={
          "flex flex-row justify-center flex-wrap gap-3 overflow-x-hidden"
        }
      >
        {siteConfig.techs.map((tech) => {
          return (
            <motion.div
              key={tech.name}
              animate={{ x: -50 }}
              initial={{ x: 0 }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              className="inline-block w-auto"
            >
              <Card
                isFooterBlurred
                className={clsx("p-4", {
                  hidden: !tech.active,
                })}
                radius="lg"
              >
                <Image
                  alt={tech.name}
                  className="object-fill"
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
