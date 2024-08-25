function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let antonio = document.getElementById("antonio");
  let botonCopiar = document.getElementById("boton_copiar");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    antonio.src = "./img/rafa.png";
    parrafo.textContent = "";
    botonCopiar.style.display = "block";  // Mostrar el botón "Copiar"
  } else {
    antonio.src = "./img/antonio.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
  }
}

function copiarTexto() {
  let texto = document.getElementById("texto").value;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado al portapapeles");
  });
}


  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let antonio = document.getElementById("antonio");

    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        antonio.src = "./img/carlos.png";
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
      } else {
        antonio.src = "./img/antonio.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
      }
      
  }