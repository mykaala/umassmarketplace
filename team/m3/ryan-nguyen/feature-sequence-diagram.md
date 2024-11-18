```mermaid
sequenceDiagram
  participant User
  participant Browser
  participant IndexedDB
  participant UI

  User->>Browser: Adds item to cart
  Browser->>IndexedDB: Save item to database
  User->>Browser: Loads cart page
  Browser->>IndexedDB: Fetch saved cart items
  IndexedDB-->>Browser: Return fetched items
  Browser->>UI: Display cart items in table
  User->>Browser: Removes item from cart
  Browser->>IndexedDB: Delete item from database
  Browser->>UI: Update cart table
```
