let heures = prompt("ecrit une heure");
let minutes = prompt("ecrit des minutes");
let secondes = prompt("ecrit des secondes");

if((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)){
    secondes++;
    if(secondes === 60){
        secondes = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            heures++;
            if(heures === 24){
                heures = 0;
            }
        }
    }
    alert("dans une seconde il sera " + heures + " heures " + minutes + " minutes " + secondes + " secondes ")
}else{
    alert("merci de me redonner heures,minutes et secondes")
}