import SectionTitle from "../SectionTitle";
import { AnimatedWrapper } from "../utils/AnimatedWrapper";
import {motion} from "framer-motion";
import { FaSuitcase } from "react-icons/fa";

interface HireMeProps {
    htmlContent?: string,
    children?: React.ReactNode
    className?: string
}

// Hire me tsx => hire me button => would have an cv
const HireMe = (props: HireMeProps) => {

    return (
        <AnimatedWrapper className="w-full flex z-20 flex-col items-start py-2 lg:max-w-[43.3333%]">
                <SectionTitle title="HireMe"/>

             {props.htmlContent ? (
                <motion.div
                    layout
                    initial={{ width: 40 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 0.6 }} 
                    dangerouslySetInnerHTML={{ __html: props.htmlContent }} 
                    className="text-[1rem]"
                    />
            ) : (
                props.children
            )}

            <motion.div
            layout
            initial={{ width: 40 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`py-0.5 px-1.5 flex items-center gap-0.5 text-xs border rounded-lg border-dashed
            hover:z-1 hover:scale-150 transition-transform duration-200 ease-in-out my-1 `}
          >
            <FaSuitcase
              className=""
            />
            <span>Hire Me.</span>
          </motion.div>
      
                
     
        </AnimatedWrapper>

    );
}

export default HireMe;