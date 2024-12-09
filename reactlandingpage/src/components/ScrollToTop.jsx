import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isInTop, setIsInTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsInTop(false);
      } else {
        setIsInTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <FaArrowUp
      onClick={() => window.scrollTo(0, 0)}
      className={`fixed bottom-4 right-4 z-50 bg-gray-700 text-white w-12 h-12 p-2 rounded-full cursor-pointer ${
        isInTop ? "hidden" : "block"
      }`}
    />
  );
}
