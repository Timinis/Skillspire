const groceryList = [];
const emptyArea = document.getElementById('list-area');

function submitInput(event) {
  event.preventDefault();
  const inputNode = document.getElementById('inputfield');
  const fieldName = document.getElementById('name');
  emptyArea.innerHTML = '';
  const userInput = inputNode.value;
  const name = fieldName.value;
  groceryList.push(userInput);
  groceryList.push(name);
  inputNode.value = '';
  fieldName.value = '';

  for (let i = 0; i < groceryList.length; i++) {
    const listContainer = document.createElement('div');
    const listItem = document.createElement('p');
    listItem.textContent = groceryList[i];
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    listContainer.appendChild(listItem);
    listContainer.appendChild(deleteButton);
    emptyArea.appendChild(listContainer);
  }
}

const button = document.getElementById('submitbutton');
button.onclick = submitInput;
