"use client";

import React, { useEffect } from "react";
import { Button, Divider, Image, Link } from "@heroui/react";
import { motion } from "motion/react";
import { useAnimation } from "framer-motion";
import { MdDownload } from "react-icons/md";
import { GrValidate } from "react-icons/gr";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Me() {
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-3 gap-4 mt-8 md:mt-4">
      <motion.div
        animate={mainControls}
        className="flex max-sm:flex-col flex-row items-center gap-8 justify-between max-md:gap-8 md:max-2xl:gap-8"
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
        <div className="flex flex-col self-start w-full md:w-1/2 lg:w-2/3">
          <span className={title({ color: "blue" })}>{siteConfig.name}</span>
          <span className={subtitle({ class: "mt-4" })}>
            {siteConfig.intro.split("\n").map((s, index) => (
              <p key={index} className={"py-2"}>
                {s}
              </p>
            ))}
          </span>
          <div className="flex justify-start gap-3 mt-8">
            <Link
              isExternal
              className={"text-xl "}
              href={"/files/LionelOnana_resume.pdf"}
            >
              <Button
                color="primary"
                endContent={<MdDownload />}
                fullWidth={false}
                variant="shadow"
              >
                Download
              </Button>
            </Link>
            <Link className={"text-xl "} href={"mailto:oricklionel@gmail.com"}>
              <Button
                color="danger"
                endContent={<GrValidate />}
                fullWidth={false}
                variant="shadow"
              >
                Hire me
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            alt={"Rick Lionel Onana"}
            className="rounded-full object-cover shadow-inner-xl max-lg:hidden"
            height={320}
            src={"/img/me_2.jpg"}
            width={320}
          />

          <Image
            alt={"Rick Lionel Onana"}
            className="rounded-full object-cover shadow-inner-xl max-sm:hidden lg:hidden"
            height={280}
            src={"/img/me_2.jpg"}
            width={280}
          />

          <Image
            alt={"Rick Lionel Onana"}
            className="rounded-full object-cover shadow-inner-xl sm:hidden"
            height={300}
            src={"/img/me_2.jpg"}
            width={300}
          />
        </div>
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
    </div>
  );
}
