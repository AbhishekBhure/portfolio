import {
  mobile,
  reactJS,
  webicon,
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
  Edureka,
  Vsquare,
  threejs,
  al,
  test01,
  youtube,
  dhanvantari,
  puzzle,
  hru,
  pratik,
  sanj,
  social_github,
  social_linedIn,
  social_twitter,
  snapspace,
  makeover,
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

const socialMedia = [
  {
    name: "github",
    link: "https://github.com/AbhishekBhure",
    icon: social_github,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/abhishek-bhure",
    icon: social_linedIn,
  },
  {
    name: "twitter",
    link: "https://twitter.com/abhishekbhure_",
    icon: social_twitter,
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
    title: "Tutor - Full Stack (Mern)",
    company_name: "Edureka, Belgaum",
    icon: Edureka,
    iconBg: "#0052cc",
    date: "June 2023 - Oct 2023",
    points: [
      "Conducted tutoring sessions for a batch of 15-20 learners",
      "Provided guidance on MERN stack development, helping students grasp key concepts",
      "Assisted learners in hands-on coding exercise and projects, fostering practical skils",
    ],
  },
  {
    title: "Full Stack (MERN) Developer",
    company_name: "ServiceCart",
    icon: Vsquare,
    iconBg: "#1d1836",
    date: "April 2023 - Sept 2023",
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
      "As an Intern at theLoosersCompany, Abhishek always had a positive approarch to each and every project that we worked on and he is always seeking opportunities to expand his skills and knowledge. He has a self-learnig attitude that every team needs!.",
    name: "Hrushikesh Desai",
    designation: "Sr Mobile Developer",
    company: "TheLoosersCompany",
    image: hru,
    linkedInUrl: "https://www.linkedin.com/in/hrushikeshdesaihd",
  },
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
      "Working with Abhishek on our ecommerce web application was a game-changer. His expertise, dedication, and seamless teamwork elevated our project to new heights. Highly recommended!.",
    name: "Pratik Desai",
    designation: "Studying MCA ",
    company: "GIT College, Belgaum",
    image: pratik,
    linkedInUrl: "https://www.linkedin.com/in/pratik-desai-17b7111aa/",
  },

  {
    testimonial:
      "As a self thought developer Abhishek always gave his 100% effort to learn and expand his skill set. He has excellent time managment skills and I couldn't recommend him more for any business or like minded indiviuals looking for new talent!.",
    name: "Sanjana Kabadi",
    designation: "Data Scientist",
    company: "Dun & Bradstreet",
    image: sanj,
    linkedInUrl: "https://www.linkedin.com/in/sanjana-kabadi-58275a130/",
  },
];

const projects = [
  {
    name: "Dhanvantari",
    description:
      "A Ecommerce web application build for an client using Mern stack.(on going)",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripejs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "mern",
        color: "red-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
    ],
    image: dhanvantari,
    source_code_link: "https://github.com/thelooserscompany/altaj-website",
  },
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
    name: "SnapSpace",
    description: "A real estate project that elevates living with visinory.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "red-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: snapspace,
    source_code_link: "https://github.com/AbhishekBhure/realEstate",
    live: "https://snap-space.vercel.app/",
  },
  {
    name: "MakeOver",
    description:
      "Makeover: Redefining beauty with an innovative makeup destination.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "red-text-gradient",
      },
    ],
    image: makeover,
    source_code_link: "https://github.com/AbhishekBhure/makeover",
    live: "https://make-overr.netlify.app/",
  },
  {
    name: "YouTube Clone",
    description:
      "A comprehensive youtube clone that let's user to browse to the youtube videos. Using RapidApi.",
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
        name: "rapidApi",
        color: "red-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/AbhishekBhure/youtube_clone2.0",
    live: "https://youtube99.netlify.app/",
  },
  {
    name: "Puzzel Game",
    description:
      "An exciting Puzzel game that challenges the players to match the similar cards and earn points",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "materailUi",
        color: "green-text-gradient",
      },
      {
        name: "useSound",
        color: "pink-text-gradient",
      },
      {
        name: "array-shuffle",
        color: "red-text-gradient",
      },
    ],
    image: puzzle,
    source_code_link: "https://github.com/AbhishekBhure/memory-card-game",
    live: "https://puzzel-game.netlify.app",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedia,
};
