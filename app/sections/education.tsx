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
import { animate, hover } from "motion";
import { motion } from "framer-motion";

import { formatMonthYear } from "@/config/utils";
import { resumeData } from "@/config/resume";
import clsx from "clsx";
import { Chip } from "@heroui/chip";
import { CheckIcon } from "@heroui/shared-icons";

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
      className="grid md:grid-cols-3 max-sm:grid-rows-2 gap-16 w-full py-16"
      id="education"
    >
      <section className="px-1">
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
                  scale: 1.08,
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
      </section>
      <section className="md:col-span-2 flex-col items-start ps-1">
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
          <div className="flex flex-row gap-8">
            <Card
              isBlurred
              className={clsx(
                "border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]",
                {
                  "bg-gradient-to-r from-green-500 to-green-800 shadow-lg shadow-green-600/50":
                    currentSchool!.graduated,
                  "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-600/50":
                    !currentSchool!.graduated,
                },
              )}
              shadow="sm"
            >
              <CardBody>
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
            <p className="text-medium text-justify">
              {currentSchool!.description}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
