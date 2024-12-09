import { AiFillFormatPainter } from "react-icons/ai";
import { IoServer } from "react-icons/io5";
import { PiInfinityBold } from "react-icons/pi";
import { CiCloudOn } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { GiVintageRobot } from "react-icons/gi";
import { HiTerminal } from "react-icons/hi";

import { motion } from "framer-motion";
export default function Resources() {
  return (
    <section
      className="text-center mx-auto max-w-screen-xl w-full dark:text-gray-50"
      id="resources"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl py-6 font-bold">
          Tutorials & Resources for Developers
        </h1>
        <p className="text-2xl text-gray-600 tracking-widest dark:text-gray-400">
          Stay ahead with the best resources to enhance your skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mx-auto py-12 px-2 w-full ">
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="felx flex-col">
            <div className="m-2 mb-4 bg-white dark:bg-slate-600	 dark:text-gray-50 p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
              <AiFillFormatPainter className="text-6xl text-blue-600 dark:text-gray-900" />
              <h1 className="text-2xl font-bold py-2 ">Frontend Development</h1>
              <p className="text-gray-600 dark:text-gray-50">
                A short description of what the resource offers or how it helps.
              </p>
              <a className="flex items-center w-full justify-between px-6 ">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 dark:bg-gray-900  dark:hover:bg-slate-500">
                  Explore More
                </button>
                <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 dark:text-gray-50" />
              </a>
            </div>

            <div className="m-2 mb-4 bg-white dark:bg-slate-600 dark:text-gray-50	 p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
              <IoServer className="text-6xl text-blue-600 dark:text-gray-900" />
              <h1 className="text-2xl font-bold py-2">Backend Development</h1>
              <p className="text-gray-600 dark:text-gray-50">
                A short description of what the resource offers or how it helps.
              </p>
              <a className="flex items-center w-full justify-between px-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 dark:bg-gray-900 dark:hover:bg-slate-500">
                  Explore More
                </button>
                <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 dark:text-gray-50" />
              </a>
            </div>

            <div className="m-2 mb-4 bg-white dark:bg-slate-600	dark:text-gray-50 p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
              <IoIosPhonePortrait className="text-6xl text-blue-600 dark:text-gray-900" />
              <h1 className="text-2xl font-bold py-2">Mobile Development</h1>
              <p className="text-gray-600 dark:text-gray-50">
                A short description of what the resource offers or how it helps.
              </p>
              <a className="flex items-center w-full justify-between px-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 dark:bg-gray-900 dark:hover:bg-slate-500">
                  Explore More
                </button>
                <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 dark:text-gray-50" />
              </a>
            </div>

            <div className="m-2 bg-white dark:bg-slate-600 dark:text-gray-50 p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
              <HiTerminal className="text-6xl text-blue-600 dark:text-gray-900" />
              <h1 className="text-2xl font-bold py-2">IT</h1>
              <p className="text-gray-600 dark:text-gray-50">
                A short description of what the resource offers or how it helps.
              </p>
              <a className="flex items-center w-full justify-between px-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 dark:bg-gray-900 dark:hover:bg-slate-500">
                  Explore More
                </button>
                <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 dark:text-gray-50" />
              </a>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col " style={{ marginTop: "64px" }}>
            <div className="m-2 bg-white dark:bg-slate-600	dark:text-gray-50 p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
              <PiInfinityBold className="text-6xl text-blue-600 dark:text-gray-900" />
              <h1 className="text-2xl font-bold py-2">DevOps Development</h1>
              <p className="text-gray-600 dark:text-gray-50">
                A short description of what the resource offers or how it helps.
              </p>
              <a className="flex items-center w-full justify-between px-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 md:w-3/4 lg:w-1/3 dark:bg-gray-900  dark:hover:bg-slate-500">
                  Explore More
                </button>
                <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 dark:text-gray-50" />
              </a>
            </div>
            <div className="m-2 bg-white dark:bg-slate-600	dark:text-gray-50 p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
              <CiCloudOn className="text-6xl text-blue-600 dark:text-gray-900" />
              <h1 className="text-2xl font-bold py-2">Cloud Development</h1>
              <p className="text-gray-600 dark:text-gray-50">
                A short description of what the resource offers or how it helps.
              </p>
              <a className="flex items-center w-full justify-between px-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 dark:bg-gray-900 dark:hover:bg-slate-500">
                  Explore More
                </button>
                <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 dark:text-gray-50" />
              </a>
            </div>
            <div className="m-2 bg-white dark:bg-slate-600	dark:text-gray-50 p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
              <GiVintageRobot className="text-6xl text-blue-600 dark:text-gray-900" />
              <h1 className="text-2xl font-bold py-2">AI</h1>
              <p className="text-gray-600 dark:text-gray-50">
                A short description of what the resource offers or how it helps.
              </p>
              <a className="flex items-center w-full justify-between px-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 dark:bg-gray-900 dark:hover:bg-slate-500">
                  Explore More
                </button>
                <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 dark:text-gray-50" />
              </a>
            </div>
            <div className="m-2 bg-white dark:bg-slate-600	dark:text-gray-50 p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
              <IoGameControllerOutline className="text-6xl text-blue-600 dark:text-gray-900" />
              <h1 className="text-2xl font-bold py-2">Game Development</h1>
              <p className="text-gray-600 dark:text-gray-50">
                A short description of what the resource offers or how it helps.
              </p>
              <a className="flex items-center w-full justify-between px-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 dark:bg-gray-900 dark:hover:bg-slate-500">
                  Explore More
                </button>
                <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 dark:text-gray-50" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
