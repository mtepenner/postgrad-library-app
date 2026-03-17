# Library Management System

A full-stack web application designed to manage a library catalog with secure, role-based access for both regular visitors and library administrators. 

## 🚀 Features

### Regular Users (Visitors)
* **Secure Registration & Login:** Automatic generation of a unique Visitor ID upon sign-up.
* **Browse Catalog:** View all available books sorted alphabetically.
* **Search & Filter:** Find books easily by title, author, or genre.
* **Favorites:** Save specific books to a personal profile.
* **Schedule Pickups:** Reserve physical books for pickup at the library.

### Administrators
* **Exclusive Dashboard:** Protected routes accessible only to users with the Admin role.
* **Manage Catalog:** Add new books and categorize them.
* **Manage Genres:** Create new genres for library organization.
* **System Access Control:** Generate secure, one-time-use "Admin IDs" to authorize new staff members to register as Administrators.

## 🛠️ Tech Stack

**Frontend:**
* React (via Vite)
* Tailwind CSS
* React Router DOM
* Axios

**Backend:**
* Node.js & Express.js
* PostgreSQL
* Prisma ORM
* JSON Web Tokens (JWT) & bcrypt (Authentication/Security)

## 📁 Project Structure

```text
library-app/
├── backend/            # Express server, Prisma schema, and API routes
└── frontend/           # React application and Tailwind styling
```

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [PostgreSQL](https://www.postgresql.org/) (Running locally or via a cloud provider)

## 🚀 Installation & Setup

### 1. Backend Setup

Open a terminal and navigate to the backend directory:
```bash
cd backend
```

Install the dependencies:
```bash
npm install
```

Create a `.env` file in the root of the `backend` directory and add the following variables:
```env
# Database connection string (replace with your PostgreSQL credentials)
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/library_db?schema=public"

# Secret key for signing JWTs (make this a long, random string)
JWT_SECRET="your_super_secret_jwt_key"

# Port for the Express server
PORT=5000
```

Initialize the database using Prisma:
```bash
npx prisma migrate dev --name init
```

Start the development server:
```bash
npm run dev
```
*The backend should now be running on `http://localhost:5000`.*

### 2. Frontend Setup

Open a new terminal window and navigate to the frontend directory:
```bash
cd frontend
```

Install the dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```
*The frontend should now be running on `http://localhost:5173`.*

## 🔐 Initial Admin Setup

Because registering as an Admin requires a valid Admin ID from the database, you will need to manually seed the first Admin ID directly into your PostgreSQL database (via a tool like pgAdmin, DBeaver, or Prisma Studio) before your first Admin can register through the UI.

To open Prisma Studio and add your first code:
```bash
cd backend
npx prisma studio
```
Navigate to the `Admin_ID` model, add a new record with a secure string (e.g., `INIT-ADMIN-2024`), and save it. You can now use this code on the registration page!


