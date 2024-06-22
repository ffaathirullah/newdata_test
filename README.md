Soal no 1. Problem : Sort Character (50 Poin) (NDL010) :

-Program harus menerima satu baris kata-kata sebagai input, lalu menghasilkan output yang berisi karakter vokal dan konsonan yang telah diurutkan sesuai aturan yang disebutkan

-Dalam kode yang saya buat, terdapat sebuah fungsi bernama urutkanKarakter(S) yang menerima satu parameter string S. Fungsi ini melakukan pengurutan karakter vokal dan konsonan dari string input sesuai aturan yang telah dijelaskan sebelumnya. Pada bagian penggunaan, fungsi urutkanKarakter(S) dipanggil dengan input yang berbeda untuk menghasilkan output yang sesuai. Output kemudian dicetak ke konsol untuk dilihat hasilnya.

Soal no  2. PSBB ( Pembatasan Sosial Berskala Besar ) (60 Poin) (NDL011) 
-Soal tersebut membahas tentang bagaimana menghitung jumlah minimum bus yang diperlukan untuk mengangkut semua keluarga ke pernikahan, dengan asumsi bahwa setiap mini bus hanya dapat membawa maksimal 4 penumpang, dan satu bus tidak boleh mengangkut lebih dari dua keluarga yang berbeda
-Kode tersebut merupakan implementasi dari program JavaScript menggunakan modul readline dari Node.js untuk membaca input dari pengguna melalui terminal.
Pertama, kode mengimpor modul readline dari Node.js.
Kemudian, membuat antarmuka rl menggunakan readline.createInterface, dengan mengatur input dan output ke process.stdin dan process.stdout.
Selanjutnya, kode mengajukan pertanyaan kepada pengguna dengan menggunakan rl.question, dimana pengguna diminta untuk memasukkan jumlah keluarga dan jumlah anggota dalam keluarga.
Setelah mendapatkan input dari pengguna, kode memproses input dengan memisahkan angka-angka menggunakan split(' ') dan mengonversi setiap angka menjadi bilangan menggunakan map(Number).
Kode kemudian memeriksa apakah jumlah anggota keluarga yang dimasukkan sesuai dengan jumlah keluarga yang dimasukkan, dan memberikan pesan kesalahan jika tidak sesuai.
Selanjutnya, dilakukan perhitungan untuk menentukan jumlah minimum bus yang diperlukan berdasarkan jumlah anggota keluarga, dengan membagi anggota keluarga ke dalam bus dengan aturan maksimal 4 penumpang per bus.
Terakhir, hasil perhitungan jumlah minimum bus ditampilkan ke terminal dengan menggunakan console.log, dan antarmuka rl ditutup dengan rl.close().
Kode ini mengimplementasikan logika untuk menyelesaikan masalah pada soal sebelumnya tentang jumlah minimum bus yang diperlukan untuk mengangkut semua keluarga ke pernikahan dengan memperhatikan aturan maksimal penumpang per bus.


