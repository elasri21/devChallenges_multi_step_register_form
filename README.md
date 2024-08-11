# Multi-Step Registration Form

This project implements a multi-step registration form using HTML and JavaScript. The form guides users through three steps of registration, capturing their information and interests.

## Features

1. **Step 1: User Information**

   - Collects user's name and email.
   - Form validation ensures that both fields are filled before proceeding.

2. **Step 2: Interests Selection**

   - Users select their interests from a list of topics.
   - Multiple interests can be selected using checkboxes.
   - Form validation ensures at least one interest is selected before proceeding.

3. **Step 3: Summary**
   - Displays a summary of the user's information and selected interests.
   - Users can review their inputs before finalizing the registration.

## How It Works

1. **Initialization**

   - When the DOM content is loaded, a registration form is displayed inside the `<main>` element.

2. **Step 1 Handling**

   - On submission of the first form, user information is validated and, if valid, the form is replaced with the second step.

3. **Step 2 Handling**

   - On submission of the second form, selected interests are validated and, if valid, the form is replaced with the summary.

4. **Step 3 Handling**
   - The summary of the registration details is displayed, allowing users to review their input.

## Code Breakdown

- **HTML Structure**

  - `main`: Contains the dynamic content for the registration form.
  - `form`: A series of forms for each step of the registration process.
  - `div.steps`: Displays the current step indicator using bullets.

- **JavaScript**
  - `DOMContentLoaded` Event: Initializes the registration form.
  - Event Listeners: Handle form submissions, validate input, and update the form dynamically.
  - Conditional Rendering: Based on user input, dynamically updates the form content.

## Usage

1. **Add the Script**

   - Ensure the JavaScript code is included in your HTML file.

2. **Integrate with Styles**

   - Use accompanying CSS to style the form and steps as needed.

3. **Test**
   - Ensure all steps are working as expected, and validation is functioning correctly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
