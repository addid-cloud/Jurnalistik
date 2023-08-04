const themeButton = document.getElementById("themeButton");

    // Menambahkan event listener untuk event klik pada tombol
    themeButton.addEventListener("click", function () {
      // Mengambil data-theme saat ini
      const currentTheme = document.documentElement.getAttribute("data-theme");

      // Toggle data-theme antara "cupcake" dan "dark"
      const newTheme = currentTheme === "wireframe" ? "luxury" : "wireframe";

      // Memperbarui data-theme pada elemen <html>
      document.documentElement.setAttribute("data-theme", newTheme)})

      
        // Tanggal target (30 Agustus 2023)
    const targetDate = new Date("August 25, 2023 00:00:00").getTime();

    // Memperbarui hitungan mundur setiap 1 detik
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Menghitung waktu tersisa
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Menampilkan hitungan mundur di elemen HTML
        document.getElementById("days").innerHTML = `<span style="--value:${days};"></span>`;
        document.getElementById("hours").innerHTML = `<span style="--value:${hours};"></span>`;
        document.getElementById("minutes").innerHTML = `<span style="--value:${minutes};"></span>`;
        document.getElementById("seconds").innerHTML = `<span style="--value:${seconds};"></span>`;

        // Hentikan hitungan mundur saat waktu telah mencapai target
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000); //