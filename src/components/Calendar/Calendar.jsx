import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import axios from 'axios';
// import { LikeButton } from '@lyket/react';
import LikeButton from '../likeButton/LikeButton';

export default function Sample() {

  const [value, onChange] = useState(new Date());
  let selectedDate = dayjs(value).format('YYYY-MM-DD')
  console.log(selectedDate)

  const [Data, setData] = useState([])

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_BASEURL}${process.env.REACT_APP_NASA_API_KEY}&date=${selectedDate}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getData()
  })

  return (
    <div className="relative" id='POD'>
      <div className='flex justify-center items-center flex-col'>
      <header className='text-center'>
        <h1 style={{color: 'white'}}>Choose an APOD from a specific date</h1>
        <p style={{color: 'white', fontStyle: 'italic'}}>*Please note: Days selected must be in the past </p>
      </header>
      <div>
        <main>
          <Calendar 
            onChange={onChange}
            value={value}
          />
        </main>
      </div>
      </div>
          <div className="flex justify-center items-center">
            <dialog open className="relative rounded-2xl overflow-hidden p-0 w-auto max-w-7xl md:mx-auto md:w-2/3 shadow-lg m-8">
              <h1 className='bg-white p-3 text-center'>NASA's Picture of the Day</h1>
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none">
                  <embed src={Data.url} title="nasa-api" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16"></span>
                  <div className="relative flex justify-end lg:justify-start flex-wrap text-white text-xl font-bold m-4"></div>
                </div>
                <div className="w-full">
                  <div className="p-8">
                    <div className="flex flex-col justify-center items-center">
                      <p>{Data.date}</p>
                      <h3 className="text-xl font-bold mb-5">{Data.title}</h3>
                      <p>{Data.explanation}</p>
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

  );
}