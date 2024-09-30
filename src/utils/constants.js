import { TiLocation } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  MdEmail,
  MdOutlinePhoneAndroid,
  MdOutlinePlumbing,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import {
  FaTools,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaBehance,
} from "react-icons/fa";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.webp";
import project5 from "../assets/project-5.avif";
import project6 from "../assets/project-6.webp";

export const navIcons = [
  { id: 1, url: "https://facebook.com", icon: <FaFacebookF /> },
  { id: 2, url: "https://twitter.com", icon: <FaTwitter /> },
  { id: 3, url: "https://www.google.com", icon: <FaGooglePlusG /> },
  { id: 4, url: "https://www.behance.net/", icon: <FaBehance /> },
];

export const navLinks = [
  { id: 1, label: "home" },
  { id: 2, label: "services" },
  { id: 3, label: "projects" },
  { id: 4, label: "pages" },
  { id: 5, label: "blog" },
  { id: 6, label: "contact" },
];

export const sidebarLinks = [...navLinks];

export const services = [
  {
    id: 1,
    icon: <MdOutlineSettingsSuggest />,
    title: "engine repairs",
    description: "lorem ipsum dolor, sit amet consectetur adipisicing",
  },
  {
    id: 2,
    icon: <AiFillThunderbolt />,
    title: "electrical",
    description: "lorem ipsum dolor, sit amet consectetur adipisicing",
  },
  {
    id: 3,
    icon: <MdOutlinePlumbing />,
    title: "plumbing",
    description: "lorem ipsum dolor, sit amet consectetur adipisicing",
  },
  {
    id: 4,
    icon: <FaTools />,
    title: "repair house",
    description: "lorem ipsum dolor, sit amet consectetur adipisicing",
  },
];

export const projectsLinks = [
  { id: 1, label: "all" },
  { id: 2, label: "engine repair" },
  { id: 3, label: "electrical" },
  { id: 4, label: "plumbing" },
  { id: 5, label: "repair house" },
  { id: 6, label: "wall paint" },
];

export const projects = [
  {
    id: 1,
    title: "lorem ipsum dolor",
    description: "adipisicing",
    src: project1,
  },
  {
    id: 2,
    title: "lorem ipsum dolor",
    description: "adipisicing",
    src: project2,
  },
  {
    id: 3,
    title: "lorem ipsum dolor",
    description: "adipisicing",
    src: project3,
  },
  {
    id: 4,
    title: "lorem ipsum dolor",
    description: "adipisicing",
    src: project4,
  },
  {
    id: 5,
    title: "lorem ipsum dolor",
    description: "adipisicing",
    src: project5,
  },
  {
    id: 6,
    title: "lorem ipsum dolor",
    description: "adipisicing",
    src: project6,
  },
];

export const footerLinks1 = [
  { id: 1, label: "+1 23 567 8596", icon: <MdOutlinePhoneAndroid /> },
  { id: 2, label: "auhandy tower, new york", icon: <TiLocation /> },
  { id: 3, label: "info@example.com", icon: <MdEmail /> },
  { id: 4, label: "weekdays: 09:00am-6:00pm", icon: <FaClock /> },
];

export const footerLinks2 = [
  { id: 1, label: "electrical" },
  { id: 2, label: "plumbing" },
  { id: 3, label: "engine repair" },
  { id: 4, label: "repair house" },
  { id: 5, label: "home maintenance" },
  { id: 6, label: "wall paint" },
];

export const footerLinks3 = [
  { id: 1, label: "installation" },
  { id: 2, label: "garden repairs" },
  { id: 3, label: "soil drilling" },
  { id: 4, label: "support 24/7" },
  { id: 5, label: "inspection house" },
  { id: 6, label: "remodelling ceiling" },
];
