// Contoh Backend API dengan Express.js
// Install dulu: npm install express cors

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Data desa (nanti bisa dari database)
const desaData = {
  nama: "Desa Penengahan",
  kecamatan: "Penengahan",
  kabupaten: "Lampung Selatan",
  ringkas: "Desa Penengahan merupakan desa tertua di Kecamatan Penengahan, telah ada sejak masa kolonial. Memiliki potensi pertanian/perkebunan dan peternakan yang kuat.",
  statistik: {
    penduduk: 2127,
    laki: 1082,
    perempuan: 1045,
    dusun: 6,
    rt: 14,
    kk: 589,
    luasHa: 1780,
  },
  batas: [
    { arah: "Utara", nilai: "Desa Tetaan & Gayam" },
    { arah: "Selatan", nilai: "Desa Sukabaru" },
    { arah: "Barat", nilai: "Desa Gayam & Gunung Rajabasa" },
    { arah: "Timur", nilai: "Desa Karang Sari" },
  ],
  orbitasi: [
    { label: "Ke ibukota kecamatan", value: "6 km (±30 menit)" },
    { label: "Ke ibukota kabupaten", value: "27 km (±45 menit)" },
  ],
  pendudukDusun: [
    { dusun: "Dusun I", jiwa: 359 },
    { dusun: "Dusun II", jiwa: 357 },
    { dusun: "Dusun III", jiwa: 356 },
    { dusun: "Dusun IV", jiwa: 356 },
    { dusun: "Dusun V (Gunung Botol)", jiwa: 357 },
    { dusun: "Dusun VI (PKS)", jiwa: 357 },
  ],
  lahan: [
    { nama: "Pemukiman", luas: "148 Ha" },
    { nama: "Pertanian Sawah", luas: "250 Ha" },
    { nama: "Ladang / Tegalan", luas: "1080 Ha" },
    { nama: "Jalan", luas: "120 Ha" },
    { nama: "Perkantoran", luas: "0,5 Ha" },
    { nama: "Sekolah", luas: "0,5 Ha" },
  ],
  potensi: {
    pertanian: [
      { komoditas: "Kakao", value: "403 Ha" },
      { komoditas: "Jagung", value: "327 Ha" },
      { komoditas: "Padi Sawah", value: "250 Ha" },
      { komoditas: "Palawija", value: "152 Ha" },
      { komoditas: "Padi Ladang", value: "80 Ha" },
      { komoditas: "Sawit", value: "32 Ha" },
      { komoditas: "Kelapa", value: "15 Ha" },
      { komoditas: "Kopi", value: "18 Ha" },
      { komoditas: "Singkong", value: "8 Ha" },
    ],
    peternakan: [
      { jenis: "Itik", value: "650 ekor" },
      { jenis: "Ayam", value: "508 ekor" },
      { jenis: "Kerbau", value: "69 ekor" },
      { jenis: "Kambing", value: "119 ekor" },
      { jenis: "Sapi", value: "27 ekor" },
    ],
    pekerjaan: [
      { jenis: "Petani", value: 1528 },
      { jenis: "Buruh", value: 176 },
      { jenis: "Pedagang", value: 72 },
      { jenis: "PNS", value: 20 },
      { jenis: "Swasta", value: 5 },
    ],
  },
  sarpras: [
    { nama: "Masjid/Musholla", jumlah: "8" },
    { nama: "SD/MI", jumlah: "2" },
    { nama: "Balai Desa", jumlah: "1" },
    { nama: "Kantor Desa", jumlah: "1" },
    { nama: "Poskamling", jumlah: "8" },
    { nama: "Jalan Dusun", jumlah: "8" },
    { nama: "Jalan Desa", jumlah: "4" },
    { nama: "Jembatan", jumlah: "6" },
    { nama: "Lapangan Voli", jumlah: "2" },
  ],
  pemerintahan: {
    kades: "Shofiuddin",
    sekdes: "Firdaus, S.Sos",
    bpd: "9 orang",
    dusun: [
      { nama: "Dusun I", rt: 3 },
      { nama: "Dusun II", rt: 2 },
      { nama: "Dusun III", rt: 2 },
      { nama: "Dusun IV", rt: 2 },
      { nama: "Dusun V (Gunung Botol)", rt: 2 },
      { nama: "Dusun VI (PKS)", rt: 3 },
    ],
  },
};

// GET: Ambil data desa
app.get('/api/desa', (req, res) => {
  res.json(desaData);
});

// PUT: Update data desa (untuk admin)
app.put('/api/desa', (req, res) => {
  // Tambahkan autentikasi di sini untuk keamanan
  Object.assign(desaData, req.body);
  res.json({ message: 'Data berhasil diupdate', data: desaData });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
