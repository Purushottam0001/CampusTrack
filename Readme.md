# 📚 CampusTrack – College Lost & Found Platform

A modern platform built for colleges to **report, track, and recover lost or found items**.  
Fast, clean, and built with the MERN stack.  
Created by **Purushottam Kumar**.

<p>
  <a href="https://github.com/Purushottam0001/CampusTrack"><img alt="stars" src="https://img.shields.io/github/stars/Purushottam0001/CampusTrack?style=flat"></a>
  <a href="https://github.com/Purushottam0001/CampusTrack/issues"><img alt="issues" src="https://img.shields.io/github/issues/Purushottam0001/CampusTrack?style=flat"></a>
  <img alt="license" src="https://img.shields.io/badge/license-MIT-green">
</p>

---

## 📸 Project Preview
![CampusTrack UI](project-preview.png)

---

## ✨ Features

- 🔐 **JWT Authentication** (Login / Register)
- 📝 **Create Lost / Found posts** with Cloudinary images
- 🏷️ **Categories & Tags** for better filtering
- 💬 **Comments + Real-Time Notifications**
- 🛡️ **Admin Dashboard**  
  Verify/delete posts, manage users
- 📱 **Fully Responsive UI** (TailwindCSS)

---

## 🛠️ Tech Stack

### **Frontend**
- React + Vite  
- TailwindCSS  
- Axios  
- React Router  
- React Hot Toast  

### **Backend**
- Node.js  
- Express.js  
- MongoDB (Mongoose ORM)

### **Auth & Media**
- JWT Authentication  
- Cloudinary Image Uploads  

---

## 🧩 Architecture Overview

![Architecture](project-architecture.png)

---

## 🔐 Security & Authorization

- JWT stored securely in `localStorage`
- Auth header added automatically using Axios
- Protected routes (user-only & admin-only)
- Cloudinary-secured image uploads
- Confirmation modals for admin actions

---

## 💻 Quick Start (Local Setup)

### ✅ 1. Clone Repository

```bash
git clone https://github.com/Purushottam0001/CampusTrack.git
cd CampusTrack
