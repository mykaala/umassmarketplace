# Overview

## 1. User Profile
**Description:** Stores personal information about each user, including login details and preferences.

**Attributes:**
- `user_id` (string): A unique identifier for each user.
- `name` (string): The full name of the user.
- `email` (string): The user’s email address.
- `password` (string): A hashed version of the user's password.
- `university_affiliation` (string): Indicates whether the user is a student, staff, or faculty member.
- `created_at` (timestamp): The date and time when the account was created.
- `updated_at` (timestamp): The last time the user’s profile was updated.

**Data Source:** User-input data during registration and profile updates.

**Front-End Interaction with IndexedDB:**

The front-end uses a class to manage IndexedDB operations for user profiles. This includes:
- Stores cart items.
- Retrieving user profiles from IndexedDB.
- Updating contact information directly in the database.



---

## 2. Listing
**Description:** Represents a product or service posted by users in the marketplace.

**Attributes:**
- `listing_id` (string): A unique identifier for each listing.
- `user_id` (string): The unique identifier for the user who created the listing.
- `title` (string): The title or name of the item or service.
- `description` (string): A brief description of the product or service.
- `price` (float): The price set for the item or service.
- `category` (string): The category of the listing (e.g., textbooks, electronics, housing).
- `condition` (string): The condition of the item (e.g., new, used).
- `created_at` (timestamp): The date and time when the listing was created.
- `updated_at` (timestamp): The last time the listing was updated.

**Data Source:** User-input data when creating or updating a listing.

---

## 3. Transaction
**Description:** Tracks the transactions between buyers and sellers within the marketplace.

**Attributes:**
- `transaction_id` (string): A unique identifier for each transaction.
- `listing_id` (string): The unique identifier for the listing involved in the transaction.
- `buyer_id` (string): The unique identifier for the user who made the purchase.
- `seller_id` (string): The unique identifier for the user who posted the listing.
- `price` (float): The final agreed-upon price for the item or service.
- `transaction_date` (date): The date the transaction took place.

**Data Source:** System-generated when a transaction is completed.

---

## 4. Messaging
**Description:** Stores messages exchanged between users regarding listings.

**Attributes:**
- `message_id` (string): A unique identifier for each message.
- `sender_id` (string): The unique identifier for the user sending the message.
- `receiver_id` (string): The unique identifier for the user receiving the message.
- `listing_id` (string): The unique identifier for the listing associated with the conversation.
- `content` (text): The actual content of the message.
- `sent_at` (timestamp): The date and time when the message was sent.

**Data Source:** User-input data via the messaging feature.

---

## 5. Reviews
**Description:** User reviews of transactions, providing feedback on buyers and sellers.

**Attributes:**
- `review_id` (string): A unique identifier for each review.
- `transaction_id` (string): The unique identifier for the related transaction.
- `reviewer_id` (string): The unique identifier for the user leaving the review.
- `reviewed_id` (string): The unique identifier for the user being reviewed.
- `rating` (integer): A numerical rating (e.g., 1-5 stars) given by the reviewer.
- `comment` (string): An optional comment from the reviewer.
- `created_at` (timestamp): The date and time when the review was created.

**Data Source:** User-input data after completing a transaction.

---

# Data Relationships
- **User to Listing:** One-to-many relationship (a user can post multiple listings).
- **User to Transaction:** One-to-many relationship (a user can participate in multiple transactions as either buyer or seller).
- **Listing to Transaction:** One-to-one relationship (each listing can be associated with a single transaction).
- **Transaction to Review:** One-to-one relationship (each transaction can have a single review).
- **User to Message:** One-to-many relationship (a user can send and receive multiple messages).

# Data Sources
- **User-Input Data:** Most data, including user profiles, listings, messages, and reviews, will come from user inputs via forms in the application.
- **System-Generated Data:** Transaction records and timestamps will be automatically generated by the system when actions are completed.
