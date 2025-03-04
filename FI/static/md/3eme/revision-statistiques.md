# 📚 Révision : Statistiques

## 🧐 Introduction

Les **statistiques** sont un domaine des mathématiques qui s'intéresse à la collecte, l'analyse, l'interprétation et la présentation des données. Elles sont largement utilisées dans de nombreux domaines comme l'économie, les sciences sociales, les sciences naturelles, et bien d'autres. 

Dans cette leçon, nous allons revoir les concepts essentiels des statistiques, notamment la **moyenne**, l'**écart-type**, la **médiane**, la **variance**, et les **représentations graphiques** des données.

---

## 1️⃣ 📊 Les Données Statistiques

Les **données statistiques** peuvent être regroupées de différentes manières. Elles peuvent être :
- **Quantitatives** : Données numériques (ex. : âge, taille, revenu, etc.)
- **Qualitatives** : Données non numériques (ex. : couleur des yeux, type de voiture, etc.)

### 📌 Exemple :
- **Quantitative** : Les résultats des élèves à un examen.
- **Qualitative** : Les réponses à une enquête sur les couleurs préférées.

Les données peuvent aussi être organisées sous forme de :
- **Tableaux de fréquences** : Pour résumer les données sous forme de classes et de fréquences.
- **Diagrammes** : Comme les diagrammes en bâtons, les histogrammes, ou les diagrammes circulaires.

---

## 2️⃣ 🧮 La Moyenne

La **moyenne** est la mesure de tendance centrale la plus courante. Elle représente la valeur moyenne de toutes les données d'un ensemble.

### 📌 Formule de la Moyenne :

Soit \( x_1, x_2, \dots, x_n \) un ensemble de données, la **moyenne** \( \bar{x} \) est donnée par :

$$ \bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n} $$

Où :
- \( x_1, x_2, \dots, x_n \) sont les valeurs des données.
- \( n \) est le nombre total de données.

### 📌 Exemple :
Les notes suivantes ont été obtenues à un examen : 12, 15, 17, 10, 14.

La moyenne des notes est :

$$ \bar{x} = \frac{12 + 15 + 17 + 10 + 14}{5} = \frac{68}{5} = 13,6 $$

Donc, la moyenne des notes est **13,6**.

---

## 3️⃣ 📏 L'Écart-Type

L'**écart-type** est une mesure qui permet de connaître la dispersion des données autour de la moyenne. Plus l'écart-type est élevé, plus les données sont dispersées. 

### 📌 Formule de l'Écart-Type :

L'**écart-type** \( \sigma \) d'un ensemble de données \( x_1, x_2, \dots, x_n \) est donné par :

$$ \sigma = \sqrt{\frac{(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + \dots + (x_n - \bar{x})^2}{n}} $$

Où :
- \( x_1, x_2, \dots, x_n \) sont les valeurs des données.
- \( \bar{x} \) est la moyenne des données.
- \( n \) est le nombre total de données.

### 📌 Exemple :

Prenons les notes suivantes : 12, 15, 17, 10, 14. Nous avons déjà calculé la moyenne qui est \( 13,6 \).

Calculons l'écart-type :

1. Calcul des différences par rapport à la moyenne :
   - \( (12 - 13,6) = -1,6 \)
   - \( (15 - 13,6) = 1,4 \)
   - \( (17 - 13,6) = 3,4 \)
   - \( (10 - 13,6) = -3,6 \)
   - \( (14 - 13,6) = 0,4 \)

2. Calcul des carrés des différences :
   - \( (-1,6)^2 = 2,56 \)
   - \( (1,4)^2 = 1,96 \)
   - \( (3,4)^2 = 11,56 \)
   - \( (-3,6)^2 = 12,96 \)
   - \( (0,4)^2 = 0,16 \)

3. Moyenne des carrés des différences :
   $$ \frac{2,56 + 1,96 + 11,56 + 12,96 + 0,16}{5} = \frac{29,2}{5} = 5,84 $$

4. Racine carrée de la moyenne des carrés des différences :
   $$ \sigma = \sqrt{5,84} \approx 2,42 $$

Donc, l'écart-type des notes est environ **2,42**.

---

## 4️⃣ 📊 La Médiane

La **médiane** est la valeur qui sépare les données en deux parties égales : 50 % des valeurs sont inférieures à la médiane, et 50 % sont supérieures. 

### 📌 Calcul de la Médiane :

1. **Trier les données** par ordre croissant.
2. Si le nombre de données est impair, la médiane est la valeur du milieu.
3. Si le nombre de données est pair, la médiane est la moyenne des deux valeurs du milieu.

### 📌 Exemple :

Prenons les données suivantes : 12, 15, 17, 10, 14. Après les avoir triées : 10, 12, 14, 15, 17.

La médiane est la valeur du milieu, ici **14**.

---

## 5️⃣ 📐 La Variance

La **variance** est le carré de l'écart-type et mesure également la dispersion des données. Elle permet de quantifier la variabilité d'un ensemble de données.

### 📌 Formule de la Variance :

La **variance** \( \sigma^2 \) est donnée par :

$$ \sigma^2 = \frac{(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + \dots + (x_n - \bar{x})^2}{n} $$

### 📌 Exemple :

Nous avons déjà calculé les carrés des différences dans l'exemple de l'écart-type. La variance est donc :

$$ \sigma^2 = \frac{2,56 + 1,96 + 11,56 + 12,96 + 0,16}{5} = 5,84 $$

La variance est donc **5,84**.

---

## 6️⃣ 📝 Exercices

### 📌 Exercice 1 : Moyenne
Voici les notes d'un groupe d'élèves : 10, 12, 14, 16, 18. Calcule la moyenne des notes.

### 📌 Exercice 2 : Écart-type
Les notes suivantes ont été obtenues à un examen : 8, 12, 14, 18, 20. Calcule l'écart-type de ces notes.

### 📌 Exercice 3 : Médiane
Les âges des participants à un concours sont les suivants : 22, 26, 20, 30, 25. Trouve la médiane.

### 📌 Exercice 4 : Variance
Les distances parcourues par des voitures lors d'un test sont : 120, 150, 130, 160, 140. Calcule la variance des distances.

---

## 🎯 Conclusion

📌 **La moyenne** permet de donner une idée générale de la tendance centrale des données.  
📌 **L'écart-type** mesure la dispersion des données autour de la moyenne.  
📌 **La médiane** sépare les données en deux parties égales.  
📌 **La variance** est une autre mesure de la dispersion des données, équivalente au carré de l'écart-type.

🎯 Les statistiques sont essentielles pour analyser et interpréter des ensembles de données, que ce soit dans des études scientifiques, des enquêtes, ou des situations quotidiennes.  
Pratiquez les exercices pour mieux maîtriser ces concepts !
