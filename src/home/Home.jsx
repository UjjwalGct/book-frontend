import React from 'react'
import Banner from '../components/Banner'
import BestSeLLerBooks from './BestSeLLerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import Contact from './Contact'

const home = () => {
  return (
    <div>
      <Banner/>
      <BestSeLLerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      <Contact/>

    </div>
  )
}
export default home


// import React, { useState, useEffect } from "react";
// import Banner from "../components/Banner";
// import BestSeLLerBooks from "./BestSeLLerBooks";
// import FavBook from "./FavBook";
// import PromoBanner from "./PromoBanner";
// import OtherBooks from "./OtherBooks";
// import Review from "./Review";

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);

//   // ✅ Fetch all books from backend when page loads
//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("http://localhost:5001/all-books");
//       const data = await res.json();
//       setBooks(data);
//       setFilteredBooks(data);
//     } catch (err) {
//       console.error("Error fetching books:", err);
//     }
//   };

//   // ✅ Handle search from Banner component
//   const handleSearch = async (query) => {
//     if (!query) {
//       setFilteredBooks(books);
//       return;
//     }

//     try {
//       const res = await fetch(
//         `http://localhost:5001/all-books?search=${encodeURIComponent(query)}`
//       );
//       const data = await res.json();
//       setFilteredBooks(data);
//     } catch (err) {
//       console.error("Error searching books:", err);
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Banner with search functionality */}
//       <Banner onSearch={handleSearch} />

//       {/* Book sections */}
//       <div className="px-6 lg:px-24 space-y-24">
//         <BestSeLLerBooks />
//         <FavBook />
//         <PromoBanner />
//         {/* ✅ Pass filtered books to OtherBooks */}
//         <OtherBooks books={filteredBooks} />
//         <Review />
//       </div>
//     </div>
//   );
// };

// export default Home;
