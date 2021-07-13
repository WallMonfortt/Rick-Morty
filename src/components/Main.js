import React from 'react'
import LocationContainer from './LocationContainer'

const Main = () => {
  const random = Math.floor(Math.random() * 109)
  return (
    <div>
      <LocationContainer random={random} />
    </div>
  )
}

export default Main
