import React, { useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// debugger;
const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const Dark = useSelector((state) => state.navbar.darkMode);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      //await loadAll(engine);
      //await loadFull(engine);
      console.log('slim state loading...');
      await loadSlim(engine);
      console.log('slim state loaded');

      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      particles: {
        color: {
          value: Dark ? '#ffffff' : '#222222',
        },
        links: {
          color: Dark ? '#ffffff' : '#222222',
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      fpsLimit: 200,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.6,
          },
        },
      },
      detectRetina: true,
    }),
    [Dark]
  );

  return (
    <div className="absolute w-full h-screen ">
      <Particles
        id="tsparticles"
        key={Dark}
        particlesLoaded={particlesLoaded}
        options={options}
        className="w-full h-screen absolute z-0"
      />
    </div>
  );
};

export default ParticlesComponent;
