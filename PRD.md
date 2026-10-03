# PRD — Website CV / Portofolio Personal

**Versi:** 1.0  **Platform deploy:** Vercel  **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS

## 1. Ringkasan
Website CV satu halaman (single page) dengan tampilan modern, minimalis, dan interaktif. Ciri khas: hero dengan teks nama berukuran raksasa bergaya *outline* yang bergerak (marquee) di belakang foto profil tanpa latar (cut-out) yang berada di tengah. Mendukung mode terang dan gelap.

## 2. Tujuan
- Menampilkan identitas profesional, karya, dan keahlian secara menarik.
- Memudahkan recruiter / klien menghubungi pemilik (tombol *Hire Me*, email, GitHub, LinkedIn, unduh resume).
- Mudah diperbarui: seluruh konten ada di satu file (`lib/data.ts`).
- Cepat dan SEO-friendly, mudah di-deploy ke Vercel.

## 3. Target Pengguna
Recruiter, HR, calon klien, dan sesama developer.

## 4. Struktur Halaman & Kebutuhan Fungsional

### 4.1 Navbar (sticky, floating, rounded)
- Logo inisial (kotak hitam, huruf "R") + nama.
- Menu: Work, What I Can Do, About, Awards, Trainings (smooth scroll ke section).
- Tombol toggle tema (ikon matahari/bulan) dan tombol "Hire Me" (scroll ke Contact).
- Di section daftar project, menu berubah menjadi sub-menu: **Technical** | **Digital**.
- Responsif: pada mobile menu menjadi menu hamburger.

### 4.2 Hero
- Teks nama besar (mis. "RICHARD MICULOB") dengan outline tipis tanpa isi, bergerak horizontal tanpa henti (marquee).
- Foto profil PNG tanpa latar, rata tengah, di depan teks, bagian bawah terpotong di tepi layar.
- Indikator "SCROLL DOWN" vertikal di kanan bawah.

### 4.3 Work Gallery ("Selected Work")
- Judul, subjudul, tombol "View More Projects".
- Carousel gaya *coverflow*: kartu tengah besar, kartu samping lebih kecil dan redup.
- Di bawah carousel: judul, deskripsi, dan tautan "View Project →" untuk project aktif.
- Navigasi: klik kartu samping, panah keyboard, geser (swipe) di mobile, auto-play opsional.

### 4.4 Daftar Project Teknis
- Daftar bernomor (01, 02, …) berisi judul, deskripsi, framework, ikon tech stack, dan ikon tautan eksternal (GitHub/demo).
- Efek hover pada baris.

### 4.5 Digital Projects ("Beyond Code")
- Grid kartu karya non-kode (desain konten, social media kit, content planning) dengan nomor besar samar.

### 4.6 What I Can Do / About / Awards / Trainings
- Section ringkas: layanan/keahlian, profil singkat, daftar penghargaan, daftar pelatihan/sertifikasi.

### 4.7 Contact ("Let's Work Together")
- Headline besar, deskripsi, tombol "Download Resume".
- Kartu kontak: Email, GitHub, LinkedIn.
- Tombol "Send Me a Message" (membuka `mailto:`).

### 4.8 Elemen Tambahan
- Widget pojok kiri (counter pengunjung/apresiasi) — opsional.
- Latar bergelombang halus (garis SVG) — opsional.

## 5. Kebutuhan Non-Fungsional
- Lighthouse Performance/SEO/Accessibility ≥ 90.
- Responsif: mobile (≥360px), tablet, desktop.
- Tema mengikuti preferensi sistem, tersimpan di `localStorage`, tanpa kedipan (flash) saat load.
- Hormati `prefers-reduced-motion`.
- Gambar dioptimalkan (`next/image`).

## 6. Rekomendasi Teknologi (cocok untuk Vercel)
| Kebutuhan | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | Dibuat oleh Vercel, zero-config deploy, SSG cepat |
| Bahasa | TypeScript | Aman dan mudah dirawat |
| Styling | Tailwind CSS | Cepat membuat UI custom, ukuran CSS kecil |
| Font | Inter via `next/font` | Cepat, tanpa layout shift |
| Animasi | CSS animation (tanpa library berat) | Ringan; bisa ditambah Framer Motion bila perlu |
| Form pesan (opsional) | Formspree / Resend + API Route | Gratis, mudah di Vercel |
| Analytics (opsional) | Vercel Analytics | Satu baris kode |

## 7. Struktur Folder
```
app/            layout.tsx, page.tsx, globals.css
components/     Navbar, Hero, WorkGallery, ProjectList, DigitalProjects, Sections, Contact, ThemeToggle
lib/data.ts     Semua konten (nama, project, kontak, dll.)
public/         profile.svg (ganti dengan profile.png), resume.pdf
```

## 8. Alur Deploy ke Vercel
1. `npm install` lalu `npm run dev` untuk uji lokal, `npm run build` untuk uji produksi.
2. Push ke GitHub.
3. Buka vercel.com → **Add New Project** → import repo → Framework otomatis terdeteksi **Next.js** → **Deploy**.
4. (Opsional) Tambah domain kustom di Settings → Domains.

## 9. Kriteria Penerimaan
- Semua section tampil sesuai desain di mode terang dan gelap.
- Teks outline hero bergerak halus, foto tetap di tengah.
- Carousel dapat diganti lewat klik/geser/keyboard.
- Konten dapat diubah hanya dengan mengedit `lib/data.ts`.
- `npm run build` sukses tanpa error dan deploy Vercel berhasil.

## 10. Di Luar Cakupan (Fase 2)
CMS/blog, multi-bahasa, form dengan database, dashboard admin.
