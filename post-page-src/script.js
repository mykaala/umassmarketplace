function validateForm() {
    let isValid = true;

    // Product Title Validation
    const productTitle = document.getElementById('product-title');
    const productTitleError = document.getElementById('product-title-error');
    if (!productTitle.value.trim()) {
        productTitleError.textContent = "Product title is required.";
        isValid = false;
    } else {
        productTitleError.textContent = ""; // Clear the error message
    }

    const category = document.getElementById('category');
    const categoryError = document.getElementById('category-error');
    if (!category.value) {
        categoryError.textContent = "Category selection is required.";
        isValid = false;
    } else {
        categoryError.textContent = ""; // Clear the error message
    }

    // Price Validation
    const price = document.getElementById('price');
    const priceError = document.getElementById('price-error');
    if (!price.value.trim()) {
        priceError.textContent = "Price is required.";
        isValid = false;
    } else if (isNaN(price.value) || price.value <= 0) {
        priceError.textContent = "Please enter a valid positive number.";
        isValid = false;
    } else {
        priceError.textContent = ""; // Clear the error message
    }

    //Condition Validation
    const condition = document.querySelector('input[name="condition"]:checked');
    const conditionError = document.getElementById('condition-error');
    if (!condition) {
        conditionError.textContent = "Please select a condition.";
        isValid = false;
    } else {
        conditionError.textContent = ""; // Clear the error message
    }

    // Email Validation
    const email = document.getElementById('contact-email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@umass\.edu$/; //checks for umass email
    if (!email.value.trim()) {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid UMass email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Phone Validation
    const phone = document.getElementById('contact-phone');
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^[0-9]{10}$/;
    
    // Check if phone field is empty or invalid
    if (!phone.value.trim()) {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        phoneError.textContent = ""; // Clear the error message
    }
    
    if (isValid) {
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;
        const condition = document.querySelector('input[name="condition"]:checked').value;

        console.log("Form Data:");
        console.log(`Product Title: ${productTitle.value}`);
        console.log(`Category: ${category}`);
        console.log(`Price: ${price.value}`);
        console.log(`Description: ${description}`);
        console.log(`Condition: ${condition}`);
        console.log(`Email: ${email.value}`);
        console.log(`Phone: ${phone.value}`);
    }

    return isValid;
}
