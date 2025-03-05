# Leçon : Probabilités conditionnelles 🔄

## Objectifs 🎯 :
- Comprendre ce que sont les probabilités conditionnelles.
- Savoir calculer une probabilité conditionnelle dans des contextes variés.
- Appliquer les probabilités conditionnelles à des problèmes pratiques.



## 1. Définition des probabilités conditionnelles 📚

Les **probabilités conditionnelles** permettent de calculer la probabilité d'un événement en tenant compte du fait qu'un autre événement est déjà survenu.

La probabilité de l'événement $$ A $$ sachant que l'événement $$ B $$ s'est produit est appelée **probabilité conditionnelle** et est notée $$ P(A \mid B) $$, ce qui se lit "la probabilité de $$ A $$ sachant $$ B $$".

### 1.1. Formule de la probabilité conditionnelle
La probabilité conditionnelle de $$ A $$ sachant $$ B $$ est donnée par la formule :

$$
P(A \mid B) = \frac{P(A \text{ et } B)}{P(B)}
$$

où :
- $$ P(A \text{ et } B) $$ est la probabilité que les événements $$ A $$ et $$ B $$ se produisent simultanément.
- $$ P(B) $$ est la probabilité que l'événement $$ B $$ se produise.

### 1.2. Interprétation
Cette formule nous dit que, si nous savons que l'événement $$ B $$ s'est produit, la probabilité de $$ A $$ est simplement la probabilité que $$ A $$ et $$ B $$ se produisent ensemble, divisée par la probabilité que $$ B $$ se produise.



## 2. Exemple de calcul de probabilité conditionnelle 🎲

### 2.1. Exemple simple
Supposons que nous avons un sac contenant 3 boules rouges et 2 boules bleues. Nous tirons une boule au hasard. Si nous savons que la boule tirée est rouge, quelle est la probabilité qu'elle soit également marquée ?

Soit $$ A $$ l'événement "la boule est marquée" et $$ B $$ l'événement "la boule est rouge". Nous souhaitons calculer $$ P(A \mid B) $$, la probabilité que la boule soit marquée sachant qu'elle est rouge.

La probabilité que la boule soit rouge est :

$$
P(B) = \frac{3}{5}
$$

Supposons que parmi les 3 boules rouges, 2 sont marquées. La probabilité que la boule soit rouge et marquée est :

$$
P(A \text{ et } B) = \frac{2}{5}
$$

Ainsi, la probabilité conditionnelle est donnée par :

$$
P(A \mid B) = \frac{P(A \text{ et } B)}{P(B)} = \frac{\frac{2}{5}}{\frac{3}{5}} = \frac{2}{3}
$$

Donc, la probabilité que la boule soit marquée sachant qu'elle est rouge est de $$ \frac{2}{3} $$.



## 3. Règle de multiplication des probabilités conditionnelles ✖️

La règle de multiplication permet de calculer la probabilité de la conjonction de deux événements $$ A $$ et $$ B $$ en utilisant les probabilités conditionnelles :

$$
P(A \text{ et } B) = P(A \mid B) \cdot P(B) = P(B \mid A) \cdot P(A)
$$

Cela signifie que la probabilité que $$ A $$ et $$ B $$ se produisent simultanément peut être calculée en multipliant la probabilité conditionnelle de $$ A $$ sachant $$ B $$ par la probabilité de $$ B $$, ou bien en multipliant la probabilité conditionnelle de $$ B $$ sachant $$ A $$ par la probabilité de $$ A $$.

### 3.1. Exemple de la règle de multiplication
Reprenons l'exemple précédent avec les boules rouges et marquées. Nous avons déjà trouvé que :

$$
P(A \mid B) = \frac{2}{3} \quad \text{et} \quad P(B) = \frac{3}{5}
$$

La probabilité de $$ A \text{ et } B $$ est donc :

$$
P(A \text{ et } B) = P(A \mid B) \cdot P(B) = \frac{2}{3} \cdot \frac{3}{5} = \frac{2}{5}
$$



## 4. Loi des probabilités totales 🧮

La **loi des probabilités totales** est un outil très utile lorsqu'on peut décomposer un espace d'événements en sous-événements disjoints. Elle permet de calculer la probabilité d'un événement $$ A $$ en fonction des probabilités conditionnelles par rapport à une partition de l'univers.

La loi des probabilités totales s'écrit comme suit :

$$
P(A) = \sum_{i} P(A \mid B_i) \cdot P(B_i)
$$

où $$ B_1, B_2, \dots $$ sont des événements disjoints qui forment une partition de l'univers (c'est-à-dire qu'ils couvrent tous les événements possibles).

### 4.1. Exemple de la loi des probabilités totales
Imaginons qu'un étudiant puisse réussir un examen en fonction de deux stratégies d'étude : étudier seul ($$ B_1 $$) ou en groupe ($$ B_2 $$). Soit $$ A $$ l'événement "l'étudiant réussit l'examen".

La probabilité que l'étudiant réussisse l'examen peut être calculée par la loi des probabilités totales :

$$
P(A) = P(A \mid B_1) \cdot P(B_1) + P(A \mid B_2) \cdot P(B_2)
$$

Supposons que :
- $$ P(A \mid B_1) = 0.7 $$ (probabilité de réussir en étudiant seul),
- $$ P(A \mid B_2) = 0.9 $$ (probabilité de réussir en étudiant en groupe),
- $$ P(B_1) = 0.6 $$ (probabilité d'étudier seul),
- $$ P(B_2) = 0.4 $$ (probabilité d'étudier en groupe).

La probabilité que l'étudiant réussisse l'examen est donc :

$$
P(A) = 0.7 \cdot 0.6 + 0.9 \cdot 0.4 = 0.42 + 0.36 = 0.78
$$



## 5. Probabilité conditionnelle avec les variables aléatoires continues 📈

Pour les variables aléatoires continues, les probabilités conditionnelles sont basées sur des fonctions de densité. La probabilité conditionnelle de $$ X $$ sachant $$ Y $$ est donnée par :

$$
f_{X \mid Y}(x \mid y) = \frac{f_{X,Y}(x, y)}{f_Y(y)}
$$

où :
- $$ f_{X,Y}(x, y) $$ est la fonction de densité conjointe de $$ X $$ et $$ Y $$.
- $$ f_Y(y) $$ est la fonction de densité marginale de $$ Y $$.



## 6. Applications des probabilités conditionnelles 🌍

Les probabilités conditionnelles sont utilisées dans une variété de domaines, comme les prévisions météorologiques, les modèles économiques, les études de fiabilité, etc. Elles sont particulièrement utiles pour comprendre les relations entre différents événements et pour prédire des résultats sous certaines conditions.



## 7. Conclusion 🌟

Les probabilités conditionnelles jouent un rôle central dans la théorie des probabilités. Elles permettent de calculer des probabilités dans des situations où des informations supplémentaires sont disponibles. En maîtrisant les concepts de probabilité conditionnelle, de règle de multiplication et de loi des probabilités totales, on peut résoudre une grande variété de problèmes en probabilités.



## Devoirs 📑

1. Calculer la probabilité de tirer une boule rouge d'un sac de 5 boules, dont 2 sont rouges et 3 sont vertes, sachant que la boule est de taille grande (un événement conditionnel).
2. Appliquer la règle de multiplication pour résoudre un problème où les probabilités de deux événements sont données.
3. Résoudre un problème en utilisant la loi des probabilités totales en fonction de plusieurs stratégies d'étude.
4. Calculer une probabilité conditionnelle pour des variables aléatoires continues, en utilisant une fonction de densité conjointe donnée.



