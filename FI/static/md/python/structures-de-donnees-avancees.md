# Les Structures de Données en Python 🧠

Les **structures de données** sont des manières spécifiques d'organiser, de stocker et de gérer les données. Python propose plusieurs types de structures de données qui sont adaptées à différents besoins. Nous allons voir en détail les structures les plus courantes et leurs caractéristiques.

---

## 1. Les Listes 🍀

Les **listes** sont l'une des structures de données les plus utilisées en Python. Elles sont des séquences ordonnées et modifiables (mutables). Les éléments d'une liste peuvent être de différents types, y compris des nombres, des chaînes, ou même d'autres listes.

### 1.1. Création d'une liste

Les listes sont créées en utilisant des crochets **`[]`**.

```python
ma_liste = [1, 2, 3, 4, 5]
```

### 1.2. Accéder aux éléments d'une liste

Tu peux accéder aux éléments d'une liste en utilisant des indices. Les indices commencent à 0.

```python
print(ma_liste[0])  # Affiche 1
print(ma_liste[2])  # Affiche 3
```

### 1.3. Modifications d'une liste

Les listes sont mutables, ce qui signifie que tu peux modifier leurs éléments après leur création.

```python
ma_liste[2] = 10  # Change l'élément à l'index 2
print(ma_liste)  # Affiche [1, 2, 10, 4, 5]
```

### 1.4. Ajouter des éléments

Tu peux ajouter des éléments à la fin de la liste avec la méthode **`append()`** ou insérer des éléments à un certain indice avec **`insert()`**.

```python
ma_liste.append(6)  # Ajoute 6 à la fin
ma_liste.insert(1, 20)  # Insère 20 à l'index 1
print(ma_liste)  # Affiche [1, 20, 2, 10, 4, 5, 6]
```

### 1.5. Supprimer des éléments

Pour supprimer un élément, tu peux utiliser la méthode **`remove()`** pour supprimer la première occurrence d'un élément ou la fonction **`pop()`** pour supprimer un élément à un indice donné.

```python
ma_liste.remove(10)  # Supprime la première occurrence de 10
print(ma_liste)  # Affiche [1, 20, 2, 4, 5, 6]

element_supprime = ma_liste.pop(2)  # Supprime et retourne l'élément à l'index 2
print(ma_liste)  # Affiche [1, 20, 4, 5, 6]
print("Élément supprimé:", element_supprime)  # Affiche 2
```

---

## 2. Les Tuples 🔒

Les **tuples** sont similaires aux listes, mais ils sont **immuables** (non modifiables). Une fois créés, tu ne peux plus changer les éléments du tuple.

### 2.1. Création d'un tuple

Les tuples sont créés en utilisant des parenthèses **`()`**.

```python
mon_tuple = (1, 2, 3, 4)
```

### 2.2. Accéder aux éléments d'un tuple

Tu peux accéder aux éléments d'un tuple de la même manière que pour une liste.

```python
print(mon_tuple[1])  # Affiche 2
```

### 2.3. Avantages des tuples

Les tuples sont souvent utilisés lorsqu'on veut garantir que les données ne soient pas modifiées. Par exemple, tu pourrais utiliser un tuple pour stocker les coordonnées d'un point géographique.

---

## 3. Les Dictionnaires 📚

Les **dictionnaires** sont des collections de paires clé-valeur. Contrairement aux listes et aux tuples, les dictionnaires sont non ordonnés (avant Python 3.7) et leurs clés doivent être uniques. C’est une structure très utile pour associer des informations entre elles.

### 3.1. Création d'un dictionnaire

Les dictionnaires sont créés en utilisant des accolades **`{}`**.

```python
mon_dict = {"nom": "Alice", "age": 25, "ville": "Paris"}
```

### 3.2. Accéder aux éléments d'un dictionnaire

Tu peux accéder aux éléments d'un dictionnaire en utilisant les clés.

```python
print(mon_dict["nom"])  # Affiche "Alice"
```

### 3.3. Modifier un dictionnaire

Les dictionnaires sont également mutables, tu peux donc modifier une valeur associée à une clé.

```python
mon_dict["age"] = 26  # Change l'âge d'Alice
print(mon_dict)  # Affiche {'nom': 'Alice', 'age': 26, 'ville': 'Paris'}
```

### 3.4. Ajouter des éléments

Tu peux ajouter une nouvelle paire clé-valeur à un dictionnaire de cette façon :

```python
mon_dict["profession"] = "Ingénieur"
print(mon_dict)  # Affiche {'nom': 'Alice', 'age': 26, 'ville': 'Paris', 'profession': 'Ingénieur'}
```

### 3.5. Supprimer des éléments

Tu peux supprimer une clé et sa valeur associée avec la fonction **`del`** ou la méthode **`pop()`**.

```python
del mon_dict["ville"]
print(mon_dict)  # Affiche {'nom': 'Alice', 'age': 26, 'profession': 'Ingénieur'}
```

---

## 4. Les Ensembles (Sets) 🔄

Les **ensembles** (ou sets) sont des collections non ordonnées d'éléments uniques. Ils sont utilisés lorsque tu veux éviter les doublons ou pour effectuer des opérations ensemblistes (union, intersection, etc.).

### 4.1. Création d'un ensemble

Les ensembles sont créés en utilisant des accolades **`{}`**, mais contrairement aux dictionnaires, il n'y a pas de paires clé-valeur.

```python
mon_ensemble = {1, 2, 3, 4}
```

### 4.2. Ajouter et supprimer des éléments

Tu peux ajouter des éléments avec **`add()`** et supprimer des éléments avec **`remove()`** ou **`discard()`**.

```python
mon_ensemble.add(5)  # Ajoute 5 à l'ensemble
mon_ensemble.remove(3)  # Supprime 3 de l'ensemble
print(mon_ensemble)  # Affiche {1, 2, 4, 5}
```

### 4.3. Opérations ensemblistes

Les ensembles supportent des opérations comme l'union, l'intersection et la différence.

```python
ensemble1 = {1, 2, 3}
ensemble2 = {3, 4, 5}

# Union
print(ensemble1 | ensemble2)  # Affiche {1, 2, 3, 4, 5}

# Intersection
print(ensemble1 & ensemble2)  # Affiche {3}

# Différence
print(ensemble1 - ensemble2)  # Affiche {1, 2}
```

---

## 5. Les Files et Piles (Queues and Stacks) 🌀

Les **files** et **piles** sont des structures de données qui suivent des principes spécifiques d'organisation des éléments. Une **pile** suit le principe **LIFO** (Last In, First Out), tandis qu'une **file** suit le principe **FIFO** (First In, First Out).

### 5.1. Pile (Stack)

Une pile est une structure où l'élément ajouté en dernier est le premier à être retiré.

Tu peux utiliser une **liste** en Python pour simuler une pile.

```python
pile = []
pile.append(1)  # Ajouter à la pile
pile.append(2)
pile.append(3)
print(pile.pop())  # Retirer l'élément en haut de la pile (affiche 3)
```

### 5.2. File (Queue)

Une file suit le principe FIFO. Python n’a pas de type de données spécifique pour les files, mais tu peux utiliser **`collections.deque`**, qui est une structure de données optimisée pour les ajouts et suppressions rapides à partir des deux extrémités.

```python
from collections import deque

file = deque([1, 2, 3])
file.append(4)  # Ajouter à la fin
print(file.popleft())  # Retirer le premier élément (affiche 1)
```

---

## Conclusion 🎯

Les **structures de données** en Python sont essentielles pour organiser et manipuler les informations dans ton programme. Elles te permettent de gérer les données de manière optimale et d'appliquer des algorithmes efficaces.

### Résumé des structures abordées :
- **Listes** : Séquences ordonnées et modifiables.
- **Tuples** : Séquences ordonnées mais immuables.
- **Dictionnaires** : Paires clé-valeur.
- **Ensembles (sets)** : Collections non ordonnées d'éléments uniques.
- **Files et Piles** : Structures de données pour organiser les éléments selon les principes FIFO et LIFO.

Ces structures de données sont les outils de base pour résoudre de nombreux problèmes en informatique. Utilise-les à bon escient pour optimiser tes programmes et rendre ton code plus clair et performant.