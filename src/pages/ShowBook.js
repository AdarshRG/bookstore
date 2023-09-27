import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
    .then((res) => 
    { setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // function isValidDate(dateString) {
  //   const dateObject = new Date(dateString);
  //   return !isNaN(dateObject.getTime());
  // }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='fw-bold my-4'>Show Book</h1>
        <div className='p-4'>
          <div className='my-4'>
            <span className='fw-bold'>Id: </span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='fw-bold'>Title: </span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='fw-bold'>Author: </span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='fw-bold'>Publish Year: </span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='fw-bold'>Create Time: </span>
            {new Date(book.createdAt).toLocaleString()}
          </div>
          <div className='my-4'>
            <span className='fw-bold'>Last Update Time: </span>
            <span>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
    </div>
  );
};

export default ShowBook;