const timeline = gsap.timeline({defaults: {ease: "power1.out"}}); //Animation-Name

timeline.fromTo(".animText", {y: 30}, {y: 0, duration: 1});