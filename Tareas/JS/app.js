const input = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

const tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas) {
  lista.innerHTML = tareasGuardadas;
}

btnAgregar.addEventListener("click", () => {
  if (input.value === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  lista.appendChild(li);
  input.value = "";
  guardar();
});

lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completada");
    guardar();
  }
});

function guardar() {
  localStorage.setItem("tareas", lista.innerHTML);
}
