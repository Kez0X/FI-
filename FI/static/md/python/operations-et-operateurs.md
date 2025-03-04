# Cours sur les Opérations et Opérateurs en Python ➗ ➕

En Python, les **opérateurs** sont des symboles utilisés pour effectuer des **opérations** sur des variables et des valeurs. Ce sont des éléments essentiels pour manipuler des données et créer des programmes interactifs. Dans ce cours, nous allons explorer les différents types d'opérateurs en Python, notamment les opérateurs arithmétiques, de comparaison, logiques, et plus encore.

## 1. Les opérateurs arithmétiques ➕ ➖ ✖️ ➗

Les **opérateurs arithmétiques** sont utilisés pour effectuer des calculs mathématiques de base.

### 1.1. **Addition (+)**

L'opérateur **+** permet d'additionner deux valeurs numériques.

**Exemple** :
```python
a = 10
b = 5
resultat = a + b  # 10 + 5 = 15
```

### 1.2. **Soustraction (-)**

L'opérateur **-** permet de soustraire une valeur de l'autre.

**Exemple** :
```python
a = 10
b = 5
resultat = a - b  # 10 - 5 = 5
```

### 1.3. **Multiplication (×)**

L'opérateur **\*** permet de multiplier deux nombres.

**Exemple** :
```python
a = 10
b = 5
resultat = a * b  # 10 × 5 = 50
```

### 1.4. **Division (÷)**

L'opérateur **/** permet de diviser un nombre par un autre et donne un résultat flottant (avec décimales).

**Exemple** :
```python
a = 10
b = 3
resultat = a / b  # 10 ÷ 3 = 3.3333...
```

### 1.5. **Division entière (//)**

L'opérateur **//** effectue une division entière, c'est-à-dire qu'il ne garde que la **partie entière** du quotient (il ignore les décimales).

**Exemple** :
```python
a = 10
b = 3
resultat = a // b  # 10 // 3 = 3
```

### 1.6. **Modulo (%)**

L'opérateur **%** retourne le **reste** d'une division.

**Exemple** :
```python
a = 10
b = 3
resultat = a % b  # 10 % 3 = 1 (reste de la division)
```

### 1.7. **Exposant (**)**
L'opérateur **\*\*** permet de calculer la puissance d'un nombre, c'est-à-dire **a élevé à la puissance b**.

**Exemple** :
```python
a = 2
b = 3
resultat = a ** b  # 2 ** 3 = 8
```

---

## 2. Les opérateurs de comparaison 🔍

Les **opérateurs de comparaison** sont utilisés pour comparer deux valeurs et renvoient un résultat booléen (Vrai ou Faux).

### 2.1. **Égal à (==)**

L'opérateur **==** vérifie si deux valeurs sont égales.

**Exemple** :
```python
a = 10
b = 10
resultat = a == b  # Vrai car 10 est égal à 10
```

### 2.2. **Différent de (!=)**

L'opérateur **!=** vérifie si deux valeurs sont **différentes**.

**Exemple** :
```python
a = 10
b = 5
resultat = a != b  # Vrai car 10 est différent de 5
```

### 2.3. **Plus grand que (>)**

L'opérateur **>** vérifie si la première valeur est **plus grande** que la seconde.

**Exemple** :
```python
a = 10
b = 5
resultat = a > b  # Vrai car 10 est plus grand que 5
```

### 2.4. **Plus petit que (<)**

L'opérateur **<** vérifie si la première valeur est **plus petite** que la seconde.

**Exemple** :
```python
a = 5
b = 10
resultat = a < b  # Vrai car 5 est plus petit que 10
```

### 2.5. **Plus grand ou égal à (>=)**

L'opérateur **>=** vérifie si la première valeur est **plus grande ou égale** à la seconde.

**Exemple** :
```python
a = 10
b = 10
resultat = a >= b  # Vrai car 10 est égal à 10
```

### 2.6. **Plus petit ou égal à (<=)**

L'opérateur **<=** vérifie si la première valeur est **plus petite ou égale** à la seconde.

**Exemple** :
```python
a = 5
b = 10
resultat = a <= b  # Vrai car 5 est plus petit que 10
```

---

## 3. Les opérateurs logiques 🔐

Les **opérateurs logiques** sont utilisés pour combiner des expressions booléennes (True ou False).

### 3.1. **ET logique (and)**

L'opérateur **and** renvoie **True** si **les deux conditions** sont vraies.

**Exemple** :
```python
a = 10
b = 5
resultat = (a > b) and (b < 20)  # True car les deux conditions sont vraies
```

### 3.2. **OU logique (or)**

L'opérateur **or** renvoie **True** si **au moins une des conditions** est vraie.

**Exemple** :
```python
a = 10
b = 5
resultat = (a > b) or (b > 20)  # True car la première condition est vraie
```

### 3.3. **NON logique (not)**

L'opérateur **not** inverse la valeur de vérité d'une condition. Si la condition est vraie, **not** la rend fausse, et vice versa.

**Exemple** :
```python
a = 10
resultat = not (a < 5)  # True car a < 5 est faux, donc not le rend vrai
```

---

## 4. Les opérateurs d'affectation 🔄

Les **opérateurs d'affectation** sont utilisés pour attribuer des valeurs à des variables. L'affectation basique se fait avec `=`, mais il existe aussi des versions raccourcies pour simplifier certaines opérations.

### 4.1. **Affectation (=)**

L'opérateur **=** permet d'assigner une valeur à une variable.

**Exemple** :
```python
a = 10  # La variable a reçoit la valeur 10
```

### 4.2. **Affectation additionnée (+=)**

L'opérateur **+=** additionne une valeur à une variable et affecte le résultat à cette même variable.

**Exemple** :
```python
a = 10
a += 5  # Equivalent à a = a + 5, donc a devient 15
```

### 4.3. **Affectation soustraite (-=)**

L'opérateur **-=** soustrait une valeur de la variable et affecte le résultat à cette même variable.

**Exemple** :
```python
a = 10
a -= 5  # Equivalent à a = a - 5, donc a devient 5
```

### 4.4. **Affectation multipliée (*=)**

L'opérateur ***=** multiplie une variable par une valeur et affecte le résultat à la variable.

**Exemple** :
```python
a = 10
a *= 2  # Equivalent à a = a * 2, donc a devient 20
```

### 4.5. **Affectation divisée (/=)**

L'opérateur **/=** divise une variable par une valeur et affecte le résultat à la variable.

**Exemple** :
```python
a = 10
a /= 2  # Equivalent à a = a / 2, donc a devient 5.0
```

---

## 5. Les opérateurs d'identité et d'appartenance 🔑

### 5.1. **Identité (is)**

L'opérateur **is** vérifie si deux variables font référence au **même objet en mémoire** (ce n'est pas juste la comparaison de valeurs, mais l'emplacement mémoire).

**Exemple** :
```python
a = [1, 2, 3]
b = a
resultat = a is b  # True car a et b font référence au même objet
```

### 5.2. **Appartenance (in)**

L'opérateur **in** vérifie si une valeur fait partie d'une séquence, comme une liste ou une chaîne de caractères.

**Exemple** :
```python
a = [1, 2, 3]
resultat = 2 in a  # True car 2 est dans la liste
```

---

## Conclusion 🎯

Voici un résumé des principaux opérateurs en Python :

| Type d'opérateur      | Opérateur      | Exemple                               |
|-----------------------|----------------|---------------------------------------|
| **Arithmétique**       | `+`, `-`, `*`, `/`, `//`, `%`, `**` | `a + b`, `a // b`                     |
| **Comparaison**        | `==`, `!=`, `>`, `<`, `>=`, `<=` | `a == b`, `a < b`                     |
| **Logique**            | `and`, `or`, `not` | `a and b`, `not a`                   |
| **Affectation**        | `=`, `+=`, `-=`, `*=`, `/=`, `**=` | `a += 5`, `a /= 2`                   |
| **Identité**           | `is`            | `a is b`                              |
| **Appartenance**       | `in`            | `x in [1, 2, 3]`                      |

Les opérateurs sont essentiels pour manipuler les données dans un programme Python. Ils permettent de réaliser des calculs, des comparaisons et des contrôles logiques qui rendent les programmes interactifs et dynamiques.

😊 Ce cours te permet de revoir les fondamentaux de python, cependant cela n'est pas suffisant pour préparer un examen, je te conseille de t'exercer de ton côté afin d'être véritablement prêt et confiant pour ton examen