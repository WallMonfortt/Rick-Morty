import { useState, useEffect } from "react";
import React from 'react'
import button from "../img/search.png";
import { getElements } from "../services/getElements"


const SearchBox = ({ onSearch }) => {
 
  const [value, setValue] = useState("");
  const [datas, setDatas]=useState([]);

  useEffect( () => {
    
    const func = async() => {
      const res = await getElements()
      setDatas(res)   
    }
    func();
    
  },[])
 
  const list = datas.map(element =><option key={element.id} value={element.id}>{element.name}</option> )
  

  return (
    <div className="search">
    <label>Choose Location</label>
    <select name="locations" value={value} onChange={(e) => setValue(e.target.value)} >
      {list}
    </select>
      <button
        onClick={() => {
          onSearch(value);
        }}
      >
        <img src={button} alt="img"></img>
      </button>
    </div>
  );
};

export default SearchBox
