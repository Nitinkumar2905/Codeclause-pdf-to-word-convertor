function convert() {
    const pdfFile = document.getElementById('pdf-file').files[0];
    const formData = new FormData();
    formData.append('pdf', pdfFile);

    fetch('/convert', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.style.display = 'block';
    })
}
