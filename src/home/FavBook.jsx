// import React from 'react'
// import { Link } from 'react-router-dom'
// import FavBookImg from "../assets/favoritebook.jpg"
// const FavBook = () => { 
//   return (
//     <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
//         <div className='md:w-1/2'>
//         <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
//         </div>
//         <div className='md:w-1/2 space-y-6'>
//             <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your favourite <span className='text-blue-700'>Book Here</span></h2>
//             <p className='mb-10 text-lg md:w-5/6'>
//             Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Assumenda molestiae 
//             beatae sint quod asperiores, in corporis, 
//             voluptate quidem voluptates impedit aut
//             laudantium sunt, qui est odit vitae
//             modi iure. Rerum!
//             </p>
//             <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
//                 <div>
//                     <h3 className='text-3xl font-bold '>800+</h3>
//                     <p className='text-base'>Book Listing</p>
//                 </div>
//                 <div>
//                     <h3 className='text-3xl font-bold '>550+</h3>
//                     <p className='text-base'>Book Listing</p>
//                 </div>
//                 <div>
//                     <h3 className='text-3xl font-bold '>1200+</h3>
//                     <p className='text-base'>PDF downloades</p>
//                 </div>
                
//             </div>

//             <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
//         </div>
//     </div>
//   )
// }
// export default FavBook



import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FavBookImg from "../assets/favoritebook.jpg";

const FavBook = () => {
  return (
    <section className="px-6 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 overflow-hidden">
      {/* Left Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.img
          src={FavBookImg}
          alt="A collection of favorite books"
          className="rounded-xl shadow-2xl md:w-10/12 object-cover hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Right Content Section */}
      <motion.div
        className="md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Find your favourite <span className="text-blue-700">Book Here</span>
        </h2>

        <p className="text-gray-700 text-lg md:w-5/6 mx-auto md:mx-0">
          Explore thousands of books across all genres — discover new favorites,
          read reviews, and download eBooks instantly. Join our growing
          community of readers today.
        </p>

        {/* Stats Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between gap-8 md:w-3/4 mx-auto md:mx-0 my-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {[
            { number: "800+", label: "Books Listed" },
            { number: "550+", label: "Active Readers" },
            { number: "1200+", label: "PDF Downloads" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center md:text-left"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-3xl font-bold text-blue-700">{stat.number}</h3>
              <p className="text-gray-600 text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/shop">
            <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FavBook;
