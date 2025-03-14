import { MdWork } from "react-icons/md";
import { IoGameController, IoLogoFigma, IoLogoReact } from "react-icons/io5";
import { IoLogoIonic } from "react-icons/io";

export const resumeData = {
  education: [
    {
      id: "1",
      school: "Ahuntsic College",
      school_long: "Ahuntsic College",
      logo: {
        image: "/logo/ahuntsic_2.png",
        width: 140,
        height: 30,
      },
      website: "https://www.collegeahuntsic.qc.ca",
      start_date: "2024-01-20",
      end_date: "2025-02-20",
      diploma: "Attestation of Collegial Studies",
      major: "Mobile Applications Development",
      minor: "",
      grade: "",
      description:
        "Intensive one-year program focused on the development of native and hybrid mobile applications. " +
        "I learned and practiced several front-end frameworks and technologies in order to create " +
        "progressive and mobile applications. These studies brought me up to date on current technologies and " +
        "introduced me to mobile development, a sector I'm very passionate about.",
      location: "Montréal, Canada",
      media: [],
      graduated: false,
      details: "Must complete an internship",
      courses: [
        "Oriented-Object Programming",
        "Swift/Xcode",
        "Kotlin/Android Studio",
        "Cross-Platform Apps",
        "Progressive Web Apps",
        "Server-side Programming",
        "Mobile Apps Design",
        "Nosql Databases/MongoDB",
      ],
    },
    {
      id: "2",
      school: "ESPRIT",
      school_long: "École Supérieure Privée d'Ingénierie et de Technologies",
      logo: {
        image: "/logo/esprit.png",
        width: 90,
        height: 45,
      },
      website: "https://esprit.tn",
      start_date: "2017-10-01",
      end_date: "2020-08-01",
      diploma: "Engineering Degree",
      major: "Software Engineering",
      minor: "Network, Infrastructure & Data Security",
      grade: "",
      description:
        "It was the most important studies I did because it introduced me to software engineering. " +
        "It was a three-year program focusing mainly on application development (desktop and web), " +
        "with an emphasis on infrastructure, network and data security. At the end of this program, " +
        "I was able to understand several important aspects of software development, such as data modeling, " +
        "object oriented and frameworks.",
      location: "Tunis, Tunisia",
      media: [],
      graduated: true,
      details: null,
      courses: [
        "C/C++",
        "UML/OOP",
        "SQL Databases",
        "MVC Architecture/JavaEE",
        "System and Network Programming",
        "Advanced algorithms & cryptography",
        "Web Applications Security",
        "Network services and administration",
        "CCNA Security",
        "Virtualization & Security",
      ],
    },
    {
      id: "3",
      school: "École Supérieure de Gestion",
      school_long: "École Supérieure de Gestion",
      logo: {
        image: "/logo/esg.png",
        width: 70,
        height: 40,
      },
      website: "https://univ-iug.com",
      start_date: "2015-10-01",
      end_date: "2017-06-01",
      diploma: "Bachelor's Degree",
      major: "Information Systems Management",
      minor: "",
      grade: "",
      description:
        "My very first IT program equipped me with important IT and management skills. I learned algorithms and how to write my " +
        "first lines of code. I was also introduced to relational databases, operating systems and computer networks.",
      location: "Douala, Cameroon",
      media: [],
      graduated: true,
      details: null,
      courses: [
        "Data modeling",
        "SQL Databases/Ms Access",
        "Networking",
        "Algorithms",
        "Statistics & Probability",
        "Computer Architecture",
        "Office Technology",
      ],
    },
  ],
  experience: [
    {
      id: 1,
      title: "Rekap - Invoice and Warranty App",
      company: "Ahuntsic College",
      date_range: "December 2024 - January 2025",
      description:
        "Centralize your warranties and invoices, receive expiration alerts and find your documents in instant.",
      tags: ["Ionic", "Typescript", "Vue", "NodeJs", "Firebase"],
      icon: <IoLogoIonic />,
      links: [
        {
          text: "Landing page",
          url: "https://rekap-landing-page-y6n9.vercel.app/",
        },
        { text: "App", url: "https://invoice-warranty-keper.vercel.app/" },
      ],
    },
    /*{
      id: 2,
      title: "Mobile App for managing and sharing journeys",
      company: "Ahuntsic College",
      date_range: "September 2024 - October 2024",
      description:
        "Manage your routes, visualize them on a map, share with other users, and add new routes by recording GPS positions.",
      tags: ["Ionic", "Typescript", "Vue", "REST API"],
      icon: <MdSchool />,
      links: [
        {
          text: "Github",
          url: "https://github.com/ricko97/projet2_final_ionic",
        },
      ],
    },*/
    {
      id: 3,
      title: "Task Management App",
      company: "Ahuntsic College",
      date_range: "October 2024",
      description:
        "Log in, register, manage your list of tasks and modify their status.",
      tags: ["React Native", "Typescript"],
      icon: <IoLogoReact />,
      links: [
        {
          text: "Github",
          url: "https://github.com/ricko97/projet-react-native",
        },
      ],
    },
    {
      id: 4,
      title: "Figma UI/UX Design",
      company: "Ahuntsic College",
      date_range: "March 2024",
      description:
        "Create a Figma design for Cinema booking App, with animations and interactions.",
      tags: ["Figma", "UI/UX"],
      icon: <IoLogoFigma />,
      links: [
        {
          text: "Design url",
          url: "https://www.figma.com/design/LiAYTIyivBclrJDh4tg7yY/eI_ps_onana_lionel_phase2",
        },
      ],
    },
    {
      id: 5,
      title: "Gaming Hub Website",
      company: "Personal",
      date_range: "July 2023",
      description:
        "A replication of the popular website Rawg.io that allows people to browse and discover new video games.",
      tags: ["React", "Typescript", "REST API", "State-management"],
      icon: <IoGameController />,
      links: [
        {
          text: "Github",
          url: "https://github.com/ricko97/game-hub",
        },
        {
          text: "Website",
          url: "https://game-hub-ricko97.vercel.app/",
        },
      ],
    },
    {
      id: 6,
      title: "Full Stack Developer Intern",
      company: "Xtensus",
      date_range: "April 2020 - August 2020",
      description:
        "Worked on a budget management web app for governments, enabling budget creation, validation, and tracking by ministry.",
      tags: ["Java", "Spring", "MySQL", "LDAP"],
      icon: <MdWork />,
      links: [
        {
          text: "Company website",
          url: "https://xtensus.tn",
        },
      ],
    },
    {
      id: 7,
      title: "Cybersecurity Technician Intern",
      company: "YobiTrust",
      date_range: "July 2019 - August 2019",
      description:
        "Deployed a network monitoring system to prevent attacks and detect threats.",
      tags: ["Ubuntu", "Nagios", "Snort", "Firewall", "ELK Stack"],
      icon: <MdWork />,
      links: [
        {
          text: "Company website",
          url: "https://yobitrust.com",
        },
      ],
    },
  ],
};
