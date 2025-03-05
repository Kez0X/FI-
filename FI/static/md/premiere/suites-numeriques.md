
# Leçon : Suites numériques 🧮

## Objectifs 🎯 :
- Comprendre la notion de suite numérique.
- Savoir définir une suite par récurrence.
- Résoudre des exercices sur les suites arithmétiques et géométriques.
- Appliquer les formules des suites arithmétiques et géométriques pour calculer des termes.



## Qu'est-ce qu'une suite numérique ? 🤔

Une **suite numérique** est une suite ordonnée de nombres réels, souvent notée \( (u_n) \), où chaque terme de la suite est associé à un indice \(n\) appelé **rang**.  
Les suites peuvent être définies de différentes manières : par une **formule explicite**, ou par **récurrence**.

Exemple :  
La suite $$\( (u_n) \)$$ définie par $$\( u_1 = 2 \)$$ et $$\( u_{n+1} = u_n + 3 \)$$ est une suite définie par récurrence.



## Définition de la suite par récurrence 🔄

Une suite peut être définie **par récurrence** lorsque le terme suivant dépend du terme précédent. La définition est donc donnée sous forme de relation de récurrence.

### Forme générale :

- $$\( u_1 = a_1 \)$$ (premier terme donné),
- $$\( u_{n+1} = f(u_n) \)$$ pour $$\( n \geq 1 \)$$.

Exemple :  
Soit $$\( u_1 = 2 \)$$ et $$\( u_{n+1} = u_n + 3 \)$$.  
- $$\( u_1 = 2 \)$$,  
- $$\( u_2 = u_1 + 3 = 2 + 3 = 5 \)$$,  
- $$\( u_3 = u_2 + 3 = 5 + 3 = 8 \)$$,  
et ainsi de suite.



## Suites arithmétiques ✏️

Une **suite arithmétique** est une suite dans laquelle la différence entre deux termes consécutifs est constante. Cette différence est appelée **raison** de la suite.

### Formule générale d'une suite arithmétique :
Si \( u_n \) est une suite arithmétique de raison \( r \) et de premier terme \( u_1 \), alors :

$$
u_n = u_1 + (n-1) \cdot r
$$

### Exemple de suite arithmétique :
Soit la suite \( u_1 = 3 \) et \( r = 5 \), donc la suite est définie par :

- \( u_1 = 3 \),
- \( u_2 = u_1 + 5 = 3 + 5 = 8 \),
- \( u_3 = u_2 + 5 = 8 + 5 = 13 \),  
- \( u_4 = u_3 + 5 = 13 + 5 = 18 \),  
et ainsi de suite.

La suite est donc : \( 3, 8, 13, 18, \dots \)

### Graphique d'une suite arithmétique 📊

Voici la représentation graphique d'une suite arithmétique (en Python, ou à intégrer dans un outil Markdown compatible avec des graphiques comme Jupyter Notebooks) :

```python
import matplotlib.pyplot as plt
import numpy as np

# Paramètres de la suite
u1 = 3  # Premier terme
r = 5   # Raison
n = np.arange(1, 11)  # Indices n de 1 à 10
u_n = u1 + (n - 1) * r  # Calcul des termes de la suite

# Création du graphique
plt.plot(n, u_n, marker='o', color='b', label="Suite arithmétique")
plt.title("Suite arithmétique: $u_n = u_1 + (n-1) \\cdot r$")
plt.xlabel("n (Indice)")
plt.ylabel("u_n (Terme de la suite)")
plt.grid(True)
plt.legend()
plt.show()
```



## Suites géométriques 🌐

Une **suite géométrique** est une suite dans laquelle chaque terme est obtenu en multipliant le terme précédent par une constante appelée **raison**.

### Formule générale d'une suite géométrique :
Si \( u_n \) est une suite géométrique de raison \( q \) et de premier terme \( u_1 \), alors :

$$
u_n = u_1 \cdot q^{n-1}
$$

### Exemple de suite géométrique :
Soit la suite $$\( u_1 = 2 \)$$ et $$\( q = 3 \)$$, donc la suite est définie par :

- $$\( u_1 = 2 \)$$,
- $$\( u_2 = u_1 \cdot 3 = 2 \cdot 3 = 6 \)$$,
- $$\( u_3 = u_2 \cdot 3 = 6 \cdot 3 = 18 \)$$,  
- $$\( u_4 = u_3 \cdot 3 = 18 \cdot 3 = 54 \)$$,  
et ainsi de suite.

La suite est donc : \( 2, 6, 18, 54, \dots \)

### Graphique d'une suite géométrique 📊

Voici la représentation graphique d'une suite géométrique :

```python
# Paramètres de la suite
u1 = 2  # Premier terme
q = 3   # Raison
n = np.arange(1, 11)  # Indices n de 1 à 10
u_n = u1 * q**(n - 1)  # Calcul des termes de la suite

# Création du graphique
plt.plot(n, u_n, marker='o', color='r', label="Suite géométrique")
plt.title("Suite géométrique: $u_n = u_1 \\cdot q^{n-1}$")
plt.xlabel("n (Indice)")
plt.ylabel("u_n (Terme de la suite)")
plt.grid(True)
plt.legend()
plt.show()
```



## Applications des suites 🧑‍🏫

### 1. **Calcul d'un terme d'une suite arithmétique** 🧮

Exercice :  
Dans la suite arithmétique \( u_1 = 4 \) et \( r = 6 \), quel est le terme \( u_6 \) ?

Solution :  
Utilisons la formule :

$$
u_n = u_1 + (n-1) \cdot r
$$

Pour \( n = 6 \) :

$$
u_6 = 4 + (6-1) \cdot 6 = 4 + 5 \cdot 6 = 4 + 30 = 34
$$

Donc, \( u_6 = 34 \).

### 2. **Calcul d'un terme d'une suite géométrique** 🔢

Exercice :  
Dans la suite géométrique \( u_1 = 1 \) et \( q = 2 \), quel est le terme \( u_5 \) ?

Solution :  
Utilisons la formule :

$$
u_n = u_1 \cdot q^{n-1}
$$

Pour \( n = 5 \) :

$$
u_5 = 1 \cdot 2^{5-1} = 1 \cdot 2^4 = 1 \cdot 16 = 16
$$

Donc, \( u_5 = 16 \).



## Conclusion 🌟

- Une **suite arithmétique** a une raison constante, et son terme général est donné par la formule \( u_n = u_1 + (n-1) \cdot r \).
- Une **suite géométrique** a une raison constante multiplicative, et son terme général est donné par la formule \( u_n = u_1 \cdot q^{n-1} \).
- Il est important de bien comprendre la différence entre ces deux types de suites pour résoudre correctement les exercices.



## Devoirs 📑

1. Résoudre l'exercice suivant :  
   Soit la suite arithmétique définie par \( u_1 = 7 \) et \( r = 4 \). Calculer \( u_8 \).

2. Résoudre l'exercice suivant :  
   Soit la suite géométrique définie par \( u_1 = 3 \) et \( q = 2 \). Calculer \( u_6 \).

3. Lire le chapitre suivant sur les **polynômes du second degré**. 📚

### Explications supplémentaires :
- **Graphiques** : Les graphes des suites arithmétiques et géométriques sont générés à l'aide de Python et de la bibliothèque `matplotlib`. Ces graphes illustrent bien la progression linéaire des suites arithmétiques et la croissance exponentielle des suites géométriques.
- **Formules** : J'ai encadré les formules en LaTeX avec des `$$` pour qu'elles soient bien formatées.
