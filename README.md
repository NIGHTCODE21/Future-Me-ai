# 💌 Future Me AI – Scheduled Messaging Platform with GenAI

A full-stack web application that allows users to write letters to their future selves and receive them at a scheduled time, enhanced with AI-generated motivational responses.

---

## 🚀 Live Features

* ✍️ Write letters to your future self
* ⏰ Schedule delivery for a future date & time
* 🤖 Receive AI-generated motivational messages instantly
* 📩 Automated email delivery at the scheduled time
* ⚡ Queue-based background processing for reliability

---

## 🧠 System Design Highlights

* 🔄 **Asynchronous Job Processing** using BullMQ (Redis)
* 📦 **Queue-based Scheduling** for delayed message delivery
* 🧩 **Service-Oriented Architecture** (Controllers, Services, Queues)
* 🗄️ **Persistent Storage** using MongoDB
* 📡 **RESTful API Design** for frontend-backend communication

---

## 🛠️ Tech Stack

### Frontend

* React.js (TypeScript)
* HTML, CSS

### Backend

* Node.js + Express
* MongoDB (Mongoose)
* BullMQ + Redis (Queue system)
* Nodemailer (Email service)

### AI Integration

* Generative AI API (for personalized messages)

---

## 📁 Project Structure

```
future-me-ai/
├── client/               # React Frontend
├── server/               # Node.js Backend
│   ├── config/           # DB & Redis setup
│   ├── models/           # Mongoose schemas
│   ├── services/         # AI + Email logic
│   ├── queues/           # BullMQ queues & workers
│   ├── controllers/      # Business logic
│   ├── routes/           # API routes
```

---

## ⚙️ Run Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/future-me-ai.git
cd future-me-ai
```

---

### 2️⃣ Backend Setup

```
cd server
npm install
```

#### Start MongoDB & Redis (locally)

```
mongod
redis-server
```

#### Run backend

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd client
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file in `/server`:

```
MONGO_URI=mongodb://127.0.0.1:27017/futureme
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

---

## 📸 Screenshots (Optional)

*Add screenshots here for better presentation*

---

## 🚀 Future Enhancements

* 🔐 User authentication (JWT)
* 📊 Dashboard to track scheduled messages
* 📧 Email templates (HTML styling)
* ☁️ Deployment (AWS / Vercel / Render)
* 📱 Mobile responsiveness improvements

---

## 👩‍💻 Author

**Priyanshi Pankhaniya**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to contribute!

live demo : https://future-me-ruddy.vercel.app/
