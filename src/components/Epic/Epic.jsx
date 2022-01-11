import React, { useState, useEffect } from 'react'
import { LikeButton } from '@lyket/react';
import axios from 'axios';

export default function MarsContainer() {
    const [Data, setData] = useState([])

    const getData = () => {
        axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=Yor2F94EAmTaKqXUiQz5FPyZPVCeF6tJHmiNsh7w&feedtype=json&ver=1.0`)
            .then((res) => setData(res.data))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        getData()
    }, [])

    let today = new Date();
    let dd = today.getDate() - 1
    let mm = today.getMonth() + 1

    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    let todayNew = yyyy + '/' + mm + '/' + dd;

    const newData = Data.map(({image, date})=> ['https://epic.gsfc.nasa.gov/archive/natural/' + todayNew + '/png/' + image + '.png', date]) 

    return (
        <div>
            <dialog open className="mt-20 rounded-2xl overflow-hidden p-0 w-auto max-w-7xl md:mx-auto md:w-2/3 shadow-lg m-8 relative bg-black">
                <h1 className='bg-white p-3 text-center'>These images were taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</h1>
                <div className="grid lg:grid-cols-5 justify-center justify-items-center">
                    {newData.map((value, index) => {
                        return  <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg" key={index}>
                                    <img className="w-full h-48" src={value[0]} alt="earth" />
                                    <div className="px-6 py-4">
                                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-500 text-center">Taken on: {value[1]}</h4>                          
                                    </div>
                                </div>
                    })}
                </div>
                    <div className='bg-white flex justify-center'>
                        <LikeButton id='my-second-feed' namespace='nasa-app-mars' component={LikeButton.templates.Twitter}/>
                    </div>
            </dialog>
        </div>
    )
}




