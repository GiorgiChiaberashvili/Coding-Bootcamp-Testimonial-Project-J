document.addEventListener("DOMContentLoaded", function () {
    const prevIcon = document.getElementById("prev_icon");
    const nextIcon = document.getElementById("next_icon");
    const tanyaSlide = document.getElementById("tanya");
    const johnSlide = document.getElementById("john");
    const tanyaImage = document.getElementById("slide_tanya_image");
    const johnImage = document.getElementById("slide_john_image");

    function hideElement(element) {
        element.style.opacity = "0";
        element.style.display = "none";
    }

    function showElement(element) {
        element.style.display = "block";
        setTimeout(() => {
            element.style.opacity = "1";
        }, 100); // 
    }

    function toggleSlide() {
        if (tanyaSlide.style.display === "block") {
            hideElement(tanyaSlide);
            hideElement(tanyaImage);

            showElement(johnSlide);
            showElement(johnImage);

        } else {
            hideElement(johnSlide);
            hideElement(johnImage);

            showElement(tanyaSlide);
            showElement(tanyaImage);

        }
    }

    // Initially, show Tanya's slide and image
    showElement(tanyaSlide);
    showElement(tanyaImage);
    hideElement(johnSlide);
    hideElement(johnImage);

    // Event listener for the "Next" button
    nextIcon.addEventListener("click", toggleSlide);

    // Event listener for the "Previous" button
    prevIcon.addEventListener("click", toggleSlide);
});
