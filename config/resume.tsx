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
      details: "Urgent search for internship",
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
      end_date: "2021-11-01",
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
  skills: [
    {
      id: 1,
      name: "Frontend Development",
      image: "/img/skills/frontend_dev.png",
      rate: 80,
      details: [
        "Building layouts, structuring content, and styling websites",
        "Strong understanding of vanilla JavaScript and frameworks",
        "Crafting websites that work seamlessly on all devices",
        "Interacting with RESTful APIs and understanding JSON",
        "Ensuring fast load times and smooth user experience",
      ],
      techs: [
        "HTML/CSS",
        "Typescript",
        "React",
        "Vue",
        "Bootstrap",
        "TailwindCSS",
      ],
    },
    {
      id: 2,
      name: "Backend Development",
      image: "/img/skills/backend_dev.png",
      rate: 70,
      details: [
        "Proficiency in languages like Java, PHP, or Node.js",
        "Expertise with relational databases and NoSQL databases",
        "Implementing secure authentication systems with JWT",
        "Solid grasp of data structure and algorithms for optimizing performance.",
        "Designing, building, and maintaining RESTful APIs",
      ],
      techs: [
        "Express.js",
        "Spring Boot",
        "Websockets",
        "PostgreSQL/ORM",
        "Firebase",
        "MongoDB",
      ],
    },
    {
      id: 3,
      name: "Mobile App Development",
      image: "/img/skills/mobile_dev.png",
      rate: 55,
      details: [
        "Build Native IOS and Android applications",
        "Knowledge of cross-platform frameworks like Ionic & React Native",
        "Understanding user-centered design principles",
        "Working with SQLite or Core Data for local data storage",
        "Consuming RESTful APIs to fetch and send data",
        "Familiarity with tools like XCTest (iOS), Espresso (Android)",
      ],
      techs: [
        "Swift/Swift UI",
        "Kotlin",
        "Jetpack Compose",
        "Ionic",
        "React Native",
        "Figma",
        "Core Data",
      ],
    },
    {
      id: 4,
      name: "Web Application Security",
      image: "/img/skills/web_sec.png",
      rate: 50,
      details: [
        "Knowledge of OWASP Top 10 vulnerabilities and secure coding practices",
        "Working with vulnerability scanners to identify and exploit vulnerabilities",
        "Understanding of encryption algorithms, hashing, and secure protocols",
        "Working with logging tools and monitoring systems",
        "Familiarity with Static Code Analysis (SAST) tools",
      ],
      techs: [
        "OWASP",
        "Burpsuite",
        "Nessus",
        "ELK Stack",
        "HTTPS/TLS",
        "Metasploit",
        "SAST",
      ],
    },
  ],
};
