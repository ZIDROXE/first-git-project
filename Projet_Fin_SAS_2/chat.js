const prompt = require("prompt-sync")();

let candidats = [];

// ==================================================
// 1. AJOUTER UN CANDIDAT
// ==================================================

function ajouterCandidat() {

    let cin = prompt("CIN : ");

    // Vérifier si la CIN existe déjà
    let i = 0;

    while (i < candidats.length) {

        if (candidats[i].cin === cin) {
            console.log("Erreur : cette CIN existe deja.");
            return;
        }

        i++;
    }

    let candidat = {
        cin: cin,
        nom: prompt("Nom : "),
        prenom: prompt("Prenom : "),
        partiPolitique: prompt("Parti politique : "),
        age: Number(prompt("Age : ")),
        electeurs: []
    };

    candidats[candidats.length] = candidat;

    console.log("Candidat ajoute avec succes !");
}


// ==================================================
// 2. AJOUTER PLUSIEURS CANDIDATS
// ==================================================

function ajouterPlusieursCandidats() {

    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));

    let i = 0;

    while (i < nombre) {

        console.log("\n--- Candidat " + (i + 1) + " ---");

        ajouterCandidat();

        i++;
    }
}


// ==================================================
// 3. AFFICHER UN CANDIDAT
// ==================================================

function afficherCandidat(candidat) {

    console.log("------------------------------");
    console.log("CIN       : " + candidat.cin);
    console.log("Nom       : " + candidat.nom);
    console.log("Prenom    : " + candidat.prenom);
    console.log("Parti     : " + candidat.partiPolitique);
    console.log("Age       : " + candidat.age);
    console.log("Nb votes  : " + candidat.electeurs.length);
    console.log("------------------------------");
}


// ==================================================
// 4. AFFICHER TOUS LES CANDIDATS
// ==================================================

function afficherCandidats() {

    if (candidats.length === 0) {
        console.log("Aucun candidat.");
        return;
    }

    console.log("\n===== LISTE DES CANDIDATS =====");

    let i = 0;

    while (i < candidats.length) {

        afficherCandidat(candidats[i]);

        i++;
    }
}


// ==================================================
// 5. TRIER LES CANDIDATS PAR NOMBRE DE VOTES
//    ORDRE DECROISSANT
// ==================================================

function afficherParNombreVotes() {

    if (candidats.length === 0) {
        console.log("Aucun candidat.");
        return;
    }

    // Création d'une copie du tableau
    let copie = [];

    let i = 0;

    while (i < candidats.length) {
        copie[i] = candidats[i];
        i++;
    }

    // Selection sort manuel
    i = 0;

    while (i < copie.length - 1) {

        let max = i;
        let j = i + 1;

        while (j < copie.length) {

            if (copie[j].electeurs.length > copie[max].electeurs.length) {
                max = j;
            }

            j++;
        }

        if (max !== i) {

            let temp = copie[i];
            copie[i] = copie[max];
            copie[max] = temp;
        }

        i++;
    }

    console.log("\n===== CANDIDATS PAR NOMBRE DE VOTES =====");

    i = 0;

    while (i < copie.length) {

        afficherCandidat(copie[i]);

        i++;
    }
}


// ==================================================
// 6. FILTRER PAR PARTI POLITIQUE
// ==================================================

function afficherParParti() {

    let parti = prompt("Entrer le parti politique : ");

    let trouve = false;

    let i = 0;

    console.log("\n===== CANDIDATS DU PARTI : " + parti + " =====");

    while (i < candidats.length) {

        if (candidats[i].partiPolitique === parti) {

            afficherCandidat(candidats[i]);

            trouve = true;
        }

        i++;
    }

    if (trouve === false) {
        console.log("Aucun candidat trouve pour ce parti.");
    }
}


// ==================================================
// 7. VOTER POUR UN CANDIDAT
// ==================================================

function voter() {

    if (candidats.length === 0) {
        console.log("Aucun candidat disponible.");
        return;
    }

    let cinElecteur = prompt("Votre CIN : ");

    // Vérifier si l'électeur a déjà voté
    let i = 0;

    while (i < candidats.length) {

        let j = 0;

        while (j < candidats[i].electeurs.length) {

            if (candidats[i].electeurs[j] === cinElecteur) {

                console.log(
                    "Vous avez deja vote et vous n'avez pas le droit de modifier votre vote ni de voter a nouveau."
                );

                return;
            }

            j++;
        }

        i++;
    }

    // Demander le candidat
    let cinCandidat = prompt("CIN du candidat pour lequel vous voulez voter : ");

    let candidatTrouve = false;

    i = 0;

    while (i < candidats.length) {

        if (candidats[i].cin === cinCandidat) {

            candidats[i].electeurs[candidats[i].electeurs.length] = cinElecteur;

            candidatTrouve = true;

            console.log("Vote enregistre avec succes !");

            break;
        }

        i++;
    }

    if (candidatTrouve === false) {
        console.log("Candidat introuvable.");
    }
}


// ==================================================
// 8. MODIFIER UN CANDIDAT
// ==================================================

function modifierCandidat() {

    let cin = prompt("CIN du candidat a modifier : ");

    let i = 0;

    while (i < candidats.length) {

        if (candidats[i].cin === cin) {

            console.log("\n===== MODIFICATION =====");
            console.log("1. Modifier le parti politique");
            console.log("2. Modifier l'age");

            let choix = Number(prompt("Votre choix : "));

            if (choix === 1) {

                candidats[i].partiPolitique =
                    prompt("Nouveau parti politique : ");

                console.log("Parti politique modifie avec succes !");

            }
            else if (choix === 2) {

                candidats[i].age =
                    Number(prompt("Nouvel age : "));

                console.log("Age modifie avec succes !");

            }
            else {

                console.log("Choix invalide.");
            }

            return;
        }

        i++;
    }

    console.log("Candidat introuvable.");
}


// ==================================================
// 9. SUPPRIMER UN CANDIDAT
// ==================================================

function supprimerCandidat() {

    let cin = prompt("CIN du candidat a supprimer : ");

    let position = -1;

    let i = 0;

    while (i < candidats.length) {

        if (candidats[i].cin === cin) {
            position = i;
            break;
        }

        i++;
    }

    if (position === -1) {

        console.log("Candidat introuvable.");
        return;
    }

    // Décaler les éléments vers la gauche
    i = position;

    while (i < candidats.length - 1) {

        candidats[i] = candidats[i + 1];

        i++;
    }

    // Supprimer la dernière case
    candidats.length = candidats.length - 1;

    console.log("Candidat supprime avec succes !");
}


// ==================================================
// 10. RECHERCHER PAR NOM
// ==================================================

function rechercherCandidat() {

    let nomRecherche = prompt("Nom du candidat : ");

    let trouve = false;

    let i = 0;

    while (i < candidats.length) {

        if (candidats[i].nom === nomRecherche) {

            afficherCandidat(candidats[i]);

            trouve = true;
        }

        i++;
    }

    if (trouve === false) {
        console.log("Aucun candidat trouve.");
    }
}


// ==================================================
// 11. NOMBRE TOTAL DE VOTES
// ==================================================

function nombreTotalVotes() {

    let total = 0;

    let i = 0;

    while (i < candidats.length) {

        total = total + candidats[i].electeurs.length;

        i++;
    }

    return total;
}


// ==================================================
// 12. TOP 3 CANDIDATS
// ==================================================

function afficherTop3() {

    if (candidats.length === 0) {
        console.log("Aucun candidat.");
        return;
    }

    // On crée une copie
    let copie = [];

    let i = 0;

    while (i < candidats.length) {
        copie[i] = candidats[i];
        i++;
    }

    // Trier manuellement par votes décroissants
    i = 0;

    while (i < copie.length - 1) {

        let max = i;
        let j = i + 1;

        while (j < copie.length) {

            if (copie[j].electeurs.length > copie[max].electeurs.length) {
                max = j;
            }

            j++;
        }

        if (max !== i) {

            let temp = copie[i];
            copie[i] = copie[max];
            copie[max] = temp;
        }

        i++;
    }

    console.log("\n===== TOP 3 =====");

    let limite = 3;

    if (copie.length < 3) {
        limite = copie.length;
    }

    i = 0;

    while (i < limite) {

        console.log(
            (i + 1) +
            ". " +
            copie[i].prenom +
            " " +
            copie[i].nom +
            " - " +
            copie[i].electeurs.length +
            " votes"
        );

        i++;
    }
}


// ==================================================
// 13. NOMBRE DE CANDIDATS PAR PARTI
// ==================================================

function nombreCandidatsParParti() {

    if (candidats.length === 0) {
        console.log("Aucun candidat.");
        return;
    }

    let partis = [];
    let nombres = [];

    let i = 0;

    while (i < candidats.length) {

        let parti = candidats[i].partiPolitique;

        let position = -1;

        let j = 0;

        while (j < partis.length) {

            if (partis[j] === parti) {
                position = j;
                break;
            }

            j++;
        }

        if (position === -1) {

            partis[partis.length] = parti;
            nombres[nombres.length] = 1;

        }
        else {

            nombres[position] = nombres[position] + 1;
        }

        i++;
    }

    console.log("\n===== CANDIDATS PAR PARTI =====");

    i = 0;

    while (i < partis.length) {

        console.log(
            partis[i] + " : " + nombres[i] + " candidat(s)"
        );

        i++;
    }
}


// ==================================================
// 14. STATISTIQUES
// ==================================================

function statistiques() {

    console.log("\n========== STATISTIQUES ==========");

    // Nombre total de candidats
    console.log(
        "Nombre total de candidats : " + candidats.length
    );

    // Nombre total de votes
    console.log(
        "Nombre total de votes : " + nombreTotalVotes()
    );

    // Top 3
    afficherTop3();

    // Nombre de candidats par parti
    nombreCandidatsParParti();
}


// ==================================================
// 15. MENU PRINCIPAL
// ==================================================

let choix = -1;

while (choix !== 0) {

    console.log("\n");
    console.log("======================================");
    console.log("       GESTION DES ELECTIONS");
    console.log("======================================");

    console.log("1. Ajouter un candidat");
    console.log("2. Ajouter plusieurs candidats");
    console.log("3. Afficher les candidats");
    console.log("4. Voter pour un candidat");
    console.log("5. Modifier un candidat");
    console.log("6. Supprimer un candidat");
    console.log("7. Rechercher un candidat");
    console.log("8. Statistiques");
    console.log("9. Afficher par nombre de votes");
    console.log("10. Filtrer par parti");
    console.log("0. Quitter");

    choix = Number(prompt("Votre choix : "));

    if (choix === 1) {

        ajouterCandidat();

    }
    else if (choix === 2) {

        ajouterPlusieursCandidats();

    }
    else if (choix === 3) {

        afficherCandidats();

    }
    else if (choix === 4) {

        voter();

    }
    else if (choix === 5) {

        modifierCandidat();

    }
    else if (choix === 6) {

        supprimerCandidat();

    }
    else if (choix === 7) {

        rechercherCandidat();

    }
    else if (choix === 8) {

        statistiques();

    }
    else if (choix === 9) {

        afficherParNombreVotes();

    }
    else if (choix === 10) {

        afficherParParti();

    }
    else if (choix === 0) {

        console.log("Programme termine.");

    }
    else {

        console.log("Choix invalide.");
    }
}