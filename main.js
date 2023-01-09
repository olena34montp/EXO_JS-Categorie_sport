function categorieEnfant() {
    const POUSSIN = 'Poussin';
    const PUPILLE = 'Pupille';
    const MINIME = 'Minime';
    const CADET = 'Cadet';

    let age = prompt('Quel âge a votre enfant ?');
    age = Number(age);
    if (validate(age)) {
        if(age == 6 || age == 7) {
            alert('La catégorie de votre enfant est ' + POUSSIN);
        } else if(age == 8 || age == 9) {
            alert('La catégorie de votre enfant est ' + PUPILLE);
        } else if(age == 10 || age == 11) {
            alert('La catégorie de votre enfant est ' + MINIME);
        } else if(age >=12 && age <=17) {
            alert('La catégorie de votre enfant est ' + CADET);
        } else {
            alert('Erreur');
        }
    }
}

function validate(age) {
    if (age == NaN) {
        return false;
    } else {
        return true;
    }
}