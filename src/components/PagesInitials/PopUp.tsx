import type { ReactNode } from "react"
import { AnimatedWrapper } from "../utils/AnimatedWrapper"

interface PopUpProps {
    text: String
    children: ReactNode
}

const PopUp = ({text, children}: PopUpProps) => {

    return (    
        <AnimatedWrapper>
            <div className="relative flex items-center select-none">
                <div className="group relative flex">
                    {children}
                    <span className="absolute  bottom-[30px] left-1/2 transform transition-all -translate-x-1/2 mb-2 w-max bg-mainWhite text-mainBlack  font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100  duration-100 bg-yellow-50 text-black">
                    {text}
                    </span>
            </div>
        </div>
        </AnimatedWrapper>
    )
}

export default PopUp;