# Quick Start Guide - Backend Setup

## 🚀 Cara Tercepat Setup Backend

### 1️⃣ Install Dependencies (2 menit)
```bash
cd backend
npm install
```

### 2️⃣ Setup MongoDB Atlas (5 menit)
1. Buka https://www.mongodb.com/cloud/atlas/register
2. Daftar (gratis)
3. Buat cluster FREE (M0)
4. Buat user database
5. Whitelist IP: 0.0.0.0/0
6. Copy connection string

### 3️⃣ Setup Environment
```bash
# Buat file .env
copy .env.example .env
```

Edit `.env`:
```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/profil-desa?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5173
```

### 4️⃣ Jalankan Server
```bash
npm run dev
```

### 5️⃣ Inisialisasi Data
Buka browser: http://localhost:3000/api/desa/init

Atau PowerShell:
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/api/desa/init" -Method POST
```

### 6️⃣ Test API
Browser: http://localhost:3000/api/desa

---

## ✅ Selesai!

API sudah jalan di: **http://localhost:3000**

Next: Update frontend di `src/hooks/useDesaData.js`
