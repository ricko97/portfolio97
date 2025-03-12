"use client";

import React, { useEffect } from "react";
import { Button, Divider, Image } from "@heroui/react";
import { Link as SmoothLink} from "react-scroll";
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
      className="flex flex-col items-center justify-center gap-4 mt-8 md:mt-10"
      id="me"
    >
      <motion.div
        animate={mainControls}
        className="flex max-sm:flex-col flex-row items-center justify-between max-md:gap-8 md:max-2xl:gap-16"
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
        <div className="flex flex-col self-start w-full">
          <span className={title({ color: "blue" })}>{siteConfig.name}</span>
          <span className={subtitle({ class: "mt-4" })}>
            {siteConfig.intro}
          </span>
          <Button
            className={"mt-4 text-xl md:w-2/3 lg:w-1/3"}
            color="primary"
            endContent={<IconArrowRightThick />}
            fullWidth={false}
            variant="shadow"
          >
            <SmoothLink duration={800} to="education">
              Lets get started
            </SmoothLink>
          </Button>
        </div>
        <Image
          alt={"Rick Lionel Onana"}
          className="rounded-full shadow-inner-xl max-md:hidden"
          height="auto"
          src={"/img/me.jpeg"}
          width={500}
        />
        <Image
          alt={"Rick Lionel Onana"}
          className="rounded-full shadow-inner-xl md:hidden"
          height="auto"
          src={"/img/me.jpeg"}
          width={300}
        />
      </motion.div>
      <div
        className={
          "flex flex-row gap-8 justify-end items-center text-nowrap self-start mt-8 w-full px-4"
        }
      >
        <Divider className={"w-1/3"} orientation={"horizontal"} />
        <span className={`${title({ color: "cyan", size: "sm" })}`}>
          My Stack
        </span>
      </div>
    </section>
  );
}
