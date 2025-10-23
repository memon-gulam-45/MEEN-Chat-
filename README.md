# MEEN-Chat

💬 _Learn backend and database development by building a simple chat app with Node, Express, Mongoose, and EJS._

_A lightweight chat web app designed to teach backend concepts and MongoDB integration, with minimal UI._

---

## 🗨️ Overview

**MEEN-Chat** is a lightweight full-stack web application where users can create, view, and edit chat messages stored in MongoDB.  
This project focuses on **backend development and database integration**, with a minimal UI to demonstrate functionality.

---

## ⚙️ Tech Stack

| Layer       | Technology         | Description                                      |
| ----------- | ------------------ | ------------------------------------------------ |
| Backend     | Node.js            | JavaScript runtime for server-side programming   |
| Framework   | Express.js         | Web framework for routing and middleware         |
| Database    | MongoDB + Mongoose | NoSQL database with schema modeling              |
| View Engine | EJS                | Server-side templates for dynamic HTML rendering |
| Styling     | CSS (basic)        | Minimal styling via static files                 |

---

## 🚀 Features

- 📬 **Create Chats** – Add new chat messages (from, to, message).
- 📜 **View Chats** – List all chats dynamically using EJS templates.
- ✏️ **Edit Chats** – Update existing chat messages by ID.
- 💾 **MongoDB Integration** – Store and retrieve chats using Mongoose.

---

## 📁 Project Structure

<pre>
MEEN-Chat/
│
├── models/
│   └── chat.js          # Mongoose schema and model
│
├── public/              # Static assets (CSS, JS)
│   └── style.css
│
├── views/               # EJS templates
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js             # Main Express application file
├── init.js 
├── package.json
└── README.md
</pre>

---

## 🧩 Routes Summary

| Method | Route             | Description               |
| ------ | ----------------- | ------------------------- |
| GET    | `/`               | Root route test           |
| GET    | `/chats`          | Display all chats         |
| GET    | `/chats/new`      | Form to create a new chat |
| POST   | `/chats`          | Save new chat to MongoDB  |
| GET    | `/chats/:id/edit` | Edit an existing chat     |

---

## 🧠 Learning Objectives

- Understand **Express routing** and middleware setup.
- Perform **CRUD operations** with MongoDB using **Mongoose**.
- Render dynamic content with **EJS templates**.
- Learn how to structure and modularize a Node.js web application.

---

## ▶️ Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/memon-gulam-45/MEEN-Chat-.git
cd MEEN-Chat

# 2. Install dependencies
npm install

# 3. Start MongoDB locally
mongod

# 4. Run the app
node index.js
Open [http://localhost:8080](http://localhost:8080) in your browser.
```

---

## 📚 Future Enhancements

- Add delete route with password confirmation.
- Add real-time messaging using Socket.io.
- Add user authentication and sessions.
- Improve UI with Bootstrap or Tailwind CSS (optional).

---

> This project is primarily designed for **learning backend and database concepts**.
> UI is minimal and functional to focus on **server-side logic and MongoDB operations**.

---

💻 Author

Gulam Mohyudin Ashrafi
📍 Built with ❤️ using the MEEN Stack — Node, Express, Mongoose, EJS

```

```
