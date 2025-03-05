# Leçon : Calcul vectoriel 🧮

## Objectifs 🎯 :
- Comprendre les concepts fondamentaux du calcul vectoriel.
- Maîtriser les opérations sur les vecteurs (addition, produit scalaire, produit vectoriel).
- Appliquer ces opérations en géométrie dans un repère.



## 1. Vecteurs en géométrie 🗺️

Un vecteur est un objet mathématique qui possède à la fois une **direction**, un **sens** et une **longueur**. On le note généralement avec une flèche au-dessus de la lettre, comme $$ \vec{v} $$.

### 1.1. Représentation d'un vecteur :

Dans un plan ou dans l'espace, un vecteur est souvent représenté par un **point de départ** et un **point d'arrivée** :
- Le vecteur $$ \vec{AB} $$ est défini par deux points, A et B, et est orienté de A vers B.
- En coordonnées cartésiennes, un vecteur $$ \vec{v} $$ dans le plan se note $$ \vec{v} = (v_x, v_y) $$ où $$ v_x $$ et $$ v_y $$ sont les composantes du vecteur.



## 2. Opérations sur les vecteurs 🔢

### 2.1. Addition de vecteurs 🧩

L'addition de deux vecteurs $$ \vec{u} = (u_x, u_y) $$ et $$ \vec{v} = (v_x, v_y) $$ se fait en ajoutant les coordonnées correspondantes :

$$
\vec{u} + \vec{v} = (u_x + v_x, u_y + v_y)
$$

Cela peut être visualisé comme la règle du parallélogramme ou de la méthode du triangle.

### 2.2. Multiplication d'un vecteur par un scalaire ⚡

Si $$ k $$ est un scalaire, alors la multiplication du vecteur $$ \vec{v} = (v_x, v_y) $$ par $$ k $$ donne le vecteur :

$$
k \cdot \vec{v} = (k \cdot v_x, k \cdot v_y)
$$

Cela modifie la longueur du vecteur, mais conserve sa direction si $$ k > 0 $$, ou inverse la direction si $$ k < 0 $$.



## 3. Produit scalaire de deux vecteurs 🔠

Le **produit scalaire** entre deux vecteurs $$ \vec{u} = (u_x, u_y) $$ et $$ \vec{v} = (v_x, v_y) $$ est défini par :

$$
\vec{u} \cdot \vec{v} = u_x \cdot v_x + u_y \cdot v_y
$$

Ce produit est un nombre réel (un scalaire) et possède plusieurs propriétés intéressantes :

- **Commutativité** : $$ \vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u} $$.
- **Distributivité** : $$ \vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w} $$.
- **Linéarité** par rapport au scalaire : $$ (k \cdot \vec{u}) \cdot \vec{v} = k \cdot (\vec{u} \cdot \vec{v}) $$.

### 3.1. Interprétation géométrique du produit scalaire 📏

Le produit scalaire peut également être interprété géométriquement. Il est relié à l'angle $$ \theta $$ entre les deux vecteurs par la formule :

$$
\vec{u} \cdot \vec{v} = |\vec{u}| \cdot |\vec{v}| \cdot \cos(\theta)
$$

Où :
- $$ |\vec{u}| $$ et $$ |\vec{v}| $$ sont les normes (longueurs) des vecteurs $$ \vec{u} $$ et $$ \vec{v} $$.
- $$ \theta $$ est l'angle entre les deux vecteurs.



## 4. Produit vectoriel de deux vecteurs (dans l'espace) 🧭

Le **produit vectoriel** de deux vecteurs $$ \vec{u} $$ et $$ \vec{v} $$ dans l'espace est un vecteur $$ \vec{w} $$ qui est perpendiculaire au plan formé par $$ \vec{u} $$ et $$ \vec{v} $$.

Si $$ \vec{u} = (u_x, u_y, u_z) $$ et $$ \vec{v} = (v_x, v_y, v_z) $$, alors le produit vectoriel est défini par :

$$
\vec{u} \times \vec{v} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
u_x & u_y & u_z \\
v_x & v_y & v_z
\end{vmatrix}
$$

Où $$ \hat{i}, \hat{j}, \hat{k} $$ sont les vecteurs unitaires de l'espace. Le résultat est un vecteur :

$$
\vec{w} = (w_x, w_y, w_z)
$$

Les composantes de ce vecteur sont données par les déterminants des matrices associées aux coordonnées des vecteurs $$ \vec{u} $$ et $$ \vec{v} $$.



## 5. Norme d'un vecteur et distance entre deux points 🔢

### 5.1. Norme d'un vecteur 💡

La **norme** d'un vecteur $$ \vec{v} = (v_x, v_y) $$ dans le plan est donnée par :

$$
|\vec{v}| = \sqrt{v_x^2 + v_y^2}
$$

Dans l'espace, pour $$ \vec{v} = (v_x, v_y, v_z) $$, la norme est :

$$
|\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}
$$

### 5.2. Distance entre deux points 🔍

La distance entre deux points $$ A(x_1, y_1) $$ et $$ B(x_2, y_2) $$ dans le plan est donnée par :

$$
d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

Dans l'espace, pour deux points $$ A(x_1, y_1, z_1) $$ et $$ B(x_2, y_2, z_2) $$, la distance est :

$$
d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
$$



## 6. Application en géométrie dans un repère 🔳

### 6.1. Équation d'une droite dans le plan :

Si on connaît deux points $$ A(x_1, y_1) $$ et $$ B(x_2, y_2) $$, on peut définir la droite passant par ces deux points en utilisant un vecteur directeur $$ \vec{d} = (x_2 - x_1, y_2 - y_1) $$.

L'équation paramétrique de la droite est donnée par :

$$
\vec{r}(t) = \vec{A} + t \cdot \vec{d}
$$

Où $$ t $$ est un paramètre réel.



## 7. Conclusion 🌟

Le calcul vectoriel est une discipline essentielle en géométrie et en physique. Il permet de résoudre de nombreux problèmes de géométrie dans l'espace, d'analyser des trajectoires, et de comprendre les relations entre les vecteurs.

Les opérations de base incluent l'addition de vecteurs, la multiplication par un scalaire, le produit scalaire et le produit vectoriel. Ces outils sont très utilisés dans les sciences appliquées pour modéliser des phénomènes naturels.



## Devoirs 📑

1. Trouver la norme du vecteur $$ \vec{v} = (3, 4) $$.
2. Calculer le produit scalaire de $$ \vec{u} = (1, 2) $$ et $$ \vec{v} = (3, 4) $$.
3. Trouver le produit vectoriel de $$ \vec{u} = (1, 0, 0) $$ et $$ \vec{v} = (0, 1, 0) $$.
4. Résoudre un exercice de géométrie dans un repère en utilisant les vecteurs.



