import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BookDetails = () => {
  const { bookTitle } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://book-backend-jade.vercel.app/books?search=${bookTitle}`);
        const data = await res.json();

        if (res.ok) {
        setBook(data);
      } else {
        setError(data.message || "Book not found");
        alert(data.message || "Book not found"); // 🔔 show popup on screen
      }

      } catch (err) {
        setError("Error fetching book details");
      } finally {
        setLoading(false);
      }
    };

    if (bookTitle) fetchBook();
  }, [bookTitle]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-center text-red-600 mt-10 text-lg font-medium">{error}</p>
    );







  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 pt-28 pb-10">
      {/* 👆 pt-28 gives space below navbar; adjust if needed */}

      {book ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 max-w-4xl w-full flex flex-col md:flex-row gap-8 md:items-start"
        >
          {/* Book Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              src={book.imageURL}
              alt={book.bookTitle}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Book Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              {book.bookTitle}
            </h2>
            <p className="text-gray-600 text-lg italic mt-2 mb-3">
              by <span className="font-semibold text-gray-800">{book.authorName}</span>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
              {book.bookDescription}
            </p>
            <p className="text-blue-700 font-semibold text-lg mb-6">
              📚 Category: <span className="capitalize">{book.category}</span>
            </p>

            <motion.a
              href={book.bookPDFURL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition"
            >
              📖 Read Book
            </motion.a>
          </div>
        </motion.div>
      ) : (
        <p className="text-gray-500 text-lg mt-10">No book found</p>
      )}
    </div>
  );
};

export default BookDetails;
