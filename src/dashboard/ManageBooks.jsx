
import React, { useEffect, useState, } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom'
const MangeBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("https://book-backend-jade.vercel.app/all-books").then(res => res.json()).then(data => setAllBooks(data));
  },[])

  const handleDelete = (id) =>{
    console.log(id);
    fetch(`https://book-backend-jade.vercel.app/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted sucessfully")
    setAllBooks(data);
    }
    )
  }

return (
  


  <div className="relative w-full px-4 my-12">
  {/* Background Wrapper */}
  <div className="absolute inset-0 -z-10 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg shadow-xl"></div>

  {/* Title */}
  <h2 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
    Manage Your Books
  </h2>

  {/* Responsive Table Container */}
  <div className="overflow-x-auto rounded-lg shadow-md">
    <Table className="min-w-full text-sm text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
      <Table.Head className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-base">
        <Table.HeadCell className="py-3 px-4 text-left">No.</Table.HeadCell>
        <Table.HeadCell className="py-3 px-4 text-left">Book Name</Table.HeadCell>
        <Table.HeadCell className="py-3 px-4 text-left">Author</Table.HeadCell>
        <Table.HeadCell className="py-3 px-4 text-left">Category</Table.HeadCell>
        <Table.HeadCell className="py-3 px-4 text-left">Price</Table.HeadCell>
        <Table.HeadCell className="py-3 px-4 text-center">Actions</Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y divide-gray-200 dark:divide-gray-700">
        {allBooks.map((book, index) => (
          <Table.Row
            key={book._id}
            className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <Table.Cell className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="py-3 px-4 font-medium">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell className="py-3 px-4">{book.authorName}</Table.Cell>
            <Table.Cell className="py-3 px-4">{book.category}</Table.Cell>
            <Table.Cell className="py-3 px-4 text-cyan-600 font-semibold">
              $20
            </Table.Cell>
            <Table.Cell className="py-3 px-4 text-center">
              <Link
                to={`/admin/dashboard/edit-books/${book._id}`}
                className="inline-block px-3 py-1 text-sm font-medium text-cyan-600 hover:text-blue-600 hover:underline dark:text-cyan-400"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(book._id)}
                className="inline-block ml-2 px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-500 transition-all duration-200"
              >
                Delete
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
</div>

)
}

export default MangeBooks



// import React, { useEffect, useState } from "react";
// import { Table } from "flowbite-react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const MangeBooks = () => {
//   const [allBooks, setAllBooks] = useState([]);

//   // Fetch all books
//   useEffect(() => {
//     fetch("https://book-backend-jade.vercel.app/all-books")
//       .then(async (res) => {
//         const text = await res.text();
//         try {
//           const data = JSON.parse(text);
//           setAllBooks(data);
//         } catch (error) {
//           console.error("❌ JSON Parse Error:", text);
//         }
//       })
//       .catch((err) => console.error("❌ Error fetching books:", err));
//   }, []);

//   // Delete a book
//   const handleDelete = (id) => {
//     fetch(`https://book-backend-jade.vercel.app/book/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then(() => {
//         alert("Book deleted successfully!");

//         // Remove deleted book from UI
//         setAllBooks((prev) => prev.filter((book) => book._id !== id));
//       })
//       .catch((err) => console.error("❌ Delete Error:", err));
//   };

//   return (
//     <motion.div
//       className="relative w-full px-4 py-10 md:py-14"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//     >
//       {/* Glassmorphic Container */}
//       <motion.div
//         className="rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl shadow-2xl p-6 md:p-10"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         {/* Title */}
//         <motion.h2
//           className="mb-8 text-2xl md:text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight text-center md:text-left"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Manage Your Books
//         </motion.h2>

//         {/* Responsive Table */}
//         <motion.div
//           className="overflow-x-auto rounded-lg shadow-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//         >
//           <Table className="min-w-full text-sm text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
//             <Table.Head className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-base">
//               <Table.HeadCell className="py-3 px-4">No.</Table.HeadCell>
//               <Table.HeadCell className="py-3 px-4">Book Name</Table.HeadCell>
//               <Table.HeadCell className="py-3 px-4">Author</Table.HeadCell>
//               <Table.HeadCell className="py-3 px-4">Category</Table.HeadCell>
//               <Table.HeadCell className="py-3 px-4">Price</Table.HeadCell>
//               <Table.HeadCell className="py-3 px-4 text-center">Actions</Table.HeadCell>
//             </Table.Head>

//             <Table.Body className="divide-y divide-gray-200 dark:divide-gray-700">
//               {allBooks.map((book, index) => (
//                 <motion.tr
//                   key={book._id}
//                   className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.05 }}
//                 >
//                   <Table.Cell className="py-3 px-4 font-semibold">
//                     {index + 1}
//                   </Table.Cell>
//                   <Table.Cell className="py-3 px-4 font-medium">{book.bookTitle}</Table.Cell>
//                   <Table.Cell className="py-3 px-4">{book.authorName}</Table.Cell>
//                   <Table.Cell className="py-3 px-4">{book.category}</Table.Cell>
//                   <Table.Cell className="py-3 px-4 text-cyan-600 font-semibold">
//                     {book.price ? `₹${book.price}` : "N/A"}
//                   </Table.Cell>

//                   <Table.Cell className="py-3 px-4 text-center">
//                     <motion.div
//                       className="flex items-center justify-center gap-3"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Link
//                         to={`/admin/dashboard/edit-books/${book._id}`}
//                         className="px-3 py-1 text-sm font-medium text-cyan-600 hover:text-blue-600 hover:underline dark:text-cyan-400"
//                       >
//                         Edit
//                       </Link>

//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => handleDelete(book._id)}
//                         className="px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-500 transition-all duration-200"
//                       >
//                         Delete
//                       </motion.button>
//                     </motion.div>
//                   </Table.Cell>
//                 </motion.tr>
//               ))}
//             </Table.Body>
//           </Table>
//         </motion.div>

//         {/* No Books Found Message */}
//         {allBooks.length === 0 && (
//           <motion.p
//             className="text-center text-gray-700 dark:text-gray-300 mt-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             No books found in database.
//           </motion.p>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default MangeBooks;
