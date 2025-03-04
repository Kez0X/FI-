# Modules et Packages en Python 📦

En Python, un **module** est simplement un fichier contenant du code Python, c'est-à-dire des définitions de variables, de fonctions, de classes, etc. Un **package** est un ensemble de modules regroupés sous un même dossier. L'utilisation de modules et de packages permet d'organiser ton code de manière plus claire et modulaire, et facilite sa réutilisation dans d'autres projets.



## 1. Qu'est-ce qu'un module ? 📜

Un **module** est un fichier Python qui contient du code que tu peux réutiliser dans d'autres programmes. Par exemple, si tu as une fonction utile, tu peux la placer dans un module et l'utiliser dans plusieurs autres programmes.

### 1.1. Comment créer un module ?

Un module est simplement un fichier `.py`. Par exemple, supposons que tu as un fichier appelé **`math_operations.py`** qui contient des fonctions mathématiques :

#### Exemple de module `math_operations.py` :

```python
# math_operations.py

def addition(a, b):
    return a + b

def soustraction(a, b):
    return a - b
```

Ici, le fichier **`math_operations.py`** est un module qui contient deux fonctions : **`addition()`** et **`soustraction()`**.

### 1.2. Utiliser un module dans un autre programme

Une fois que tu as créé un module, tu peux l'utiliser dans d'autres fichiers Python en l'important.

#### Exemple d'utilisation du module `math_operations.py` :

```python
# main.py
import math_operations

resultat_addition = math_operations.addition(5, 3)
resultat_soustraction = math_operations.soustraction(5, 3)

print("Résultat addition :", resultat_addition)  # Résultat addition : 8
print("Résultat soustraction :", resultat_soustraction)  # Résultat soustraction : 2
```

Ici, dans **`main.py`**, nous avons importé le module **`math_operations`** et utilisé ses fonctions.



## 2. Les types d'importation de modules 🧳

Python permet plusieurs façons d'importer des modules. Voici les méthodes les plus courantes :

### 2.1. Importer tout le module

```python
import math_operations
```

Cette méthode importe le module entier. Pour utiliser les fonctions ou variables du module, tu dois préfixer leur nom par le nom du module.

### 2.2. Importer des fonctions spécifiques

```python
from math_operations import addition
```

Ici, nous importons uniquement la fonction **`addition()`** du module **`math_operations`**. Tu peux maintenant l'utiliser directement sans préfixer avec le nom du module.

```python
resultat_addition = addition(5, 3)
```

### 2.3. Importer un module sous un autre nom (alias)

```python
import math_operations as mo
```

Ici, nous avons donné à **`math_operations`** un alias **`mo`**. Cela te permet d'utiliser un nom plus court lorsque tu appelles les fonctions du module.

```python
resultat_addition = mo.addition(5, 3)
```



## 3. Qu'est-ce qu'un package ? 📚

Un **package** est un dossier contenant plusieurs modules. En d'autres termes, un package est une collection de modules qui sont regroupés sous un même dossier. Un package Python est un dossier qui doit contenir un fichier spécial appelé **`__init__.py`** (ce fichier peut être vide, mais il est essentiel pour que Python reconnaisse le dossier comme un package).

### 3.1. Exemple de package

Imaginons un package appelé **`math_package`**. Ce package contient deux modules : **`addition.py`** et **`soustraction.py`**. Le dossier **`math_package`** aurait la structure suivante :

```
math_package/
    __init__.py
    addition.py
    soustraction.py
```

#### Exemple de module **`addition.py`** :

```python
# math_package/addition.py

def addition(a, b):
    return a + b
```

#### Exemple de module **`soustraction.py`** :

```python
# math_package/soustraction.py

def soustraction(a, b):
    return a - b
```

### 3.2. Importer un package

Pour utiliser les modules à l'intérieur d'un package, tu peux procéder comme suit :

```python
# main.py
from math_package import addition, soustraction

resultat_addition = addition.addition(5, 3)
resultat_soustraction = soustraction.soustraction(5, 3)

print("Résultat addition :", resultat_addition)  # Résultat addition : 8
print("Résultat soustraction :", resultat_soustraction)  # Résultat soustraction : 2
```

Ici, nous avons importé deux modules du package **`math_package`** et utilisé leurs fonctions dans **`main.py`**.

### 3.3. Importer un module spécifique d'un package

Tu peux aussi importer un seul module à partir d'un package :

```python
# main.py
from math_package.addition import addition

resultat_addition = addition(5, 3)

print("Résultat addition :", resultat_addition)  # Résultat addition : 8
```

### 3.4. Le fichier `__init__.py`

Le fichier **`__init__.py`** permet de marquer un répertoire comme étant un package Python. Sans ce fichier, Python ne reconnaîtra pas le dossier comme un package. Ce fichier peut être vide ou contenir du code qui est exécuté lorsqu'un module du package est importé.

#### Exemple de fichier `__init__.py` :

```python
# math_package/__init__.py

# Ceci peut être vide ou contenir du code d'initialisation du package
```

Tu peux aussi l'utiliser pour importer certaines fonctions ou modules par défaut, ce qui facilite l'importation pour les utilisateurs du package.



## 4. Recherche de modules et packages 📂

Quand tu importes un module ou un package en Python, le programme va chercher dans les répertoires définis dans la variable **`sys.path`**. Par défaut, cette variable inclut les répertoires du système, mais tu peux aussi ajouter des répertoires personnalisés pour y rechercher des modules ou packages.

### 4.1. Ajouter un répertoire à `sys.path`

```python
import sys
sys.path.append('/chemin/vers/mon/module')
```

Cela permet de chercher des modules dans le répertoire spécifié.



## 5. Les modules standard de Python 📜

Python propose un grand nombre de **modules standards** qui sont fournis avec l'installation de Python. Ces modules couvrent une grande variété de fonctionnalités, allant de la gestion des fichiers à la manipulation des dates et heures.

Voici quelques modules populaires :

- **`math`** : Fonctions mathématiques (ex. **`math.sqrt()`** pour la racine carrée).
- **`datetime`** : Manipulation des dates et heures.
- **`os`** : Interaction avec le système d'exploitation.
- **`random`** : Génération de nombres aléatoires.
- **`json`** : Manipulation de données JSON.

Exemple d'importation du module **`math`** :

```python
import math

# Utilisation de la fonction sqrt() du module math
resultat = math.sqrt(16)
print(resultat)  # 4.0
```



## 6. Installer des packages externes avec `pip` ⚙️

En plus des modules et packages standards, Python permet d'installer des packages externes via l'outil **`pip`**. Ces packages sont disponibles dans le **Python Package Index (PyPI)**.

### 6.1. Installer un package avec `pip`

```bash
pip install numpy
```

Tu peux ensuite importer ce package dans ton code Python comme n'importe quel autre module :

```python
import numpy as np

array = np.array([1, 2, 3])
print(array)  # [1 2 3]
```



## 7. Conclusion 🏁

Les **modules** et **packages** sont des outils puissants en Python pour organiser et structurer ton code. Utiliser des modules permet de rendre ton code plus modulaire, réutilisable et facile à maintenir. De plus, avec les **packages**, tu peux regrouper plusieurs modules sous un même nom, facilitant ainsi l'organisation de projets plus complexes.

### Points clés :
- **Modules** : Fichiers Python contenant des fonctions, classes et variables.
- **Packages** : Dossiers contenant plusieurs modules et un fichier **`__init__.py`**.
- Utilise les mots-clés **`import`** et **`from ... import`** pour accéder aux modules et packages.
- Python dispose de nombreux **modules standard** et permet d'installer des packages externes via **`pip`**.