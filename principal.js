const btn = document.querySelector("[data-tipo=button]");

const textoError = document.querySelector(".mensaje-error");
const contenedorPrincipal = document.querySelector(".container");
const espacioInput = document.querySelector(".info-lista__input");
const success = document.querySelector(".container-success");
const btn2 = document.querySelector(".btn-success");

const recibirEmail = () => {
  const input = document.querySelector("[data-tipo=email]");
  const emailValue = input.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailValue)) {
    input.value = "";
    contenedorPrincipal.classList.add("esconder");
    success.style.display = "flex";
    textoError.style.display = "none";
    espacioInput.classList.remove("input-error");
    console.log("a");
  } else {
    textoError.style.display = "block";
    espacioInput.classList.add("input-error");
    console.log("b");
  }
};

const continuar = () => {
  success.style.display = "none";
  contenedorPrincipal.classList.remove("esconder");
};

btn.addEventListener("click", recibirEmail);
btn2.addEventListener("click", continuar);
