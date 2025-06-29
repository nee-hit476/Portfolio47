import {LocalTime, Skills, InfoCard, Navbar, HireMe} from "./components"
import {NihitAbout} from "./Data/Personal"

export default function App() {
  return (
    <div
      style={{
       backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="min-h-screen min-w-screen flex flex-col items-center pt-5 text-2xl bg-[#000000] text-white overflow-hidden p-2"
    >
      
      <InfoCard
        htmlContent={NihitAbout}
        className="w-full lg:max-w-[33.3333%] text-[1rem] m-2 mt-0 flex float-left  "
      />
      <Skills />
      <HireMe/>
      <Navbar/>
    </div>
  );
}
