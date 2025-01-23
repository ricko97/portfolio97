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
import { FaUserGraduate } from "react-icons/fa6";

import { formatMonthYear } from "@/config/utils";
import { resumeData } from "@/config/resume";

export default function Education() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"]),
  );
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys],
  );
  const currentSchool = resumeData.education
    .filter((x) => x.id == selectedValue)
    .at(0);

  return (
    <section
      className="grid md:grid-cols-3 max-sm:grid-rows-2 gap-16 w-full py-16"
      id="education"
    >
      <section className="w-fullmax-w-[400px] px-1">
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
          <div className="flex flex-row">
            <Card
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
              shadow="sm"
            >
              <CardBody>
                <FaUserGraduate className="text-8xl" />
              </CardBody>
            </Card>
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
