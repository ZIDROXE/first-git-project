
function creelivre(titre, autor, annee){
    let livre = {
        titre,
        autor,
        annee,
    }
    return livre;
}

let livre = creelivre("the freedom", "abdelilah sadik", 2026);
console.log(livre.titre);
console.log(livre.autor);
console.log(livre.annee);