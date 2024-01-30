import {
  twitter,
  instagram,
  github,
  linkedin,
  devops,
} from "../public/assets/icons";
import {
  expertiseImage1,
  expertiseImage2,
  expertiseImage3,
  expertiseImage4,
  placeholderImage,
} from "../public/assets/images";
import { frontEnd, server, database } from "../public/assets/icons";
import {
  projectVideo1,
  projectVideo2,
  projectVideo3,
} from "@/public/assets/videos";
import {
  project_poster1,
  project_poster2,
  project_poster3,
} from "@/public/assets/videos/thumbs";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Work" },
  // { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export const skillsShowcase = [
  {
    type: "Front-End",
    icon: frontEnd,
    skills: [
      { name: "HTML/CSS" },
      { name: "Tailwind" },
      { name: "Bootstrap" },
      { name: "Javascript" },
      { name: "ReactJs" },
    ],
  },
  {
    type: "Back-End",
    icon: server,
    skills: [{ name: "NextJs" }, { name: "Node.js" }, { name: "Flask" }],
  },
  {
    type: "Database",
    icon: database,
    skills: [{ name: "MongoDB" }, { name: "MySQL" }, { name: "SQLite" }],
  },
  {
    type: "Other",
    icon: devops,
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Firebase" },
    ],
  },
];

export const expertise = [
  {
    imgURL: expertiseImage1,
    name: "Fullstack Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati.",
  },
  {
    imgURL: expertiseImage2,
    name: "Video Editing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati.",
  },
  {
    imgURL: expertiseImage3,
    name: "3D Modeling",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati.",
  },
  {
    imgURL: expertiseImage4,
    name: "Graphics Designing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati.",
  },
];

export const recentWork = [
  // Twibble - Threads Colone
  {
    videoSrc: projectVideo1,
    poster: project_poster1,
    title: "Twibble - Threads Colone",
    technology: [
      { name: "NextJs" },
      { name: "Ts" },
      { name: "MongoDb" },
      { name: "Clerk" },
    ],
    link_live: "https://twibble.vercel.app/",
    link_code: "https://github.com/ShafiWalsher/Twibble_A-Threads-Clone-App",
  },
  // IEvnt - Event Organizer
  {
    videoSrc: projectVideo3,
    poster: project_poster3,
    title: "IEvnt - Event Organizer",
    technology: [
      { name: "NextJs" },
      { name: "Ts" },
      { name: "MongoDb" },
      { name: "Clerk" },
    ],
    link_live: "https://i-evnt.vercel.app/",
    link_code: "https://github.com/ShafiWalsher/IEvnt-AnEventOrganizer",
  },
  // KyokoAnime - Top Anime Gallery
  {
    videoSrc: projectVideo2,
    poster: project_poster2,
    title: "KyokoAnime - Top Anime Gallery",
    technology: [{ name: "NextJs" }, { name: "RestApi" }],
    link_live: "https://kyokoanime.vercel.app/",
    link_code:
      "https://github.com/ShafiWalsher/Kyoko_Anime-Top-Infinite-Animes-List",
  },
];

export const socialMedia = [
  { src: github, alt: "github logo", href: "https://github.com/ShafiWalsher" },
  {
    src: instagram,
    alt: "instagram logo",
    href: "https://www.instagram.com/shafiwalsher/",
  },
  {
    src: linkedin,
    alt: "linkedin logo",
    href: "https://www.linkedin.com/in/shafiwalsher/",
  },
  {
    src: twitter,
    alt: "twitter logo",
    href: "https://twitter.com/shafi_walsher",
  },
];
