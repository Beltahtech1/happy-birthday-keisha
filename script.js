function checkBirthday() {
  const input = document.getElementById("birthdayInput").value;
  if (input === "2025-06-05") {
    document.getElementById("verification").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    startCountdown();
  } else {
    document.getElementById("wishSection").classList.remove("hidden");
  }
}
function playBackgroundVideo() {
  const bgVideo = document.querySelector("#bgVideo iframe");
  bgVideo.src = "https://www.youtube.com/embed/ho08YLYDM88?autoplay=1&mute=1&loop=1&playlist=ho08YLYDM88&controls=0&showinfo=0&modestbranding=1";
  document.getElementById("bgVideo").classList.remove("hidden");
}

function checkBirthday() {
  const input = document.getElementById("birthdayInput").value;
  if (input === "2025-06-05") {
    document.getElementById("verification").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    startCountdown();
    playBackgroundVideo();
  } else {
    document.getElementById("wishSection").classList.remove("hidden");
  }
}

function checkWish() {
  const wish = document.getElementById("wishInput").value;
  if (wish.length === 100) {
    document.getElementById("verification").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    startCountdown();
    playBackgroundVideo();
  } else {
    alert("Your message must be exactly 100 characters!");
  }
}

function checkWish() {
  const wish = document.getElementById("wishInput").value;
  if (wish.length === 100) {
    document.getElementById("verification").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    startCountdown();
  } else {
    alert("Your message must be exactly 100 characters!");
  }
}

function startCountdown() {
  const countdown = document.getElementById("countdown");
  const targetDate = new Date("June 5, 2026 00:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `Keisha turns ONE in ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(interval);
      countdown.innerHTML = "🎉 Happy Birthday, Keisha!";
      launchConfetti();
    }
  }, 1000);
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background = `hsl(${Math.random()*360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
