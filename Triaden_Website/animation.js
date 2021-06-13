const timeline = gsap.timeline({defaults: {ease: "power1.out"}}); //Animation-Name

timeline.to(".text", {y: "0%", duration: 1, stagger: 0.25}); //Von 100% => 0% (Unten nach Ausgangsposition), in 1 Sek., Zeile 2 & 3 => 0.25s versetzt
timeline.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5}); //Von 100% => -100% (Unten nach Oben), in 1.5 Sek., 0.5s delay
timeline.to(".intro", {y: "-100%", duration: 1}, "-=1"); //Von 0% => -100% (Ausgangsposition nach oben), in 1 Sek., starte 1 Sek. schneller
timeline.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1}); //Nav-Animation innerhalb dieser Animation
timeline.fromTo("#wallpaper_text", {opacity: 0}, {opacity: 1, duration: 1}, "-=1"); //Wallpaper-Text-Animation innerhalb dieser Animation mit 1 Sek. delay