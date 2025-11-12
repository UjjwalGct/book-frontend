import React, { useState } from 'react'
import { Textarea, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useLoaderData,useParams } from 'react-router-dom'
const EditBooks = () => {
  const {id} = useParams();
  const{bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoirs",
    "Business",
    "Children Books",
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value);
  }

const handleUpdate = (event) => {
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const bookDescription = form.bookDescription.value;
  const bookPDFURL = form.bookPDFURL.value;
  const category = form.categoryName.value;
  const imageURL = form.imageURL.value;
  
  const updateBookObj ={
    bookTitle,
    authorName,
    bookDescription,
    bookPDFURL,
    category,
    imageURL
  };
 // console.log(bookObj);
 //update book data
 fetch(`https://book-backend-jade.vercel.app/book/${id}`,
  {
  method:"PATCH",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateBookObj),
 })
 .then(res => res.json()).then(data => {
  alert("Book is updated successfully!!!")
  
 })
}

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload the Book data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[898px] flex-wrap flex-col gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
             id="bookTitle"
              name='bookTitle' 
              type="text" 
              placeholder="Book name"
              defaultValue={bookTitle}
               required />
          </div>

          {/* author name */}

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            {/* author name */}

           <TextInput id="authorName" 
            name='authorName' 
            type="text"
            placeholder="Author Name"
            defaultValue={authorName}
              required />
          </div>

        </div>

        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL"
                value="Book image URL" />
            </div>
            <TextInput id="imageURL"
              name='imageURL'
              type="text"
              placeholder="Book image URL "
              defaultValue={imageURL}
              required />
          </div>

          {/* catagory */}

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState"
                value="Book Category"
              />
            </div>

            <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
              onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }

            </select>
          </div>
        </div>


        {/* bookdescription */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="write your book description"
            required
            name='bookDescription'
            className='w-full'
            rows={6}
            defaultValue={bookDescription}
          />

        </div>
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookPDFURL"
              value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name='bookPDFURL'
            type="text"
            placeholder="book pdf url"
            defaultValue={bookPDFURL}
            required />
        </div>
         
        {/* <Button type="submit" className='mt-5 bg-gray '>Register new account </Button> */}
      
        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transitition-all ease-in duration-200  type= submit'>Udate Books</button>

      </form>
      
    </div>
  )
}

export default EditBooks