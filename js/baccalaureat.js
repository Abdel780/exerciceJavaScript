let moyenne = prompt("Entrez la moyenne du candidat :");

moyenne = parseFloat(moyenne);

if (moyenne < 10) {
    console.log("Candidat recalé.");
    alert('Candidat recalé');

} else if (moyenne >= 10 && moyenne < 12) {
    console.log("Candidat reçu.");
    alert('Candidat reçu')

} else { (moyenne >= 10 && moyenne > 12)
    console.log("Candidat reçu avec mention.");
    alert('Candidat reçu avec mention.')
}