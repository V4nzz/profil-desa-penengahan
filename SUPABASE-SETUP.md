# 🚀 Setup Supabase untuk Profil Desa Penengahan

Panduan lengkap setup Supabase dari awal sampai jalan.

---

## 📋 Langkah-Langkah Setup

### 1️⃣ Daftar & Buat Project Supabase (5 menit)

1. **Buka Supabase**
   - Buka browser: https://supabase.com
   - Klik **"Start your project"** atau **"Sign In"**

2. **Daftar/Login**
   - Pilih **"Sign in with GitHub"** (paling mudah)
   - Atau daftar dengan email

3. **Buat Project Baru**
   - Klik **"New Project"**
   - Isi form:
     - **Name**: `profil-desa-penengahan` (atau nama bebas)
     - **Database Password**: Buat password yang kuat (SIMPAN!)
     - **Region**: Pilih **Southeast Asia (Singapore)** (terdekat)
     - **Pricing Plan**: **Free** (sudah terpilih)
   - Klik **"Create new project"**
   - Tunggu **1-2 menit** project dibuat

---

### 2️⃣ Setup Database (3 menit)

1. **Buka SQL Editor**
   - Di sidebar kiri, klik **"SQL Editor"**
   - Klik **"New query"**

2. **Jalankan Schema**
   - Copy semua isi file `supabase/schema.sql`
   - Paste ke SQL Editor
   - Klik **"Run"** atau tekan `Ctrl + Enter`
   - Tunggu sampai muncul **"Success. No rows returned"**
   - ✅ Database tables sudah dibuat!

3. **Jalankan Seed Data**
   - Buat query baru (klik **"New query"**)
   - Copy semua isi file `supabase/seed.sql`
   - Paste ke SQL Editor
   - Klik **"Run"**
   - Akan muncul: `"Data berhasil diinsert!"`
   - ✅ Data awal sudah masuk!

4. **Verifikasi Data**
   - Klik **"Table Editor"** di sidebar
   - Klik table **"desa"** → lihat data sudah ada
   - Klik **"view_desa_lengkap"** → lihat semua data lengkap
   - ✅ Kalau data muncul, berhasil!

---

### 3️⃣ Ambil API Credentials (1 menit)

1. **Buka Settings**
   - Klik **"Settings"** (icon gear ⚙️) di sidebar kiri bawah
   - Klik **"API"**

2. **Copy Credentials**
   ```
   Project URL: https://xxxxx.supabase.co
   anon/public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
   
   **⚠️ JANGAN share service_role key (bisa edit database!)**

---

### 4️⃣ Setup Environment Variables (2 menit)

1. **Buat file `.env`**
   ```bash
   # Di root folder project
   copy .env.example .env
   ```

2. **Edit file `.env`**
   Buka `.env` dan isi dengan credentials tadi:
   ```env
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

   **Ganti:**
   - `xxxxx` dengan Project URL Anda
   - `eyJh...` dengan anon key Anda

3. **Save file** (Ctrl + S)

---

### 5️⃣ Test Aplikasi (1 menit)

1. **Restart development server**
   ```bash
   # Stop server (Ctrl + C)
   # Start lagi
   npm run dev
   ```

2. **Buka browser**
   - Buka: http://localhost:5173
   - Data desa seharusnya muncul!
   - Kalau ada loading text, tunggu sebentar
   - ✅ Kalau data muncul = **BERHASIL!**

---

## 🎉 Selesai!

Aplikasi sekarang sudah terhubung ke Supabase dan data sudah dinamis!

---

## 🔧 Troubleshooting

### ❌ Error: "Failed to fetch"
**Penyebab:** Supabase URL/Key salah atau `.env` tidak terbaca

**Solusi:**
1. Cek `.env` file ada dan isinya benar
2. Restart dev server (Ctrl+C, lalu `npm run dev`)
3. Clear browser cache (Ctrl+Shift+Delete)
4. Cek di Supabase dashboard > Settings > API (credentials benar?)

---

### ❌ Error: "relation does not exist"
**Penyebab:** Schema belum dijalankan atau salah

**Solusi:**
1. Buka Supabase > SQL Editor
2. Jalankan `supabase/schema.sql` lagi
3. Lalu jalankan `supabase/seed.sql`

---

### ❌ Data tidak muncul / Loading terus
**Penyebab:** View belum dibuat atau RLS policy salah

**Solusi:**
1. Cek Table Editor > Views > `view_desa_lengkap` ada?
2. Kalau tidak ada, jalankan ulang `schema.sql`
3. Cek browser console (F12) untuk error message
4. Cek Network tab > lihat response dari Supabase

---

### ❌ "No rows returned" saat seed
**Penyebab:** Schema belum ada atau error di seed.sql

**Solusi:**
1. Jalankan `schema.sql` dulu
2. Baru jalankan `seed.sql`
3. Cek error message di SQL Editor

---

## 📊 Cara Edit Data di Supabase Dashboard

### Edit Data Langsung:
1. Buka **Table Editor**
2. Klik table yang mau diedit (misal `statistik`)
3. Klik cell yang mau diubah
4. Edit value
5. Klik di luar cell atau Enter
6. ✅ Refresh website → data berubah!

### Edit via SQL:
```sql
-- Update jumlah penduduk
UPDATE statistik 
SET penduduk = 2200, laki = 1100, perempuan = 1100
WHERE desa_id = (SELECT id FROM desa WHERE nama = 'Desa Penengahan');

-- Update nama kepala desa
UPDATE pemerintahan 
SET kades = 'Nama Baru', sekdes = 'Sekdes Baru'
WHERE desa_id = (SELECT id FROM desa WHERE nama = 'Desa Penengahan');

-- Tambah dusun baru
INSERT INTO penduduk_dusun (desa_id, dusun, jiwa, urutan)
VALUES (
    (SELECT id FROM desa WHERE nama = 'Desa Penengahan'),
    'Dusun VII',
    400,
    7
);
```

---

## 🌐 Deploy ke Production

Aplikasi sudah siap deploy! Supabase sudah production-ready.

### Deploy Frontend ke Vercel (GRATIS):

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka https://vercel.com
   - Sign in with GitHub
   - Import repository
   - Add environment variables:
     - `VITE_SUPABASE_URL`: (dari Supabase)
     - `VITE_SUPABASE_ANON_KEY`: (dari Supabase)
   - Deploy!

3. **✅ Website live di:** `https://profil-desa-penengahan.vercel.app`

---

## 📈 Monitoring & Maintenance

### Cek Usage:
- Supabase Dashboard > **Settings** > **Usage**
- Lihat:
  - Database size (max 500MB free)
  - API requests (max 50K/hari free)
  - Bandwidth

### Backup Data:
1. Supabase Dashboard > **Database** > **Backups**
2. Free tier: Daily backup (7 hari)
3. Manual backup: SQL Editor > Run:
   ```sql
   -- Export semua data
   SELECT * FROM view_desa_lengkap;
   ```
   - Copy hasilnya
   - Save ke file JSON

---

## 🔐 Security Best Practices

✅ **Sudah aman:**
- Row Level Security (RLS) enabled
- Public bisa READ only
- UPDATE/DELETE butuh authentication

⚠️ **Untuk production:**
1. Jangan commit `.env` ke GitHub
2. Gunakan Vercel environment variables
3. Enable rate limiting di Supabase (upgrade plan)
4. Setup admin authentication untuk edit data

---

## 🆘 Butuh Bantuan?

**Check:**
1. ✅ Supabase project sudah dibuat?
2. ✅ Schema & seed sudah dijalankan?
3. ✅ `.env` file ada dan isinya benar?
4. ✅ Dev server sudah restart?
5. ✅ Browser console tidak ada error?

**Masih error?**
- Cek browser console (F12) → Console tab
- Cek Network tab → lihat request ke Supabase
- Cek Supabase logs: Dashboard > **Logs**

---

## 📚 Next Steps (Opsional)

- [ ] Tambah authentication untuk admin
- [ ] Buat halaman admin untuk edit data
- [ ] Tambah image upload (Supabase Storage)
- [ ] Setup custom domain
- [ ] Enable Supabase Realtime untuk auto-update
- [ ] Tambah analytics (Google Analytics/Plausible)

---

## 🎓 Resources

- **Supabase Docs:** https://supabase.com/docs
- **Supabase Dashboard:** https://app.supabase.com
- **PostgreSQL Docs:** https://postgresql.org/docs
- **Vite Env Vars:** https://vitejs.dev/guide/env-and-mode.html

---

**Selamat! Aplikasi profil desa Anda sudah menggunakan database real dan siap production!** 🎉
