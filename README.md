#wd101 Form 


Registration Form with Validation and Local Storage

This project is a simple registration form built using HTML, JavaScript, and styled with Tailwind CSS. The form collects user details such as name, email, password, and date of birth. It includes validation for email format and ensures that the date of birth falls between ages 18 and 55. The user data is stored in the browser's localStorage and displayed in a table below the form after submission.
Features

* Tailwind CSS: Styled using utility-first CSS framework for quick and responsive design.
* Email Validation: Ensures users provide a valid email address.
* Date of Birth Validation: Restricts registration to users between 18 and 55 years old.
* Local Storage: User entries are saved in the browser's localStorage so that they persist across page reloads.
* Dynamic Display: Submitted entries are dynamically displayed in a table format below the form.
Project Structure

* index.html: Contains the structure of the form and the table where user entries are displayed.
* index.js: Contains the logic for form validation, local storage, and dynamic display of entries.
* tailwind.css: Tailwind CSS is used to style the form and the table.
Installation

1. Clone the repository to your local machine: git clone https://github.com/Shashanktumma/wd101.git  
2. Navigate to the project directory: cd wd101  
3. If you're working locally, you can run the project by simply opening the index.html file in your browser.
Usage

1. Open index.html in any browser.
2. Fill out the form with your name, email, password, and date of birth.
3. Check the "Accept Terms and Conditions" box to enable form submission.
4. Upon submission:
    * The data is validated.
    * If valid, it will be saved to localStorage and displayed in a table.
5. Refreshing the page will retain the data stored in localStorage.
Validation Rules

* Email: Must be in a valid email format (e.g., example@example.com).
* Date of Birth: Users must be between 18 and 55 years old.
* Terms and Conditions: Must be accepted to submit the form.
Technologies Used

* HTML5: Provides the basic structure of the page.
* JavaScript (ES6): Used for form validation, local storage management, and dynamic table rendering.
* Tailwind CSS: A utility-first CSS framework for styling the form and making it responsive.
Contributing

Feel free to submit issues or pull requests. Contributions are welcome!
