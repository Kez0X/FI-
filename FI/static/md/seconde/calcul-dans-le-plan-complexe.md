


# 🧑‍🏫 Calculs dans le Plan Complexe

Les **nombres complexes** sont des nombres qui permettent de résoudre des équations qui n'ont pas de solution dans les nombres réels. Dans le plan complexe, chaque nombre complexe est représenté par un point, ce qui nous permet de visualiser et de manipuler les nombres complexes géométriquement.



## 🔹 Qu'est-ce qu'un nombre complexe ?

Un **nombre complexe** est un nombre de la forme :

$$
z = a + bi
$$

où :
- $$a$$ est la **partie réelle** de $$z$$,
- $$b$$ est la **partie imaginaire** de $$z$$,
- $$i$$ est l'unité imaginaire, telle que $$i^2 = -1$$.

Le nombre complexe est donc représenté par la paire de réels $$ (a, b) $$.



## 🔸 Représentation géométrique dans le plan complexe

Dans le **plan complexe**, chaque nombre complexe est représenté par un point dont les coordonnées sont données par la partie réelle et la partie imaginaire du nombre.

- **Axe des réels** : l'axe horizontal représente la partie réelle de $$z$$.
- **Axe des imaginaires** : l'axe vertical représente la partie imaginaire de $$z$$.

Le nombre complexe $$z = a + bi$$ est donc représenté par le point $$M(a, b)$$ dans le plan.



## 🔺 Opérations sur les nombres complexes

### Addition de nombres complexes

L'addition de deux nombres complexes $$z_1 = a + bi$$ et $$z_2 = c + di$$ se fait en additionnant leurs parties réelles et leurs parties imaginaires séparément :

$$
z_1 + z_2 = (a + c) + (b + d)i
$$

### Exemple :
Si $$z_1 = 3 + 4i$$ et $$z_2 = 1 + 2i$$, alors :

$$
z_1 + z_2 = (3 + 1) + (4 + 2)i = 4 + 6i
$$



### Soustraction de nombres complexes

La soustraction de deux nombres complexes $$z_1 = a + bi$$ et $$z_2 = c + di$$ se fait en soustrayant leurs parties réelles et imaginaires séparément :

$$
z_1 - z_2 = (a - c) + (b - d)i
$$

### Exemple :
Si $$z_1 = 3 + 4i$$ et $$z_2 = 1 + 2i$$, alors :

$$
z_1 - z_2 = (3 - 1) + (4 - 2)i = 2 + 2i
$$



### Multiplication de nombres complexes

La multiplication de deux nombres complexes se fait à l'aide de la distributivité et de la règle $$i^2 = -1$$. Si $$z_1 = a + bi$$ et $$z_2 = c + di$$, alors :

$$
z_1 \times z_2 = (a + bi)(c + di) = ac + adi + bci + bdi^2
$$

En utilisant $$i^2 = -1$$, on simplifie :

$$
z_1 \times z_2 = (ac - bd) + (ad + bc)i
$$

### Exemple :
Si $$z_1 = 3 + 4i$$ et $$z_2 = 1 + 2i$$, alors :

$$
z_1 \times z_2 = (3 \times 1 - 4 \times 2) + (3 \times 2 + 4 \times 1)i
$$

$$
z_1 \times z_2 = (3 - 8) + (6 + 4)i = -5 + 10i
$$



### Division de nombres complexes

La division de deux nombres complexes $$z_1 = a + bi$$ et $$z_2 = c + di$$ est réalisée en multipliant le numérateur et le dénominateur par le conjugué de $$z_2$$, c'est-à-dire $$\overline{z_2} = c - di$$.

$$
\frac{z_1}{z_2} = \frac{a + bi}{c + di} \times \frac{c - di}{c - di}
$$

Cela permet d'obtenir un nombre complexe sous la forme :

$$
\frac{z_1}{z_2} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}
$$

### Exemple :
Si $$z_1 = 3 + 4i$$ et $$z_2 = 1 + 2i$$, alors :

$$
\frac{z_1}{z_2} = \frac{(3 + 4i)(1 - 2i)}{1^2 + 2^2}
$$

$$
\frac{z_1}{z_2} = \frac{(3 - 6i + 4i - 8i^2)}{5}
$$

$$
\frac{z_1}{z_2} = \frac{(3 + 8) + (-6 + 4)i}{5} = \frac{11 - 2i}{5} = \frac{11}{5} - \frac{2}{5}i
$$



## 🔸 Conjugué d'un nombre complexe

Le **conjugué** d'un nombre complexe $$z = a + bi$$ est le nombre complexe $$\overline{z} = a - bi$$.

Le conjugué est utile pour effectuer des divisions de nombres complexes, comme on l'a vu précédemment. Il est également utile pour calculer la norme d'un nombre complexe.



## 🔹 Norme d'un nombre complexe

La **norme** d'un nombre complexe $$z = a + bi$$ est la distance entre le point $$M(a, b)$$ dans le plan complexe et l'origine. Elle est calculée par la formule :

$$
\|z\| = \sqrt{a^2 + b^2}
$$

### Exemple :
Si $$z = 3 + 4i$$, alors la norme de $$z$$ est :

$$
\|z\| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5
$$



## 🔸 Argument d'un nombre complexe

L'**argument** d'un nombre complexe $$z = a + bi$$ est l'angle $$\theta$$ formé par le vecteur représentant le nombre complexe et l'axe des réels (l'axe horizontal). Cet argument est calculé à l'aide de la fonction tangente :

$$
\theta = \text{arg}(z) = \tan^{-1}\left(\frac{b}{a}\right)
$$



## 🧑‍🏫 Applications des nombres complexes

Les nombres complexes sont utilisés dans de nombreux domaines des mathématiques et de la physique, tels que :
- La résolution d'équations polynomiales,
- L'électromagnétisme (avec des **impédances**),
- Les transformations dans le plan complexe,
- Les systèmes dynamiques.



### Exemple pratique :

Imaginons que nous ayons un circuit électrique avec des résistances et des inductances. L'**impédance** du circuit peut être représentée par un nombre complexe, ce qui nous permet d'appliquer les règles de calcul des nombres complexes pour analyser le comportement du circuit.



## 🎯 Conclusion

Le calcul dans le **plan complexe** est une extension des nombres réels, qui permet de résoudre des problèmes plus complexes et de travailler sur une représentation géométrique des nombres. Avec les opérations sur les nombres complexes, la norme, l'argument et les conjugaisons, nous pouvons manipuler les nombres complexes pour résoudre des équations et analyser des systèmes.

🎉 Les nombres complexes sont donc des outils puissants et incontournables en mathématiques ! 🌟

