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
          <p>These are some of the technologies I've worked with</p>
        </div>

        <div className={"w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"}>
          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <FaHtml5 className={"text-[#E44D26] w-20 mx-auto"} size={50} />
            <p className={"my-4"}>HTML 5</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <FaCss3 className={"text-[#1572B6] w-20 mx-auto"} size={50} />
            <p className={"my-4"}>CSS</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <DiJavascript className={"text-[#F7DF1E] w-20 mx-auto"} size={50} />
            <p className={"my-4"}>JAVASCRIPT</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <FaReact className={"text-[#61DAFB] w-20 mx-auto"} size={50} />
            <p className={"my-4"}>REACT</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <SiTailwindcss className={"text-[#6366F1] w-20 mx-auto"} size={50} />
            <p className={"my-4"}>Tailwind CSS</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <FaFigma className={"text-white w-20 mx-auto"} size={50} />
            <p className={"my-4"}>FIGMA</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <SiAdobeillustrator className={"text-orange-500 w-20 mx-auto"} size={50} />
            <p className={"my-4"}>ILLUSTRATOR</p>
          </div>

          <div className={"shadow-md shadow-[#040c16] hover:scale-110 duration-500"}>
            <SiAdobexd className={"text-pink-500 w-20 mx-auto"} size={50} />
            <p className={"my-4"}>ADOBE XD</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills