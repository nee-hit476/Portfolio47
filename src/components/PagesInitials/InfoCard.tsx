import React from "react"
import { AnimatedWrapper } from "../utils/AnimatedWrapper"
import {SectionTitle} from "../index"
import { motion } from "framer-motion"
import {ProfilePicture} from "../../Data/Personal"
import {LocalTime} from "../index"


interface InfoCardProps {
    htmlContent?: string,
    children?: React.ReactNode
    className?: string
}

const InfoCard = ({htmlContent, children, className}: InfoCardProps) => {


    return (
    <AnimatedWrapper className={className} >
                {
                    ProfilePicture && <img 
                    src={ProfilePicture} 
                    alt="pfp"
                    className="rounded-lg h-[200px] w-[97%] hidden sm:h-[150px] sm:block sm:m-auto sm:mr-7" 
                />
                }

                <div>
                    <div className="flex flex-row-reverse items-center justify-between mb-1">
                        <LocalTime className="text-sm font-bold justify-end px-3" />
                        <SectionTitle title="About Me"/>
                    </div>

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