import { CartDB } from '../home-and-profile/home-src/js/CartDB.js';

document.addEventListener("DOMContentLoaded", function () {
    const cartDB = new CartDB("myCartDB");

    async function populateCartTable() {
        try {
            const items = await cartDB.getItemsFromCart();  
            console.log(items);

            const tableBody = document.querySelector("#table-body");
            tableBody.innerHTML = "";  

            let subtotal = 0;
            let total = 0;

            if (items.length === 0) {
                const emptyRow = document.createElement("tr");
                const emptyMessage = document.createElement("td");
                emptyMessage.colSpan = 5;  
                emptyMessage.textContent = "Your cart is empty!";
                emptyRow.appendChild(emptyMessage);
                tableBody.appendChild(emptyRow);
            } else {
                items.forEach(item => {
                    const row = document.createElement("tr");

                    const deleteCell = document.createElement("td");
                    const deleteButton = document.createElement("button");

                    deleteButton.innerHTML = '<span class="material-symbols-outlined">close</span>';
                    deleteButton.addEventListener("click", () => deleteItemFromCart(item.id));
                    deleteCell.appendChild(deleteButton);
                    row.appendChild(deleteCell);

                    const productCell = document.createElement("td");
                    productCell.textContent = item.name;
                    row.appendChild(productCell);

                    const priceCell = document.createElement("td");
                    priceCell.textContent = `$${item.price.toFixed(2)}`;
                    row.appendChild(priceCell);

                    const amountCell = document.createElement("td");
                    amountCell.textContent = item.amount;
                    row.appendChild(amountCell);

                    const subtotalCell = document.createElement("td");
                    const itemSubtotal = item.price * item.amount;
                    subtotalCell.textContent = `$${itemSubtotal.toFixed(2)}`;
                    row.appendChild(subtotalCell);

                    tableBody.appendChild(row);

                    subtotal += itemSubtotal;
                    total += itemSubtotal;
                });
            }

            updateCartInfo(subtotal, total);

        } catch (error) {
            console.error("Error loading cart items:", error);
        }
    }

    // DELETE /cart endpoint to handle removing products from the cart
    async function deleteItemFromCart(itemIDs) { 
        try {
            // First, remove each item from the cart in the local database (client-side cartDB)
            for (let i = 0; i < itemIDs.length; i++) {
                await cartDB.removeItemFromCart(itemIDs[i]);
            }
    
            const response = await fetch('/api/cart', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',  
                },
                body: JSON.stringify({ productIds: itemIDs }),  // Send the array of item IDs to delete
            });
    
            const data = await response.json();  
    
            if (response.ok) {
                console.log(data.message); // Log success message from server
                populateCartTable();  // Update the table after the deletion
            } else {
                console.error('Error:', data.error); // Handle error if deletion fails
            }
        } catch (error) {
            console.error("Error removing item from cart:", error); // Handle client-side errors
        }
    }
    
    // Function to clear the entire cart (for checkout)
    async function proceedToCheckout() {
        try {
            const items = await cartDB.getItemsFromCart(); // Get all the items in the cart
    
            for (const item of items) {
                await cartDB.removeItemFromCart(item.id);
            }
    
            populateCartTable(); 
            alert("Order confirmed! Check your email for details.")
        } catch (error) {
            console.error("Error clearing the cart:", error);
        }
    }



    function updateCartInfo(subtotal, total) {
        const subtotalElement = document.querySelector("#subtotal .value");
        const totalElement = document.querySelector("#total .value");

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    async function addTestItems() {
        const testItems = [
            { id: 1, name: "Product A", price: 10.99, amount: 1 },
            { id: 2, name: "Product B", price: 5.49, amount: 1 },
            { id: 3, name: "Product C", price: 15.75, amount: 1 },
            { id: 4, name: "Product D", price: 7.99, amount: 1 },
            { id: 5, name: "Product E", price: 12.50, amount: 1 },
            { id: 6, name: "Product F", price: 16.50, amount: 1 },
        ];

        for (const item of testItems) {
            try {
                await cartDB.addItemToCart(item);
                console.log(`Added ${item.name} to cart!`);
            } catch (error) {
                console.error(`Error adding ${item.name} to cart:`, error);
            }
        }

        populateCartTable();  
    }

    addTestItems();

    populateCartTable();

    const step1Button = document.querySelector(".step-1");  
    if (step1Button) {
        step1Button.addEventListener("click", () => {
            window.location.href = "../home-and-profile/home-src/home.html";
        });
    }

    const confirmOrderButton = document.querySelector("#button"); 
    if (confirmOrderButton) {
        confirmOrderButton.addEventListener("click", proceedToCheckout); 
    }
});
