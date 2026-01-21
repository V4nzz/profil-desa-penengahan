import Desa from '../models/Desa.js';

// @desc    Get data desa
// @route   GET /api/desa
// @access  Public
export const getDesaData = async (req, res) => {
  try {
    // Ambil data desa (biasanya cuma ada 1 dokumen)
    const desa = await Desa.findOne();

    if (!desa) {
      return res.status(404).json({
        success: false,
        message: 'Data desa tidak ditemukan',
      });
    }

    res.status(200).json({
      success: true,
      data: desa,
    });
  } catch (error) {
    console.error('Error getting desa data:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data desa',
      error: error.message,
    });
  }
};

// @desc    Create initial data desa (one-time setup)
// @route   POST /api/desa/init
// @access  Private (seharusnya butuh auth)
export const initDesaData = async (req, res) => {
  try {
    // Cek apakah data sudah ada
    const existingDesa = await Desa.findOne();
    
    if (existingDesa) {
      return res.status(400).json({
        success: false,
        message: 'Data desa sudah ada. Gunakan PUT untuk update.',
      });
    }

    // Data initial dari desaData.js
    const initialData = {
      nama: 'Desa Penengahan',
      kecamatan: 'Penengahan',
      kabupaten: 'Lampung Selatan',
      ringkas: 'Desa Penengahan merupakan desa tertua di Kecamatan Penengahan, telah ada sejak masa kolonial. Memiliki potensi pertanian/perkebunan dan peternakan yang kuat.',
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
        { arah: 'Utara', nilai: 'Desa Tetaan & Gayam' },
        { arah: 'Selatan', nilai: 'Desa Sukabaru' },
        { arah: 'Barat', nilai: 'Desa Gayam & Gunung Rajabasa' },
        { arah: 'Timur', nilai: 'Desa Karang Sari' },
      ],
      orbitasi: [
        { label: 'Ke ibukota kecamatan', value: '6 km (±30 menit)' },
        { label: 'Ke ibukota kabupaten', value: '27 km (±45 menit)' },
      ],
      pendudukDusun: [
        { dusun: 'Dusun I', jiwa: 359 },
        { dusun: 'Dusun II', jiwa: 357 },
        { dusun: 'Dusun III', jiwa: 356 },
        { dusun: 'Dusun IV', jiwa: 356 },
        { dusun: 'Dusun V (Gunung Botol)', jiwa: 357 },
        { dusun: 'Dusun VI (PKS)', jiwa: 357 },
      ],
      lahan: [
        { nama: 'Pemukiman', luas: '148 Ha' },
        { nama: 'Pertanian Sawah', luas: '250 Ha' },
        { nama: 'Ladang / Tegalan', luas: '1080 Ha' },
        { nama: 'Jalan', luas: '120 Ha' },
        { nama: 'Perkantoran', luas: '0,5 Ha' },
        { nama: 'Sekolah', luas: '0,5 Ha' },
      ],
      potensi: {
        pertanian: [
          { komoditas: 'Kakao', value: '403 Ha' },
          { komoditas: 'Jagung', value: '327 Ha' },
          { komoditas: 'Padi Sawah', value: '250 Ha' },
          { komoditas: 'Palawija', value: '152 Ha' },
          { komoditas: 'Padi Ladang', value: '80 Ha' },
          { komoditas: 'Sawit', value: '32 Ha' },
          { komoditas: 'Kelapa', value: '15 Ha' },
          { komoditas: 'Kopi', value: '18 Ha' },
          { komoditas: 'Singkong', value: '8 Ha' },
        ],
        peternakan: [
          { jenis: 'Itik', value: '650 ekor' },
          { jenis: 'Ayam', value: '508 ekor' },
          { jenis: 'Kerbau', value: '69 ekor' },
          { jenis: 'Kambing', value: '119 ekor' },
          { jenis: 'Sapi', value: '27 ekor' },
        ],
        pekerjaan: [
          { jenis: 'Petani', value: 1528 },
          { jenis: 'Buruh', value: 176 },
          { jenis: 'Pedagang', value: 72 },
          { jenis: 'PNS', value: 20 },
          { jenis: 'Swasta', value: 5 },
        ],
      },
      sarpras: [
        { nama: 'Masjid/Musholla', jumlah: '8' },
        { nama: 'SD/MI', jumlah: '2' },
        { nama: 'Balai Desa', jumlah: '1' },
        { nama: 'Kantor Desa', jumlah: '1' },
        { nama: 'Poskamling', jumlah: '8' },
        { nama: 'Jalan Dusun', jumlah: '8' },
        { nama: 'Jalan Desa', jumlah: '4' },
        { nama: 'Jembatan', jumlah: '6' },
        { nama: 'Lapangan Voli', jumlah: '2' },
      ],
      pemerintahan: {
        kades: 'Shofiuddin',
        sekdes: 'Firdaus, S.Sos',
        bpd: '9 orang',
        dusun: [
          { nama: 'Dusun I', rt: 3 },
          { nama: 'Dusun II', rt: 2 },
          { nama: 'Dusun III', rt: 2 },
          { nama: 'Dusun IV', rt: 2 },
          { nama: 'Dusun V (Gunung Botol)', rt: 2 },
          { nama: 'Dusun VI (PKS)', rt: 3 },
        ],
      },
    };

    const desa = await Desa.create(initialData);

    res.status(201).json({
      success: true,
      message: 'Data desa berhasil diinisialisasi',
      data: desa,
    });
  } catch (error) {
    console.error('Error initializing desa data:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal menginisialisasi data desa',
      error: error.message,
    });
  }
};

// @desc    Update data desa
// @route   PUT /api/desa
// @access  Private (seharusnya butuh auth)
export const updateDesaData = async (req, res) => {
  try {
    const desa = await Desa.findOne();

    if (!desa) {
      return res.status(404).json({
        success: false,
        message: 'Data desa tidak ditemukan. Gunakan POST /api/desa/init untuk inisialisasi.',
      });
    }

    // Update dengan data dari request body
    const updatedDesa = await Desa.findByIdAndUpdate(
      desa._id,
      req.body,
      {
        new: true, // Return updated document
        runValidators: true, // Run model validators
      }
    );

    res.status(200).json({
      success: true,
      message: 'Data desa berhasil diupdate',
      data: updatedDesa,
    });
  } catch (error) {
    console.error('Error updating desa data:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengupdate data desa',
      error: error.message,
    });
  }
};

// @desc    Update specific field (partial update)
// @route   PATCH /api/desa/:field
// @access  Private
export const updateDesaField = async (req, res) => {
  try {
    const { field } = req.params;
    const desa = await Desa.findOne();

    if (!desa) {
      return res.status(404).json({
        success: false,
        message: 'Data desa tidak ditemukan',
      });
    }

    // Update field spesifik
    const updateData = { [field]: req.body[field] };
    const updatedDesa = await Desa.findByIdAndUpdate(
      desa._id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: `Field '${field}' berhasil diupdate`,
      data: updatedDesa,
    });
  } catch (error) {
    console.error('Error updating field:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengupdate field',
      error: error.message,
    });
  }
};

// @desc    Delete data desa (be careful!)
// @route   DELETE /api/desa
// @access  Private (HARUS ada auth!)
export const deleteDesaData = async (req, res) => {
  try {
    const desa = await Desa.findOne();

    if (!desa) {
      return res.status(404).json({
        success: false,
        message: 'Data desa tidak ditemukan',
      });
    }

    await Desa.findByIdAndDelete(desa._id);

    res.status(200).json({
      success: true,
      message: 'Data desa berhasil dihapus',
    });
  } catch (error) {
    console.error('Error deleting desa data:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal menghapus data desa',
      error: error.message,
    });
  }
};
