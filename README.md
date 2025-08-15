# 🍽️ Hostel Mess Management Portal

## 📌 Overview
The **Hostel Mess Management Portal** is a web-based application designed to streamline the process of managing hostel mess operations.  
It offers **separate panels for students and administrators**, enabling real-time monitoring and booking of meals.  
The system is built with **Node.js**, **MongoDB**, and **Handlebars** for a seamless, responsive, and user-friendly experience.

---

## 🎯 Core Features

### **👨‍🎓 Student Panel**
- **View Weekly Mess Menu** — Students can check the menu for each day of the week.
- **Book Meal Tokens** — Students can generate a unique QR code token for their meals.
- **Select Booking Period** — Option to book for a single day or the entire week.
- **Responsive Interface** — Built with Handlebars templates, HTML, CSS, and JavaScript for smooth navigation.

### **🛠️ Admin Panel**
- **Real-Time Meal Count** — Monitor how many students have booked meals for each day.
- **QR Code Verification** — Scan QR codes using an integrated QR code reader to validate bookings.
- **Menu Management** — Update or change the mess menu for specific days or the whole week.
- **Booking Analytics** — View statistics for daily and weekly meal counts.

---

## 🏗️ Tech Stack

### **Backend**
- **Node.js** — Server-side JavaScript runtime for handling application logic and API requests.
- **Express.js** — Lightweight Node.js framework for routing and middleware handling.
- **MongoDB** — NoSQL database for storing users, menu details, and booking data.

### **Frontend**
- **Handlebars.js** — Template engine to dynamically render HTML pages.
- **HTML5, CSS3, JavaScript** — For designing responsive and interactive user interfaces.

### **Integrations**
- **QR Code Generation** — Automatically generates unique meal tokens for each booking.
- **QR Code Reader** — Integrated scanner for admin to validate meal tokens.

---

## 🔑 Core Components

1. **Student Dashboard**  
   - Displays weekly mess menu.  
   - Allows booking for individual days or the full week.  
   - Generates a QR token upon successful booking.

2. **Admin Dashboard**  
   - Displays daily meal counts.  
   - Reads QR codes from students and updates meal served count in real time.  
   - Allows modification of the weekly menu.

3. **Menu Management Module**  
   - Stores the weekly menu in MongoDB.  
   - Supports updates via admin panel.

4. **Token & QR Code System**  
   - Generates unique QR code for each booking using the student's details and booking date.  
   - Ensures security and prevents duplicate meal claims.

---
