# 🎲 Événements Indépendants

## 🧐 Introduction

En **probabilités**, deux événements sont dits **indépendants** si la probabilité qu'ils se produisent ensemble est égale au produit de leurs probabilités individuelles. Cela signifie que la survenue de l'un des événements n'affecte en rien la probabilité de survenue de l'autre.

---

## 1️⃣ 📏 Définition des Événements Indépendants

Deux événements \( A \) et \( B \) sont **indépendants** si et seulement si :  

$$ P(A \cap B) = P(A) \times P(B) $$

### 📌 Explications :
- **\( P(A) \)** : Probabilité de l'événement \( A \).
- **\( P(B) \)** : Probabilité de l'événement \( B \).
- **$$\( P(A \cap B) \)$$** : Probabilité que les événements \( A \) et \( B \) se produisent tous les deux.

Cela signifie que la probabilité de **l'intersection** des événements \( A \) et \( B \) est égale au produit des probabilités des événements pris séparément.

---

## 2️⃣ 🎲 Exemple d'Événements Indépendants

### 📌 Exemple 1 : Lancer de deux dés

On lance **deux dés**.  
Soit :
- \( A \) : Obtenir un **6** sur le premier dé.
- \( B \) : Obtenir un **3** sur le second dé.

Les événements \( A \) et \( B \) sont indépendants car le résultat du premier dé n'affecte en rien le résultat du second dé.

Calcul des probabilités :
- $$\( P(A) = \frac{1}{6} \)$$ (il y a une chance sur six d'obtenir un 6 sur un dé).
- $$\( P(B) = \frac{1}{6} \)$$ (il y a une chance sur six d'obtenir un 3 sur un dé).

La probabilité que les deux événements se produisent (obtenir un 6 sur le premier dé et un 3 sur le second dé) est donc :

$$ P(A \cap B) = P(A) \times P(B) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36} $$

---

### 📌 Exemple 2 : Tirage de cartes

On tire **deux cartes** successivement d'un jeu de 52 cartes.  
Soit :
- \( A \) : Tirer une **carte rouge** (il y a 26 cartes rouges dans un jeu de 52).
- \( B \) : Tirer une **carte cœur** (il y a 13 cartes cœur dans un jeu de 52).

Si on tire une carte rouge, la probabilité de tirer une carte cœur reste la même que si les événements étaient indépendants, car les cartes rouges et les cartes cœurs sont des événements distincts.

Calcul des probabilités :
- $$\( P(A) = \frac{26}{52} = \frac{1}{2} \)$$
- $$\( P(B) = \frac{13}{52} = \frac{1}{4} \)$$

La probabilité de tirer une carte rouge et une carte cœur est donc :

$$ P(A \cap B) = P(A) \times P(B) = \frac{1}{2} \times \frac{1}{4} = \frac{1}{8} $$

---

## 3️⃣ 📏 Vérification des Événements Indépendants

Pour vérifier si deux événements sont indépendants, on peut **comparer** la probabilité de leur intersection \( P(A \cap B) \) avec le produit de leurs probabilités \( P(A) \times P(B) \).

Si **les deux valeurs sont égales**, alors les événements sont indépendants. Sinon, les événements sont **dépendants**.

---

## 4️⃣ 📉 Événements Dépendants vs Indépendants

### 📌 Événements Dépendants
Si deux événements sont **dépendants**, la probabilité de l'un des événements **change** en fonction de la réalisation de l'autre événement. En d'autres termes, la réalisation de \( A \) affecte la probabilité de \( B \).

**Exemple :**  
Si une urne contient **10 billes rouges** et **5 billes bleues**, et si l'on tire une bille, la probabilité de tirer une bille rouge change si on ne remet pas la bille dans l'urne avant de tirer la suivante. Dans ce cas, les événements sont dépendants.

### 📌 Événements Indépendants
Si les événements sont **indépendants**, la probabilité de l'un n'affecte pas la probabilité de l'autre.

**Exemple :**  
Le **lancer d'un dé** et le **tirage d'une carte** dans un paquet sont des événements indépendants. Le résultat du lancer de dé n'a aucune influence sur le résultat du tirage de la carte.

---

## 📝 Exercices

📌 **Exercice 1** :  
On lance **trois pièces** en même temps.  
Soit :
- \( A \) : Obtenir **pile** sur la première pièce.
- \( B \) : Obtenir **face** sur la deuxième pièce.

Vérifier si les événements \( A \) et \( B \) sont indépendants.

📌 **Exercice 2** :  
Une **urne contient 5 billes rouges** et 3 billes bleues.  
Soit :
- \( A \) : Tirer une **bille rouge**.
- \( B \) : Tirer une **bille bleue**.

Sont-ils indépendants ?

📌 **Exercice 3** :  
On lance **deux dés**.  
Soit :
- \( A \) : Obtenir un **nombre pair** sur le premier dé.
- \( B \) : Obtenir un **nombre impair** sur le second dé.

Vérifier si les événements \( A \) et \( B \) sont indépendants.

---

## 🎯 Applications des Événements Indépendants

✔ **Jeux de hasard** 🎰 : Calcul des chances dans les jeux de dés, cartes, ou loteries.  
✔ **Assurances** 📑 : Évaluation des risques indépendants dans différents secteurs.  
✔ **Médecine** 🏥 : Estimation de la probabilité qu'un patient présente deux maladies indépendantes.  
✔ **Finance** 💰 : Évaluation des investissements indépendants et de leurs risques associés.  

---

## 🎉 Conclusion

📌 **Les événements indépendants** n'affectent pas les probabilités des autres événements.  
📌 **Vérification des événements indépendants** : Si \( P(A \cap B) = P(A) \times P(B) \), alors les événements sont indépendants.  
📌 **Les événements dépendants** modifient les probabilités des autres événements lorsqu'ils se produisent.  

📚 **À toi de jouer !** Pratique avec des exercices et deviens un expert des événements indépendants ! 🚀