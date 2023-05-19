const gridDisplay = document.getElementById("grid");
const overlayEmptyFieldElement = document.querySelector(".overlay");
let btnCloseOverlay = document.querySelector(".close");
let btnAddElement = document.getElementById("add-product");
let btnRemoveAllElement = document.getElementById("remove-all");
let userInputDisplay = document.getElementById("userinput");

function addItem() {
  if (userInputDisplay.value == "") {
    overlayEmptyFieldElement.style.display = "block";
  } else {
    const item = document.createElement("li");
    item.innerHTML = userInputDisplay.value;
    item.addEventListener("click", selectBoughtItem);
    const removeBtn = document.createElement("button");
    const removeBtnContent = document.createTextNode("Remove");
    removeBtn.appendChild(removeBtnContent);
    removeBtn.addEventListener("click", removeItem);
    gridDisplay.appendChild(item);
    item.appendChild(removeBtn);
    userInputDisplay.value = "";
  }
}

function selectBoughtItem() {
  if (this.classList.contains("line")) {
    this.classList.remove("line");
  } else {
    this.classList.add("line");
  }
}

function removeAll() {
  for (items of document.querySelectorAll("li")) {
    items.remove();
  }
}

function removeItem() {
  this.parentElement.remove();
}

function closeOverlay() {
  overlayEmptyFieldElement.style.display = "none";
}

btnAddElement.addEventListener("click", addItem);
btnRemoveAllElement.addEventListener("click", removeAll);
btnCloseOverlay.addEventListener("click", closeOverlay);
