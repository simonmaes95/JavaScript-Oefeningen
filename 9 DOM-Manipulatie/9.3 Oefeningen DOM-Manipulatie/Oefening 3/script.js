let addItemButton = document.getElementById('add-item');
let groceryList = document.getElementsByClassName('grocery-list')[0];

if (addItemButton && groceryList) {
    addItemButton.addEventListener('click', () => {
        let newItem = document.createElement('li');
        newItem.textContent = 'Oranges';
        groceryList.appendChild(newItem);
    });
}