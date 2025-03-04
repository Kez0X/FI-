# Les Fonctions en Python 🛠️

Une **fonction** est un bloc de code qui peut être réutilisé plusieurs fois dans un programme. Les fonctions permettent de diviser un programme en parties logiques, ce qui facilite la compréhension, le débogage et la maintenance. Elles prennent des **entrées** (appelées **paramètres**), effectuent des opérations et retournent un **résultat** (facultatif).

Les fonctions sont des outils puissants pour rendre ton code modulaire et éviter de répéter le même code à plusieurs endroits.

---

## 1. Définir une fonction en Python 📝

En Python, une fonction est définie à l'aide du mot-clé `def`, suivi du nom de la fonction et des paramètres entre parenthèses. Le bloc de code de la fonction est ensuite indenté.

### 1.1. Syntaxe de base

```python
def nom_de_la_fonction(param1, param2, ...):
    # Code à exécuter
    return résultat
```

- **`def`** : Mot-clé pour définir une fonction.
- **`nom_de_la_fonction`** : Le nom de la fonction, utilisé pour l'appeler plus tard.
- **`param1, param2, ...`** : Les paramètres de la fonction (facultatifs).
- **`return`** : La valeur retournée par la fonction (facultatif).

### 1.2. Exemple simple : fonction sans paramètre

```python
def dire_bonjour():
    print("Bonjour tout le monde !")

# Appel de la fonction
dire_bonjour()
```

Résultat :
```
Bonjour tout le monde !
```

Dans cet exemple, la fonction `dire_bonjour` ne prend aucun paramètre et affiche simplement un message.

---

## 2. Les paramètres de fonction 🎯

Les **paramètres** sont les informations que tu passes à une fonction lorsque tu l'appelles. Ces paramètres peuvent être des valeurs (nombres, chaînes de caractères, etc.) ou des objets complexes (listes, dictionnaires, etc.).

### 2.1. Fonction avec un paramètre

```python
def saluer(nom):
    print(f"Bonjour, {nom} !")

saluer("Alice")
saluer("Bob")
```

Résultat :
```
Bonjour, Alice !
Bonjour, Bob !
```

Ici, `nom` est un paramètre de la fonction. Lors de l'appel, nous passons des valeurs différentes ("Alice", "Bob"), qui sont utilisées dans le corps de la fonction.

### 2.2. Fonction avec plusieurs paramètres

```python
def addition(a, b):
    return a + b

# Appels de la fonction
resultat = addition(5, 3)
print(resultat)
```

Résultat :
```
8
```

Dans cet exemple, la fonction `addition` prend deux paramètres (`a` et `b`), et retourne leur somme.

---

## 3. Valeurs de retour (`return`) 🔙

La commande `return` permet à une fonction de renvoyer une valeur à l'endroit où elle a été appelée. Si aucune valeur n'est spécifiée après `return`, la fonction renvoie `None` par défaut.

### 3.1. Fonction avec une valeur de retour

```python
def multiplier(x, y):
    return x * y

# Appel de la fonction
resultat = multiplier(4, 5)
print(resultat)
```

Résultat :
```
20
```

Ici, la fonction `multiplier` prend deux paramètres et renvoie leur produit. La valeur retournée est ensuite stockée dans la variable `resultat`.

### 3.2. Fonction sans `return`

Si une fonction ne contient pas d'instruction `return`, elle renvoie `None` par défaut.

```python
def afficher_message(message):
    print(message)

resultat = afficher_message("Hello, world!")
print(resultat)  # Affichera 'None' car il n'y a pas de 'return' dans la fonction.
```

Résultat :
```
Hello, world!
None
```

---

## 4. Les paramètres par défaut 🛠️

Les **paramètres par défaut** te permettent d'assigner des valeurs à des paramètres dans la définition de la fonction. Si aucun argument n'est passé lors de l'appel, la valeur par défaut sera utilisée.

### 4.1. Syntaxe des paramètres par défaut

```python
def fonction(param1=valeur_par_defaut, param2=valeur_par_defaut):
    # Code de la fonction
```

### 4.2. Exemple avec un paramètre par défaut

```python
def saluer(nom="Inconnu"):
    print(f"Bonjour, {nom} !")

saluer("Alice")
saluer()  # Utilise la valeur par défaut "Inconnu"
```

Résultat :
```
Bonjour, Alice !
Bonjour, Inconnu !
```

Ici, si aucun argument n'est passé pour `nom`, la valeur par défaut "Inconnu" sera utilisée.

---

## 5. Les arguments arbitraires (`*args` et `**kwargs`) 🎭

Parfois, tu souhaites que ta fonction puisse accepter un nombre variable d'arguments. En Python, cela est possible avec `*args` et `**kwargs`.

### 5.1. `*args` - Arguments positionnels arbitraires

`*args` permet de passer un nombre variable d'arguments **positionnels** à une fonction. Ces arguments sont stockés sous forme de tuple.

**Exemple avec `*args`** :

```python
def somme(*args):
    total = 0
    for nombre in args:
        total += nombre
    return total

# Appel de la fonction avec différents nombres d'arguments
print(somme(1, 2, 3))
print(somme(4, 5, 6, 7, 8))
```

Résultat :
```
6
30
```

Ici, `*args` permet à la fonction de prendre un nombre variable d'arguments et de les additionner.

### 5.2. `**kwargs` - Arguments nommés arbitraires

`**kwargs` permet de passer un nombre variable d'arguments **nommés** (sous forme de dictionnaire). Chaque clé dans le dictionnaire représente un paramètre nommé.

**Exemple avec `**kwargs`** :

```python
def afficher_infos(**kwargs):
    for clé, valeur in kwargs.items():
        print(f"{clé}: {valeur}")

# Appel de la fonction avec des arguments nommés
afficher_infos(nom="Alice", age=25, profession="Ingénieur")
```

Résultat :
```
nom: Alice
age: 25
profession: Ingénieur
```

Ici, `**kwargs` permet de passer des arguments avec des noms différents à chaque appel, et la fonction les affiche.

---

## 6. Fonctions lambda (fonctions anonymes) 🦸‍♂️

Une fonction **lambda** est une fonction anonyme, définie en une seule ligne. Elle est souvent utilisée pour des opérations simples.

### 6.1. Syntaxe de la fonction lambda

```python
lambda arguments: expression
```

### 6.2. Exemple avec une fonction lambda

```python
addition = lambda x, y: x + y
print(addition(5, 3))
```

Résultat :
```
8
```

Les fonctions lambda sont particulièrement utiles lorsque tu veux une fonction simple à utiliser dans une seule ligne, souvent avec des fonctions comme `map()`, `filter()`, ou `sorted()`.

---

## 7. Les fonctions récursives 🔄

Une fonction **récursive** est une fonction qui s'appelle elle-même. Elle est utile pour résoudre des problèmes où la solution dépend de solutions plus petites du même problème.

### 7.1. Exemple de fonction récursive : Factorielle

```python
def factorielle(n):
    if n == 0:
        return 1
    else:
        return n * factorielle(n - 1)

print(factorielle(5))  # Résultat : 120
```

Résultat :
```
120
```

Ici, la fonction `factorielle` s'appelle elle-même jusqu'à ce que `n` soit égal à 0, moment où elle retourne 1.

---

## 8. Conclusion 🚀

Les **fonctions** sont un pilier de la programmation en Python, permettant de structurer et organiser ton code de manière plus efficace et modulaire. Voici un récapitulatif des concepts clés abordés :

- **Définition de fonction** : Utilisation de `def` pour créer des fonctions.
- **Paramètres** : Passer des valeurs à une fonction.
- **Retour (`return`)** : Renvoyer un résultat d'une fonction.
- **Paramètres par défaut** : Fournir des valeurs par défaut aux paramètres.
- **Arguments arbitraires** : Utilisation de `*args` et `**kwargs` pour accepter un nombre variable d'arguments.
- **Fonctions lambda** : Création de fonctions anonymes pour des opérations simples.
- **Récursion** : Appel d'une fonction depuis elle-même pour résoudre des problèmes complexes.

Les fonctions en Python sont extrêmement puissantes et essentielles pour écrire des programmes clairs, réutilisables et bien structurés. N'hésite pas à expérimenter et à utiliser ces concepts pour résoudre des problèmes et structurer ton code ! 😊

😊 Ce cours te permet de revoir les fondamentaux de python, cependant cela n'est pas suffisant pour préparer un examen, je te conseille de t'exercer de ton côté afin d'être véritablement prêt et confiant pour ton examen