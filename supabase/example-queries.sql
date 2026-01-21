# Contoh Query SQL untuk Edit Data Desa

Gunakan SQL Editor di Supabase Dashboard untuk menjalankan query ini.

## 1. Update Statistik Penduduk

```sql
-- Update jumlah penduduk
UPDATE statistik 
SET 
    penduduk = 2200,
    laki = 1110,
    perempuan = 1090,
    kk = 600
WHERE desa_id = (SELECT id FROM desa LIMIT 1);
```

## 2. Update Nama Kepala Desa

```sql
-- Update pemerintahan
UPDATE pemerintahan 
SET 
    kades = 'Nama Kepala Desa Baru',
    sekdes = 'Nama Sekretaris Baru'
WHERE desa_id = (SELECT id FROM desa LIMIT 1);
```

## 3. Tambah Komoditas Pertanian Baru

```sql
-- Tambah komoditas baru
INSERT INTO potensi_pertanian (desa_id, komoditas, value, urutan)
VALUES (
    (SELECT id FROM desa LIMIT 1),
    'Durian',
    '25 Ha',
    10
);
```

## 4. Update Jumlah Penduduk per Dusun

```sql
-- Update penduduk Dusun I
UPDATE penduduk_dusun 
SET jiwa = 370
WHERE dusun = 'Dusun I';
```

## 5. Tambah Sarana Prasarana

```sql
-- Tambah fasilitas baru
INSERT INTO sarpras (desa_id, nama, jumlah, urutan)
VALUES (
    (SELECT id FROM desa LIMIT 1),
    'Puskesmas Pembantu',
    '1',
    10
);
```

## 6. Update Deskripsi Desa

```sql
-- Update ringkasan desa
UPDATE desa 
SET ringkas = 'Desa Penengahan merupakan desa yang berkembang pesat...'
WHERE nama = 'Desa Penengahan';
```

## 7. Hapus Data (Hati-hati!)

```sql
-- Hapus komoditas tertentu
DELETE FROM potensi_pertanian 
WHERE komoditas = 'Singkong';

-- Hapus sarana prasarana
DELETE FROM sarpras 
WHERE nama = 'Lapangan Voli';
```

## 8. Lihat Semua Data Lengkap

```sql
-- Query data lengkap (seperti yang dilihat di website)
SELECT * FROM view_desa_lengkap;
```

## 9. Update Multiple Fields Sekaligus

```sql
-- Update beberapa field statistik
UPDATE statistik 
SET 
    penduduk = penduduk + 50,  -- Tambah 50 jiwa
    kk = kk + 10,              -- Tambah 10 KK
    updated_at = NOW()
WHERE desa_id = (SELECT id FROM desa LIMIT 1);
```

## 10. Backup Data ke JSON

```sql
-- Export data untuk backup
SELECT json_build_object(
    'desa', (SELECT row_to_json(d) FROM desa d),
    'statistik', (SELECT row_to_json(s) FROM statistik s),
    'batas', (SELECT json_agg(b) FROM batas b),
    'orbitasi', (SELECT json_agg(o) FROM orbitasi o)
) as backup_data;
```

---

## Tips:

1. **Test di SELECT dulu** sebelum UPDATE/DELETE:
   ```sql
   -- Test dulu
   SELECT * FROM statistik WHERE desa_id = (SELECT id FROM desa LIMIT 1);
   
   -- Kalau sudah yakin, baru UPDATE
   UPDATE statistik SET penduduk = 2200 WHERE desa_id = (SELECT id FROM desa LIMIT 1);
   ```

2. **Gunakan Transaction** untuk update banyak:
   ```sql
   BEGIN;
   UPDATE statistik SET penduduk = 2200;
   UPDATE pemerintahan SET kades = 'Nama Baru';
   COMMIT;  -- Atau ROLLBACK; kalau ada error
   ```

3. **Always backup** sebelum DELETE atau UPDATE besar:
   ```sql
   -- Backup table
   CREATE TABLE statistik_backup AS SELECT * FROM statistik;
   ```
