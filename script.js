const cards = document.querySelectorAll(".exam-card, .feature-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(0, 229, 255, 0.14),
      rgba(255, 255, 255, 0.06) 38%)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255, 255, 255, 0.06)";
  });
});
