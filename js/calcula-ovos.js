function calcularOvos(form){
    var weight = form.weight.value;
    var gender = form.gender.value;
    var pregnant = form.pregnant.value;
    var animal = form.animal.value;
    var age = form.age.value;
    var eggs = 0;

    if(gender != 'male'){
        switch (animal) {
            case 'Ornitorrinco':
                eggs = .2 * (weight)/2 * age;
                if(pregnant.checked) eggs+=2;
                break;
            case 'Equidna':
                eggs = .35 * (weight)/2 * age;
                if(pregnant.checked) eggs+=3;
                break;
        }
    }

    return Math.round(eggs);
}

function validaPeso(peso){
    return peso > 0 && peso < 40;
}