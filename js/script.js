const submit = document.getElementById('massageSubmit');


function massageSend(event) {
    var date = Date(Date.now());
    let currentDate = date.toString();

    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    let jenisKelamin = document.getElementById('perempuan').checked;
    const pesan = document.getElementById('pesan').value;

    if(jenisKelamin==true) {jenisKelamin="Perempuan"}
    else {jenisKelamin="Laki-laki"}

    document.getElementById('massageSent').innerHTML = "<b>Your massage is sent!</b></br><b>Current Date:</b> " + currentDate + "</br></br><b>Nama:</b> " + nama + "</br><b>Tanggal Lahir:</b> " + tanggalLahir + "</br><b>Jenis Kelamin:</b> " + jenisKelamin + "</br><b>Pesan:</b> " + pesan;
    event.preventDefault();
}

massageUsForm.addEventListener('submit',massageSend);