import React from 'react'

export const LocationInfo = ({ data }) => {
  return (
    <div className="info">
      <div className="title">
        <h2>Location Info</h2>
      </div>
      <div className="description">
        <span className="main"> Name: <span className="content">{data.name}</span> </span>
        <span className="main"> Type: <span className="content">{data.type}</span> </span>
        <span className="main"> Dimension: <span className="content">{data.dimension}</span> </span>
      </div>
      
    </div>
  )
}
