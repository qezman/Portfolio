import {
  DiJavascript,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaReact,
  SiAdobeillustrator,
  SiAdobexd, SiTailwindcss
} from "react-icons/all";

const Skills = () => {
  return (
    <div name={"skills"} className={"w-full h-screen bg-[#0a192f] text-gray-300 py-24"}>
      {/* Container */}
      <div className={"max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"}>
        <div>
          <p className={"text-4xl font-bold inline border-b border-blue-500"}>Skills</p>
          <p>These are the technologies I've worked with</p>
        </div>

        <div className={"w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"}>
          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <FaHtml5 className={"w-20 mx-auto"} />
            <p className={"my-4"}>HTML 5</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <FaCss3 className={"w-20 mx-auto"} />
            <p className={"my-4"}>CSS</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <DiJavascript className={"w-20 mx-auto"} />
            <p className={"my-4"}>JAVASCRIPT</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <FaReact className={"w-20 mx-auto"} />
            <p className={"my-4"}>REACT</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <SiTailwindcss className={"w-20 mx-auto"} />
            <p className={"my-4"}>Tailwind CSS</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <FaFigma className={"w-20 mx-auto"} />
            <p className={"my-4"}>FIGMA</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <SiAdobeillustrator className={"w-20 mx-auto"} />
            <p className={"my-4"}>ILLUSTRATOR</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <SiAdobexd className={"w-20 mx-auto"} />
            <p className={"my-4"}>ADOBE XD</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills