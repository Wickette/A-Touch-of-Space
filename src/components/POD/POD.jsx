import React, { useState, useEffect } from 'react'
import { LikeButton } from '@lyket/react';
import './pod.css'

export default function UsersData() {
  console.log(process.env.REACT_APP_API_KEY)
  const [Data, fetchData] = useState([])

  const getData = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchData(res)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div id='POD' className="card" style={{width: '100rem'}}>
        <div className="row no-gutters">
          <div className="col-md-7">
            <img src={Data.url} alt="nasa" />
            <rect width="100%" height="100%" fill="#868e96" />
          </div>
          <div style={{margin: 'auto 0'}} className="col-md-5">
            <div className="card-body">
              <h5 style={{marginBottom: '6rem'}} className="card-title">{Data.title}</h5>
              <p className="card-text">
                {Data.explanation}
              </p>
              <LikeButton
            component={LikeButton.templates.Twitter}
          />
            </div>
          </div>
        </div>
    </div>
       

   
    </>
  )
}