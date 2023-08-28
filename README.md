# Redux Contact Form Application Documentation

## Application Description

This application is a React-based web interface built with Redux for state management. It consists of two primary components: a form and a data list display. The form component captures four fields: first name, last name, email, and a message. Data input undergoes validation processes using the `validator` package to ensure correctness, such as verifying that the email field conforms to standard formats and that the message has a minimum character length. Once the form's data passes the validation checks and is submitted, it's dispatched to the Redux store. The data list component retrieves and presents the stored data in a tabular format, fetching the data directly from the Redux store.

## Sonar

https://sonarcloud.io/summary/new_code?id=lewkan-org_lewkan-org

## Installation & Running Locally

### Prerequisites:
Ensure `Node.js` and `npm` (Node Package Manager) are installed on your machine. If they aren't, they can be obtained from [nodejs.org](https://nodejs.org/).

### Steps:

1. **Clone the Repository:**  
   ```
   git clone https://github.com/xLEWKANx/chat-gpt-redux-app
   ```

2. **Navigate to the Directory:**  
   Move into the application's root directory:
   ```
   cd chat-gpt-redux-app
   ```

3. **Install Dependencies:**  
   Execute the following command to pull in required dependencies:
   ```
   npm install
   ```

4. **Run the Development Server:**  
   Initiate the local development server using:
   ```
   npm start
   ```

5. **Open in Browser:**  
   By default, the application should be accessible at:
   ```
   http://localhost:3000
   ```

