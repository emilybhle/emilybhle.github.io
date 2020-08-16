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

function closeModal(modal) {
  modal.style.display = "none";
}