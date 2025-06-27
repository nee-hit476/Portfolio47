import React from "react"
import { AnimatedWrapper } from "../utils/AnimatedWrapper"
import {SectionTitle} from "../index"
import { motion } from "framer-motion"
import {ProfilePicture} from "../../Data/Personal"


interface InfoCardProps {
    htmlContent?: string,
    children?: React.ReactNode
    className?: string
}

const InfoCard = ({htmlContent, children, className}: InfoCardProps) => {


    return (
    <AnimatedWrapper className={className} >
                <img 
                src={ProfilePicture} 
                alt="pfp"
                className="rounded-lg h-[100px] w-[200px] mr-7"
                />
            
                <div>
                    <SectionTitle title="About Me"/>

            {htmlContent ? (
                <motion.div
                    layout
                    initial={{ width: 40 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 0.5 }} 
                    dangerouslySetInnerHTML={{ __html: htmlContent }} />
            ) : (
                children
            )}
                </div>
    </AnimatedWrapper>
    )

}

export default InfoCard;