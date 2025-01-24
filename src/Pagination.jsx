import React, { useState } from 'react';
import usePagination from './usePagination';
import Post from './Post';

const Pagination = ({ items }) => {
  const [itemsPerPage, setItemsPerPage] = useState(6); // Установите значение по умолчанию
  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    jumpToPage,
    currentData,
  } = usePagination(items, itemsPerPage);

  return (
    <>
    <div className='container'>
        {currentData().map((item) => (
          <Post id={item.id} title={item.title} body={item.body} />
        ))}
    </div>
    <div className="container-btn">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Назад
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => jumpToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Далее
        </button>
      </div>
      </>
  );
};

export default Pagination