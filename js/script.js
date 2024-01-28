function encriptar() {
  let texto = document.getElementById("text-before").value;

  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  document.getElementById("text-after").value = texto;

  buttonAction("botao-encriptar");
}

function desencriptar() {
  let texto = document.getElementById("text-before").value;
  texto = texto.replace(/ufat/g, "u");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/enter/g, "e");

  document.getElementById("text-after").value = texto;

  buttonAction("botao-desencriptar");
}

function copiarTexto() {
  const texto = document.getElementById("text-after").value;
  navigator.clipboard.writeText(texto);
  buttonAction("botao__copiar");
}

function buttonAction(id) {
  const button = document.getElementById(id);
  const originalColor = button.style.backgroundColor;
  const orignalText = button.innerHTML;
  button.disabled = true;

  button.innerHTML = "Feito";
  button.style.backgroundColor = "#28ff68";
  setTimeout(() => {
    button.innerHTML = orignalText;
    button.style.backgroundColor = originalColor;
    button.disabled = false;
  }, 1000);
}
