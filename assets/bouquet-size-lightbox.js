// create the lightbox with a zoomed-in drawing of bouquet sizes (desktop only) 
window.addEventListener("DOMContentLoaded", function () {
  const bouqSizeModal = document.createElement('div');
  bouqSizeModal.classList.add('bouquet-size__modal');
  document.body.appendChild(bouqSizeModal);
  const image = document.querySelector('#bouquet-size img');
  const handleClick = () => {
    const img = document.createElement('img');
    img.src = image.src;
    while (bouqSizeModal.firstChild) {
      bouqSizeModal.removeChild(bouqSizeModal.firstChild);
    }
    bouqSizeModal.appendChild(img);
    bouqSizeModal.style.display = 'block';
  };


  image.addEventListener('click', handleClick);


  bouqSizeModal.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    bouqSizeModal.style.display = 'none';
  });
});