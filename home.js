// home.js

const card = document.getElementById("card");
const btn = document.getElementById("enterBtn");

/* 3D mouse tilt effect */
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});

/* reset on leave */
document.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});

/* button shine pulse */
setInterval(() => {
  btn.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 1200,
      easing: "ease-in-out"
    }
  );
}, 4000);

/* click effect */
btn.addEventListener("click", () => {
  btn.textContent = "Opening Soon...";
});