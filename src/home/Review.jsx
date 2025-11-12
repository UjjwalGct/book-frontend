

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import { motion } from "framer-motion";

// Sample profile images (replace with your assets if needed)
import propic1 from "../assets/profilepic1.jpeg";
import propic2 from "../assets/profilepic2.jpeg";
import propic3 from "../assets/profilepic3.jpeg";
import propic4 from "../assets/profile.jpg";

const reviews = [
  {
    name: "Aarav Mehta",
    role: "Software Engineer, TCS",
    image: propic1,
    rating: 5,
    text: "Amazing platform! Buying old books was never this easy. The user interface is super clean and smooth.",
  },
  {
    name: "Priya Sharma",
    role: "MBA Student, Delhi University",
    image: propic2,
    rating: 4,
    text: "I sold my unused books in just 2 days! The process was simple, and the customer service was excellent.",
  },
  {
    name: "Rohan Gupta",
    role: "Freelancer & Book Lover",
    image: propic3,
    rating: 5,
    text: "I absolutely love how the app connects book buyers and sellers. Plus, the UI is visually beautiful!",
  },
  {
    name: "Sneha Iyer",
    role: "Teacher, Bangalore",
    image: propic4,
    rating: 5,
    text: "Superb experience! I ordered 3 books, and all arrived in perfect condition. Great job team!",
  },
];

const Review = () => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        ❤️ Our Happy Customers
      </motion.h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white shadow-lg border rounded-2xl p-6 md:m-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 text-amber-500 mb-4">
                {Array.from({ length: review.rating }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <FaStar className="drop-shadow-sm hover:text-amber-400" />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                “{review.text}”
              </p>

              {/* Profile Info */}
              <div className="flex items-center gap-4">
                <Avatar
                  img={review.image}
                  alt={review.name}
                  rounded
                  className="w-12 h-12 border-2 border-blue-400"
                />
                <div>
                  <h5 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h5>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
