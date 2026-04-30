function toggleMenu() {
const menu = document.getElementById("menu");
menu.style.display =
menu.style.display === "block" ? "none" : "block";
}

/* Make cards fully clickable */
document.querySelectorAll(".card").forEach(card => {
card.addEventListener("click", () => {
const link = card.querySelector("a");
if (link) {
window.location.href = link.href;
}
});
});

/* Close menu when a link is clicked */
document.querySelectorAll("#menu a").forEach(link => {
link.addEventListener("click", () => {
document.getElementById("menu").style.display = "none";
});
});
const images = document.querySelectorAll(".note-img");
const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll(".note-img");
const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");

let currentIndex = 0;

images.forEach((img, index) => {
img.addEventListener("click", () => {
currentIndex = index;
showImage();
viewer.style.display = "flex";
});
});

function showImage() {
viewerImg.src = images[currentIndex].src;
}

viewer.addEventListener("click", (e) => {
if (e.target === viewer) {
viewer.style.display = "none";
}
});

document.getElementById("nextBtn").onclick = (e) => {
e.stopPropagation();
currentIndex = (currentIndex + 1) % images.length;
showImage();
};

document.getElementById("prevBtn").onclick = (e) => {
e.stopPropagation();
currentIndex = (currentIndex - 1 + images.length) % images.length;
showImage();
};

});




