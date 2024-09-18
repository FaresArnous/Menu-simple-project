document.addEventListener("DOMContentLoaded", () => {
  const decreaseButtons = document.querySelectorAll(".decrease");
  const increaseButtons = document.querySelectorAll(".increase");
  const submitButton = document.querySelector("#sub-btn button");

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

  submitButton.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    const order = {};

    items.forEach((item) => {
      const itemName = item.querySelector("h2").textContent;
      const formattedId = itemName.replace(/\s+/g, "-");
      const quantity = document.getElementById(`${formattedId}-quantity`).value;

      if (quantity > 0) {
        order[itemName] = quantity;
      }
    });

    localStorage.setItem("order", JSON.stringify(order));

    alert("Order submitted!");

    console.log("Order Submitted: ", order);
  });
});
