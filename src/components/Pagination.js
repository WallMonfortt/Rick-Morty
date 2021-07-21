import React from 'react'
import { useState, useEffect } from "react";

const Pagination = ({numOfPages, onPagination}) => {
  const [data, setData] = useState(new Array(numOfPages).fill(1))
  useEffect(() => {
    setData(new Array(numOfPages).fill(1))
  }, [numOfPages])


  const list = data.map((value,index) => <li className="pag-li" onClick={() => onPagination(index + 1)}> {index + 1}</li>) 
  return ( 
    <div className="pag">
      {list}
    </div>
  )
}

export default Pagination
