"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/app/components/ui/Modal";
import Link from "next/link";
import { skills } from "../..";
import CTA from "../../components/CTA";
import AnimationOnBtn from "@/app/components/icons/animationonBtn";
import Github from "@/app/components/icons/github";
import Express from "@/app/components/icons/express";



const About=(): JSX.Element =>{
  const [isAnimationPaused, setAnimationPaused] = useState(true);
  const [showFullLetter, setShowFullLetter] = useState(false);

  const toggleShowFullLetter = () => {
    setShowFullLetter(!showFullLetter);
  };

  const toggleAnimation = () => {
    setAnimationPaused((prevState) => !prevState);
  };

  const sscExam = {
    year: 2021,
    board: "Board of Secondary Education",
    result: "GPA 5.00",
  };
  const hscExam = {
    year: 2023,
    board: "Board of Intermediate and Secondary Education",
    result: "GPA 3.92",
  };
  const school = "Chittagong Govt. model school and college";
  const college = "Chittagong Govt. model school and college";
  const versity = "International Islamic University Chittagong";
  const certificates = ["no certificate is viewing for now"];

  return (
    <>
      <section className="max-container" id="about">
        <div className="relative">
          <button
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow animate-dancing-border z-20"
            onClick={toggleAnimation}
          >
            <AnimationOnBtn isAnimationPaused={isAnimationPaused} />
          </button>
        </div>

        <div
          className={`relative md:shadow-inner-box rounded-md  sm:bg-slate-100/50 dark:sm:bg-slate-300/10 ${
            isAnimationPaused ? "" : "animate-waving"
          } `}
        >
          <div className="grid grid-cols-3 items-center  py-10   ">
            <div className="col-span-3 sm:col-span-2 mx-auto text-center">
              <h1 className="text-4xl md:text-6xl text-green-900 dark:text-green-600/80 font-bold mb-4">
                Assalamualaikum, I&apos;m
                <span className="text-green-600 ml-2">Wasih</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                Junior Full Stack Web Developer from Bangladesh. Passionate
                about creating beautiful and functional websites. Experienced in
                React, JavaScript, TypeScript, and Express.js. My portfolio
                showcases my projects. Let&apos;s explore together!
              </p>
            </div>

            <div className="flex justify-center sm:col-span-1 col-span-3 my-3">
              <Image
                src="/wasih.jpeg"
                className={`w-64 md:w-80 rounded-full object-cover border-4 border-green-900 ${
                  isAnimationPaused ? "" : "animate-waving"
                }`}
                alt="Wasih"
                width={320} // Adjust according to your requirements
                height={320} // Adjust according to your requirements
              />
            </div>
          </div>
          <div
            className={`absolute inset-0 ${
              isAnimationPaused ? "" : "animate-dancing-border"
            } `}
          ></div>
          <style>
            {`
    @keyframes waving {
      0% {
        width: 100%;
        border-radius: 92% 40% 65% 85%/60% 30% 67% 66%;
      }
      25% {
        width: 75%;
        border-radius: 92% 40% 65% 85%/60% 30% 67% 66%;
      }
      50% {
        width: 50%;
        border-radius: 30% 51% 94% 67%/90% 60% 74% 60%;
      }
      75% {
        width: 75%;
        border-radius: 60% 40% 30% 38%/49% 54% 83% 56%;
      }
      100% {
        width: 100%;
        border-radius: 92% 40% 65% 85%/60% 30% 67% 66%;
      }
    }
    @keyframes dancing-border {
      0% {
        border-color: transparent;
      }
      25% {
        border-color: #f6ad55;
      }
      50% {
        border-color: #38a169;
      }
      75% {
        border-color: #3182ce;
      }
      100% {
        border-color: #9f7aea;
      }
    }
    .animate-waving {
      animation-name: waving;
      animation-duration: 10s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      overflow: hidden;
    }
    .animate-dancing-border {
      animation-name: dancing-border;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      position: absolute;
      border: 4px solid;
      border-radius: inherit;
    }
    @media (max-width: 640px) {
      .animate-waving {
        animation-name: none;
      }
  `}
          </style>
        </div>

        <div className="sm:py-10 flex flex-col">
          <h3 className="subhead-text text-center text-2xl md:text-3xl font-bold text-green-900 dark:text-green-600 mb-5">
            My Skills
          </h3>
          <div className="mt-5 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-12 items-center">
            {skills.map((s) => (
              <div key={s.name} className="w-18 sm:w-32 flex justify-center">
                <Modal>
                  <Modal.Open opens={s.name}>
                    <div title={s.type}>
                      {s.name === "GitHub" || s.name === "Express" ? (
                        s.name === "GitHub" ? (
                          <Github className=" w-12 h-auto" />
                        ) : (
                          <Express />
                        )
                      ) : (
                        <Image
                          src={s.imageUrl}
                          className="w-full h-auto object-contain"
                          alt={s.name}
                        />
                      )}
                    </div>
                  </Modal.Open>
                  <Modal.Window name={s.name}>
                    <div className="p-4 text-green-900 text-center z-10 w-[90vw]">
                      <p className="text-lg font-bold mb-2">{s.name}</p>
                      <p className="text-sm">{s.description}</p>
                    </div>
                  </Modal.Window>
                </Modal>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:mt-0 mt-5 items-start">
          <div className="max-w-lg mx-auto bg-white dark:bg-slate-300/10 shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Education</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Secondary Education</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  SSC Exam ({sscExam.year})
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Board: {sscExam.board}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Result: {sscExam.result}
                </p>
                <p className="text-slate-600 dark:text-slate-400">{school}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Higher Education</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  HSC Exam ({hscExam.year})
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Board: {hscExam.board}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Result: {hscExam.result}
                </p>
                <p className="text-slate-600 dark:text-slate-400">{college}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Bachelor&apos;s Degree</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  B.Sc. in Computer Science & Engineering (CSE)
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Result: still studying
                </p>
                <p className="text-slate-600 dark:text-slate-400">{versity}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Certificates</h3>
                <ul className="list-disc ml-6">
                  {certificates.map((certificate, index) => (
                    <li
                      key={index}
                      className="text-slate-600 dark:text-slate-400"
                    >
                      {certificate}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:py-10 py-5">
            <div className="mt-3 flex flex-col gap-3 text-slate-500">
              <div className="bg-green-950/80 dark:bg-green-950/10 dark:border dark:border-green-50/30  min-h-screen flex justify-center items-center">
                <div className="max-w-4xl text-center text-white p-8">
                  <h1 className="text-5xl font-bold mb-8">
                    JUNIOR FULL STACK WEB DEVELOPER
                  </h1>
                  <h2 className="text-3xl font-medium mb-4">FROM BANGLADESH</h2>
                  {showFullLetter ? (
                    <>
                      <p className="text-lg">Passionate. Creative. Skilled.</p>
                      <p className="text-lg mt-8">Welcome to my portfolio!</p>
                      <p className="text-lg">
                        I am a Junior Full Stack Web Developer from Bangladesh,
                        dedicated to crafting stunning and functional websites.
                      </p>
                      <p className="text-lg">
                        With expertise in React, JavaScript, TypeScript, and
                        Express.js, I bring ideas to life and deliver
                        exceptional user experiences.
                      </p>
                      <p className="text-lg mt-8">
                        From captivating front-end interfaces to robust back-end
                        functionalities, I create seamless web solutions that
                        leave a lasting impression.
                      </p>
                      <p className="text-lg mt-8">
                        My portfolio showcases a collection of projects, each
                        meticulously designed and coded by me.
                      </p>
                      <p className="text-lg mt-8">
                        Join me on this exciting journey as I continue to push
                        boundaries, solve complex problems, and make the web a
                        more beautiful and functional place.
                      </p>
                      <p className="text-lg mt-8">
                        Let&apos;s create something extraordinary together!
                      </p>
                      <span
                        className="text-blue-500 underline"
                        onClick={toggleShowFullLetter}
                      >
                        show less
                      </span>
                    </>
                  ) : (
                    <p className="text-lg">
                      I am a Junior Full Stack Web Developer from Bangladesh,
                      dedicated to crafting stunning and functional websites.{" "}
                      <button
                        className="text-blue-500 underline"
                        onClick={toggleShowFullLetter}
                      >
                        Read More
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:py-16 py-10">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-3 flex flex-col gap-3 text-slate-500 dark:text-slate-400">
            <p className="text-xs sm:text-base">
              When it comes to my experience, I have had the opportunity to work
              on numerous projects independently. Each project has been a
              valuable learning experience and has allowed me to hone my skills
              as a developer.
              <br />
              <br />
              From crafting visually captivating user interfaces to implementing
              complex functionalities, I have taken on diverse challenges in my
              journey. I have leveraged my expertise in technologies such as
              React, JavaScript, and Express.js to bring these projects to life.
              <br />
              <br />
              You can explore some of my notable projects by visiting the&nbsp;
              <Link href={"/projects"} className={"text-green-600"}>
                Projects
              </Link>
              &nbsp;section of my portfolio. Each project showcases my
              dedication to creating innovative solutions and delivering
              exceptional results.
            </p>
          </div>
        </div>

        <hr className=" border-slate-200" />
        <CTA />
      </section>
    </>
  );
}


export default About