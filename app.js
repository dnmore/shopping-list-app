const gridDisplay = document.getElementById("grid");
const configErrorElement = document.querySelector(".config-error");
let btnAddElement = document.getElementById("add-product");
let btnRemoveAllElement = document.getElementById("remove-all");
let userInputDisplay = document.getElementById("userinput");

function addItem() {
  if (userInputDisplay.value == "") {
    configErrorElement.style.display = "block";
  } else {
    const item = document.createElement("li");
    item.innerHTML = userInputDisplay.value;
    item.addEventListener("click", selectBoughtItem);
    const removeBtn = document.createElement("button");
    const removeBtnContent = document.createTextNode("REMOVE");
    removeBtn.appendChild(removeBtnContent);
    removeBtn.addEventListener("click", removeItem);
    gridDisplay.appendChild(item);
    item.appendChild(removeBtn);
    userInputDisplay.value = "";
    configErrorElement.style.display = "none";
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

btnAddElement.addEventListener("click", addItem);
btnRemoveAllElement.addEventListener("click", removeAll);
