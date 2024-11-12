import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BsPersonWorkspace, BsFillMoonStarsFill } from "react-icons/bs";
import { MdDraw, MdLightMode } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";
import { CiPlay1 } from "react-icons/ci";
import { DiPhotoshop } from "react-icons/di";
import { IoIosTimer } from "react-icons/io";
import { ReactTyped } from "react-typed";

import { projects } from "../projects.js";
import Tabs from "../components/Tabs";
import DownloadButton from "../components/DownloadButton.js";

export const Home = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [darkMode, setDarkMode] = useState(true);

  const tabs = ["All", "Real-World", "Others"];
  const [showProjects, setShowProjects] = useState(true);
  const [fade, setFade] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const mainRef = useRef(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggerAnimation(true);
          setTimeout(() => setTriggerAnimation(false), 1000); // Reset animation state after it finishes
        }
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, [mainRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredProjects = projects.filter((project) => {
    return selectedTab === "All" || project.type === selectedTab;
  });

  useEffect(() => {
    const handleTabChange = () => {
      setFade(false);
      setShowProjects(false);
      setLoading(true);
      const timer = setTimeout(() => {
        setSelectedTab(selectedTab);
        setFade(true);
        setShowProjects(true);
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    };

    handleTabChange();
  }, [selectedTab]);

  const handleNoLinkClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
    >
      <Head>
        <title>Youssef Ashraf's Portfolio</title>
        <meta name="description" content="Youssef Ashraf's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={`sticky top-0 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg z-50 transition-colors duration-300`}
      >
        <nav className="container mx-auto flex justify-between p-4 items-center">
          {isScrolled ? (
            <h2 className="text-xl text-center mr-6 md:py-1.5">
              Youssef Ashraf
            </h2>
          ) : (
            <ReactTyped
              className="text-4xl py-1.5 md:py-0"
              strings={["Hi", "Hello", "Hóla"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          )}
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <a href="#projects" className="hover:text-sky-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-500">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-sky-500">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              {/* Button for smaller screens */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 px-2 py-1 border rounded-lg transition duration-300 sm:hidden"
              >
                {darkMode ? <BsFillMoonStarsFill /> : <MdLightMode />}
              </button>

              {/* Button for larger screens */}
              <div className="relative hidden sm:block w-16 h-8 ml-3">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-full h-full rounded-full transition duration-300 ${
                    darkMode ? "bg-gray-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`absolute top-[7px] ${
                      darkMode ? "left-3" : "left-1"
                    } w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      darkMode
                        ? "translate-x-full bg-gray-200 rotate-180"
                        : "bg-gray-800 "
                    }`}
                  >
                    {darkMode ? (
                      <BsFillMoonStarsFill className="text-gray-800  rotate-180" />
                    ) : (
                      <MdLightMode className="text-gray-200" />
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main
        ref={mainRef}
        className={`text-center relative ${
          darkMode ? "bg-gray-900" : "bg-white"
        } transition-colors duration-300`}
      >
        <section
          id="landing"
          className="flex flex-col items-center justify-center bg-cover bg-center h-screen"
          style={{
            backgroundImage: "url('hero-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h2
              className={`text-6xl font-semibold text-white ${
                triggerAnimation ? "animate-disintegrate" : ""
              }`}
            >
              Youssef Ashraf
            </h2>
            <p
              className={`text-2xl mt-4 text-white ${
                triggerAnimation ? "animate-disintegrate" : ""
              }`}
            >
              Front End Developer
            </p>
            <div
              className={`flex justify-center space-x-4 mt-6 text-3xl text-white ${
                triggerAnimation ? "animate-disintegrate" : ""
              }`}
            >
              <a
                href="https://www.linkedin.com/in/youssef-ashraf-853a271b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-blue-600"
              >
                <AiFillLinkedin
                  className="hover:scale-125 ease-in-out duration-300"
                  size={50}
                />
              </a>
              <a
                href="https://github.com/YoussefAshraf001"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
                }`}
              >
                <AiOutlineGithub
                  className="hover:scale-125 ease-in-out duration-300"
                  size={50}
                />
              </a>
              <a
                href="https://wa.me/+201092201470"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-green-500"
              >
                <AiOutlineWhatsApp
                  className="hover:scale-125 ease-in-out duration-300"
                  size={50}
                />
              </a>
            </div>
            <div
              className={`${triggerAnimation ? "animate-disintegrate" : ""}`}
            >
              <DownloadButton />
            </div>
          </div>
        </section>
      </main>

      <section id="skills" className="py-10 px-10">
        <div className="py-4">
          <div className="border-[1px] border-white m-4 bg-gray-300 h-[1px]" />
        </div>
        <h3 className="text-3xl font-bold text-center mb-6">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skill Card */}
          <div
            className={`shadow-lg p-6 rounded-lg text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="mx-auto mb-4 w-24 h-24">
              <MdDraw
                size={100}
                className={`${darkMode ? "text-white" : "text-blue-400"}`}
              />
            </div>

            <h4
              className={`${
                darkMode ? "text-blue-300" : "text-black"
              } text-lg font-bold`}
            >
              Beautiful Designs
            </h4>
            <p className="py-2">Creating elegant designs.</p>
            <h4 className={`${darkMode ? "text-blue-300" : "text-black"} py-2`}>
              Design Tools I use
            </h4>
            <ul className="space-y-3">
              <li className="flex justify-center items-center">
                <div className="mr-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                  >
                    <path
                      fill="#52bea0"
                      d="M39,88.649L39,88.649c-7.18,0-13-5.82-13-13l0,0c0-7.18,5.82-13,13-13h13v13 C52,82.829,46.18,88.649,39,88.649z"
                    ></path>
                    <path
                      fill="#f599a0"
                      d="M65.5,37.649H52v-25h13.5c6.904,0,12.5,5.596,12.5,12.5l0,0C78,32.052,72.404,37.649,65.5,37.649z"
                    ></path>
                    <path
                      fill="#e85654"
                      d="M38.5,12.649H52v25H38.5c-6.904,0-12.5-5.596-12.5-12.5l0,0C26,18.245,31.596,12.649,38.5,12.649z"
                    ></path>
                    <path
                      fill="#787ab5"
                      d="M38.5,37.649H52v25H38.5c-6.904,0-12.5-5.596-12.5-12.5l0,0C26,43.245,31.596,37.649,38.5,37.649z"
                    ></path>
                    <circle
                      cx="65.5"
                      cy="51.149"
                      r="11.5"
                      fill="#39c1d7"
                    ></circle>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M39,88.649L39,88.649c-7.18,0-13-5.82-13-13l0,0c0-7.18,5.82-13,13-13h13v13C52,82.829,46.18,88.649,39,88.649z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M42.5,83.397 c-1.067,0.483-2.252,0.752-3.5,0.752l0,0c-4.694,0-8.5-3.806-8.5-8.5l0,0"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M46.212,80.149 c-0.34,0.544-0.741,1.047-1.192,1.5"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M47.5,72.149v3.5 c0,0.512-0.045,1.013-0.132,1.5"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M47.5,67.149v2"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M65.5,37.649H52v-25h13.5c6.904,0,12.5,5.596,12.5,12.5l0,0C78,32.052,72.404,37.649,65.5,37.649z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M65.5,17.149 c4.418,0,8,3.582,8,8l0,0"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M56.86,17.149h5.64"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M38.5,12.649H52v25H38.5c-6.904,0-12.5-5.596-12.5-12.5l0,0C26,18.245,31.596,12.649,38.5,12.649z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M38.5,37.649H52v25H38.5c-6.904,0-12.5-5.596-12.5-12.5l0,0C26,43.245,31.596,37.649,38.5,37.649z"
                    ></path>
                    <circle
                      cx="65.5"
                      cy="51.149"
                      r="11.5"
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></circle>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M60.138,46.649 c1.284-1.528,3.21-2.5,5.362-2.5"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M59.174,54.149 c-0.432-0.909-0.674-1.926-0.674-3"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M70.862,55.649 c-1.284,1.528-3.21,2.5-5.362,2.5c-1.074,0-2.091-0.242-3-0.674"
                    ></path>
                    <path
                      fill="none"
                      stroke="#1f212b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M72.5,51.149 c0,0.695-0.101,1.366-0.29,2"
                    ></path>
                  </svg>
                </div>

                <span>Figma</span>
              </li>

              <li className="flex justify-center items-center">
                <DiPhotoshop
                  size={30}
                  className={`mr-2 ${
                    darkMode ? "text-[#7663f1]" : "text-[#3C327B]"
                  }`}
                />
                Adobe Photoshop
              </li>
              <li className="flex justify-center items-center">
                <SiAdobexd size={30} className="mr-2 text-[#fa3185]" />
                <span>Adobe XD</span>
              </li>
            </ul>
          </div>

          {/* Skill Card */}
          <div
            className={`shadow-lg p-6 rounded-lg text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="mx-auto mb-4 w-24 h-24">
              <IoCodeSlashOutline
                size={100}
                className={`${darkMode ? "text-white" : "text-blue-400"}`}
              />
            </div>
            <h4
              className={`${
                darkMode ? "text-blue-300" : "text-black"
              } text-lg font-bold`}
            >
              Technologies
            </h4>
            <div className="grid grid-cols-2">
              <div className="mt-2">
                <p
                  className={`${
                    darkMode ? "text-blue-300" : "text-black underline"
                  } font-normal text-lg`}
                >
                  Languages
                </p>
                <ul className="mt-2 space-y-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="mt-2">
                <p
                  className={`${
                    darkMode ? "text-blue-300" : "text-black underline"
                  } font-normal text-lg`}
                >
                  Frameworks
                </p>

                <ul className="mt-2 space-y-1">
                  <li>ReactJS</li>
                  <li>Next.js</li>
                  <li>Redux</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>SCSS</li>
                  <li>API Integration</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Skill Card */}
          <div
            className={`shadow-lg p-6 rounded-lg text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="w-full flex justify-center items-center">
              <BsPersonWorkspace
                size={100}
                className={`${darkMode ? "text-white" : "text-blue-400"}`}
              />
            </div>
            <h4
              className={`${
                darkMode ? "text-blue-300" : "text-black"
              } text-lg font-bold pt-8 pb-2`}
            >
              Work Experience
            </h4>
            <div className="flex flex-col justify-center items-center">
              <p className="py-2">
                Internship at Roche Pharmaceutical
                <br></br>
                (03/2021 - 08/2022)
              </p>
              <p className="py-2">
                Front-end Developer Freelancer
                <br></br>
                (02/2022 - 06/2023)
              </p>
              <p className="py-2">
                Junior Front-end Developer and UI/UX Designer at Tactful
                <br></br>
                (06/2023 - 09/2024)
              </p>
            </div>
          </div>

          <div
            className={`shadow-lg p-6 rounded-lg text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="w-full flex justify-center items-center">
              <HiAcademicCap
                size={100}
                className={`${darkMode ? "text-white" : "text-blue-400"}`}
              />
            </div>
            <h4
              className={`${
                darkMode ? "text-blue-300" : "text-black"
              } text-lg font-semibold pt-3 pb-2`}
            >
              Academic
            </h4>
            <p>
              Bachelor's Degrees in Computer Science
              <br></br>
              (2018 - 2023) at Nile University
            </p>
            <h4
              className={`${
                darkMode ? "text-blue-300" : "text-black"
              } pt-4 pb-1 lg:flex-1 font-semibold`}
            >
              Graduation Project
            </h4>

            <p>
              ERSAP: Adaptive and Efficient Al Platform for the Emergency
              Department
            </p>
            <h4
              className={`${
                darkMode ? "text-blue-300" : "text-black"
              } pt-4 lg:flex-1 font-semibold`}
            >
              Other Achievements
            </h4>
            <p className="py-1">
              First Place at NU Biomedical Informatics Competition
            </p>
          </div>
        </div>
        <div className="py-4 pb-0">
          <div className="border-[1px] border-white m-4 bg-gray-300 h-[1px]" />
        </div>
      </section>

      <section id="projects" className="px-6">
        <h3 className="text-3xl font-bold text-center mb-6">Projects</h3>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelect={setSelectedTab}
          mode={darkMode}
        />

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="loading-dots">
              <span
                className={`inline-block w-[10px] h-[10px] mx-5 rounded-[50%] ${
                  darkMode ? "bg-white" : "bg-sky-600"
                } animate-bounce`}
              ></span>
              <span
                className={`inline-block w-[10px] h-[10px] mx-5 rounded-[50%] ${
                  darkMode ? "bg-white" : "bg-sky-600"
                } animate-bounce`}
              ></span>
              <span
                className={`inline-block w-[10px] h-[10px] mx-5 rounded-[50%] ${
                  darkMode ? "bg-white" : "bg-sky-600"
                } animate-bounce`}
              ></span>
            </div>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 gap-7 py-3 lg:grid-cols-3 mx-auto px-6 ${
              fade ? "fade-enter" : "fade-exit"
            }`}
          >
            {showProjects &&
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`shadow-lg rounded-lg overflow-hidden flex flex-col ${
                    darkMode
                      ? "bg-gray-800 text-gray-200"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    className="object-cover h-48 w-full"
                    alt={project.title}
                  />
                  <div className="flex flex-col flex-1 p-5">
                    <h1 className="mb-2 font-medium text-xl md:text-2xl">
                      {project.title}
                    </h1>
                    <p className="flex-1 mb-3 font-light text-md md:text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-col mt-auto">
                      {project.api && (
                        <p
                          className={`text-heading font-regular text-center border-2 ${
                            darkMode ? " border-sky-600 " : "border-sky-400 "
                          }border-solid px-2 rounded-full mb-2`}
                        >
                          API:{" "}
                          <span className="font-light text-sm">
                            {project.api}
                          </span>
                        </p>
                      )}
                      <p className="text-heading font-regular text-base">
                        Uses:{" "}
                        <span className="font-light text-sm">
                          {project.uses}
                        </span>
                      </p>
                    </div>
                    <div
                      className={`${
                        !project.liveLink ? "py-[18px] px-12" : ""
                      } flex justify-center items-center mt-4 w-full`}
                    >
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1  ${
                            darkMode
                              ? "bg-sky-600 border-2 border-sky-600 hover:text-white"
                              : "bg-sky-400 border-2 border-sky-400 hover:text-sky-500"
                          } text-white hover:bg-transparent py-1 px-12 rounded-full shadow-md hover:scale-125 ease-in-out transition duration-300`}
                        >
                          <CiPlay1 className="text-2xl" />
                          Start App
                        </a>
                      ) : (
                        <button
                          onClick={handleNoLinkClick}
                          className={`inline-flex items-center gap-1 py-1 px-12 rounded-full shadow-md border-2 border-gray-400 cursor-not-allowed transition-all duration-300 transform ${
                            isClicked
                              ? "animate-shake bg-red-500 border-red-500 text-white"
                              : "bg-sky-600 text-white border-sky-600 opacity-50"
                          }`}
                        >
                          {isClicked ? (
                            <IoIosTimer className="text-2xl" />
                          ) : (
                            <CiPlay1 className="text-2xl" />
                          )}
                          {isClicked ? "Coming Soon" : "Start App"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>

      <section id="contacts" className="my-10">
        <h3 className="text-3xl font-bold text-center">Get in Touch</h3>
        <p className="text-center">You can reach me via:</p>
        <div className="flex flex-col items-center mt-4 space-y-2">
          <a
            href="mailto:youssefashraf273@gmail.com"
            className="flex items-center px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition"
          >
            <FaEnvelope className="mr-2" />
            youssefashraf273@gmail.com
          </a>
          <a
            href="https://wa.me/+201092201470"
            className="flex items-center px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition"
          >
            <FaWhatsapp className="mr-2" />
            01092201470
          </a>
        </div>
      </section>

      <div className="flex justify-end p-4">
        <a href="#landing" className="text-sky-500 hover:underline">
          ↑ BACK TO THE TOP ↑
        </a>
      </div>

      <footer
        className={`text-center py-4 ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <p>
          Developed and Designed by{" "}
          <span className="font-semibold text-sky-500">Youssef Ashraf</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
