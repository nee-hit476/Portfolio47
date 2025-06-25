import { SiBuymeacoffee, SiSolana, SiPhonepe} from "react-icons/si";
import {FaEthereum } from "react-icons/fa";

const SupportMe = () => {

    return( 
        <section className="flex flex-row items-center gap-2">
            <a href="" className="flex flex-row gap-0.5 items-center border-2 py-1 px-2 border-gray-400 rounded-lg text-xs hover:bg-gray-700 border-dashed">
                <SiSolana />
                <span>Solana</span>
            </a>

            <a  
                href="https://www.google.com"
                target="_blank"
                className="flex flex-row gap-0.5 items-center border-2 py-1 px-2 border-gray-400 rounded-lg text-xs hover:bg-gray-700 border-dashed">
                <SiBuymeacoffee  className="text-yellow-300"/>
                <span>Buy Me a Coffee</span>
            </a>
            
            <a  
                href=""
                target="_blank"
                className="flex flex-row gap-0.5 items-center border-2 py-1 px-2 border-gray-400 rounded-lg text-xs hover:bg-gray-700 border-dashed">
                <SiPhonepe/>
                <span>PhonePe</span>
            </a>
            
            <a  
                href=""
                target="_blank"
                className="flex flex-row gap-0.5 items-center border-2 py-1 px-2 border-gray-400 rounded-lg text-xs hover:bg-gray-700 border-dashed">
                <FaEthereum/>
                <span>Ethereum</span>
            </a>
        </section>
    )
}

export default SupportMe;