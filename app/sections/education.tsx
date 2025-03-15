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
import { HiInformationCircle } from "react-icons/hi2";
import { FaCircleCheck, FaClock, FaUserGraduate } from "react-icons/fa6";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Chip } from "@heroui/chip";
import { TbInfoCircleFilled } from "react-icons/tb";

import { IoLocationSharp } from "react-icons/io5";
import { resumeData } from "@/config/resume";
import { formatMonthYear } from "@/config/utils";
import { title } from "@/components/primitives";


export default function Education() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"]),
  );
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys],
  );
  const currentSchool = resumeData.education.find((x) => x.id == selectedValue);

  // @ts-ignore
  return (
    <section id="education">
      <div className={"my-10 text-center"}>
        <h1 className={title({ color: "blue" })}>Education</h1>
        <p className={"text-gray-700 dark:text-white"}>
          My previous qualifications and coursework.
        </p>
      </div>
      <div className="grid md:grid-cols-5 max-md:gap-8 max-md:grid-rows-1 w-full md:gap-16 md:py-16">
        <motion.div
          className="px-1 md:col-span-2 h-fit"
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
          className="md:col-span-3 flex-col items-start ps-1"
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col">
              <span className="text-4xl font-extrabold">
                {currentSchool!.school_long}
              </span>
              <span className="flex flex-row items-center text-lg text-default-500">
                <IoLocationSharp />
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
                  {<FaUserGraduate className="text-8xl" />}
                </CardBody>
              </Card>
              <div className="flex flex-col gap-2 font-bold justify-center">
                <span className="text-lg text-blue-700">
                  {currentSchool!.diploma}&emsp;
                  <Chip
                    className={clsx({
                      "text-green-600": currentSchool!.graduated,
                      "text-yellow-600": !currentSchool!.graduated,
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

                {currentSchool!.details != null ? (
                  <span className="text-small text-yellow-600 flex flex-row items-center">
                    <TbInfoCircleFilled /> &nbsp;{currentSchool!.details}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl font-bold flex flex-row items-center">
                <HiInformationCircle />
                &nbsp;Coursework
              </span>
              <div className="flex gap-2 flex-wrap">
                {currentSchool!.courses.map((course) => (
                  <Chip key={course} color="primary" variant="dot">
                    {course}
                  </Chip>
                ))}
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
      </div>
    </section>
  );
}
