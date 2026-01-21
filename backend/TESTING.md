# API Testing dengan PowerShell

## Test semua endpoint menggunakan PowerShell

### 1. Get Data Desa (Public)
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/desa" -Method GET
```

### 2. Initialize Data (First Time)
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/desa/init" -Method POST
```

### 3. Update Data Lengkap
```powershell
$updateData = @{
    nama = "Desa Penengahan"
    statistik = @{
        penduduk = 2200
        laki = 1100
        perempuan = 1100
        dusun = 6
        rt = 14
        kk = 600
        luasHa = 1780
    }
} | ConvertTo-Json -Depth 10

Invoke-RestMethod -Uri "http://localhost:3000/api/desa" -Method PUT -ContentType "application/json" -Body $updateData
```

### 4. Update Nama Desa Saja
```powershell
$nameUpdate = @{
    nama = "Desa Penengahan Update"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/desa/nama" -Method PATCH -ContentType "application/json" -Body $nameUpdate
```

### 5. Update Statistik Saja
```powershell
$statsUpdate = @{
    statistik = @{
        penduduk = 2250
        laki = 1125
        perempuan = 1125
        dusun = 6
        rt = 15
        kk = 610
        luasHa = 1780
    }
} | ConvertTo-Json -Depth 10

Invoke-RestMethod -Uri "http://localhost:3000/api/desa/statistik" -Method PATCH -ContentType "application/json" -Body $statsUpdate
```

### 6. Update Kepala Desa
```powershell
$pemUpdate = @{
    pemerintahan = @{
        kades = "Kepala Desa Baru"
        sekdes = "Sekretaris Baru"
        bpd = "9 orang"
        dusun = @(
            @{ nama = "Dusun I"; rt = 3 }
            @{ nama = "Dusun II"; rt = 2 }
            @{ nama = "Dusun III"; rt = 2 }
            @{ nama = "Dusun IV"; rt = 2 }
            @{ nama = "Dusun V (Gunung Botol)"; rt = 2 }
            @{ nama = "Dusun VI (PKS)"; rt = 3 }
        )
    }
} | ConvertTo-Json -Depth 10

Invoke-RestMethod -Uri "http://localhost:3000/api/desa/pemerintahan" -Method PATCH -ContentType "application/json" -Body $pemUpdate
```

### 7. Check Server Status
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/" -Method GET
```

---

## Tips PowerShell

### Simpan response ke variable
```powershell
$response = Invoke-RestMethod -Uri "http://localhost:3000/api/desa" -Method GET
$response.data.nama
$response.data.statistik.penduduk
```

### Format output lebih bagus
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/desa" -Method GET | ConvertTo-Json -Depth 10
```

### Error handling
```powershell
try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/desa" -Method GET
    Write-Host "Success!" -ForegroundColor Green
    $response
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
}
```
