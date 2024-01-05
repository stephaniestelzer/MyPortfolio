import {
  mobile,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  jira,
  kotlin,
  maya,
  monday,
  python,
  usd,
  paramount,
  target,
  theAgency,
  RiggingStudyImg,
  Parkourimg,
  FireGraphic,
  ufIBM,
  glRobotImg,
  polarDashImg,
  terrarium,
  Stelzer_Stephanie_Render_01,
  Stelzer_Stephanie_Render_02,
  Stelzer_Stephanie_Render_03,
  GardenArch_Reference,
  Garden_Shed_Reference,
  GardenBench_Reference,
  SucculentFountain_Reference,
  Succulent_FlowerPot_Reference,
} from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "about",
    title: "About",
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Director Intern",
    company_name: "Paramount Feature Animation",
    icon: target,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: target,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: target,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: target,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const experienceCards = [
  {
    companyName: "Paramount Animation",
    title: "Technical Director Intern",
    icon: paramount,
    link: "/paramount",
    techStack: [
      {
        name: "Maya",
        icon: maya,
      },
      {
        name: "USD",
        icon: usd,
      },
      {
        name: "Python",
        icon: python,
      },
      {
        name: "Jira",
        icon: jira,
      },
    ],
    description: "worked alongside Technical Directors and artists to develop an efficient and organized production pipeline.",
  },
  {
    companyName: "The Agency at UF",
    title: "Developer Dept. Manager and Full-Stack Developer",
    icon: theAgency,
    link: "/theAgency",
    techStack: [
      {
        name: "Monday.com",
        icon: monday,
      },
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "React",
        icon: reactjs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "Figma",
        icon: figma,
      },
    ],
    description: "collaborated with an interdisciplinary team to enable creative ideas to come to life.",
  },
  {
    companyName: "Target",
    title: "Software Engineering Intern",
    icon: target,
    link: "/target",
    techStack: [
      {
        name: "Docker",
        icon: docker,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Jira",
        icon: jira,
      },
      {
        name: "Kotlin",
        icon: kotlin,
      },
    ],
    description: "built a microservice that logged changes within internal enterprise software.",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const TerrariumReference = [
  {
    image: GardenArch_Reference,
  },
  {
    image: Garden_Shed_Reference,
  },
  {
    image: GardenBench_Reference,
  },
  {
    image: SucculentFountain_Reference,
  },
  {
    image: Succulent_FlowerPot_Reference,
  }
]

const projects = [
  {
    name: "Parkour Animation Blocking",
    description:
      "Switching between IK and FK to create blocking for a body mechanics shot.",
    tags: [
      {
        name: "Maya",
        color: "bg-cyan-500",
      },
      {
        name: "3D",
        color: "bg-red-400",
      },
    ],
    image: Parkourimg,
    source_code_link: "/parkourAnimation",
  },
  {
    name: "Terrarium",
    description:
      "Floating 3D terrarium, modeled parametrically in Cinema4D.",
    tags: [
      {
        name: "Cinema4D",
        color: "bg-blue-800",
      },
      {
        name: "3D",
        color: "bg-red-400",
      },
    ],
    image: terrarium,
    source_code_link: "/Terrarium",
  },
  {
    name: "Rigging Study",
    description:
      "Individual course of study conducted with an animation lecturer at the Digital Worlds Institute at the University of Florida. Topics covered included model/mesh cleaning, auto rigging systems, joint placement, weight-painting, blend shapes.",
    tags: [
      {
        name: "Maya",
        color: "bg-cyan-500",
      },
      {
        name: "3D",
        color: "bg-red-400",
      },
    ],
    image: RiggingStudyImg,
    source_code_link: "/riggingStudy",
  },
  {
    name: "Fire Starter",
    description:
      "A Houdini tool that simplifies the process of creating fire simulations.",
    tags: [
      {
        name: "Houdini",
        color: "bg-orange-500",
      },
      {
        name: "Python",
        color: "bg-blue-500",
      },
      {
        name: "Qt",
        color: "bg-green-500",
      },
    ],
    image: FireGraphic,
    source_code_link: "/fireStarter",
  },
  {
    name: "Gator Gulf Energy",
    description:
      "A proposal for using tidal power as a renewable energy resource. Florida Hacks With IBM - First Place Winner.",
    tags: [
      {
        name: "Figma",
        color: "bg-pink-500",
      },
      {
        name: "React",
        color: "bg-purple-500",
      },
      {
        name: "Maya",
        color: "bg-cyan-500",
      },
    ],
    image: ufIBM,
    source_code_link: "/gulfEnergy",
  },
  {
    name: "OpenGL Robot",
    description:
      "Created using OpenGL and C++. Concepts explored include Vertex Buffer/Array Objects, hierarchy set-up, and transformation matrices.",
    tags: [
      {
        name: "C++",
        color: "bg-indigo-500",
      },
    ],
    image: glRobotImg,
    source_code_link: "/glRobot",
  },
  {
    name: "Popsicle's Polar Dash",
    description:
      "Help popsicle the penguin collect snowflakes to lower the temperature of his environment and restore the winter wonderland!",
    tags: [
      {
        name: "Unity",
        color: "bg-zinc-800",
      },
    ],
    image: polarDashImg,
    source_code_link: "/polarDash",
  },
  {
    name: "Portfolio Website",
    description:
      "My digital scrapbook.",
    tags: [
      {
        name: "React",
        color: "bg-purple-500",
      },
      {
        name: "TailwindCSS",
        color: "bg-sky-500",
      },
      {
        name: "Figma",
        color: "bg-pink-500",
      },
    ],
    image: tripguide,
    source_code_link: "/portfolioProject",
  },
];

export { services, technologies, experiences, testimonials, projects, experienceCards, TerrariumReference };
