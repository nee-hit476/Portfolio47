import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { AnimatedWrapper } from "../utils/AnimatedWrapper";
import {ProfilePicture} from "../../Data/Personal"
import type React from "react";

const Navbar: React.FC = () => {

    return (
        <AnimatedWrapper className="w-full z-20 h-20 flex justify-center items-center">
        <motion.nav
            className="flex flex-row gap-4 bottom-5 rounded-2xl py-2 px-7 justify-center items-center w-60 bg-[#000000] text-white text-2xl fixed z-50 bg-black-900 opacity-70 hover:opacity-100 transition-opacity duration-300 border border-dashed" 
        >
            <ul className="flex flex-row gap-4">
                <li><FaGithubAlt/></li>
                <li><FaXTwitter/></li>
                <li><FaLinkedin/></li>
                <li><SiLeetcode/></li>
                <img 
                    src={ProfilePicture} 
                    alt="pfp"
                    className="rounded-lg h-[25px]  mr-7"
                />
            </ul>
        </motion.nav>
        </AnimatedWrapper>
    )

}

export default Navbar;  