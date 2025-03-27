import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  starbucks,
  tesla,
  shopify,
  gamingsite,
  ailandingpg,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    title: "React Developer",
    company_name: "",
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Built responsive interfaces with Tailwind CSS and styled-components that maintained pixel-perfect designs across devices.",
     // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Assistant Operations",
    company_name: "Stanbic Bank",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2020 - Nov 2022",
    points: [
      
      "Identified inefficiencies in various procedures and implemented solutions leading to a 25% increase in efficiency.",
      "Maintained a perfect record during internal audits, ensuring compliance and accuracy in operations.",
      "Mentored 3 new hires, with 2 advancing to senior positions.",
      "Automated routine reporting processes using Excel macros, saving 5-10 hours weekly.",
    ],
  },
  {
    title: "Teller/Customer Service",
    company_name: "Stanbic Bank",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2014 - Mar 2020",
    points: [
      "Achieved a 20% increase in customer satisfaction scores by efficiently resolving customer issues.",
      "Recognized for exceptional client service with quarterly performance awards.",
      "Identified and resolved potential fraud cases resulting in savings for the bank.",
    ],
  },
  //{
    //title: "Full stack Developer",
    //company_name: "Meta",
    //icon: meta,
    //iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    //points: [
     // "Developing and maintaining web applications using React.js and other related technologies.",
      //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
     // "Implementing responsive design and ensuring cross-browser compatibility.",
     // "Participating in code reviews and providing constructive feedback to other developers.",
    //],
 // },
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

const projects = [
  {
    name: "Gaming Site",
    description:
      "A gaming site landing page with eye catching animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gamingsite,
    source_code_link: "https://github.com/nmwakuni/gamesite",
    external_link: "https://gamesite-vert.vercel.app/",
  },
  {
    name: "AI Startup Landing Page",
    description:
      "Beautiful landing page for an AI startup utilizing all aspects of UI/UX.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: ailandingpg,
    source_code_link: "https://github.com/nmwakuni/AILandingpg",
    external_link: "https://ai-landingpg.vercel.app/",
  },
  //{
   // name: "Trip Guide",
   // description:
   //   "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //tags: [
    //  {
    //    name: "nextjs",
     //   color: "blue-text-gradient",
     // },
     // {
     //   name: "supabase",
    //    color: "green-text-gradient",
     // },
     // {
     //   name: "css",
     //   color: "pink-text-gradient",
    //  },
   // ],
   // image: tripguide,
  //  source_code_link: "https://github.com/",
 // },
];

export { services, technologies, experiences, testimonials, projects };
