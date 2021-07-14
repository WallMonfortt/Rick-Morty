import React from 'react'
import { useState,useEffect } from "react";
import { getResident } from '../services/getElements';
import Green from '../img/green.png'
import Red from '../img/red.png'
import Question from '../img/question.png'

export const ResidentInfo = ({url}) => {
  const [residentName, setResidentName] = useState();
  const [residentGender, setResidentGender] = useState();
  const [residentStatus, setResidentStatus] = useState();
  const [residentSpecie, setResidentSpecie] = useState();
  const [residentImg, setResidentImg] = useState();
  const [residentOrigin, setResidentOrigin] = useState();
  const [residentEpisodes, setResidentEpisodes] = useState([]);
  const[icon, setIcon] = useState();

  useEffect(() => {

    const funcion = async(urlPer) => {
      const resp = await getResident(urlPer)
      setResidentName(resp.name)
      setResidentGender(resp.gender)
      setResidentStatus(resp.status)
      setResidentSpecie(resp.species)
      setResidentImg(resp.image)
      setResidentOrigin(resp.origin.name)
      setResidentEpisodes(resp.episode)

    }
    funcion(url)
  
  },[url])

  useEffect(() => {
    if (residentStatus === 'unknown'){
      setIcon(Question)
    }else if (residentStatus === 'Alive'){
      setIcon(Green)
    }else{
      setIcon(Red)
    }
  }, [residentStatus])
  return (
    <div className="cont">
     <div className="img-ch"><img src={residentImg} alt={residentName} /></div>
     <div className ="data">
      
        <div className="sectionMain"><span>{residentName}</span></div>
        <div className="section">{residentGender}</div>
        <div className="section"><img src={icon} alt="icon" /> <span>Status:</span> {residentStatus}</div>
        <div className="section"><span>Specie:</span> {residentSpecie}</div>
        <div className="section"><span>Origin:</span> {residentOrigin}</div>
        <div className="section">Appears in: <span>{residentEpisodes.length}</span> episodes</div>
    
     </div>
     
    </div>
  )
}
