
# Leçon : Fonctions basiques en Python 🐍

## Objectifs 🎯 :
- Comprendre le concept de fonction en Python.
- Apprendre à définir et utiliser des fonctions basiques.
- Manipuler des paramètres, des arguments et des valeurs de retour dans une fonction.



## 1. Qu'est-ce qu'une fonction ? 📚

En programmation, une **fonction** est un bloc de code qui effectue une tâche spécifique. Une fonction permet de regrouper des instructions sous un même nom et de les réutiliser plusieurs fois. Elle prend généralement des **paramètres** en entrée et peut renvoyer une **valeur** en sortie.

### 1.1. Structure de base d'une fonction
Une fonction en Python est définie avec le mot-clé **`def`**, suivi du nom de la fonction, des parenthèses (qui peuvent contenir des paramètres), et du **deux-points**. Le corps de la fonction suit, et est indenté.

```python
def ma_fonction():
    # Instructions à exécuter
    print("Bonjour tout le monde !")
```



## 2. Définir une fonction simple 🛠️

### 2.1. Exemple de fonction sans paramètres
Voici un exemple de fonction qui affiche un message simple. Cette fonction ne prend aucun paramètre et ne renvoie aucune valeur.

```python
def dire_bonjour():
    print("Bonjour tout le monde !")
```

#### Utilisation de la fonction :
```python
dire_bonjour()  # Affiche "Bonjour tout le monde !"
```



## 3. Fonction avec paramètres 📥

Une fonction peut prendre des **paramètres** (ou arguments), qui sont des valeurs passées à la fonction lors de son appel. Ces valeurs peuvent être utilisées dans le corps de la fonction.

### 3.1. Exemple de fonction avec un paramètre
Dans l'exemple ci-dessous, la fonction **`saluer`** prend un paramètre **`nom`** et l'utilise pour afficher un message personnalisé.

```python
def saluer(nom):
    print(f"Bonjour, {nom} !")
```

#### Utilisation de la fonction :
```python
saluer("Alice")  # Affiche "Bonjour, Alice !"
saluer("Bob")    # Affiche "Bonjour, Bob !"
```

### 3.2. Fonction avec plusieurs paramètres
Une fonction peut aussi prendre plusieurs paramètres, séparés par des virgules.

```python
def ajouter(a, b):
    return a + b
```

#### Utilisation de la fonction :
```python
resultat = ajouter(3, 4)  # Résultat = 7
print(resultat)
```



## 4. Valeur de retour d'une fonction 🔄

Les fonctions en Python peuvent **retourner** une valeur à l'endroit où elles sont appelées. Cela permet de récupérer un résultat calculé par la fonction pour l'utiliser ailleurs dans le programme.

### 4.1. Exemple de fonction qui retourne une valeur
Voici un exemple d'une fonction qui calcule la somme de deux nombres et renvoie le résultat.

```python
def somme(a, b):
    return a + b
```

#### Utilisation de la fonction :
```python
resultat = somme(5, 10)  # Résultat = 15
print(resultat)  # Affiche 15
```

### 4.2. Fonction avec une valeur de retour conditionnelle
Une fonction peut aussi renvoyer différentes valeurs en fonction de conditions.

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b
```

#### Utilisation de la fonction :
```python
resultat = max(7, 10)  # Résultat = 10
print(resultat)  # Affiche 10
```



## 5. Valeurs par défaut pour les paramètres ⚙️

En Python, il est possible de donner des valeurs par défaut à certains paramètres d'une fonction. Si l'appel de la fonction ne passe pas de valeur pour un paramètre donné, la valeur par défaut est utilisée.

### 5.1. Exemple de fonction avec paramètres par défaut
Dans l'exemple suivant, le paramètre **`message`** a une valeur par défaut, et si aucune valeur n'est donnée, le message "Bonjour tout le monde !" sera utilisé.

```python
def saluer(message="Bonjour tout le monde !"):
    print(message)
```

#### Utilisation de la fonction :
```python
saluer()  # Affiche "Bonjour tout le monde !"
saluer("Salut, Alice !")  # Affiche "Salut, Alice !"
```



## 6. Fonction avec un nombre variable d'arguments ⭐

Python permet de passer un nombre variable d'arguments à une fonction en utilisant **`*args`**. Cela permet de manipuler des listes d'éléments sans savoir à l'avance combien d'éléments seront passés à la fonction.

### 6.1. Exemple avec `*args`
Voici un exemple de fonction qui prend un nombre variable d'arguments et les additionne tous :

```python
def additionner(*args):
    total = 0
    for nombre in args:
        total += nombre
    return total
```

#### Utilisation de la fonction :
```python
resultat = additionner(1, 2, 3, 4)  # Résultat = 10
print(resultat)  # Affiche 10
```



## 7. Fonction avec des arguments nommés (`**kwargs`) 🏷️

Les fonctions peuvent également accepter un nombre variable d'arguments nommés, à l'aide de **`**kwargs`**. Cela permet de passer un nombre variable de paires clé-valeur à une fonction.

### 7.1. Exemple avec `**kwargs`
Voici un exemple de fonction qui prend un nombre variable d'arguments nommés et les affiche :

```python
def afficher_infos(**kwargs):
    for clé, valeur in kwargs.items():
        print(f"{clé}: {valeur}")
```

#### Utilisation de la fonction :
```python
afficher_infos(nom="Alice", age=25, profession="Ingénieur")
# Affiche :
# nom: Alice
# age: 25
# profession: Ingénieur
```



## 8. Fonctions anonymes (lambda) 🔎

En Python, il est possible de définir des fonctions **anonymes**, aussi appelées **fonctions lambda**, qui ne sont pas nommées mais qui peuvent être utilisées directement dans une expression.

### 8.1. Exemple de fonction lambda
Voici un exemple d'une fonction lambda qui additionne deux nombres :

```python
addition = lambda a, b: a + b
```

#### Utilisation de la fonction :
```python
resultat = addition(5, 3)  # Résultat = 8
print(resultat)  # Affiche 8
```

Les fonctions lambda sont particulièrement utiles lorsque l'on a besoin de fonctions simples et temporaires.



## 9. Conclusion 🌟

Les fonctions en Python sont un moyen puissant et flexible pour organiser et réutiliser le code. Que ce soit pour des calculs simples, des opérations plus complexes avec plusieurs paramètres, ou même pour des fonctions anonymes, les fonctions permettent de rendre le code plus lisible et modulaire.


## Devoirs 📑

1. Crée une fonction qui calcule la factorielle d'un nombre donné.
2. Écris une fonction qui prend une liste d'entiers et renvoie la somme de tous les éléments impairs.
3. Développe une fonction qui prend une chaîne de caractères et renvoie la chaîne inversée.
4. Crée une fonction qui retourne le plus grand nombre parmi une liste de nombres passés en argument.


