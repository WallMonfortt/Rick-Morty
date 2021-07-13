import React from 'react'
import { useState,useEffect } from "react";
import { getResident } from '../services/getElements';

export const ResidentInfo = ({url}) => {
  const [residentName, setResidentName] = useState();
  const [residentGender, setResidentGender] = useState();
  const [residentStatus, setResidentStatus] = useState();
  const [residentSpecie, setResidentSpecie] = useState();
  const [residentImg, setResidentImg] = useState();

  useEffect(() => {

    const funcion = async(urlPer) => {
      const resp = await getResident(urlPer)
      setResidentName(resp.name)
      setResidentGender(resp.gender)
      setResidentStatus(resp.status)
      setResidentSpecie(resp.species)
      setResidentImg(resp.image)
    }
    funcion(url)
  
  },[url])
  return (
    <div>
     <div>Name: {residentName}</div>
     <div>Gender: {residentGender}</div>
     <div>Status: {residentStatus}</div>
     <div>Specie: {residentSpecie}</div>
     <div><img src={residentImg} /></div>
    </div>
  )
}
