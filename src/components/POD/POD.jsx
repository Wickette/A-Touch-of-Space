import React, { useState, useEffect } from 'react'
import { LikeButton } from '@lyket/react';
import axios from 'axios';

export default function ApodContainer() {
  const [Data, setData] = useState([])

  const getData = () => {
    axios.get(`${process.env.REACT_APP_BASEURL}${process.env.REACT_APP_NASA_API_KEY}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="bg-black bg-opacity-80">
      <div className="flex justify-center items-center">
        <dialog open className="relative rounded-2xl overflow-hidden p-0 w-auto max-w-7xl md:mx-auto md:w-2/3 shadow-lg m-8">
          <div className="flex flex-col lg:flex-row">
            <div className="relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none">
              <iframe src={Data.url} title="nasa-api" className="absolute inset-0 h-full w-full object-cover"/>
              <span className="absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16"></span>
              <div className="relative flex justify-end lg:justify-start flex-wrap text-white text-xl font-bold m-4"></div>
            </div>
            <div className="w-full">
              <div className="p-8">
                <div className="flex flex-col justify-center items-center">
                  <p>{Data.date}</p>
                  <h3 className="text-xl font-bold mb-5">{Data.title}</h3>
                  <p>{Data.explanation}</p>
                    <LikeButton
                    id='my-first-feed'
                    namespace='nasa-app-POD'
                    component={LikeButton.templates.Twitter}
                    />
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
    </div>
  )
}