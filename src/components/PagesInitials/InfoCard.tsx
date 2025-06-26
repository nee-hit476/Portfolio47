import React from "react"
import { AnimatedWrapper } from "../utils/AnimatedWrapper"
import {SectionTitle} from "../index"
import { motion } from "framer-motion"

interface InfoCardProps {
    htmlContent?: string,
    children?: React.ReactNode
    className?: string
}

const InfoCard = ({htmlContent, children, className}: InfoCardProps) => {


    return (
    <AnimatedWrapper className={className} >
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
    </AnimatedWrapper>
    )

}

export default InfoCard;