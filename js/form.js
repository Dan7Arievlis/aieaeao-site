var botaoAdicionar = document.querySelector('#add');
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#add-form");
    var pet = obtemPetDoFormulario(form);
    var erros = validaPet(pet);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPetNaTabela(pet);
    save(pet);

    reset(form);
});

function reset(form){
    form.reset();
    var checkbox = form.querySelector(".checkbox");
    checkbox.classList.remove("invisible");
    var mensagensErro = document.querySelector(".menssagens-erro");
    mensagensErro.innerHTML = "";
} 

var fieldGender = document.querySelector(".field-gender");
fieldGender.addEventListener("click", (event) => {
    var form = document.querySelector("#add-form");
    var checkbox = form.querySelector(".checkbox");
    if(form.gender.value != 'male'){
        checkbox.classList.remove("invisible");
    }else{
        checkbox.classList.add("invisible");
    }
})

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector(".menssagens-erro");
    ul.innerHTML = "";

    erros.forEach((erro) => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPetDoFormulario(form) {
    var pet = {
        name: form.name.value,
        weight: form.weight.value,
        gender: form.gender.value,
        pregnant: form.pregnant.checked,
        animal: form.animal.value,
        age: form.age.value,
        eggs: calcularOvos(form)
    }

    return pet;
}

function obtemPetDaTabela(tr) {
    var pet = {
        name: tr.querySelector(".info-name").textContent,
        weight: tr.querySelector(".info-weight").textContent,
        gender: tr.querySelector(".info-gender").textContent,
        animal: tr.querySelector(".info-animal").textContent,
        age: tr.querySelector(".info-age").textContent,
        eggs: tr.querySelector(".info-eggs").textContent
    }

    return pet;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function createButton(){
    var button = document.createElement('button');
    button.classList.add('delete')
    button.type = "input";
    button.textContent = "X";

    return button;
}

function montaTr(pet) {
    var tr = document.createElement('tr');
    tr.classList.add('animal');

    tr.appendChild(montaTd(pet.name, 'info-name'));
    tr.appendChild(montaTd(pet.weight, 'info-weight'));
    tr.appendChild(montaTd(pet.gender, 'info-gender'));
    tr.appendChild(montaTd(pet.animal, 'info-animal'));
    tr.appendChild(montaTd(pet.age, 'info-age'));
    tr.appendChild(montaTd(pet.eggs, 'info-eggs'));

    var x = montaTd('', 'x-button');
    x.appendChild(createButton());
    tr.appendChild(x);

    return tr;
}

function validaPet(pet) {

    var erros = [];

    if (pet.name.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (pet.weight.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if(pet.age < 0 || pet.age > 23){
        erros.push("Idade é inválida");
    }

    return erros;
}

function adicionaPetNaTabela(pet) {
    var petTr = montaTr(pet);
    var tabela = document.querySelector(".table");

    tabela.appendChild(petTr);
}