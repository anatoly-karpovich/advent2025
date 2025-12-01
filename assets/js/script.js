const today = new Date();
const currentDay = today.getDate(); // 1 декабря → 1

document.querySelectorAll(".gift-box").forEach((box) => {
  const day = parseInt(box.dataset.day);

  if (day <= currentDay) {
    // День открыт
    box.addEventListener("click", () => {
      window.location.href = `days/day${day}.html`;
    });
  } else {
    // День ещё закрыт
    box.classList.add("gift-disabled");
  }
});
