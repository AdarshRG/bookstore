import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='fw-bold my-4'>Delete Book</h1>
      <div className=' '>
        <h3 className=''>Are You Sure You want to delete this book?</h3>

        <button
          className='p-2  text-white bg-danger '
          onClick={handleDeleteBook} 
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;