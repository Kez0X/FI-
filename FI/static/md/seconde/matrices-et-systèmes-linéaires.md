


# 🧑‍🏫 Matrices et Systèmes Linéaires

Les **matrices** sont des objets mathématiques très puissants, utilisés notamment pour résoudre des systèmes d'équations linéaires. Elles permettent de représenter et de manipuler des systèmes complexes de manière compacte et efficace. 💡



## 🔹 Qu'est-ce qu'une Matrice ?

Une **matrice** est un tableau rectangulaire de nombres disposés en lignes et en colonnes. On représente une matrice par une lettre majuscule (par exemple $$A$$) et on note son **ordre** par $$m \times n$$, où $$m$$ est le nombre de lignes et $$n$$ le nombre de colonnes.

### Exemple de matrice :
$$
A = \begin{pmatrix}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
    7 & 8 & 9
\end{pmatrix}
$$

Ici, $$A$$ est une matrice de taille $$3 \times 3$$ (3 lignes et 3 colonnes).



## 🔹 Opérations sur les Matrices

Les matrices peuvent être manipulées à l’aide de plusieurs opérations. Voici les principales :

### 1. **Addition de matrices**

Deux matrices peuvent être ajoutées si elles ont la même taille. L'addition se fait en additionnant les éléments correspondants.

Si :
$$ A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix} \quad \text{et} \quad B = \begin{pmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22}
\end{pmatrix} $$

Alors :
$$ A + B = \begin{pmatrix}
a_{11} + b_{11} & a_{12} + b_{12} \\
a_{21} + b_{21} & a_{22} + b_{22}
\end{pmatrix} $$

### 2. **Multiplication par un scalaire**

On peut multiplier une matrice par un nombre (scalaire) en multipliant chaque élément de la matrice par ce nombre.

Si :
$$ A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix} $$

et $$ \lambda $$ est un scalaire, alors :
$$ \lambda \cdot A = \begin{pmatrix}
\lambda \cdot a_{11} & \lambda \cdot a_{12} \\
\lambda \cdot a_{21} & \lambda \cdot a_{22}
\end{pmatrix} $$

### 3. **Multiplication de matrices**

La multiplication de deux matrices est plus complexe. Les matrices doivent avoir des dimensions compatibles : le nombre de colonnes de la première matrice doit être égal au nombre de lignes de la deuxième matrice.

Si :
$$ A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix} \quad \text{et} \quad B = \begin{pmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22}
\end{pmatrix} $$

Alors :
$$ A \cdot B = \begin{pmatrix}
a_{11} \cdot b_{11} + a_{12} \cdot b_{21} & a_{11} \cdot b_{12} + a_{12} \cdot b_{22} \\
a_{21} \cdot b_{11} + a_{22} \cdot b_{21} & a_{21} \cdot b_{12} + a_{22} \cdot b_{22}
\end{pmatrix} $$



## 🔹 Systèmes Linéaires

Un **système linéaire** est un ensemble d'équations linéaires, c'est-à-dire des équations de la forme :

$$ a_1x_1 + a_2x_2 + \dots + a_nx_n = b $$

Les systèmes linéaires peuvent être représentés de manière compacte à l’aide de **matrices**. Par exemple, le système suivant :

$$
\begin{aligned}
2x + 3y &= 5 \\
4x + 5y &= 6
\end{aligned}
$$

Peut être écrit sous la forme matricielle :

$$
\begin{pmatrix}
2 & 3 \\
4 & 5
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
5 \\
6
\end{pmatrix}
$$



## 🔹 Résolution de Systèmes Linéaires

Les systèmes linéaires peuvent être résolus de différentes manières. Voici deux des méthodes les plus courantes :

### 1. **Méthode de substitution**

Cette méthode consiste à résoudre l’une des équations par rapport à une variable, puis à substituer cette expression dans l’autre équation.

### 2. **Méthode de la matrice inverse**

Si le système est écrit sous forme matricielle $$ A \cdot X = B $$, où $$A$$ est la matrice des coefficients, $$X$$ est le vecteur des inconnues et $$B$$ est le vecteur des résultats, on peut résoudre ce système en multipliant les deux côtés de l’équation par l’inverse de la matrice $$A$$ :

$$
X = A^{-1} \cdot B
$$

### 3. **Méthode de Cramer**

La méthode de Cramer permet de résoudre un système de **n** équations linéaires à **n** inconnues, à condition que la matrice des coefficients soit inversible. On utilise les déterminants pour calculer les valeurs des inconnues.



## 🔹 Exemple de Résolution

Prenons le système suivant :

$$
\begin{aligned}
x + y &= 3 \\
2x - y &= 1
\end{aligned}
$$

1. **Écriture matricielle** :
$$
\begin{pmatrix}
1 & 1 \\
2 & -1
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
3 \\
1
\end{pmatrix}
$$

2. **Inversion de la matrice** (si possible) ou utiliser une autre méthode pour trouver les valeurs de $$x$$ et $$y$$.



## 🔹 Applications des Matrices et Systèmes Linéaires

Les matrices et les systèmes linéaires sont utilisés dans de nombreux domaines des mathématiques et des sciences appliquées, notamment :

- **Informatique** : algorithmes de calcul et de traitement de données.
- **Physique** : modélisation de phénomènes complexes.
- **Économie et gestion** : modélisation de systèmes économiques ou de réseaux de transport.
- **Ingénierie** : pour résoudre des problèmes de circuits ou de structures.



## 🔹 Conclusion

Les **matrices** et les **systèmes linéaires** sont des outils puissants pour modéliser et résoudre de nombreux problèmes en mathématiques. Ils offrent des solutions compactes et efficaces pour résoudre des équations complexes et sont largement utilisés dans diverses branches des sciences et de l’ingénierie. 🎓



Bonne pratique avec les matrices et les systèmes linéaires ! 🚀