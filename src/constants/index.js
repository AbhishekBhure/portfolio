import {
  mobile,
  backend,
  reactJS,
  webicon,
  creator,
  web,
  newsapp,
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
  TheLoosersCompany,
  carrent,
  jobit,
  tripguide,
  threejs,
  al,
  t,
  test01,
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
    title: "Web Developer",
    icon: webicon,
  },

  {
    title: "ReactJS Developer",
    icon: reactJS,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
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
    title: "Full Stack (MERN) Developer",
    company_name: "TheLoosersCompany",
    icon: TheLoosersCompany,
    iconBg: "#1d1836",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Abhishek on our ecommerce web application was a game-changer. His expertise, dedication, and seamless teamwork elevated our project to new heights. Highly recommended!.",
    name: "Pranav Chivate",
    designation: "ITO/Cloud Platforms",
    company: "DXC Technology",
    image: test01,
    linkedInUrl: "https://www.linkedin.com/in/pranav-chivate",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abhishek does.",
    name: "Pranav Chivat",
    designation: "",
    company: "",
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
    name: "AL-Taj",
    description:
      "A landing web-based project for a resturant to show case their food items.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "red-text-gradient",
      },
    ],
    image: al,
    source_code_link: "https://github.com/thelooserscompany/altaj-website",
  },
  {
    name: "T-shirt",
    description: "Web application that enables users to customize the t-shirt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "farmarmotion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "red-text-gradient",
      },
    ],
    image: t,
    source_code_link: "https://github.com/AbhishekBhure/t-shirt",
  },
  {
    name: "NewsDaily",
    description:
      "A comprehensive news website that lets user to read daily news article.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "red-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/AbhishekBhure/WebNewsApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
