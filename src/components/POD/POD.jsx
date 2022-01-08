import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';
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
      <MDBCard style={{ maxWidth: '50rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={Data.url} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{Data.title}</MDBCardTitle>
        <MDBCardText>
          {Data.explanation}
        </MDBCardText>
        <LikeButton
          namespace="my-blog-post"
          id="how-to-beat-me-at-chess"
          component={LikeButton.templates.Twitter}
        />
      </MDBCardBody>
    </MDBCard>
    </>
  )
}