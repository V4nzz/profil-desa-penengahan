# ⚡ Quick Start - Supabase Setup (5 Menit!)

## ✅ Checklist Setup

### 1. Daftar Supabase (2 menit)
- [ ] Buka https://supabase.com
- [ ] Sign in with GitHub
- [ ] Buat project baru:
  - Name: `profil-desa-penengahan`
  - Region: **Southeast Asia (Singapore)**
  - Password: (buat & simpan!)
- [ ] Tunggu project siap (~2 menit)

### 2. Setup Database (2 menit)
- [ ] Buka **SQL Editor** → **New query**
- [ ] Copy & paste `supabase/schema.sql` → **Run**
- [ ] New query lagi
- [ ] Copy & paste `supabase/seed.sql` → **Run**
- [ ] Cek **Table Editor** → **view_desa_lengkap** → data ada? ✅

### 3. Setup Frontend (1 menit)
- [ ] Buka **Settings** → **API**
- [ ] Copy **Project URL** dan **anon key**
- [ ] Buat file `.env`:
  ```env
  VITE_SUPABASE_URL=https://xxxxx.supabase.co
  VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
  ```
- [ ] Restart server: `npm run dev`

### 4. Test
- [ ] Buka http://localhost:5173
- [ ] Data muncul? ✅ **SELESAI!**

---

## 🆘 Kalau Error?

**Data tidak muncul:**
1. Cek `.env` file ada dan isinya benar
2. Restart server (Ctrl+C, `npm run dev`)
3. F12 → Console → cek error message

**"relation does not exist":**
1. Jalankan ulang `schema.sql` di SQL Editor

**Masih error?**
- Baca [SUPABASE-SETUP.md](SUPABASE-SETUP.md) untuk troubleshooting lengkap

---

## 🎉 Selesai!

Website sudah pakai database real dan siap production!

**Next:** Deploy ke Vercel (lihat SUPABASE-SETUP.md)
