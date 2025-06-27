import {LocalTime, Skills, InfoCard} from "./components"
import {NihitAbout} from "./Data/Personal"


export default function App() {
  return (
    <div
      style={{
       backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="min-h-screen min-w-screen flex flex-col justify-center items-center text-2xl bg-[#000000] text-white"
    >
      <InfoCard
        htmlContent={NihitAbout}
        className="max-w-1/3 text-[1rem] m-2 mt-0 flex float-left"
      />
      <Skills />
    </div>
  );
}
