# Leçon : Fonctions trigonométriques 🔵

## Objectifs 🎯 :
- Comprendre les principales fonctions trigonométriques : sinus, cosinus, tangente.
- Savoir tracer les courbes représentatives des fonctions trigonométriques.
- Comprendre les propriétés des fonctions trigonométriques sur un intervalle.



## 1. Introduction aux fonctions trigonométriques 🔭

Les fonctions trigonométriques sont liées aux angles dans un triangle rectangle, mais elles sont également définies pour tous les réels sur le cercle trigonométrique. 

Les trois fonctions trigonométriques principales sont :
- $$ \sin(x) $$ : le sinus d'un angle.
- $$ \cos(x) $$ : le cosinus d'un angle.
- $$ \tan(x) $$ : la tangente d'un angle (lorsque $$ \cos(x) \neq 0 $$).

Ces fonctions sont périodiques, ce qui signifie qu'elles se répètent après un certain intervalle. Ce comportement est la clé pour comprendre leurs graphes.



## 2. Le cercle trigonométrique 🔄

Le cercle trigonométrique est un cercle de rayon 1, centré en l'origine du plan cartésien. Pour tout angle $$ \theta $$, les coordonnées du point d'intersection de la droite formée par cet angle avec le cercle sont données par :
- $$ \cos(\theta) $$ pour l'ordonnée (axe des $$ y $$).
- $$ \sin(\theta) $$ pour l'abscisse (axe des $$ x $$).

### Représentation du cercle trigonométrique :

- L'angle $$ \theta $$ se mesure en radians.
- La fonction sinus donne l'ordonnée du point correspondant à cet angle.
- La fonction cosinus donne l'abscisse du point correspondant à cet angle.



## 3. Les fonctions sinus et cosinus 🎯

### 3.1. La fonction sinus $$ \sin(x) $$ :

La fonction sinus est une fonction périodique de période $$ 2\pi $$, ce qui signifie que :
$$ \sin(x) = \sin(x + 2k\pi) $$ pour tout entier $$ k $$.

#### Propriétés de $$ \sin(x) $$ :
- Domaine de définition : $$ \mathbb{R} $$ (tout réel).
- Période : $$ 2\pi $$.
- Valeurs de $$ \sin(x) $$ : $$ -1 \leq \sin(x) \leq 1 $$.
- Zéros de $$ \sin(x) $$ : $$ \sin(x) = 0 $$ pour $$ x = n\pi $$, avec $$ n \in \mathbb{Z} $$.

### 3.2. La fonction cosinus $$ \cos(x) $$ :

La fonction cosinus est aussi une fonction périodique de période $$ 2\pi $$, ce qui signifie que :
$$ \cos(x) = \cos(x + 2k\pi) $$ pour tout entier $$ k $$.

#### Propriétés de $$ \cos(x) $$ :
- Domaine de définition : $$ \mathbb{R} $$ (tout réel).
- Période : $$ 2\pi $$.
- Valeurs de $$ \cos(x) $$ : $$ -1 \leq \cos(x) \leq 1 $$.
- Zéros de $$ \cos(x) $$ : $$ \cos(x) = 0 $$ pour $$ x = \frac{\pi}{2} + n\pi $$, avec $$ n \in \mathbb{Z} $$.



## 4. La fonction tangente $$ \tan(x) $$

La fonction tangente est définie comme le rapport entre le sinus et le cosinus :

$$
\tan(x) = \frac{\sin(x)}{\cos(x)}
$$

Elle est donc définie lorsque $$ \cos(x) \neq 0 $$, c'est-à-dire pour $$ x \neq \frac{\pi}{2} + n\pi $$, avec $$ n \in \mathbb{Z} $$.

### Propriétés de $$ \tan(x) $$ :
- Domaine de définition : $$ \mathbb{R} \setminus { \frac{\pi}{2} + n\pi} $$.
- Période : $$ \pi $$.
- Valeurs de $$ \tan(x) $$ : $$ \tan(x) \in \mathbb{R} $$.
- Zéros de $$ \tan(x) $$ : $$ \tan(x) = 0 $$ pour $$ x = n\pi $$, avec $$ n \in \mathbb{Z} $$.



## 5. Tracer les courbes représentatives des fonctions trigonométriques 📈

### 5.1. Tracer la courbe de $$ \sin(x) $$ :

1. La courbe de $$ \sin(x) $$ est une onde qui oscille entre $$ -1 $$ et $$ 1 $$.
2. Elle est périodique de période $$ 2\pi $$, c'est-à-dire qu'elle se répète tous les $$ 2\pi $$ unités.
3. La fonction commence à $$ 0 $$ à $$ x = 0 $$, atteint $$ 1 $$ à $$ x = \frac{\pi}{2} $$, repasse par $$ 0 $$ à $$ x = \pi $$, atteint $$ -1 $$ à $$ x = \frac{3\pi}{2} $$, et revient à $$ 0 $$ à $$ x = 2\pi $$.

### 5.2. Tracer la courbe de $$ \cos(x) $$ :

1. La courbe de $$ \cos(x) $$ est aussi une onde qui oscille entre $$ -1 $$ et $$ 1 $$.
2. Elle est également périodique de période $$ 2\pi $$.
3. La fonction commence à $$ 1 $$ à $$ x = 0 $$, passe par $$ 0 $$ à $$ x = \frac{\pi}{2} $$, atteint $$ -1 $$ à $$ x = \pi $$, repasse par $$ 0 $$ à $$ x = \frac{3\pi}{2} $$, et revient à $$ 1 $$ à $$ x = 2\pi $$.

### 5.3. Tracer la courbe de $$ \tan(x) $$ :

1. La courbe de $$ \tan(x) $$ est une fonction à discontinuités verticales.
2. Elle a une période de $$ \pi $$.
3. La fonction a une asymptote verticale aux valeurs $$ x = \frac{\pi}{2} + n\pi $$, où $$ n \in \mathbb{Z} $$.
4. Entre les asymptotes, la courbe passe par $$ 0 $$ en $$ x = n\pi $$ et croît de manière asymptotique de $$ -\infty $$ à $$ +\infty $$.



## 6. Identités trigonométriques et relations importantes 🔎

Voici quelques identités trigonométriques essentielles :

1. **Identité fondamentale** :

$$
\sin^2(x) + \cos^2(x) = 1
$$

2. **Formules de somme et différence** :

- $$ \sin(A \pm B) = \sin(A)\cos(B) \pm \cos(A)\sin(B) $$
- $$ \cos(A \pm B) = \cos(A)\cos(B) \mp \sin(A)\sin(B) $$

3. **Formules pour la tangente** :

$$
\tan(x) = \frac{\sin(x)}{\cos(x)}
$$

$$
\tan(A \pm B) = \frac{\tan(A) \pm \tan(B)}{1 \mp \tan(A)\tan(B)}
$$



## 7. Conclusion 🌟

- Les fonctions trigonométriques sont fondamentales pour l'étude des phénomènes périodiques et apparaissent fréquemment dans de nombreux domaines des mathématiques et de la physique.
- Ces fonctions ont des propriétés importantes, comme la périodicité, les valeurs maximales et minimales, ainsi que des identités trigonométriques essentielles pour simplifier les calculs.
- Tracer les courbes représentatives et comprendre les variations de ces fonctions est une étape clé pour résoudre de nombreux problèmes.



## Devoirs 📑

1. Tracer la courbe de $$ \sin(x) $$ et $$ \cos(x) $$ sur l'intervalle $$ [0, 2\pi] $$ et analyser leurs comportements.
2. Résoudre les équations trigonométriques suivantes : 
   - $$ \sin(x) = 0.5 $$
   - $$ \cos(x) = -\frac{1}{2} $$.
3. Lire le chapitre suivant sur les **équations différentielles**. 📚
