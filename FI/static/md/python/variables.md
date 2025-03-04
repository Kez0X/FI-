# Variables en Python 🔑

Les variables sont des éléments fondamentaux de la programmation, et leur utilisation permet de manipuler, stocker et modifier des données tout au long d’un programme.

## **📖 Qu'est-ce qu'une variable ?**

Une variable est un nom qui agit comme un conteneur pour une valeur. Cette valeur peut être de différents types : chaîne de caractères, entier, liste, etc. La valeur associée à une variable peut être modifiée au cours de l'exécution du programme.

### Exemple simple :

```python
mot = "Python"
print(mot)  # Affiche : Python

```

### **Caractéristiques des variables :**

1. **Réassignation dynamique** : Vous pouvez changer la valeur d’une variable à tout moment :
    
    ```python
    mot = "Python"
    mot = "Programmation"
    print(mot)  # Affiche : Programmation
    
    ```
    
2. **Typage dynamique** : Vous n’avez pas besoin de spécifier le type de la variable au moment de sa déclaration. Python déduit automatiquement le type en fonction de la valeur affectée.

## **🛠️ Comment définir une variable ?**

Les variables peuvent être définies de trois manières principales :

### 1. **Par le développeur** :

Une valeur est directement attribuée à la variable dans le code :

```python
nombre = 42
texte = "Bonjour"

```

### 2. **Par l'utilisateur** :

En demandant à l’utilisateur d’entrer une valeur avec la fonction `input` :

```python
nombre = int(input("Veuillez entrer un nombre entier : "))
texte = input("Veuillez entrer un texte : ")

```

### 3. **Par le programme** :

Une variable est définie et modifiée automatiquement par le programme, par exemple dans une boucle :

```python
for i in range(5):
    print(i)  # Affiche : 0, 1, 2, 3, 4

```

## **🧪 Quelles valeurs peut prendre une variable ?**

Une variable peut stocker n’importe quel type de données pris en charge par Python, notamment :

| **Type** | **Exemple de valeur** | **Définition** |
| --- | --- | --- |
| **int** | `42`, `-7` | Nombres entiers |
| **float** | `3.14`, `-2.71` | Nombres à virgule flottante |
| **str** | `"Python"`, `'Bonjour'` | Chaînes de caractères |
| **bool** | `True`, `False` | Valeurs booléennes |
| **list** | `[1, 2, 3]` | Liste ordonnée |
| **dict** | `{"clé": "valeur"}` | Dictionnaire |

### Exemple de définition d’une variable :

```python
texte = "Bienvenue"
nombre = 10
liste = [1, 2, 3]

```

### **Redéfinition d’une variable** :

La valeur de la variable est remplacée par la nouvelle affectation :

```python
variable = 5
print(variable)  # Affiche : 5

variable = "Nouvelle valeur"
print(variable)  # Affiche : Nouvelle valeur

```

## **🔗 Opérations sur les variables**

### **Concaténation** (pour les chaînes de caractères) :

Vous pouvez combiner des chaînes en les additionnant :

```python
mot = "Python"
mot = mot + " est génial"
print(mot)  # Affiche : Python est génial

```

### **Modification dans une boucle** :

Une variable peut être réattribuée à chaque itération d'une boucle :

```python
for i in range(3):
    print(i)  # Affiche : 0, 1, 2

```

## **🚧 Bonnes pratiques pour nommer les variables**

1. **Noms explicites** : Utilisez des noms qui décrivent clairement le rôle de la variable :
    
    ```python
    age_utilisateur = 25  # Préféré à a = 25
    
    ```
    
2. **Règles de syntaxe** :
    - Une variable ne peut pas commencer par un chiffre.
    - Les caractères spéciaux (ex. accents, guillemets) ne sont pas autorisés.
    - Les espaces doivent être remplacés par des underscores (`_`).
3. **Cohérence** : Respectez une convention de nommage (ex. snake_case ou camelCase).

## **📚 Résumé**

- Une variable est un nom associé à une valeur. La valeur peut être réassignée à tout moment.
- Les types de données qu'une variable peut stocker incluent : `int`, `float`, `str`, `bool`, etc.
- Une variable peut être définie par le développeur, par l'utilisateur ou par le programme lui-même.
- Utilisez des noms de variables explicites et suivez les règles de syntaxe pour améliorer la lisibilité de votre code.

😊 Ce cours te permet de revoir les fondamentaux de python, cependant cela n'est pas suffisant pour préparer un examen, je te conseille de t'exercer de ton côté afin d'être véritablement prêt et confiant pour ton examen