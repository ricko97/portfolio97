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

import { resumeData } from "@/config/resume";
import { formatMonthYear } from "@/config/utils";

export default function DocsPage() {
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
    <div className="grid md:grid-cols-3 max-sm:grid-rows-2 gap-16 w-full">
      <div className="w-fullmax-w-[400px] px-1">
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
                <CardBody>
                  <p>{item.description}</p>
                </CardBody>
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
      </div>
      <div className="md:col-span-2 flex-col items-start">
        <h1 className="text-4xl font-extrabold">
          {currentSchool!.school_long}
        </h1>
      </div>
    </div>
  );
}
