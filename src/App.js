import POD from './components/POD/POD'
import Mars from './components/Mars/Mars'
import './App.css';
import Header from './components/Header/Header'
import Particles from 'react-tsparticles';

function App() {
  return (
    <div className="App">
      <Particles
        options={{
          background: {
            color: "#00000"
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
      <Header/>
      <POD/>
      <Mars/>
    </div>
  );
}

export default App;
