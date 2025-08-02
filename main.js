const steps = [
  "1. Оберіть тур, який вам до вподоби.",
  "2. Зв'яжіться з нами по телефону або електронною поштою.",
  "3. Узгодьте деталі подорожі та дати.",
  "4. Внесіть передоплату 30% на банківську картку або рахунок.",
  "5. Отримайте підтвердження бронювання.",
  "6. Приїдьте та оплатіть залишок суми на місці.",
  "Готово! Гарної подорожі :)"
];

let currentStep = 0;

document.addEventListener("DOMContentLoaded", () => {
  const stepText = document.getElementById("step-text");
  const nextBtn = document.getElementById("next-step");

  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length) {
      stepText.textContent = steps[currentStep];
      currentStep++;
    } else {
      stepText.textContent = "Схему завершено.";
    }
  });
});