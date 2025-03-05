# Leçon : Géométrie dans un repère 📍

## Objectifs 🎯 :
- Apprendre à utiliser les outils de géométrie dans un repère pour résoudre des problèmes.
- Maîtriser les équations de différentes courbes dans un repère (droites, cercles, paraboles, etc.).
- Appliquer les notions de vecteurs dans un repère pour résoudre des problèmes géométriques.



## 1. Introduction à la géométrie dans un repère 🧭

Dans le cadre de la géométrie analytique, un repère permet de situer les objets géométriques à l'aide de coordonnées. Un repère est constitué de deux axes (dans le plan) ou de trois axes (dans l’espace) et d’une origine.

### 1.1. Le repère dans le plan
Dans le plan, on utilise un repère orthonormé défini par deux axes perpendiculaires, généralement notés **Ox** et **Oy**. Les coordonnées d’un point $$ P $$ sont écrites sous la forme $$ P(x, y) $$, où $$ x $$ est l’abscisse et $$ y $$ l’ordonnée.

### 1.2. Le repère dans l’espace
Dans l’espace, on utilise un repère orthonormé défini par trois axes perpendiculaires, généralement notés **Ox**, **Oy** et **Oz**. Les coordonnées d’un point $$ P $$ sont écrites sous la forme $$ P(x, y, z) $$.



## 2. Vecteurs dans un repère 📏

### 2.1. Représentation des vecteurs
Un vecteur dans un repère est défini par sa direction, son sens et sa norme. Par exemple, un vecteur $$ \vec{u} $$ dans le plan est représenté par $$ \vec{u} = (u_x, u_y) $$, où $$ u_x $$ et $$ u_y $$ sont les composantes du vecteur dans les directions des axes $$ Ox $$ et $$ Oy $$.

Dans l’espace, un vecteur $$ \vec{v} $$ est représenté par $$ \vec{v} = (v_x, v_y, v_z) $$.

### 2.2. Addition et multiplication par un scalaire
Les règles d'addition et de multiplication des vecteurs sont les suivantes :
- **Addition** : $$ \vec{u} + \vec{v} = (u_x + v_x, u_y + v_y) $$.
- **Multiplication par un scalaire** : $$ k \cdot \vec{u} = (k \cdot u_x, k \cdot u_y) $$.



## 3. Équation d'une droite dans un repère ✏️

### 3.1. Équation cartésienne d'une droite
L'équation cartésienne d’une droite dans le plan peut être écrite sous la forme :

$$
ax + by + c = 0
$$

Où $$ a $$, $$ b $$ et $$ c $$ sont des constantes, et $$ x $$ et $$ y $$ sont les coordonnées de tout point sur la droite.

### 3.2. Équation paramétrique d’une droite
L’équation paramétrique d’une droite passant par un point $$ A(x_1, y_1) $$ et ayant pour vecteur directeur $$ \vec{v} = (v_x, v_y) $$ est donnée par :

$$
\begin{cases}
x = x_1 + t \cdot v_x \\
y = y_1 + t \cdot v_y
\end{cases}
$$

Où $$ t $$ est un paramètre réel.

### 3.3. Droite parallèle à une autre
Deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires. Cela signifie que les vecteurs directeurs de ces deux droites sont des multiples l'un de l'autre.



## 4. Équation d'un cercle dans un repère 🌀

L'équation d’un cercle de centre $$ C(h, k) $$ et de rayon $$ r $$ dans un repère orthonormé est donnée par :

$$
(x - h)^2 + (y - k)^2 = r^2
$$

Cette équation est la forme canonique d’un cercle. Si le centre est l’origine du repère (c’est-à-dire $$ h = 0 $$ et $$ k = 0 $$), l’équation devient :

$$
x^2 + y^2 = r^2
$$

### 4.1. Propriétés du cercle
- **Centre** : $$ C(h, k) $$.
- **Rayon** : $$ r $$.
- L’équation du cercle représente l’ensemble des points situés à une distance égale à $$ r $$ du centre.



## 5. Parabole dans un repère 🎯

### 5.1. Équation d'une parabole
L'équation d’une parabole est généralement écrite sous la forme :

$$
y = ax^2 + bx + c
$$

Où $$ a $$, $$ b $$ et $$ c $$ sont des constantes. Cette forme est appelée **forme générale** de la parabole. Le graphe de cette équation est une parabole, dont l'orientation dépend du signe de $$ a $$ :
- Si $$ a > 0 $$, la parabole est **ouverte vers le haut**.
- Si $$ a < 0 $$, la parabole est **ouverte vers le bas**.

### 5.2. Parabole symétrique par rapport à un axe
L'axe de symétrie d’une parabole donnée par $$ y = ax^2 + bx + c $$ est la droite d'équation :

$$
x = -\frac{b}{2a}
$$

Ce point est également l’abscisse du sommet de la parabole.



## 6. Calcul de distances et de coordonnées dans un repère 📏

### 6.1. Distance entre deux points
La distance entre deux points $$ A(x_1, y_1) $$ et $$ B(x_2, y_2) $$ dans le plan est donnée par la formule :

$$
d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

### 6.2. Coordonnées du milieu d’un segment
Les coordonnées du milieu $$ M $$ d’un segment dont les extrémités sont les points $$ A(x_1, y_1) $$ et $$ B(x_2, y_2) $$ sont données par :

$$
M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)
$$



## 7. Conclusion 🌟

La géométrie dans un repère permet de résoudre des problèmes géométriques en utilisant les coordonnées des points, les équations des droites et des courbes, et les propriétés des vecteurs. Cela offre un outil puissant pour analyser des configurations géométriques de manière analytique.

L'utilisation de l'algèbre permet de simplifier et de formaliser les solutions géométriques, et les applications de ces concepts sont nombreuses en physique et dans d'autres domaines des mathématiques.



## Devoirs 📑

1. Calculer la distance entre les points $$ A(1, 2) $$ et $$ B(4, 6) $$.
2. Trouver l'équation paramétrique de la droite passant par les points $$ A(1, 1) $$ et $$ B(3, 4) $$.
3. Résoudre un exercice où il faut déterminer l'équation d'un cercle passant par trois points donnés.



