import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
const mainImg = document.getElementById("main-product-img");
const thumbs = document.querySelectorAll(".product-thumb img");

thumbs.forEach((thumb) => {
  thumb.addEventListener("mouseenter", () => {
    mainImg.src = thumb.src;
  });
});

// 數量調整功能
const minusBtn = document.querySelector(".quantity-selector .btn:nth-child(1)");
const plusBtn = document.querySelector(".quantity-selector .btn:nth-child(3)");
const valueSpan = document.querySelector(".quantity-selector .value");

if (minusBtn && plusBtn && valueSpan) {
  let quantity = 1;
  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      valueSpan.textContent = quantity;
    }
  });
  plusBtn.addEventListener("click", () => {
    quantity++;
    valueSpan.textContent = quantity;
  });
}

// 容量選擇功能
const sizeButtons = document.querySelectorAll(".btn-product-size");
sizeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    sizeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
