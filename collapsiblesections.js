
document.addEventListener("DOMContentLoaded", function () {


    let sections = document.querySelectorAll(".collapsible");

    
    sections.forEach(function (section) {
        
        let header = section.querySelector(".collapsible-header");
        let content = section.querySelector(".content");
        let button = section.querySelector(".toggle-btn");

        
        header.addEventListener("click", function () {
            
            let isOpen = content.style.display === "block";

            
            content.style.display = isOpen ? "none" : "block";

            
            button.textContent = isOpen ? "+" : "-";
        });
    });

});