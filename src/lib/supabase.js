import { createClient } from '@supabase/supabase-js';

// Supabase credentials (AKAN DIGANTI dengan nilai dari dashboard)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Tidak perlu session untuk public read
  },
});

// Helper function untuk transform data dari Supabase ke format yang dipakai aplikasi
export const transformDesaData = (data) => {
  if (!data) return null;

  return {
    nama: data.nama,
    kecamatan: data.kecamatan,
    kabupaten: data.kabupaten,
    ringkas: data.ringkas,
    statistik: data.statistik,
    batas: data.batas || [],
    orbitasi: data.orbitasi || [],
    pendudukDusun: data.pendudukDusun || [],
    lahan: data.lahan || [],
    potensi: data.potensi || { pertanian: [], peternakan: [], pekerjaan: [] },
    sarpras: data.sarpras || [],
    pemerintahan: data.pemerintahan || { kades: '', sekdes: '', bpd: '', dusun: [] },
  };
};
