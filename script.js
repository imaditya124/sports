// document.addEventListener("DOMContentLoaded", function() {
//     var images = document.querySelectorAll(".slider-images img");
//     var video = document.querySelectorAll("slider-imgage video");
//     var caption = document.querySelector(".image-caption p");
//     var currentIndex = 0;
  
//     setInterval(function() {
//       changeImage(currentIndex + 1);
//     }, 10000); // 10 seconds interval
  
//     // Randomly select initial image
//     var randomIndex = Math.floor(Math.random() * images.length);
//     changeImage(randomIndex);
  
//     function changeImage(index) {
//       images[currentIndex].style.display = "none";
//       currentIndex = (index + images.length) % images.length;
//       images[currentIndex].style.display = "block";
//       caption.textContent = "This is a sample caption for Image " + (currentIndex + 1);
//     }
  
//     // Arrow click event listeners
//     var leftArrow = document.querySelector(".arrow.left");
//     var rightArrow = document.querySelector(".arrow.right");
  
//     leftArrow.addEventListener("click", function() {
//       changeImage(currentIndex - 1);
//       leftArrow.classList.add("clicked");
//       setTimeout(function() {
//         leftArrow.classList.remove("clicked");
//       }, 100);
//     });
  
//     rightArrow.addEventListener("click", function() {
//       changeImage(currentIndex + 1);
//       rightArrow.classList.add("clicked");
//       setTimeout(function() {
//         rightArrow.classList.remove("clicked");
//       }, 100);
//     });
  
//     // Arrow hover effect
//     leftArrow.addEventListener("mouseenter", function() {
//       leftArrow.classList.add("hover");
//     });
  
//     leftArrow.addEventListener("mouseleave", function() {
//       leftArrow.classList.remove("hover");
//     });
  
//     rightArrow.addEventListener("mouseenter", function() {
//       rightArrow.classList.add("hover");
//     });
  
//     rightArrow.addEventListener("mouseleave", function() {
//       rightArrow.classList.remove("hover");
//     });
//   });
document.addEventListener("DOMContentLoaded", function() {
  var leftImage = document.querySelector(".left_side_image img");
  var rightImage = document.querySelector(".right_side_image img");
  var leftImages = [
      "image/vollyball.png",
      "image/run.png",
      "image/basketball.png"
      // Add more volleyball image paths here if needed
  ];
  var rightImages = [
      "image/basketball.png",
      "image/javlin.png",
      "image/vollyball.png"
      // Add more basketball image paths here if needed
  ];
  var currentIndex = 0;

  setInterval(function() {
      changeImages();
  }, 1000); // Change images every 5 seconds

  function changeImages() {
      leftImage.src = leftImages[currentIndex];
      rightImage.src = rightImages[currentIndex];
      currentIndex = (currentIndex + 1) % leftImages.length;

    
  }
});



// document.addEventListener("DOMContentLoaded", function() {
//   var sporionDetail = document.querySelector(".sporion_detail");
//   var elementsToAnimate = document.querySelectorAll(".sporion_detail .left_side_image img, .sporion_detail .right_side_image img, .sporion_detail .card");

//   // Function to check if element is in viewport
//   function isInViewport(element) {
//       var rect = element.getBoundingClientRect();
//       return (
//           rect.top >= 0 &&
//           rect.left >= 0 &&
//           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//   }

//   // Function to handle animation
//   function handleAnimation() {
//       if (isInViewport(sporionDetail)) {
//           elementsToAnimate.forEach(function(element) {
//               element.classList.add("animate");
//           });
//           // Remove event listener once animation is applied
//           window.removeEventListener("scroll", handleAnimation);
//       }
//   }

//   // Initial check
//   handleAnimation();

//   // Add event listener to check for scroll events
//   window.addEventListener("scroll", handleAnimation);
// });

window.addEventListener('scroll', function() {
  var leftCard = document.querySelector('.card:nth-child(odd)');
  var rightCard = document.querySelector('.card:nth-child(even)');
  var leftCardTop = leftCard.getBoundingClientRect().top;
  var rightCardTop = rightCard.getBoundingClientRect().top;
  if (leftCardTop <= window.innerHeight * 0.75) {
    leftCard.style.cssText = 'transform: translateX(0); opacity: 1;';
  }
  if (rightCardTop <= window.innerHeight * 0.75) {
    rightCard.style.cssText = 'transform: translateX(0); opacity: 1;';
  }
});

// document.addEventListener('DOMContentLoaded', function () {
//   const slider = document.querySelector('.image-slider');
//   const videoPlayer = document.getElementById('video-player');
//   const imageSlider = document.getElementById('image-slider');

//   let isVideoPlaying = true;

//   // Toggle between video and image
//   function toggleContent() {
//     if (isVideoPlaying) {
//       videoPlayer.pause();
//       imageSlider.style.display = 'block';
//       videoPlayer.style.display = 'none';
//     } else {
//       videoPlayer.play();
//       imageSlider.style.display = 'none';
//       videoPlayer.style.display = 'block';
//     }
//     isVideoPlaying = !isVideoPlaying;
//   }

//   // Change content every 5 seconds
//   setInterval(toggleContent, 5000);
// });



// document.addEventListener('DOMContentLoaded', function () {
//   const sliderContent = document.querySelector('.slider-content');
//   const videoPlayer = document.getElementById('video-player');
//   const images = document.querySelectorAll('.slider-content img');
//   const arrows = document.querySelectorAll('.arrow');

//   let currentIndex = 0;
//   let isVideoPlaying = true;

//   // Toggle between video and images
//   function toggleContent() {
//     if (isVideoPlaying) {
//       videoPlayer.pause();
//       videoPlayer.style.display = 'none';
//       images[currentIndex].style.display = 'block';
//     } else {
//       videoPlayer.play();
//       videoPlayer.style.display = 'block';
//       images[currentIndex].style.display = 'none';
//     }
//     isVideoPlaying = !isVideoPlaying;
//   }

//   // Show the first video and hide the images initially
//   toggleContent();

//   // Change content on arrow click
//   arrows.forEach(arrow => {
//     arrow.addEventListener('click', function () {
//       if (arrow.classList.contains('left')) {
//         currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
//       } else {
//         currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
//       }
//       toggleContent();
//     });
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  const sliderContent = document.querySelector('.slider-content');
  const videoPlayer = document.getElementById('video-player');
  const images = document.querySelectorAll('.slider-image');
  const arrows = document.querySelectorAll('.arrow');

  let currentIndex = 0;

  // Show the video first and hide the images initially
  videoPlayer.style.display = 'block';
  images.forEach(image => image.style.display = 'none');

  // Change content on arrow click
  arrows.forEach(arrow => {
    arrow.addEventListener('click', function () {
      if (arrow.classList.contains('left')) {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      } else {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      }
      toggleContent();
    });
  });

  function toggleContent() {
    if (currentIndex === 0) {
      videoPlayer.style.display = 'block';
      images.forEach(image => image.style.display = 'none');
    } else {
      videoPlayer.style.display = 'none';
      images.forEach((image, index) => {
        if (index === currentIndex) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  }
});


TweenMax.set("#soccer1", { opacity: 1 });

TweenMax.set(["#soccer2", "#basket"], { autoAlpha: 0, display: "none" });
const backLines = anime({
    targets: ".soccer1_extra-line > *",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 500,
    delay: function (el, i) {
        return 1000 + i * 50;
    },
    autoplay: false
});

const bodyLines = anime({
    targets: ".soccer1_line > *",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 500,
    delay: function (el, i) {
        return 1000 + i * 20;
    },
    autoplay: false
});

const ballLines = anime({
    targets: ".soccer1ball > .soccer1ball-line > *",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 500,
    delay: function (el, i) {
        return 1000 + i * 140;
    },
    autoplay: false
});

function step1_ballTL() {
    const ball = new TimelineMax({
        onStart: function () {
            ballLines.play();
        }
    });
    ball
        .staggerFromTo(
            ".soccer1ball > g:nth-child(1) > *",
            0.5,
            { scale: 0 },
            { scale: 1 },
            0.2
        )
        .to(".soccer1ball", 3, {
            rotation: 760,
            x: 2000,
            transformOrigin: "50% 50%",
            ease: Expo.easeOut,
            delay: 1
        })
        .to(".soccer1ball", 1, { autoAlpha: 0 }, "-=1");
    return ball;
}

function step1_backTL() {
    const back = new TimelineMax({
        onStart: function () {
            backLines.play();
        },
        onComplete: function () {
            console.log("completed");
            backLines.play();
            backLines.reverse();
            TweenMax.staggerTo(
                ".soccer1_extra-line > g",
                1,
                { scale: 0, transformOrigin: "50% 50%", ease: Bounce.easeOut },
                0.2
            );
        }
    });

    back.staggerFromTo(
        ".soccer1_extra-line > g",
        1,
        { x: -3500, rotation: -1000, transformOrigin: "50% 50%" },
        { x: 0, rotation: 0, ease: Power4.easeOut },
        0.5
    );
    return back;
}

function step1_bodyTL() {
    const timeline = new TimelineMax({
        ease: Expo.easeOut,
        onStart: bodyLines.play(),
        onComplete: function () {
            bodyLines.reverse();

            setTimeout(() => {
                TweenMax.staggerTo(
                    ".soccer1_fill > *",
                    0.2,
                    { scale: 0, transformOrigin: "50% 50%" },
                    0.01
                );
            }, 2000);
        }
    });

    var duration = 0.3;
    var stagger = 0.03;

    timeline.staggerFromTo(
        ".soccer1_fill > *",
        duration,
        { x: -4500 },
        { x: 0 },
        stagger
    );

    return timeline;
}
// soccer 1

// soccer 2
const step2_bodyLines = anime({
    targets: ".soccer2_line path",
    strokeDashoffset: [anime.setDashoffset, 99200],
    easing: "easeInOutSine",
    duration: 2500,
    delay: function (el, i) {
        return 1000 + i * 20;
    },
    autoplay: false
});

const step2_bodyExtra = anime({
    targets: ".soccer2_extra-line > *",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
        return 1000 + i * 20;
    },
    autoplay: false
});
function step2_bodyTL() {
    const timeline = new TimelineMax({
        onStart: function () {
            step2_bodyExtra.play();
            step2_bodyLines.play();
        },
        onComplete: function () { }
    });

    timeline
        .staggerFromTo(
            ".soccer2_fill > *",
            0.2,
            { scale: 0, transformOrigin: "100% 100%" },
            { scale: 1 },
            0.03
        )
        .to(".soccer2_fill", 1, {
            onStart: function () {
                step2_bodyExtra.reverse();
                step2_bodyLines.reverse();
                step2_bodyExtra.play();
                step2_bodyLines.play();
            }
        })
        .staggerTo(".soccer2_fill > *", 0.2, { scale: 0, delay: 2 }, 0.01);

    return timeline;
}

// basket

const step3_bodyLines = anime({
    targets: ".basket_extra-line > *",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
        return i * 20;
    },
    autoplay: false
});
const step3_extraLines = anime({
    targets: ".basket_line > *",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 3500,
    delay: function (el, i) {
        return i * 20;
    },
    autoplay: false
});

function step3_bodyTL() {
    const timeline = new TimelineMax({
        onStart: function () {
            step3_bodyLines.play();
            step3_extraLines.play();
        }
    });
    timeline.staggerFromTo(
        ".basket_fill > *",
        0.3,
        { scale: 0, y: 300, transformOrigin: "0% 0%" },
        { scale: 1, y: 0 },
        -0.008
    );

    return timeline;
}

// utilities
function hide(elem) {
    const tl = new TimelineMax();
    tl.to(elem, 0.1, { autoAlpha: 0 }).to(elem, 0.1, { display: "none" });
    return tl;
}
function show(elem) {
    const tl = new TimelineMax();
    tl.to(elem, 0.1, { autoAlpha: 1 }).to(elem, 0.1, { display: "block" });
    return tl;
}
const mainTL = new TimelineMax({});

function init() {
    mainTL
        .add(step1_bodyTL(), "step1")
        .add(step1_backTL(), "step1")
        .add(step1_ballTL(), "step1")
        .add(hide("#soccer1"), "step2")
        .add(show("#soccer2"), "step3")
        .add(step2_bodyTL(), "step4")
        //.add(step2_backTL(), 'step4.1')
        .add(hide("#soccer2"), "step5")
        .add(show("#basket"), "step6")
        .add(step3_bodyTL(), "step7");
}

init();



icon = document.querySelector('.fa-solid')
navBar = document.querySelector('.nav')

icon.addEventListener('click', () => {
    navBar.classList.toggle('v-class');
    navBar.classList.toggle('h-nav');
})


function myFunction2(action) {

    var x = document.getElementsByClassName("newone");
    var len = x.length;
    for (var i = 0; i < len; i++) {
        if (action == 'sub') {
            x[i].style.fontSize = "14px";
        }
        if (action == 'av') {
            x[i].style.fontSize = "16px";
        }
        if (action == 'add') {
            x[i].style.fontSize = "18px";
        }
    }
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href) {
            if (action == 'sub') {
                links[i].style.fontSize = "14px";
            }
            if (action == 'av') {
                links[i].style.fontSize = "16px";
            }
            if (action == 'add') {
                links[i].style.fontSize = "18px";
            }
        }
    }
}

function myFunction(clr) {
    var x = document.getElementsByClassName("newone");
    var len = x.length;
    for (var i = 0; i < len; i++) {
        x[i].style.color = clr;
    }
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href) {
            links[i].style.color = clr;
        }
    }
    var y = document.getElementsByClassName("white");
    var len2 = y.length;
    for (var i = 0; i < len2; i++) {
        y[i].style.color = "white";
    }
    var z = document.getElementsByClassName("bg-color");
    var len3 = z.length;
    for (var i = 0; i < len3; i++) {
        z[i].style.background = clr;
    }
}




//getting all required elements
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}