import { FaCode } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null, // Observing relative to the viewport
      rootMargin: "0px", // No margin
      threshold: 0.2, // 20% of the section should be visible
    };

    const observer = new IntersectionObserver((entries) => {
      if (window.scrollY === 0) setActiveSection("home");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:mx-10 lg:mx-auto">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse md:hidden lg:flex "
        >
          <FaCode className="text-4xl text-blue-600" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SkillSync
          </span>
        </a>

        <div className="flex md:order-2  space-x-3 rtl:space-x-reverse items-center">
          <div className="mx-4">
            <DarkModeToggle />
          </div>
          <a
            href="#pricing"
            className="bg-blue-500 hover:bg-blue-600 text-white   px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 hidden lg:flex hover:shadow-lg transition duration-300 ease-in-out hover:scale-90"
          >
            Get started
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto  md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              "home",
              "features",
              "resources",
              "testimonials",
              "pricing",
              "contact",
            ].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block py-2 pl-3 pr-4 text-gray-700 rounded md:p-0 md:hover:text-blue-600 md:dark:hover:text-blue-500 ${
                    activeSection === id
                      ? "font-semibold text-blue-600 dark:text-blue-500 active"
                      : "dark:text-white"
                  }`}
                  onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
