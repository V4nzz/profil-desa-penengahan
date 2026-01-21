# 🏘️ Backend API - Profil Desa Penengahan

Backend API menggunakan **Express.js** dan **MongoDB** untuk mengelola data profil desa secara dinamis.

---

## 📋 Daftar Isi
1. [Setup & Instalasi](#setup--instalasi)
2. [Konfigurasi Database](#konfigurasi-database)
3. [Menjalankan Server](#menjalankan-server)
4. [API Endpoints](#api-endpoints)
5. [Testing API](#testing-api)

---

## 🚀 Setup & Instalasi

### 1. Masuk ke folder backend
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

Atau install satu per satu:
```bash
npm install express cors dotenv mongoose
npm install -D nodemon
```

### 3. Copy file environment
```bash
copy .env.example .env
```

Atau manual: buat file `.env` dengan isi dari `.env.example`

---

## 🗄️ Konfigurasi Database

Anda punya 2 pilihan:

### **Opsi 1: MongoDB Atlas (Cloud - RECOMMENDED)** ☁️

**Gratis 512MB storage!**

1. **Daftar di MongoDB Atlas**
   - Buka [mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
   - Daftar dengan email/Google

2. **Buat Cluster**
   - Pilih **FREE** tier (M0)
   - Pilih region terdekat (Singapore)
   - Klik **Create Cluster**

3. **Setup Database Access**
   - Klik **Database Access** (menu kiri)
   - Klik **Add New Database User**
   - Username: `admin_desa`
   - Password: buat password (SIMPAN!)
   - Role: **Read and write to any database**

4. **Setup Network Access**
   - Klik **Network Access**
   - Klik **Add IP Address**
   - Pilih **Allow Access from Anywhere** (0.0.0.0/0)
   - Klik **Confirm**

5. **Ambil Connection String**
   - Klik **Database** (menu kiri)
   - Klik **Connect** pada cluster
   - Pilih **Connect your application**
   - Copy connection string:
     ```
     mongodb+srv://admin_desa:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```

6. **Update file `.env`**
   ```env
   MONGODB_URI=mongodb+srv://admin_desa:PASSWORD_ANDA@cluster0.xxxxx.mongodb.net/profil-desa?retryWrites=true&w=majority
   ```
   
   ⚠️ **Ganti `<password>` dengan password yang tadi dibuat!**

---

### **Opsi 2: MongoDB Local** 💻

1. **Download & Install MongoDB**
   - Download: [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Install dengan default settings
   - Centang "Install MongoDB as a Service"

2. **Cek MongoDB sudah jalan**
   ```bash
   mongosh
   ```

3. **Update file `.env`**
   ```env
   MONGODB_URI=mongodb://localhost:27017/profil-desa
   ```

---

## ▶️ Menjalankan Server

### Development (dengan auto-reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

Jika berhasil, akan muncul:
```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
📊 Database: profil-desa
╔════════════════════════════════════════╗
║   🚀 Server Running                    ║
║   📡 Port: 3000                        ║
║   🌍 Environment: development          ║
║   🔗 URL: http://localhost:3000       ║
╚════════════════════════════════════════╝
```

---

## 🛣️ API Endpoints

### **Base URL:** `http://localhost:3000/api`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/desa` | Ambil data desa | ❌ Public |
| POST | `/desa/init` | Inisialisasi data pertama kali | ⚠️ Admin |
| PUT | `/desa` | Update semua data | ⚠️ Admin |
| PATCH | `/desa/:field` | Update field tertentu | ⚠️ Admin |
| DELETE | `/desa` | Hapus data desa | 🔒 Admin |

---

## 🧪 Testing API

### 1. Inisialisasi Data (Pertama Kali)

**Windows PowerShell:**
```powershell
$body = @{} | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:3000/api/desa/init" -Method POST -ContentType "application/json" -Body $body
```

**cURL (Git Bash/Linux/Mac):**
```bash
curl -X POST http://localhost:3000/api/desa/init
```

**Browser:** Buka `http://localhost:3000/api/desa/init` (akan error, gunakan Postman/Thunder Client)

**Response:**
```json
{
  "success": true,
  "message": "Data desa berhasil diinisialisasi",
  "data": { ... }
}
```

---

### 2. Get Data Desa

**Browser/cURL:**
```bash
curl http://localhost:3000/api/desa
```

Atau buka di browser: `http://localhost:3000/api/desa`

---

### 3. Update Data Penduduk

**PowerShell:**
```powershell
$body = @{
    statistik = @{
        penduduk = 2150
        laki = 1090
        perempuan = 1060
        dusun = 6
        rt = 14
        kk = 595
        luasHa = 1780
    }
} | ConvertTo-Json -Depth 10

Invoke-WebRequest -Uri "http://localhost:3000/api/desa" -Method PUT -ContentType "application/json" -Body $body
```

---

### 4. Update Field Spesifik (Nama Desa)

**PowerShell:**
```powershell
$body = @{
    nama = "Desa Penengahan Baru"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/desa/nama" -Method PATCH -ContentType "application/json" -Body $body
```

---

## 🔧 Troubleshooting

### ❌ Error: "MongooseServerSelectionError"
**Penyebab:** Tidak bisa connect ke MongoDB

**Solusi:**
1. Cek `.env` file ada dan benar
2. Cek connection string sudah benar
3. Cek password tidak ada karakter special yang belum di-encode
4. Cek IP sudah di-whitelist di MongoDB Atlas
5. Cek internet connection

### ❌ Error: "Data desa tidak ditemukan"
**Solusi:** Jalankan `POST /api/desa/init` untuk inisialisasi data

### ❌ Error: Port 3000 already in use
**Solusi:** 
```bash
# Kill process di port 3000
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force

# Atau ganti PORT di .env
PORT=3001
```

---

## 📦 Update Frontend untuk Connect ke API

Edit file `src/hooks/useDesaData.js`:

```javascript
const API_URL = 'http://localhost:3000/api/desa';
```

---

## 🚀 Deploy ke Production

### Rekomendasi Hosting:
- **Backend:** Railway, Render, Fly.io (gratis)
- **Database:** MongoDB Atlas (sudah gratis)
- **Frontend:** Vercel, Netlify

### Environment Variables untuk Production:
```env
NODE_ENV=production
MONGODB_URI=your_mongodb_atlas_uri
PORT=3000
FRONTEND_URL=https://your-frontend-url.vercel.app
```

---

## 📝 TODO Next Steps

- [ ] Tambahkan autentikasi (JWT)
- [ ] Tambahkan validation middleware
- [ ] Tambahkan rate limiting
- [ ] Tambahkan logging
- [ ] Tambahkan backup otomatis
- [ ] Buat admin panel untuk edit data

---

## 🆘 Butuh Bantuan?

Jika ada error atau pertanyaan, cek:
1. Console output di terminal
2. MongoDB Atlas dashboard
3. Network tab di browser DevTools
