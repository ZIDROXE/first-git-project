const prompt = require('prompt-sync')();
const candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: [
            "EL100001",
            "EL100002",
            "EL100003",
            "EL100004",
            "EL100005",
            "EL100006",
            "EL100007",
            "EL100008",
            "EL100009",
            "EL100010"
        ]
    },

    {
        cin: "G789652",
        nom: "sadik",
        prenom: "Abdelilah",
        partiPolitique: "Indépendant",
        age: 22,
        electeurs: [
            "EL200001",
            "EL200002",
            "EL200003",
            "EL200004",
            "EL200005",
            "EL200006",
            "EL200007"
        ]
    },

    {
        cin: "EF345678",
        nom: "Bennani",
        prenom: "Amine",
        partiPolitique: "Parti B",
        age: 45,
        electeurs: [
            "EL300001",
            "EL300002",
            "EL300003",
            "EL300004",
            "EL300005"
        ]
    },

    {
        cin: "GH456789",
        nom: "El Idrissi",
        prenom: "Omar",
        partiPolitique: "Parti A",
        age: 38,
        electeurs: [
            "EL400001",
            "EL400002",
            "EL400003",
            "EL400004",
            "EL400005",
            "EL400006",
            "EL400007",
            "EL400008"
        ]
    },

    {
        cin: "KL678901",
        nom: "Fassi",
        prenom: "Karim",
        partiPolitique: "Parti A",
        age: 52,
        electeurs: [
            "EL600001",
            "EL600002",
            "EL600003",
            "EL600004",
            "EL600005",
            "EL600006",
            "EL600007",
            "EL600008",
            "EL600009"
        ]
    },

    {
        cin: "MN789012",
        nom: "Tazi",
        prenom: "Mehdi",
        partiPolitique: "Parti B",
        age: 41,
        electeurs: [
            "EL700001",
            "EL700002",
            "EL700003",
            "EL700004",
            "EL700005",
            "EL700006"
        ]
    },

    {
        cin: "QR901234",
        nom: "Berrada",
        prenom: "Anas",
        partiPolitique: "Parti C",
        age: 47,
        electeurs: [
            "EL900001",
            "EL900002",
            "EL900003",
            "EL900004"
        ]
    },

    {
        cin: "WX234890",
        nom: "Mansouri",
        prenom: "Zakaria",
        partiPolitique: "Parti C",
        age: 31,
        electeurs: [
            "EL120001"
        ]
    }
];

//===========================nzido candidat wa7d====================================
function ajoutercandidat() {
    console.log(`\n---ajouter un nouveau condidat---`);
    let cin = prompt("entrez le CIN du condidat: ");
    let nom = prompt("Entrez le Nom: ");
    let prenom = prompt("Entrez le Prénom: ");
    let politique = prompt("Entrez le Parti politique (ou 'Indépendant'): ");
    let age = parseInt(prompt("Entrez l'âge : "));

    let candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: politique,
        age: age,
        electeurs: []
    }
    candidats[candidats.length] = candidat;
}
//================================= nzido bzaf dya candidat =====================
function ajouterplucandidats() {
    console.log(`\n---ajouter plusieur candidats---`);
    let numberCondidat = parseInt(prompt("Combien de candidats voulez-vous ajouter :"));
    let i = 0;
    while (i < numberCondidat) {
        console.log(`     ---candidat--- ${i + 1}`);
        ajoutercandidat();
        i++;
    }
}
//=================fonction kinkhtaro mnha l case librina fl affichage====================
function affichagechoix() {

    console.log(`
    --- Affichage des Candidats ---
1. Afficher tous les candidats
2. Trier les candidats par nombre de votes (ordre décroissant)
3. Filtrer par parti politique`)

    let affichagechoix = parseInt(prompt("choisissez une option(1-3): "));
    switch (affichagechoix) {
        case 1:
            affichertouslescandidats();
            break;
        case 2:
            triercandidats();
            break;
        case 3:
            filtrercandidats();
            break;
        default:
            console.log("*** Choix invalide ***");
    }
}
//=======================fonction kit afiichi lina ga3 les condidat========================
function affichertouslescandidats() {
    console.log("\n-------------------------------------");
    for (let i = 0; i < candidats.length; i++) {
        console.log(`    Candidat ${i + 1}
    CIN : ${candidats[i].cin}
    Nom : ${candidats[i].nom}
    Prénom : ${candidats[i].prenom}
    Parti politique : ${candidats[i].partiPolitique}
    Age : ${candidats[i].age}
    Nombre de votes : ${candidats[i].electeurs.length}
----------------------------------------
`);
    }
}
//====================================== sort fonction ==============================================
function sortcondidat() {
    let tmp;
    for (let round = 0; round < candidats.length; round++) {
        for (let i = 0; i < candidats.length - 1 - round; i++) {
            if (candidats[i].electeurs.length < candidats[i + 1].electeurs.length) {
                tmp = candidats[i];
                candidats[i] = candidats[i + 1];
                candidats[i + 1] = tmp;
            }
        }
    }
}
//==============fonction kit sorti lina condidat par nombre de votes=====================
function triercandidats() {
    sortcondidat();

    console.log("\n============= Candidats triés par nombre de votes (Décroissant) :===========");
    for (let i = 0; i < candidats.length; i++) {
        console.log(`    place: ${i + 1}
    CIN : ${candidats[i].cin}
    Nom : ${candidats[i].nom}
    Prénom : ${candidats[i].prenom}
    Parti politique : ${candidats[i].partiPolitique}
    Age : ${candidats[i].age}
    Nombre de votes : ${candidats[i].electeurs.length}
----------------------------------------
`);
    }
}
//===========================filter par partie politique================================
function filtrercandidats() {

    const parti = prompt("Entrez le parti politique :");
    console.log(`\n------ candidats du parti ${parti} -------`);

    let trouveparti = false;
    for (let i = 0; i < candidats.length; i++) {
        if (parti === candidats[i].partiPolitique) {
            console.log(`
    Candidat : ${i + 1}
    CIN : ${candidats[i].cin}
    Nom : ${candidats[i].nom}
    Prénom : ${candidats[i].prenom}
    Parti politique : ${candidats[i].partiPolitique}
    Age : ${candidats[i].age}
    Nombre de votes : ${candidats[i].electeurs.length}
----------------------------------------
`);
            trouveparti = true;
        }
    }
    if (trouveparti === false) {
        console.log("*** Aucun candidat trouvé pour ce parti. ***");
    }
}
//==============vote 3la condidat ocheck wach cin dyalk deja votez=================
function votecandidat() {
    console.log("\n--- Vote Électoral ---");
    const cinelecteur = prompt("Entrez votre CIN (Électeur) :");

    let dejaVote = false;
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (cinelecteur === candidats[i].electeurs[j]) {
                dejaVote = true;
                break;
            }
        }
    }
    if (dejaVote === true) {
        console.log("* Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau *");
    }
    else {
        let trouvecin = false;
        const cincondidat = prompt("Entrez le CIN du candidat pour lequel vous voulez voter :");
        for (let i = 0; i < candidats.length; i++) {
            if (cincondidat === candidats[i].cin) {
                candidats[i].electeurs[candidats[i].electeurs.length] = cinelecteur;
                console.log(`Votre vote pour ${candidats[i].nom} a été enregistré avec succès !`);
                trouvecin = true;
                break;
            }
        }
        if (trouvecin === false) {
            console.log(" *** Candidat non trouvé avec ce CIN ***");
        }
    }
}
//=============function kitmodifi partipolitique and age=================================
function modifiercandidat() {
    console.log("\n--- modifier un candidat ---")
    const cinmodifier = prompt("Entrez le CIN du candidat à modifier:")

    let trouvecin = false;
    for (let i = 0; i < candidats.length; i++) {
        if (cinmodifier === candidats[i].cin) {
            trouvecin = true;
            console.log(`\nCandidat sélectionné : "${candidats[i].nom}"`);
            console.log("1. Modifier le parti politique");
            console.log("2. Modifier l'âge");

            let modifierchoix = parseInt(prompt("Choisissez une option (1-2) : "));
            switch (modifierchoix) {
                case 1:
                    let nouveauparti = prompt("Entrez le nouveau parti politique : ");
                    candidats[i].partiPolitique = nouveauparti;
                    break;
                case 2:
                    let nouveauage = parseInt(prompt("entrez le nouveau age: "));
                    candidats[i].age = nouveauage;
                    break;
                default:
                    console.log("*** option invalide *** ");
            }
        }
    }
    if (trouvecin === false) {
        console.log("*** Candidat non trouvé. ***");
    }
}
//================================suppremer candidat============================================
function suppremercandidt() {
    let cinsuppremer = prompt("Entrez le CIN du candidat à supprimer :");

    let trouvecin = false;
    for (let i = 0; i < candidats.length; i++) {
        if (cinsuppremer === candidats[i].cin) {
            trouvecin = true;
            const candidatsupreme = candidats[i];
        //=========splice algorithm=========//
            for (let j = i; j < candidats.length - 1; j++) {
                candidats[j] = candidats[j + 1];
            }
            candidats.length = candidats.length - 1;
        //====================================//
            console.log(`* le candidat ${candidatsupreme.nom} ${candidatsupreme.prenom} a été supprimé.`);
            break;
        }
    }
    if (trouvecin === false) {
        console.log("*** candidat nom trouve ***");
    }
}
//==========================rechercher candidat par nom ==============================
function recherchercandidat() {
    let nomRecherche = prompt("Entrez le nom du candidat : ");
    let trouvenom = false;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom === nomRecherche) {
            console.log(`
     CIN : ${candidats[i].cin}
     Nom : ${candidats[i].nom}
     Prénom : ${candidats[i].prenom}
     Parti politique : ${candidats[i].partiPolitique}
     Age : ${candidats[i].age}
     Nombre de votes : ${candidats[i].electeurs.length}`);
            trouvenom = true;
            break;
        }
    }
    if (trouvenom === false) {
        console.log("*** Aucun candidat trouvé ***");
    }
}
//============================ Statistiques de l'élection ========================
function statistiquesElection() {
    console.log("=============== Statistiques de l'élection ===============");
    console.log(`\n* nombre total de candidats: ${candidats.length}`);

    let totalvotes = 0;
    for (let i = 0; i < candidats.length; i++) {
        totalvotes += candidats[i].electeurs.length;
    }
    console.log(`* Nombre total de votes exprimés : ${totalvotes}`);

    sortcondidat();
    console.log("\n* top 3 des candidats :");
    let topcandidats = 3;
    if (candidats.length < 3) {
        topcandidats = candidats.length;
    }
    for (let i = 0; i < 3; i++) {
        console.log(`  ${i + 1}. ${candidats[i].nom} ${candidats[i].prenom} | ${candidats[i].electeurs.length} votes`);
    }
    //=============================number candidats par partipolitique ==============================
    function nombreparparti() {
        let object = {};
        for (let i = 0; i < candidats.length; i++) {
            if (object[candidats[i].partiPolitique] === undefined) {
                    object[candidats[i].partiPolitique] = 1;
            }
            else {
                object[candidats[i].partiPolitique] += 1;
            }
        }
        console.log("\n* Nombre de candidats par parti politique :");
        for (let key in object) {
            console.log(` -${key} : ${object[key]} condidats`);
        }
    }
    nombreparparti();
}
//=============================== Menu choix ================================================== 
let choix = 0;
while (choix != 9) {
    console.log(`
==================================================
|  GESTION DES ÉLECTIONS ET LISTES ÉLECTORALES   |
==================================================
|  1. Ajouter un nouveau candidat                |
|  2. Ajouter plusieurs candidats à la fois      |
|  3. Afficher la liste des candidats            |
|  4. Voter pour un candidat                     |
|  5. Modifier les informations d'un candidat    |
|  6. Supprimer un candidat                      |
|  7. Rechercher des candidats par Nom           |
|  8. Afficher les Statistiques de l'élection    |
|  9.Quitter l'application                       |
==================================================`);
    choix = parseInt(prompt("Choisissez une option (1-8 ou 9 pour quitter) :"));

    switch (choix) {
        case 1:
            ajoutercandidat();
            break;
        case 2:
            ajouterplucandidats();
            break;
        case 3:
            affichagechoix();
            break;
        case 4:
            votecandidat()
            break;
        case 5:
            modifiercandidat();
            break;
        case 6:
            suppremercandidt();
            break;
        case 7:
            recherchercandidat();
            break;
        case 8:
            statistiquesElection();
            break;
        case 9:
            console.log("Merci d'avoir utilisé l'application. Au revoir !");
            break;
        default:
            console.log("Option invalide. Veuillez réessayer.");
    }
}
