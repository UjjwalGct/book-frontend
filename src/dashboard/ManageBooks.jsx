// import React from 'react'
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