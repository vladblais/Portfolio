const options = {
    interactivity: {
      events: {
        onHover: {
          // this handles the mouse hover event
          enable: true,
          mode: ["connect", "grab"],
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // the distance of the particles from the mouse
        },
        grab: {
          distance: 200, // the distance of the particles from the mouse
        },
        connect: {
          distance: 200,
        },
      },
    },
    particles: {
      color: {
        value: "#4b506b", // this sets the color of the particles
      },
      links: {
        enable: true, // this enables links between particles
        opacity: 0.6,
        distance: 200,
        color: {
          value: "#4b506b", // this sets the color of the links
        }
      },
      move: {
        enable: true, // this makes particles move
        speed: { min: .5, max: 1.5 }, // this is the speed of the particles
      },
      opacity: {
        value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
      },
      size: {
        value: { min: 2, max: 4 }, // this sets the size of the particles
      },
      number: {
        value: 120, // this sets the number of particles
      },
      shape: {
        type: "triangle", // this sets the shape of the particles
      },
      rotate: {
        value: { min: 0, max: 360 }, // this sets the rotation of the particles
      }
    },
    detectRetina: true,
    responsive: [{
      maxWidth: 411,
      options: { 
        particles: {
          number: {
            value: 20, // this sets the number of particles
          }
        }
      }
  }, {
      maxWidth: 768,
      options: { 
        particles: {
          number: {
            value: 60, // this sets the number of particles
          }
        }
      }
  }]
  };

  // this loads the particles
  tsParticles.load("tsparticles", options);