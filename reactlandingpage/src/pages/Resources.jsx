import { AiFillFormatPainter } from "react-icons/ai";
import { IoServer } from "react-icons/io5";
import { PiInfinityBold } from "react-icons/pi";

export default function Resources() {
  return (
    <div className="bg-gray-50 mx-auto py-12 text-center">
      <h1 className="text-5xl py-6 font-bold">
        Tutorials & Resources for Developers
      </h1>
      <p className="text-2xl text-gray-600">
        Stay ahead with the best resources to enhance your skills.
      </p>
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto py-12 px-2">
        <div className="m-2 bg-white p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer">
          <AiFillFormatPainter className="text-6xl text-blue-600" />
          <h1 className="text-2xl font-bold py-2">Frontend Development</h1>
          <p className="text-gray-600">
            A short description of what the resource offers or how it helps.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 w-full md:w-3/4 lg:w-1/2 rounded-lg">
            Explore More
          </button>
        </div>
        <div className="m-2 bg-white p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer">
          <IoServer className="text-6xl text-blue-600" />
          <h1 className="text-2xl font-bold py-2">Backend Development</h1>
          <p className="text-gray-600">
            A short description of what the resource offers or how it helps.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 w-full md:w-3/4 lg:w-1/2 rounded-lg">
            Explore More
          </button>
        </div>
        <div className="m-2 bg-white p-6 shadow-lg flex flex-col gap-3 items-center hover:shadow-xl transition-shadow cursor-pointer">
          <PiInfinityBold className="text-6xl text-blue-600" />
          <h1 className="text-2xl font-bold py-2">DevOps Development</h1>
          <p className="text-gray-600">
            A short description of what the resource offers or how it helps.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 w-full md:w-3/4 lg:w-1/2 rounded-lg">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
