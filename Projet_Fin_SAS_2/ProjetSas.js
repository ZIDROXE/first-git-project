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
        nom: "Abdelilah",
        prenom: "sadik",
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
        partiPolitique: "Parti C",
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
        cin: "ST012345",
        nom: "Naciri",
        prenom: "Reda",
        partiPolitique: "Parti c",
        age: 36,
        electeurs: [
            "EL1000011",
            "EL1000012",
            "EL1000013",
            "EL1000014",
            "EL1000015",
            "EL1000016",
            "EL1000017"
        ]
    },

    {
        cin: "UV123789",
        nom: "Tahiri",
        prenom: "Ismail",
        partiPolitique: "Parti B",
        age: 44,
        electeurs: [
            "EL110001",
            "EL110002",
            "EL110003",
            "EL110004",
            "EL110005",
            "EL110006",
            "EL110007",
            "EL110008",
            "EL110009",
            "EL110010"
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

//=========================nzido candidat wa7d====================================
function ajoutercandidat(){
    console.log(`\n---ajouter un nouveau condidat---`);
    let cin = prompt("entrez le CIN du condidat: ");
    let nom = prompt("Entrez le Nom: ");
    let prenom = prompt("Entrez le Prénom: ");
    let politique = prompt("Entrez le Parti politique (ou 'Indépendant'): ");
    let age = parseInt(prompt("Entrez l'âge : "));

    let candidat = {
        cin : cin,
        nom : nom,
        prenom : prenom,
        partiPolitique : politique,
        age: age,
        electeurs:[]
}
  candidats[candidats.length] = candidat;
}
//================================= nzido bzaf dya candidat =====================
function ajouterplucandidats(){
    console.log(`\n---ajouter plusieur candidats---`);
    let numberCondidat = parseInt(prompt("Combien de candidats voulez-vous ajouter :"));
    let i = 0;
    while(i < numberCondidat){
            console.log(`     ---candidat--- ${i + 1} / ${numberCondidat}`);
            ajoutercandidat();
        i++;
    }
}
//=================fonction kinkhtaro mnha l case librina fl affichage====================
function affichagechoix(){

console.log(`
    --- Affichage des Candidats ---
1. Afficher tous les candidats
2. Trier les candidats par nombre de votes (ordre décroissant)
3. Filtrer par parti politique`)

let affichagechoix = parseInt(prompt("choisissez une option(1-3): "));
switch(affichagechoix){
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
        console.log("Choix invalide");
}
}
//=======================fonction kit afiichi lina ga3 les condidat========================
function  affichertouslescandidats(){
    console.log("\n-------------------------------------");
    for(let i = 0; i < candidats.length; i++)
    {
        console.log(`
    Candidat ${i + 1}
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
//==============fonction kit sorti lina condidat par nombre de votes=====================
function triercandidats(){
    
    let tmp;
    for(let round = 0; round < candidats.length; round++){
        for(let i = 0; i < candidats.length - 1 - round; i++){
            if(candidats[i].electeurs.length < candidats[i + 1].electeurs.length){
                tmp = candidats[i];
                candidats[i] = candidats[i + 1];
                candidats[i + 1] = tmp;
            }
        }
    }
    console.log("\n=============Candidats triés par nombre de votes (Décroissant) :===========");
    for(let i = 0; i < candidats.length; i++)
    {
       console.log(`
    place: ${i + 1}
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
function filtrercandidats(){

    const parti = prompt("Entrez le parti politique :");
    console.log(`\n------ candidats du parti ${parti} -------`);

    let trouveparti = false;
    for(let i = 0; i < candidats.length; i++){
        if(parti === candidats[i].partiPolitique){
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

    if(trouveparti === false){
        console.log("Aucun candidat trouvé pour ce parti.");
    }
}
//==============vote 3la condidat ocheck wach cin dyalk deja votez=================
function votecandidat(){
console.log("\n--- Vote Électoral ---");
const cinelecteur = prompt("Entrez votre CIN (Électeur) :");

let dejaVote = false;
for(let i = 0; i < candidats.length; i++){
    for(let j = 0; j < candidats[i].electeurs.length; j++){
        if(cinelecteur === candidats[i].electeurs[j]){
            dejaVote = true;
            break;
        }
    }
}
if(dejaVote === true){
    console.log("Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau");
}
else{
let trouvecin = false;
const cincondidat = prompt("enterz le cin de condidat librti t voti 3lih:");
for(let i = 0; i < candidats.length; i++){
        if(cincondidat === candidats[i].cin){
              candidats[i].electeurs[candidats[i].electeurs.length] = cinelecteur;
                console.log(`Votre vote pour ${candidats[i].nom} a été enregistré avec succès !`);
             trouvecin = true;
             break;
            }
}
if(trouvecin === false) {
    console.log("Candidat non trouvé avec ce CIN");
    }
}
}
//=============================== Menu choix ================================================== 
let choix = 0;
while(choix != 9)
{
    console.log(`
==================================================
   GESTION DES ÉLECTIONS ET LISTES ÉLECTORALES   
==================================================
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois
3. Afficher la liste des candidats
4. Voter pour un candidat
9.Quitter l'application
==================================================`);
choix = parseInt(prompt("Choisissez une option (1-8 ou 9 pour quitter) :"));
    
switch(choix){
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
    case 9:
        console.log("Merci d'avoir utilisé l'application. Au revoir !")
        break;
    default:
        console.log("Option invalide. Veuillez réessayer.")
}
}
