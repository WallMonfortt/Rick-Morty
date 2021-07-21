import React, { useEffect } from 'react'
import { useState } from "react";
import Pagination from './Pagination';
import { ResidentInfo } from './ResidentInfo';

const ResidentContainer = ({data}) => {
  const [list, setList] = useState(data)
  const [totalResidents, setTotalResidents] = useState(0);
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    setList(data)
    setTotalResidents(data.length)
  }, [data])

  useEffect(() => {
    setPages(Math.ceil(totalResidents / 10))
  }, [totalResidents])

  const handlePagination = newPage => {
    setCurrentPage(newPage)
  }

  const lista = list.slice((currentPage - 1) * 10,currentPage * 10).map(value => <ResidentInfo key={value} url={value} />) 
  

  return (
    <div >
      <div className="pag">
        <span className="curr">Current Page: <span className="page">{currentPage}</span></span>
        <Pagination numOfPages={pages} onPagination={handlePagination} />
        </div>
      <div className="back">{lista}</div>     
    </div>
  )
}

export default ResidentContainer
