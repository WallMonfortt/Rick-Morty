import React, { useEffect } from 'react'
import { useState } from "react";
import { ResidentInfo } from './ResidentInfo';

const ResidentContainer = ({data}) => {
  const [list, setList] = useState([data])
  useEffect(() => {
    setList(data)
  }, [data])

  const lista = list.map(value => <ResidentInfo key={value} url={value} />)

  return (
    <div>
      {lista}
    </div>
  )
}

export default ResidentContainer
