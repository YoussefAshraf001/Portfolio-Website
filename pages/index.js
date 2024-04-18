import React from "react";
import { useState } from "react";
import Head from "next/head";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

import Image from "next/image";
import MainPic from "../public/1.jpg";
import design from "../public/design.png";
import skills from "../public/skills.png";
import Academic from "../public/education.png";
import xp from "../public/company1.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      {/* HOME PAGE */}
      <Head>
        <title>Youssef Ashraf's Portofolio</title>
        <meta name="description" content="Youssef Ashraf's Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <div>
            <navbar className="text-black dark:text-white">
              <ul className="flex items-center justify-center gap-6 py-[40px]">
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1gkEDhtj8dcIBql6sLHWQFJg92a80LSgZ/view?usp=sharing"
                    target="#"
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a href="#contacts">Contact</a>
                </li>
                {/* <li className="cursor-pointer text-2xl px-1 py-1 border-black rounded-lg">
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
                </li> */}
              </ul>
            </navbar>
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-1 bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text font-medium md:text-6xl md:whitespace-nowrap lg:whitespace-nowrap">
                Youssef Ashraf
              </h2>
              <h4 className="text-5xl text-black leading-[50px] font-bold py-6 uppercase relative dark:text-white text-center">
                Developer And Designer
              </h4>
              <h4 className="text-xl md:text-3xl dark:text-white ">
                Junior Front End Developer
              </h4>
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/youssef-ashraf-853a271b4/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/YoussefAshraf001" target="_blank">
              <AiOutlineGithub />
            </a>
            <a href="https://wa.me/+201092201470" target="_blank">
              <AiOutlineWhatsApp />
            </a>
          </div>
          <div className="mx-auto w-80 h-80 relative mt-[22px] md:h-96 md:w-96">
            <Image
              src={MainPic}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </section>

        {/* Second PAGE */}
        <section id="skills">
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  flex-1 border-[2px] border-[#02348f]">
              <Image
                src={design}
                className="mx-auto"
                width={100}
                height={120}
              />
              <h4 className="text-[#446cb5] text-lg font-bold pt-8 pb-2">
                Beautiful Designs
              </h4>
              <p className="text-white py-2">Creating elegant designs.</p>
              <h4 className="py-2 text-[#446cb5]">
                Design Tools I use for UI/UX
              </h4>
              <p className="text-white">Figma</p>
              <p className="text-white">Adobe XD</p>
              <p className="text-white">Photoshop</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10  flex-1 border-[2px] border-[#0c8a7f]">
              <Image
                src={skills}
                className="mx-auto"
                width={120}
                height={120}
              />
              <h4 className="text-teal-600 text-lg font-medium pb-2 pt-8 ">
                Technologies I'm Using
              </h4>
              <ul className="items-center text-white">
                <p>HTML</p>
                <p>CSS</p>
                <p>Tailwind</p>
                <p>Javascript</p>
                <p>React</p>
                <p>Next.js</p>
                <p>API</p>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 border-[2px] border-[#027dc6]">
              <Image
                src={xp}
                className="mx-auto mt-5"
                width={150}
                height={150}
              />
              <h4 className="text-[#4c9fd2] text-lg font-bold pt-8 pb-2">
                Work Experience
              </h4>
              <p className="py-1 font-semibold text-white">
                Internship at Roche Pharmaceutical company
                <br></br>
                (03/2021 - 08/2022)
              </p>
              <br></br>
              <h4 className="text-[#4c9fd2] text-lg font-bold pb-2">
                Overview
              </h4>
              <p className="text-white">
                Built a two-part project, which consisted of a machine learning.
                and a website that can use this data and present it in multiple
                forms.
              </p>
            </div>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 border-[2px] border-[#bf1c31]">
            <Image
              src={Academic}
              className="mx-auto"
              width={140}
              height={100}
            />
            <h4 className="text-red-700 text-lg font-semibold pt-3 pb-2">
              Academic
            </h4>
            <p className="py-2 font-semibold text-white">
              Bachelor's Degrees in Computer Science
              <br></br>
              (2018 - 2023) at Nile University
            </p>
            <h4 className="pt-4 pb-1 text-red-700 lg:flex-1 font-semibold">
              Graduation Project
            </h4>

            <p className="text-white font-semibold">
              ERSAP: Adaptive and Efficient Al Platform for the Emergency
              Department
            </p>
            <h4 className="pt-4 text-red-700 lg:flex-1 font-semibold">
              Other Achievements
            </h4>
            <p className="text-white py-1 font-semibold">
              First Place at NU Biomedical Informatics Competition
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div>
            <h3 className="text-3xl pt-5 dark:text-white font-bold">
              PROJECTS
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Others projects will be uploaded as soon as they are furnished and
              suitable for
              <span className="text-teal-500"> production. </span>
            </p>
          </div>
          {/* for all the projects */}
          <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap mx-auto">
            {/* 1st PROJECT: AlphaX */}
            <div className="border-[2px] border-white basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full bg-black text-white hover:scale-105 transition-all duration-500">
              <img
                src="web1.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Netflix Clone
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  AlphaX is designed to present you with the newest release and
                  pick your taste and preferences from multiple catagories.Made
                  with a Firebase back-end and Firebase Authentication to give
                  signing up and login functionalities. Moreover, being able to
                  store user specific data with a React front-end and a Firebase
                  back-end. We use Firestore which is cloud storage with
                  Firebase to save data.
                </p>
                <p class="mb-0.5 md:mb-1 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">
                    React, Tailwind CSS, Firbase and FireStore{" "}
                  </span>
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base border-2 border-[#083344] border-solid px-2 rounded-full">
                  API:{" "}
                  <span class="font-light text-sm">
                    The Movie Database (TMDB){" "}
                  </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://alphax-netflix-clone.vercel.app/"
                    target="_blank"
                  >
                    <div
                      class="flex items-center gap-1 text-base  font-regular underline"
                      bis_skin_checked="1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/AlphaX-Netflix-Clone"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd PROJECT: The Dream Room */}
            <div className="border-[2px] border-white text-white basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web5.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl dashed">
                  NASA's Dream Room
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  With access to a vast collection of data and resources. By
                  leveraging this API, developers can retrieve information about
                  space missions, astronomical data, satellite imagery, and much
                  more. This project will be your ultimate cosmic playground. It
                  will allow you to explore and understand the vast expanses of
                  our universe with just a few clicks. So go ahead and get lost
                  in space.
                </p>
                <p class="mb-0.5 md:mb-1 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base border-2 border-[#083344] border-solid px-2 rounded-full">
                  API: <span class="font-light text-sm">NASA Open API </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://the-dream-room-nasa-nwkke9be2-youssef-ashraf.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/The-Dream-Room--NasaAPI"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd PROJECT: To Do List (Harry Potter Edition) */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web6.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class=" mb-4 font-medium text-start text-xl md:text-2xl">
                  To Do List
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  A Hogwarts-inspired To-Do app seems like a dream come true.
                  This app could make even the most mundane errands feel
                  enchanting. A touch of magic mixed with everyday organization
                  - that's what this quirky Harry Potter themed to-do app could
                  bring to our lives!
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS</span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://to-do-list-omega-plum.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/To-Do-List_-HarryPotterEdition-"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 4th PROJECT: Weather App */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full  hover:scale-105 transition-all duration-500">
              <img
                src="web4.jpg"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Weather App
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  It's like having your own personal meteorologist in the palm
                  of your hand! This nifty little app gives you detailed and
                  accurate weather forecasts for not just your current location,
                  but also for any city or town around the globe. It provides
                  real-time updates on temperature, humidity levels, wind speed,
                  and even precipitation chances. The user interface is clean
                  and intuitive, making it a breeze to navigate through all the
                  information.
                </p>
                <p class="mb-0.5 md:mb-1 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">
                    React, HTML and Tailwind CSS{" "}
                  </span>
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base border-2 border-[#083344] border-solid px-2 rounded-full">
                  API:{" "}
                  <span class="font-light text-sm">OpenWeatherMap API</span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://weather-app-sigma-five-99.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/Weather-App"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 5th PROJECT: The Valley of Fear */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full  hover:scale-105 transition-all duration-500">
              <img
                src="web3.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  The Valley of Fear
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  This is a such a minor project but means alot to me.
                  Showcasing one of my favorite novels, The Valley of Fear. is
                  the fourth and final Sherlock Holmes novel by British writer
                  Arthur Conan Doyle featuring the detective Sherlock Holmes
                  published on February 27, 1915.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">
                    HTML, CSS, and JavaScript{" "}
                  </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://sherlock-holmes-the-valley-of-fear.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/SherlockHolmes-TheValleyOfFear"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 6th PROJECT: Online Library Management System */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web2.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Online Library Management System
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  This is a library management system which is a Web based
                  Application that is designed to manage all the functions of a
                  library. It helps librarian to maintain the database of new
                  books and the books that are borrowed by members along with
                  their due dates and prices.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">
                    HTML, CSS, PHP and MySQL{" "}
                  </span>
                </p>
                <a
                  className="flex"
                  href="https://github.com/YoussefAshraf001/Online-Library-Management-System"
                  target="_blank"
                >
                  <div class="flex items-center gap-1 text-base  font-regular underline">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                    View Code
                  </div>
                </a>
              </div>
            </div>

            {/* 7th PROJECT: Questica */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web7.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Questica
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  Seeking new and engaging ways to challenge yourself ? this is
                  your sign join us and showcase your skills.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a href="https://questica.vercel.app/" target="_blank">
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/Questica"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 8th PROJECT: Elegant Clothing */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web8.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Elegant Clothing
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  A high-end boutique that specializes in providing luxurious
                  and sophisticated apparel for discerning customers. The store
                  offers a carefully curated selection of designer brands,
                  showcasing the latest trends in fashion while maintaining a
                  timeless sense of style.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://elegant-clothing.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/Elegant-Clothing"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 9th PROJECT: Investment Calculator */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web9.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Investment Calculator
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  The Investment Calculator App is a powerful tool for
                  individuals looking to make informed financial decisions. This
                  app provides users with the ability to calculate potential
                  investment returns based on various factors such as initial
                  investment amount, expected rate of return, and time horizon.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://investment-calculator-nine-ecru.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/Investment-Calculator"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 10th PROJECT: Time Game */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web10.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Time Game
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  People seek out new ways to challenge their cognitive
                  abilities and improve their time management skills. These apps
                  typically feature a variety of levels or challenges that
                  require the player to complete tasks within a certain
                  timeframe, testing their ability to make quick decisions and
                  prioritize effectively.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a href="https://time-game-one.vercel.app/" target="_blank">
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/Time-Game"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 11th PROJECT: Quiz App */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web11.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Quiz App
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  The Quiz App is a tool designed to test users' knowledge and
                  skills through a series of engaging quizzes. With its
                  user-friendly interface, the Quiz App provides a seamless
                  experience for users as they navigate through different quiz
                  categories and questions.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://quiz-app-youssef-ashraf-sedkis-projects.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/Quiz-App"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* 12th PROJECT: Project Management */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web12.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Project Management
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  An App Designed to improve businesses and individuals
                  efficiently plan, track, and manage projects from inception to
                  completion.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://project-management-sandy-phi.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/Project-Management"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 13th PROJECT: Tic-Tac-Toe */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web13.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Tic-Tac-Toe
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  Tic-Tac-Toe, also known as X and O, is a classic
                  paper-and-pencil game that has been enjoyed by children and
                  adults worldwide for centuries. The game is typically played
                  on a 3x3 grid where two players take turns marking either an
                  "X" or an "O" in empty squares, with the goal of being the
                  first to achieve a row of three of their marks either
                  horizontally, vertically, or diagonally.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://tic-tac-toe-eta-dun.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/Tic-Tac-Toe"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 14th PROJECT: PlacePicker */}
            <div className="bg-black text-white border-[2px] border-white basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full hover:scale-105 transition-all duration-500">
              <img
                src="web14.png"
                className="object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">
                  Place Picker
                </h1>
                <p class="flex-1 mb-3 text-white text-start font-light text-md md:text-lg">
                  For travelers looking to easily plan a quick getaway without
                  the hassle of extensive research, an app that allows users to
                  pick vacation destinations close to their current location is
                  a valuable tool. This type of app leverages geolocation
                  technology to provide tailored suggestions based on proximity,
                  ensuring convenience and ease in decision-making.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">
                  Uses:{" "}
                  <span class="font-light text-sm">React, HTML and CSS </span>
                </p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a
                    href="https://place-picker-omega.vercel.app/"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base font-regular underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>
                      Live Preview
                    </div>
                  </a>

                  <a
                    href="https://github.com/YoussefAshraf001/PlacePicker"
                    target="_blank"
                  >
                    <div class="flex items-center gap-1 text-base  font-regular underline">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      View Code
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT ME */}
        <hr></hr>
        <div id="contacts">
          <br></br>
          <p className="dark:text-white text-xl">
            Developed and Designed By
            <a className="text-sky-600 text-l"> Youssef Ashraf </a>
          </p>
        </div>

        <br></br>
        <div className="dark:text-white">
          <h4 className="pb-2">
            Get In Touch. By pressing any of the following:
          </h4>
          <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
            <a href="https://wa.me/+201092201470" target="_blank">
              <div
                class="flex items-center gap-1 text-base  font-regular underline"
                bis_skin_checked="1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="34"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{" "}
                </svg>
                01092201470
              </div>
            </a>
          </div>

          <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
            <a href="mailto:youssefashraf273@gmail.com" target="_blank">
              <div
                class="flex items-center gap-1 text-base  font-regular underline"
                bis_skin_checked="1"
              >
                <svg
                  className="dark:invert"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="34"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <g>
                    {" "}
                    <path fill="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z" />{" "}
                  </g>{" "}
                </svg>
                youssefashraf273@gmail.com
              </div>
            </a>
          </div>
          <br></br>
          <br></br>
        </div>
      </main>
    </div>
  );
}
