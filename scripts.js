
//hoverefect (opacity)
function hoverEffect() {
    const workspace = document.getElementById('workspace');
    const gallery = document.getElementById('gallery');
    const guitar = document.getElementById('guitar');
    const desk = document.getElementById('desk');
    const textItem = document.getElementById('text-item');
    const textItem2 = document.getElementById('text-item2');
    const boys = document.getElementById('boys');


    const hover1 = document.querySelector('.hover1');
    const hover2 = document.querySelector('.hover2');
    const hover3 = document.querySelector('.hover3');
    const hover4 = document.querySelector('.hover4');
    const thinking = document.getElementById('thinking');
    const hover5 = document.querySelector('.hover5');


    // Function to show hover elements
    function showHover(hoverElement) {
        hoverElement.style.opacity = '1';
    }

    // Function to hide hover elements
    function hideHover(hoverElement) {
        hoverElement.style.opacity = '0';
    }

    // Function to show thinking element
    function showThinking() {
        thinking.style.opacity = '1';
    }

    // Function to hide thinking element
    function hideThinking() {
        thinking.style.opacity = '0';
    }

    // Event listeners for #workspace => show & hide
    workspace.addEventListener('mouseenter', () => {
        showHover(hover1);
        showThinking();
    });

    workspace.addEventListener('mouseleave', () => {
        hideHover(hover1);
        hideThinking();
    });

    // Event listeners for #gallery => show & hide
    gallery.addEventListener('mouseenter', () => {
        showHover(hover2);
        showThinking();
    });

    gallery.addEventListener('mouseleave', () => {
        hideHover(hover2);
        hideThinking();
    });

    // Event listeners for #guitar => show & hide
    guitar.addEventListener('mouseenter', () => {
        showHover(hover3);
        showThinking();
    });

    guitar.addEventListener('mouseleave', () => {
        hideHover(hover3);
        hideThinking();
    });

    // Event listeners for #desk => show & hide
    desk.addEventListener('mouseenter', () => {
        showHover(hover4);
        showThinking();
    });

    desk.addEventListener('mouseleave', () => {
        hideHover(hover4);
        hideThinking();
    });
    // Event listeners for #boys => show & hide
    boys.addEventListener('mouseenter', () => {
        showHover(hover5);
        showThinking();
    });

    boys.addEventListener('mouseleave', () => {
        hideHover(hover5);
        hideThinking();
    });


    // Event listeners for #text-item => show & hide
    textItem.addEventListener('mouseenter', () => {
        showHover(hover1);
        showThinking();
    });

    textItem.addEventListener('mouseleave', () => {
        hideHover(hover1);
        hideThinking();
    });

    // Event listeners for #text-item2 => show & hide
    textItem2.addEventListener('mouseenter', () => {
        showHover(hover2);
        showThinking();
    });

    textItem2.addEventListener('mouseleave', () => {
        hideHover(hover2);
        hideThinking();
    });
}
hoverEffect()


//sound effect
function soundEffect() {
    const sound = new Audio('assets/sound.mp3');

    const stickerImages = document.querySelectorAll('.stickers img');

    stickerImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            sound.currentTime = 0;
            sound.play();

            setTimeout(() => {
                sound.pause();
            }, 500);
        });
    });

    document.getElementById('btn').addEventListener('mouseenter', function () {
        sound.play();
    });
}
soundEffect()


//chipichipi sound
function chipiChipi() {
    const sound = new Audio('assets/chipichipi.mp3');

    const spanSound = document.querySelectorAll('span, #play-sound');

    spanSound.forEach(span => {
        span.addEventListener('mouseenter', () => {
            sound.currentTime = 0;
            sound.play();

            setTimeout(() => {
                sound.pause();
            }, 4000);
        });
    });
}
chipiChipi()


// function crsrAnimation(){
//     var mouse = {
//         x: window.innerWidth / 2,
//         y: window.innerHeight / 2
//       };  
//       var dotPos = {
//         x: window.innerWidth / 2,
//         y: window.innerHeight / 2
//       };  
//       var ballPos = {
//         x: window.innerWidth / 2,
//         y: window.innerHeight / 2
//       };  

//       var speed = 1; 

//       var dotRatio = 0.2 * speed;
//       var ballRatio = 0.1 * speed;

//       var dot = document.getElementById("dot");
//       var ball = document.getElementById("ball");

//       gsap.set(dot, {
//         xPercent: -50,
//         yPercent: -50
//       });
//       gsap.set(ball, {
//         xPercent: -50,
//         yPercent: -50
//       });

//       document.addEventListener("mousemove", (e) => { 
//         mouse.x = e.pageX;
//         mouse.y = e.pageY;
//       });

//       gsap.ticker.add(() => { 
//         dotPos.x += (mouse.x - dotPos.x) * dotRatio;
//         dotPos.y += (mouse.y - dotPos.y) * dotRatio;

//         gsap.set(dot, {
//           x: dotPos.x,
//           y: dotPos.y
//         });

//         ballPos.x += (dotPos.x - ballPos.x) * ballRatio;
//         ballPos.y += (dotPos.y - ballPos.y) * ballRatio;
//         gsap.set(ball, {
//           x: ballPos.x,
//           y: ballPos.y
//         });
//       });
// }


function greetingText() {
    const pointer = document.getElementById('pointer');
    const greetingText = document.getElementById('greetingText');

    const greetings = ["Hi", "Hello", "नमस्ते", "Welcome", "سلام"];
    let index = 0;

    // Function to move cursor
    const moveCursor = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const changeGreeting = () => {
        greetingText.textContent = greetings[index];
        index = (index + 1) % greetings.length;
    };

    setInterval(changeGreeting, 1000);

    window.addEventListener('mousemove', moveCursor);
}

greetingText()


document.addEventListener("DOMContentLoaded", function () {
    const lightIcon = document.getElementById("light");
    const darkIcon = document.getElementById("dark");
    const body = document.body;


    darkIcon.addEventListener("click", function () {
        body.classList.add("dark-theme");
    });

    lightIcon.addEventListener("click", function () {
        body.classList.remove("dark-theme");
    });
});


 
