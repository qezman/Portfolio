import {HiArrowNarrowRight} from "react-icons/all";

const Home = () => {
  return (
    <section name={"home"} className={"w-full h-screen bg-[#0a192f]"}>
      {/*container*/}
      <div className={"max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"}>
        <p className={"text-blue-500"}>Hi, my name is</p>
        <h1 className={"text-4xl sm:text-7xl font-bold text-[#ccd6f6]"}>Jimoh Kazeem</h1>
        <h2 className={"text-4xl sm:text-7xl font-bold text-[#8892b0]"}>I'm a UI/UX Designer</h2>
        <p className={"text-[#8892b0] py-4 max-w-[700px]"}>I'm a Web designer specialized in building exceptional digital experiences.
          Currently, I focus on the usability, accessibility, and visual design to create an effective and enjoyable interaction between users and the product.
        </p>

        <div>
          <button name={"contact"} className={"group gap-3 text-white border-2 px-6 py-3 flex items-center hover:bg-blue-600 hover:border-blue-600"}>View Work
          <span className={"group-hover:rotate-90 duration-300"}>
            <HiArrowNarrowRight />
          </span>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Home