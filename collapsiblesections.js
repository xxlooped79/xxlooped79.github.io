document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".collapsible");


    sections.forEach(section => {
        
        const button = section.querySelector(".toggle-btn");
        const content = section.querySelector(".content");

        button.addEventListener("click", () => {
            section.classList.toggle("active");

            if (section.classList.contains("active")) {
                content.style.display = "block";
                button.textContent = "-";
            } else {
                content.style.display = "none";
                button.textContent = "+";
            }
        });
    });

});