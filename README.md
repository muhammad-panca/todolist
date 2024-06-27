# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Todo List App

Proyek ini adalah aplikasi Todo List sederhana yang dibangun menggunakan React. Aplikasi ini memungkinkan pengguna untuk menambahkan tugas, menghapus tugas, dan melihat jumlah total tugas serta tugas yang telah selesai atau dihapus. 

## Fitur

1. **Menampilkan Total Tugas**: Jumlah total tugas yang ada di dalam todo list ditampilkan di layar. Jumlah ini akan bertambah saat ada tugas baru yang ditambahkan dan berkurang saat tugas dihapus.
2. **Menampilkan Tugas Selesai/Dihapus**: Jumlah tugas yang telah selesai atau dihapus juga ditampilkan di layar.
3. **Pemberitahuan Saat Aplikasi Dibuka dan Ditutup**: Menggunakan React Hook `useEffect`, aplikasi ini menampilkan pesan “Selamat Datang” saat dibuka dan “Sampai Jumpa” saat ditutup.

## Teknologi yang Digunakan

- **React**: Digunakan untuk membangun antarmuka pengguna dengan komponen-komponen yang dikelola melalui state.
- **Hooks**: `useState` untuk mengelola state lokal komponen dan `useEffect` untuk side effects seperti menampilkan alert.
- **CSS**: Untuk penataan dasar antarmuka.

## Struktur Proyek