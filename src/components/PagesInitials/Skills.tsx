import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql, SiFirebase, SiJira, SiVim, SiPostman, SiDjango, SiBun } from "react-icons/si";
import { BiLogoPostgresql, BiLogoFlask, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill, RiNotionFill,RiJavascriptFill } from "react-icons/ri";
import { FaFlutter, FaAws, FaPython, FaGitAlt, FaGithub, FaCss3Alt, FaUbuntu } from "react-icons/fa6";
import { PiFigmaLogoFill, PiFileCppBold } from "react-icons/pi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoVercel } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";



const skills = [
  { icon: <FaReact className="text-blue-600" />, name: "ReactJS" },
  { icon: <IoLogoNodejs className="text-green-600" />, name: "NodeJS" },
  { icon: <RiNextjsFill />, name: "NextJS" },
  { icon: <SiExpress className="text-green-600" />, name: "ExpressJS" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <BiLogoPostgresql className="text-blue-700" />, name: "Postgres" },
  { icon: <SiMysql className="text-yellow-200" />, name: "MySQL" },
  { icon: <BiLogoFlask/>, name: "Flask" },
  { icon: <FaFlutter className="text-blue-600" />, name: "Flutter" },
  { icon: <SiFirebase className="text-orange-500" />, name: "Firebase" },
  { icon: <RiTailwindCssFill className="text-blue-400" />, name: "TailwindCSS" },
  { icon: <RiNotionFill  />, name: "Notion" },
  { icon: <FaAws  className="text-yellow-400" />, name: "AWS" },
  { icon: <PiFigmaLogoFill className="text-yellow-200" />, name: "Figma" },
  { icon: <RiJavascriptFill className="text-yellow-400" />, name: "JavaScript" },
  { icon: <BiLogoTypescript className="text-blue-500" />, name: "TypeScript" },
  { icon: <PiFileCppBold className="text-purple-400" />, name: "C++" },
  { icon: <FaPython className="text-blue-400" />, name: "Python" },
  { icon: <TiHtml5 className="text-orange-400" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-300" />, name: "CSS" },
  { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
  { icon: <FaGithub />, name: "Github" },
  { icon: <SiJira className="text-blue-500" />, name: "JIRA" },
  { icon: <SiVim className="text-green-400" />, name: "Vim" },
  { icon: <SiPostman className="text-orange-400" />, name: "Postman" },
  { icon: <SiDjango className="text-green-400" />, name: "Django" },
  { icon: <SiBun  />, name: "Bun" },
  { icon: <FaUbuntu  className="text-orange-400" />, name: "Ubuntu" },
  { icon: <IoLogoVercel />, name: "Vercel" },
  { icon: <GrLanguage />, name: "C" },
];

const Skills = () => {
  return (
    <section className="flex gap-1 flex-wrap max-w-1/3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="py-0.5 px-1.5 flex flex-row items-center gap-0.5 text-xs border rounded-lg border-dashed"
        >
          {skill.icon}
          <span>{skill.name}</span>
        </div>
      ))}
    </section>
  );
};

export default Skills;
