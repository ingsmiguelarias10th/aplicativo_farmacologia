const modules = {
  bases: {
    week: "SEMANA 01",
    title: "Bases moleculares del cáncer",
    description: "Estudia las alteraciones moleculares y genéticas que participan en el origen y desarrollo del cáncer.",
    topics: ["Oncogenes y protooncogenes", "Genes supresores tumorales", "Mutaciones y reparación del ADN", "Señalización celular alterada"]
  },
  crecimiento: {
    week: "SEMANA 01",
    title: "Biología del crecimiento tumoral",
    description: "Comprende cómo las células tumorales proliferan, sobreviven, invaden tejidos y pueden producir metástasis.",
    topics: ["Proliferación y ciclo celular", "Angiogénesis tumoral", "Invasión y metástasis", "Microambiente tumoral"]
  },
  antineoplasticos: {
    week: "SEMANA 01",
    title: "Antineoplásicos",
    description: "Revisa la clasificación, los mecanismos de acción y los principales efectos adversos de los fármacos antineoplásicos.",
    topics: ["Clasificación de antineoplásicos", "Mecanismos de acción", "Toxicidad y efectos adversos", "Principios de combinación terapéutica"]
  },
  antibiograma: {
    week: "SEMANA 02",
    title: "Antibiograma",
    description: "Aprende a interpretar las pruebas de sensibilidad antimicrobiana y su utilidad para orientar el tratamiento.",
    topics: ["Fundamento del antibiograma", "Difusión en disco", "Lectura de halos de inhibición", "Categorías: sensible, intermedio y resistente"]
  },
  resistencia: {
    week: "SEMANA 02",
    title: "Resistencia antimicrobiana",
    description: "Identifica los mecanismos por los cuales los microorganismos disminuyen o pierden su sensibilidad a los antimicrobianos.",
    topics: ["Resistencia intrínseca y adquirida", "Enzimas inactivadoras", "Alteración de dianas y permeabilidad", "Transferencia horizontal de genes"]
  }
};

const modal = document.getElementById("moduleModal");
const modalWeek = document.getElementById("modalWeek");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTopics = document.getElementById("modalTopics");
const closeModal = document.getElementById("closeModal");
const completeBtn = document.getElementById("completeBtn");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress-bottom span");
const progressPercent = document.querySelector(".progress-bottom strong");

let completed = JSON.parse(localStorage.getItem("farmacostudy-completed") || "[]");
let currentModule = null;

function updateProgress() {
  const total = Object.keys(modules).length;
  const percentage = Math.round((completed.length / total) * 100);
  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${completed.length} de ${total} módulos completados`;
  progressPercent.textContent = `${percentage}%`;

  document.querySelectorAll(".module-item").forEach(button => {
    const id = button.dataset.module;
    if (completed.includes(id)) {
      button.style.background = "#e9f8ef";
      button.style.borderColor = "#b9e5c8";
      button.querySelector("span:last-child").textContent = "✓";
    }
  });
}

function openModule(id) {
  const data = modules[id];
  currentModule = id;
  modalWeek.textContent = data.week;
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;
  modalTopics.innerHTML = data.topics.map(topic => `<li>${topic}</li>`).join("");
  completeBtn.textContent = completed.includes(id) ? "Marcar como no completado" : "Marcar como completado ✓";
  modal.classList.remove("hidden");
}

document.querySelectorAll(".module-item").forEach(button => {
  button.addEventListener("click", () => openModule(button.dataset.module));
});

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", event => {
  if (event.target === modal) modal.classList.add("hidden");
});

completeBtn.addEventListener("click", () => {
  if (completed.includes(currentModule)) {
    completed = completed.filter(id => id !== currentModule);
  } else {
    completed.push(currentModule);
  }
  localStorage.setItem("farmacostudy-completed", JSON.stringify(completed));
  updateProgress();
  openModule(currentModule);
});

document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.right = "20px";
  nav.style.flexDirection = "column";
  nav.style.padding = "18px";
  nav.style.background = "white";
  nav.style.border = "1px solid #e8ebf2";
  nav.style.borderRadius = "14px";
});

updateProgress();
