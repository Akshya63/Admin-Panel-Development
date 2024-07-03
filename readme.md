# MERN Stack Admin Panel

# npm install
# npm run dev

## Project Description

This project is a basic admin panel built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes user registration, login, logout functionalities, and CRUD operations on users. The application also implements password encryption, role-based access control (RBAC), and form validation.

## Features

- **User Authentication:**
  - Register: Users can register with a first name, last name, email, and password.
  - Login: Registered users can log in with their email and password.
  - Logout: Logged-in users can log out.
- **Admin Panel:**
  - Create: Admins can add new users.
  - Read: Admins can view a list of users.
  - Update: Admins can edit user details.
  - Delete: Admins can delete users.
- **Additional Features:**
  - Password Encryption: User passwords are securely hashed.
  - Role-based Access Control (RBAC): Admin and user roles are implemented.
  - Form Validation: Frontend and backend form validation for registration and login.
  - Pagination and Search: Implemented in the user list in the admin panel.
  - Error Handling: Proper error handling with user-friendly messages.

## Technologies Used

### Frontend

- React.js
- Context API or Redux
- React Router
- Bootstrap or Material-UI

### Backend

- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Bcrypt for Password Hashing
- Cors
- Dotenv

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- MongoDB (running locally or use MongoDB Atlas)

## Setup Instructions

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Akshya63/Admin-Panel-Development.git
   cd admin-panel/server


