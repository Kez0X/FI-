# Matrices et Systèmes Linéaires 🧮

## 1. Introduction
Les **matrices** sont des tableaux de nombres qui permettent de représenter des **systèmes d'équations linéaires** et d'effectuer des transformations en algèbre linéaire. Elles sont essentielles en mathématiques et en physique.

## 2. Définitions et Notations
### a) Matrice
Une **matrice** de taille $$ m \times n $$ est un tableau de $$ m $$ lignes et $$ n $$ colonnes :
$$ A = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix} $$

- $$ a_{ij} $$ est l'élément à la ligne $$ i $$ et colonne $$ j $$.
- $$ \mathcal{M}_{m,n}(\mathbb{R}) $$ désigne l'ensemble des matrices réelles de taille $$ m \times n $$.

### b) Matrices particulières
- **Matrice carrée** : $$ m = n $$.
- **Matrice colonne** : $$ n = 1 $$ (vecteur colonne).
- **Matrice ligne** : $$ m = 1 $$ (vecteur ligne).
- **Matrice diagonale** : $$ a_{ij} = 0 $$ pour $$ i \neq j $$.
- **Matrice identité** $$ I_n $$ : matrice diagonale avec $$ 1 $$ sur la diagonale.

## 3. Opérations sur les Matrices
### a) Addition et Multiplication par un Scalaire
- $$ A + B = (a_{ij} + b_{ij}) $$
- $$ \lambda A = (\lambda a_{ij}) $$

### b) Produit de Matrices
Le produit $$ AB $$ est défini si le nombre de colonnes de $$ A $$ est égal au nombre de lignes de $$ B $$.
$$ (AB)_{ij} = \sum_{k=1}^{p} a_{ik} b_{kj} $$

Exemple :
$$ \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \times \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} (1\times5 + 2\times7) & (1\times6 + 2\times8) \\ (3\times5 + 4\times7) & (3\times6 + 4\times8) \end{bmatrix} $$

### c) Transposée d'une Matrice
La **transposée** de $$ A $$ est obtenue en échangeant les lignes et les colonnes :
$$ (A^T)_{ij} = A_{ji} $$

Exemple :
$$ \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix} $$

## 4. Déterminant et Inverse d'une Matrice
### a) Déterminant d'une Matrice Carrée
Pour une matrice $$ 2 \times 2 $$ :
$$ \det(A) = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc $$

Pour une matrice $$ 3 \times 3 $$ :
$$ \det(A) = a_{11} \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12} \begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13} \begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix} $$

### b) Matrice Inverse
Une matrice $$ A $$ est **inversible** si et seulement si $$ \det(A) \neq 0 $$.
L’inverse est définie par :
$$ A^{-1} = \frac{1}{\det(A)} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} $$ pour $$ A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} $$

## 5. Systèmes Linéaires et Matrices
Un **système d'équations linéaires** peut s'écrire sous forme matricielle :
$$ AX = B $$
avec :
- $$ A $$ la matrice des coefficients,
- $$ X $$ le vecteur des inconnues,
- $$ B $$ le vecteur des constantes.

### a) Résolution avec l'Inverse
Si $$ A $$ est inversible, alors la solution est :
$$ X = A^{-1} B $$

### b) Méthode de Gauss
La méthode du **pivot de Gauss** permet de résoudre un système en transformant la matrice augmentée :
$$ [A | B] $$ en une forme échelonnée.

Exemple :
Résolvons :
$$ \begin{cases} x + 2y = 3 \\ 3x + 4y = 7 \end{cases} $$
Sous forme matricielle :
$$ \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \times \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 \\ 7 \end{bmatrix} $$
On applique Gauss pour obtenir :
$$ \begin{bmatrix} 1 & 2 \\ 0 & -2 \end{bmatrix} $$ puis on remonte pour trouver $$ x $$ et $$ y $$.

## 6. Exercices 📌
1. Calculer le produit :
$$ \begin{bmatrix} 2 & -1 \\ 3 & 4 \end{bmatrix} \times \begin{bmatrix} 5 & 2 \\ -3 & 1 \end{bmatrix} $$
2. Trouver l'inverse de :
$$ \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix} $$
3. Résoudre le système :
$$ \begin{cases} x + y + z = 6 \\ 2x - y + 3z = 14 \\ -x + 2y - z = -2 \end{cases} $$

Bonne étude ! 🚀

