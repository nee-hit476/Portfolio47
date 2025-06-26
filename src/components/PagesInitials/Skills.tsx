import {SectionTitle} from "../index"
import {Skills as SkillsData} from "../../Data/Skills"

const Skills = () => {
  return (
    <div className="flex flex-col items-start max-w-1/3"> 
      <div className="flex flex-row">
        <SectionTitle title="Skills" />
      </div>

      <div className="flex gap-1 flex-wrap font-bold">
        {SkillsData.map((skill, index) => (
          <div
            key={index}
            className="py-0.5 px-1.5 flex flex-row items-center gap-0.5 text-xs border rounded-lg border-dashed"
          >
            <skill.icon className={skill.iconProps?.className ? skill.iconProps["className"] : "" }/>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Skills;
