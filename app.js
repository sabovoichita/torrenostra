// ========== SELECT DOM ELEMENTS ==========
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

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// ========== PRODUCT DATA ==========
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

let choosenProduct = products[0];

// ========== FUNCTION: Update Product Display ==========
function updateProduct(index) {
  choosenProduct = products[index];

  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = choosenProduct.price + "€";
  currentProductImg.src = choosenProduct.colors[0].img;

  updateColorOptions();
  product.style.backgroundColor = choosenProduct.colors[0].code;
  resetSizeSelection();
}

// ========== FUNCTION: Update Color Buttons ==========
function updateColorOptions() {
  currentProductColors.forEach((colorElement, i) => {
    const colorData = choosenProduct.colors[i];
    if (colorData) {
      colorElement.style.backgroundColor = colorData.code;
      colorElement.style.display = "inline-block";
    } else {
      colorElement.style.display = "none";
    }
  });
}

// ========== FUNCTION: Handle Color Click ==========
function setupColorEvents() {
  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      if (choosenProduct.colors[index]) {
        currentProductImg.src = choosenProduct.colors[index].img;
        product.style.backgroundColor = choosenProduct.colors[index].code;
        productDetails.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
      }
    });
  });
}

// ========== FUNCTION: Handle Size Click ==========
function setupSizeEvents() {
  currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
      resetSizeSelection();
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
}

// ========== FUNCTION: Reset Sizes ==========
function resetSizeSelection() {
  currentProductSizes.forEach((s) => {
    s.style.backgroundColor = "white";
    s.style.color = "black";
  });
}

// ========== FUNCTION: Setup Slider Buttons ==========
function setupSliderEvents() {
  menuButtons.forEach((item, index) => {
    item.addEventListener("click", () => {
      wrapper.style.transform = `translateX(${-50 * index}vw)`;
    });
  });
}

// ========== FUNCTION: Setup Product Selector Buttons ==========
function setupProductSelection() {
  selectProduct.forEach((item, index) => {
    item.addEventListener("click", () => {
      updateProduct(index);
    });
  });
}

// ========== FUNCTION: Close/Open Payment Modal ==========
function openPayment() {
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
}
function closePayment() {
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
}

// ========== FUNCTION: SetupImageOverlay ==========
function setupImageOverlay() {
  const overlay = document.getElementById("imageOverlay");
  const fullImage = document.getElementById("fullImage");
  const closeBtn = document.getElementById("closeBtn");
  const galleryImages = document.querySelectorAll(".galleryImg");
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      fullImage.src = img.src;
      overlay.style.display = "flex";
      console.log("image clicked");
    });
  });
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  });
}

// ========== FUNCTION: SliderImage ==========

function sliderImage() {
  const sliderWrapper = document.querySelector(".sliderWrapper");
  const rightArrow = document.querySelector(".arrowIcon.right");
  const leftArrow = document.querySelector(".arrowIcon.left");
  const slides = document.querySelectorAll(".sliderItem");

  let currentIndex = 0;

  function updateSlider() {
    sliderWrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
  }

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });
}

// ========== FUNCTION: lightDarkMode ==========
function lightDarkMode() {
  const toggle = document.querySelector(".toggle");
  const body = document.body;

  // Set default mode
  body.classList.add("dark");

  toggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light");
      toggle.classList.add("active");
    } else {
      body.classList.replace("light", "dark");
      toggle.classList.remove("active");
    }
  });
}

// lightDarkMode();

// ========== FUNCTION: Init ==========

function init() {
  setupColorEvents();
  setupSizeEvents();
  setupSliderEvents();
  setupProductSelection();
  openPayment();
  closePayment();
  updateProduct(0);
  setupImageOverlay();
  sliderImage();
}
lightDarkMode();

// ========== RUN ==========
init();
