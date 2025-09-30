# Form Validation

A small web project that checks form inputs in the browser. It uses HTML, CSS, Bootstrap 5, and plain JavaScript. The form has four fields: username, email, password, and confirm password. The Submit button stays disabled until everything is valid.

## Overview

This project shows how to build a simple, responsive form with helpful error messages. As you type, the inputs are checked and any problems are shown below each field.

- Live checks while typing
- Clear error messages
- Submit only when all fields are valid
- Form resets after a successful submit

## Features

- Username must be 3–20 letters (spaces allowed)
- Email must look like a normal email address
- Password must be 8–20 characters (letters, numbers, and these symbols: \_ # @ $ % & \* !)
- Confirm Password must match Password
- Error text appears under each field
- Clean, responsive design using Bootstrap 5

## Tech Stack

- HTML
- CSS
- Bootstrap 5 (CDN)
- JavaScript (no frameworks)

## Validation Rules

The rules are defined in `index.js`.

- Username: only letters and spaces, 3–20 characters
- Email: standard email format
- Password: 8–20 characters using letters, numbers, underscore, and `# @ $ % & * !`
- Confirm Password: must be the same as Password

Note: The current password rule checks allowed characters and length. If you need a stronger rule (for example, to force at least one uppercase letter, one lowercase letter, one number, and one symbol), see Customization below.

## Getting Started

1. Download or clone this project.
2. Open `index.html` in your web browser.
   - Bootstrap loads from a CDN, so there is nothing to install.

## Usage

- Start typing in the fields to see live validation.
- The Submit button enables only when all fields are valid.
- On submit, you’ll see a success alert, the form clears, and the button disables again.

## Project Structure

```
Form-Validation/
  ├─ index.html   # Page markup and Bootstrap link
  ├─ style.css    # Simple dark theme styles
  └─ index.js     # Validation logic and event handlers
```

## Customization

- Styles: Change colors and spacing in `style.css`, or override Bootstrap classes.
- Validation:
  - Edit the regular expressions in `index.js` to fit your rules.
  - Example of a stronger password rule (requires at least one lowercase, one uppercase, one number, and one symbol):
    ```js
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,20}$/;
    ```
  - Update the password error text so it matches your chosen rule.

## Accessibility Notes

- Each input has a label connected by `for`/`id`.
- Error messages are placed right under the inputs.
- For better screen reader support, consider adding `aria-live="polite"` to the error containers.

## Security Notes

- This is client-side validation only. Always validate again on the server.
- For production, replace browser alerts with a more user-friendly success message.

## License

Free to use for learning and personal projects.

---

Made with ❤️ Sumit Tomar
