# 📚 Book API

Book API is a simple REST API for managing books and authors using **Node.js**, **Express**, and **SQLite**.

## 🚀 Features
- **CRUD for Authors** (Create, Read, Update, Delete)
- **CRUD for Books** (Create, Read, Update, Delete)
- **Relationship between Books and Authors**
- **Lightweight database with SQLite**

---

## 🛠 Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/kstayner/book-api-express-sqlite.git
cd book-api-express-sqlite
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Start the server
```sh
node src/server.js
```

✅ The server will start at: `http://localhost:3000`

---

## 📌 API Endpoints

### **Authors**
| Method | Endpoint           | Description            |
|--------|-------------------|------------------------|
| POST   | `/authors`        | Create an author      |
| GET    | `/authors`        | Get all authors       |
| GET    | `/authors/:id`    | Get author by ID      |
| PUT    | `/authors/:id`    | Update an author      |
| DELETE | `/authors/:id`    | Delete an author      |

#### **Example - Create an Author**
**Request:**
```http
POST http://localhost:3000/authors
Content-Type: application/json
```
**Body:**
```json
{
  "name": "J.K. Rowling",
  "nationality": "British"
}
```
**Response:**
```json
{
  "id": 1,
  "name": "J.K. Rowling",
  "nationality": "British"
}
```

---

### **Books**
| Method | Endpoint                | Description                  |
|--------|------------------------|------------------------------|
| POST   | `/books`               | Create a book               |
| GET    | `/books`               | Get all books               |
| GET    | `/books/:id`           | Get book by ID              |
| GET    | `/books/author/:id`    | Get books by author ID      |
| PUT    | `/books/:id`           | Update a book               |
| DELETE | `/books/:id`           | Delete a book               |

#### **Example - Create a Book**
**Request:**
```http
POST http://localhost:3000/books
Content-Type: application/json
```
**Body:**
```json
{
  "title": "Harry Potter and the Philosopher's Stone",
  "publication_year": 1997,
  "author_id": 1
}
```
**Response:**
```json
{
  "id": 1,
  "title": "Harry Potter and the Philosopher's Stone",
  "publication_year": 1997,
  "author_id": 1
}
```

---

## 🛠 Development

For development, you can use **nodemon** to restart the server automatically:
```sh
npm install -g nodemon
nodemon src/server.js
```

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

💡 **Happy Coding!** 🚀

