# Leçon : Variables aléatoires réelles 🎲

## Objectifs 🎯 :
- Comprendre ce qu'est une variable aléatoire réelle.
- Savoir comment calculer l'espérance, la variance et l'écart-type d'une variable aléatoire.
- Appliquer les propriétés fondamentales des variables aléatoires réelles dans des exercices.



## 1. Définition d'une variable aléatoire réelle 🧮

Une **variable aléatoire réelle** est une fonction qui associe un nombre réel à chaque événement d'un espace probabilisé. En d'autres termes, une variable aléatoire est une fonction qui dépend d'un phénomène aléatoire et prend des valeurs réelles.

### 1.1. Exemple :
Soit $$ X $$ une variable aléatoire qui représente le résultat d'un lancer de dé. Si $$ X $$ prend les valeurs de 1 à 6, alors $$ X $$ est une variable aléatoire réelle.

### 1.2. Notation :
On note généralement une variable aléatoire par une lettre majuscule, comme $$ X $$ ou $$ Y $$, et ses réalisations (c'est-à-dire les valeurs que peut prendre la variable aléatoire) par une lettre minuscule, comme $$ x $$ ou $$ y $$.



## 2. Fonction de répartition d'une variable aléatoire 🎯

La **fonction de répartition** d'une variable aléatoire réelle $$ X $$, notée $$ F_X(x) $$, est la fonction qui donne la probabilité que la variable aléatoire $$ X $$ prenne une valeur inférieure ou égale à $$ x $$ :

$$
F_X(x) = P(X \leq x)
$$

Cette fonction est croissante et prend des valeurs entre 0 et 1.

### 2.1. Propriétés de la fonction de répartition :
- $$ \lim_{x \to -\infty} F_X(x) = 0 $$.
- $$ \lim_{x \to +\infty} F_X(x) = 1 $$.
- La fonction est continue à droite.



## 3. Loi de probabilité d'une variable aléatoire discrète 📊

Si la variable aléatoire $$ X $$ prend un nombre fini ou dénombrable de valeurs, on parle de **variable aléatoire discrète**. Dans ce cas, la probabilité que $$ X $$ prenne une valeur $$ x_i $$ est notée $$ P(X = x_i) $$, et l'ensemble des probabilités des différentes valeurs prises par $$ X $$ forme une loi de probabilité.

### 3.1. Exemple de loi discrète :
Soit $$ X $$ une variable aléatoire représentant le résultat d'un lancer de dé. La loi de probabilité associée à $$ X $$ est :

$$
P(X = 1) = P(X = 2) = P(X = 3) = P(X = 4) = P(X = 5) = P(X = 6) = \frac{1}{6}
$$

C'est une loi uniforme discrète, où chaque valeur a la même probabilité d'être obtenue.



## 4. Espérance d'une variable aléatoire 🎲

L'**espérance** d'une variable aléatoire réelle $$ X $$ est la moyenne pondérée de toutes les valeurs possibles que peut prendre $$ X $$, pondérée par leurs probabilités respectives. L'espérance est notée $$ E(X) $$ et se calcule de la manière suivante :

### 4.1. Variable aléatoire discrète :
Si $$ X $$ est une variable aléatoire discrète, alors l'espérance est donnée par :

$$
E(X) = \sum_{i} x_i \cdot P(X = x_i)
$$

### 4.2. Exemple :
Soit $$ X $$ une variable aléatoire représentant le résultat d'un lancer de dé. L'espérance de $$ X $$ est calculée ainsi :

$$
E(X) = 1 \cdot P(X = 1) + 2 \cdot P(X = 2) + 3 \cdot P(X = 3) + 4 \cdot P(X = 4) + 5 \cdot P(X = 5) + 6 \cdot P(X = 6)
$$

Comme chaque probabilité est égale à $$ \frac{1}{6} $$, on obtient :

$$
E(X) = \frac{1}{6} \cdot (1 + 2 + 3 + 4 + 5 + 6) = \frac{1}{6} \cdot 21 = 3.5
$$



## 5. Variance et écart-type d'une variable aléatoire 📏

La **variance** mesure la dispersion des valeurs de la variable aléatoire par rapport à son espérance. L'**écart-type** est la racine carrée de la variance et donne une idée de l'écart moyen par rapport à l'espérance.

### 5.1. Calcul de la variance :
La variance d'une variable aléatoire réelle $$ X $$ est donnée par :

$$
\text{Var}(X) = E(X^2) - \left(E(X)\right)^2
$$

### 5.2. Calcul de l'écart-type :
L'écart-type est la racine carrée de la variance :

$$
\sigma(X) = \sqrt{\text{Var}(X)}
$$

### 5.3. Exemple de calcul de variance et d'écart-type :
Reprenons l'exemple du lancer de dé. On a déjà calculé l'espérance $$ E(X) = 3.5 $$.

Pour calculer la variance, on commence par calculer $$ E(X^2) $$ :

$$
E(X^2) = 1^2 \cdot P(X = 1) + 2^2 \cdot P(X = 2) + 3^2 \cdot P(X = 3) + 4^2 \cdot P(X = 4) + 5^2 \cdot P(X = 5) + 6^2 \cdot P(X = 6)
$$

$$
E(X^2) = \frac{1}{6} \cdot (1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2) = \frac{1}{6} \cdot (1 + 4 + 9 + 16 + 25 + 36) = \frac{91}{6}
$$

Ensuite, on calcule la variance :

$$
\text{Var}(X) = E(X^2) - (E(X))^2 = \frac{91}{6} - (3.5)^2 = \frac{91}{6} - 12.25 = 2.9167
$$

Finalement, l'écart-type est :

$$
\sigma(X) = \sqrt{2.9167} \approx 1.71
$$



## 6. Variables aléatoires continues 📈

Une **variable aléatoire continue** est une variable qui peut prendre une infinité de valeurs dans un intervalle donné. L'espérance et la variance sont définies de manière similaire à celles des variables discrètes, mais l'intégration est utilisée au lieu de la somme discrète.

### 6.1. Fonction de densité
Une variable aléatoire continue est associée à une **fonction de densité de probabilité** $$ f_X(x) $$ qui satisfait les conditions suivantes :
- $$ f_X(x) \geq 0 $$ pour tout $$ x $$.
- $$ \int_{-\infty}^{\infty} f_X(x) dx = 1 $$ (la probabilité totale est égale à 1).

L'espérance d'une variable aléatoire continue est donnée par :

$$
E(X) = \int_{-\infty}^{\infty} x \cdot f_X(x) dx
$$



## 7. Conclusion 🌟

Les variables aléatoires réelles sont au cœur de la théorie des probabilités. Elles permettent de modéliser des phénomènes incertains et de calculer des grandeurs importantes telles que l'espérance, la variance et l'écart-type, qui nous renseignent sur la tendance centrale et la dispersion des valeurs d'une variable.

Les variables aléatoires peuvent être discrètes ou continues, et leur étude repose sur des outils mathématiques solides comme les fonctions de répartition, les fonctions de densité et les intégrales.



## Devoirs 📑

1. Calculer l'espérance, la variance et l'écart-type pour une variable aléatoire ayant la loi suivante : $$ P(X = 1) = 0.2, P(X = 2) = 0.5, P(X = 3) = 0.3 $$.
2. Trouver l'espérance d'une variable aléatoire continue ayant la fonction de densité $$ f_X(x) = \frac{1}{2} \quad \text{pour} \quad 0 \leq x \leq 2 $$.
3. Résoudre un exercice pratique sur les variables aléatoires réelles en utilisant les formules et définitions vues en cours.



