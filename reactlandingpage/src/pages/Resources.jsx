import { AiFillFormatPainter } from "react-icons/ai";
import { IoServer } from "react-icons/io5";
import { PiInfinityBold } from "react-icons/pi";
import { CiCloudOn } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Resources() {
  return (
    <div className="text-center mx-auto max-w-screen-xl w-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl py-6 font-bold">
          Tutorials & Resources for Developers
        </h1>
        <p className="text-2xl text-gray-600 tracking-widest">
          Stay ahead with the best resources to enhance your skills.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mx-auto py-12 px-2 w-full">
        <div className="felx flex-col">
          <div className="m-2 mb-4 bg-white p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer">
            <AiFillFormatPainter className="text-6xl text-blue-600" />
            <h1 className="text-2xl font-bold py-2">Frontend Development</h1>
            <p className="text-gray-600">
              A short description of what the resource offers or how it helps.
            </p>
            <a className="flex items-center w-full justify-between px-6 ">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 ">
                Explore More
              </button>
              <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 " />
            </a>
          </div>
          <div className="m-2 bg-white p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer">
            <IoServer className="text-6xl text-blue-600" />
            <h1 className="text-2xl font-bold py-2">Backend Development</h1>
            <p className="text-gray-600">
              A short description of what the resource offers or how it helps.
            </p>
            <a className="flex items-center w-full justify-between px-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 ">
                Explore More
              </button>
              <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 " />
            </a>
          </div>
        </div>
        <div className="flex flex-col " style={{ marginTop: "64px" }}>
          <div className="m-2 bg-white p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
            <PiInfinityBold className="text-6xl text-blue-600" />
            <h1 className="text-2xl font-bold py-2">DevOps Development</h1>
            <p className="text-gray-600">
              A short description of what the resource offers or how it helps.
            </p>
            <a className="flex items-center w-full justify-between px-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 md:w-3/4 lg:w-1/3 ">
                Explore More
              </button>
              <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 " />
            </a>
          </div>
          <div className="m-2 bg-white p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer group">
            <CiCloudOn className="text-6xl text-blue-600" />
            <h1 className="text-2xl font-bold py-2">Cloud Development</h1>
            <p className="text-gray-600">
              A short description of what the resource offers or how it helps.
            </p>
            <a className="flex items-center w-full justify-between px-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  md:w-3/4 lg:w-1/3 ">
                Explore More
              </button>
              <FaLongArrowAltRight className="text-2xl text-gray-600 group-hover:translate-x-2 duration-75 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
