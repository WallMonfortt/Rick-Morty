import React from 'react'
import { useState, useEffect } from "react";
import SearchBox from './SearchBox'
import { getResidents } from "../services/getElements"
import { LocationInfo } from './LocationInfo';
import ResidentContainer from './ResidentContainer';

const LocationContainer = ({random}) => {
  const [queryTerm, setQueryTerm] = useState('')
  const [data, setData] = useState([])
  const [dataRes, setDataRes] = useState([])

  useEffect( () => {
    
    const func = async() => {
    const res = await getResidents(random)
    setData(res);
    setDataRes(res.residents.slice(0,10))
  }
  func();
  },[random])

  const handleSearch = (query) => {
    setQueryTerm(query)
  }
  
   useEffect( () => {
    
    if(queryTerm){
      const func = async() => {
      const res = await getResidents(queryTerm)
      setData(res);
      setDataRes(res.residents)
    }
    
    func();
    }
  },[queryTerm])

  return (
    <div>
      <header>
      <SearchBox onSearch={handleSearch} />
      </header> 
      <LocationInfo data={data} />
      <ResidentContainer data={dataRes} />
    </div>
  )
}

export default LocationContainer

