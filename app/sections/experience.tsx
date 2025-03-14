// eslint-disable-next-line import/order
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTheme } from "next-themes";
import { Chip } from "@heroui/chip";
import { Button, Divider } from "@heroui/react";

import { resumeData } from "@/config/resume";
import { title } from "@/components/primitives";

export default function Experience() {
  const { theme } = useTheme();
  const arrayColor = theme === "dark" ? "#212121" : "#f5f5f5";

  return (
    <section id="experience">
      <Divider className={"justify-center"} orientation={"horizontal"} />
      <div className={"mt-10 mb-20 text-center"}>
        <h1 className={title({ color: "blue" })}>Projects & Experience</h1>
        <p className={"text-gray-700 dark:text-white"}>
          Showcase of my latest works, projects and developments.
        </p>
      </div>
      <VerticalTimeline lineColor={"grey"}>
        {resumeData.experience.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            contentArrowStyle={{
              borderRight: "solid 7px " + arrayColor,
            }}
            contentStyle={{
              background: theme === "dark" ? "#212121" : "#f5f5f5",
              color: theme === "dark" ? "#fff" : "#000",
              boxShadow: "none",
              borderBottom: "solid 4px #0288D1",
            }}
            date={exp.date_range}
            dateClassName={"dark:text-white text-gray-900"}
            icon={exp.icon}
            iconStyle={{ background: "#212121", color: "#fff" }}
          >
            <div className={"flex gap-1 mb-2 flex-wrap"}>
              {exp.tags.map((tag) => (
                <Chip
                  key={tag}
                  className={"font-bold"}
                  color="default"
                  variant="shadow"
                >
                  {tag}
                </Chip>
              ))}
            </div>
            <h1 className="vertical-timeline-element-title text-xl font-bold">
              {exp.title}
            </h1>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.company}
            </h4>
            <p>{exp.description}</p>
            <div className={"flex gap-1 mt-3 flex-wrap"}>
              {exp.links.map((link) => (
                <Button
                  key={link.text}
                  className={"font-bold"}
                  color="primary"
                  size={"sm"}
                  variant="solid"
                  onPress={() => window.open(link.url)}
                >
                  {link.text}
                </Button>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
