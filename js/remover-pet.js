var button = document.querySelector(".table");
button.addEventListener("dblclick", function(event) {
  if(event.target.tagName == 'BUTTON') {
    event.target.parentNode.parentNode.classList.add('fade-out');
    setTimeout(() => {
      event.target.parentNode.parentNode.remove();
      removeSave(event.target.parentNode.parentNode);
    }, 500)
  }
});