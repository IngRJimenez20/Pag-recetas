let indexReceta = 1;
mostrarReceta(indexReceta);

function FlechasCarrucel(n) {
  mostrarReceta((indexReceta += n));
}

function currentSlide(n) {
  mostrarReceta((indexReceta = n));
}

function mostrarReceta(n) {
  let i;
  let recetas = document.getElementsByClassName("recetas");
  if (n > recetas.length) indexReceta = 1;
  if (n < 1) indexReceta = recetas.length;
  for (i = 0; i < recetas.length; i++) {
    recetas[i].style.display = "none";
  }

  recetas[indexReceta - 1].style.display = "flex";
}
