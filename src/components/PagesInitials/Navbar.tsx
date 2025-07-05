import { motion } from "framer-motion";
import { AnimatedWrapper } from "../utils/AnimatedWrapper";
import {ProfilePicture, Navlinks} from "../../Data/Personal"
import {PopUp} from "../index"

import type React from "react";

const Navbar: React.FC = () => {

    return (
        <AnimatedWrapper className="w-full flex flex-col z-20 h-20  justify-center items-center">
            
        <motion.nav
            className="flex flex-col gap-4 bottom-5 justify-center items-center w-60 bg-[#000000] text-white text-2xl fixed z-50 bg-black-900" 
        >
            <div
                style={{
                    boxShadow: "0px -2px 5px gray"
                }} 
                className="border border-dashed py-2 shadow-lg rounded-2xl px-4">
               <ul className="flex flex-row gap-4 text-md">
                {Navlinks.map((chunk) => (
                    <PopUp key={chunk.name} text={chunk.name}>{<chunk.icon/>}</PopUp>
                ))}
                <img 
                    src={ProfilePicture} 
                    alt="pfp" 
                    className="rounded-lg h-[25px] mr-1"
                />
            </ul>
            </div>
        </motion.nav>
        </AnimatedWrapper>
    )

}

export default Navbar;  