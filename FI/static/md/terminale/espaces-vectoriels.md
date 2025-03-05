# Espaces Vectoriels 📘

## 1. Introduction 🧮
Un **espace vectoriel** est une structure mathématique qui généralise les notions de vecteurs en permettant d’effectuer des opérations d’addition et de multiplication par un scalaire.

Soit $$ K $$ un corps (par exemple $$ \mathbb{R} $$ ou $$ \mathbb{C} $$), un **espace vectoriel** $$ E $$ sur $$ K $$ est un ensemble muni :
- d’une **addition** : $$ + : E \times E \to E $$
- d’une **multiplication par un scalaire** : $$ \cdot : K \times E \to E $$

Ces opérations doivent vérifier certaines propriétés listées ci-dessous.

## 2. Axiomes des Espaces Vectoriels ✅
Pour tout $$ u, v, w \in E $$ et tout $$ \lambda, \mu \in K $$ :
1. **Associativité de l'addition** : $$ (u + v) + w = u + (v + w) $$
2. **Commutativité de l'addition** : $$ u + v = v + u $$
3. **Élément neutre** : Il existe $$ 0_E \in E $$ tel que $$ u + 0_E = u $$
4. **Élément opposé** : Tout $$ u \in E $$ possède un opposé $$ -u $$ tel que $$ u + (-u) = 0_E $$
5. **Distributivité scalaire-vectorielle** : $$ \lambda (u + v) = \lambda u + \lambda v $$
6. **Distributivité scalaire-sommaire** : $$ (\lambda + \mu) u = \lambda u + \mu u $$
7. **Compatibilité de la multiplication** : $$ (\lambda \mu) u = \lambda (\mu u) $$
8. **Élément neutre multiplicatif** : $$ 1 u = u $$ pour tout $$ u \in E $$

## 3. Exemples d'Espaces Vectoriels 🔍
1. **L’espace euclidien** $$ \mathbb{R}^n $$ avec l’addition et la multiplication par un réel.
2. **L’ensemble des polynômes** $$ \mathbb{R}[X] $$ muni des opérations usuelles.
3. **L’espace des matrices** $$ \mathcal{M}_{m,n}(K) $$, l’ensemble des matrices à coefficients dans $$ K $$.
4. **L’espace des fonctions continues** $$ \mathcal{C}(\mathbb{R}) $$ avec l’addition de fonctions et la multiplication par un scalaire.

## 4. Sous-Espaces Vectoriels 📏
Un **sous-espace vectoriel** $$ F $$ de $$ E $$ est une partie de $$ E $$ stable par addition et multiplication par un scalaire.

Conditions nécessaires et suffisantes :
- $$ 0_E \in F $$
- Pour tout $$ u, v \in F $$, alors $$ u + v \in F $$
- Pour tout $$ u \in F $$ et $$ \lambda \in K $$, alors $$ \lambda u \in F $$

Exemples :
- Dans $$ \mathbb{R}^3 $$, le plan passant par l'origine est un sous-espace vectoriel.
- L’ensemble des polynômes de degré $$ \leq n $$ est un sous-espace de $$ \mathbb{R}[X] $$.

## 5. Combinaisons Linéaires et Familles Libres 🔗

### a) Combinaison linéaire
Une **combinaison linéaire** de vecteurs $$ v_1, v_2, ..., v_p $$ de $$ E $$ est une expression de la forme :
$$ u = \lambda_1 v_1 + \lambda_2 v_2 + ... + \lambda_p v_p $$
avec $$ \lambda_i \in K $$.

### b) Famille libre et liée
- Une famille $$ (v_1, v_2, ..., v_p) $$ est **libre** si :
  $$ \lambda_1 v_1 + \lambda_2 v_2 + ... + \lambda_p v_p = 0_E \Rightarrow \lambda_1 = ... = \lambda_p = 0 $$
- Sinon, elle est **liée**.

Exemple : Dans $$ \mathbb{R}^3 $$, les vecteurs $$ (1,0,0) $$, $$ (0,1,0) $$ et $$ (0,0,1) $$ forment une famille libre.

## 6. Bases et Dimensions 📏
### a) Définition d’une base
Une **base** d’un espace vectoriel $$ E $$ est une famille libre qui engendre $$ E $$, c'est-à-dire que tout vecteur de $$ E $$ peut s’écrire comme une combinaison linéaire de ces vecteurs.

Exemple : $$ (1,0), (0,1) $$ est une base de $$ \mathbb{R}^2 $$.

### b) Dimension d’un espace vectoriel
Si $$ E $$ possède une base finie de $$ n $$ éléments, on dit que $$ E $$ est de dimension $$ n $$ et on note :
$$ \dim(E) = n $$

Exemples :
- $$ \dim(\mathbb{R}^3) = 3 $$
- $$ \dim(\mathbb{R}[X]_n) = n+1 $$ (les polynômes de degré $$ \leq n $$)

## 7. Application aux Systèmes Linéaires 📌
Un **système linéaire** est un ensemble d’équations de la forme :
$$ \begin{cases}
 a_{11} x_1 + a_{12} x_2 + ... + a_{1n} x_n = b_1 \\
 a_{21} x_1 + a_{22} x_2 + ... + a_{2n} x_n = b_2 \\
 ... \\
 a_{m1} x_1 + a_{m2} x_2 + ... + a_{mn} x_n = b_m
 \end{cases} $$

On peut le réécrire sous forme matricielle :
$$ A X = B $$
avec $$ A $$ la matrice des coefficients, $$ X $$ le vecteur des inconnues, et $$ B $$ le vecteur des constantes.

Les espaces vectoriels permettent d'étudier l’existence et l’unicité des solutions.

## 8. Exercices ✏️
1. Déterminer si l’ensemble des polynômes pairs forme un sous-espace de $$ \mathbb{R}[X] $$.
2. Montrer que les vecteurs $$ (1,2,3) $$, $$ (0,1,4) $$, $$ (2,3,7) $$ sont liés.
3. Trouver une base et la dimension de l’espace des matrices triangulaires supérieures $$ 2 \times 2 $$.

Bonne étude ! 🚀

