"use client";
import React, { useState } from "react";
import {
  PiBookOpenTextLight,
  PiGoogleLogoThin,
  PiTwitterLogoLight,
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
  PiGithubLogoLight
} from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { SiPearson } from "react-icons/si";
import { BiHealth } from "react-icons/bi";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Leftpage() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
  
    const controls = useAnimation();
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (isValidEmail(email)) {
        setEmail("");
      } else {
        controls.start({
          x: 0,
          transition: {
            type: "spring",
            velocity: "600",
            stiffness: "5000",
            damping: 15,
          },
        });
      }
    };
  
    return (
      <div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, type: "spring", stiffness: 200 },
          }}
          className=" hidden md:block bg-[#1C1C1C] w-full md:w-80  h-fit sticky top-5 "
        >
          <div className=" md:w-80 w-full p-3 border border-neutral-800   rounded-2xl h-full bg-[#1C1C1C]  ">
            <div className="flex">
              <div className="w-full relative">
                <Image
                  width={1000}
                  height={1000}
                  className="w-28 h-28 rounded-full object-cover"
                  src="/headshot.png"
                  alt=""
                />
                <div
                  
                />
                {open && (
                  <div className="border border-lime-400 h-5 flex items-center justify-center rounded-2xl w-fit px-2 absolute top-[4.7rem] right-3 ">
                    <p className="text-[9px] font-RubikMedium text-lime-300">
                      Open to freelancing
                    </p>
                  </div>
                )}
                <h1 className="font-RubikExtraBold text-xl  text-neutral-300 mt-3">
                  David Barron
                </h1>
                <p className="text-xs font-RubikMedium text-neutral-300 mt-2">
                  dbarron410@vt.edu 📧
                </p>
  
                <div className="flex w-full   ">
                  <div className="flex gap-x-1  text-xs my-4">
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                      Azure
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                      NextJS
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                      ReactJS
                    </p>
                    <p className=" bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold shrink-0 ">
                      Tailwind CSS
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                      Git
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="flex gap-x-1 w-full h-fit ml-4">
                <Link href="https://github.com/divadbaroon" target="_blank" rel="noopener noreferrer">
                  <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                    <PiGithubLogoLight className="text-neutral-100" />
                  </div>
                </Link>
  
              </div>
            </div>
  
            <form
              onSubmit={handleSubmit}
              className="bg-[#282828] p-1  rounded-md md:flex items-center  justify-between h-9 w-full hidden "
            >
              <input
                value={email}
                onChange={handleChange}
                className=" w-36 focus:outline-none bg-transparent text-neutral-400 text-xs placeholder:text-neutral-600 h-full pl-2 placeholder:text-xs placeholder:font-RubikMedium"
                placeholder="name@email.com"
                type="text"
              />
              <motion.button
                animate={controls}
                className="bg-[#696969] h-full p-1 rounded-md text-xs w-20 font-RubikMedium text-neutral-50"
              >
                Subscribe
              </motion.button>
            </form>
  
            <div className="w-full mt-5 text-neutral-300">
              <h2 className="font-RubikBold my-4">Bio</h2>
              <p className="text-[12px]  font-RubikRegular my-3 -mt-2">
                Passionate self-taught developer looking <br /> to apply my knowledge
                and expertise to <br /> real world projects to help make a difference.{" "}
              </p>
  
              <div className="mt-6 flex justify-between text-sm">
                <div className="flex items-center gap-x-1">
                  <PiShapesThin />
                  <span className="text-xs font-RubikRegular">
                    2.5 Years as a Developer
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <PiMagicWandThin />
                  <span className="text-xs font-RubikRegular">4 Projects</span>
                </div>
              </div>
  
              <div className="border border-[#282828] text-neutral-300 my-6" />
  
              <div className="my-4 ">
                <h1 className="font-RubikRegular">Work History</h1>
                <div className="mt-7 flex  justify-between">
                  <div className="flex gap-x-3">
                    <SiPearson className="text-xl" />
                    <div className="-mt-1">
                      <h3 className="text-sm font-RubikMedium">Cloud Engineer Intern</h3>
                      <p className="text-[9px]">Pearson</p>
                    </div>
                  </div>
                  <small className="text-[9px] text-neutral-300">
                    May 2023 - Aug 2023
                  </small>
                </div>
                <div className="my-3 flex  justify-between">
                  <div className="flex gap-x-3">
                    <BiHealth className="text-xl" />
                    <div className="-mt-1">
                      <h3 className="text-sm font-RubikMedium">
                        Information Security Intern
                      </h3>
                      <p className="text-[9px]">Premier Inc</p>
                    </div>
                  </div>
                  <small className="text-[9px] text-neutral-300">
                    May 2022 - Sep 2022
                  </small>
                </div>
                <div className="my-3 flex  justify-between">
                  <div className="flex gap-x-3">
                    <MdOutlineSecurity className="text-xl" />
                    <div className="-mt-1">
                      <h3 className="text-sm font-RubikMedium">
                        Cyber Security Intern
                      </h3>
                      <p className="text-[9px]">Truple Point Security</p>
                    </div>
                  </div>
                  <small className="text-[9px] text-neutral-300">
                    Feb 2022 - May 2022
                  </small>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  
  export default Leftpage;