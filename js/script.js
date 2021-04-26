let contactButton = document.querySelector(".js-section__contactButton");
let contactData = document.querySelector(".js-section__contactData");
contactButton.addEventListener("click", () => {
    contactData.classList.toggle("section__contactData--show");
    contactButton.innerText = contactData.classList.contains("section__contactData--show") ? "Ukryj" : "Kontakt";
});

console.log("Hello world created by Krzysiu. Nice to be here");