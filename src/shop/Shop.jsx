

import React, { useEffect, useState, useContext } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // ✅ Access the logged-in user
  const { user } = useContext(AuthContext);

  // ✅ Fetch books from backend
  useEffect(() => {
    fetch("https://book-backend-jade.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  // ✅ Handle Buy Now click
  const handleBuyNow = (book) => {
    if (!user) {
      alert("Please log in first to buy books.");
      navigate("/login");
      return;
    }

    alert(`Payment for "${book.bookTitle}" will be available soon!`);
  };

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10">
        All Books Are Here
      </h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id}>
            <img
              src={book.imageURL}
              alt={book.bookTitle}
              className="h-80 w-full object-cover"
            />

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.description || "A wonderful book available for purchase."}
            </p>

            <button
              onClick={() => handleBuyNow(book)}
              className="bg-blue-700 hover:bg-blue-800 transition text-white font-semibold py-2 rounded"
            >
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
