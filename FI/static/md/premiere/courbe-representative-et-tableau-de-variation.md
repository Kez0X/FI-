# Leçon : Courbe représentative et tableau de variation 🧑‍🏫

## Objectifs 🎯 :
- Savoir tracer la courbe représentative d'une fonction à partir de son expression.
- Savoir déterminer les variations d'une fonction à partir de sa dérivée.
- Construire un tableau de variation de manière précise et complète.


## 1. La courbe représentative d'une fonction 📉

La **courbe représentative** d'une fonction $$ f $$ est l'ensemble des points $$ M(x, f(x)) $$ dans le plan $$ \mathbb{R}^2 $$ . Tracer la courbe de la fonction consiste à déterminer plusieurs points sur la courbe, puis à les relier de manière lisse.

### Étapes pour tracer la courbe d'une fonction :
1. **Déterminer le domaine de définition** de la fonction $$ f $$ : 
   On cherche les valeurs de $$ x $$ pour lesquelles $$ f(x) $$ est défini.
   
2. **Calculer des points spécifiques** : 
   Choisir des valeurs de $$ x $$ (souvent les points d'intersection avec les axes) et calculer $$ f(x) $$ pour ces valeurs. On peut aussi chercher les valeurs de $$ f(x) $$ pour des points importants comme $$ x = 0 $$, $$ x = 1 $$, etc.

3. **Analyser les variations** de la fonction à l'aide de la dérivée pour comprendre les tendances générales de la courbe (croissante, décroissante, maximum, minimum, etc.).

4. **Tracer la courbe** : 
   Après avoir calculé plusieurs points et analysé les variations, on peut tracer la courbe en reliant ces points de manière fluide.


## 2. Le tableau de variation 📊

Le **tableau de variation** est un outil qui permet de résumer de manière claire et concise les variations d'une fonction. Ce tableau présente l'évolution de la fonction sur un intervalle donné en fonction de la dérivée de la fonction. Il indique les intervalles de croissance ou de décroissance ainsi que les valeurs maximales et minimales de la fonction.

### Étapes pour construire un tableau de variation :
1. **Calculer la dérivée** de la fonction $$ f(x) $$ . La dérivée permet de savoir si la fonction est croissante ou décroissante.
   
2. **Trouver les points où $$ f'(x) = 0 $$ ou $$ f'(x) $$ est indéfini**. Ce sont les candidats pour les points d'inflexion, les extremums locaux (maximum ou minimum).

3. **Analyser les signes de la dérivée** :
   - Si $$ f'(x) > 0 $$, la fonction est croissante sur cet intervalle.
   - Si $$ f'(x) < 0 $$, la fonction est décroissante sur cet intervalle.
   - Si $$ f'(x) = 0 $$, cela peut correspondre à un extremum (maximum ou minimum) ou à un point d'inflexion.

4. **Indiquer les variations sur un tableau** : 
   - Découper l'intervalle en sous-intervalles délimités par les points où $$ f'(x) = 0 $$ ou $$ f'(x) $$ est indéfini.
   - Sur chaque sous-intervalle, indiquer si la fonction est croissante ou décroissante en fonction du signe de $$ f'(x) $$.

5. **Compléter le tableau** avec les valeurs aux points particuliers et les comportements limites si nécessaire (comportement en $$ +\infty $$ ou $$ -\infty $$).


## 3. Exemple : Tracer la courbe et le tableau de variation d'une fonction 🧮

Prenons la fonction suivante :

$$
f(x) = x^3 - 6x^2 + 9x
$$

### 3.1. Calcul de la dérivée :
La dérivée de $$ f(x) $$ est :

$$
f'(x) = 3x^2 - 12x + 9
$$

### 3.2. Trouver les points où la dérivée s'annule :

On résout $$ f'(x) = 0 $$ :

$$
3x^2 - 12x + 9 = 0
$$

On divise par 3 :

$$
x^2 - 4x + 3 = 0
$$

Factorisation :

$$
(x - 3)(x - 1) = 0
$$

Les solutions sont $$ x = 1 $$ et $$ x = 3 $$.

### 3.3. Analyser le signe de $$ f'(x) $$ :

- Pour $$ x < 1 $$, $$ f'(x) > 0 $$, donc $$ f(x) $$ est croissante.
- Pour $$ 1 < x < 3 $$, $$ f'(x) < 0 $$, donc $$ f(x) $$ est décroissante.
- Pour $$ x > 3 $$, $$ f'(x) > 0 $$, donc $$ f(x) $$ est croissante.

### 3.4. Identifier les extremums :

- En $$ x = 1 $$, la fonction passe de croissante à décroissante, donc $$ x = 1 $$ est un **maximum local**.
- En $$ x = 3 $$, la fonction passe de décroissante à croissante, donc $$ x = 3 $$ est un **minimum local**.

### 3.5. Calculer les valeurs de la fonction aux points d'intérêt :

- $$ f(1) = 1^3 - 6 \cdot 1^2 + 9 \cdot 1 = 1 - 6 + 9 = 4 $$.
- $$ f(3) = 3^3 - 6 \cdot 3^2 + 9 \cdot 3 = 27 - 54 + 27 = 0 $$.

### 3.6. Tableau de variation :

Voici le tableau de variation complet pour la fonction $$ f(x) = x^3 - 6x^2 + 9x $$.

| Intervalle    | $$ (-\infty, 1) $$ | $$ [1, 3] $$  | $$ (3, +\infty) $$ |
|---------------|-------------------|---------------|-------------------|
| $$ f'(x) $$   | $$ + $$           | $$ - $$       | $$ + $$           |
| $$ f(x) $$    | Croissante        | Décroissante  | Croissante        |
| Valeurs aux bornes | $$ f(1) = 4 $$   | $$ f(3) = 0 $$ |                   |
| Comportement  | Maximum local     | Minimum local |                   |


## 4. Conclusion 🌟

- La **courbe représentative** d'une fonction est tracée en utilisant plusieurs points calculés et en analysant les variations.
- Le **tableau de variation** résume les comportements de la fonction en fonction de sa dérivée : croissante, décroissante, et les points où la fonction atteint un maximum ou un minimum local.
- Le tableau permet aussi de comprendre l'évolution de la fonction sur différents intervalles.


## Devoirs 📑

1. Tracer la courbe représentative de la fonction $$ f(x) = x^2 - 4x + 3 $$ et construire son tableau de variation.
2. Trouver les extremums de la fonction $$ f(x) = x^4 - 8x^2 + 7 $$ et construire son tableau de variation.
3. Lire le chapitre suivant sur les **fonctions trigonométriques**. 📚
