import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 text-gray-300 bg-[#0a192f]">
      <div>
        <img className="w-12" src={Logo} alt="logo" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-4">
          <li>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="flex -translate-y-1 md:hidden z-10">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className=" py-6 text-4xl">
          <Link onClick={handleClick} to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className=" py-6 text-4xl">
          <Link onClick={handleClick} to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className=" py-6 text-4xl">
          <Link onClick={handleClick} to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" py-6 text-4xl">
          <Link onClick={handleClick} to="work" spy={true} smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li className=" py-6 text-4xl">
          <Link onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-40 h-14 flex justify-between items-center -ml-28 hover:ml-1 duration-300 bg-blue-500">
            <a
              className="m-2 flex justify-between items-center w-full text-gray-300"
              target="_blank" rel="noopener"
              href="https://www.linkedin.com/in/kevin-cerrinos-barroso-175009203/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center -ml-28 hover:ml-1 duration-300 bg-gray-800">
            <a
              className="m-2 flex justify-between items-center w-full text-gray-300"
              target="_blank" rel="noopener"
              href="https://github.com/kevettt"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center -ml-28 hover:ml-1 duration-300 bg-green-400">
            <a
              className="m-2 flex justify-between items-center w-full text-gray-300"
              target="_blank" rel="noopener"
              href="#"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center -ml-28 hover:ml-1 duration-300 bg-slate-600">
            <a
              className="m-2 flex justify-between items-center w-full text-gray-300"
              target="_blank" rel="noopener"
              href="#"
            >
              Curriculum <BsPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
