
let HideText_Boton = document.getElementById('HideText_Boton');
let HideText = document.getElementById('HideText');

HideText_Boton.addEventListener('click', toggleText);

function toggleText() {
  HideText.classList.toggle('show');

  if(HideText.classList.contains('show')) {
    HideText_Boton.innerHTML = 'Leer Menos'
  }
  else {
    HideText_Boton.innerHTML = 'Leer Más'
  }
}