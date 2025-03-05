
# Leçon : Polynômes du second degré 🧑‍🏫

## Objectifs 🎯 :
- Comprendre la forme générale d'un polynôme du second degré.
- Résoudre des équations du second degré.
- Maîtriser le discriminant et ses implications.
- Appliquer la factorisation et les racines d'un polynôme du second degré.


## Forme générale d'un polynôme du second degré 📜

Un **polynôme du second degré** est une expression de la forme :

$$
P(x) = ax^2 + bx + c
$$

où \(a\), \(b\), et \(c\) sont des coefficients réels, et \(a \neq 0\) (sinon, on a un polynôme de degré inférieur à 2).  
Le **degré** de ce polynôme est de 2, car la puissance la plus élevée de \(x\) est 2.

Exemple :  
Le polynôme $$\(P(x) = 2x^2 - 4x + 1\)$$ est un polynôme du second degré où $$\(a = 2\)$$, $$\(b = -4\)$$, et $$\(c = 1\)$$.



## Le discriminant 📐

Le discriminant, noté $$\(\Delta\)$$, permet de déterminer la nature des racines d'un polynôme du second degré.

### Formule du discriminant :

$$
\Delta = b^2 - 4ac
$$

Le discriminant $$\(\Delta\)$$ permet de distinguer trois cas possibles :

1. **Si $$\(\Delta > 0\)$$** : Il existe deux racines distinctes.
2. **Si $$\(\Delta = 0\)$$** : Il existe une racine double (les deux racines sont égales).
3. **Si $$\(\Delta < 0\)$$** : Il n'y a pas de racines réelles (les racines sont complexes).

### Exemples de calcul du discriminant :
1. Pour $$\(P(x) = 2x^2 - 4x + 1\)$$, on a :
   - \(a = 2\), \(b = -4\), \(c = 1\),
   - Calcul de $$\(\Delta = (-4)^2 - 4 \cdot 2 \cdot 1 = 16 - 8 = 8\)$$,
   - Donc, $$\(\Delta = 8 > 0\)$$, il existe donc deux racines distinctes.

2. Pour $$\(P(x) = x^2 - 2x + 1\)$$, on a :
   - \(a = 1\), \(b = -2\), \(c = 1\),
   - Calcul de $$\(\Delta = (-2)^2 - 4 \cdot 1 \cdot 1 = 4 - 4 = 0\)$$,
   - Donc, $$\(\Delta = 0\)$$, il existe une racine double.

3. Pour $$\(P(x) = x^2 + x + 1\)$$, on a :
   - \(a = 1\), \(b = 1\), \(c = 1\),
   - Calcul de $$\(\Delta = (1)^2 - 4 \cdot 1 \cdot 1 = 1 - 4 = -3\)$$,
   - Donc, $$\(\Delta = -3 < 0\)$$, il n'y a pas de racines réelles.



## Résolution de l'équation du second degré 📊

### Cas 1 : $$\(\Delta > 0\)$$

Si $$\(\Delta > 0\)$$, les racines de l'équation $$\(ax^2 + bx + c = 0\)$$ sont données par la formule :

$$
x_1 = \frac{-b + \sqrt{\Delta}}{2a}, \quad x_2 = \frac{-b - \sqrt{\Delta}}{2a}
$$

### Cas 2 : \(\Delta = 0\)

Si $$\(\Delta = 0\)$$, il y a une seule racine, donnée par :

$$
x_1 = x_2 = \frac{-b}{2a}
$$

### Cas 3 : \(\Delta < 0\)

Si \(\Delta < 0\), il n'y a pas de racines réelles, mais deux racines complexes conjugées. Elles sont données par :

$$
x_1 = \frac{-b + i\sqrt{-\Delta}}{2a}, \quad x_2 = \frac{-b - i\sqrt{-\Delta}}{2a}
$$



## Exemple de résolution d'une équation du second degré 🧮

**Exemple 1 : Résolution de \( 2x^2 - 4x + 1 = 0 \)**

1. Calculons le discriminant \(\Delta\) :
   $$ \Delta = (-4)^2 - 4 \cdot 2 \cdot 1 = 16 - 8 = 8 $$
2. Puis, les racines :
   $$ x_1 = \frac{-(-4) + \sqrt{8}}{2 \cdot 2} = \frac{4 + \sqrt{8}}{4} = 1 + \frac{\sqrt{2}}{2} $$
   $$ x_2 = \frac{-(-4) - \sqrt{8}}{2 \cdot 2} = \frac{4 - \sqrt{8}}{4} = 1 - \frac{\sqrt{2}}{2} $$

**Exemple 2 : Résolution de \( x^2 - 2x + 1 = 0 \)**

1. Calculons le discriminant \(\Delta\) :
   $$ \Delta = (-2)^2 - 4 \cdot 1 \cdot 1 = 4 - 4 = 0 $$
2. Puis, les racines :
   $$ x_1 = x_2 = \frac{-(-2)}{2 \cdot 1} = 1 $$



## Factorisation d'un polynôme du second degré 🛠️

Un polynôme du second degré peut aussi être factorisé en produit de deux binômes si ses racines sont réelles. Par exemple, si \(P(x)\) a pour racines \(r_1\) et \(r_2\), on peut écrire :

$$
P(x) = a(x - r_1)(x - r_2)
$$

### Exemple de factorisation :

Si les racines de $$\(P(x) = x^2 - 5x + 6\)$$ sont $$\(r_1 = 2\)$$ et $$\(r_2 = 3\)$$, on peut écrire :

$$
P(x) = (x - 2)(x - 3)
$$



## Graphique d'un polynôme du second degré 📈

Voici un graphique représentant le polynôme $$\(P(x) = 2x^2 - 4x + 1\)$$. Le sommet de la parabole est visible, et les racines peuvent être trouvées à l'intersection de la courbe avec l'axe des abscisses.

```python
import matplotlib.pyplot as plt
import numpy as np

# Définition de la fonction du polynôme
def P(x):
    return 2*x**2 - 4*x + 1

# Plage de x
x = np.linspace(-2, 4, 400)
y = P(x)

# Création du graphique
plt.plot(x, y, label="$P(x) = 2x^2 - 4x + 1$", color="b")
plt.axhline(0, color='black',linewidth=1)  # Axe des abscisses
plt.axvline(0, color='black',linewidth=1)  # Axe des ordonnées
plt.title("Graphique du polynôme $P(x) = 2x^2 - 4x + 1$")
plt.xlabel("x")
plt.ylabel("$P(x)$")
plt.grid(True)
plt.legend()
plt.show()
```

## Conclusion 🌟

- Le **discriminant** \(\Delta = b^2 - 4ac\) permet de connaître la nature des racines du polynôme du second degré.
- Les racines réelles d'un polynôme \( ax^2 + bx + c = 0 \) peuvent être trouvées à l'aide des formules basées sur \(\Delta\).
- Un polynôme du second degré peut être factorisé en produit de binômes si ses racines sont réelles.
- Le graphique d'un polynôme du second degré est une **parabole** dont l'orientation et la position dépendent des coefficients \(a\), \(b\) et \(c\).



## Devoirs 📑

1. Résoudre l'équation du second degré suivante : \(3x^2 - 6x + 2 = 0\).
2. Factoriser le polynôme suivant : \(x^2 - 4x + 3\).
3. Lire le chapitre suivant sur les **fonctions trigonométriques**. 📚

# Leçon : Tracer des tableaux de variations 📊

## Objectifs 🎯 :
- Comprendre l'importance du tableau de variations dans l'étude d'une fonction.
- Savoir dériver une fonction pour analyser son comportement.
- Apprendre à remplir un tableau de variations pour une fonction donnée.
- Identifier les intervalles de croissance et de décroissance, les points d'extremum, etc.


## Qu'est-ce qu'un tableau de variations ? 🤔

Un **tableau de variations** est un outil graphique qui permet de visualiser les variations d'une fonction \(f(x)\) sur un intervalle donné. Il montre les intervalles où la fonction est croissante, décroissante ou constante, et permet de localiser les points d'extremum (minimum ou maximum).

### Étapes pour tracer un tableau de variations :

1. **Trouver la dérivée** : La première étape consiste à dériver la fonction \(f(x)\). La dérivée permet d’analyser la variation de la fonction (croissante ou décroissante).
   
2. **Étudier le signe de la dérivée** : Le signe de \(f'(x)\) (la dérivée) nous informe sur les variations de la fonction :
   - Si \( f'(x) > 0 \), la fonction est **croissante** sur cet intervalle.
   - Si \( f'(x) < 0 \), la fonction est **décroissante**.
   - Si \( f'(x) = 0 \), la fonction peut avoir un **extremum** (maximum ou minimum local).

3. **Trouver les points critiques** : Les points où la dérivée s'annule (c'est-à-dire où \(f'(x) = 0\)) peuvent correspondre à des extremums locaux (maximum ou minimum), des points d'inflexion, ou des changements de direction dans les variations de la fonction.

4. **Compléter le tableau de variations** : À partir des informations sur la dérivée, on complète le tableau de variations, en indiquant les intervalles où la fonction est croissante, décroissante, et les points d'extremum.


## Exemple 1 : Tracer le tableau de variations de $$\( f(x) = x^2 - 4x + 3 \)$$

### 1. Calcul de la dérivée :

La fonction donnée est :  
$$
f(x) = x^2 - 4x + 3
$$

Sa dérivée est :  
$$
f'(x) = 2x - 4
$$

### 2. Trouver les points critiques :

Pour trouver les points où la dérivée s'annule, on résout l'équation \(f'(x) = 0\) :  
$$
2x - 4 = 0 \implies x = 2
$$

Donc, il y a un point critique en \(x = 2\).

### 3. Analyser le signe de la dérivée :

On va maintenant analyser le signe de \(f'(x) = 2x - 4\) en fonction de \(x\) :

- Si \(x < 2\), alors \(f'(x) = 2x - 4 < 0\), donc la fonction est **décroissante** sur cet intervalle.
- Si \(x > 2\), alors \(f'(x) = 2x - 4 > 0\), donc la fonction est **croissante** sur cet intervalle.

### 4. Compléter le tableau de variations :

- \(x = 2\) est un point où la dérivée s'annule, donc c'est un point **possible d'un extremum**. Il s'agit d'un **minimum** car la fonction passe de décroissante à croissante.

Le tableau de variations est le suivant :

| $$\(x\)$$       | $$\( -\infty \)$$  | $$2$$       | $$\( +\infty \)$$ |
|-------------|----------------|---------|---------------|
| $$\(f'(x)\)$$   | $$\(-\)$$          | $$0$$       | $$\(+\)$$         |
| $$\(f(x)\)$$    | $$\(\searrow\)$$   | minimum | $$\(\nearrow\)$$  |

La fonction \(f(x)\) est décroissante avant \(x = 2\) et croissante après. Le minimum de \(f(x)\) est en \(x = 2\), avec une valeur :

$$
f(2) = 2^2 - 4(2) + 3 = 4 - 8 + 3 = -1
$$


## Exemple 2 : Tracer le tableau de variations de \( f(x) = -x^2 + 4x - 3 \)

### 1. Calcul de la dérivée :

La fonction donnée est :  
$$
f(x) = -x^2 + 4x - 3
$$

Sa dérivée est :  
$$
f'(x) = -2x + 4
$$

### 2. Trouver les points critiques :

Pour trouver les points où la dérivée s'annule, on résout l'équation \(f'(x) = 0\) :  
$$
-2x + 4 = 0 \implies x = 2
$$

Il y a donc un point critique en \(x = 2\).

### 3. Analyser le signe de la dérivée :

On va maintenant analyser le signe de \(f'(x) = -2x + 4\) :

- Si \(x < 2\), alors \(f'(x) = -2x + 4 > 0\), donc la fonction est **croissante** sur cet intervalle.
- Si \(x > 2\), alors \(f'(x) = -2x + 4 < 0\), donc la fonction est **décroissante** sur cet intervalle.

### 4. Compléter le tableau de variations :

- \(x = 2\) est un point où la dérivée s'annule, donc c'est un point **possible d'un extremum**. Il s'agit d'un **maximum** car la fonction passe de croissante à décroissante.

Le tableau de variations est le suivant :

| $$\(x\)$$       | $$\( -\infty \)$$  | $$2$$       | $$\( +\infty \)$$ |
|-------------|----------------|---------|---------------|
| $$\(f'(x)\)$$   | $$\(+\)$$          | $$0$$       | $$\(-\)$$         |
| $$\(f(x)\)$$    | $$\(\nearrow\)$$   | maximum | $$\(\searrow\)$$  |

Le maximum de \(f(x)\) est en \(x = 2\), et sa valeur est :

$$
f(2) = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1
$$


## Comment interpréter le tableau de variations ? 📈

Le tableau de variations vous permet d’analyser les **comportements de la fonction** sur chaque intervalle :
- Les signes de \(f'(x)\) indiquent les périodes de **croissance** ou de **décroissance**.
- Les points où \(f'(x) = 0\) peuvent être des **extremums locaux** (maximum ou minimum).
- Le signe de \(f(x)\) dans les cases permet de voir si la fonction atteint un **maximum** ou un **minimum** à ces points.


## Conclusion 🌟

- Le **tableau de variations** est un outil très utile pour étudier le comportement d’une fonction.
- Il repose sur l’analyse de la dérivée, qui permet de repérer les intervalles de croissance et de décroissance.
- Les **points critiques** (où la dérivée est nulle) sont souvent des **points d’extremum**.


## Devoirs 📑

1. Tracer le tableau de variations de $$\( f(x) = x^2 + 6x + 5 \)$$.
2. Tracer le tableau de variations de $$\( f(x) = -3x^2 + 6x + 2 \)$$.
3. Lire le chapitre suivant sur les **fonctions trigonométriques**. 📚




