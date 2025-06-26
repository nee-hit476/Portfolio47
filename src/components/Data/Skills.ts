import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql, SiFirebase, SiJira, SiVim, SiPostman, SiDjango, SiBun, SiEjs, SiRedux, SiSocketdotio } from "react-icons/si";
import { BiLogoPostgresql, BiLogoFlask, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill, RiNotionFill,RiJavascriptFill } from "react-icons/ri";
import { FaFlutter, FaAws, FaPython, FaGitAlt, FaGithub, FaCss3Alt, FaUbuntu } from "react-icons/fa6";
import { PiFigmaLogoFill, PiFileCppBold } from "react-icons/pi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoVercel } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { GiNinjaHeroicStance } from "react-icons/gi";

type Skill = {
  icon: React.ComponentType<any>;
  iconProps?: React.ComponentProps<any>;
  name: string;
};

const Skills: Skill[] = [
  { icon: FaReact, iconProps: { className: "text-blue-600" }, name: "ReactJS" },
  { icon: IoLogoNodejs, iconProps: { className: "text-green-600" }, name: "NodeJS" },
  { icon: RiNextjsFill, name: "NextJS" },
  { icon: SiExpress, iconProps: { className: "text-green-600" }, name: "ExpressJS" },
  { icon: SiMongodb, iconProps: { className: "text-green-600" }, name: "MongoDB" },
  { icon: BiLogoPostgresql, iconProps: { className: "text-blue-700" }, name: "Postgres" },
  { icon: SiMysql, iconProps: { className: "text-yellow-200" }, name: "MySQL" },
  { icon: BiLogoFlask, name: "Flask" },
  { icon: FaFlutter, iconProps: { className: "text-blue-600" }, name: "Flutter" },
  { icon: SiFirebase, iconProps: { className: "text-orange-500" }, name: "Firebase" },
  { icon: RiTailwindCssFill, iconProps: { className: "text-blue-400" }, name: "TailwindCSS" },
  { icon: RiNotionFill, name: "Notion" },
  { icon: FaAws, iconProps: { className: "text-yellow-400" }, name: "AWS" },
  { icon: PiFigmaLogoFill, iconProps: { className: "text-yellow-200" }, name: "Figma" },
  { icon: RiJavascriptFill, iconProps: { className: "text-yellow-400" }, name: "JavaScript" },
  { icon: BiLogoTypescript, iconProps: { className: "text-blue-500" }, name: "TypeScript" },
  { icon: PiFileCppBold, iconProps: { className: "text-purple-400" }, name: "C++" },
  { icon: FaPython, iconProps: { className: "text-blue-400" }, name: "Python" },
  { icon: TiHtml5, iconProps: { className: "text-orange-400" }, name: "HTML" },
  { icon: FaCss3Alt, iconProps: { className: "text-blue-300" }, name: "CSS" },
  { icon: FaGitAlt, iconProps: { className: "text-orange-400" }, name: "Git" },
  { icon: FaGithub, name: "Github" },
  { icon: SiJira, iconProps: { className: "text-blue-500" }, name: "JIRA" },
  { icon: SiVim, iconProps: { className: "text-green-400" }, name: "Vim" },
  { icon: SiPostman, iconProps: { className: "text-orange-400" }, name: "Postman" },
  { icon: SiDjango, iconProps: { className: "text-green-400" }, name: "Django" },
  { icon: SiBun, name: "Bun" },
  { icon: FaUbuntu, iconProps: { className: "text-orange-400" }, name: "Ubuntu" },
  { icon: IoLogoVercel, name: "Vercel" },
  { icon: GrLanguage, name: "C" },
  { icon: SiEjs, iconProps: { className: "text-red-500" }, name: "EJS" },
  { icon: SiRedux, iconProps: { className: "text-red-500" }, name: "Redux" },
  { icon: GiNinjaHeroicStance, iconProps: { className: "text-green-400" }, name: "GSAP" },
  { icon: SiSocketdotio, iconProps: { className: "text-green-200" }, name: "Socket IO" },
];

export {
    Skills
}