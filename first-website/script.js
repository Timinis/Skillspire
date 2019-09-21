const groceryList = [];
const emptyArea = document.getElementById('list-area');

function rerender() {
  emptyArea.innerHTML = '';
  for (let i = 0; i < groceryList.length; i++) {
    const listContainer = document.createElement('div');
    const listItem = document.createElement('p');
    listItem.textContent = groceryList[i];
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.onclick = deleteItem;
    deleteButton.name = groceryList[i];
    listContainer.appendChild(listItem);
    listContainer.appendChild(deleteButton);
    emptyArea.appendChild(listContainer);
  }
}

function submitInput(event) {
  event.preventDefault();
  const inputNode = document.getElementById('inputfield');
  const fieldName = document.getElementById('name');

  const userInput = inputNode.value;
  const name = fieldName.value;
  groceryList.push(userInput);
  groceryList.push(name);
  inputNode.value = '';
  fieldName.value = '';
  rerender();
}

const button = document.getElementById('submitbutton');
button.onclick = submitInput;

//Button is missing a click event

function deleteItem(event) {
  event.preventDefault();
  const buttonValue = event.srcElement.name;
  for (let i = 0; i < groceryList.length; i++) {
    if (buttonValue === groceryList[i]) {
      groceryList.splice(i, 1);
    }
  }
  rerender();
}
