import { AnimatedWrapper } from "../utils/AnimatedWrapper"

interface PopUpProps {
    text: String
}

const PopUp = (props: PopUpProps) => {

    return (    
        <AnimatedWrapper >
            {props.text}
        </AnimatedWrapper>

    )
}

export const PopUp