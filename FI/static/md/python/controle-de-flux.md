# Le Contrôle de Flux : Les Conditions en Python 🔐

Les **conditions** sont des instructions qui permettent de tester si une certaine situation est vraie ou fausse, et en fonction de ce test, effectuer des actions différentes. Elles permettent de rendre ton programme plus dynamique et interactif, selon l'état des données ou l'entrée de l'utilisateur.

En Python, les conditions sont définies principalement avec l'instruction **`if`**, mais tu peux aussi utiliser **`elif`** (else if) et **`else`** pour créer des chaînes d'alternatives.


## 1. La structure de base des conditions en Python 🏗️

La structure la plus simple d'une condition en Python utilise l'instruction **`if`** pour tester une condition, suivie d'un bloc de code à exécuter si la condition est vraie.

### 1.1. Syntaxe de base

La syntaxe de base est la suivante :

```python
if condition:
    # Code à exécuter si la condition est vraie
```

**Exemple :**

```python
age = 18

if age >= 18:
    print("Tu es majeur !")
```

Résultat :
```
Tu es majeur !
```

Dans cet exemple, si la variable `age` est supérieure ou égale à 18, le message "Tu es majeur !" sera affiché.


## 2. L'instruction `else` - Si la condition est fausse ⚠️

Si la condition spécifiée par `if` est **fausse**, tu peux spécifier un bloc de code alternatif avec l'instruction **`else`**. Cela permet de définir ce qui se passe lorsque la condition n'est pas remplie.

### 2.1. Syntaxe de `else`

```python
if condition:
    # Code si la condition est vraie
else:
    # Code si la condition est fausse
```

**Exemple :**

```python
age = 16

if age >= 18:
    print("Tu es majeur !")
else:
    print("Tu es mineur !")
```

Résultat :
```
Tu es mineur !
```

Ici, comme l'âge est inférieur à 18, le programme exécute le bloc de code dans `else`, affichant "Tu es mineur !".


## 3. L'instruction `elif` - Tester plusieurs conditions 🔄

L'instruction **`elif`** (qui signifie "else if" en anglais) permet de tester plusieurs conditions, l'une après l'autre, et d'exécuter un bloc de code pour la première condition vraie. Si aucune des conditions n'est vraie, tu peux aussi spécifier un bloc `else` à la fin.

### 3.1. Syntaxe de `elif`

```python
if condition1:
    # Code si condition1 est vraie
elif condition2:
    # Code si condition2 est vraie
else:
    # Code si aucune des conditions n'est vraie
```

**Exemple :**

```python
age = 20

if age < 18:
    print("Tu es mineur !")
elif age == 18:
    print("Tu viens juste d'avoir 18 ans !")
else:
    print("Tu es majeur !")
```

Résultat :
```
Tu es majeur !
```

Dans cet exemple :
- Si l'âge est inférieur à 18, le message "Tu es mineur !" est affiché.
- Si l'âge est exactement égal à 18, "Tu viens juste d'avoir 18 ans !" est affiché.
- Sinon, c'est que l'âge est supérieur à 18, et "Tu es majeur !" est affiché.


## 4. Les Comparateurs (Opérateurs de comparaison) 🔍

Les conditions en Python sont souvent utilisées avec des **opérateurs de comparaison**, qui comparent des valeurs pour renvoyer **`True`** (vrai) ou **`False`** (faux). Voici les principaux opérateurs de comparaison utilisés en Python :

| Opérateur | Signification                 | Exemple                |
|-----------|-------------------------------|------------------------|
| `==`      | Égal à                        | `x == y`               |
| `!=`      | Différent de                   | `x != y`               |
| `>`       | Strictement supérieur à        | `x > y`                |
| `<`       | Strictement inférieur à        | `x < y`                |
| `>=`      | Supérieur ou égal à            | `x >= y`               |
| `<=`      | Inférieur ou égal à            | `x <= y`               |

**Exemple avec des comparateurs :**

```python
x = 10
y = 5

if x > y:
    print("x est plus grand que y")
else:
    print("x n'est pas plus grand que y")
```

Résultat :
```
x est plus grand que y
```


## 5. Les Booléens et les Conditions Composées 📊

Les conditions peuvent aussi être **composées** à l'aide des opérateurs **logiques**. Cela permet de combiner plusieurs conditions dans un seul test.

### 5.1. Les opérateurs logiques

Les opérateurs logiques en Python sont :

- **`and`** : La condition est vraie si **les deux conditions sont vraies**.
- **`or`** : La condition est vraie si **au moins une des conditions est vraie**.
- **`not`** : Inverse la valeur d'une condition (si vraie, devient fausse, et inversement).

#### Exemple avec `and` :
```python
age = 20
salaire = 1500

if age >= 18 and salaire >= 1200:
    print("Tu es éligible pour un prêt bancaire.")
else:
    print("Tu n'es pas éligible pour un prêt bancaire.")
```

Résultat :
```
Tu es éligible pour un prêt bancaire.
```

#### Exemple avec `or` :
```python
temps = 25  # en degrés Celsius
pluie = False

if temps > 20 or pluie:
    print("Il fait beau dehors !")
else:
    print("Il pleut ou il fait froid.")
```

Résultat :
```
Il fait beau dehors !
```

#### Exemple avec `not` :
```python
a = True
b = False

if not a:
    print("a est faux")
else:
    print("a est vrai")
```

Résultat :
```
a est vrai
```


## 6. Conditions sur des objets et des collections 📋

Les conditions en Python peuvent également être utilisées sur des objets, des listes, des chaînes de caractères, ou d'autres collections. Python fournit des fonctions pratiques pour vérifier si un objet ou une collection remplit certaines conditions.

### 6.1. Vérifier si une liste est vide

```python
liste = []

if not liste:
    print("La liste est vide.")
else:
    print("La liste contient des éléments.")
```

Résultat :
```
La liste est vide.
```

### 6.2. Vérifier si un élément appartient à une liste

```python
fruits = ["pomme", "banane", "orange"]

if "pomme" in fruits:
    print("La pomme est dans la liste des fruits.")
else:
    print("La pomme n'est pas dans la liste des fruits.")
```

Résultat :
```
La pomme est dans la liste des fruits.
```

### 6.3. Vérifier si une clé existe dans un dictionnaire

```python
dico = {"nom": "Alice", "age": 25}

if "age" in dico:
    print("L'âge est une clé dans le dictionnaire.")
else:
    print("L'âge n'est pas une clé dans le dictionnaire.")
```

Résultat :
```
L'âge est une clé dans le dictionnaire.
```


## 7. Conclusion 🚀

Les conditions en Python sont essentielles pour créer des programmes interactifs et dynamiques. Elles permettent de tester des expressions et de prendre des décisions selon que ces expressions soient vraies ou fausses. Voici les points clés à retenir :

- **`if`** : Pour tester une condition.
- **`else`** : Pour définir un comportement alternatif si la condition est fausse.
- **`elif`** : Pour tester plusieurs conditions successivement.
- **Opérateurs de comparaison** : Pour comparer des valeurs (comme `==`, `>`, `<`, etc.).
- **Opérateurs logiques** : Pour combiner plusieurs conditions (`and`, `or`, `not`).
- **Conditions sur les objets et les collections** : Utilisation de `in` et vérification de l'existence de clés ou d'éléments.

Les conditions sont une base fondamentale pour contrôler le comportement de ton programme. En maîtrisant bien ces concepts, tu pourras écrire des programmes Python plus flexibles et puissants. 😊

😊 Ce cours te permet de revoir les fondamentaux de python, cependant cela n'est pas suffisant pour préparer un examen, je te conseille de t'exercer de ton côté afin d'être véritablement prêt et confiant pour ton examen