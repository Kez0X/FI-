# La Gestion des Erreurs en Python ⚠️

Lorsqu'on écrit un programme, il peut y avoir des erreurs à cause de différentes raisons : mauvaise entrée de l'utilisateur, fichier manquant, division par zéro, etc. La gestion des erreurs permet à ton programme de gérer ces situations sans planter, mais plutôt en affichant un message d'erreur utile ou en effectuant des actions alternatives.

Python fournit un mécanisme appelé **gestion des exceptions** qui permet d'intercepter ces erreurs, de les traiter et de maintenir l'exécution de ton programme.



## 1. Les Exceptions en Python ⚡

Une **exception** est un événement qui se produit lorsqu'une erreur survient lors de l'exécution d'un programme. Python interrompt alors l'exécution du programme et déclenche une exception, qui peut être gérée ou simplement laissée se propager. Si l'exception n'est pas gérée, le programme se termine prématurément.

Les erreurs peuvent être de différents types, comme :
- **`ZeroDivisionError`** : Erreur liée à une tentative de division par zéro.
- **`ValueError`** : Erreur qui se produit lorsque l'on tente d'utiliser une valeur incorrecte pour une opération.
- **`FileNotFoundError`** : Erreur quand on tente d'ouvrir un fichier qui n'existe pas.
- **`IndexError`** : Erreur lorsqu'un indice est hors des limites d'une liste.

Les exceptions sont utilisées pour signaler qu'une condition inhabituelle est survenue, et que des actions doivent être entreprises pour y remédier.



## 2. Le bloc `try`/`except` 🛠️

Le mécanisme principal de gestion des erreurs en Python repose sur le bloc **`try`/`except`**. Ce bloc permet d'encapsuler le code qui pourrait provoquer une exception. Si une erreur survient dans le bloc `try`, l'exécution passe au bloc `except`.

### 2.1. Syntaxe du bloc `try`/`except`

```python
try:
    # Code qui pourrait générer une erreur
except ExceptionType:
    # Code à exécuter en cas d'erreur
```

- **`try`** : Le code susceptible de provoquer une erreur.
- **`except`** : Le code qui sera exécuté si une exception se produit.

### 2.2. Exemple simple : Gestion de la division par zéro

```python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Erreur : Division par zéro !")
```

Résultat :
```
Erreur : Division par zéro !
```

Ici, la tentative de division par zéro entraîne une exception de type `ZeroDivisionError`, et le programme passe à l'instruction dans le bloc `except`.



## 3. Gérer plusieurs types d'exceptions 🧑‍💻

Tu peux avoir plusieurs types d'exception à gérer. Dans ce cas, tu peux spécifier plusieurs blocs `except`, chacun gérant un type d'erreur différent.

### 3.1. Exemple avec plusieurs exceptions

```python
try:
    age = int(input("Entrez votre âge : "))
    print(10 / age)
except ValueError:
    print("Erreur : Veuillez entrer un nombre valide.")
except ZeroDivisionError:
    print("Erreur : Vous ne pouvez pas entrer zéro comme âge.")
```

Résultat (si l'utilisateur entre un texte au lieu d'un nombre) :
```
Erreur : Veuillez entrer un nombre valide.
```

Dans cet exemple, si l'utilisateur entre une valeur non numérique, l'exception `ValueError` sera déclenchée, et si l'utilisateur entre `0`, une exception `ZeroDivisionError` sera levée.



## 4. Le bloc `else` 📌

Le bloc **`else`** peut être ajouté à la suite des blocs `try` et `except`. Le code dans le bloc `else` sera exécuté uniquement si **aucune exception** n'a été levée dans le bloc `try`.

### 4.1. Syntaxe avec `else`

```python
try:
    # Code susceptible de lever une exception
except ExceptionType:
    # Code si une exception est levée
else:
    # Code si aucune exception n'est levée
```

### 4.2. Exemple avec `else`

```python
try:
    x = 10 / 2
except ZeroDivisionError:
    print("Erreur : Division par zéro !")
else:
    print("La division a réussi.")
```

Résultat :
```
La division a réussi.
```

Dans cet exemple, le code dans `else` est exécuté uniquement si aucune exception ne se produit, ce qui est le cas ici.



## 5. Le bloc `finally` 🔄

Le bloc **`finally`** permet de spécifier du code qui sera toujours exécuté, qu'une exception ait été levée ou non. C'est utile pour faire des actions de nettoyage, comme fermer des fichiers ou libérer des ressources.

### 5.1. Syntaxe avec `finally`

```python
try:
    # Code susceptible de lever une exception
except ExceptionType:
    # Code si une exception est levée
finally:
    # Code toujours exécuté
```

### 5.2. Exemple avec `finally`

```python
try:
    fichier = open("exemple.txt", "r")
    contenu = fichier.read()
except FileNotFoundError:
    print("Erreur : Fichier introuvable.")
finally:
    # Le fichier est fermé qu'il y ait eu une erreur ou non
    fichier.close()
    print("Fermeture du fichier.")
```

Résultat (si le fichier n'existe pas) :
```
Erreur : Fichier introuvable.
Fermeture du fichier.
```

Dans cet exemple, même si le fichier n'est pas trouvé et qu'une exception est levée, le bloc `finally` est exécuté, ce qui permet de fermer le fichier (si ouvert) et de réaliser un nettoyage.



## 6. Lever des exceptions manuellement avec `raise` ⛔

Parfois, tu souhaites lever une exception manuellement dans ton programme. Tu peux utiliser le mot-clé **`raise`** pour lancer une exception spécifique quand une condition particulière est rencontrée.

### 6.1. Syntaxe de `raise`

```python
raise ExceptionType("Message d'erreur")
```

### 6.2. Exemple avec `raise`

```python
def verifier_positif(x):
    if x < 0:
        raise ValueError("Erreur : La valeur doit être positive.")
    return x

try:
    print(verifier_positif(-5))
except ValueError as e:
    print(e)
```

Résultat :
```
Erreur : La valeur doit être positive.
```

Ici, la fonction `verifier_positif` lève une exception `ValueError` si l'argument est négatif, et l'exception est capturée et affichée dans le bloc `except`.



## 7. Conclusion 🏁

La gestion des erreurs est un aspect fondamental de la programmation en Python, car elle permet de rendre les programmes plus robustes et résistants aux erreurs. Voici un récapitulatif des concepts importants abordés :

- **Exceptions** : Les erreurs qui interrompent l'exécution du programme, comme `ValueError`, `ZeroDivisionError`, etc.
- **`try`/`except`** : Les blocs utilisés pour capturer et gérer des exceptions.
- **`else`** : Un bloc qui s'exécute si aucune exception n'a été levée dans le bloc `try`.
- **`finally`** : Un bloc toujours exécuté, qu'une exception ait été levée ou non (idéal pour le nettoyage).
- **Lever des exceptions manuellement avec `raise`** : Permet d'indiquer explicitement une erreur dans ton programme.

La gestion des erreurs rend ton code plus fiable et plus facile à déboguer. En capturant les exceptions, tu peux éviter que ton programme ne plante de manière inattendue et offrir à l'utilisateur des messages d'erreur compréhensibles.