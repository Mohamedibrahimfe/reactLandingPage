import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import image1 from "../assets/01.jpg";
import image2 from "../assets/02.jpg";
import image3 from "..//assets/03.jpg";

import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <section
      className="py-16 bg-gray-50 dark:bg-slate-600	dark:text-gray-900 px-2 md:px-0"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          What Our Users Say
        </h2>
        <p className="text-2xl text-gray-600 tracking-widest dark:text-gray-900 dark:font-semibold m-2 ">
          See how SkillSync is helping developers enhance their skills and
          achieve success.
        </p>
        <motion.dev
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            spaceBetween={30} // Space between slides
            centeredSlides={true} // Center the active slide
            autoplay={{
              delay: 3000, // Slide change every 3 seconds
              disableOnInteraction: false, // Keep autoplay when interacting
            }}
            loop={true} // Infinite loop of slides
            pagination={{
              clickable: true, // Enable pagination controls
            }}
            navigation={true} // Enable prev/next buttons
            modules={[Navigation, Autoplay]} // Add Autoplay and Navigation modules to Swiper
            className="mt-8 hover:shadow-xl transition-shadow cursor-pointer "
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-800 dark:text-gray-50">
                <p className="text-xl text-gray-600 italic dark:text-gray-50 ">
                  &quot;SkillSync has revolutionized how I approach learning new
                  tools. The tutorials are well-structured, and the community
                  support is invaluable!&quot;
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <img
                    src={image1}
                    alt="User 1"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Alex Johnson</p>
                    <p className="text-sm text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-800 dark:text-gray-50">
                <p className="text-xl text-gray-600 italic dark:text-gray-50">
                  &quot;The curated tools and resources have drastically
                  improved my workflow. I highly recommend SkillSync to all
                  developers! &quot;
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <img
                    src={image2}
                    alt="User 2"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Lee</p>
                    <p className="text-sm text-gray-500">
                      Full-stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Testimonial 3 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-800 dark:text-gray-50">
                <p className="text-xl text-gray-600 italic dark:text-gray-50">
                  &quot;I’ve learned so much from the tutorials here. SkillSync
                  is the perfect platform for any developer looking to stay
                  ahead of the curve! &quot;
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <img
                    src={image3}
                    alt="User 3"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">John Doe</p>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.dev>
      </div>
    </section>
  );
};

export default Testimonials;
