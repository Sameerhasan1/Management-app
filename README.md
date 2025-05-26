Commodities Management Platform
A modern web application designed to streamline commodity tracking and management for businesses. The platform supports two roles: Manager and Store Keeper. It allows secure authentication, product management, and role-based access with a responsive and user-friendly interface. Light and dark themes are supported for enhanced accessibility.

✨ Features
🔐 User Login (Manager & Store Keeper)

🧑‍💼 Manager Dashboard (Only for Managers)

📦 View All Products (Both roles)

➕ Add New Product (Both roles)

🌗 Light / Dark Mode Toggle

🔒 Front-end Role-Based Access Control

🚀 Fully Responsive Modern UI with Tailwind CSS

⚡ Built with React, React Router & Context API

👥 User Roles
Manager

Access to Dashboard

Add & View Products

Store Keeper

Can Add & View Products

Cannot access Dashboard

🛠️ Tech Stack
React.js

Tailwind CSS

React Router DOM

Context API (for Auth & Theme)

LocalStorage (for persisting login)

Heroicons / Emoji for theme toggle

📦 Installation
Follow the steps below to run the project locally:

Clone the Repository

bash
Copy
Edit
git clone https://github.com/your-username/management-app.git
cd management-app
Install Dependencies

bash
Copy
Edit
npm install
Start the Development Server

bash
Copy
Edit
npm run dev
Your application should now be running at http://localhost:5173 (or whichever port Vite sets).

📁 Project Structure
bash
Copy
Edit
📦 src/
├── assets/                 # Images or public assets
├── components/             # Navbar, ProductCard etc.
├── context/
│   ├── AuthContext.jsx     # Authentication and role context
│   └── ThemeContext.jsx    # Light/Dark mode context
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── ProductList.jsx
│   └── AddProduct.jsx
├── App.jsx
├── main.jsx
└── index.css
✅ Available Routes
Route	Role Access	Description
/login	Public	Login Page
/dashboard	Manager only	Dashboard Overview
/products	All roles	List all products
/add-product	All roles	Add a new product

🧠 Role-Based Navigation (Navbar)
Dashboard is shown only to Managers.

All other links are available to both roles.

Role and theme info is shown in Navbar.

Includes logout and theme toggle button.

🌈 Light / Dark Theme
Toggle the theme via the button in the Navbar. State is stored in Context and optionally persisted in localStorage.
