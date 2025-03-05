# Leçon : Notion de Liste en Algorithmique et Programmation 📝

## Objectifs 🎯 :
- Comprendre la notion de **liste** en algorithmique.
- Apprendre à manipuler les listes dans un langage de programmation.
- Utiliser les opérations de base sur les listes pour résoudre des problèmes.



## 1. Qu'est-ce qu'une liste ? 📚

Une **liste** est une structure de données qui permet de stocker une collection d'éléments. Ces éléments peuvent être de types différents (nombres, chaînes de caractères, etc.) et sont organisés dans un ordre spécifique. Les listes sont des structures fondamentales en programmation, car elles permettent de regrouper et d’organiser des données de manière flexible.

### 1.1. Propriétés d'une liste
- Une liste est ordonnée : l'ordre dans lequel les éléments sont ajoutés à la liste est conservé.
- Les éléments d'une liste peuvent être modifiés, ajoutés ou supprimés à volonté.
- Une liste peut contenir un nombre variable d'éléments, y compris zéro élément (liste vide).



## 2. Représentation d'une liste 🔢

Les listes sont souvent représentées par des tableaux ou des séquences de données. Par exemple, une liste contenant les nombres de 1 à 5 peut être écrite sous la forme suivante :

$$
[1, 2, 3, 4, 5]
$$

### 2.1. Liste vide
Une liste sans aucun élément est appelée **liste vide**. Elle est généralement représentée par :

$$
[]
$$



## 3. Manipulation des listes en programmation 🖥️

En programmation, les listes sont souvent utilisées pour stocker des données de manière dynamique. Nous allons explorer quelques opérations courantes sur les listes.

### 3.1. Accéder à un élément d'une liste
Dans une liste, chaque élément a un indice (ou index) qui lui est associé. Les indices commencent généralement à 0. Pour accéder à un élément particulier, on utilise l'indice de l'élément.

#### Exemple en Python :
```python
ma_liste = [10, 20, 30, 40, 50]
print(ma_liste[2])  # Affiche l'élément à l'indice 2, donc 30
