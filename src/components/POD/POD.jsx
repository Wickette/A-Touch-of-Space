import React, { useState, useEffect } from 'react'
import { LikeButton } from '@lyket/react';
import './pod.css'
import axios from 'axios';

export default function ApodContainer() {
  const [Data, fetchData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    axios.get(`${process.env.REACT_APP_BASEURL}${process.env.REACT_APP_NASA_API_KEY}`)
      .then((res) => fetchData(res.data))
      .catch((error) => console.log(error))
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