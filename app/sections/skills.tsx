import {
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  Divider,
  Image,
  ScrollShadow,
} from "@heroui/react";
import { Chip } from "@heroui/chip";

import { title } from "@/components/primitives";
import { resumeData } from "@/config/resume";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section id="skills">
      <Divider className={"justify-center mt-10"} orientation={"horizontal"} />
      <div className={"my-10 text-center"}>
        <h1 className={title({ color: "blue" })}>Skills</h1>
        <p className={"text-gray-700 dark:text-white"}>
          My Skills set and areas of interest
        </p>
      </div>
      <motion.div
        className={"my-10 flex flex-wrap justify-center gap-4"}
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: "spring",
          stiffness: 50,
          damping: 5,
          mass: 0.1,
        }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {resumeData.skills.map((skill) => (
          <Card key={skill.id} className="max-w-[300px]">
            <CardHeader className={"flex flex-col justify-center"}>
              <Image
                alt={skill.name}
                height={200}
                src={skill.image}
                width={200}
              />
              <div className={"flex justify-between gap-3"}>
                <h3 className={"font-bold text-lg self-center flex-wrap"}>
                  {skill.name}
                </h3>
                <CircularProgress
                  classNames={{
                    svg: "w-12 h-12 drop-shadow-md shadow-default",
                    indicator: "dark:stroke-white stroke-default-700",
                    track: "dark:stroke-white/10 stroke-default-700/10",
                    value:
                      "text-xs font-semibold dark:text-white text-default-700",
                  }}
                  showValueLabel={true}
                  strokeWidth={4}
                  value={skill.rate}
                />
              </div>
            </CardHeader>
            <Divider />
            <CardBody className={"flex flex-col justify-center gap-3"}>
              <ScrollShadow hideScrollBar className="h-[150px]">
                <div className="flex flex-col gap-1.5 pb-8">
                  {skill.details.map((detail) => (
                    <p key={detail} className={"leading-tight"}>
                      <span className={"text-lg leading-tight"}>•</span>&nbsp;
                      {detail}
                    </p>
                  ))}
                </div>
              </ScrollShadow>
              <div className="flex gap-2 flex-wrap">
                {skill.techs.map((tech) => (
                  <Chip key={tech} color="primary" variant="faded">
                    {tech}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};
