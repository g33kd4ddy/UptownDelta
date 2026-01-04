function showSection(id){
document.querySelectorAll(".content-section").forEach(s=>s.classList.remove("visible"));
document.getElementById(id).classList.add("visible");
window.scrollTo({top:0,behavior:"smooth"});
}
const image = document.getElementById("responsiveImage");
    // Trigger fade-in once the image is fully loaded
    if (image.complete) {
        image.classList.add("fade-in");
    } else {
        image.addEventListener("load", () => {
            image.classList.add("fade-in");
        });
    }
