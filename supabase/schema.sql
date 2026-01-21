-- ============================================
-- SQL Schema untuk Profil Desa Penengahan
-- Database: Supabase PostgreSQL
-- ============================================

-- 1. Buat tabel utama desa
CREATE TABLE desa (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nama VARCHAR(255) NOT NULL DEFAULT 'Desa Penengahan',
    kecamatan VARCHAR(255) NOT NULL,
    kabupaten VARCHAR(255) NOT NULL,
    ringkas TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabel statistik
CREATE TABLE statistik (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    penduduk INTEGER NOT NULL,
    laki INTEGER NOT NULL,
    perempuan INTEGER NOT NULL,
    dusun INTEGER NOT NULL,
    rt INTEGER NOT NULL,
    kk INTEGER NOT NULL,
    luas_ha NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabel batas wilayah
CREATE TABLE batas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    arah VARCHAR(50) NOT NULL,
    nilai TEXT NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- 4. Tabel orbitasi
CREATE TABLE orbitasi (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    label VARCHAR(255) NOT NULL,
    value VARCHAR(255) NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- 5. Tabel penduduk per dusun
CREATE TABLE penduduk_dusun (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    dusun VARCHAR(255) NOT NULL,
    jiwa INTEGER NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- 6. Tabel lahan
CREATE TABLE lahan (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    nama VARCHAR(255) NOT NULL,
    luas VARCHAR(100) NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- 7. Tabel potensi pertanian
CREATE TABLE potensi_pertanian (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    komoditas VARCHAR(255) NOT NULL,
    value VARCHAR(100) NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- 8. Tabel potensi peternakan
CREATE TABLE potensi_peternakan (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    jenis VARCHAR(255) NOT NULL,
    value VARCHAR(100) NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- 9. Tabel pekerjaan
CREATE TABLE pekerjaan (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    jenis VARCHAR(255) NOT NULL,
    value INTEGER NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- 10. Tabel sarana prasarana
CREATE TABLE sarpras (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    nama VARCHAR(255) NOT NULL,
    jumlah VARCHAR(50) NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- 11. Tabel pemerintahan
CREATE TABLE pemerintahan (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    desa_id UUID REFERENCES desa(id) ON DELETE CASCADE,
    kades VARCHAR(255) NOT NULL,
    sekdes VARCHAR(255) NOT NULL,
    bpd VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 12. Tabel dusun pemerintahan
CREATE TABLE dusun_pemerintahan (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pemerintahan_id UUID REFERENCES pemerintahan(id) ON DELETE CASCADE,
    nama VARCHAR(255) NOT NULL,
    rt INTEGER NOT NULL,
    urutan INTEGER DEFAULT 0
);

-- ============================================
-- INDEXES untuk performa
-- ============================================
CREATE INDEX idx_statistik_desa_id ON statistik(desa_id);
CREATE INDEX idx_batas_desa_id ON batas(desa_id);
CREATE INDEX idx_orbitasi_desa_id ON orbitasi(desa_id);
CREATE INDEX idx_penduduk_dusun_desa_id ON penduduk_dusun(desa_id);
CREATE INDEX idx_lahan_desa_id ON lahan(desa_id);
CREATE INDEX idx_potensi_pertanian_desa_id ON potensi_pertanian(desa_id);
CREATE INDEX idx_potensi_peternakan_desa_id ON potensi_peternakan(desa_id);
CREATE INDEX idx_pekerjaan_desa_id ON pekerjaan(desa_id);
CREATE INDEX idx_sarpras_desa_id ON sarpras(desa_id);
CREATE INDEX idx_pemerintahan_desa_id ON pemerintahan(desa_id);
CREATE INDEX idx_dusun_pemerintahan_id ON dusun_pemerintahan(pemerintahan_id);

-- ============================================
-- TRIGGERS untuk auto-update timestamp
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_desa_updated_at
    BEFORE UPDATE ON desa
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_statistik_updated_at
    BEFORE UPDATE ON statistik
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pemerintahan_updated_at
    BEFORE UPDATE ON pemerintahan
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
-- Enable RLS untuk semua tabel
ALTER TABLE desa ENABLE ROW LEVEL SECURITY;
ALTER TABLE statistik ENABLE ROW LEVEL SECURITY;
ALTER TABLE batas ENABLE ROW LEVEL SECURITY;
ALTER TABLE orbitasi ENABLE ROW LEVEL SECURITY;
ALTER TABLE penduduk_dusun ENABLE ROW LEVEL SECURITY;
ALTER TABLE lahan ENABLE ROW LEVEL SECURITY;
ALTER TABLE potensi_pertanian ENABLE ROW LEVEL SECURITY;
ALTER TABLE potensi_peternakan ENABLE ROW LEVEL SECURITY;
ALTER TABLE pekerjaan ENABLE ROW LEVEL SECURITY;
ALTER TABLE sarpras ENABLE ROW LEVEL SECURITY;
ALTER TABLE pemerintahan ENABLE ROW LEVEL SECURITY;
ALTER TABLE dusun_pemerintahan ENABLE ROW LEVEL SECURITY;

-- Policy: Semua orang bisa READ (public website)
CREATE POLICY "Allow public read access" ON desa FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON statistik FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON batas FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON orbitasi FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON penduduk_dusun FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON lahan FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON potensi_pertanian FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON potensi_peternakan FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON pekerjaan FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON sarpras FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON pemerintahan FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON dusun_pemerintahan FOR SELECT USING (true);

-- Policy: Hanya authenticated users yang bisa INSERT/UPDATE/DELETE
-- (Nanti bisa dikustomisasi untuk role admin saja)
CREATE POLICY "Allow authenticated insert" ON desa FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON desa FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated delete" ON desa FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated insert" ON statistik FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update" ON statistik FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated delete" ON statistik FOR DELETE TO authenticated USING (true);

-- (Ulangi untuk tabel lainnya sesuai kebutuhan)

-- ============================================
-- VIEW untuk mempermudah query
-- ============================================
CREATE OR REPLACE VIEW view_desa_lengkap AS
SELECT 
    d.id,
    d.nama,
    d.kecamatan,
    d.kabupaten,
    d.ringkas,
    json_build_object(
        'penduduk', s.penduduk,
        'laki', s.laki,
        'perempuan', s.perempuan,
        'dusun', s.dusun,
        'rt', s.rt,
        'kk', s.kk,
        'luasHa', s.luas_ha
    ) as statistik,
    (SELECT json_agg(json_build_object('arah', arah, 'nilai', nilai) ORDER BY urutan)
     FROM batas WHERE desa_id = d.id) as batas,
    (SELECT json_agg(json_build_object('label', label, 'value', value) ORDER BY urutan)
     FROM orbitasi WHERE desa_id = d.id) as orbitasi,
    (SELECT json_agg(json_build_object('dusun', dusun, 'jiwa', jiwa) ORDER BY urutan)
     FROM penduduk_dusun WHERE desa_id = d.id) as "pendudukDusun",
    (SELECT json_agg(json_build_object('nama', nama, 'luas', luas) ORDER BY urutan)
     FROM lahan WHERE desa_id = d.id) as lahan,
    json_build_object(
        'pertanian', (SELECT json_agg(json_build_object('komoditas', komoditas, 'value', value) ORDER BY urutan)
                      FROM potensi_pertanian WHERE desa_id = d.id),
        'peternakan', (SELECT json_agg(json_build_object('jenis', jenis, 'value', value) ORDER BY urutan)
                       FROM potensi_peternakan WHERE desa_id = d.id),
        'pekerjaan', (SELECT json_agg(json_build_object('jenis', jenis, 'value', value) ORDER BY urutan)
                      FROM pekerjaan WHERE desa_id = d.id)
    ) as potensi,
    (SELECT json_agg(json_build_object('nama', nama, 'jumlah', jumlah) ORDER BY urutan)
     FROM sarpras WHERE desa_id = d.id) as sarpras,
    (SELECT json_build_object(
        'kades', p.kades,
        'sekdes', p.sekdes,
        'bpd', p.bpd,
        'dusun', (SELECT json_agg(json_build_object('nama', nama, 'rt', rt) ORDER BY urutan)
                  FROM dusun_pemerintahan WHERE pemerintahan_id = p.id)
    ) FROM pemerintahan p WHERE p.desa_id = d.id) as pemerintahan,
    d.created_at,
    d.updated_at
FROM desa d
LEFT JOIN statistik s ON s.desa_id = d.id;

-- Grant access untuk view
GRANT SELECT ON view_desa_lengkap TO anon, authenticated;
