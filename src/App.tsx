import {LocalTime, Skills, InfoCard} from "./components"
import {NihitAbout} from "./Data/Personal"
export default function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center text-2xl bg-[#000000] text-white" >
      {/* <LocalTime/> */}
      <InfoCard htmlContent={NihitAbout} className="max-w-1/3 text-[1rem] m-2"/>
      <Skills/>
    </div>
  )
}