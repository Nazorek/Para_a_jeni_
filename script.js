const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Solicita acesso à câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Erro ao acessar a câmera: ", error);
    });

// Captura a imagem quando o botão é clicado
captureButton.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);
    const dataURL = canvas.toDataURL('image/png');
    console.log(dataURL); // Aqui você pode fazer algo com a imagem capturada
});



document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musica');

    // Tentativa inicial de tocar a música
    audio.play().catch(() => {
        // Se o navegador bloquear, aguarda uma interação do usuário
        const tocar = () => {
            audio.play();
            document.removeEventListener('click', tocar);
        };
        document.addEventListener('click', tocar);
    });
});

