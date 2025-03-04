# 🎲 Probabilités Conditionnelles

## 🧐 Introduction

Les **probabilités conditionnelles** permettent de calculer la probabilité qu'un événement se produise, en sachant qu'un autre événement est déjà arrivé.  
Cela permet d'affiner les calculs de probabilité en prenant en compte des informations supplémentaires.



## 1️⃣ 📏 Définition de la Probabilité Conditionnelle

La **probabilité conditionnelle** de l'événement \( A \), sachant que l'événement \( B \) est survenu, est notée \( P(A|B) \) et est définie par la formule :  

$$ P(A | B) = \frac{P(A \cap B)}{P(B)} $$  

### 📌 Explications :  
- **\( P(A|B) \)** : Probabilité de \( A \) sachant \( B \).  
- **\( P(A \cap B) \)** : Probabilité que \( A \) et \( B \) se produisent tous les deux.  
- **\( P(B) \)** : Probabilité que \( B \) se produise (c'est la probabilité conditionnée).  

🔹 **Remarque** : La probabilité conditionnelle n'a de sens que si \( P(B) \neq 0 \), car la division par zéro est impossible.  



## 2️⃣ 🎲 Exemple de Probabilité Conditionnelle

Supposons que nous avons un jeu de cartes composé de **52 cartes** (13 cœurs, 13 carreaux, 13 trèfles et 13 piques).  
Si l'on tire une carte, et qu'on sait que cette carte est un **cœur**, quelle est la probabilité qu'elle soit un **as** ?

### 📌 Étapes de Calcul

1️⃣ **Événement \( A \)** : Tirer un **as** (il y en a 4 dans le jeu, un pour chaque couleur).  
2️⃣ **Événement \( B \)** : Tirer un **cœur** (il y en a 13 cœurs dans le jeu).  
3️⃣ **\( A \cap B \)** : Tirer un **as de cœur** (il y en a un seul dans le jeu).  
4️⃣ La probabilité de l'événement \( A \), sachant que l'on a tiré un cœur, est donc :  

$$ P(A | B) = \frac{P(A \cap B)}{P(B)} $$  

Calculons chacune de ces probabilités :  
- \( P(A \cap B) = \frac{1}{52} \) (il n'y a qu'un seul as de cœur).  
- \( P(B) = \frac{13}{52} \) (il y a 13 cœurs parmi les 52 cartes).  

Ainsi, la probabilité de tirer un **as de cœur** sachant que la carte tirée est un cœur est :  

$$ P(A | B) = \frac{\frac{1}{52}}{\frac{13}{52}} = \frac{1}{13} $$  

🔹 **Réponse** : La probabilité est **\( \frac{1}{13} \)**.



## 3️⃣ 📏 Interprétation et Utilisation

Les **probabilités conditionnelles** sont souvent utilisées dans des situations où l'on a des informations **partielles**. Voici quelques exemples d'applications :  
✔ **Météorologie** 🌦️ : Probabilité qu'il pleuve demain **sachant** qu'il y a des nuages aujourd'hui.  
✔ **Médecine** 🏥 : Probabilité d'une maladie **sachant** un résultat de test positif.  
✔ **Finance** 💰 : Probabilité de gain sur un investissement **sachant** que le marché a monté aujourd'hui.  



## 4️⃣ 📉 Règle de Bayes

Une **autre règle importante** en probabilité conditionnelle est la **règle de Bayes**, qui permet de calculer la probabilité conditionnelle **dans l'autre sens**. Elle est donnée par :  

$$ P(B | A) = \frac{P(A | B) \cdot P(B)}{P(A)} $$  

### 📌 Explications :
- \( P(B | A) \) : Probabilité de \( B \) sachant \( A \).  
- \( P(A | B) \) : Probabilité de \( A \) sachant \( B \) (c'est la probabilité qu'on connaît).  
- \( P(B) \) : Probabilité de \( B \).  
- \( P(A) \) : Probabilité de \( A \).

**Exemple** : Supposons que **90% des patients** ayant une **maladie** A se sentent mieux après un traitement.  
De plus, **5% des personnes en bonne santé** peuvent également ressentir une amélioration après ce même traitement.  
Si un patient se sent mieux après le traitement, quelle est la probabilité qu'il ait réellement la maladie A ?  
En appliquant la règle de Bayes, vous pourrez calculer la probabilité inverse.



## 📝 Exercices

📌 **Exercice 1** :  
Dans un paquet de **52 cartes**, quelle est la probabilité de tirer un **roi de cœur**, sachant que la carte tirée est un cœur ?  

📌 **Exercice 2** :  
Une urne contient **5 billes rouges**, **3 billes bleues** et **2 billes vertes**. Si on tire une bille et on sait qu’elle est **rouge ou bleue**, quelle est la probabilité qu’elle soit **rouge** ?  

📌 **Exercice 3** :  
Lors d'un tirage au sort, 80% des personnes présentes sont des femmes et 20% des hommes. Parmi les femmes, 60% ont un véhicule personnel, tandis que parmi les hommes, seulement 40% en ont un. Quelle est la probabilité qu'une personne choisie au hasard avec un véhicule personnel soit une femme ? Utilisez la règle de Bayes.



## 🎯 Applications des Probabilités Conditionnelles

✔ **Assurances** 📑 : Calcul du risque d'accident en fonction du comportement du conducteur.  
✔ **Médecine** 🩺 : Calcul de la probabilité de la maladie sachant le résultat d’un test.  
✔ **Criminologie** 🔍 : Estimation de la probabilité qu'un suspect soit coupable, sachant certains indices.  
✔ **Machine Learning** 🤖 : Modélisation des probabilités conditionnelles pour des systèmes de prédiction.  



## 🎉 Conclusion

📌 **La probabilité conditionnelle** permet de mettre à jour nos croyances sur un événement en fonction de nouvelles informations.  
📌 **La règle de Bayes** est très puissante pour inverser les probabilités conditionnelles.  
📌 Toujours vérifier que l'événement \( B \) a une probabilité non nulle, sinon la probabilité conditionnelle est indéfinie.  

📚 **À toi de jouer !** Pratique avec des exercices et deviens un expert des probabilités conditionnelles ! 🚀  