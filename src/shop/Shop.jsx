

// import React, { useEffect, useState, useContext } from "react";
// import { Card } from "flowbite-react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../contects/AuthProvider";

// const Shop = () => {
//   const [books, setBooks] = useState([]);
//   const navigate = useNavigate();

//   // ✅ Access the logged-in user
//   const { user } = useContext(AuthContext);

//   // ✅ Fetch books from backend
//   useEffect(() => {
//     fetch("https://book-backend-jade.vercel.app/all-books")
//       .then((res) => res.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error("Error fetching books:", err));
//   }, []);

//   // ✅ Handle Buy Now click
//   const handleBuyNow = (book) => {
//     if (!user) {
//       alert("Please log in first to buy books.");
//       navigate("/login");
//       return;
//     }

//     alert(`Payment for "${book.bookTitle}" will be available soon!`);
//   };

//   return (
//     <div className="mt-28 px-4 lg:px-24">
//       <h2 className="text-5xl font-bold text-center mb-10">
//         All Books Are Here
//       </h2>

//       <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
//         {books.map((book) => (
//           <Card key={book._id}>
//             <img
//               src={book.imageURL}
//               alt={book.bookTitle}
//               className="h-80 w-full object-cover"
//             />

//             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               {book.bookTitle}
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               {book.description || "A wonderful book available for purchase."}
//             </p>

//             <button
//               onClick={() => handleBuyNow(book)}
//               className="bg-blue-700 hover:bg-blue-800 transition text-white font-semibold py-2 rounded"
//             >
//               Buy Now
//             </button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // ✅ Dynamic backend URL for both localhost & Vercel
  const API_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5001"
      : "https://book-backend-jade.vercel.app";

  useEffect(() => {
    fetch(`${API_URL}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, [API_URL]);

  const handleBuyNow = (book) => {
    if (!user) {
      alert("Please log in first to buy books.");
      navigate("/login");
      return;
    }
    alert(`Payment for "${book.bookTitle}" will be available soon!`);
  };

  return (
    <div className="mt-28 px-3 sm:px-6 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
        All Books Are Here
      </h2>

      {/* ✅ Responsive grid */}
      <div
        className="grid gap-3 sm:gap-4 md:gap-5 
                   grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-md rounded-xl overflow-hidden 
                       hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {/* ✅ Same image size across all devices */}
            <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden">
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* ✅ Text content */}
            <div className="p-3 flex flex-col justify-between">
              <h5 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2 h-12">
                {book.bookTitle}
              </h5>
              <p className="text-gray-600 text-sm mt-1 line-clamp-3 h-[60px]">
                {book.description || "A wonderful book available for purchase."}
              </p>

              <button
                onClick={() => handleBuyNow(book)}
                className="bg-blue-700 hover:bg-blue-800 mt-3 text-white font-medium py-2 rounded-md w-full text-sm md:text-base transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
