# Leçon : Produit scalaire et formule d'Al-Kashi 📐

## Objectifs 🎯 :
- Comprendre le produit scalaire et ses propriétés.
- Maîtriser la formule de la loi d'Al-Kashi et son application en géométrie.



## 1. Le produit scalaire de deux vecteurs 🧮

Le **produit scalaire** de deux vecteurs $$ \vec{u} = (u_x, u_y) $$ et $$ \vec{v} = (v_x, v_y) $$ dans le plan est défini par :

$$
\vec{u} \cdot \vec{v} = u_x \cdot v_x + u_y \cdot v_y
$$

### 1.1. Propriétés du produit scalaire :
- **Commutativité** : $$ \vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u} $$.
- **Distributivité** par rapport à l'addition de vecteurs : $$ \vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w} $$.
- **Linéarité** par rapport au scalaire : $$ (k \cdot \vec{u}) \cdot \vec{v} = k \cdot (\vec{u} \cdot \vec{v}) $$.

### 1.2. Interprétation géométrique :
Le produit scalaire peut également être exprimé en fonction de l'angle $$ \theta $$ entre les deux vecteurs :

$$
\vec{u} \cdot \vec{v} = |\vec{u}| \cdot |\vec{v}| \cdot \cos(\theta)
$$

Où :
- $$ |\vec{u}| $$ et $$ |\vec{v}| $$ sont les normes (longueurs) des vecteurs $$ \vec{u} $$ et $$ \vec{v} $$.
- $$ \theta $$ est l'angle entre les deux vecteurs.

Ainsi, le produit scalaire est directement lié à la projection de l'un des vecteurs sur l'autre.

### 1.3. Cas particulier :
- Si le produit scalaire $$ \vec{u} \cdot \vec{v} = 0 $$, alors les vecteurs $$ \vec{u} $$ et $$ \vec{v} $$ sont perpendiculaires, c'est-à-dire que $$ \theta = 90^\circ $$.



## 2. La formule de la loi d'Al-Kashi 📏

La **loi d'Al-Kashi** (aussi appelée **théorème du cosinus**) est une formule qui relie les longueurs des côtés d'un triangle et le cosinus de l'angle entre ces côtés. Cette formule est une généralisation du théorème de Pythagore.

### 2.1. Formulation du théorème :
Dans un triangle $$ ABC $$, avec des côtés $$ a $$, $$ b $$ et $$ c $$, et un angle $$ \gamma $$ compris entre les côtés $$ a $$ et $$ b $$, la loi d'Al-Kashi s'écrit comme suit :

$$
c^2 = a^2 + b^2 - 2ab \cdot \cos(\gamma)
$$

### 2.2. Applications :
- Si l'angle $$ \gamma $$ est un angle droit (c'est-à-dire $$ \gamma = 90^\circ $$), la formule de la loi d'Al-Kashi devient le **théorème de Pythagore** :
  $$ c^2 = a^2 + b^2 $$, car $$ \cos(90^\circ) = 0 $$.
- Si l'angle $$ \gamma $$ est aigu, alors $$ \cos(\gamma) > 0 $$ et $$ c^2 < a^2 + b^2 $$.
- Si l'angle $$ \gamma $$ est obtus, alors $$ \cos(\gamma) < 0 $$ et $$ c^2 > a^2 + b^2 $$.

### 2.3. Géométrie vectorielle et la loi d'Al-Kashi :
La loi d'Al-Kashi peut être obtenue en utilisant le produit scalaire. En effet, pour un triangle avec des vecteurs $$ \vec{u} $$ et $$ \vec{v} $$ formant un angle $$ \gamma $$ entre eux, on peut appliquer la relation suivante :

$$
|\vec{u} - \vec{v}|^2 = |\vec{u}|^2 + |\vec{v}|^2 - 2 \cdot |\vec{u}| \cdot |\vec{v}| \cdot \cos(\gamma)
$$

Cela permet de retrouver la même formule que la loi d'Al-Kashi en utilisant les vecteurs des côtés du triangle.



## 3. Application de la loi d'Al-Kashi dans un triangle 🏔️

### Exemple 1 : Calcul de la longueur d'un côté d'un triangle

Dans un triangle ABC, on connaît les longueurs des côtés $$ a = 5 $$, $$ b = 7 $$ et l'angle $$ \gamma = 60^\circ $$ entre les côtés $$ a $$ et $$ b $$.

On veut calculer la longueur du côté $$ c $$.

En appliquant la formule de la loi d'Al-Kashi :

$$
c^2 = a^2 + b^2 - 2ab \cdot \cos(\gamma)
$$

Substituons les valeurs :

$$
c^2 = 5^2 + 7^2 - 2 \cdot 5 \cdot 7 \cdot \cos(60^\circ)
$$

$$
c^2 = 25 + 49 - 70 \cdot \frac{1}{2}
$$

$$
c^2 = 25 + 49 - 35 = 39
$$

Donc :

$$
c = \sqrt{39} \approx 6.24
$$

### Exemple 2 : Vérification du théorème de Pythagore

Dans un triangle rectangle où les côtés $$ a = 3 $$, $$ b = 4 $$ et $$ c = 5 $$, l'angle entre les côtés $$ a $$ et $$ b $$ est de $$ 90^\circ $$.

Appliquons la loi d'Al-Kashi :

$$
c^2 = a^2 + b^2 - 2ab \cdot \cos(90^\circ)
$$

Comme $$ \cos(90^\circ) = 0 $$, la formule devient :

$$
c^2 = a^2 + b^2
$$

$$
5^2 = 3^2 + 4^2
$$

$$
25 = 9 + 16
$$

Ce qui est bien vrai, donc le triangle est bien un triangle rectangle.



## 4. Conclusion 🌟

Le produit scalaire est un outil fondamental en géométrie et en physique, permettant de relier les vecteurs et les angles entre eux. Il est utile pour déterminer l'orthogonalité des vecteurs et pour exprimer la relation entre les longueurs des côtés d'un triangle et l'angle entre ces côtés à l'aide de la loi d'Al-Kashi.

La loi d'Al-Kashi (ou théorème du cosinus) est particulièrement utile pour résoudre des problèmes dans des triangles quelconques, et elle généralise le théorème de Pythagore pour tous les types de triangles.



## Devoirs 📑

1. Appliquer la loi d'Al-Kashi pour calculer la longueur d'un côté dans un triangle ayant des côtés $$ a = 8 $$, $$ b = 6 $$ et l'angle $$ \gamma = 45^\circ $$.
2. Calculer le produit scalaire de $$ \vec{u} = (2, 3) $$ et $$ \vec{v} = (4, 1) $$.
3. Résoudre un exercice géométrique utilisant le produit scalaire et la loi d'Al-Kashi pour déterminer la longueur d'un côté d'un triangle.



