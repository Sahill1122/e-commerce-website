const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});




const categoryFilter = document.querySelector("#categoryFilter");

const products = document.querySelectorAll(".items");

categoryFilter.addEventListener("change", () => {

    const selectedCategory = categoryFilter.value;

    products.forEach(product => {

        if (
            selectedCategory === "all" ||
            product.dataset.category === selectedCategory
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});