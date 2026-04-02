# 📊 Shopee Earphone Market Analysis

End-to-end analytics project: web scraping (Node.js) → data preprocessing (Python) → exploratory data analysis & dashboard (Power BI).

---

## 🚀 Project Overview

Pasar earphone di Shopee Indonesia sangat kompetitif, dengan ratusan produk dan toko yang bersaing pada berbagai rentang harga, spesifikasi, dan reputasi.

Proyek ini bertujuan untuk mengidentifikasi **strategi optimal bagi seller** dalam menentukan:
- Produk yang dijual
- Harga yang kompetitif
- Faktor utama yang mendorong penjualan

---

## 🎯 Main Business Question

> **“Bagaimana seller dapat menentukan produk, harga, dan spesifikasi earphone yang optimal untuk memaksimalkan penjualan di Shopee?”**

---

## 🧠 Methodology

![alt text](images/scheme.png)

Proses analisis mencakup:
1. Data collection melalui scraping Shopee API
2. Data cleaning & transformation (Python)
3. Data modeling & dashboard (Power BI)
4. Exploratory Data Analysis (EDA)

---

## 📦 Dataset Summary

Dataset terdiri dari:
- **792 produk**
- **413 toko**
- Total penjualan: ~691 ribu unit
- Total stok: ~66 juta unit

Data mencakup:
- Produk (harga, rating, sold, dll)
- Toko (rating, lokasi, cancellation rate)
- Interaksi user (komentar, like)

---

# 🔍 Key Insights

---

## 🎧 A. Produk Apa yang Harus Dijual?

- Produk **TWS (Wireless)** mendominasi pasar
- Brand seperti **ROBOT, Baseus, dan TWS-type products** memiliki performa penjualan tinggi
- **60,48% produk menggunakan label “Gaming”**

👉 Namun:
- Performa **Gaming vs Non-Gaming relatif seimbang**
- Label gaming lebih berfungsi sebagai **marketing positioning**, bukan penentu utama penjualan

### 💡 Insight:
> Produk **TWS dengan fitur gaming (low latency)** memiliki demand tinggi, namun berada di **red ocean market (kompetisi tinggi)**

---

## 💰 B. Harga Ideal Berapa?

### 🎯 Ditemukan 2 sweet spot:

1. **Entry Level (< Rp50.000)**
   - Volume tinggi
   - Cocok untuk penetration strategy

2. **Mid-Range (Rp250.000 – Rp300.000)**
   - Memiliki **rata-rata penjualan tertinggi**
   - Menunjukkan kepercayaan konsumen terhadap produk kualitas menengah

### ❗ Insight penting:
- Harga murah ≠ selalu paling laku
- Distribusi produk memang menumpuk di harga rendah
- Tapi performa terbaik justru di mid-range

### 💡 Insight:
> Range **Rp250.000 – Rp300.000** adalah titik optimal untuk **balance antara volume dan profit**

---

## ⭐ C. Faktor yang Mempengaruhi Penjualan

### 🔥 1. Rating (Critical Factor)
- Penjualan mulai meningkat signifikan di **rating ≥ 4.5**
- Produk dengan rating < 4.0 hampir tidak memiliki penjualan

---

### 💬 2. Komentar (Strong Driver)
- Hubungan positif kuat antara **jumlah komentar dan penjualan**
- Lebih konsisten dibanding like

👉 Semakin tinggi interaksi:
→ semakin tinggi trust  
→ semakin tinggi konversi

---

### 🎯 3. Diskon
- Efektif di range **60% – 80%**
- Diskon kecil (<20%) kurang impactful

---

### ⚠️ 4. Cancellation Rate
- Harus **0%**
- Sedikit kenaikan → penjualan langsung turun drastis

---

### 📍 5. Lokasi
- Seller dari **Jabodetabek (DKI Jakarta & Banten)** memiliki performa penjualan lebih tinggi
- Faktor logistik berpengaruh terhadap konversi

---

# 📊 Dashboard

Dashboard terdiri dari 3 halaman:

### 1. Market Overview
- Distribusi harga
- Top brand
- Market composition

### 2. Shop Analysis
- Performa toko
- Lokasi
- Rating & kredibilitas

### 3. Product Analysis
- Filtering produk advanced
- Spesifikasi detail (gaming, garansi, dll)

📁 **File:** `power-bi/shopee.pbix`  
🌐 **Online Dashboard:** [Link Dashboard](https://app.powerbi.com/...)

---

# 💡 Final Business Recommendation

Untuk memaksimalkan penjualan di Shopee:

- 🎧 Fokus pada **produk TWS (Wireless)**
- 🎮 Tambahkan fitur **Gaming (Low Latency)**
- 💰 Gunakan pricing di **Rp250.000 – Rp300.000**
- 🎯 Berikan diskon **>50% (ideal 60–80%)**
- ⭐ Jaga rating minimal **4.7+**
- 💬 Tingkatkan **jumlah review & interaksi**
- ⚠️ Pastikan **cancellation rate = 0%**
- 📍 Optimalkan lokasi logistik (Jabodetabek)

---

# 🧠 Key Takeaway

> Penjualan di Shopee tidak ditentukan oleh harga semata,  
> melainkan oleh **trust (rating & review), positioning produk, dan strategi pricing yang tepat.**

---

## 📬 Contact

**Author:** Erick Delenia  
- Instagram: https://instagram.com/ercdel  
- Email: erickdelenia08@email.com  

---

Project ini dibuat sebagai portofolio untuk posisi **Data Analyst**.