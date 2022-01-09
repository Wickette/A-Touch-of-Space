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
        style={{ height: '65rem' }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <img style={{height:'100px'}} src={logo} alt='logo' className='mb-6'></img>
              <h4 style={{fontStyle:'italic'}} className='mb-5'>Take a break from your busy schedule, with "A Touch of Space" content</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Check out the Weather on Mars
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}