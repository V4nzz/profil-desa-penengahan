-- ============================================
-- DATA AWAL untuk Desa Penengahan
-- Jalankan SETELAH schema.sql
-- ============================================

-- 1. Insert data desa utama
INSERT INTO desa (nama, kecamatan, kabupaten, ringkas)
VALUES (
    'Desa Penengahan',
    'Penengahan',
    'Lampung Selatan',
    'Desa Penengahan merupakan desa tertua di Kecamatan Penengahan, telah ada sejak masa kolonial. Memiliki potensi pertanian/perkebunan dan peternakan yang kuat.'
);

-- Ambil ID desa yang baru dibuat
DO $$
DECLARE
    desa_id_var UUID;
    pemerintahan_id_var UUID;
BEGIN
    -- Get desa ID
    SELECT id INTO desa_id_var FROM desa WHERE nama = 'Desa Penengahan' LIMIT 1;

    -- 2. Insert statistik
    INSERT INTO statistik (desa_id, penduduk, laki, perempuan, dusun, rt, kk, luas_ha)
    VALUES (desa_id_var, 2127, 1082, 1045, 6, 14, 589, 1780);

    -- 3. Insert batas wilayah
    INSERT INTO batas (desa_id, arah, nilai, urutan) VALUES
    (desa_id_var, 'Utara', 'Desa Tetaan & Gayam', 1),
    (desa_id_var, 'Selatan', 'Desa Sukabaru', 2),
    (desa_id_var, 'Barat', 'Desa Gayam & Gunung Rajabasa', 3),
    (desa_id_var, 'Timur', 'Desa Karang Sari', 4);

    -- 4. Insert orbitasi
    INSERT INTO orbitasi (desa_id, label, value, urutan) VALUES
    (desa_id_var, 'Ke ibukota kecamatan', '6 km (±30 menit)', 1),
    (desa_id_var, 'Ke ibukota kabupaten', '27 km (±45 menit)', 2);

    -- 5. Insert penduduk per dusun
    INSERT INTO penduduk_dusun (desa_id, dusun, jiwa, urutan) VALUES
    (desa_id_var, 'Dusun I', 359, 1),
    (desa_id_var, 'Dusun II', 357, 2),
    (desa_id_var, 'Dusun III', 356, 3),
    (desa_id_var, 'Dusun IV', 356, 4),
    (desa_id_var, 'Dusun V (Gunung Botol)', 357, 5),
    (desa_id_var, 'Dusun VI (PKS)', 357, 6);

    -- 6. Insert lahan
    INSERT INTO lahan (desa_id, nama, luas, urutan) VALUES
    (desa_id_var, 'Pemukiman', '148 Ha', 1),
    (desa_id_var, 'Pertanian Sawah', '250 Ha', 2),
    (desa_id_var, 'Ladang / Tegalan', '1080 Ha', 3),
    (desa_id_var, 'Jalan', '120 Ha', 4),
    (desa_id_var, 'Perkantoran', '0,5 Ha', 5),
    (desa_id_var, 'Sekolah', '0,5 Ha', 6);

    -- 7. Insert potensi pertanian
    INSERT INTO potensi_pertanian (desa_id, komoditas, value, urutan) VALUES
    (desa_id_var, 'Kakao', '403 Ha', 1),
    (desa_id_var, 'Jagung', '327 Ha', 2),
    (desa_id_var, 'Padi Sawah', '250 Ha', 3),
    (desa_id_var, 'Palawija', '152 Ha', 4),
    (desa_id_var, 'Padi Ladang', '80 Ha', 5),
    (desa_id_var, 'Sawit', '32 Ha', 6),
    (desa_id_var, 'Kelapa', '15 Ha', 7),
    (desa_id_var, 'Kopi', '18 Ha', 8),
    (desa_id_var, 'Singkong', '8 Ha', 9);

    -- 8. Insert potensi peternakan
    INSERT INTO potensi_peternakan (desa_id, jenis, value, urutan) VALUES
    (desa_id_var, 'Itik', '650 ekor', 1),
    (desa_id_var, 'Ayam', '508 ekor', 2),
    (desa_id_var, 'Kerbau', '69 ekor', 3),
    (desa_id_var, 'Kambing', '119 ekor', 4),
    (desa_id_var, 'Sapi', '27 ekor', 5);

    -- 9. Insert pekerjaan
    INSERT INTO pekerjaan (desa_id, jenis, value, urutan) VALUES
    (desa_id_var, 'Petani', 1528, 1),
    (desa_id_var, 'Buruh', 176, 2),
    (desa_id_var, 'Pedagang', 72, 3),
    (desa_id_var, 'PNS', 20, 4),
    (desa_id_var, 'Swasta', 5, 5);

    -- 10. Insert sarana prasarana
    INSERT INTO sarpras (desa_id, nama, jumlah, urutan) VALUES
    (desa_id_var, 'Masjid/Musholla', '8', 1),
    (desa_id_var, 'SD/MI', '2', 2),
    (desa_id_var, 'Balai Desa', '1', 3),
    (desa_id_var, 'Kantor Desa', '1', 4),
    (desa_id_var, 'Poskamling', '8', 5),
    (desa_id_var, 'Jalan Dusun', '8', 6),
    (desa_id_var, 'Jalan Desa', '4', 7),
    (desa_id_var, 'Jembatan', '6', 8),
    (desa_id_var, 'Lapangan Voli', '2', 9);

    -- 11. Insert pemerintahan
    INSERT INTO pemerintahan (desa_id, kades, sekdes, bpd)
    VALUES (desa_id_var, 'Shofiuddin', 'Firdaus, S.Sos', '9 orang')
    RETURNING id INTO pemerintahan_id_var;

    -- 12. Insert dusun pemerintahan
    INSERT INTO dusun_pemerintahan (pemerintahan_id, nama, rt, urutan) VALUES
    (pemerintahan_id_var, 'Dusun I', 3, 1),
    (pemerintahan_id_var, 'Dusun II', 2, 2),
    (pemerintahan_id_var, 'Dusun III', 2, 3),
    (pemerintahan_id_var, 'Dusun IV', 2, 4),
    (pemerintahan_id_var, 'Dusun V (Gunung Botol)', 2, 5),
    (pemerintahan_id_var, 'Dusun VI (PKS)', 3, 6);

END $$;

-- Verifikasi data berhasil diinsert
SELECT 'Data berhasil diinsert!' as status,
       (SELECT COUNT(*) FROM desa) as jumlah_desa,
       (SELECT COUNT(*) FROM statistik) as jumlah_statistik,
       (SELECT COUNT(*) FROM batas) as jumlah_batas,
       (SELECT COUNT(*) FROM penduduk_dusun) as jumlah_dusun;
