import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/books')
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='fw-bold'>Books List</h1>
        <Link to='/books/create'>
        <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
        <table className='w-100 border-collapse border'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md p-2'>No</th>
              <th className='border border-slate-600 rounded-md p-2'>Title</th>
              <th className='border border-slate-600 rounded-md p-2'>Author</th>
              <th className='border border-slate-600 rounded-md p-2'>Publish Year</th>
              <th className='border border-slate-600 rounded-md p-2'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td className='text-center '>
                  {index + 1}
                </td>
                <td className='text-center '>
                  {book.title}
                </td>
                <td className='text-center p-2 '>
                  {book.author}
                </td>
                <td className='text-center'>
                  {book.publishYear}
                </td>
                <td className='text-center p-2'>
                  <div className='flex justify-center m-2'>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle/>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit/>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Home;
