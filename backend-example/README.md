# Backend API untuk Profil Desa

## Setup Backend (Node.js + Express)

### 1. Install dependencies
```bash
cd backend-example
npm init -y
npm install express cors
```

### 2. Jalankan server
```bash
node server.js
```

Server akan berjalan di `http://localhost:3000`

### 3. Update URL di frontend
Edit file `src/hooks/useDesaData.js` dan ubah:
```javascript
const API_URL = 'http://localhost:3000/api/desa';
```

## Endpoints API

### GET /api/desa
Mengambil semua data desa
```bash
curl http://localhost:3000/api/desa
```

### PUT /api/desa
Update data desa (untuk admin)
```bash
curl -X PUT http://localhost:3000/api/desa \
  -H "Content-Type: application/json" \
  -d '{"nama": "Desa Penengahan Update"}'
```

## Next Steps

### Untuk Production:
1. **Gunakan Database** (MongoDB, PostgreSQL, MySQL)
2. **Tambahkan Autentikasi** (JWT, OAuth)
3. **Deploy Backend** (Vercel, Railway, Heroku)
4. **Environment Variables** untuk API URL

### Alternatif Tanpa Backend:
- **Firebase/Firestore** - Real-time database
- **Supabase** - PostgreSQL as a service
- **Strapi** - Headless CMS
- **Contentful** - Content management
