document.addEventListener("DOMContentLoaded", () => {
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");

  if (!progressFill || !progressText) return;

  let value = 72;

  const animateProgress = () => {
    progressFill.style.width = `${value}%`;
    progressText.textContent = `${value}%`;

    value += 1;
    if (value > 92) value = 72;
  };

  setInterval(animateProgress, 1900);
});
