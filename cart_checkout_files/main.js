import { CartDB } from '../src/js/CartDB.js';

document.addEventListener("DOMContentLoaded", function () {
    const cartDB = new CartDB("myCartDB");  // Instantiate the CartDB

    // Function to populate the cart table on page load
    async function populateCartTable() {
        try {
            const items = await cartDB.getItemsFromCart();  // Get items from IndexedDB
            console.log(items);

            const tableBody = document.querySelector("#table-body");
            tableBody.innerHTML = "";  // Clear any existing rows

            // If there are no items in the cart, display an empty message
            if (items.length === 0) {
                const emptyRow = document.createElement("tr");
                const emptyMessage = document.createElement("td");
                emptyMessage.colSpan = 5;  // Make it span all columns
                emptyMessage.textContent = "Your cart is empty!";
                emptyRow.appendChild(emptyMessage);
                tableBody.appendChild(emptyRow);
            } else {
                // If there are items, populate the table
                items.forEach(item => {
                    const row = document.createElement("tr");

                    // First column with the delete icon
                    const deleteCell = document.createElement("td");
                    const deleteButton = document.createElement("button");
                    

                    // Use the "close" icon from Material Symbols
                    deleteButton.innerHTML = '<span class="material-symbols-outlined">close</span>';
                    deleteButton.addEventListener("click", () => deleteItemFromCart(item.id));
                    deleteCell.appendChild(deleteButton);
                    row.appendChild(deleteCell);


                    // Product name column
                    const productCell = document.createElement("td");
                    productCell.textContent = item.name;
                    row.appendChild(productCell);

                    // Price column
                    const priceCell = document.createElement("td");
                    priceCell.textContent = `$${item.price.toFixed(2)}`;
                    row.appendChild(priceCell);

                    // Amount column
                    const amountCell = document.createElement("td");
                    amountCell.textContent = item.amount;
                    row.appendChild(amountCell);

                    // Subtotal column
                    const subtotalCell = document.createElement("td");
                    subtotalCell.textContent = `$${(item.price * item.amount).toFixed(2)}`;
                    row.appendChild(subtotalCell);

                    tableBody.appendChild(row);  // Append the row to the table body
                });
            }
        } catch (error) {
            console.error("Error loading cart items:", error);
        }
    }

    // Function to delete item from cart
    async function deleteItemFromCart(itemID) {
        try {
            await cartDB.removeItemFromCart(itemID);
            alert("Item removed from cart!");
            populateCartTable();
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    }

    // Example of adding a new item to the cart (for testing purposes)
    async function addTestItem() {
        const testItem = {
            id: 1,
            name: "Test Product",
            price: 20,
            amount: 2
        };

        await cartDB.addItemToCart(testItem);
        console.log("Test item added to cart!");
    }

    // Add test item to the cart (can be disabled by commenting out this line)
    addTestItem();

    // Initialize the cart table
    populateCartTable();
});
