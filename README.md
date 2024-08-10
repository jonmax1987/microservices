# User Management System - Backend (Microservices Architecture)

This repository contains the backend code for a **User Management System** implemented using a **Microservices Architecture**. The system is divided into two primary services: `auth-service` and `users-service`, each handling distinct aspects of the application.

## Services Overview

### 1. Authentication Service (`auth-service`)
The `auth-service` is responsible for handling all user authentication-related tasks, including:
- **User Registration**: Registers new users with hashed passwords.
- **User Login**: Authenticates users and generates JWT tokens.
- **User Logout**: Clears the authentication token.
- **Token Validation**: Validates JWT tokens to secure routes.

#### Technologies Used:
- **Node.js** with **Express.js** for building the service.
- **JWT** for secure user authentication.
- **bcrypt** for password hashing.
- **Express Validator** for request validation.

### 2. User Management Service (`users-service`)
The `users-service` manages user data, providing CRUD operations to authenticated users:
- **Create User**: Adds new users to the database.
- **Read Users**: Fetches details of existing users.
- **Update User**: Modifies user details.
- **Delete User**: Removes users from the database.

#### Technologies Used:
- **Node.js** with **Express.js** for building the service.
- **MySQL** as the database for persisting user data.
- **Express Validator** for request validation.

## Project Structure
Each service follows a similar directory structure:



## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your local machine.
- **MySQL** database setup for the `users-service`.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/User-Management-System.git
    ```
   
2. Install dependencies for both services:
    ```bash
    cd microservices/auth-service
    npm install
    cd ../users-service
    npm install
    ```

3. Configure environment variables:
   - Create `.env` files in both `auth-service` and `users-service` directories with the necessary configuration (e.g., database credentials, JWT secrets).

4. Start the services:
    - Run `auth-service`:
      ```bash
      cd microservices/auth-service
      npm start
      ```
    - Run `users-service`:
      ```bash
      cd ../users-service
      npm start
      ```

### Running the Services
- The `auth-service` will be running on `http://localhost:3002`.
- The `users-service` will be running on `http://localhost:3003`.

These services can be accessed via their respective APIs to handle authentication and user data management tasks.

## Security Practices
- **JWT** is stored in HTTP-only cookies to prevent XSS attacks.
- Passwords are securely hashed before being stored in the database.
- Input validation is enforced at the API level to prevent invalid data from being processed.

## Contribution Guidelines
If you wish to contribute to this project, please fork the repository, create a new branch, and submit a pull request. We welcome all contributions that align with the project goals and improve the existing functionality.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

