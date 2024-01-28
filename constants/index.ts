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
  {
    imgURL: placeholderImage,
    title: "Project Title",
    technology: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Mongo" },
      { name: "ReactJs" },
    ],
  },
  {
    imgURL: placeholderImage,
    title: "Project Medium Title",
    technology: [{ name: "HTML" }, { name: "CSS" }, { name: "Js" }],
  },
  {
    imgURL: placeholderImage,
    title: "Project Long Long Title",
    technology: [{ name: "HTML" }, { name: "CSS" }, { name: "BS" }],
  },
  {
    imgURL: placeholderImage,
    title: "Project Long Long Long Title",
    technology: [{ name: "HTML" }, { name: "CSS" }, { name: "ReactJs" }],
  },
  {
    imgURL: placeholderImage,
    title: "Project Normal Title",
    technology: [{ name: "HTML" }, { name: "CSS" }, { name: "Tailwind" }],
  },
  {
    imgURL: placeholderImage,
    title: "Project Title.",
    technology: [{ name: "HTML" }, { name: "CSS" }, { name: "BS" }],
  },
];

export const socialMedia = [
  { src: github, alt: "github logo", href: "/" },
  { src: instagram, alt: "instagram logo", href: "/" },
  { src: linkedin, alt: "linkedin logo", href: "/" },
  { src: twitter, alt: "twitter logo", href: "/" },
];
