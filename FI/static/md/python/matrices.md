# Les Matrices en Python 📐

Les **matrices** sont des tableaux à deux dimensions (ou plus, mais nous nous concentrerons ici sur les matrices bidimensionnelles), où chaque élément est placé à l’intersection de lignes et de colonnes. Elles sont largement utilisées en algèbre linéaire, notamment pour la représentation de systèmes d’équations linéaires, ainsi que dans les calculs scientifiques et les algorithmes de machine learning.



## 1. Qu'est-ce qu'une matrice ? 🧮

Une **matrice** est un tableau rectangulaire constitué de lignes et de colonnes. Les éléments d'une matrice sont organisés de manière régulière sous forme de tableaux à deux dimensions. Par exemple :

```
Matrice 2x3 (2 lignes et 3 colonnes) :
[ [1, 2, 3],
  [4, 5, 6] ]
```

Ici, la matrice a deux lignes et trois colonnes.

### 1.1. Notation des matrices

Les matrices sont souvent notées de la manière suivante :

- Une matrice \( A \) de dimension \( m \times n \) est une matrice avec **m** lignes et **n** colonnes.
- Les éléments de la matrice sont généralement notés \( a_{ij} \), où \( i \) est l'indice de la ligne et \( j \) est l'indice de la colonne.



## 2. Comment créer une matrice en Python ? 📋

### 2.1. Utilisation des listes imbriquées

En Python, une matrice peut être représentée par une **liste de listes**. Chaque sous-liste correspond à une ligne de la matrice. Par exemple :

```python
# Création d'une matrice 2x3
matrice = [
    [1, 2, 3],  # Première ligne
    [4, 5, 6]   # Deuxième ligne
]
```

Ici, la matrice est de taille \( 2 \times 3 \).

### 2.2. Accéder aux éléments d'une matrice

Pour accéder à un élément dans une matrice, tu peux utiliser deux indices : un pour la ligne et un pour la colonne. Les indices commencent à 0.

```python
# Accéder à l'élément de la 1ère ligne, 2ème colonne (élément 2)
print(matrice[0][1])  # Affiche 2

# Accéder à l'élément de la 2ème ligne, 3ème colonne (élément 6)
print(matrice[1][2])  # Affiche 6
```

### 2.3. Modifier un élément dans la matrice

Les matrices en Python sont mutables, donc tu peux facilement modifier un élément à une position donnée.

```python
# Modifier l'élément à la 1ère ligne, 2ème colonne
matrice[0][1] = 20
print(matrice)  # Affiche [[1, 20, 3], [4, 5, 6]]
```



## 3. Utilisation de NumPy pour les matrices 🔢

En Python, nous pouvons utiliser **NumPy**, une bibliothèque mathématique puissante, pour travailler plus facilement avec des matrices et effectuer des calculs plus complexes. **NumPy** fournit un objet spécifique appelé **`array`** qui représente des matrices de manière plus performante que les listes de listes.

### 3.1. Installation de NumPy

Si tu n'as pas encore installé **NumPy**, tu peux l'installer en utilisant **`pip`** :

```bash
pip install numpy
```

### 3.2. Créer une matrice avec NumPy

Une fois NumPy installé, tu peux créer des matrices avec la fonction **`numpy.array()`**. Voici un exemple :

```python
import numpy as np

# Création d'une matrice 2x3 avec NumPy
matrice_np = np.array([[1, 2, 3], [4, 5, 6]])
print(matrice_np)
```

Cela crée une matrice identique à celle qu’on a créée avec des listes imbriquées, mais l'utilisation de **NumPy** permet de réaliser des opérations mathématiques plus facilement et efficacement.



## 4. Opérations sur les matrices 🔄

Avec NumPy, il est facile de réaliser des opérations sur des matrices. Voici quelques opérations de base que tu peux effectuer :

### 4.1. Addition et soustraction de matrices

Pour ajouter ou soustraire deux matrices, elles doivent avoir la même taille. NumPy permet d’effectuer ces opérations de manière simple.

```python
matrice_A = np.array([[1, 2], [3, 4]])
matrice_B = np.array([[5, 6], [7, 8]])

# Addition
resultat_addition = matrice_A + matrice_B
print(resultat_addition)  # Affiche [[ 6  8]
                          #          [10 12]]

# Soustraction
resultat_soustraction = matrice_A - matrice_B
print(resultat_soustraction)  # Affiche [[-4 -4]
                              #          [-4 -4]]
```

### 4.2. Multiplication de matrices

La multiplication de matrices est un peu plus complexe, mais NumPy fournit une fonction appelée **`np.dot()`** pour effectuer la multiplication matricielle.

```python
matrice_A = np.array([[1, 2], [3, 4]])
matrice_B = np.array([[5, 6], [7, 8]])

# Multiplication matricielle
resultat_multiplication = np.dot(matrice_A, matrice_B)
print(resultat_multiplication)  # Affiche [[19 22]
                                #          [43 50]]
```

### 4.3. Multiplication élément par élément

Si tu veux multiplier les éléments correspondants de deux matrices, tu peux utiliser l’opérateur `*`, ce qui effectue une multiplication élément par élément (aussi appelée produit Hadamard).

```python
matrice_A = np.array([[1, 2], [3, 4]])
matrice_B = np.array([[5, 6], [7, 8]])

# Multiplication élément par élément
resultat_element_par_element = matrice_A * matrice_B
print(resultat_element_par_element)  # Affiche [[ 5 12]
                                      #          [21 32]]
```

### 4.4. Transposition d'une matrice

La **transposition** d'une matrice consiste à échanger ses lignes et ses colonnes. En NumPy, tu peux utiliser **`np.transpose()`** ou simplement **`.T`** pour obtenir la transposée.

```python
matrice = np.array([[1, 2, 3], [4, 5, 6]])

# Transposition de la matrice
matrice_transposee = np.transpose(matrice)
print(matrice_transposee)  # Affiche [[1 4]
                           #          [2 5]
                           #          [3 6]]

# Ou en utilisant la syntaxe plus courte :
matrice_transposee = matrice.T
print(matrice_transposee)  # Affiche [[1 4]
                           #          [2 5]
                           #          [3 6]]
```



## 5. Matrices spéciales 🛠️

En plus de la création de matrices à partir de listes, NumPy propose plusieurs fonctions pour créer des matrices spéciales, comme des matrices de zéros, de uns, ou des matrices d'identité.

### 5.1. Matrice de zéros

```python
matrice_zero = np.zeros((2, 3))  # Crée une matrice 2x3 remplie de zéros
print(matrice_zero)  # Affiche [[0. 0. 0.]
                     #          [0. 0. 0.]]
```

### 5.2. Matrice de uns

```python
matrice_un = np.ones((3, 3))  # Crée une matrice 3x3 remplie de uns
print(matrice_un)  # Affiche [[1. 1. 1.]
                   #          [1. 1. 1.]
                   #          [1. 1. 1.]]
```

### 5.3. Matrice d'identité

La **matrice d'identité** est une matrice carrée où tous les éléments de la diagonale principale sont égaux à 1 et les autres éléments sont égaux à 0.

```python
matrice_identite = np.eye(3)  # Crée une matrice 3x3 d'identité
print(matrice_identite)  # Affiche [[1. 0. 0.]
                          #          [0. 1. 0.]
                          #          [0. 0. 1.]]
```



## 6. Conclusion 🎯

Les **matrices** sont des structures de données essentielles pour travailler avec des données multidimensionnelles et réaliser des calculs mathématiques complexes. En Python, tu peux créer et manipuler des matrices facilement avec les **listes imbriquées** ou utiliser **NumPy** pour des calculs plus rapides et plus efficaces.

### Points clés :
- Une **matrice** est un tableau à deux dimensions (lignes et colonnes).
- Tu peux utiliser des **listes imbriquées** ou **NumPy** pour travailler avec des matrices.
- NumPy facilite les opérations matricielles comme l'addition, la multiplication, la transposition, etc.
- **NumPy** offre des fonctions pour créer des matrices spéciales comme les matrices de zéros, de uns, et les matrices d'identité.