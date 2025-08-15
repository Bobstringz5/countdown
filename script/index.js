let countdownDate = new Date("2025-12-31T23:59:59").getTime(); // default

function setEventDate() {
  const input = document.getElementById("eventDate").value;
  if (input) {
    countdownDate = new Date(input).getTime();
  }
}

function updateFlip(id, newValue) {
  const el = document.getElementById(id);
  if (el.innerText !== newValue.toString()) {
    el.classList.remove("animate"); // reset animation
    void el.offsetWidth; // reflow hack to restart CSS animation
    el.innerText = newValue;
    el.classList.add("animate");
  }
}

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = " Event Started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateFlip("days", days);
  updateFlip("hours", hours);
  updateFlip("minutes", minutes);
  updateFlip("seconds", seconds);
}, 1000);
