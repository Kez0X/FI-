# Les Boucles en Python 🔄

Les boucles en Python sont essentielles pour répéter un bloc de code plusieurs fois de manière efficace. Elles sont principalement utilisées dans deux cas :
1. **Lorsque tu connais à l'avance le nombre d'itérations** (par exemple, itérer sur une liste).
2. **Lorsque tu veux répéter une action tant qu'une condition est vraie** (par exemple, lire un fichier jusqu'à la fin).

En Python, tu as principalement deux types de boucles :
- La boucle **`for`**.
- La boucle **`while`**.

Nous allons nous concentrer sur la boucle `for`, qui est plus couramment utilisée dans Python, et examiner tous ses cas d'utilisation possibles.

---

## 1. La Boucle `for` 🌐

La boucle `for` en Python est utilisée pour **itérer sur des objets itérables**, comme des listes, des chaînes de caractères, des dictionnaires, des ensembles, des plages de nombres, etc. Contrairement à d'autres langages de programmation, Python ne nécessite pas de spécifier le nombre d'itérations, ce qui rend les boucles très flexibles.

### 1.1. La Syntaxe de Base

La syntaxe générale de la boucle `for` est la suivante :
```python
for variable in sequence:
    # Code à exécuter pour chaque élément de la séquence
```
Ici, `sequence` représente l'objet sur lequel on souhaite itérer, et `variable` prend successivement chaque valeur de la séquence. À chaque itération, le bloc de code dans la boucle est exécuté.

**Exemple de base** :
```python
for i in [1, 2, 3, 4, 5]:
    print(i)
```
Résultat :
```
1
2
3
4
5
```

### 1.2. Boucle `for` avec `range()`

La fonction `range()` génère une séquence de nombres, que l'on peut utiliser pour contrôler le nombre d'itérations d'une boucle `for`. `range()` est souvent utilisée pour itérer sur une plage de valeurs numériques de manière simple.

#### Syntaxe de `range()` :
```python
range(start, stop, step)
```
- **`start`** : La valeur de départ de la séquence (par défaut à 0).
- **`stop`** : La valeur de fin (exclus).
- **`step`** : L'incrément entre chaque valeur (par défaut à 1).

**Exemple : itérer de 0 à 4**
```python
for i in range(5):  # De 0 à 4 (5 exclus)
    print(i)
```
Résultat :
```
0
1
2
3
4
```

**Exemple : itérer de 1 à 9 avec un pas de 2**
```python
for i in range(1, 10, 2):  # De 1 à 9 avec un pas de 2
    print(i)
```
Résultat :
```
1
3
5
7
9
```

### 1.3. Boucle `for` sur des chaînes de caractères (itérer sur les lettres) ✍️

Les chaînes de caractères en Python sont également des objets itérables, ce qui signifie que tu peux utiliser une boucle `for` pour itérer sur chaque caractère d'une chaîne.

**Exemple : itérer sur chaque lettre d'un mot**
```python
mot = "Bonjour"
for lettre in mot:
    print(lettre)
```
Résultat :
```
B
o
n
j
o
u
r
```

### 1.4. Boucle `for` sur des dictionnaires (itérer sur les clés et les valeurs) 📚

Les dictionnaires (dict) en Python sont des structures de données qui associent des clés à des valeurs. Tu peux itérer sur un dictionnaire de différentes manières :
- Itérer sur les **clés** du dictionnaire.
- Itérer sur les **valeurs**.
- Itérer sur les **paires clé-valeur**.

#### Exemple 1 : itérer sur les clés
```python
dico = {"a": 1, "b": 2, "c": 3}
for clé in dico:
    print(clé)
```
Résultat :
```
a
b
c
```

#### Exemple 2 : itérer sur les valeurs
```python
dico = {"a": 1, "b": 2, "c": 3}
for valeur in dico.values():
    print(valeur)
```
Résultat :
```
1
2
3
```

#### Exemple 3 : itérer sur les clés et les valeurs
```python
dico = {"a": 1, "b": 2, "c": 3}
for clé, valeur in dico.items():
    print(f"Clé : {clé}, Valeur : {valeur}")
```
Résultat :
```
Clé : a, Valeur : 1
Clé : b, Valeur : 2
Clé : c, Valeur : 3
```

### 1.5. Boucle `for` avec des ensembles (sets) 🔢

Les **ensembles** en Python sont des collections non ordonnées d'éléments uniques. Tu peux aussi itérer sur les éléments d'un ensemble.

**Exemple** :
```python
ensemble = {10, 20, 30, 40}
for nombre in ensemble:
    print(nombre)
```
Résultat :
```
10
20
30
40
```
(Note : les ensembles étant non ordonnés, l'ordre des éléments peut varier.)

---

## 2. La Boucle `while` ⏳

La boucle `while` répète un bloc de code tant qu'une condition est **vraie**. La condition est testée avant chaque itération. Si la condition est **fausse** dès le départ, le bloc de code à l'intérieur de la boucle ne sera jamais exécuté.

### 2.1. Syntaxe de la Boucle `while`
```python
while condition:
    # Code à exécuter tant que la condition est vraie
```

### 2.2. Exemple de Boucle `while`
```python
compteur = 0
while compteur < 5:
    print(compteur)
    compteur += 1  # Incrémente le compteur à chaque itération
```
Résultat :
```
0
1
2
3
4
```

La condition est vérifiée avant chaque itération. Si le compteur devient supérieur ou égal à 5, la boucle se termine.

---

## 3. Le Contrôle de Flux dans les Boucles 🚦

### 3.1. `break` : Quitter la Boucle

L'instruction `break` permet de sortir immédiatement de la boucle, peu importe l'état de la condition.

**Exemple** :
```python
for i in range(10):
    if i == 5:
        break  # Quitte la boucle dès que i est égal à 5
    print(i)
```
Résultat :
```
0
1
2
3
4
```
Ici, la boucle s'arrête dès que `i` atteint 5.

### 3.2. `continue` : Passer à l'Itération Suivante

L'instruction `continue` permet de sauter le reste du code dans l'itération en cours et de passer à l'itération suivante.

**Exemple** :
```python
for i in range(5):
    if i == 3:
        continue  # Ignore l'affichage de 3
    print(i)
```
Résultat :
```
0
1
2
4
```
Ici, l'itération où `i` vaut 3 est ignorée, et la boucle continue avec les autres valeurs.

### 3.3. `pass` : Ne Rien Faire

L'instruction `pass` permet d'ignorer une itération ou de laisser une structure vide sans erreur.

**Exemple** :
```python
for i in range(5):
    if i == 3:
        pass  # Ne fait rien quand i est égal à 3
    else:
        print(i)
```
Résultat :
```
0
1
2
4
```
Ici, la boucle se comporte comme si rien n'était fait lorsque `i` vaut 3.

---

## Conclusion 🚀

Les boucles en Python sont extrêmement puissantes et flexibles. En utilisant les boucles `for` et `while`, tu peux répéter des actions de manière efficace, et en les combinant avec les structures de contrôle de flux comme `break`, `continue`, et `pass`, tu peux gérer des cas très complexes.

Voici un résumé des différents types de boucles et de leurs utilisations :

| Type de Boucle               | Description                                                           | Exemple                                 |
|------------------------------|-----------------------------------------------------------------------|-----------------------------------------|
| **`for i in range(start, stop, step)`** | Itère sur une séquence de nombres générée par `range()`             | `for i in range(1, 5):`                 |
| **`for item in sequence`**    | Itère sur les éléments d'une séquence (liste, chaîne, etc.)          | `for lettre in "Bonjour":`              |
| **`for clé in dict`**         | Itère sur les clés d'un dictionnaire                                  | `for clé in mon_dico:`                  |
| **`for clé, valeur in dict.items()`** | Itère sur les paires clé-valeur d'un dictionnaire                     | `for clé, valeur in mon_dico.items():`  |
| **`while condition`**         | Répète un bloc tant que la condition est vraie                        | `while x < 10:`                         |
| **`break`**                   | Quitte immédiatement la boucle                                        | `break`                                 |
| **`continue`**                | Passe à l'itération suivante sans exécuter le code restant            | `continue`                              |
| **`pass`**                    | Ne fait rien, utile pour des structures vides ou incomplètes          | `pass`                                  |

Les boucles permettent de réaliser des traitements complexes avec des données, et en maîtrisant les différentes manières de les utiliser, tu seras capable d'écrire des programmes Python puissants et efficaces ! 😊

😊 Ce cours te permet de revoir les fondamentaux de python, cependant cela n'est pas suffisant pour préparer un examen, je te conseille de t'exercer de ton côté afin d'être véritablement prêt et confiant pour ton examen