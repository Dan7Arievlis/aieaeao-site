var form = document.getElementById("add-form")

if(!localStorage.getItem('pets')){
    localStorage.setItem('pets', "[]");
}

function history(){
    return JSON.parse(localStorage.getItem('pets') || []);
}

load();
function load(){

    history().forEach(pet => {
        adicionaPetNaTabela(pet);
    });
}

function save(pet){
    let newArray = [...history()];
    newArray.push({
        name: pet.name,
        weight: pet.weight,
        gender: pet.gender,
        age: pet.age,
        animal: pet.animal,
        eggs: pet.eggs
    });

    localStorage.setItem('pets', JSON.stringify(newArray));
}

function login(data) {
    history().filter((item) => item.name === data.name && 
        item.senha == data.senha)
}

function removeSave(tr){
    let newArray = [...history()];
    var pet = obtemPetDaTabela(tr);
    
    newArray = newArray.filter(function( obj ) {
        return pet.name !== obj.name || 
        pet.weight !== obj.weight ||
        pet.animal !== obj.animal ||
        pet.gender !== obj.gender ||
        pet.age !== obj.age;
      });

    localStorage.setItem('pets', JSON.stringify(newArray));
}

// console.log(history[1].email)

// history.map((ex) => {
//     console.log(ex?.email)
// })