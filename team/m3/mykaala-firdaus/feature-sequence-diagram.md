# Feature Sequence Diagram: Home Page

## Feature Description

The **Home Page** serves as the main landing page of the website. It includes:

1. A **Navbar** that provides links to different pages of the site
2. A **Product Grid** that dynamically displays a collection of products with their image, name, and price using a JS script for the product grid

---

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant JavaScript

    User->>Browser: Loads the home page (index.html)
    Browser->>JavaScript: Triggers DOMContentLoaded event
    JavaScript->>JavaScript: Fetches product data (local array)
    JavaScript->>Browser: Dynamically generates the product grid
    Browser-->>User: Displays the navbar and product grid
```
