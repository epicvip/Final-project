let total = 0;
let cart = [];

function buy(productName) {
  const priceMap = {
    'iPhone 15 Pro': 40000,
    'Samsung Galaxy S24': 38500,
    'Xiaomi 14 Ultra': 32000,
    'Google Pixel 8 Pro': 34000,
    'Huawei P60 Pro': 28000,
    'OnePlus 12R': 22000,
    'Oppo Find X7 Ultra': 26500,
    'Sony Xperia 1 V': 29000,
    'iPhone 14 Pro': 35000,
    'Samsung Galaxy Z Flip5': 42000,
    'Xiaomi 13 Pro': 27000,
    'Realme GT5 Pro': 19500,
    'Asus ROG Phone 7': 36000,
    'Motorola Edge 40 Pro': 23000,
    'Nokia X30 5G': 15000,
    'Vivo X100 Pro': 31000
  };

  if (!priceMap[productName]) {
    alert("Ціна для цього товару не вказана.");
    return;
  }

  cart.push(productName);
  total += priceMap[productName];
  document.getElementById("payBtn").innerText = `Оплатити ${total.toLocaleString()} грн`;
}

document.addEventListener("DOMContentLoaded", function () {
  const payBtn = document.getElementById("payBtn");

  if (payBtn) {
    payBtn.addEventListener("click", function () {
      if (total === 0) {
        alert("Ваш кошик порожній. Спочатку додайте товар.");
        return;
      }

      alert(
        `Дякуємо за покупку!\n\nВи оплатили ${total.toLocaleString()} грн за такі товари:\n\n- ${cart.join(
          "\n- "
        )}`
      );

      total = 0;
      cart = [];
      document.getElementById("payBtn").innerText = `Оплатити 0 грн`;
    });
  }
});