import BagImg from '../assets/motivv.png'
import speedRadar from '../assets/terrestrial-speed-radar.png'
import realImg from '../assets/Calendly2.png'
import furniImg from '../assets/furni.png'
import gtcoImg from '../assets/gtco.png'
import educationImg from '../assets/education.png'

const Work = () => {
  return (
    <section name={'work'} className={"w-full md:h-screen text-gray-300 bg-[#0a192f] py-24"}>
      <div className={"max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"}>
        <div>
          <p className={"text-4xl font-bold inline border-b-4 text-gray-300 border-blue-500"}>Work</p>
          <p className={"py-6"}> Check out some of my recent work</p>
        </div>


        {/*UI/UX PROJECTS Container-1*/}
        <h1 className={"text-xl text-blue-500 text-center font-semibold mt-3 py-4"}>UI/UX Projects</h1>

        <div
          className={"grid sm:grid-cols-2 md:grid-cols-3 gap-4"}>
          {/*Grid item*/}
          <div
            style={{backgroundImage: `url(${furniImg})`}}
            className={"shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"}>
            {/*Hover Effects*/}
            <div className={"opacity-0 group-hover:opacity-100"}>
              <span className={"text-2xl font-bold text-white tracking-wider"}>
              Behance Project
              </span>
              <div className={"pt-8 text-center"}>
                <a href="https://www.behance.net/gallery/182235163/Furniture-Landing-Page"
                   className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Demo</button>
                </a>

                {/* <a href="/"
                   className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Code</button>
                </a> */}
              </div>
            </div>
          </div>

          <div
            style={{backgroundImage: `url(${gtcoImg})`}}
            className={"shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"}>
            {/*Hover Effects*/}
            <div className={"opacity-0 group-hover:opacity-100"}>
              <span className={"text-2xl font-bold text-white tracking-wider"}>
                Behance Project
              </span>
              <div className={"pt-8 text-center"}>
                <a href="https://www.behance.net/gallery/186960521/GTCO-Redesign-Mobile-App" className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Demo</button>
                </a>
{/* 
                <a href="/" className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Code</button>
                </a> */}
              </div>
            </div>
          </div>

          <div
            style={{backgroundImage: `url(${educationImg})`}}
            className={"shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"}>
            {/*Hover Effects*/}
            <div className={"opacity-0 group-hover:opacity-100"}>
              <span className={"text-2xl font-bold text-white tracking-wider"}>
              Behance Project
              </span>
              <div className={"pt-8 text-center"}>
                <a href="https://www.behance.net/gallery/181787301/E-learning-Mobile-App"
                   className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Demo</button>
                </a>

                {/* <a href="/"
                   className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Code</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/*REACT PROJECTS Container 2*/}
        <h1 className={"text-xl text-center font-semibold mt-3 py-4 text-blue-500"}>React Projects</h1>

        <div
          className={"grid sm:grid-cols-2 md:grid-cols-3 gap-4"}>
          {/*Grid item*/}
          {/* <div
            style={{backgroundImage: `url(${BagImg})`}}
            className={"shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"}> */}
            {/*Hover Effects*/}
            {/* <div className={"opacity-0 group-hover:opacity-100"}>
              <span className={"text-2xl font-bold text-white tracking-wider"}>
                React JS Application
              </span>
              <div className={"pt-8 text-center"}>

                <a href="https://web-app.vercel.app"
                   className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div> */}

          <div
            style={{backgroundImage: `url(${realImg})`}}
            className={"shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"}>
            {/*Hover Effects*/}
            <div className={"opacity-0 group-hover:opacity-100"}>
              <span className={"text-2xl font-bold text-white tracking-wider"}>
                React JS Application
              </span>
              <div className={"pt-8 text-center"}>
                <a href="/" className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Demo</button>
                </a>

              </div>
            </div>
          </div>

          <div
            style={{backgroundImage: `url(${speedRadar})`}}
            className={"shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"}>
            {/*Hover Effects*/}
            <div className={"opacity-0 group-hover:opacity-100"}>
              <span className={"text-2xl font-bold text-white tracking-wider"}>
                React JS Application
              </span>
              <div className={"pt-8 text-center"}>
                <a href="https://terrestrial-speed-radar.netlify.app/"
                   className={"text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"}>
                  <button>Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
export default Work