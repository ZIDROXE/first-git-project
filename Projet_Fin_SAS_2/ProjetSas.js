const prompt = require('prompt-sync')();
const candidats = [];
    /*{
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
        cin: "CD234567",
        nom: "Alaoui",
        prenom: "Yassine",
        partiPolitique: "Parti A",
        age: 35,
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
        cin: "IJ567890",
        nom: "Chraibi",
        prenom: "Hamza",
        partiPolitique: "Indépendant",
        age: 29,
        electeurs: [
            "EL500001",
            "EL500002",
            "EL500003"
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
        cin: "OP890123",
        nom: "Amrani",
        prenom: "Ayoub",
        partiPolitique: "Parti A",
        age: 33,
        electeurs: [
            "EL800001",
            "EL800002"
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
        partiPolitique: "Indépendant",
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
];*/

//=========================nzido candidat wa7d====================================
function AjouterCandidat(){
    console.log(`---ajouter un nouveau condidat---`);
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
function AjouterPluCandidats(){
    console.log(`---ajouter plusieur candidats---`);
    let numberCondidat = parseInt(prompt("Combien de candidats voulez-vous ajouter :"));
    let i = 0;
    while(i < numberCondidat){
            console.log(`     ---candidat--- ${i + 1} / ${numberCondidat}`);
            AjouterCandidat();
        i++;
    }
}
//=================fonction kinkhtaro mnha l case librina fl affichage====================
function AfficherCandidats(){

console.log(`
    --- Affichage des Candidats ---
1. Afficher tous les candidats
2. Trier les candidats par nombre de votes (ordre décroissant)
3. Filtrer par parti politique`)

let affichagechoix = parseInt(prompt("choisissez une option(1-3): "));
switch(affichagechoix){
    case 1:
        AfficherTousLesCandidats();
        break;
    case 2:
        TrierCandidats();
        break;
    case 3:
        FiltrerCandidats();
        break;
    default:
        console.log("Choix invalide");
}
}
//=======================fonction kit afiichi lina ga3 les condidat========================
function  AfficherTousLesCandidats(){

    console.table(candidats);
}
//==============fonction kit sorti lina condidat par nombre de votes=====================
function TrierCandidats(){
    
    let tmp;
    for(let round = 0; round < candidats.length; i++){
        for(i = 0; i < candidats.length - 1 - round; i++){
            if(candidats[i].electeurs.length < candidats[i + 1].electeurs.length){
                tmp = candidats[i];
                candidats[i] = candidats[i + 1];
                candidats[i + 1] = tmp;
            }
        }
    }
    console.log("=============Candidats triés par nombre de votes (Décroissant) :===========");
    console.table(candidats);
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
9.Quitter l'application
==================================================`);
choix = parseInt(prompt("Choisissez une option (1-8 ou 9 pour quitter) :"));
    
switch(choix){
    case 1: 
        AjouterCandidat();
        break;
    case 2:
        AjouterPluCandidats();
        break;
    case 3:
        AfficherCandidats();
        break;
    case 4:

    case 9:
        console.log("Merci d'avoir utilisé l'application. Au revoir !")
        break;
    default:
        console.log("Option invalide. Veuillez réessayer.")
}
}