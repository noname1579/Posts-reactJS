import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PaginatedItems ({ itemsPerPage, items }) {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <>
      <h1 className='title'>Посты</h1>
      <div className='container'>
        {currentItems.map(item => (
          <div className='post' key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <h2>{item.id}</h2>
          </div>
        ))}
      </div>

      <div className='btns'>
        {Array.from({ length: totalPages }, (_, index) => (
          <div className="btn">          
          <Link key={index + 1} to={`/posts-reactJS/${index + 1}`}>{index + 1}</Link>
          </div>
        ))}
      </div>
    </>
  )
}
