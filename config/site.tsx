import { FaUserTie } from "react-icons/fa6";
import { IoMailSharp, IoSchool, IoSettingsSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rick Lionel ONANA",
  description: "Junior Android, IOs & Fullstack Developer",
  intro:
    "I’m a motivated junior developer focused on creating mobile apps for Android and iOS, as well as working on full-stack web development. " +
    "Over the past few years, I’ve gained experience in building easy-to-use mobile apps and developing strong backend systems to support web " +
    "applications.\n\nAdditionally, I’m a cybersecurity enthusiast with a passion for web application security, constantly exploring ways to build safer, " +
    "more resilient digital experiences.",
  navItems: [
    {
      label: "About Me",
      href: "me",
      icon: <FaUserTie />,
      bottomIcon: <FaUserTie size={24} />,
    },
    {
      label: "Education",
      href: "education",
      icon: <IoSchool />,
      bottomIcon: <IoSchool size={24} />,
    },
    {
      label: "Experience",
      href: "experience",
      icon: <MdWork />,
      bottomIcon: <MdWork size={24} />,
    },
    {
      label: "Skills",
      href: "skills",
      icon: <IoSettingsSharp />,
      bottomIcon: <IoSettingsSharp size={24} />,
    },
    {
      label: "Contact",
      href: "contact",
      icon: <IoMailSharp />,
      bottomIcon: <IoMailSharp size={24} />,
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/#",
    },
    {
      label: "Education",
      href: "/#education",
    },
    {
      label: "Experience",
      href: "/#experience",
    },
    {
      label: "Skills",
      href: "/#skills",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ],
  links: {
    github: "https://github.com/ricko97",
    linkedin: "https://www.linkedin.com/in/rlo/",
  },
  techs: [
    {
      name: "Vue",
      image: "/img/techs/vue-js.svg",
      active: true,
    },
    {
      name: "React",
      image: "/img/techs/react.svg",
      active: true,
    },
    {
      name: "Next.js",
      image: "/img/techs/next-js.svg",
      active: true,
    },
    {
      name: "Ionic",
      image: "/img/techs/ionic.svg",
      active: true,
    },
    {
      name: "Android Studio",
      image: "/img/techs/android-studio.svg",
      active: true,
    },
    {
      name: "Xcode",
      image: "/img/techs/xcode.svg",
      active: true,
    },
    {
      name: "Node.js",
      image: "/img/techs/node-js.svg",
      active: true,
    },
    {
      name: "Spring Boot",
      image: "/img/techs/spring.svg",
      active: true,
    },
    {
      name: "Javascript",
      image: "/img/techs/javascript.svg",
      active: false,
    },
    {
      name: "Typescript",
      image: "/img/techs/typescript.svg",
      active: false,
    },
    {
      name: "MongoDB",
      image: "/img/techs/mongodb.svg",
      active: true,
    },
    {
      name: "MySQL",
      image: "/img/techs/mysql.svg",
      active: true,
    },
    {
      name: "PHP",
      image: "/img/techs/php.svg",
      active: true,
    },
    {
      name: "Git",
      image: "/img/techs/git.svg",
      active: true,
    },
    {
      name: "Figma",
      image: "/img/techs/figma.png",
      active: true,
    },
    {
      name: "OWASP",
      image: "/img/techs/owasp.webp",
      active: true,
    },
  ],
};
