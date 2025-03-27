// Menampilkan tanggal saat ini di halaman
let tanggal = new Date();
document.getElementById("tanggal").innerHTML = "Tanggal Hari Ini: " + tanggal.toDateString();

// Fungsi untuk menampilkan data input dalam alert
function tampil() {
    let nama = document.getElementById("name").value;
    let lahir = document.getElementById("birthdate").value;
    let gender = document.getElementById("gender").value;
    let kategori = document.getElementById("category").value;

    if (nama === "" || lahir === "" || gender === "" || kategori === "") {
        alert("Harap isi semua data terlebih dahulu!");
    } else {
        alert(
            "✅ Data Pendaftaran:\n" +
            "📌 Nama: " + nama + "\n" +
            "📆 Tanggal Lahir: " + lahir + "\n" +
            "🚻 Jenis Kelamin: " + gender + "\n" +
            "🎭 Kategori: " + kategori
        );
    }
}

// Fungsi untuk menampilkan tanggal dalam alert
function show() {
    alert("📅 Tanggal Hari Ini: " + tanggal.toDateString());
}
