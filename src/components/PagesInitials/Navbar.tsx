import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { AnimatedWrapper } from "../utils/AnimatedWrapper";

const Navbar = () => {

    return (
        <AnimatedWrapper className="w-full h-20 flex justify-center items-center">
        <motion.nav
            className="flex flex-row gap-4 bottom-5 rounded-2xl py-3 px-7 justify-center items-center w-1/3 bg-[#000000] text-white text-2xl fixed z-50 bg-black-900 opacity-70 hover:opacity-100 transition-opacity duration-300" 
        >
            <ul className="flex flex-row gap-4">
                <li><FaGithubAlt/></li>
                <li><FaXTwitter/></li>
                <li><FaLinkedin/></li>
                <li><SiLeetcode/></li>
            </ul>
        </motion.nav>
        </AnimatedWrapper>
    )

}

export default Navbar;  