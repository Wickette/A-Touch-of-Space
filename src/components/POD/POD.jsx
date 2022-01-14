import React, { useState, useEffect } from 'react'
// import { LikeButton } from '@lyket/react';
import axios from 'axios';
import LikeButton from '../likeButton/LikeButton';

function startDateFunction() {
  let today = new Date();
  let dd = today.getDate() -1
  let mm = today.getMonth() + 1

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  let startDateFormatted = yyyy + '-' + mm + '-' + dd;
  return startDateFormatted
}
function endDateFunction() {
  let today = new Date();
  let dd = today.getDate() - 8
  let mm = today.getMonth() + 1

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  let endDateFormatted = yyyy + '-' + mm + '-' + dd;
  return endDateFormatted
}

let startDate = startDateFunction()
let endDate = endDateFunction()

export default function ApodContainer() {
  const [Data, setData] = useState([])
  console.log(startDate)
  console.log(endDate)

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_BASEURL}${process.env.REACT_APP_NASA_API_KEY}&start_date=${endDate}&end_date=${startDate}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getData()
  })

  let newOrder = Data.reverse()

  return (
    <div id='POD'>
      {newOrder.map((value, index) => {
        return <div className="bg-black bg-opacity-80 " key={index}>
          <div className="flex justify-center items-center">
            <dialog open className="relative rounded-2xl overflow-hidden p-0 w-auto max-w-7xl md:mx-auto md:w-2/3 shadow-lg m-8">
              <h1 className='bg-white p-3 text-center'>NASA's Picture of the Day</h1>
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none">
                  <embed src={value.url} title="nasa-api" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16"></span>
                  <div className="relative flex justify-end lg:justify-start flex-wrap text-white text-xl font-bold m-4"></div>
                </div>
                <div className="w-full">
                  <div className="p-8">
                    <div className="flex flex-col justify-center items-center">
                      <p>{value.date}</p>
                      <h3 className="text-xl font-bold mb-5">{value.title}</h3>
                      <p>{value.explanation}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <LikeButton/>
              </div>
            </dialog>
          </div>
        </div>
      })}
    </div>
  )
}