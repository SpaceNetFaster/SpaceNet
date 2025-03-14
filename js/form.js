function sendmessage() {
    const name = document.getElementById('name').value;
    const alamat = document.getElementById('alamat').value;
    const rw = document.getElementById('rw').value;
    const rt = document.getElementById('rt').value;
    const nomer = document.getElementById('nomer').value;
    const survey = document.getElementById('survey').value;
    const instalasi = document.getElementById('instalasi').value;


    var url = "https://api.whatsapp.com/send?phone=6281389406260&text=Hallo%20Space%20Net.%0A%0ASaya%20*"+name+"*%20ingin%20masang%20wifi.%0AAlamat%20*"+alamat+"*%20%2C%20*RT "+rt+"*%2C%20*RW "+rw+"*%2C%20*NO "+nomer+"*%2C%0AJadwal%20Survey%20*"+survey+"*%2C%0AJadwal%20Instalasi%20*"+instalasi+"*%2C%0A%0ATerimakasih.";


    window.open(url, "_blank").focus();
}

