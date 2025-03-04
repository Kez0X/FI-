# Les Graphes en Python 🕸️

Les **graphes** sont des structures de données qui permettent de représenter des relations entre différents objets. Un graphe est constitué de **sommets** (ou **noeuds**) et de **liens** (ou **arêtes**) entre ces sommets.

### 1. Qu'est-ce qu'un graphe ? 🧠

Un **graphe** est une structure composée de deux éléments principaux :

- **Sommets (ou nœuds)** : Représentent les entités ou objets dans le graphe.
- **Arêtes (ou liens)** : Représentent les connexions ou relations entre les sommets.

#### 1.1. Notation des graphes

Les graphes sont souvent notés sous la forme \( G = (V, E) \), où :
- \( V \) est l'ensemble des sommets (ou noeuds).
- \( E \) est l'ensemble des arêtes qui relient les sommets.

Exemple : Voici un graphe simple avec 3 sommets et 2 arêtes.

```
   A
  / \
 B   C
```

Dans cet exemple :
- Les sommets sont **A**, **B**, **C**.
- Les arêtes sont les liens entre les sommets : **(A, B)** et **(A, C)**.

---

## 2. Types de graphes 🛠️

Il existe plusieurs types de graphes :

### 2.1. Graphe orienté (ou dirigé)

Un **graphe orienté** (ou **digraphe**) est un graphe où chaque arête a une direction. Cela signifie que les arêtes vont d’un sommet à un autre sommet, et non l’inverse. Les arêtes sont alors notées sous la forme **(u, v)**, où **u** est le sommet de départ et **v** est le sommet d’arrivée.

Exemple :
```
   A → B
   ↑
   C
```

Ici, il y a trois sommets **A**, **B**, **C** et les arêtes sont orientées de **A à B** et de **A à C**.

### 2.2. Graphe non orienté

Un **graphe non orienté** est un graphe où les arêtes ne possèdent pas de direction. Cela signifie que les arêtes relient deux sommets sans préciser un sens.

Exemple :
```
   A — B
   |
   C
```

Ici, les arêtes **(A, B)** et **(A, C)** ne sont pas orientées, elles relient simplement les sommets sans indiquer un sens particulier.

### 2.3. Graphe pondéré

Un **graphe pondéré** est un graphe où chaque arête possède un poids ou une valeur. Ce poids peut représenter des distances, des coûts ou tout autre type de métrique.

Exemple :

```
   A —(3)— B
   |        |
  (2)      (1)
   |        |
   C —(5)— D
```

Dans cet exemple, les arêtes ont des poids respectifs 3, 2, 1 et 5.

---

## 3. Représentation des graphes en Python 🔢

Il existe plusieurs manières de représenter un graphe en Python. Les deux plus courantes sont :

### 3.1. Liste d’adjacence

Une **liste d’adjacence** est une représentation du graphe où chaque sommet est associé à une liste (ou un ensemble) de sommets voisins. C’est une manière efficace de représenter les graphes, notamment les graphes peu denses.

Voici un exemple de représentation de graphe non orienté avec une liste d'adjacence :

```python
# Liste d'adjacence d'un graphe non orienté
graphe = {
    "A": ["B", "C"],
    "B": ["A", "C"],
    "C": ["A", "B"]
}
```

Pour un graphe orienté, la représentation est légèrement différente :

```python
# Liste d'adjacence pour un graphe orienté
graphe_oriente = {
    "A": ["B", "C"],
    "B": ["C"],
    "C": []
}
```

### 3.2. Matrice d’adjacence

Une **matrice d'adjacence** est une matrice carrée dans laquelle chaque ligne et chaque colonne représentent un sommet, et l'élément de la matrice indique s’il existe une arête entre les deux sommets correspondants.

Voici un exemple d’une matrice d’adjacence pour un graphe non orienté :

```
    A  B  C
A [ 0, 1, 1 ]
B [ 1, 0, 1 ]
C [ 1, 1, 0 ]
```

Dans cet exemple, les sommets sont **A**, **B** et **C**, et les arêtes sont indiquées par des 1.

Exemple de matrice pour un graphe orienté :

```
    A  B  C
A [ 0, 1, 1 ]
B [ 0, 0, 1 ]
C [ 0, 0, 0 ]
```

### 3.3. Liste d’arêtes

Une **liste d'arêtes** est une liste simple où chaque élément est une paire de sommets représentant une arête du graphe. C'est une représentation simple mais moins efficace pour des graphes denses.

```python
# Liste d'arêtes pour un graphe non orienté
arêtes = [("A", "B"), ("A", "C"), ("B", "C")]
```

---

## 4. Traversée des graphes 🧭

Il existe deux algorithmes de traversée principaux pour les graphes : **la recherche en largeur (BFS)** et **la recherche en profondeur (DFS)**.

### 4.1. Recherche en largeur (BFS)

La **recherche en largeur** explore tous les voisins d’un sommet avant de passer aux voisins des voisins. Elle utilise une **file** (queue) pour maintenir l’ordre des sommets à explorer.

Exemple d'implémentation de BFS :

```python
from collections import deque

def bfs(graphe, départ):
    visite = set()  # Ensemble des sommets visités
    file = deque([départ])  # File d'attente pour BFS

    while file:
        sommet = file.popleft()
        if sommet not in visite:
            print(sommet, end=" ")  # Afficher le sommet visité
            visite.add(sommet)
            file.extend(graphe[sommet])  # Ajouter les voisins à la file

# Exemple de graphe et appel de BFS
graphe = {
    "A": ["B", "C"],
    "B": ["A", "C"],
    "C": ["A", "B"]
}

bfs(graphe, "A")  # Affiche A B C
```

### 4.2. Recherche en profondeur (DFS)

La **recherche en profondeur** explore un sommet aussi loin que possible avant de revenir en arrière. Elle utilise une **pile** pour maintenir l’ordre de traversée.

Exemple d'implémentation de DFS :

```python
def dfs(graphe, sommet, visite=None):
    if visite is None:
        visite = set()  # Ensemble des sommets visités
    visite.add(sommet)
    print(sommet, end=" ")  # Afficher le sommet visité

    for voisin in graphe[sommet]:
        if voisin not in visite:
            dfs(graphe, voisin, visite)

# Exemple de graphe et appel de DFS
graphe = {
    "A": ["B", "C"],
    "B": ["A", "C"],
    "C": ["A", "B"]
}

dfs(graphe, "A")  # Affiche A B C
```

---

## 5. Applications des graphes 🧩

Les graphes sont utilisés dans de nombreux domaines, notamment :

- **Réseaux sociaux** : Représentation des utilisateurs (sommets) et des relations entre eux (arêtes).
- **Recherche de chemin** : Utilisation d'algorithmes comme **Dijkstra** ou **A* (A-star)** pour trouver le chemin le plus court entre deux sommets.
- **Systèmes de recommandation** : Graphes pour modéliser les préférences des utilisateurs.
- **Planification d’itinéraires** : Cartes routières ou réseaux de transport.

---

## 6. Conclusion 🎯

Les **graphes** sont une structure de données fondamentale pour représenter des relations complexes entre des objets. En Python, tu peux représenter un graphe de différentes manières, comme avec des listes d’adjacence, des matrices ou des listes d’arêtes. Tu peux aussi traverser un graphe en utilisant des algorithmes comme la **recherche en largeur (BFS)** ou la **recherche en profondeur (DFS)**.

### Points clés :
- Un **graphe** est composé de **sommets** et d’**arêtes** qui relient ces sommets.
- Les graphes peuvent être orientés ou non orientés.
- Les **listes d’adjacence** et les **matrices d’adjacence** sont des moyens courants de représenter un graphe.
- Les algorithmes de traversée des graph

es comme **BFS** et **DFS** sont fondamentaux pour résoudre de nombreux problèmes.

Les graphes sont omniprésents dans le monde moderne et tu les retrouveras dans beaucoup d'applications. 😊

---

# Représentation des Graphes

Comme mentionné précédemment, un **graphe** est composé de sommets (ou nœuds) et d'arêtes (ou liens) qui relient ces sommets. Pour pouvoir manipuler ces graphes dans un programme informatique, on a besoin de trouver une manière efficace de les représenter en mémoire.

### 1. **Matrice d'adjacence** 🧮

Une **matrice d'adjacence** est une matrice carrée utilisée pour représenter les graphes. Dans cette matrice :
- Chaque ligne et chaque colonne représente un sommet.
- Les éléments de la matrice indiquent la présence ou l'absence d'une arête entre les sommets.
- Pour un **graphe orienté**, si une arête existe du sommet \(i\) au sommet \(j\), alors la cellule à la ligne \(i\) et à la colonne \(j\) contiendra une valeur non nulle (souvent un `1` ou le poids de l'arête).
- Pour un **graphe non orienté**, la matrice est symétrique. C'est-à-dire que si une arête existe entre \(i\) et \(j\), alors à la fois la cellule [i][j] et la cellule [j][i] contiendront une valeur non nulle.

#### Avantages :
- **Accès rapide** : L'accès aux informations est en \(O(1)\). Pour savoir s'il y a une arête entre deux sommets, on peut simplement accéder à la cellule correspondante.
- **Simple à implémenter** : C'est une structure simple et bien définie.

#### Inconvénients :
- **Mémoire** : La matrice d'adjacence nécessite beaucoup de mémoire pour les graphes larges ou peu denses. Si le graphe a \(n\) sommets, il faudra une matrice de \(n \times n\), ce qui peut devenir très coûteux si le graphe est grand.

#### Exemple de Matrice d'Adjacence (non orienté) :

Supposons un graphe non orienté avec les sommets **A, B, C, D** et les arêtes **(A, B), (A, C), (B, D)**. Voici la représentation en matrice :

```
    A  B  C  D
A [ 0, 1, 1, 0 ]
B [ 1, 0, 0, 1 ]
C [ 1, 0, 0, 0 ]
D [ 0, 1, 0, 0 ]
```

Dans cette matrice :
- La cellule [A][B] est à `1` car il y a une arête entre A et B.
- La cellule [A][C] est à `1` car il y a une arête entre A et C.
- La cellule [B][D] est à `1` car il y a une arête entre B et D.

#### Exemple pour un graphe orienté :

```
    A  B  C  D
A [ 0, 1, 1, 0 ]
B [ 0, 0, 0, 1 ]
C [ 0, 0, 0, 0 ]
D [ 0, 0, 1, 0 ]
```

Ici, les arêtes sont orientées :
- Il y a une arête de A vers B, une de A vers C, une de B vers D et une de D vers C.

---

### 2. **Liste d'adjacence** 🗂️

Une **liste d'adjacence** est une autre méthode populaire pour représenter un graphe. Elle consiste à associer à chaque sommet une liste (ou un ensemble) de ses voisins. Chaque voisin est un autre sommet auquel il est directement relié par une arête.

#### Avantages :
- **Mémoire efficace** : Cette représentation est beaucoup plus efficace en termes de mémoire, surtout pour les graphes peu denses (c'est-à-dire les graphes avec peu d'arêtes).
- **Facile à modifier** : Ajouter ou supprimer des arêtes dans un graphe est relativement facile et rapide avec une liste d'adjacence.

#### Inconvénients :
- **Accès aux arêtes** : Pour vérifier si une arête existe entre deux sommets, il faut parcourir la liste des voisins du sommet, ce qui peut prendre du temps dans le cas d'un grand nombre de voisins.

#### Exemple de Liste d'Adjacence (non orienté) :

Prenons un graphe non orienté avec les sommets **A, B, C, D** et les arêtes **(A, B), (A, C), (B, D)**. Voici la représentation sous forme de liste d'adjacence :

```python
graphe = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A"],
    "D": ["B"]
}
```

Ici :
- Le sommet **A** est relié à **B** et **C**.
- Le sommet **B** est relié à **A** et **D**.
- Le sommet **C** est relié à **A**.
- Le sommet **D** est relié à **B**.

---

### 3. **Dictionnaire d'adjacence** 🗣️

Le **dictionnaire d'adjacence** est une variante de la liste d'adjacence. Dans cette méthode, chaque sommet est une clé dans un dictionnaire, et la valeur associée à cette clé est une liste (ou un ensemble) des voisins du sommet. La différence principale par rapport à la liste d'adjacence réside dans la manière dont on accède aux voisins des sommets, le dictionnaire permettant un accès plus rapide que la liste.

#### Avantages :
- **Accès rapide** : Comme les dictionnaires en Python utilisent des tables de hachage, l'accès aux voisins d'un sommet est en moyenne \(O(1)\).
- **Efficacité en mémoire** : Comme avec les listes d'adjacence, cette méthode est efficace en mémoire pour des graphes peu denses.

#### Inconvénients :
- **Suppression d'arêtes** : Supprimer une arête peut être légèrement plus complexe que dans la liste d'adjacence, surtout si la structure contient des valeurs dupliquées.

#### Exemple de Dictionnaire d'Adjacence (orienté) :

Prenons un graphe orienté avec les sommets **A, B, C, D** et les arêtes **(A, B), (A, C), (B, D), (C, D)**. Voici la représentation sous forme de dictionnaire :

```python
graphe = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["D"],
    "D": []
}
```

Ici :
- Le sommet **A** est relié à **B** et **C**.
- Le sommet **B** est relié à **D**.
- Le sommet **C** est relié à **D**.
- Le sommet **D** n’a pas de voisins.

---

### Comparaison des Représentations 📊

| Critère                       | Matrice d'Adjacence       | Liste d'Adjacence          | Dictionnaire d'Adjacence  |
|-------------------------------|---------------------------|----------------------------|---------------------------|
| **Mémoire**                    | \(O(n^2)\) pour un graphe avec \(n\) sommets | \(O(n + e)\) pour un graphe avec \(e\) arêtes | \(O(n + e)\) |
| **Ajout d’arêtes**             | Facile (modification de la cellule) | Facile (ajouter un élément dans la liste) | Facile (ajouter un élément dans le dictionnaire) |
| **Accès à une arête**          | \(O(1)\)                  | \(O(k)\), où \(k\) est le nombre de voisins du sommet | \(O(1)\) |
| **Parcours des voisins**       | \(O(n)\) pour chaque sommet | \(O(k)\) pour chaque sommet | \(O(k)\) pour chaque sommet |

- **Matrice d'Adjacence** est idéale pour les graphes denses (beaucoup d'arêtes).
- **Liste d'Adjacence** est idéale pour les graphes peu denses.
- **Dictionnaire d'Adjacence** combine l'efficacité de la liste d'adjacence avec l'accès rapide des dictionnaires.

---

### Conclusion 🏁

Chaque méthode de représentation des graphes a ses avantages et ses inconvénients. Le choix de la méthode dépend souvent de l'application et de la nature du graphe :
- Si le graphe est dense, la **matrice d'adjacence** peut être plus adaptée.
- Si le graphe est peu dense, la **liste d'adjacence** ou le **dictionnaire d'adjacence** seront plus efficaces en termes de mémoire.

Les graphes sont des structures fondamentales en informatique et sont utilisés dans une grande variété d'applications, y compris les réseaux, la recherche de chemins, et bien plus encore. 😊