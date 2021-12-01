    
    //VARIABLES
  var modal = document.getElementById("myModal");
  var enlace = document.getElementById("enlace");
  var span = document.getElementsByClassName("close")[0];
    //CUANDO LE DE CLICK ENCIMA DEL ELEMENTO
 enlace.onclick = function () {
    modal.style.display = "block";
  }
    //APLICAR EL ESTILO DEL MODAL
  span.onclick = function () {
    modal.style.display = "none";
  }

  //CUANDO EL USUARIO LE DE SALDRA UNA VENTANA
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }