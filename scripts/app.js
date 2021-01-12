(function () {
    let jsonNeed = {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 2200
                }
            },
            "color": {
                "value": "#1000c4"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#04049d"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#04049d",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                    "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    };

    window.addEventListener("load", function () {
        setTimeout(()=> {
            console.log('%cWhich mode %cdo you like %c?', 'color: #2acdc1', 'color: #fff700', 'color: white');
            const loader = document.querySelector(".loader");
            loader.className += " hidden";
        }, 1500);
    });

    particlesJS('particles-js', jsonNeed);

    document.addEventListener('DOMContentLoaded', function () {
        let toggle = document.querySelector('.toggle');
        let checkbox = document.querySelector('input[name=theme]');
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                jsonNeed.particles.color.value = "#fff700";
                jsonNeed.particles.line_linked.color = "#fff700";
                toggle.style.backgroundColor = "#333333";
                document.documentElement.setAttribute('data-theme', 'dark');
                particlesJS('particles-js', jsonNeed);
            } else {
                trans()
                jsonNeed.particles.color.value = "#1000c4";
                jsonNeed.particles.line_linked.color = "#1000c4";
                toggle.style.backgroundColor = "white";
                document.documentElement.setAttribute('data-theme', 'light');
                particlesJS('particles-js', jsonNeed);
            }
        });

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }
    });

})();