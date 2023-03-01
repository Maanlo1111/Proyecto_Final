
document.getElementById("boton").addEventListener("click", function() {
    console.log("REFERENCIAS")
    document.getElementById("demo").innerHTML="Jose G. Martin, Gerente de Planta-EmpresaX, Teléfeno: (696) 799-7158.  Michell Coleman, Presidente-Industria, Teléfeno: (696) 799-7158";
})


const animation = document.querySelector("p.animation");
const animationEventLog = document.querySelector(
  ".animation-example>.event-log"
);

const applyAnimation = document.querySelector(
  ".animation-example>button.activate"
);


applyAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  iterationCount = 0;
  const active = animation.classList.contains("active");
  applyAnimation.textContent = active
  ? "FIN"
  : "Click";
});