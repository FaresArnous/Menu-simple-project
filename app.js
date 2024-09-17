function updateQuantity(itemName, change) {
  const itemId = itemName.replace(/\s+/g, "-") + "quantity";
  const inputField = document.getElementById(itemId);
  if (inputField) {
    let currentQuantity = parseInt(inputField.value, 10);
    let newQuantity = currentQuantity + change;
    if (newQuantity < 0) {
      newQuantity = 0;
    }
    inputField.value = newQuantity;
  }
}
