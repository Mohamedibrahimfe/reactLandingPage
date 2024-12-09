import { useState, useEffect } from "react";
import { LuSunMedium } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <button
      onClick={toggleDarkMode}
      className="p-4 bg-gray-200 dark:bg-gray-800 dark:text-white cursor-pointer"
    >
      {darkMode ? <FaMoon /> : <LuSunMedium />}
    </button>
  );
};

export default DarkModeToggle;
