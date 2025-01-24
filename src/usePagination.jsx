import { useState, useEffect } from 'react'

const usePagination = (data, itemsPerPage) => {

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  };

  const jumpToPage = page => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const currentData = () => {
    const start = (currentPage - 1) * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  }

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    jumpToPage,
    currentData,
  }
}

export default usePagination;