# Leçon : Indépendance des variables aléatoires 🔄

## Objectifs 🎯 :
- Comprendre la notion d'indépendance entre deux variables aléatoires.
- Apprendre à déterminer si deux variables aléatoires sont indépendantes.
- Savoir utiliser l'indépendance dans les calculs de probabilités.



## 1. Définition de l'indépendance des variables aléatoires 🔍

Deux variables aléatoires $$ X $$ et $$ Y $$ sont dites **indépendantes** si la réalisation de l'une n'influence en rien la réalisation de l'autre. Autrement dit, la probabilité de réaliser une certaine combinaison de valeurs pour $$ X $$ et $$ Y $$ est simplement le produit des probabilités de réaliser ces valeurs séparément.

### 1.1. Formulation de l'indépendance
Deux variables aléatoires $$ X $$ et $$ Y $$ sont indépendantes si et seulement si, pour toutes les valeurs possibles $$ x $$ et $$ y $$ que peuvent prendre $$ X $$ et $$ Y $$, on a la relation suivante :

$$
P(X = x \text{ et } Y = y) = P(X = x) \cdot P(Y = y)
$$

Cela signifie que la probabilité que $$ X $$ prenne la valeur $$ x $$ et que $$ Y $$ prenne la valeur $$ y $$ simultanément est égale au produit des probabilités individuelles de $$ X = x $$ et $$ Y = y $$.

### 1.2. Indépendance conditionnelle
On dit que deux variables aléatoires $$ X $$ et $$ Y $$ sont indépendantes **conditionnellement** à une troisième variable $$ Z $$ si :

$$
P(X = x \text{ et } Y = y \mid Z = z) = P(X = x \mid Z = z) \cdot P(Y = y \mid Z = z)
$$

Cela signifie que, sachant que $$ Z $$ a pris une certaine valeur, l'indépendance de $$ X $$ et $$ Y $$ est préservée.



## 2. Vérification de l'indépendance des variables aléatoires 📊

### 2.1. Pour des variables aléatoires discrètes
Si $$ X $$ et $$ Y $$ sont discrètes, on vérifie l'indépendance en comparant la probabilité conjointe des deux variables avec le produit des probabilités individuelles. Autrement dit, on vérifie si la condition suivante est satisfaite pour toutes les valeurs possibles de $$ X $$ et $$ Y $$ :

$$
P(X = x \text{ et } Y = y) = P(X = x) \cdot P(Y = y)
$$

### 2.2. Exemple d'indépendance discrète
Soit $$ X $$ une variable aléatoire représentant le résultat d'un lancer de dé (avec $$ P(X = 1) = P(X = 2) = \dots = P(X = 6) = \frac{1}{6} $$), et soit $$ Y $$ une autre variable aléatoire représentant le résultat d'un lancer d'une pièce (avec $$ P(Y = 0) = P(Y = 1) = \frac{1}{2} $$).

On vérifie l'indépendance de $$ X $$ et $$ Y $$ en comparant la probabilité conjointe avec le produit des probabilités :

$$
P(X = x \text{ et } Y = y) = P(X = x) \cdot P(Y = y)
$$

Par exemple, si $$ X = 1 $$ et $$ Y = 0 $$ :

$$
P(X = 1 \text{ et } Y = 0) = \frac{1}{6} \cdot \frac{1}{2} = \frac{1}{12}
$$

Si cette égalité est vérifiée pour toutes les valeurs possibles de $$ X $$ et $$ Y $$, alors $$ X $$ et $$ Y $$ sont indépendantes.

### 2.3. Pour des variables aléatoires continues
Si $$ X $$ et $$ Y $$ sont continues, on vérifie l'indépendance en utilisant les densités de probabilité respectives. Les variables sont indépendantes si et seulement si la fonction de densité conjointe de $$ X $$ et $$ Y $$ peut être factorisée sous la forme du produit des fonctions de densité individuelles :

$$
f_{X,Y}(x, y) = f_X(x) \cdot f_Y(y)
$$



## 3. Propriétés de l'indépendance ✨

### 3.1. L'indépendance implique des relations sur les moments
Si $$ X $$ et $$ Y $$ sont indépendantes, on peut exprimer leur espérance conjointe de la manière suivante :

$$
E(XY) = E(X) \cdot E(Y)
$$

De même, pour les variances, on a :

$$
\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)
$$

Cela découle du fait que l'indépendance permet de décomposer les moments d'ordre supérieur en produits de moments individuels.

### 3.2. Indépendance et probabilité conditionnelle
Si $$ X $$ et $$ Y $$ sont indépendantes, cela signifie que la connaissance de $$ X $$ n'apporte aucune information supplémentaire sur $$ Y $$, et vice versa. Par conséquent, on a :

$$
P(Y = y \mid X = x) = P(Y = y)
$$

Cela vaut aussi bien pour les variables discrètes que continues.



## 4. Applications de l'indépendance 🧑‍🏫

### 4.1. Exemple pratique : Lancer d'un dé et d'une pièce
Considérons un jeu où un dé est lancé et une pièce est lancée. Soit $$ X $$ la variable aléatoire représentant le résultat du lancer de dé ($$ X \in \{1, 2, 3, 4, 5, 6\} $$), et soit $$ Y $$ la variable aléatoire représentant le résultat du lancer de la pièce ($$ Y \in \{0, 1\} $$, où $$ 0 $$ représente pile et $$ 1 $$ représente face).

On suppose que les deux événements sont indépendants. Ainsi, la probabilité de l'événement $$ (X = 3 \text{ et } Y = 1) $$ est donnée par :

$$
P(X = 3 \text{ et } Y = 1) = P(X = 3) \cdot P(Y = 1) = \frac{1}{6} \cdot \frac{1}{2} = \frac{1}{12}
$$

### 4.2. Exemple d'indépendance conditionnelle
Supposons qu'une variable aléatoire $$ X $$ représente la température dans une ville et une variable aléatoire $$ Y $$ représente la probabilité de pluie. Si on connaît les prévisions météorologiques pour un jour donné, alors les événements relatifs à $$ X $$ et $$ Y $$ peuvent être considérés comme indépendants conditionnellement à ces prévisions.



## 5. Conclusion 🌟

L'indépendance des variables aléatoires est une notion fondamentale en théorie des probabilités. Elle simplifie grandement les calculs de probabilités, car elle permet de factoriser les probabilités conjointes. Comprendre et identifier des variables indépendantes est crucial dans de nombreux domaines, comme les statistiques, l'économie, et les sciences sociales.

L'indépendance conditionnelle permet également de traiter des situations complexes où les événements sont indépendants sous certaines conditions.



## Devoirs 📑

1. Vérifier si deux variables aléatoires discrètes $$ X $$ et $$ Y $$, avec les lois de probabilité suivantes, sont indépendantes :
   - $$ P(X = 1) = 0.3, P(X = 2) = 0.7 $$.
   - $$ P(Y = 1) = 0.4, P(Y = 2) = 0.6 $$.
   - $$ P(X = 1 \text{ et } Y = 1) = 0.12, P(X = 2 \text{ et } Y = 2) = 0.42 $$.

2. Montrer que deux variables aléatoires indépendantes respectent la propriété $$ E(XY) = E(X) \cdot E(Y) $$.

3. Résoudre un problème dans lequel on doit déterminer si deux événements sont indépendants dans un contexte de probabilité conditionnelle.



