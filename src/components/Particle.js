import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 750,
            },
          },
          color: {
            value: ["#ffffff", "#e0e7ff", "#8B5CF6", "#a78bfa", "#c084fc", "#38BDF8"],
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 0.4,
            straight: false,
          },
          size: {
            value: 2.4,
            random: true,
            anim: {
              enable: true,
              speed: 1.5,
              size_min: 0.8,
              sync: false,
            },
          },
          opacity: {
            value: 0.75,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.2,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            bubble: {
              distance: 160,
              size: 4.2,
              duration: 2,
              opacity: 1,
            },
            push: {
              particles_nb: 6,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
