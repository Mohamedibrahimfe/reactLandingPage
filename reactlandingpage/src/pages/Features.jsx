import { RiLayout4Fill } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="text-center dark:bg-gray-900" id="features">
      <h1 className="text-5xl py-6 font-bold dark:text-white">
        Why Choose SkillSyncx
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400">
        Tools, tutorials, and community to help you grow as a developer.
      </p>

      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto py-12 px-2">
        <motion.dev
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white dark:bg-slate-600	dark:text-gray-900 p-6  shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer">
            <RiLayout4Fill className="text-6xl mb-4 text-blue-600 dark:text-gray-900" />

            <h1 className="text-xl font-semibold mb-2">Curated Tools</h1>
            <p className="tracking-widest	">
              Discover the most essential tools every developer should use. From
              code editors to deployment platforms, SkillSync curates the best.
            </p>
          </div>
        </motion.dev>

        <div className="bg-white p-6 dark:bg-slate-600	dark:text-gray-900 shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer ">
          <GiOpenBook className="text-6xl mb-4 text-blue-600 dark:text-gray-900" />

          <h1 className="text-xl font-semibold mb-2">Expert Tutorials</h1>
          <p className="tracking-widest	">
            Access tutorials created by industry experts. Whether you’re a
            beginner or advanced, our guides cover all levels of expertise.
          </p>
        </div>
        <motion.dev
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-6 dark:bg-slate-600	dark:text-gray-900 shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer">
            <FaPeopleGroup className="text-6xl mb-4 text-blue-600 dark:text-gray-900" />

            <h1 className="text-xl font-semibold mb-2">Community Support</h1>
            <p className="tracking-widest	">
              Join a growing community of developers. Ask questions, share
              knowledge, and get advice from experts and peers.
            </p>
          </div>
        </motion.dev>
      </div>
    </section>
  );
}
