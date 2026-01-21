import mongoose from 'mongoose';

const statistikSchema = new mongoose.Schema({
  penduduk: { type: Number, required: true },
  laki: { type: Number, required: true },
  perempuan: { type: Number, required: true },
  dusun: { type: Number, required: true },
  rt: { type: Number, required: true },
  kk: { type: Number, required: true },
  luasHa: { type: Number, required: true },
});

const batasSchema = new mongoose.Schema({
  arah: { type: String, required: true },
  nilai: { type: String, required: true },
});

const orbitasiSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
});

const pendudukDusunSchema = new mongoose.Schema({
  dusun: { type: String, required: true },
  jiwa: { type: Number, required: true },
});

const lahanSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  luas: { type: String, required: true },
});

const komoditasSchema = new mongoose.Schema({
  komoditas: String,
  jenis: String,
  value: mongoose.Schema.Types.Mixed,
});

const potensiSchema = new mongoose.Schema({
  pertanian: [komoditasSchema],
  peternakan: [komoditasSchema],
  pekerjaan: [komoditasSchema],
});

const sarprasSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  jumlah: { type: String, required: true },
});

const dusunPemerintahanSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  rt: { type: Number, required: true },
});

const pemerintahanSchema = new mongoose.Schema({
  kades: { type: String, required: true },
  sekdes: { type: String, required: true },
  bpd: { type: String, required: true },
  dusun: [dusunPemerintahanSchema],
});

const desaSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      default: 'Desa Penengahan',
    },
    kecamatan: {
      type: String,
      required: true,
    },
    kabupaten: {
      type: String,
      required: true,
    },
    ringkas: {
      type: String,
      required: true,
    },
    statistik: {
      type: statistikSchema,
      required: true,
    },
    batas: [batasSchema],
    orbitasi: [orbitasiSchema],
    pendudukDusun: [pendudukDusunSchema],
    lahan: [lahanSchema],
    potensi: potensiSchema,
    sarpras: [sarprasSchema],
    pemerintahan: pemerintahanSchema,
  },
  {
    timestamps: true, // Menambahkan createdAt dan updatedAt
  }
);

const Desa = mongoose.model('Desa', desaSchema);

export default Desa;
