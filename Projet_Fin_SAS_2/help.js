const readline = require('readline');

// Interface pour la lecture dans la console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tableau principal contenant tous les candidats
let candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: ["CD999999", "EF888888"]
    },
    {
        cin: "CD654321",
        nom: "El Amrani",
        prenom: "Fatima",
        partiPolitique: "Parti A",
        age: 35,
        electeurs: ["GH777777"]
    }
];

// Helper pour poser des questions avec Promise / async
function poserQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (reponse) => {
            resolve(reponse.trim());
        });
    });
}

// 1. Ajouter un seul candidat
async function ajouterUnCandidat() {
    console.log("\n--- Ajouter un nouveau candidat ---");
    let cin = await poserQuestion("Entrez le CIN du candidat : ");

    // Vérifier l'unicité du CIN du candidat
    let existe = candidats.some(c => c.cin.toUpperCase() === cin.toUpperCase());
    if (existe) {
        console.log("❌ Un candidat avec ce CIN existe déjà !");
        return;
    }

    let nom = await poserQuestion("Entrez le Nom : ");
    let prenom = await poserQuestion("Entrez le Prénom : ");
    let parti = await poserQuestion("Entrez le Parti politique (ou 'Indépendant') : ");
    let ageInput = await poserQuestion("Entrez l'âge : ");
    let age = parseInt(ageInput);

    if (isNaN(age) || age < 18) {
        console.log("❌ Âge invalide (doit être un nombre et >= 18).");
        return;
    }

    let candidat = {
        cin: cin.toUpperCase(),
        nom: nom,
        prenom: prenom,
        partiPolitique: parti || "Indépendant",
        age: age,
        electeurs: []
    };

    candidats.push(candidat);
    console.log("✅ Candidat ajouté avec succès !");
}

// 2. Ajouter plusieurs candidats à la fois
async function ajouterPlusieursCandidats() {
    console.log("\n--- Ajouter plusieurs candidats ---");
    let countInput = await poserQuestion("Combien de candidats voulez-vous ajouter ? : ");
    let count = parseInt(countInput);

    if (isNaN(count) || count <= 0) {
        console.log("❌ Nombre invalide.");
        return;
    }

    for (let i = 0; i < count; i++) {
        console.log(`\n--- Candidat ${i + 1}/${count} ---`);
        await ajouterUnCandidat();
    }
}

// 3. Afficher la liste des candidats
async function afficherCandidats() {
    console.log("\n--- Affichage des Candidats ---");
    console.log("1. Afficher tous les candidats");
    console.log("2. Trier les candidats par nombre de votes (ordre décroissant)");
    console.log("3. Filtrer par parti politique");

    let choix = await poserQuestion("Choisissez une option (1-3) : ");

    let listeAAfficher = [...candidats];

    if (choix === "2") {
        listeAAfficher.sort((a, b) => b.electeurs.length - a.electeurs.length);
        console.log("\n📊 Candidats triés par nombre de votes (Décroissant) :");
    } else if (choix === "3") {
        let partiRecherche = await poserQuestion("Entrez le nom du parti politique : ");
        listeAAfficher = listeAAfficher.filter(
            c => c.partiPolitique.toLowerCase() === partiRecherche.toLowerCase()
        );
        console.log(`\n🔍 Candidats du parti "${partiRecherche}" :`);
    }

    if (listeAAfficher.length === 0) {
        console.log("Aucun candidat trouvé.");
        return;
    }

    console.log("\n----------------------------------------------------------------------------------");
    listeAAfficher.forEach((c, i) => {
        console.log(`${i + 1}. CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Parti: ${c.partiPolitique} | Âge: ${c.age} ans | Votes: ${c.electeurs.length}`);
    });
    console.log("----------------------------------------------------------------------------------");
}

// 4. Voter pour un candidat
async function voter() {
    console.log("\n--- Vote Électoral ---");
    let cinElecteur = await poserQuestion("Entrez votre CIN (Électeur) : ");
    cinElecteur = cinElecteur.toUpperCase();

    if (!cinElecteur) {
        console.log("❌ CIN valide requis.");
        return;
    }

    // Vérifier si l'électeur a déjà voté
    let dejaVote = candidats.some(c => c.electeurs.map(e => e.toUpperCase()).includes(cinElecteur));

    if (dejaVote) {
        console.log("\n⚠️ Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau.");
        return;
    }

    let cinCandidat = await poserQuestion("Entrez le CIN du candidat pour lequel vous voulez voter : ");
    cinCandidat = cinCandidat.toUpperCase();

    let candidat = candidats.find(c => c.cin.toUpperCase() === cinCandidat);

    if (!candidat) {
        console.log("❌ Candidat non trouvé avec ce CIN.");
        return;
    }

    candidat.electeurs.push(cinElecteur);
    console.log(`✅ Votre vote pour ${candidat.prenom} ${candidat.nom} a été enregistré avec succès !`);
}

// 5. Modifier les informations d'un candidat
async function modifierCandidat() {
    console.log("\n--- Modifier un candidat ---");
    let cin = await poserQuestion("Entrez le CIN du candidat à modifier : ");
    let candidat = candidats.find(c => c.cin.toUpperCase() === cin.toUpperCase());

    if (!candidat) {
        console.log("❌ Candidat non trouvé.");
        return;
    }

    console.log(`\nCandidat sélectionné : ${candidat.prenom} ${candidat.nom}`);
    console.log("1. Modifier le parti politique");
    console.log("2. Modifier l'âge");
    let choix = await poserQuestion("Votre choix (1-2) : ");

    if (choix === "1") {
        let nouveauParti = await poserQuestion(`Nouveau parti politique (Actuel: ${candidat.partiPolitique}) : `);
        if (nouveauParti) {
            candidat.partiPolitique = nouveauParti;
            console.log("✅ Parti politique mis à jour.");
        }
    } else if (choix === "2") {
        let nouvelAgeInput = await poserQuestion(`Nouvel âge (Actuel: ${candidat.age}) : `);
        let nouvelAge = parseInt(nouvelAgeInput);
        if (!isNaN(nouvelAge) && nouvelAge >= 18) {
            candidat.age = nouvelAge;
            console.log("✅ Âge mis à jour.");
        } else {
            console.log("❌ Âge invalide.");
        }
    } else {
        console.log("Option invalide.");
    }
}

// 6. Supprimer un candidat
async function supprimerCandidat() {
    console.log("\n--- Supprimer un candidat ---");
    let cin = await poserQuestion("Entrez le CIN du candidat à supprimer : ");
    let index = candidats.findIndex(c => c.cin.toUpperCase() === cin.toUpperCase());

    if (index === -1) {
        console.log("❌ Candidat non trouvé.");
        return;
    }

    let candidatSuprime = candidats.splice(index, 1)[0];
    console.log(`✅ Le candidat ${candidatSuprime.prenom} ${candidatSuprime.nom} (${candidatSuprime.cin}) a été supprimé.`);
}

// 7. Rechercher des candidats par Nom
async function rechercherCandidat() {
    console.log("\n--- Rechercher un candidat par Nom ---");
    let nomRecherche = await poserQuestion("Entrez le Nom du candidat : ");
    
    let resultats = candidats.filter(
        c => c.nom.toLowerCase().includes(nomRecherche.toLowerCase())
    );

    if (resultats.length === 0) {
        console.log("Aucun candidat correspondant trouvé.");
        return;
    }

    console.log(`\nRésultats pour "${nomRecherche}" :`);
    resultats.forEach(c => {
        console.log(`- CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Parti: ${c.partiPolitique} | Votes: ${c.electeurs.length}`);
    });
}

// 8. Statistiques de l'élection
function afficherStatistiques() {
    console.log("\n=================== STATISTIQUES DE L'ÉLECTION ===================");

    // Total de candidats
    let totalCandidats = candidats.length;
    console.log(`📊 Nombre total de candidats : ${totalCandidats}`);

    // Total de votes exprimés
    let totalVotes = candidats.reduce((acc, curr) => acc + curr.electeurs.length, 0);
    console.log(`🗳️  Nombre total de votes exprimés : ${totalVotes}`);

    // Top 3 des candidats avec le plus de votes
    let top3 = [...candidats]
        .sort((a, b) => b.electeurs.length - a.electeurs.length)
        .slice(0, 3);

    console.log("\n🏆 Top 3 des candidats :");
    if (top3.length === 0) {
        console.log("   Aucun candidat.");
    } else {
        top3.forEach((c, index) => {
            console.log(`   ${index + 1}. ${c.nom} ${c.prenom} (${c.partiPolitique}) - ${c.electeurs.length} votes`);
        });
    }

    // Nombre de candidats par parti politique
    let repartitionPartis = {};
    candidats.forEach(c => {
        let parti = c.partiPolitique;
        repartitionPartis[parti] = (repartitionPartis[parti] || 0) + 1;
    });

    console.log("\n🏛️  Nombre de candidats par parti politique :");
    for (let parti in repartitionPartis) {
        console.log(`   - ${parti} : ${repartitionPartis[parti]} candidat(s)`);
    }
    console.log("==================================================================");
}

// Menu principal
async function menuPrincipal() {
    let continuer = true;

    while (continuer) {
        console.log("\n==================================================");
        console.log("   GESTION DES ÉLECTIONS ET LISTES ÉLECTORALES   ");
        console.log("==================================================");
        console.log("1. Ajouter un nouveau candidat");
        console.log("2. Ajouter plusieurs candidats à la fois");
        console.log("3. Afficher la liste des candidats");
        console.log("4. Voter pour un candidat");
        console.log("5. Modifier les informations d'un candidat");
        console.log("6. Supprimer un candidat");
        console.log("7. Rechercher des candidats par Nom");
        console.log("8. Afficher les Statistiques de l'élection");
        console.log("9. Quitter l'application");
        console.log("==================================================");

        let choix = await poserQuestion("Choisissez une option (1-9) : ");

        switch (choix) {
            case "1":
                await ajouterUnCandidat();
                break;
            case "2":
                await ajouterPlusieursCandidats();
                break;
            case "3":
                await afficherCandidats();
                break;
            case "4":
                await voter();
                break;
            case "5":
                await modifierCandidat();
                break;
            case "6":
                await supprimerCandidat();
                break;
            case "7":
                await rechercherCandidat();
                break;
            case "8":
                afficherStatistiques();
                break;
            case "9":
                console.log("\nMerci d'avoir utilisé l'application. Au revoir !");
                continuer = false;
                rl.close();
                break;
            default:
                console.log("❌ Option invalide. Veuillez réessayer.");
                break;
        }
    }
}

// Démarrage de l'application
menuPrincipal();