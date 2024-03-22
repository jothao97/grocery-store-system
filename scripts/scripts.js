// declaring an inventory list array so later we can push new inventory into this array
const inventoryList = [
    {name: "strawberries", quantity: 20, price: 3},
    {name: "blueberry cheese", quantity: 10, price: 8},
    {name: "proscuitto", quantity: 1, price: 10},
    {name: "chapstick", quantity: 2, price: 2},
    {name: "lettuce", quantity: 8, price: 4}
];

// make inventory class
class InventoryList {
    constructor(name, quantity, price){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    displayInfo(){
        return `${this.name}, Quantity: ${this.quantity}, Price: $${this.price}`;
    }
}
// function to display the inventory list
function displayInventoryList(inventoryArray){
    const inventoryElement = document.getElementById('inventory-list');
    inventoryElement.innerHTML = '<h4> Inventory List: </h4>';
    const list = document.createElement('ul');
    inventoryArray.forEach(inventoryItem => {
        const listItem = document.createElement('li');
            listItem.textContent = `${inventoryItem.name}, Quantity: ${inventoryItem.quanity}, Price: $${inventoryItem.price};`
    });
    inventoryElement.appendChild(list)
};



// declare an array that displays the low stocked items
const lowStockList = [];

// a function that displays items when there are less than 3 in stock
function calculateLessThanThree(inventoryArray){
    if (inventoryList(quanity < 3)){
        lowStockList.push();
    }
}

// function to displays the LOW inventory list
function displayLowInventory(inventoryArray){
    const lowInventoryElement = document.getElementsById('low-stock-result');
    lowInventoryElement.innerHTML = '<h4> LowInventory List: </h4>';
    const list = document.createElement('ul');
    inventoryArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}, Quantity: ${item.quanity}, Price: $${item.price}`;
        list.appendChild(listItem);
    });
    lowInventoryElement.appendChild(list);
}

//creating event listener for DOM to laod
document.addEventListener('DOMContentLoaded'), () => {
    const displayArrayAsList = (array, elementId) => {
        const listElement = document.getElementById(elementId);
        listElement.innerHTML = '';
        array.forEach(item => {
            const listItem = document.createElement('section');
            listItem.textcontent = item.displayInfo ? item.displayInfo() : item;
            listElement.appendChild(listItem);
        })

    }
}

document.getElementById('low-stock-result').innerhtml = `<h4> Low Stock Alert: ${calculateLessThanThree(inventoryList)}</h4>`
displayLowInventory(inventoryList);

document.getElementById('add-new-inventory').onclick = () => {
    const itemName = document.getElementById('item-name-input').value;
    const quanity = parseFloat(document.getElementById('quantity-input')).value;
    const price = parseFloat(document.getElementById('price-input')).value;
    const inventory = new inventoryList(name, quanity, price);
    inventoryList.push(inventory);

    displayArrayAsList(inventoryList, 'inventory-list-result');
}


