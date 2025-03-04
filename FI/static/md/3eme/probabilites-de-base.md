# 🎲 Probabilités de Base  

## 🧐 Introduction  

Les **probabilités** permettent de mesurer la **chance** qu’un événement se produise.  
Elles sont utilisées en **mathématiques, sciences, jeux, assurance, finance** et bien d’autres domaines.  



## 1️⃣ 📏 Définition d'une Probabilité  

La **probabilité d'un événement** est un **nombre entre 0 et 1** qui mesure sa chance de se produire :  
✔ **\( P(A) = 0 \)** signifie que l’événement **ne peut pas arriver**.  
✔ **\( P(A) = 1 \)** signifie que l’événement **est certain**.  
✔ Plus **\( P(A) \)** est proche de **1**, plus l'événement est probable.  

### 📌 Formule de Base  

Si tous les **issues** d'une expérience sont **équiprobables**, la probabilité d'un événement **\( A \)** est donnée par :  

$$ P(A) = \frac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}} $$  



## 2️⃣ 🎲 Exemple de Lancer de Dé  

Un **dé classique** a **6 faces** numérotées de **1 à 6**.  

✔ **Probabilité d'obtenir un 4** :  

$$ P(4) = \frac{1}{6} $$  

✔ **Probabilité d'obtenir un nombre pair (2, 4 ou 6)** :  

$$ P(\text{pair}) = \frac{3}{6} = \frac{1}{2} $$  

✔ **Probabilité d'obtenir un 7** ? 🤔 Impossible, donc :  

$$ P(7) = 0 $$  



## 3️⃣ 🎲 Règles de Base des Probabilités  

### 📌 1. Somme des Probabilités  

La somme des probabilités de **tous les événements possibles** est toujours **égale à 1** :  

$$ P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = 1 $$  



### 📌 2. Probabilité de l'événement Complémentaire  

L’événement complémentaire de **\( A \)** (noté **\( \overline{A} \)**) est **"tout sauf \( A \)"**.  
Sa probabilité est :  

$$ P(\overline{A}) = 1 - P(A) $$  

✔ **Exemple** : Si **\( P(A) = 0.3 \)** alors **\( P(\overline{A}) = 1 - 0.3 = 0.7 \)**  



### 📌 3. Probabilité d'Union d'Événements  

Si **\( A \)** et **\( B \)** sont deux événements, alors :  

$$ P(A \cup B) = P(A) + P(B) - P(A \cap B) $$  

✔ **Exemple** : Lancer un dé  
- **\( A \)** : obtenir un **nombre pair** \( \{2, 4, 6\} \) → \( P(A) = \frac{3}{6} \)  
- **\( B \)** : obtenir un **nombre impair** \( \{1, 3, 5\} \) → \( P(B) = \frac{3}{6} \)  
- **\( A \cap B \)** ? Aucune issue commune → \( P(A \cap B) = 0 \)  

Donc :  

$$ P(A \cup B) = P(A) + P(B) = \frac{3}{6} + \frac{3}{6} = 1 $$  



## 4️⃣ 🎯 Probabilités Conditionnelles et Indépendance  

### 📌 1. Probabilité Conditionnelle  

Si on sait qu'un événement \( B \) s'est produit, la probabilité de \( A \) **sachant \( B \)** est :  

$$ P(A | B) = \frac{P(A \cap B)}{P(B)} $$  

✔ **Exemple** : Une urne contient **5 billes rouges** et **3 billes bleues**.  
Si on tire une bille et on sait qu’elle est **rouge ou bleue**, quelle est la probabilité qu’elle soit **rouge** ?  

$$ P(\text{rouge} | \text{rouge ou bleue}) = \frac{5}{5+3} = \frac{5}{8} $$  



### 📌 2. Indépendance  

Deux événements \( A \) et \( B \) sont **indépendants** si :  

$$ P(A \cap B) = P(A) \times P(B) $$  

✔ **Exemple** : Lancer **deux dés**  
- Probabilité d’obtenir un **6 sur le premier dé** : \( P(A) = \frac{1}{6} \)  
- Probabilité d’obtenir un **6 sur le second dé** : \( P(B) = \frac{1}{6} \)  
- Probabilité d’obtenir **deux 6** :  

$$ P(A \cap B) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36} $$  



## 📝 Exercices  

📌 **Exercice 1** : Une urne contient **4 billes rouges, 3 billes bleues et 2 billes vertes**.  
Quelle est la probabilité de tirer :  
✔ Une bille bleue ?  
✔ Une bille ni rouge ni verte ?  

📌 **Exercice 2** : On lance un dé à **6 faces**. Calculer la probabilité de :  
✔ Obtenir un multiple de **3**.  
✔ Obtenir un **nombre impair** ou un **6**.  

📌 **Exercice 3** : On tire **2 cartes** d'un jeu de **52 cartes**.  
Quelle est la probabilité de tirer **deux cœurs** ?  



## 🎯 Applications des Probabilités  

✔ **Jeux de hasard** 🎰 : Loteries, jeux de dés, casino.  
✔ **Assurances** 📑 : Calcul des risques.  
✔ **Météorologie** 🌦️ : Prédire la pluie ou le beau temps.  
✔ **Médecine** 🏥 : Déterminer la fiabilité d’un test médical.  
✔ **Finance** 💰 : Analyse des marchés et prévisions économiques.  



## 🎉 Conclusion  

📌 **Les probabilités permettent d'évaluer les chances d'un événement.**  
📌 **La somme des probabilités des événements possibles est toujours égale à 1.**  
📌 **Les événements peuvent être indépendants ou dépendants.**  

📚 **À toi de jouer !** Essaye les exercices et deviens un pro des probabilités ! 🚀  