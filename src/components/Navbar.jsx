import Logo from '../assets/logo.svg'
import {BsFillPersonLinesFill, FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes, HiOutlineMail} from "react-icons/all";
import {useState} from "react";
import {Link} from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <section name={'navbar'} className={"fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300"}>
      <div>
        <img src={Logo} alt="" style={{width: '50px'}}/>
      </div>

        <ul className={"hidden md:flex"}>
          <li>
            <Link to={"home"} smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"about"} smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to={"skills"} smooth={true} duration={1000}>
              Skills
            </Link>
          </li>
          <li>
            <Link to={"work"} smooth={true} duration={1000}>
              Work
            </Link>
          </li>
          <li>
            <Link to={"Contact"} smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className={"cursor-pointer md:hidden z-10"}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className={"py-6 text-4xl"}>
          <Link onClick={handleClick} to={"home"} smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className={"py-6 text-4xl"}>
          <Link onClick={handleClick} to={"about"} smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li className={"py-6 text-4xl"}>
          <Link onClick={handleClick} to={"skills"} smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li className={"py-6 text-4xl"}>
          <Link onClick={handleClick} to={"work"} smooth={true} duration={1000}>
            Work
          </Link>
        </li>
        <li className={"py-6 text-4xl"}>
          <Link onClick={handleClick} to={"Contact"} smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>

    {/*Social icons*/}
      <div className={"hidden lg:flex fixed flex-col top-[35%] left-0"}>
        <ul>
          <li className={"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"}>
            <a
            className={"flex justify-between items-center w-full text-gray-300"}
              href="https://www.linkedin.com/in/kazeem-jimoh-027a3b21a/">
              LinkedIn <FaLinkedin size={20} />
            </a>
          </li>

          <li className={"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]"}>
            <a
              className={"flex justify-between items-center w-full text-gray-300"}
              href="https://www.github.com/qezman">
              Github <FaGithub size={20} />
            </a>
          </li>

          <li className={"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]"}>
            <a
              className={"flex justify-between items-center w-full text-gray-300"}
              href="mailto:holaryinka5050@gmail.com">
              Email <HiOutlineMail size={20} />
            </a>
          </li>

          <li className={"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]"}>
            <a
              className={"flex justify-between items-center w-full text-gray-300"}
              href="https://profile.indeed.com/">
              Resume <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Navbar