document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modal = document.getElementById('more-info-modal');
    const video = document.getElementById('bg-video');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Forzare l'autoplay del video su dispositivi mobili
    video.muted = true;
    video.play();
});