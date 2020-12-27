function openOrClose(iconElement) {
  if (iconElement.className == "fas fa-bars") {
    iconElement.className = "fas fa-times";
    document.getElementById("myNav").style.height = "100%";
  }
  else if (iconElement.className == "fas fa-times") {
    iconElement.className = "fas fa-bars";
    document.getElementById("myNav").style.height = "0%";
  }
  else {
    console.log("ERROR");
  }
}

function modalPop(sourceImage) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modal-content");
  modalImg.src = sourceImage.src;
  modalImg.style.backgroundColor = "white";
  modalImg.style.maxHeight = "90vh";
  modalImg.style.maxWidth = "90vw";
  modal.style.display = "block";
}

function modalPopGlance(sourceImage, caption) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modal-content");
  var modalCap = document.getElementById("modalFigCaption");
  modalImg.src = sourceImage.src;
  modalImg.style.backgroundColor = "white";
  modalImg.style.maxHeight = "90vh";
  modalImg.style.maxWidth = "90vw";
  modalCap.innerHTML = caption;
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

function showSubMenu() {
  document.getElementById("projects-nav").style.display = "block";
  document.getElementById("projects-nav").style.height = "5vh";  
}

function hideSubMenu() {
  document.getElementById("projects-nav").style.display = "none";
  document.getElementById("projects-nav").style.height = "0vh";  
}