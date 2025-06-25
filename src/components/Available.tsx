import { GoDotFill } from "react-icons/go";

const Available = ({ text }:{text: string}) => {

    return (
        <div className="flex flex-row items-center gap-0.5 border py-0.5 px-1.5 border-green-400 text-green-400 text-xs rounded-lg">
            <GoDotFill/>
            <span>{text}</span>
        </div>
    );
}

export default Available;