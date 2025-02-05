"use client";

import { motion } from "motion/react";
import { Card, CardFooter, Image } from "@heroui/react";
import React from "react";

import { siteConfig } from "@/config/site";
import useViewportSize from "@/hooks/useViewportSize";

export default function Techs() {
  const nbTechs = siteConfig.techs.filter((e) => e.active).length;

  const windowSize = useViewportSize();

  return (
    <div className="flex gap-3 flex-row flex-nowrap whitespace-nowrap m-0 p-0">
      {siteConfig.techs
        .filter((e) => e.active)
        .map((tech) => {
          return (
            <motion.div
              key={tech.name}
              animate={{
                x: [
                  (windowSize.width + 2 * nbTechs).toString() + "px",
                  (nbTechs * -145).toString() + "px",
                ],
              }}
              className="shrink-0"
              transition={{
                velocity: 3,
                duration: 1.5 * nbTechs,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Card
                isFooterBlurred
                className="p-4 my-1"
                radius="lg"
                shadow="sm"
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
  );
}
