"use client";

import type { Selection } from "@react-types/shared";

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Listbox,
  ListboxItem,
  Image,
} from "@heroui/react";
import { MdLocationOn } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi2";
import { FaCircleCheck, FaClock, FaUserGraduate } from "react-icons/fa6";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Chip } from "@heroui/chip";

import { resumeData } from "@/config/resume";
import { formatMonthYear } from "@/config/utils";

export default function Education() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"]),
  );
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys],
  );
  const currentSchool = resumeData.education.find((x) => x.id == selectedValue);

  return (
    <section
      className="grid md:max-2xl:grid-cols-5 max-md:gap-8 max-md:grid-rows-1 w-full md:max-2xl:gap-16 md:max-2xl:py-16"
      id="education"
    >
      <motion.div
        className="px-1 md:max-2xl:col-span-2 h-fit"
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Listbox
          disallowEmptySelection
          aria-label="Dynamic Actions"
          items={resumeData.education}
          selectedKeys={selectedKeys}
          selectionMode="single"
          variant="light"
          onSelectionChange={setSelectedKeys}
        >
          {(item) => (
            <ListboxItem key={item.id} className={"items-start"}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", duration: 0.5 },
                }}
              >
                <Card radius={"sm"} shadow="md">
                  <CardHeader className="flex gap-3">
                    <Image
                      alt={item.school}
                      className="object-cover"
                      height={item.logo.height}
                      radius="sm"
                      src={item.logo.image}
                      width={item.logo.width}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">{item.school}</p>
                      <p className="text-small text-default-500">{`${formatMonthYear(new Date(item.start_date))} - ${formatMonthYear(new Date(item.end_date))}`}</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardFooter>
                    <Link isExternal showAnchorIcon href={item.website}>
                      {`Visit ${item.school}`}
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            </ListboxItem>
          )}
        </Listbox>
      </motion.div>
      <motion.div
        className="md:max-2xl:col-span-3 flex-col items-start ps-1"
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col">
            <span className="text-4xl font-extrabold">
              {currentSchool!.school_long}
            </span>
            <span className="flex flex-row items-center">
              <MdLocationOn className="text-lg text-default-500" />
              <p className="text-lg text-default-500">
                {currentSchool!.location}
              </p>
            </span>
          </div>
          <div className="flex flex-row gap-8 w-max-[200px]">
            <Card
              isBlurred
              className={clsx(
                "border-none bg-background/60 dark:bg-default-100/50 w-auto max-sm:hidden self-center",
                {
                  "bg-gradient-to-r from-green-500 to-green-800 shadow-lg shadow-green-600/50":
                    currentSchool!.graduated,
                  "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-600/50":
                    !currentSchool!.graduated,
                },
              )}
              shadow="sm"
            >
              <CardBody className="items-center w-full">
                <FaUserGraduate className="text-8xl" />
              </CardBody>
            </Card>
            <div className="flex flex-col gap-2 font-bold justify-center">
              <span className="text-lg text-blue-700">
                {currentSchool!.diploma}&emsp;
                <Chip
                  className={clsx({
                    "text-green-600": currentSchool!.graduated,
                    "text-yellow-400": !currentSchool!.graduated,
                  })}
                  color="secondary"
                  startContent={
                    currentSchool!.graduated ? <FaCircleCheck /> : <FaClock />
                  }
                  variant="faded"
                >
                  {" "}
                  {currentSchool!.graduated ? "Graduated" : "Not graduated"}
                </Chip>
              </span>
              <div className="">
                <span className="text-medium text-default-600">
                  {currentSchool!.major}
                </span>
                <br />
                <span className="text-small text-default-600">
                  {currentSchool!.minor}
                </span>
              </div>

              <p className="text-small text-default-500 justify-self-end self-">{`${formatMonthYear(new Date(currentSchool!.start_date))} 
              - ${formatMonthYear(new Date(currentSchool!.end_date))}`}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold flex flex-row items-center">
              <HiInformationCircle />
              &nbsp;About this program
            </span>
            <p className="text-medium">{currentSchool!.description}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
