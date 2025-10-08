const wrapper = document.querySelector(".sliderWrapper");

// console.log("Hello Torrenostra", wrapper);

// wrapper.style.backgroundColor = "black";

// wrapper.style.transform = "translateX(1000px)";
//to move to right with positive

// wrapper.style.transform = "translateX(-100vw)";
//first image will dissapear
//second image will be displayed

// wrapper.style.transform = "translateX(-200vw)";
//second image will dissapear
//third image will be displayed

// wrapper.style.transform = "translateX(-300vw)";
//third image will dissapear
//fourth image will be displayed

// wrapper.style.transform = "translateX(-400vw)";
//fourth image will dissapear
//fifth image will be displayed

// I want to have 5 buttons to click on to be able to change images

const menuButtons = document.querySelectorAll(".menuButton");

menuButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log("you clicked index nb: " + index);
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

//you clicked index nb: 0...
