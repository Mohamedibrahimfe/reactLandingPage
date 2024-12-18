import { HiMiniRocketLaunch } from "react-icons/hi2";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Master Your Skills with Curated Developer Tools
          </h1>
        </motion.header>
        <motion.header
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
        >
          <p className="text-lg text-gray-300 mb-8">
            Discover resources, tutorials, and tools to boost your productivity.
          </p>
        </motion.header>
        <motion.header
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 5, delay: 0.5 }}
        >
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 lg:px-6 py-2 md:py-2 lg:py-3  flex items-center hover:shadow-lg transition duration-300 ease-in-out hover:scale-90"
          >
            Explore Tools
            <HiMiniRocketLaunch
              style={{ display: "inline", marginLeft: "4px" }}
            />
          </a>
        </motion.header>
      </div>
    </section>
  );
}
