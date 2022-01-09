import React from 'react';
import Particles from 'react-tsparticles';
import logo from './logo-space.png'

export default function App() {
  return (
    <header>
        <Particles
        options={{
          background: {
            color: "#181A18"
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true
            }
          },
          particles: {
            color: {
              value: "#FFF9A6"
            },
            number: {
              density: {
                enable: true,
                area: 1000
              },
              limit: 0,
              value: 300
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.05
              },
              value: 1
            },
            shape: {
              type: "star"
            },
            size: {
              randmon: {
                enable: true,
                minimumValue: 0.5,
                value: 1
              }
            }
          }
        }}
      />
      <div
        className='p-5 text-center bg-image'
        style={{ height: '62rem' }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <img style={{height:'100px'}} src={logo} alt='logo' className='mb-6'></img>
              <h4 style={{fontStyle:'italic'}} className='mb-5'>Take a quick break from your busy day and learn a bit about space</h4>
              <a style={{color: 'white', border:'#FFF9A6 solid 1px'}} className='btn btn-lg mars-info' href='#POD' role='button'>
                Jump to NASA's picture of the day
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}