// Кнопки "Купити"
const buyBtns = document.querySelectorAll(".buy-btn");
const paymentBox = document.getElementById("paymentBox");
const thankBox = document.getElementById("thankBox");

// При натисканні "Купити" → показати оплату
buyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    paymentBox.classList.remove("hidden");
    thankBox.classList.add("hidden");
  });
});

// Оплата
document.getElementById("payBtn").addEventListener("click", () => {
  const card = document.getElementById("cardNumber").value.trim();

  if (card === "") {
    alert("Введіть номер картки!");
    return;
  }

  // просто показуємо повідомлення
  paymentBox.classList.add("hidden");
  thankBox.classList.remove("hidden");
});
