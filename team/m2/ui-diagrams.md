# UI Diagrams

## Login Page

![Registration](https://github.com/mykaala/umassmarketplace/blob/e17bc11fdb9ef4d24fb3b20863cfdf21b327cb1f/team/m2/loginpage.png?raw=true)
The login page will be the first screen that users will face when accessing our site. This page is designed so that only UMass Amherst students can access our services so we require a UMass email for authentication. Additionally, a "Forget your password" portion will be included to account for users who don't remember their login information.

**Use case**: A user who wants to access the website logs in by entering their UMass email and password, then clicks "Log In" to gain access to their account.

**M3 Update**: 
![signIn](https://github.com/mykaala/umassmarketplace/blob/main/team/m2/signInM3.jpg)
Log in and Registration pages have been implemented in a single page and users can choose what they want to do using the toggle. This page includes the same navigation bar with the same buttons. By default it is a sign in form which attempts the user to enter their username and password but the user can change it to sign up using a toggle at the top of the form, which will offer some additional text boxes for confirming the password, Venmo ID, and their contact information.
![signUp](https://github.com/mykaala/umassmarketplace/blob/main/team/m2/signUpM3.jpg)


## Registration Page

The registration page will be presented to first time users who do not yet have an account. They will be prompted to enter their Umass email for authentication and be given the option to provide their password for the account.

**Use case**: A first-time user registers by entering their UMass email and choosing a password. After completing registration, they receive a confirmation email and verify their account.

## Product Listing Page

![Home](https://github.com/mykaala/umassmarketplace/blob/e17bc11fdb9ef4d24fb3b20863cfdf21b327cb1f/team/m2/homepage.png?raw=true)
The product listing page will contain a list of products that the user can browse from. There will be a scroll wheel to allow the user to view all the products. Additionally, there will be a pagination included to allow the user to browse through different pages. A filter feature will also be included to help users narrow down their search.

**Use case**: A user browsing the product listing page scrolls through the available products. They use the filter feature to narrow down their options and navigate between pages using pagination to find the desired product.

**M3 Update**: 
![Home](https://github.com/mykaala/umassmarketplace/blob/main/team/m2/homeM3.jpg)
This page is the landing page of the website. It includes a navigation bar which has the name of the website on the top left corner and navigation buttons on the top right. It offers some of the most popular products on the website in the shape of cards. These cards include a photo of the product, its name, price, and a button to view more details about the product which will take the user to the product page when the back-end is implemented.

## Product Detail Page

![Product](https://github.com/mykaala/umassmarketplace/blob/e17bc11fdb9ef4d24fb3b20863cfdf21b327cb1f/team/m2/product.png?raw=true)
The product detail page gives comprehensive information about a specific product, allowing users to make purchasing decisions or view the seller's ratings and information. It also includes images, descriptions or other suggested products.

**Use case**: A student interested in a textbook can view detailed information, see images of the book, check the price, and contact the seller directly if they have questions or wish to negotiate the price.

**M3 Update**: 
![Product](https://github.com/mykaala/umassmarketplace/blob/main/team/m2/productDetailsM3.jpg)
This page also contains the same navigation bar as the other pages mentioned above, it has a bigger picture(s) of the product along with the detailed description, condition, and sellers information in addition to the price and title. It also contains an add to cart button if the user wants to buy the product.

## Post a Product Page

The Post a Product Page enables users to list items for sale on the University Marketplace Clone. The intuitive form guides users through the process of adding a new product, ensuring all necessary information is provided for potential buyers.

**Use case**: A student looking to sell their bicycle will navigate to the Post a Product Page, enters the title "Used Mountain Bike," provides a description, selects the "Outdoors" category, sets a price, specifies the pickup location, uploads photos of the bike, selects "Used" for condition, and clicks "Post" to list the bike for sale.

**M3 Update**: 
![addItem](https://github.com/mykaala/umassmarketplace/blob/main/team/m2/postProductM3.jpg)
It would ask the user to input a title, category, price, description, image, current condition, UMass email, and their users phone number. All entries are checked for proper formatting, and the post button brings the user back to the home page

**Cart and checkout Page added in M3**:
![cart](https://github.com/mykaala/umassmarketplace/blob/main/team/m2/cart%26checkoutM3.jpg)
This page shows a list view of the items the user has in their cart, with their price, quantity, and total based on each item. There is also a cart total cost provided on the right side of page with the Proceed to checkout button. Moreover, there is a bar in the upper half of the page indicating the buying process.
