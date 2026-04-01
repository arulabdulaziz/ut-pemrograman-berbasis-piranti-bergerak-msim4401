## **Vue & TypeScript

* **Vue + TypeScript:**
  Sejak **Vue 2.5**, Vue sudah mendukung TypeScript.
  **Vue 3** dibuat menggunakan TypeScript, sehingga TypeScript menjadi bahasa utama.

* **Decorator di Vue:**

  * **Apa itu decorator?**
    Deklarasi khusus yang diawali `@` untuk “menempelkan” fungsi tertentu ke kode.
  * **Fungsi utama:**
    Memudahkan programmer mengatur injeksi atau tambahan fitur ke unit kode tanpa mengubah inti unit tersebut.
  * **Contoh penggunaan:**
    `@Prop()` → menandai properti yang bisa diterima dari parent component.

* **Menggunakan Vue-CLI dengan TypeScript:**

  * Bisa membuat **project baru Vue + TypeScript** langsung dari awal.
  * Bisa juga **mengkonversi project JavaScript** Vue lama menjadi TypeScript.

**Intinya:**
Decorator memudahkan penambahan fungsionalitas secara rapi, dan TypeScript membuat Vue lebih terstruktur serta aman dari kesalahan tipe data.

**Membuat Project Vue**
npx @vue/cli create nama-project
