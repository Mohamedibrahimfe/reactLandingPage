import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white  shadow dark:bg-gray-900 ">
      <div className="p-4 md:py-8 md:mx-20 lg:mx-[30%]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <FaCode className="text-4xl text-blue-600" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SkillSync
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-4 text-gray-500 sm:text-center dark:text-gray-400">
            <a
              href="https://github.com/Mohamedibrahimfe"
              className="hover:underline text-4xl hover:text-white hover:bg-black p-1 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-ibrahim-a41bab290/"
              className="hover:underline text-4xl hover:text-white hover:bg-black p-1 rounded-full"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://github.com/Mohamedibrahimfe"
            className="hover:underline text-xl text-blue-500"
          >
            Muhammad Ibrahim
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
