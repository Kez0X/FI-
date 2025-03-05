# Réduction des Endomorphismes 🧮

## 1. Introduction
La **réduction des endomorphismes** est une technique permettant de simplifier l’étude d’une application linéaire en trouvant une base dans laquelle sa représentation matricielle est aussi simple que possible. L’objectif est souvent d'obtenir une forme diagonale ou une forme de Jordan.

## 2. Valeurs Propres et Vecteurs Propres
Un **vecteur propre** $$ v $$ d'un endomorphisme $$ f $$ de $$ E $$ est un vecteur non nul tel que :
$$ f(v) = \lambda v $$
avec $$ \lambda $$ une **valeur propre** de $$ f $$.

### a) Calcul des Valeurs Propres
Les valeurs propres de $$ f $$ sont les solutions de l’équation caractéristique :
$$ \det(A - \lambda I) = 0 $$
ou $$ A $$ est la matrice de $$ f $$ dans une base donnée.

### b) Calcul des Vecteurs Propres
Les vecteurs propres sont les solutions du système :
$$ (A - \lambda I)X = 0 $$

## 3. Diagonalisation
Un endomorphisme $$ f $$ est **diagonalisable** s'il existe une base de $$ E $$ formée de vecteurs propres. Cela signifie que sa matrice dans cette base est diagonale.

### a) Condition de Diagonalisation
L’endomorphisme est diagonalisable si et seulement si la somme des dimensions des espaces propres est égale à la dimension de l’espace vectoriel $$ E $$.

### b) Matrice Diagonale
Si $$ f $$ est diagonalisable, alors il existe une matrice de passage $$ P $$ telle que :
$$ P^{-1} A P = D $$
où $$ D $$ est une matrice diagonale contenant les valeurs propres.

## 4. Forme de Jordan
Si $$ f $$ n'est pas diagonalisable, on cherche sa **forme de Jordan**, une forme simplifiée par blocs :
$$ J = \begin{bmatrix} J_1 & 0 & \dots & 0 \\ 0 & J_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & J_k \end{bmatrix} $$
où chaque $$ J_i $$ est une **matrice de Jordan** associée à une valeur propre.

## 5. Exercices 📌
1. Trouver les valeurs propres et vecteurs propres de :
   $$ A = \begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix} $$
2. Déterminer si la matrice suivante est diagonalisable :
   $$ B = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} $$
3. Trouver la forme de Jordan de :
   $$ C = \begin{bmatrix} 3 & 1 & 0 \\ 0 & 3 & 1 \\ 0 & 0 & 3 \end{bmatrix} $$

Bonne étude ! 🚀