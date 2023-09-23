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
//import me from "../public/welcome.jpg";
import me from "../public/graduate.png";
import design from "../public/design.png";
import code from "../public/code.svg";
import Academic from "../public/Academic.svg";

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
            <h1 className="text-3xl font-bold font-burtons text-black dark:text-white lg:text-4xl">Y A</h1>
            <ul className="flex item-center">
              <li className="cursor-pointer text-2xl">
                <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li><a className=" bg-cyan-600 text-white px-4 py-2 rounded-md ml-8 font-semibold" href='https://drive.google.com/file/d/1A6LMwrmheRPTK70GBmk6xj3wqXkpNY4b/view?usp=sharing' target="_blank">Degree</a></li>
              <li><a className=" bg-cyan-600 text-white px-4 py-2 rounded-md ml-8 font-semibold" href='https://drive.google.com/file/d/1hniu6Lr1GoqSVuoPqnGifNfw6eSzlVqU/view?usp=sharing' target="_blank">CV</a></li>
            </ul>
          </navbar>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-1 bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text font-medium md:text-6xl">Youssef Ashraf</h2>
            <h3 className="text-2xl py-1 md:text-5xl md:py-3 dark:text-white">Developer And Designer</h3>
            <h4 className="text-xl md:text-3xl dark:text-white">Front-End Developer</h4>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href="https://www.instagram.com/thekilleralpha/" target="_blank">
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
            <Image src={me} className="hover:animate-bounce" layout="fill" objectFit="cover" />
          </div>
        </section>



                                                                                            {/* Second PAGE */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Ever since I could remember I always had a passion to how
              <span className="text-teal-500"> computers </span>
              thinks and know more about how things are created. I'am at the start of my 
              <span className="text-teal-500"> journey </span> 
              at the moment but am looking forward to knowing more.
            </p>
            <p className="text-md  text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including UI design as well as
              programming.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={design} className="mx-auto" width={100} height={120} />
            <h3 className="text-blue-400 text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="text-gray-800 py-2">
              Creating elegant designs suited for your needs.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I use for UI/UX</h4>
            <p className="text-gray-800 py-1">AdobeXD</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Photoshop</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={code} className="mx-auto" width={100} height={100} />
            <h3 className="text-teal-600 text-lg font-medium pt-9 pb-6 lg:pb-14">Technologies I Use</h3>
            <ul className="columns-3">
            <ul>
            {/* <p className="text-cyan-800 py-1">Front-End</p> */}
            <p className="text-gray-800">HTML</p>
            <p className="text-gray-800">CSS</p>
            <p className="text-gray-800">Tailwind</p>
            <p className="text-gray-800">Javascript</p>
            <p className="text-gray-800">React.js</p>
            <p className="text-gray-800">Next.js</p>
            <p className="text-gray-800">API</p>
            </ul>
            <ul>
            {/* <p className="text-cyan-800 py-1">Back-End</p> */}
            <p className="text-gray-800">Python</p>
            <p className="text-gray-800">C++</p>
            <p className="text-gray-800">C#</p>
            <p className="text-gray-800">Linux</p>
            <p className="text-gray-800">R</p>
            </ul>
            <ul>
            {/* <p className="text-cyan-800 py-1">For Databases</p> */}
            <p className="text-gray-800">MySQL</p>
            <p className="text-gray-800">PHP</p>
            </ul>
            </ul>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={Academic} className="mx-auto" width={100} height={100}/>
            <h3 className="text-red-600 text-lg font-medium pt-8 pb-2">Academic</h3>
            <p className="py-2 font-semibold">
            Computer Science / Biomedical Informatics (2018 - 2023) at Nile
            University.
            </p>
            <h4 className="py-4 text-teal-600 lg:flex-1 font-semibold">Achievements</h4>
            <p className="text-gray-800 py-1 font-semibold">First Place at NU Biomedical Informatics Competition</p>
            <p className="text-gray-800 py-1 font-semibold">First Place Graduation Project (Machine intelligence Model 
            for Emergency Rooms as well as a website built with ReactJS 
            and Django for database)</p>
          </div>
          </div>
        </section>

                                                                                            {/* PROJECTS */}
        <section>
          <div>
            <h3 className="text-3xl pt-5 dark:text-white font-bold">PROJECTS</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Some of the Projects that i have made. Others will be uploaded as soon as they are furnished and suitable for
              <span className="text-teal-500"> production. </span>
            </p>
          </div>
              
    {/* for all the projects */} <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap mx-auto">
          
          {/* FIRST PROJECT */}
            <div className="basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-125 transition-all duration-500">
              <img src="web1.jpg" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">Emporium</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">Emporium helps and supports the needs of customers by giving them options that might not be available in their local market including vegetables, drinks, electronics, etc... Filled with Cheap deals and better prices, giving the opportunity to shop 24/7 avoiding closing hours as well as saving your time by not having to wait in long lines at the cashier or having to battle for a parking place. All these problems can be avoided when you choose Emporium.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">Uses: <span class="font-light text-sm">HTML, CSS, and JavaScript </span></p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center"><a href="#"><div class="flex items-center gap-1 text-base  font-regular underline" bis_skin_checked="1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"> <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/> 
                </svg>Live Preview</div></a><a href="" target="_blank">
                <div class="flex items-center gap-1 text-base  font-regular underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>View Code</div></a></div></div>
              </div>
              </div>


            {/* SECOND PROJECT */}
            <div className="basis-1/4 flex-1  min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-125 transition-all duration-500">
              <img src="web2.png" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">Online Library Management System</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">This is a library management system which is a Web based Application that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates and prices.
                </p>
                <p class="mb-2 md:mb-6 text-heading font-regular text-base">Uses: <span class="font-light text-sm">HTML, CSS, PHP and MySQL </span></p>
                <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center"><a href="#"> <div class="flex items-center gap-1 text-base  font-regular underline" bis_skin_checked="1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"> <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/> 
                </svg>Live Preview</div></a><a href="https://github.com/YoussefAshraf001/Online-Library-Management-System" target="_blank">
                <div class="flex items-center gap-1 text-base  font-regular underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>View Code</div></a></div></div>
              </div>
              


            {/* THIRD PROJECT */}
            <div className="basis-1/4 flex-1 min-h-[570px] overflow-hidden rounded-2xl shadow-2xl flex flex-col justify-between w-full bg-white hover:scale-125 transition-all duration-500">
              <img src="web3.png" className="object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              <div class="flex flex-col justify-between items-start flex-1 p-[20px]">
                <h1 class="mb-4 font-medium text-start text-xl md:text-2xl">The Valley of Fear</h1>
                <p class="flex-1 mb-3 text-black text-start font-light text-md md:text-lg">This is a minor project showcasing one of my favorite novels, The Valley of Fear. is the fourth and final Sherlock Holmes novel by British writer Arthur Conan Doyle featuring the detective Sherlock Holmes published on February 27, 1915.
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
              

            </div>
        </section>

                                                                                            {/* CONTACT US */}
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

        <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center"><a href="mailto:Kingjo777ashraf@gmail.com" target="_blank"><div class="flex items-center gap-1 text-base  font-regular underline" bis_skin_checked="1">
        <svg className="dark:invert" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z"/> </g> </svg>
          Kingjo777ashraf@gmail.com
        </div></a></div>

      <div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center"><a href="https://www.instagram.com/thekilleralpha/" target="_blank"><div class="flex items-center gap-1 text-base  font-regular underline" bis_skin_checked="1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>
        @thekilleralpha
      </div></a></div>
      <br></br>
      <br></br>
      </div>
      </main>
    </div>
  );
}
