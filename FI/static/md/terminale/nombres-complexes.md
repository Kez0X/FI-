# Nombres Complexes 📘

## 1. Introduction 🧮

Les **nombres complexes** sont une extension des nombres réels, permettant de résoudre certaines équations impossibles dans \( \mathbb{R} \), comme \( x^2 + 1 = 0 \).

Un nombre complexe \( z \) s'écrit sous la forme :  
$$ z = a + ib $$  
avec :
- \( a \) : partie réelle \( \Re(z) \)
- \( b \) : partie imaginaire \( \Im(z) \)
- \( i \) : unité imaginaire, telle que \( i^2 = -1 \).

## 2. Représentation des nombres complexes 📉

### a) Forme algébrique
Tout nombre complexe est de la forme \( a + ib \), où \( a, b \in \mathbb{R} \).

### b) Représentation graphique
Les nombres complexes peuvent être représentés dans le **plan d'Argand**, avec :
- L'axe des abscisses pour la partie réelle \( \Re(z) \)
- L'axe des ordonnées pour la partie imaginaire \( \Im(z) \)

Exemple :
- \( z = 3 + 4i \) correspond au point \( (3,4) \) dans le plan complexe.

## 3. Opérations sur les nombres complexes ➕➖

### a) Addition et soustraction
$$ (a+ib) + (c+id) = (a+c) + i(b+d) $$
$$ (a+ib) - (c+id) = (a-c) + i(b-d) $$

### b) Multiplication
$$ (a+ib) \times (c+id) = (ac - bd) + i(ad + bc) $$

### c) Conjugué d'un nombre complexe
Le conjugué de \( z = a+ib \) est \( \bar{z} = a - ib \).

### d) Module d'un nombre complexe
Le module de \( z \), noté \( |z| \), est la distance entre \( z \) et l'origine :
$$ |z| = \sqrt{a^2 + b^2} $$

Propriétés :
- \( |z|^2 = z \times \bar{z} \)
- \( |z \times w| = |z| \times |w| \)
- \( |z / w| = |z| / |w| \) (si \( w \neq 0 \))

### e) Division
Pour diviser deux nombres complexes, on utilise le conjugué :
$$ \frac{a+ib}{c+id} = \frac{(a+ib) \times (c-id)}{c^2 + d^2} $$

## 4. Forme trigonométrique et exponentielle 🌀

### a) Forme trigonométrique
Un nombre complexe peut s'écrire sous la forme :
$$ z = r (\cos \theta + i \sin \theta) $$
où :
- \( r = |z| \) est le module
- \( \theta \) (ou \( \arg(z) \)) est l'argument du nombre complexe

### b) Forme exponentielle
Par la formule d'Euler :
$$ e^{i\theta} = \cos \theta + i \sin \theta $$
on obtient :
$$ z = r e^{i\theta} $$

### c) Multiplication et division en forme trigonométrique
$$ z_1 \times z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)} $$
$$ \frac{z_1}{z_2} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)} $$

## 5. Racines d'un nombre complexe 🌿

L'équation \( z^n = w \) admet \( n \) solutions données par :
$$ z_k = \sqrt[n]{r} e^{i(\frac{\theta + 2k\pi}{n})}, \quad k = 0,1, ..., n-1 $$

## 6. Application : Résolution de l'équation \( x^2 + 1 = 0 \)
On cherche \( x \) tel que :
$$ x^2 + 1 = 0 $$
$$ x^2 = -1 $$
On a donc deux solutions :
$$ x = \pm i $$

## 7. Exercices ✏️
1. Calculer \( (2+3i) + (4-5i) \)
2. Déterminer \( |3+4i| \)
3. Convertir \( z = 1+i \) en forme exponentielle
4. Trouver les racines cubiques de \( 8 \)

Bonne révision ! 🚀

