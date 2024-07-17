const Contact = () => {
  return (
    <section
      name={"Contact"}
      className={
        "w-full h-full bg-[#0a192f] flex justify-center items-center py-32"
      }
    >
      <form
        method={"Post"}
        action="https://getform.io/f/6a87b8c5-c2c6-4029-b364-4def7c0e0a8a"
        className={"flex flex-col max-w-[600px] w-full"}
      >
        <div className={"pb-8"}>
          <h1
            className={
              "text-4xl inline font-bold b-4 border-blue-500 text-gray-300"
            }
          >
            Contact
          </h1>
          <p className="text-white">
            Submit the form below or shoot me an email -
            holaryinka5050@gmail.com
          </p>
        </div>

        <input
          type="text"
          placeholder={"Name"}
          name={"name"}
          className={"bg-[#ccd6f6] p-2"}
        />
        <input
          type="text"
          placeholder={"Email"}
          name={"email"}
          className={"my-4 p-2 bg-[#ccd6f6]"}
        />
        <textarea
          className={"bg-[#ccd6f6] p-2"}
          name="message"
          rows="10"
          placeholder={"Message"}
        />
        <button
          className={
            "text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center"
          }
        >
          Let's Collaborate
        </button>
      </form>
    </section>
  );
};
export default Contact;
