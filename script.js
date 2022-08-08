const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  accordion.querySelector(".accordion_btn").addEventListener("click", function() {    
    accordion.classList.toggle("accordion--aberto");
  });
});