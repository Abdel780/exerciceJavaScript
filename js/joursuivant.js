let userDay = prompt('Entrez le jour de la semaine').toLowerCase();

if(userDay === "lundi"){
    alert('demain sera mardi');
}else if (userDay === "mardi"){
    alert('demain sera mercredi');
}else if (userDay === "mercredi"){
    alert('demain sera jeudi');
}else if (userDay === "jeudi"){
    alert('demain sera vendredi');
}else if (userDay === "vendredi"){
    alert('demain sera samedi');
}else if (userDay === "samedi"){
    alert('demain sera dimanche');
}else if (userDay === "dimanche"){
    alert('demain sera lundi');
}else {
    alert('Entre un jour de la semaine valide');
}

switch(userDay){
    case 'mercredi':
        alert('demain sera jeudi');
        break;
    case 'jeudi':
        alert('demain sera vendredi');
        break;
    case 'vendredi':
        alert('demain sera samedi');
        break;
    case 'samedi':
        alert('demain sera dimanche');
        break;
    case 'dimanche':
        alert('demain sera lundi');
        break;
    case 'lundi':
        alert('demain sera mardi');
        break;
    case 'mardi':
        alert('demain sera mercredi');
        break;
    default:
        alert('Entre un jour de la semaine valide');
}