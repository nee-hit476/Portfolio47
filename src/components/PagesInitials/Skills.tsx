import { useState } from "react";
import { SectionTitle } from "../index";
import { Skills as SkillsData } from "../../Data/Skills";
import { motion } from "framer-motion";
import {AnimatedWrapper} from "../index"

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedWrapper className="flex justify-center">
    <div className="flex flex-col items-start max-w-1/3">
      <div className="flex flex-row">
        <SectionTitle title="Skills" />
      </div>

      <div className="flex gap-1 flex-wrap font-bold">
        {SkillsData.map((skill, index) => (
          <motion.div
            layout
            initial={{ width: 40 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.5 }}
            key={index}
            className={`py-0.5 px-1.5 flex flex-row items-center gap-0.5 text-xs border rounded-lg border-dashed ${
              !isOpen ? "overflow-hidden" : ""
            }`}
          >
            <skill.icon
              className={
                skill.iconProps?.className ? skill.iconProps["className"] : ""
              }
            />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default Skills;