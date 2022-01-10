import React from 'react';
import logo from './logo-space.png'

export default function App() {
  return (
    <header>
      <div className='p-5 text-center bg-image vh-100'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='text-white'>
              <img style={{height:'100px'}} src={logo} alt='logo' className='mb-6'></img>
              <h4 style={{fontStyle:'italic'}} className='mb-5'>Take a quick break from your busy day and learn a bit about space</h4>
              <a style={{color: 'black', border:'#FFF9A6 solid 1px', backgroundColor: '#FFF9A6'}} className='btn btn-lg mars-info' href='#POD' role='button'>
                Jump to the feed
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}