const input = document.querySelector("#nuevaTarea");
const lista = document.querySelector("#listaTareas");

lista.innerHTML = localStorage.getItem("tareas") || "";

document.querySelector("#btnAgregar").onclick = () => {
  if (!input.value.trim()) return;
  lista.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  guardar();
};

lista.onclick = e => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completada");
    guardar();
  }
};

function guardar() {
  localStorage.setItem("tareas", lista.innerHTML);
}
