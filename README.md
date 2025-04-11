

# 🚀 Backend Learnings

This repository contains essential backend concepts and implementations using **Node.js**, **Express.js**, **MongoDB**, **GraphQL**, and more. It includes complete CRUD operations, authentication flows, file uploads, and advanced query handling with the aggregation pipeline.

---

## 📦 Technologies & Tools

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **GraphQL**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **Multer** (for file uploads)
- **Cookies & Sessions**
- **MongoDB Aggregation Pipeline**
- **MongoDB Sanitization (express-mongo-sanitize)**
- **Custom Middleware**
- **HTTP Status Codes Handling**

---

## 📁 Folder Structure

```bash
├── config/
│   └── db.js               # MongoDB connection config
│
├── controllers/
│   └── authController.js   # Login, Signup, Logout
│   └── userController.js   # Profile, update, delete
│
├── graphql/
│   ├── resolvers.js
│   └── schema.graphql
│
├── middleware/
│   ├── auth.js             # JWT verification
│   ├── errorHandler.js     # Central error handler
│   └── sanitize.js         # MongoDB injection prevention
│
├── models/
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
│
├── uploads/
│   └── avatar.png
│
├── utils/
│   └── generateToken.js
│   └── response.js
│
├── .env
├── server.js
└── README.md
```

---

## 🔐 Authentication

### 🔸 Signup (`POST /api/signup`)
- Collects user info
- Password is hashed using `bcryptjs`
- Saves user in MongoDB
- JWT generated and sent in HTTP-only cookie

### 🔸 Login (`POST /api/login`)
- Validates email and password
- Compares with hashed password
- Sends JWT as cookie if valid

### 🔸 Logout (`GET /api/logout`)
- Clears the cookie
- Ends session/token lifecycle

---

## 🛡️ Middlewares

| Middleware        | Purpose                                                  |
|------------------|----------------------------------------------------------|
| `auth.js`         | Protects routes by verifying JWT                         |
| `sanitize.js`     | Prevents MongoDB operator injection                      |
| `errorHandler.js` | Centralized error handling using status codes            |
| `upload.js`       | Handles file uploads with filters and limits             |

---

## ⚙️ Utils

- `generateToken.js` - Creates JWT token
- `response.js` - Standard response formatting
- `hashPassword.js` (optional) - Modularize bcrypt logic
- `catchAsync.js` - Async error handler wrapper

---

## ☁️ File Upload

- Implemented using **Multer**
- File validations: size, format
- Can be extended to Cloudinary/AWS S3
- File path saved to DB

---

## 📊 MongoDB Aggregation Pipeline

Powerful data aggregation used for analytics, filtering, transformation:

```js
User.aggregate([
  { $match: { isActive: true }},
  { $group: { _id: "$role", count: { $sum: 1 } }},
  { $sort: { count: -1 }}
])
```

Common stages: `$match`, `$group`, `$project`, `$sort`, `$lookup`

---

## 🍪 Cookies

- JWT stored in HTTP-only cookies for security
- Prevents XSS (unlike `localStorage`)
- Secure flag and expiry added in production

```js
res.cookie("token", jwtToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});
```

---

## ⚠️ MongoDB Sanitization

- Prevents NoSQL injection (e.g., `{ "$gt": "" }`)
- Implemented via `express-mongo-sanitize`

```js
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());
```

---

## 🧪 GraphQL Setup

- Define `typeDefs` in `.graphql` file
- Resolvers for queries & mutations
- Integrated with MongoDB models

Example Query:

```graphql
query {
  getUser(id: "123") {
    name
    email
  }
}
```

---

## 📋 HTTP Status Codes Used

| Code | Meaning               |
|------|------------------------|
| 200  | Success               |
| 201  | Created               |
| 300  | Redirection           |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

## 📚 Learnings Covered

- 🔁 CRUD Operations with MongoDB
- 🔐 Authentication + Authorization (JWT + Cookies)
- 🧠 Aggregation Pipeline
- 📁 File Upload Handling
- 🕵️‍♂️ Route Protection via Middleware
- 🧼 NoSQL Injection Prevention
- 📡 GraphQL API Structure
- 🧰 Clean Codebase with Controllers, Configs, Utils

---

## 🔮 Future Scope

- 🌐 OAuth (Google, GitHub login)
- 🗃️ Redis for sessions
- 🔁 Refresh Token Strategy
- 📈 Monitoring with Prometheus/Grafana
- 📦 Docker and Kubernetes integration
- 🧪 Tests with Jest + Supertest

---
