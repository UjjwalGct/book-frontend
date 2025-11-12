


import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-backend-jade.vercel.app/all-books")
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 8)))
      .catch(err => console.error("Error fetching books:", err)); // optional error handling
  }, []);

  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;








// import React from "react";

// const OtherBooks = ({ books = [] }) => {
//   return (
//     <div>
//       <h2 className="text-3xl font-bold text-center mb-6">Explore Other Books</h2>
//       {books.length > 0 ? (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {books.map((book) => (
//             <div
//               key={book._id}
//               className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-all duration-200"
//             >
//               <img
//                 src={book.image || "/default-book.jpg"}
//                 alt={book.title}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//               <h3 className="text-lg font-semibold mt-3">{book.title}</h3>
//               <p className="text-sm text-gray-600">{book.author}</p>
//               <p className="text-blue-700 font-bold mt-1">₹{book.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No books found.</p>
//       )}
//     </div>
//   );
// };

// export default OtherBooks;
