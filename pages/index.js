import React from 'react';
import {useState} from "react";
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import Image from "next/image";
import me from "../public/graduate.png";
import design from "../public/design.png";
import code from "../public/code.svg";
import Academic from "../public/Academic.svg";
import xp from '../public/company1.png';

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
          <navbar className="py-8 mb-12 flex justify-between dark:text-white">
            <h1 className="text-3xl font-bold font-burtons text-black dark:text-white lg:text-4xl">YA</h1>
            <ul className="flex item-center">
              <li className="cursor-pointer text-2xl">
                <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li><a className=" bg-cyan-600 text-white px-4 py-2 rounded-md ml-8 font-semibold" href='https://drive.google.com/file/d/1A6LMwrmheRPTK70GBmk6xj3wqXkpNY4b/view?usp=sharing' target="_blank">Degree</a></li>
              <li><a className=" bg-cyan-600 text-white px-4 py-2 rounded-md ml-8 font-semibold" href='https://drive.google.com/file/d/1wsJM_FAltHEt8a35tF7KsXLUpLUSrbyo/view?usp=sharing' target="_blank">CV</a></li>
            </ul>
          </navbar>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-1 bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text font-medium md:text-6xl">Youssef Ashraf</h2>
            <h3 className="uppercase text-2xl py-1 md:text-5xl md:py-3 dark:text-white">Developer And Designer</h3>
            <h4 className="text-xl md:text-3xl dark:text-white">Junior Full Stack Developer</h4>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href="https://www.instagram.com/lonewolf_x24/" target="_blank">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.linkedin.com/in/youssef-ashraf-853a271b4/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/YoussefAshraf001" target="_blank">
            <AiOutlineGithub />
          </a>
          </div>
          <div className="mx-auto rounded-full w-80 h-80 relative mt-20 md:h-96 md:w-96 ">
            <Image src={me} layout="fill" objectFit="cover" />
          </div>
        </section>



                                                                                            {/* Second PAGE */}
        <section>
          <div>
            <h3 className="text-3xl dark:text-white">What i Offer</h3>

          </div>
          <div className="lg:flex gap-10 ">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={design} className="mx-auto" width={100} height={120} />
            <h3 className="text-[#446cb5] text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="text-gray-800 py-2">
              Creating elegant designs suited for your needs.
            </p>
            <h4 className="py-4 text-[#446cb5]">Design Tools I use for UI/UX</h4>
            <p className="text-gray-800 py-1">Adobe XD</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Photoshop</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={code} className="mx-auto" width={100} height={100} />
            <h3 className="text-teal-600 text-lg font-medium pb-2 pt-8 ">Technologies I'm Using</h3>
            <p className="text-gray-800 py-2">
            Ever-Evolving
            </p>
            <ul className="flex justify-between">
            <ul>
            <p className="text-cyan-800 py-1 underline">Front-End</p>
            <p className="text-gray-800">HTML</p>
            <p className="text-gray-800">CSS</p>
            <p className="text-gray-800">Tailwind</p>
            <p className="text-gray-800">Javascript</p>
            <p className="text-gray-800">React</p>
            <p className="text-gray-800">Next.js</p>
            <p className="text-gray-800">Node.js</p>
            <p className="text-gray-800">API</p>
            </ul>
            <ul>
            <p className="text-cyan-800 py-1 underline">For Databases</p>
            <p className="text-gray-800">MySQL</p>
            <p className="text-gray-800">PHP</p>
            <p className="text-gray-800">FireStore</p>
            </ul>
            <ul>
            <p className="text-cyan-800 py-1 underline">Back-End</p>
            <p className="text-gray-800">Python</p>
            <p className="text-gray-800">Firebase</p>
            <p className="text-gray-800">C</p>
            <p className="text-gray-800">C++</p>
            <p className="text-gray-800">C#</p>
            <p className="text-gray-800">R</p>
            </ul>
            </ul>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={xp} className="mx-auto mt-5" width={150} height={150}/>
            <h3 className="text-[#4c9fd2] text-lg font-medium pt-8 pb-2">Work Experience</h3>
            <p className="py-1 font-semibold">
            Internship at Roche Pharmaceutical company 
            <br></br>
            (03/2021 - 08/2022)
            </p>
            <br></br>
            <h3 className="text-[#4c9fd2] text-lg font-medium pb-2">Overview</h3>
            <p>
            We were asked to provide a two-part project, which consisted of the first part, 
            which is a machine learning model made and trained by us to take and calculate the input information of the patient to be able 
            to determine if they need to be admitted to one of the emergency rooms. 
            Moreover, a website that can use this data and present it in multiple forms.
            </p>
          </div>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={Academic} className="mx-auto" width={100} height={100}/>
            <h3 className="text-red-700 text-lg font-medium pt-8 pb-2">Academic</h3>
            <p className="py-2 font-semibold">
            Bachelor's Degrees in Computer Science 
            <br></br>
            (2018 - 2023) at Nile
            University
            </p>
            <h4 className="pt-4 pb-1 text-red-700 lg:flex-1 font-semibold">Graduation Project</h4>
            <p className="text-gray-800 font-semibold"> A Machine intelligence Model used in Hospital 
            Emergency Rooms as well as a full functioning, responsive 
            website that includes ReactJS and Django</p>
            <h4 className="pt-4 text-red-700 lg:flex-1 font-semibold">Other Achievements</h4>
            <p className="text-gray-800 py-1 font-semibold">First Place at NU Biomedical Informatics Competition</p>
          </div>
        </section>

                                                                                            {/* PROJECTS */}
        <section>
          <div>
            <h3 className="text-3xl pt-5 dark:text-white font-bold">PROJECTS</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Others projects will be uploaded as soon as they are furnished and suitable for
              <span className="text-teal-500"> production. </span>
            </p>
          </div>
              
          {/* for all the projects */} <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap mx-auto">
          {/* FIRST PROJECT: AlphaX */}
            <div className="basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-105 transition-all duration-500">
              <img src="web1.jpg" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">AlphaX</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">
                ALPHAX is a front-end Netflix clone with a Firebase back-end! I used the TMDB API for all the data 
                and used <span className='font-semibold'>Firebase Authentication</span> to give login functionality as well as signing up as a new user. 
                Moreover, using <span className='font-semibold'> Firestore which is a flexible, scalable cloud storage database to store user specific data</span>.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">Uses: <span class="font-light text-sm">React, Tailwind CSS, Firbase and FireStore </span></p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center"><a href="https://alphax-netflix-clone.vercel.app/" target="_blank"><div class="flex items-center gap-1 text-base  font-regular underline" bis_skin_checked="1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"> <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/> 
                </svg>Live Preview</div></a>
                
                <a href="https://github.com/YoussefAshraf001/AlphaX-Netflix-Clone" target="_blank">
                <div class="flex items-center gap-1 text-base  font-regular underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>View Code</div></a></div></div>
              </div>
              </div>


            {/* SECOND PROJECT: Online Library Management System */}
            <div className="basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-105 transition-all duration-500">
              <img src="web2.png" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">Online Library Management System</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">This is a library management system which is a Web based Application that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates and prices.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">Uses: <span class="font-light text-sm">HTML, CSS, PHP and MySQL </span></p>
                <a className='flex' href="https://github.com/YoussefAshraf001/Online-Library-Management-System" target="_blank">
                <div class="flex items-center gap-1 text-base  font-regular underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>View Code</div></a></div>
              </div>


            {/* THIRD PROJECT: The Valley of Fear */}
            <div className="basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-105 transition-all duration-500">
              <img src="web3.png" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">The Valley of Fear</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">This is a such a minor project but means alot to me. Showcasing one of my favorite novels, The Valley of Fear. is the fourth and final Sherlock Holmes novel by British writer Arthur Conan Doyle featuring the detective Sherlock Holmes published on February 27, 1915.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">Uses: <span class="font-light text-sm">HTML, CSS, and JavaScript </span></p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a href="https://sherlock-holmes-the-valley-of-fear.vercel.app/" target="_blank"><div class="flex items-center gap-1 text-base font-regular underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"> <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/> 
                </svg>Live Preview</div></a>
                
                <a href="https://github.com/YoussefAshraf001/SherlockHolmes-TheValleyOfFear" target="_blank">
                <div class="flex items-center gap-1 text-base  font-regular underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>View Code</div></a></div></div>
              </div>


            {/* FOURTH PROJECT: Weather App */}
            <div className="basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-105 transition-all duration-500">
              <img src="web4.jpg" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">Weather App</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">A React JS weather app using the OpenWeatherMap API. While using axios to connect with our API. To present a live and dynamic degree mark based on your search.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">Uses: <span class="font-light text-sm">React and Tailwind CSS</span></p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a href="https://weather-app-sigma-five-99.vercel.app/" target="_blank"><div class="flex items-center gap-1 text-base font-regular underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"> <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/> 
                </svg>Live Preview</div></a>
                
                <a href="https://github.com/YoussefAshraf001/Weather-App" target="_blank">
                <div class="flex items-center gap-1 text-base  font-regular underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>View Code</div></a></div></div>
              </div>

            {/* FIFTH PROJECT: The Dream Room */}
            <div className="basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-105 transition-all duration-500">
              <img src="web5.png" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">The Dream Room</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">Hey there! Have you ever wondered what's out there beyond our humble planet? Well, buckle up because I've got the perfect project for you. 
              Imagine having a one-stop shop where you can easily access information about any planet, galaxy, or astronomical document that catches your fancy. 
              We're talking about some of the most comprehensive databases that compile all the mind-blowing celestial knowledge in one place that can easily be accessed with NASA API. 
              Whether you want to learn more about the mysterious black holes lurking in distant galaxies or simply gaze at awe-inspiring images of nebulas, this project will be your ultimate cosmic playground. 
              It will allow you to explore and understand the vast expanses of our universe with just a few clicks. So go ahead and get lost in space, my friend—the wonders of our cosmos are waiting for you!
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">Uses: <span class="font-light text-sm">React, HTML and CSS</span></p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a href="https://the-dream-room-nasa-api.vercel.app/" target="_blank"><div class="flex items-center gap-1 text-base font-regular underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"> <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/> 
                </svg>Live Preview</div></a>
                
                <a href="https://github.com/YoussefAshraf001/The-Dream-Room--NasaAPI" target="_blank">
                <div class="flex items-center gap-1 text-base  font-regular underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>View Code</div></a></div></div>
              </div>
              

              {/* SIXTH PROJECT: To Do List (Harry Potter Edition) */}
            <div className="basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-105 transition-all duration-500">
              <img src="web6.png" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">To Do List (Harry Potter Edition)</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">So, picture this - a to-do app with a Harry Potter theme, how cool would that be? As a massive fan of the magical world created by J.K. 
                Rowling, having my to-do list organized and managed in a Hogwarts-inspired style seems like a dream come true. 
                Imagine assigning tasks like "Brew potion for Snape's class" or "Practice Quidditch skills with friends." With wand-waving animations and spells unlocking achievements, this app could make even the most mundane errands feel enchanting. 
                It could have customizable house-themed templates, sorting hats to prioritize tasks, and perhaps even deliver reminders in the voices of characters from the series. 
                A touch of magic mixed with everyday organization - that's what this quirky Harry Potter themed to-do app could bring to our lives!
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">Uses: <span class="font-light text-sm">React and CSS</span></p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center">
                  <a href="https://to-do-list-omega-plum.vercel.app/" target="_blank"><div class="flex items-center gap-1 text-base font-regular underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"> <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/> 
                </svg>Live Preview</div></a>
                
                <a href="https://github.com/YoussefAshraf001/To-Do-List_-HarryPotterEdition-" target="_blank">
                <div class="flex items-center gap-1 text-base  font-regular underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>View Code</div></a></div></div>
              </div>
              

            </div>
        </section>

                                                                                            {/* CONTACT ME */}
        <hr></hr>
        <div>
          <br></br>
          <p className="dark:text-white text-xl">Developed and Designed By
            <a className="text-sky-600 text-l"> Youssef Ashraf </a>
          </p>
        </div>

        <br></br>
        {/* <div className="dark:text-white absolute bg-none"> */}
        <div className="dark:text-white">
          <h2 className="pb-2" >Get In Touch. By pressing any of the following:</h2>
        <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center"><a href="https://wa.me/+201092201470" target="_blank"><div class="flex items-center gap-1 text-base  font-regular underline" bis_skin_checked="1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
            01092201470
        </div></a></div>

        <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center"><a href="mailto:youssefashraf273@gmail.com" target="_blank"><div class="flex items-center gap-1 text-base  font-regular underline" bis_skin_checked="1">
        <svg className="dark:invert" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z"/> </g> </svg>
        youssefashraf273@gmail.com
        </div></a></div>

      <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center"><a href="https://www.instagram.com/lonewolf_x24/" target="_blank"><div class="flex items-center gap-1 text-base  font-regular underline" bis_skin_checked="1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>
        @lonewolf_x24
      </div></a></div>
      <br></br>
      <br></br>
      </div>
      </main>
    </div>
  );
}
