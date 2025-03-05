# 📚 Structures de Données en C++

Les **structures de données** sont des moyens d'organiser et de stocker des données de manière efficace pour qu'elles puissent être utilisées et modifiées rapidement. Elles sont cruciales pour résoudre des problèmes complexes, car elles affectent directement la performance d'un programme. En C++, les structures de données peuvent être aussi simples que des tableaux ou aussi complexes que des graphes.

Dans ce cours, nous allons explorer les structures de données fondamentales en C++, y compris les tableaux, les listes, les piles, les files, les arbres, et les graphes.

## 🧩 1. Les Tableaux (Arrays)

Les **tableaux** sont l'une des structures de données les plus simples. Un tableau est une collection d'éléments de même type, stockés de manière contiguë en mémoire.

### Déclaration d'un tableau
```cpp
int arr[5] = {1, 2, 3, 4, 5};
```

### Accès aux éléments d'un tableau
```cpp
cout << arr[0]; // Affiche 1
```

### Limites des tableaux
- Taille fixe, définie à la compilation.
- Il est difficile d'ajouter ou de supprimer des éléments après la création du tableau.

### Exemple de manipulation d'un tableau
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    
    // Afficher tous les éléments du tableau
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```

## 🧩 2. Les Listes (Linked Lists)

Une **liste chaînée** est une structure de données dynamique où chaque élément, appelé "nœud", contient une donnée et une référence (ou un pointeur) vers le nœud suivant.

### Déclaration d'une liste chaînée
```cpp
struct Node {
    int data;
    Node* next;
};
```

### Exemple d'une liste chaînée simple
```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    // Création de trois nœuds
    Node* head = new Node{1, nullptr};  // Premier nœud
    Node* second = new Node{2, nullptr}; // Deuxième nœud
    Node* third = new Node{3, nullptr};  // Troisième nœud

    // Chaînage des nœuds
    head->next = second;
    second->next = third;

    // Parcours et affichage de la liste
    Node* current = head;
    while (current != nullptr) {
        cout << current->data << " ";
        current = current->next;
    }
    cout << endl;
    
    return 0;
}
```

#### Avantages des listes chaînées :
- Taille dynamique.
- Insertion et suppression rapides aux extrémités (en O(1)).

#### Inconvénients :
- Accès direct aux éléments non possible (complexité O(n)).


## 🧩 3. Les Piles (Stacks)

Une **pile** est une structure de données qui suit le principe **LIFO** (Last In, First Out). Cela signifie que le dernier élément ajouté à la pile est le premier à être retiré.

### Déclaration et utilisation d'une pile
```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;

    // Ajouter des éléments à la pile
    s.push(10);
    s.push(20);
    s.push(30);

    // Afficher et retirer les éléments
    cout << "Top of stack: " << s.top() << endl;  // Affiche 30
    s.pop();
    cout << "Top of stack after pop: " << s.top() << endl;  // Affiche 20

    return 0;
}
```

#### Opérations sur une pile :
- **push(x)** : Ajoute l'élément `x` au sommet de la pile.
- **pop()** : Retire l'élément au sommet de la pile.
- **top()** : Retourne l'élément au sommet de la pile sans le retirer.
- **empty()** : Vérifie si la pile est vide.


## 🧩 4. Les Files (Queues)

Une **file** est une structure de données qui suit le principe **FIFO** (First In, First Out). L'élément ajouté en premier sera le premier à être retiré.

### Déclaration et utilisation d'une file
```cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;

    // Ajouter des éléments à la file
    q.push(10);
    q.push(20);
    q.push(30);

    // Afficher et retirer les éléments
    cout << "Front of queue: " << q.front() << endl;  // Affiche 10
    q.pop();
    cout << "Front of queue after pop: " << q.front() << endl;  // Affiche 20

    return 0;
}
```

#### Opérations sur une file :
- **push(x)** : Ajoute l'élément `x` à la fin de la file.
- **pop()** : Retire l'élément au début de la file.
- **front()** : Retourne l'élément au début de la file sans le retirer.
- **empty()** : Vérifie si la file est vide.


## 🧩 5. Les Arbres (Trees)

Un **arbre** est une structure de données hiérarchique où chaque nœud a une valeur et une liste d'enfants. Un arbre binaire est un type spécifique d'arbre où chaque nœud peut avoir au maximum deux enfants.

### Déclaration d'un arbre binaire
```cpp
struct Node {
    int data;
    Node* left;
    Node* right;
};
```

### Exemple d'un arbre binaire
```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
};

int main() {
    Node* root = new Node{10, nullptr, nullptr};  // Racine
    Node* leftChild = new Node{5, nullptr, nullptr};  // Enfant gauche
    Node* rightChild = new Node{15, nullptr, nullptr}; // Enfant droit

    root->left = leftChild;
    root->right = rightChild;

    cout << "Racine : " << root->data << endl;  // Affiche 10
    cout << "Enfant gauche : " << root->left->data << endl; // Affiche 5
    cout << "Enfant droit : " << root->right->data << endl; // Affiche 15

    return 0;
}
```

#### Avantages des arbres :
- Utilisés pour représenter des données hiérarchiques.
- Recherche rapide dans des arbres équilibrés (O(log n)).

#### Inconvénients :
- Les arbres peuvent devenir déséquilibrés, ce qui rend les opérations de recherche lentes dans certains cas.


## 🧩 6. Les Graphes (Graphs)

Un **graphe** est une structure composée de **nœuds (ou sommets)** et de **liens (ou arêtes)** entre ces nœuds. Les graphes peuvent être dirigés ou non dirigés, pondérés ou non pondérés.

### Déclaration d'un graphe
```cpp
#include <iostream>
#include <vector>
using namespace std;

struct Graph {
    vector<vector<int>> adjList; // Liste d'adjacence

    Graph(int vertices) {
        adjList.resize(vertices);
    }

    void addEdge(int u, int v) {
        adjList[u].push_back(v); // Ajoute un lien de u à v
    }
};

int main() {
    Graph g(4); // Crée un graphe avec 4 sommets

    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 3);

    // Afficher la liste d'adjacence
    for (int i = 0; i < 4; i++) {
        cout << "Sommets adjacents à " << i << ": ";
        for (int v : g.adjList[i]) {
            cout << v << " ";
        }
        cout << endl;
    }

    return 0;
}
```

#### Types de graphes :
- **Dirigé** : Les arêtes ont une direction (d'un sommet à un autre).
- **Non dirigé** : Les arêtes n'ont pas de direction.
- **Pondéré** : Chaque arête a un poids ou une valeur associée.

## 🎯 Conclusion

Les structures de données sont essentielles pour optimiser la gestion de la mémoire et la performance d'un programme. Choisir la bonne structure de données en fonction du problème à résoudre peut considérablement améliorer l'efficacité et la lisibilité du code. En C++, vous avez accès à une large variété de structures, allant des plus simples comme les tableaux aux plus complexes comme les graphes.

💡 **Astuce** : Comprendre quand et comment utiliser chaque structure de données vous permettra de résoudre des problèmes de manière plus efficace et d'optimiser les performances de vos programmes.