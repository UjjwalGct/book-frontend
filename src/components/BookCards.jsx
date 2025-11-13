
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";

const BookCards = ({ headline, books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
  });
  const [errors, setErrors] = useState({});

  const handleBuyClick = (book) => {
    setSelectedBook(book);
    setFormData({ name: "", email: "", phone: "", address: "", quantity: 1 });
    setErrors({});
  };

  const closePanel = () => {
    setSelectedBook(null);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Full name is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email";

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile validation
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";

    // Address validation
    if (!formData.address.trim()) newErrors.address = "Address is required";

    // Quantity validation
    if (formData.quantity < 1)
      newErrors.quantity = "Quantity must be at least 1";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    alert(
      `✅ Thank you, ${formData.name}! Your order for "${selectedBook.bookTitle}" has been placed successfully.`
    );
    closePanel();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    // <div className="my-16 px-4 lg:px-24">
    //   <h2 className="text-4xl text-center font-bold text-gray-800 my-8">
    //     {headline}
    //   </h2>

    //   {/* Book Slider Section */}
    //   {!selectedBook && (
    //     <Swiper
    //       slidesPerView={1}
    //       spaceBetween={10}
    //       pagination={{ clickable: true }}
    //       breakpoints={{
    //         640: { slidesPerView: 2, spaceBetween: 20 },
    //         768: { slidesPerView: 3, spaceBetween: 30 },
    //         1024: { slidesPerView: 5, spaceBetween: 40 },
    //       }}
    //       modules={[Pagination]}
    //       className="mySwiper"
    //     >
    //       {books.map((book) => (
    //         <SwiperSlide key={book._id}>
    //           <motion.div
    //             whileHover={{ scale: 1.05 }}
    //             transition={{ duration: 0.3 }}
    //             className="relative bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer"
    //             onClick={() => handleBuyClick(book)}
    //           >
    //             <img
    //               src={book.imageURL}
    //               alt={book.bookTitle}
    //               className="w-full h-60 object-cover"
    //             />
    //             <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded-full transition">
    //               <FaCartShopping className="w-4 h-4 text-white" />
    //             </div>
    //             <div className="p-4">
    //               <h3 className="font-semibold text-lg text-gray-800 truncate">
    //                 {book.bookTitle}
    //               </h3>
    //               <p className="text-sm text-gray-500 mb-1 truncate">
    //                 {book.authorName}
    //               </p>
    //               <p className="font-bold text-blue-600">$10.00</p>
    //             </div>
    //           </motion.div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   )}

    //   {/* Split View - Selected Book + Form */}
    //   {selectedBook && (
    //     <motion.div
    //       initial={{ opacity: 0, x: 30 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       className="flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-2xl shadow-xl mt-8"
    //     >
    //       {/* Left Side: Book Info */}
    //       <div className="flex-1 flex flex-col items-center text-center">
    //         <img
    //           src={selectedBook.imageURL}
    //           alt={selectedBook.bookTitle}
    //           className="w-60 h-80 object-cover rounded-xl shadow-md mb-4"
    //         />
    //         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
    //           {selectedBook.bookTitle}
    //         </h2>
    //         <p className="text-gray-600 mb-1">
    //           ✍️ {selectedBook.authorName || "Unknown Author"}
    //         </p>
    //         <p className="text-blue-600 font-bold text-xl mb-4">$10.00</p>
    //         <p className="text-gray-500 text-sm leading-relaxed max-w-md">
    //           {selectedBook.description ||
    //             "A fascinating book full of insights and knowledge. Perfect for readers of all ages!"}
    //         </p>
    //       </div>

    //       {/* Right Side: Buy Form with Validation */}
    //       <div className="flex-1">
    //         <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
    //           🛒 Complete Your Purchase
    //         </h3>
    //         <form onSubmit={handleSubmit} className="space-y-4">
    //           {/* Name */}
    //           <div>
    //             <input
    //               type="text"
    //               name="name"
    //               placeholder="Full Name"
    //               value={formData.name}
    //               onChange={handleChange}
    //               className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
    //                 errors.name ? "border-red-500" : "border-gray-300"
    //               } focus:ring-blue-500`}
    //             />
    //             {errors.name && (
    //               <p className="text-red-500 text-sm mt-1">{errors.name}</p>
    //             )}
    //           </div>

    //           {/* Email */}
    //           <div>
    //             <input
    //               type="email"
    //               name="email"
    //               placeholder="Email Address"
    //               value={formData.email}
    //               onChange={handleChange}
    //               className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
    //                 errors.email ? "border-red-500" : "border-gray-300"
    //               } focus:ring-blue-500`}
    //             />
    //             {errors.email && (
    //               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
    //             )}
    //           </div>

    //           {/* Phone */}
    //           <div>
    //             <input
    //               type="text"
    //               name="phone"
    //               placeholder="Phone Number"
    //               value={formData.phone}
    //               onChange={handleChange}
    //               className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
    //                 errors.phone ? "border-red-500" : "border-gray-300"
    //               } focus:ring-blue-500`}
    //             />
    //             {errors.phone && (
    //               <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
    //             )}
    //           </div>

    //           {/* Address */}
    //           <div>
    //             <textarea
    //               name="address"
    //               placeholder="Full Address"
    //               value={formData.address}
    //               onChange={handleChange}
    //               className={`w-full border rounded-lg px-3 py-2 h-24 focus:ring-2 ${
    //                 errors.address ? "border-red-500" : "border-gray-300"
    //               } focus:ring-blue-500`}
    //             />
    //             {errors.address && (
    //               <p className="text-red-500 text-sm mt-1">{errors.address}</p>
    //             )}
    //           </div>

    //           {/* Quantity */}
    //           <div>
    //             <input
    //               type="number"
    //               name="quantity"
    //               min="1"
    //               value={formData.quantity}
    //               onChange={handleChange}
    //               className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
    //                 errors.quantity ? "border-red-500" : "border-gray-300"
    //               } focus:ring-blue-500`}
    //             />
    //             {errors.quantity && (
    //               <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
    //             )}
    //           </div>

    //           {/* Buttons */}
    //           <div className="space-y-3">
    //             <button
    //               type="submit"
    //               className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
    //             >
    //               Buy Now
    //             </button>
    //             <button
    //               type="button"
    //               onClick={closePanel}
    //               className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition"
    //             >
    //               Cancel
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </motion.div>
    //   )}
    // </div>

//pasete 

<div className="my-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 my-8">
        {headline}
      </h2>

      {/* Book Slider Section */}
      {!selectedBook && (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 25 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer"
                onClick={() => handleBuyClick(book)}
              >
                {/* ✅ Fixed uniform book image box */}
                <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={book.imageURL}
                    alt={book.bookTitle}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded-full transition">
                  <FaCartShopping className="w-4 h-4 text-white" />
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800 truncate">
                    {book.bookTitle}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1 truncate">
                    {book.authorName}
                  </p>
                  <p className="font-bold text-blue-600">$10.00</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Split View - Selected Book + Form */}
      {selectedBook && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col lg:flex-row gap-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl mt-8"
        >
          {/* Left Side: Book Info */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-64 sm:w-72 md:w-80 aspect-[3/4] bg-gray-100 overflow-hidden rounded-xl shadow-md mb-4">
              <img
                src={selectedBook.imageURL}
                alt={selectedBook.bookTitle}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              {selectedBook.bookTitle}
            </h2>
            <p className="text-gray-600 mb-1">
              ✍️ {selectedBook.authorName || "Unknown Author"}
            </p>
            <p className="text-blue-600 font-bold text-lg sm:text-xl mb-4">
              $10.00
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              {selectedBook.description ||
                "A fascinating book full of insights and knowledge. Perfect for readers of all ages!"}
            </p>
          </div>

          {/* Right Side: Buy Form */}
          <div className="flex-1 w-full">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
              🛒 Complete Your Purchase
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inputs */}
              {[
                { name: "name", type: "text", placeholder: "Full Name" },
                { name: "email", type: "email", placeholder: "Email Address" },
                { name: "phone", type: "text", placeholder: "Phone Number" },
              ].map((field) => (
                <div key={field.name}>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
                      errors[field.name]
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-blue-500 text-sm sm:text-base`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Address */}
              <div>
                <textarea
                  name="address"
                  placeholder="Full Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-3 py-2 h-24 focus:ring-2 ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } focus:ring-blue-500 text-sm sm:text-base`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
                    errors.quantity ? "border-red-500" : "border-gray-300"
                  } focus:ring-blue-500 text-sm sm:text-base`}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.quantity}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  onClick={closePanel}
                  className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BookCards;



