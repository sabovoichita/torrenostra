// Select main elements
const wrapper = document.querySelector(".sliderWrapper");
const menuButtons = document.querySelectorAll(".menuButton");
const selectProduct = document.querySelectorAll(".selectProduct");
const product = document.querySelector(".product");
const productDetails = document.querySelector(".productDetails");

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Products data
const products = [
  {
    id: 1,
    title: "Family Art",
    price: 50,
    colors: [
      { code: "turquoise", img: "./images/p1-turquoise.jpg" },
      { code: "black", img: "./images/p1-black.png" },
      { code: "white", img: "./images/p1-white.png" },
      { code: "burlywood", img: "./images/p1-wood.png" },
      { code: "purple", img: "./images/p1-purple.png" },
    ],
  },
  {
    id: 2,
    title: "Heart Art",
    price: 150,
    colors: [
      { code: "burlywood", img: "./images/p3-wood.jpg" },
      { code: "turquoise", img: "./images/p3-turquoise.png" },
      { code: "black", img: "./images/p3-black.png" },
      { code: "white", img: "./images/p3-white.png" },
      { code: "purple", img: "./images/p3-purple.png" },
    ],
  },
  {
    id: 3,
    title: "Butterfly Art",
    price: 25,
    colors: [
      { code: "silver", img: "./images/p2-silver.jpg" },
      { code: "black", img: "./images/p2-black.png" },
      { code: "white", img: "./images/p2-white.png" },
      { code: "burlywood", img: "./images/p2-wood.png" },
      { code: "purple", img: "./images/p2-purple.png" },
    ],
  },

  {
    id: 4,
    title: "Wind Chime",
    price: 75,
    colors: [
      { code: "burlywood", img: "./images/p4-wood.jpg" },
      { code: "turquoise", img: "./images/p4-turquoise.png" },
      { code: "black", img: "./images/p4-black.png" },
      { code: "white", img: "./images/p4-white.png" },
      { code: "purple", img: "./images/p4-purple.png" },
    ],
  },
];

// Store the currently selected product
let choosenProduct = products[0];

/**
 * Update the displayed product info (title, price, image, colors)
 */
function updateProduct(index) {
  choosenProduct = products[index];

  // Update title, price, and main image
  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = choosenProduct.price + "€";
  currentProductImg.src = choosenProduct.colors[0].img;

  // Update available colors
  currentProductColors.forEach((color, i) => {
    const colorData = choosenProduct.colors[i];
    if (colorData) {
      color.style.backgroundColor = colorData.code;
      color.style.display = "inline-block";
    } else {
      color.style.display = "none";
    }
  });

  // Set initial background color
  product.style.backgroundColor = choosenProduct.colors[0].code;
}

// Change product image and background when color is clicked
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    if (choosenProduct.colors[index]) {
      currentProductImg.src = choosenProduct.colors[index].img;
      product.style.backgroundColor = choosenProduct.colors[index].code;
      productDetails.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
    }
  });
});

// Handle slider navigation (menu buttons)
menuButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

// Handle product selection
selectProduct.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateProduct(index);
  });
});

// Initialize with the first product
updateProduct(0);
