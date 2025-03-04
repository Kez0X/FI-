# Les Algorithmes de Tri en Python 🔢

Les algorithmes de tri sont utilisés pour organiser les données de manière efficace. En Python, nous avons plusieurs algorithmes pour trier des données. Voici une présentation des **quatre algorithmes de tri principaux** :

1. **Tri par sélection** (Selection Sort)
2. **Tri par insertion** (Insertion Sort)
3. **Tri à bulles** (Bubble Sort)
4. **Tri par fusion** (Merge Sort)

## 1. Tri par Sélection (Selection Sort) 🔽

Le **tri par sélection** fonctionne en divisant la liste en deux parties :
- Une partie triée à gauche.
- Une partie non triée à droite.

L’algorithme cherche à chaque étape l'élément le plus petit dans la partie non triée et le place à la fin de la partie triée.

### Description :
1. On parcourt la liste pour trouver l'élément le plus petit.
2. On échange cet élément avec le premier élément non trié.
3. On répète cette opération pour les autres éléments.

### Complexité :
- **Temps** : $$\(O(n^2)\)$$ (mauvaise performance pour de grandes listes).
- **Espace** : $$\(O(1)\)$$ (tri en place).

### Code en Python :
```python
def tri_selection(liste):
    n = len(liste)
    for i in range(n):
        # Trouver l'index du minimum dans la partie non triée
        min_index = i
        for j in range(i+1, n):
            if liste[j] < liste[min_index]:
                min_index = j
        # Echanger l'élément courant avec l'élément le plus petit trouvé
        liste[i], liste[min_index] = liste[min_index], liste[i]
    return liste

# Exemple d'utilisation
ma_liste = [64, 25, 12, 22, 11]
print(tri_selection(ma_liste))  # [11, 12, 22, 25, 64]
```


## 2. Tri par Insertion (Insertion Sort) ⬆️

Le **tri par insertion** fonctionne de manière similaire à la façon dont on trie des cartes à jouer : on prend un élément de la liste et on l'insère dans la partie triée.

### Description :
1. On parcourt la liste à partir du deuxième élément.
2. On insère chaque élément à sa position correcte dans la partie déjà triée.
3. On répète l’opération pour tous les éléments.

### Complexité :
- **Temps** : $$\(O(n^2)\)$$ (mauvaise performance pour de grandes listes).
- **Espace** : $$\(O(1)\)$$ (tri en place).

### Code en Python :
```python
def tri_insertion(liste):
    for i in range(1, len(liste)):
        # L'élément à insérer
        current_value = liste[i]
        j = i - 1
        # Décaler les éléments de la partie triée vers la droite
        while j >= 0 and liste[j] > current_value:
            liste[j + 1] = liste[j]
            j -= 1
        # Insérer l'élément dans la position correcte
        liste[j + 1] = current_value
    return liste

# Exemple d'utilisation
ma_liste = [64, 25, 12, 22, 11]
print(tri_insertion(ma_liste))  # [11, 12, 22, 25, 64]
```


## 3. Tri à Bulles (Bubble Sort) 🔵

Le **tri à bulles** est un algorithme simple mais inefficace qui fonctionne en comparant des éléments voisins et en les échangeant si nécessaire.

### Description :
1. On compare chaque paire d'éléments voisins dans la liste.
2. Si l'élément de gauche est plus grand que celui de droite, on les échange.
3. On répète ces comparaisons pour chaque élément jusqu’à ce que la liste soit triée.

### Complexité :
- **Temps** : $$\(O(n^2)\)$$ (mauvaise performance pour de grandes listes).
- **Espace** : $$\(O(1)\)$$ (tri en place).

### Code en Python :
```python
def tri_bulles(liste):
    n = len(liste)
    for i in range(n):
        # On suppose que la liste est triée, si aucune permutation n'a lieu
        swapped = False
        for j in range(0, n - i - 1):
            if liste[j] > liste[j + 1]:
                # Echanger les éléments
                liste[j], liste[j + 1] = liste[j + 1], liste[j]
                swapped = True
        # Si aucune permutation n'a eu lieu, la liste est déjà triée
        if not swapped:
            break
    return liste

# Exemple d'utilisation
ma_liste = [64, 25, 12, 22, 11]
print(tri_bulles(ma_liste))  # [11, 12, 22, 25, 64]
```


## 4. Tri par Fusion (Merge Sort) ⚡

Le **tri par fusion** est un algorithme basé sur le principe du **diviser pour régner**. Il divise la liste en sous-listes plus petites, les trie récursivement, puis fusionne les sous-listes triées pour obtenir une liste finale triée.

### Description :
1. Diviser la liste en deux sous-listes.
2. Appliquer récursivement le tri à fusion sur chaque sous-liste.
3. Fusionner les sous-listes triées pour obtenir la liste triée finale.

### Complexité :
- **Temps** : $$\(O(n \log n)\)$$ (très efficace même pour de grandes listes).
- **Espace** : $$\(O(n)\)$$ (nécessite de l'espace supplémentaire pour les sous-listes).

### Code en Python :
```python
def fusion(liste1, liste2):
    result = []
    i = j = 0
    # Fusionner les deux listes triées
    while i < len(liste1) and j < len(liste2):
        if liste1[i] < liste2[j]:
            result.append(liste1[i])
            i += 1
        else:
            result.append(liste2[j])
            j += 1
    # Ajouter les éléments restants
    result.extend(liste1[i:])
    result.extend(liste2[j:])
    return result

def tri_fusion(liste):
    if len(liste) <= 1:
        return liste
    # Diviser la liste en deux
    mid = len(liste) // 2
    left = tri_fusion(liste[:mid])
    right = tri_fusion(liste[mid:])
    # Fusionner les sous-listes triées
    return fusion(left, right)

# Exemple d'utilisation
ma_liste = [64, 25, 12, 22, 11]
print(tri_fusion(ma_liste))  # [11, 12, 22, 25, 64]
```


## Résumé des Algorithmes de Tri

Voici un tableau comparatif des algorithmes de tri mentionnés, afin de mieux comprendre leur performance :

| Algorithme        | Complexité (Temps)  | Complexité (Espace) | Cas moyen/optimal  |
|-------------------|---------------------|---------------------|--------------------|
| Tri à bulles      | $$\(O(n^2)\)$$          | $$\(O(1)\)$$            | Mauvais            |
| Tri par sélection | $$\(O(n^2)\)$$          | $$\(O(1)\)$$            | Mauvais            |
| Tri par insertion | $$\(O(n^2)\)$$          | $$\(O(1)\)$$            | Mauvais            |
| Tri par fusion    | $$\(O(n \log n)\)$$     | $$\(O(n)\)$$            | Très efficace      |


## Conclusion 🎯

- **Tri à bulles**, **tri par sélection**, et **tri par insertion** sont des algorithmes simples à comprendre, mais leurs performances sont lentes, surtout pour les grandes listes, avec une complexité de $$\(O(n^2)\)$$.
- Le **tri par fusion** est un algorithme beaucoup plus performant avec une complexité de $$\(O(n \log n)\)$$, ce qui le rend adapté même pour des grandes listes. Cependant, il nécessite un espace supplémentaire.

En Python, pour les applications réelles, on utilise généralement des fonctions de tri optimisées comme **`sorted()`** ou **`sort()`**, qui utilisent un algorithme appelé **Timsort** et qui est beaucoup plus rapide pour la plupart des cas d'usage. Mais comprendre ces algorithmes est essentiel pour développer une bonne intuition des performances des algorithmes de tri. 😊

# Les Algorithmes des k Plus Proches Voisins (K-NN) et de Dijkstra 🌟

### 1. **L'algorithme des k Plus Proches Voisins (K-NN)** 🧑‍💻

L'algorithme des **k plus proches voisins** (K-NN) est un algorithme de classification et de régression basé sur la similarité entre les points de données. Il est largement utilisé dans le domaine de l'apprentissage supervisé.

### Description :
- **But** : Classer un point en fonction des k voisins les plus proches dans l'ensemble de données.
- **Principe** : Pour un point à classer, l'algorithme cherche les **k points les plus proches** de celui-ci dans l'ensemble d'entraînement et effectue une prédiction basée sur la majorité des classes de ces voisins.
  
- Si le problème est une **classification**, la classe la plus fréquente parmi les k voisins est attribuée au point.
- Si c'est une **régression**, la valeur moyenne des k voisins est utilisée pour prédire la valeur.

### Étapes de l'algorithme :
1. Calculer la **distance** entre le point à classer et tous les autres points de l'ensemble de données. La distance la plus couramment utilisée est la **distance euclidienne**.
2. Identifier les **k voisins les plus proches**.
3. Effectuer la classification ou la régression selon les voisins trouvés.

### Exemple de Calcul de Distance Euclidienne :
La distance entre deux points $$ \(A(x_1, y_1)\) $$ et $$ \(B(x_2, y_2)\) $$ dans un plan 2D est donnée par :
$$
\[
d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
\]
$$

### Code en Python :

```python
import numpy as np
from collections import Counter

# Fonction pour calculer la distance euclidienne
def distance(p1, p2):
    return np.sqrt(np.sum((p1 - p2) ** 2))

# Implémentation de l'algorithme K-NN
def knn(X_train, y_train, X_test, k):
    predictions = []
    for test_point in X_test:
        # Calculer la distance de chaque point d'entraînement au point de test
        distances = [distance(test_point, train_point) for train_point in X_train]
        # Trouver les indices des k plus proches voisins
        k_indices = np.argsort(distances)[:k]
        # Obtenir les classes des k plus proches voisins
        k_nearest_labels = [y_train[i] for i in k_indices]
        # La classe la plus fréquente devient la prédiction
        most_common = Counter(k_nearest_labels).most_common(1)
        predictions.append(most_common[0][0])
    return predictions

# Exemple d'utilisation
X_train = np.array([[1, 2], [2, 3], [3, 4], [5, 6]])
y_train = np.array([0, 0, 1, 1])
X_test = np.array([[2, 2], [4, 5]])

# Appliquer K-NN avec k=3
print(knn(X_train, y_train, X_test, 3))  # Résultat : [0, 1]
```

### Complexité :
- **Temps** : La recherche des k plus proches voisins nécessite de calculer la distance pour chaque point, donc la complexité est \(O(n \cdot d)\), où \(n\) est le nombre de points et $$\(d\)$$ est la dimension des données.
- **Espace** : $$\(O(n)\)$$, car il faut stocker les données d'entraînement.


### 2. **L'Algorithme de Dijkstra** 📍

L'**algorithme de Dijkstra** est un algorithme fondamental en théorie des graphes, utilisé pour **trouver le chemin le plus court** entre un point de départ et tous les autres sommets dans un graphe pondéré (avec des poids sur les arêtes). C'est un algorithme utilisé dans de nombreuses applications, comme le calcul d'itinéraires dans des cartes géographiques ou les réseaux.

### Description :
- **But** : Trouver le plus court chemin à partir d'un sommet source vers tous les autres sommets du graphe, où chaque arête a un poids (distance).
- **Principe** : L'algorithme fonctionne en explorant les sommets voisins du sommet actuel et en mettant à jour les distances minimales trouvées. Il utilise une **file de priorité** pour toujours explorer le sommet le plus proche (c'est-à-dire celui ayant la distance minimale).

### Étapes de l'algorithme :
1. Initialiser la distance de chaque sommet à l'infini, sauf celle du sommet source qui est initialisée à 0.
2. Placer tous les sommets dans une file de priorité.
3. Répéter :
   - Extraire le sommet avec la distance minimale.
   - Mettre à jour la distance de ses voisins.
4. L'algorithme se termine lorsque tous les sommets ont été explorés.

### Complexité :
- **Temps** : Avec une file de priorité, la complexité temporelle est $$\(O((V + E) \log V)\)$$, où $$\(V\)$$ est le nombre de sommets et $$\(E\)$$ le nombre d'arêtes.
- **Espace** : $$\(O(V)\)$$, car on doit stocker les distances et les prédécesseurs des sommets.

### Code en Python :

```python
import heapq

def dijkstra(graph, start):
    # Initialisation des distances à l'infini
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    # File de priorité pour explorer les sommets les plus proches
    priority_queue = [(0, start)]
    
    while priority_queue:
        # Extraire le sommet avec la distance minimale
        current_distance, current_vertex = heapq.heappop(priority_queue)
        
        # Si la distance actuelle est déjà plus grande que la distance connue, ignorer
        if current_distance > distances[current_vertex]:
            continue
        
        # Explorer les voisins
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            # Si une distance plus courte est trouvée, mettre à jour
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    
    return distances

# Exemple d'utilisation
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

start_vertex = 'A'
print(dijkstra(graph, start_vertex))
```

### Résultat attendu :
```python
{'A': 0, 'B': 1, 'C': 3, 'D': 4}
```

- Le plus court chemin de **A à B** est de 1, de **A à C** est de 3, et de **A à D** est de 4.

### Explication du Code :
1. **graph** : Il s'agit d'un dictionnaire où les clés sont les sommets et les valeurs sont les voisins associés avec leurs poids (distances).
2. On initialise les distances des sommets à l'infini, sauf celle du sommet de départ qui est 0.
3. L'algorithme explore les sommets de manière itérative en mettant à jour les distances et en utilisant une file de priorité pour toujours explorer le sommet avec la distance la plus courte.


## Conclusion 🏁

### Résumé des deux algorithmes :

- **K-NN** :
  - Utilisé pour les problèmes de **classification** ou de **régression**.
  - La performance peut être affectée par le nombre de points dans l'ensemble d'entraînement.
  - Peut être lent pour de grandes bases de données sans optimisation.

- **Dijkstra** :
  - Algorithme fondamental pour trouver le **chemin le plus court** dans un graphe pondéré.
  - Très efficace pour les graphes avec des poids positifs.
  - Utilise une **file de priorité** pour explorer les sommets de manière optimale.

Ces deux algorithmes sont très puissants et largement utilisés dans les domaines de l'intelligence artificielle, de la recherche opérationnelle, et des applications liées aux graphes. 😊