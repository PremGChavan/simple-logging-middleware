# 📘 Express Logging Middleware

A simple Express.js server with custom middleware that logs request details to a `requests.json` file. It supports logging for HTTP GET and POST methods and captures useful information like request method, URL, IP, status code, timestamp, and response duration.

---

## 🚀 Features

- Logs every incoming request
- Supports GET and POST routes
- Logs are stored in `requests.json`
- Logs include:
  - HTTP Method
  - Requested URL
  - IP Address
  - Response Status
  - Timestamp
  - Duration (in ms)
  - Developer info (`name`, `success` flag)

---

## 📁 Project Structure

```
project/
├── images
  ├─ GET_Test.png      # Postman & Terminal Details for GET Request
  └─ POST_Test.png     # Postman & Terminal Details for POST Request
├── requests.json      # Auto-generated log file
├── index.js           # Main Express server with logging middleware
├── package.json       # Project metadata and dependencies
└── README.md          # This file
```

---

## 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PremGChavan/simple-logging-middleware.git
   cd simple-middleware
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node index.js
   ```

---

## 🔥 API Endpoints

### [GET] `/api/data`
Returns a simple JSON message with success and timestamp.

```json
{
  "success": true,
  "message": "Hello from the GET API!",
  "name": "Prem Chavan",
  "timeStamp": "2025-06-04T12:20:00.123Z"
}
```

---

### [POST] `/api/data`
Accepts a JSON body with `message` and `name`.

**Request:**
```json
{
  "name": "Prem Chavan",
  "message": "This is a test POST request"
}
```

**Response:**
```json
{
  "body": {
    "name": "Prem Chavan",
    "message": "This is a test POST request"
  },
  "success": true,
  "message": "This is a test POST request",
  "name": "Prem Chavan",
  "timeStamp": "2025-06-04T12:21:00.456Z"
}
```

---

## 🧾 Sample Log Output (`requests.json`)

```json
{
  "success": true,
  "name": "Prem Chavan",
  "method": "GET",
  "url": "/api/data",
  "ip": "::1",
  "status": 200,
  "timeStamp": "2025-06-04T12:22:00.789Z",
  "duration": "2ms"
}
```

---

## 📌 Notes

- The log file `requests.json` is created automatically on the first request if not present.
- Response time is measured using `Date.now()` and stored in milliseconds.
- You can expand this by adding support for `PUT` and `DELETE` requests.

---

## 👨‍💻 Author

**Prem Chavan**  
Simple logging middleware built using Node.js & Express.js

---
