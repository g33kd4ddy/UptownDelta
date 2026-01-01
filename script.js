function showSection(id){
document.querySelectorAll(".content-section").forEach(s=>s.classList.remove("visible"));
document.getElementById(id).classList.add("visible");
window.scrollTo({top:0,behavior:"smooth"});
}