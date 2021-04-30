{
    const welcome = () => {
        console.log("Hello world created by Krzysiu. Nice to be here");
    }

    const toogleContactData = (contactButton) => {
        const contactData = document.querySelector(".js-section__contactData");
        contactData.classList.toggle("section__contactData--show");
        contactButton.innerText = contactData.classList.contains("section__contactData--show") ? "Ukryj" : "Kontakt";
    }

    const init = () => {
        const contactButton = document.querySelector(".js-section__contactButton");
        contactButton.addEventListener("click", () => {
            toogleContactData(contactButton)
        });
        welcome()
    }

    init();
}