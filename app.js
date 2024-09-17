document.addEventListener("DOMContentLoaded", () => {
  const decreaseButtons = document.querySelectorAll(".decrease");
  const increaseButtons = document.querySelectorAll(".increase");

  function updateQuantity(itemName, change) {
    const formattedId = itemName.replace(/\s+/g, "-");
    const inputeElement = document.getElementById(`${formattedId}-quantity`);

    let currentValue = parseInt(inputeElement.value, 10);

    currentValue += change;
    inputeElement.value = Math.max(currentValue, 0);
  }
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemName = button.getAttribute("data-item");
      updateQuantity(itemName, -1);
    });
  });
  increaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemName = button.getAttribute("data-item");
      updateQuantity(itemName, 1);
    });
  });
});
