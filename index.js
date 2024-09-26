document.addEventListener('DOMContentLoaded', function() {
    // Load data from localStorage and populate the table
    loadStoredData();
});

document.getElementById('userform').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('acceptTerms').checked ? 'true' : 'false';

    // Validate the date of birth (age between 18 and 55)
    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();
    const isValidAge = age >= 18 && age <= 55;

    if (!isValidAge) {
        alert('Date of birth must be between 18 and 55 years old.');
        return;
    }

    // Create a new entry for the table
    const entry = { name, email, password, dob, termsAccepted };
    addRowToTable(entry);

    // Save the form data to localStorage
    saveDataToLocalStorage(entry);

    // Clear the form fields
    document.getElementById('userform').reset();
});

function addRowToTable(entry) {
    const table = document.getElementById('dataTable');
    const newRow = table.insertRow();
    newRow.insertCell().textContent = entry.name;
    newRow.insertCell().textContent = entry.email;
    newRow.insertCell().textContent = entry.password;
    newRow.insertCell().textContent = entry.dob;
    newRow.insertCell().textContent = entry.termsAccepted;
}

function saveDataToLocalStorage(entry) {
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push(entry);
    localStorage.setItem('formData', JSON.stringify(formData));
}

function loadStoredData() {
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.forEach(addRowToTable);
}