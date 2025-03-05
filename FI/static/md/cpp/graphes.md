# 📚 Introduction aux Graphes en C++

Un **graphe** est une structure de données utilisée pour représenter des relations entre différents objets. Chaque objet dans un graphe est appelé un **nœud** (ou **sommet**), et les connexions entre ces nœuds sont appelées **arêtes** (ou **arcs**). Les graphes sont utilisés dans de nombreux domaines comme les réseaux sociaux, les cartes géographiques, les algorithmes de recherche, et bien plus encore.

Les graphes peuvent être classés en fonction de plusieurs critères, comme :
- **Orientés** vs **Non orientés** : Les arêtes d'un graphe orienté ont une direction, tandis que celles d'un graphe non orienté n'ont pas de direction.
- **Pondérés** vs **Non pondérés** : Les arêtes d'un graphe pondéré ont une valeur (poids), tandis que celles d'un graphe non pondéré n'ont pas de poids.
- **Cohérents** vs **Non cohérents** : Un graphe cohérent est un graphe dans lequel il existe un chemin entre tous les nœuds.

Les graphes sont très utilisés dans des applications comme les réseaux de communication, les chemins les plus courts, les algorithmes de recherche, les jeux vidéo, etc.


## 🧩 Représentation d'un Graphe

Il existe plusieurs manières de représenter un graphe en mémoire. Les deux principales sont :
1. **Liste d'adjacence**
2. **Matrice d'adjacence**

### 1. **Liste d'adjacence**

Dans cette représentation, chaque nœud est associé à une liste des nœuds voisins auxquels il est connecté. Elle est particulièrement efficace en termes de mémoire, surtout lorsque le graphe est clairsemé (peu d'arêtes par rapport au nombre de nœuds).

#### Exemple de liste d'adjacence en C++ :
```cpp
#include <iostream>
#include <list>
using namespace std;

class Graphe {
public:
    int n; // Nombre de nœuds
    list<int>* adj; // Tableau de listes d'adjacence

    // Constructeur
    Graphe(int n) {
        this->n = n;
        adj = new list<int>[n]; // Création du tableau de listes
    }

    // Ajout d'une arête
    void ajouter_arete(int u, int v) {
        adj[u].push_back(v); // Ajoute v à la liste d'adjacence de u
    }

    // Affichage du graphe
    void afficher() {
        for (int i = 0; i < n; i++) {
            cout << "Node " << i << ": ";
            for (auto it = adj[i].begin(); it != adj[i].end(); ++it) {
                cout << *it << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    Graphe g(5); // Création d'un graphe avec 5 nœuds

    g.ajouter_arete(0, 1); // Ajoute une arête entre le nœud 0 et le nœud 1
    g.ajouter_arete(0, 4); // Ajoute une arête entre le nœud 0 et le nœud 4
    g.ajouter_arete(1, 2); // Ajoute une arête entre le nœud 1 et le nœud 2
    g.ajouter_arete(1, 3); // Ajoute une arête entre le nœud 1 et le nœud 3
    g.ajouter_arete(3, 4); // Ajoute une arête entre le nœud 3 et le nœud 4

    g.afficher(); // Affiche le graphe

    return 0;
}
```

**Explication :**
- `list<int>* adj` est un tableau de listes d'adjacence.
- Chaque nœud a une liste de voisins (arêtes).
- La méthode `ajouter_arete` ajoute une arête entre les nœuds `u` et `v`.

### 2. **Matrice d'adjacence**

Une matrice d'adjacence est une matrice carrée où chaque élément de la matrice indique s'il existe une arête entre deux nœuds. La matrice est de taille `n x n`, où `n` est le nombre de nœuds. Si une arête existe entre les nœuds `i` et `j`, la valeur de la matrice à la position `[i][j]` est non nulle (par exemple `1` dans un graphe non pondéré).

#### Exemple de matrice d'adjacence en C++ :
```cpp
#include <iostream>
using namespace std;

class Graphe {
public:
    int n; // Nombre de nœuds
    int** matrice; // Matrice d'adjacence

    // Constructeur
    Graphe(int n) {
        this->n = n;
        matrice = new int*[n]; // Allocation mémoire pour la matrice
        for (int i = 0; i < n; i++) {
            matrice[i] = new int[n]{0}; // Initialisation de chaque cellule à 0
        }
    }

    // Ajout d'une arête
    void ajouter_arete(int u, int v) {
        matrice[u][v] = 1; // Marque la présence de l'arête entre u et v
    }

    // Affichage du graphe
    void afficher() {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cout << matrice[i][j] << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    Graphe g(5); // Création d'un graphe avec 5 nœuds

    g.ajouter_arete(0, 1); // Ajoute une arête entre le nœud 0 et le nœud 1
    g.ajouter_arete(0, 4); // Ajoute une arête entre le nœud 0 et le nœud 4
    g.ajouter_arete(1, 2); // Ajoute une arête entre le nœud 1 et le nœud 2
    g.ajouter_arete(1, 3); // Ajoute une arête entre le nœud 1 et le nœud 3
    g.ajouter_arete(3, 4); // Ajoute une arête entre le nœud 3 et le nœud 4

    g.afficher(); // Affiche le graphe

    return 0;
}
```

**Explication :**
- `int** matrice` est une matrice d'adjacence de taille `n x n`.
- Si `matrice[i][j] = 1`, cela signifie qu'il existe une arête entre le nœud `i` et le nœud `j`.


## 🧩 Algorithmes sur les Graphes

### 1. **Parcours en largeur (BFS)**

Le **parcours en largeur** (ou BFS pour **Breadth-First Search**) est un algorithme de recherche dans un graphe qui explore tous les voisins d’un nœud avant de passer à ses voisins plus éloignés.

#### Exemple de BFS en C++ :
```cpp
#include <iostream>
#include <queue>
#include <list>
using namespace std;

class Graphe {
public:
    int n; // Nombre de nœuds
    list<int>* adj; // Liste d'adjacence

    // Constructeur
    Graphe(int n) {
        this->n = n;
        adj = new list<int>[n];
    }

    // Ajout d'une arête
    void ajouter_arete(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u); // Pour un graphe non orienté
    }

    // BFS à partir du nœud source
    void BFS(int source) {
        bool* visite = new bool[n]{false}; // Tableau de marquage des nœuds visités
        queue<int> q;

        visite[source] = true;
        q.push(source);

        while (!q.empty()) {
            int node = q.front();
            q.pop();
            cout << node << " "; // Affiche le nœud visité

            // Parcours de tous les voisins non visités
            for (auto it = adj[node].begin(); it != adj[node].end(); ++it) {
                if (!visite[*it]) {
                    q.push(*it);
                    visite[*it] = true;
                }
            }
        }
        delete[] visite;
    }
};

int main() {
    Graphe g(6);

    g.ajouter_arete(0, 1);
    g.ajouter_arete(0, 2);
    g.ajouter_arete(1, 3);
    g.ajouter_arete(2, 4);
    g.ajouter_arete(3, 5);

    cout << "Parcours BFS à partir du nœud 0 : ";
    g.BFS(0);

    return 0;
}
```


## 🎯 Conclusion

Les graphes sont des structures de données fondamentales en informatique et sont utilisés dans de nombreuses applications. Que vous choisissiez d'utiliser une liste d'adjacence ou une matrice d'adjacence, chaque représentation a ses avantages et inconvénients. Les algorithmes de parcours tels que BFS sont essentiels pour explorer et traiter les graphes efficacement. 

💡 **Astuce :** Assurez-vous de bien comprendre les concepts de base des graphes avant de passer à des algorithmes plus complexes comme Dijkstra ou A* pour les chemins les plus courts.