// Function to validate the checkout form
function validateForm() {
  var isValid = true;

  // Check if credit card number is empty
  var creditcard = document.getElementById("creditcard");
  if (creditcard.value === "") {
    creditcard.classList.add("input-error");
    isValid = false;
  } else {
    creditcard.classList.remove("input-error");
  }

  // Check if expiration date is empty
  var expiration = document.getElementById("expiration");
  if (expiration.value === "") {
    expiration.classList.add("input-error");
    isValid = false;
  } else {
    expiration.classList.remove("input-error");
  }

  // Check if CVV is empty
  var cvv = document.getElementById("cvv");
  if (cvv.value === "") {
    cvv.classList.add("input-error");
    isValid = false;
  } else {
    cvv.classList.remove("input-error");
  }

  // If form is valid, submit the form
  if (isValid) {
    alert("Form submitted successfully!");
    // You can also submit the form using JavaScript here if needed
  } else {
    alert("Please fill out all required fields.");
  }

  return isValid;
}

// Add event listener to the form submit button
var submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission
  validateForm(); // Call the validateForm function
});
