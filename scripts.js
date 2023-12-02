document.getElementById("mostrarBtn").addEventListener("click", function() {
    var enlace = document.getElementById("enlace").value;
    var videoId = obtenerVideoId(enlace);
    var miniatura = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
    
    var miniaturaImg = document.getElementById("miniatura");
    miniaturaImg.src = miniatura;
    miniaturaImg.removeEventListener("click", descargarImagen);
    miniaturaImg.addEventListener("click", descargarImagen);
});

function descargarImagen() {
    var enlace = document.createElement('a');
    enlace.href = document.getElementById("miniatura").src;
    enlace.download = 'miniatura_maxres.jpg';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

function obtenerVideoId(url) {
    var videoId = url.split('v=')[1];
    var ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
}