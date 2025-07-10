import {Skills, ProjectInfoTip, Projects, InfoCard, Navbar, HireMe, ShootingStars, SupportMe} from "./components"
import {NihitAbout} from "./Data/Personal"
import {HireNihit} from "./Data/Personal"

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
      <ShootingStars/>
      
      <InfoCard
        htmlContent={NihitAbout}
        className="w-full lg:max-w-[43.3333%] text-[1rem] m-2 mt-0 flex z-20 flex-col sm:flex-row float-left  "
      />
      <Skills />
      <HireMe
        htmlContent={HireNihit}
      />
      <SupportMe/>
      <Projects/>

      <ProjectInfoTip/>

      <Navbar/>
    </div>
  );
}
