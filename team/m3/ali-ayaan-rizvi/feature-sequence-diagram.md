# Feature Sequence Diagram: Product Details Page

## Feature Description

The product details feature is designed to provide users with an informative and interactive view of a specific product. This feature displays the product's main image along with a gallery of thumbnails to show different perspectives. It includes essential product details such as the title, price, an in-depth description, condition, seller, and brand information. Additionally, the page features an "Add to Cart" button that users can click to either add or remove the product from their cart. This dynamic interaction updates the button's text and style to reflect the product's status in the cart, enhancing the user's shopping experience by providing clear, real-time feedback.

## Sequence Diagram
    participant User
    participant WebPage as Product Details Page
    participant Server as Server

    User->>WebPage: Load Product Details Page
    WebPage->>Server: Request product data and images
    Server-->>WebPage: Send product data and images
    WebPage-->>User: Display product images, details, and "Add to Cart" button
    
    User->>WebPage: Click "Add to Cart" button
    WebPage->>WebPage: Check button state
    alt Button is not added to cart
        WebPage->>WebPage: Change button text to "Remove from Cart"
        WebPage->>WebPage: Add CSS class 'added-to-cart'
    else Button is already added to cart
        WebPage->>WebPage: Change button text to "Add to Cart"
        WebPage->>WebPage: Remove CSS class 'added-to-cart'
    end
    WebPage-->>User: Update button state on the page