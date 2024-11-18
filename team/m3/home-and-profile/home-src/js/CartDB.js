export class CartDB {
	constructor(dbName) {
		this.dbName = dbName;
	}

	// Method to open the database
	async openDatabase() {
		return new Promise((resolve, reject) => {
			if (this.dbName === '') {
				reject('Database name cannot be empty.');
				return;
			}

			let request = indexedDB.open(this.dbName, 1);
			request.onupgradeneeded = function (event) {
				let db = event.target.result;
				if (!db.objectStoreNames.contains('cart')) {
					db.createObjectStore('cart', { keyPath: 'id' });
				}
			};
			request.onsuccess = function (event) {
				resolve(event.target.result);
			};
			request.onerror = function (event) {
				reject(event.target.error);
			};
		});
	}

	// Method to add item to the cart
	async addItemToCart(item) {
		const db = await this.openDatabase();
		const tx = db.transaction('cart', 'readwrite');
		const store = tx.objectStore('cart');
		store.add(item);

		return new Promise((resolve, reject) => {
			tx.oncomplete = function () {
				resolve('Item added successfully!');
			};
			tx.onerror = function () {
				reject('Failed to add task.');
			};
		});
	}

	// Method to retrieve all items from the cart
	async getItemsFromCart() {
		const db = await this.openDatabase();
		const tx = db.transaction('cart', 'readonly');
		const store = tx.objectStore('cart');

		return new Promise((resolve, reject) => {
			let request = store.getAll();
			request.onsuccess = function () {
				resolve(request.result);
			};
			request.onerror = function () {
				reject('Failed to retrieve items from cart.');
			};
		});
	}

	// Method to remove the specified item from the cart
	async removeItemFromCart(itemID) {
		const db = await this.openDatabase();
		const tx = db.transaction('cart', 'readwrite');
		const store = tx.objectStore('cart');
		store.delete(itemID);

		return new Promise((resolve, reject) => {
			tx.oncomplete = function () {
				resolve('Item removed from cart successfully!');
			};
			tx.onerror = function () {
				reject('Failed to remove item from cart.');
			};
		});
	}
}
