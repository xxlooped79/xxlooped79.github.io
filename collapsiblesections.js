document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".collapsible");

    sections.forEach(section => {
        const header = section.querySelector(".collapsible-header");
        const content = section.querySelector(".content");
        const button = section.querySelector(".toggle-btn");

        header.addEventListener("click", () => {
            const isOpen = content.style.display === "block";

            content.style.display = isOpen ? "none" : "block";
            button.textContent = isOpen ? "+" : "-";
        });
    });

});