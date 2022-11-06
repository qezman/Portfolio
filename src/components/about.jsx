const About = () => {
  return (
    <section name={'about'} className={'w-full h-screen text-gray-300 bg-[#0a192f]'}>
      <div className={'flex flex-col justify-center items-center w-full h-full'}>
        <div className={"max-w-[1000px] w-full grid grid-cols-2 gap-8"}>
          <div className={"sm:text-right pb-8 pl-4"}>
            <p className={"text-4xl font-bold inline border-b-4 border-blue-600"}>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className={"max-w-[1000px] w-full grid sm:grid-cols-2 sm:items-center gap-8 px-4"}>
          <div className={"sm:text-right text-4xl font-bold"}>
            <p>Hi, I'm Kazeem. Nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p>I am passionate about building excellent software that improves the lives of those around me.
              I specialize is designing software for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you have a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About