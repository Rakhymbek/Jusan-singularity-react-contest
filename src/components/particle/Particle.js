import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import "pathseg";
import { loadFull } from "tsparticles";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#000", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      detectRetina: false,
      fpsLimit: 200,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 40,
            duration: 2,
            opacity: 8,
            size: 6,
            speed: 3,
          },
          push: {
            particles_nb: 3,
          },
        },
      },
      particles: {
        color: {
          value: "#fff",
          animation: {
            enable: true,
            speed: 40,
            sync: true,
          },
        },
        lineLinked: {
          blink: false,
          color: "random",
          consent: true,
          distance: 50,
          enable: true,
          opacity: 0.4,
          width: 0.5,
        },
        move: {
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          bounce: false,
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: false,
            area: 2000,
          },
          limit: 0,
          value: 200,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 1,
            sync: false,
          },
          random: false,
          value: 0.4,
        },
        shape: {
          type: "triangle",
        },
        size: {
          animation: {
            enable: false,
            minimumValue: 0.1,
            speed: 40,
            sync: false,
          },
          random: true,
          value: 2,
        },
      },
      polygon: {
        draw: {
          enable: true,
          lineColor: "rgba(255,255,255,0.2)",
          lineWidth: 0.8,
          stroke: {
            color: "rgba(255, 255, 255, .2)"
          }
        },
        move: {
          radius: 10,
        },
        inlineArrangement: "equidistant",
        scale: 1,
        type: "inline",
        url: "https://particles.js.org/images/smalldeer.svg",
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return (
    <Particles
      id={props.id}
      init={particlesInit}
      width='auto'
      height='100%'
      withDefaults={false}
      style={{
        // backgroundColor: "blue",
        // // position: "absolute",
        // width: "100%",
        // height: "100%",
        // backgroundColor: "#323031",
        // backgroundImage: `url()`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "50% 50%",
      }}
      options={options}
    />
  );
};

export default ParticlesComponent;
