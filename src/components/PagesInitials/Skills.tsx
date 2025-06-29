import { useState } from "react";
import { SectionTitle } from "../index";
import { Skills as SkillsData } from "../../Data/Skills";
import { motion } from "framer-motion";
import {AnimatedWrapper} from "../index"
import {Available} from "../index"

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSkills = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatedWrapper className="flex justify-center">
  <div className="flex flex-col items-start w-full lg:max-w-[43.3333%]">
      <div className="flex flex-row py-1">
        <SectionTitle title="Skills" />
      </div>

      <div className="flex gap-1 flex-wrap font-bold ">
        {SkillsData.map((skill, index) => (
          <motion.div
            layout
            initial={{ width: 40 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.5 }}
            key={index}
            onClick={toggleSkills}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={`py-0.5 px-1.5 flex items-center gap-0.5 text-xs border rounded-lg border-dashed
            hover:z-1 hover:scale-150 transition-transform duration-200 ease-in-out
            ${!isOpen ? "overflow-hidden" : ""}`}

          >
            <skill.icon
              className={
                skill.iconProps?.className ? skill.iconProps["className"] : ""
              }
            />
            <span>{skill.name}</span>
          </motion.div>
        ))}
        <Available text="Available"/>
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default Skills;