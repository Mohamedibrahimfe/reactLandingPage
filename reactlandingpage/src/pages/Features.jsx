import React from "react";
import { RiLayout4Fill } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Features() {
  return (
    <section className="text-center">
      <h1 className="text-5xl py-6 font-bold">Why Choose SkillSyncx</h1>
      <p className="text-2xl text-gray-600">
        Tools, tutorials, and community to help you grow as a developer.
      </p>
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto py-12 px-2">
        <div className="bg-white p-6  shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer">
          <RiLayout4Fill className="text-6xl mb-4 text-blue-600" />

          <h1 className="text-xl font-semibold mb-2">Curated Tools</h1>
          <p className="tracking-widest	">
            Discover the most essential tools every developer should use. From
            code editors to deployment platforms, SkillSync curates the best.
          </p>
        </div>
        <div className="bg-white p-6  shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer">
          <GiOpenBook className="text-6xl mb-4 text-blue-600" />

          <h1 className="text-xl font-semibold mb-2">Expert Tutorials</h1>
          <p className="tracking-widest	">
            Access tutorials created by industry experts. Whether you’re a
            beginner or advanced, our guides cover all levels of expertise.
          </p>
        </div>
        <div className="bg-white p-6  shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer">
          <FaPeopleGroup className="text-6xl mb-4 text-blue-600" />

          <h1 className="text-xl font-semibold mb-2">Community Support</h1>
          <p className="tracking-widest	">
            Join a growing community of developers. Ask questions, share
            knowledge, and get advice from experts and peers.
          </p>
        </div>
      </div>
    </section>
  );
}
