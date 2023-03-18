var campoFiltro = document.querySelector("#filter");

campoFiltro.addEventListener("input", function() {
    var pets = document.querySelectorAll(".animal");

    if (this.value.length > 0) {
        for (var i = 0; i < pets.length; i++) {
            var pet = pets[i];

            var tdNome = pet.querySelector(".info-name");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome))
                pet.classList.remove("invisible");
            else
                pet.classList.add("invisible");
        }
    } else {
        for (var i = 0; i < pets.length; i++) {
            var pet = pets[i];
            pet.classList.remove("invisible");
        }
    }
});