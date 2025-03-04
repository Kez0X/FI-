# Les Types de Données en Python 📊

Python est un langage dynamique, ce qui signifie qu'il gère automatiquement les types de données de manière flexible. Lorsque tu écris du code Python, il est important de comprendre les différents **types de données** que tu peux utiliser pour manipuler des informations.

## 1. Types de données de base en Python 🧱

### 1.1. **Les nombres (int, float) 🔢**

Les nombres sont des valeurs numériques utilisées pour les calculs.

- **int** : C'est pour les **nombres entiers**, c'est-à-dire les nombres sans décimales, positifs ou négatifs. Par exemple : `5`, `-3`, `42`.
  
  **Exemple** :
  ```python
  age = 25  # Un entier
  ```

- **float** : C'est pour les **nombres à virgule flottante**, c'est-à-dire les nombres avec des décimales. Par exemple : `3.14`, `-0.001`, `2.0`.

  **Exemple** :
  ```python
  prix = 19.99  # Un nombre avec des décimales
  ```

#### Conversion entre `int` et `float` :
Tu peux facilement convertir un `int` en `float`, et vice versa, avec les fonctions `float()` et `int()`.

**Exemple** :
```python
x = 10       # Un entier
y = float(x) # Conversion en float : 10.0
```

### 1.2. **Les chaînes de caractères (str) 📚**

Une **chaîne de caractères** (ou **string**) est une séquence de lettres, de chiffres, ou d'autres symboles, entre guillemets (simples ou doubles). C'est le type de donnée utilisé pour représenter du texte.

- **str** : C'est pour les chaînes de texte. Exemple : `"Bonjour"`, `"123"`, `"Python est génial !"`.
  
  **Exemple** :
  ```python
  message = "Bonjour tout le monde !"  # Une chaîne de caractères
  ```

#### Concatenation de chaînes :
Tu peux assembler (concaténer) plusieurs chaînes en les utilisant avec l'opérateur `+`.

**Exemple** :
```python
prenom = "Alice"
salutation = "Bonjour " + prenom  # "Bonjour Alice"
```

### 1.3. **Les booléens (bool) ✅❌**

Les **booléens** sont utilisés pour représenter des valeurs de vérité, c'est-à-dire **Vrai** ou **Faux**.

- **True** : La valeur **Vraie**.
- **False** : La valeur **Fausse**.

Les booléens sont souvent utilisés pour les **conditions** dans les programmes.

**Exemple** :
```python
est_adulte = True  # Une variable booléenne
```

#### Utilisation des booléens :
Tu peux comparer des valeurs pour obtenir un résultat booléen. Par exemple :
```python
age = 18
est_adulte = age >= 18  # Vrai si l'âge est supérieur ou égal à 18
```

### 1.4. **Les listes (list) 📋**

Les **listes** sont des collections ordonnées d'éléments. Une liste peut contenir plusieurs types de données, comme des entiers, des chaînes de caractères ou d'autres listes.

- **list** : Une collection d'éléments, entre crochets `[]`, séparés par des virgules.

**Exemple** :
```python
fruits = ["pomme", "banane", "orange"]
```

#### Accès aux éléments d'une liste :
Tu peux accéder à chaque élément de la liste en utilisant un **index** (numéro d'emplacement). Les indices commencent à **0**.

**Exemple** :
```python
print(fruits[0])  # Affiche "pomme" (l'élément à l'index 0)
```

### 1.5. **Les tuples (tuple) 🔗**

Les **tuples** sont similaires aux listes, mais avec une différence importante : ils sont **immuables**, c'est-à-dire qu'une fois créés, tu ne peux pas modifier leurs éléments.

- **tuple** : Une collection ordonnée d'éléments, mais avec des parenthèses `()`.

**Exemple** :
```python
coordonnees = (10.5, 20.7)  # Un tuple avec deux nombres
```

#### Pourquoi utiliser un tuple ?
Si tu as des données que tu ne veux pas modifier, un tuple est utile pour garantir qu'elles resteront inchangées.

### 1.6. **Les ensembles (set) 🛠️**

Les **ensembles** sont des collections non ordonnées d'éléments uniques. Cela signifie que chaque élément dans un ensemble doit être unique, et l'ordre des éléments n'est pas garanti.

- **set** : Une collection d'éléments uniques, entre accolades `{}`.

**Exemple** :
```python
couleurs = {"rouge", "vert", "bleu"}  # Un ensemble de couleurs
```

#### Opérations sur les ensembles :
Tu peux ajouter, supprimer ou tester l'appartenance d'éléments dans un ensemble. 

**Exemple** :
```python
couleurs.add("jaune")  # Ajoute "jaune" à l'ensemble
print("rouge" in couleurs)  # Vérifie si "rouge" est dans l'ensemble (affiche True)
```

### 1.7. **Les dictionnaires (dict) 📚🔑**

Un **dictionnaire** est une collection de paires **clé-valeur**. C'est comme un annuaire où chaque nom (clé) est associé à un numéro de téléphone (valeur).

- **dict** : Une collection de paires **clé-valeur**, entre accolades `{}`. Chaque paire est séparée par `:`.

**Exemple** :
```python
personne = {"nom": "Alice", "age": 30, "ville": "Paris"}
```

#### Accès aux valeurs d'un dictionnaire :
Tu accèdes aux valeurs en utilisant la **clé** correspondante.

**Exemple** :
```python
print(personne["nom"])  # Affiche "Alice"
```

## 2. Types de données avancés 📈

### 2.1. **Les objets (Object) 🧩**

En Python, presque tout est un **objet**. Un objet peut être une instance d'une classe, et chaque objet a des propriétés (appelées **attributs**) et des comportements (appelés **méthodes**).

- Les objets sont utilisés dans la **programmation orientée objet (POO)** pour modéliser des entités du monde réel (par exemple, une voiture, un étudiant, etc.).

**Exemple** (en utilisant une classe) :
```python
class Voiture:
    def __init__(self, marque, modele):
        self.marque = marque
        self.modele = modele

    def afficher_details(self):
        print(f"{self.marque} {self.modele}")

ma_voiture = Voiture("Toyota", "Corolla")
ma_voiture.afficher_details()  # Affiche "Toyota Corolla"
```

### 2.2. **Les types spéciaux `None` 🤷‍♂️**

Le type spécial **None** est utilisé pour représenter l'absence de valeur ou une valeur inconnue.

- **None** : Cela signifie qu'une variable ou une fonction ne contient pas de valeur.

**Exemple** :
```python
resultat = None  # La variable "resultat" n'a pas encore de valeur
```

---

## 3. Résumé des principaux types de données en Python 📚

| Type         | Description                                    | Exemple                    |
|--------------|------------------------------------------------|----------------------------|
| `int`        | Nombre entier sans décimale                    | `5`, `-3`, `42`            |
| `float`      | Nombre avec décimales                          | `3.14`, `-0.001`, `2.0`    |
| `str`        | Chaîne de caractères (texte)                   | `"Python"`, `"Hello"`      |
| `bool`       | Valeurs de vérité (True ou False)              | `True`, `False`            |
| `list`       | Liste ordonnée d'éléments                      | `[1, 2, 3]`, `["a", "b"]`  |
| `tuple`      | Liste immuable                                 | `(1, 2, 3)`, `("a", "b")`  |
| `set`        | Ensemble d'éléments uniques                    | `{"a", "b", "c"}`           |
| `dict`       | Dictionnaire de paires clé-valeur              | `{"nom": "Alice", "age": 25}` |
| `None`       | Absence de valeur                              | `None`                     |

😊 Ce cours te permet de revoir les fondamentaux de python, cependant cela n'est pas suffisant pour préparer un examen, je te conseille de t'exercer de ton côté afin d'être véritablement prêt et confiant pour ton examen