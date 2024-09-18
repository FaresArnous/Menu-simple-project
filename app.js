document.addEventListener("DOMContentLoaded", () => {
  const decreaseButtons = document.querySelectorAll(".decrease");
  const increaseButtons = document.querySelectorAll(".increase");
  const submitButton = document.querySelector("#sub-btn button");

  function updateQuantity(itemName, change) {
    const formattedId = itemName.replace(/\s+/g, "-");
    const inputElement = document.getElementById(`${formattedId}-quantity`);

    if (inputElement) {
      let currentValue = parseInt(inputElement.value, 10);

      currentValue += change;
      inputElement.value = Math.max(currentValue, 0);
    } else {
      console.error(
        `Input element with ID '${formattedId}-quantity' not found.`
      );
    }
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
      const quantityElement = document.getElementById(
        `${formattedId}-quantity`
      );

      if (quantityElement) {
        const quantity = quantityElement.value;

        if (quantity > 0) {
          order[itemName] = quantity;
        }
      } else {
        console.error(`Quantity input element for '${itemName}' not found.`);
      }
    });

    localStorage.setItem("order", JSON.stringify(order));

    alert("Order submitted!");

    console.log("Order Submitted: ", order);
  });
});
