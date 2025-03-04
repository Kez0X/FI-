# 📚 Cours Complet sur les Graphes en C  

Les **graphes** sont des structures de données fondamentales en informatique, utilisées pour modéliser des réseaux, des relations et des parcours. Ils sont présents dans de nombreux domaines comme la cartographie 🗺️, les réseaux sociaux 📱, les circuits électroniques ⚡ et les algorithmes d'intelligence artificielle 🤖.  


## 🏁 Introduction aux Graphes  

Un **graphe** est un ensemble de **sommets (ou nœuds)** et de **liens (ou arêtes)** reliant ces sommets.  

📌 **Notation mathématique** :  
Un graphe est défini comme :  
\[ G = (V, E) \]  
où :  
- \( V \) est l’ensemble des **sommets** 🟢  
- \( E \) est l’ensemble des **arêtes** qui relient ces sommets 🔗  

### 🎯 Types de Graphes  
✔️ **Graphe orienté (digraph)** ➝ les arêtes ont une direction ➡️  
✔️ **Graphe non orienté** ➝ les arêtes n'ont pas de direction 🔄  
✔️ **Graphe pondéré** ➝ les arêtes ont un poids (exemple : distances) ⚖️  
✔️ **Graphe connexe** ➝ tous les sommets sont reliés entre eux 🔗  
✔️ **Graphe acyclique** ➝ ne contient pas de cycles 🔁  


## 🔹 1. Représentation d’un Graphe  

Il existe plusieurs manières de représenter un graphe en C :

### 📌 1.1 Matrice d’Adjacence 🏛️  
Une **matrice d'adjacence** est une matrice \( N \times N \) où :  
- **1** indique la présence d’une arête  
- **0** indique l’absence d’une arête  

#### **Exemple** : Graphe non orienté  
```
    (0) --- (1)
     |      /
     |     /
    (2) - (3)
```
🔢 **Matrice d’adjacence** :  
```
  0  1  1  0
  1  0  1  1
  1  1  0  1
  0  1  1  0
```

📌 **Implémentation en C**  
```c
#include <stdio.h>

#define N 4 // Nombre de sommets

void afficherMatrice(int graph[N][N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            printf("%d ", graph[i][j]);
        }
        printf("\n");
    }
}

int main() {
    int graph[N][N] = {
        {0, 1, 1, 0},
        {1, 0, 1, 1},
        {1, 1, 0, 1},
        {0, 1, 1, 0}
    };

    printf("Matrice d'Adjacence du Graphe :\n");
    afficherMatrice(graph);

    return 0;
}
```

✅ **Avantages** : Simple et rapide 🔥  
❌ **Inconvénients** : Utilise beaucoup de mémoire pour les grands graphes 🚨  


### 📌 1.2 Liste d’Adjacence 📜  
Une **liste d’adjacence** représente un graphe avec une liste chaînée pour chaque sommet contenant ses voisins.

#### **Exemple**  
```
0 → 1 → 2  
1 → 0 → 2 → 3  
2 → 0 → 1 → 3  
3 → 1 → 2  
```

📌 **Implémentation en C**  
```c
#include <stdio.h>
#include <stdlib.h>

// Structure pour un nœud de la liste chaînée
struct Node {
    int sommet;
    struct Node* suivant;
};

// Structure pour le graphe
struct Graph {
    int N;
    struct Node** listesAdj;
};

// Création d'un nouveau nœud
struct Node* creerNode(int sommet) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->sommet = sommet;
    newNode->suivant = NULL;
    return newNode;
}

// Création d'un graphe avec N sommets
struct Graph* creerGraph(int N) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->N = N;
    graph->listesAdj = (struct Node**)malloc(N * sizeof(struct Node*));

    for (int i = 0; i < N; i++)
        graph->listesAdj[i] = NULL;

    return graph;
}

// Ajout d'une arête au graphe
void ajouterArete(struct Graph* graph, int src, int dest) {
    struct Node* newNode = creerNode(dest);
    newNode->suivant = graph->listesAdj[src];
    graph->listesAdj[src] = newNode;

    newNode = creerNode(src);
    newNode->suivant = graph->listesAdj[dest];
    graph->listesAdj[dest] = newNode;
}

// Affichage du graphe
void afficherGraph(struct Graph* graph) {
    for (int i = 0; i < graph->N; i++) {
        struct Node* temp = graph->listesAdj[i];
        printf("Sommet %d : ", i);
        while (temp) {
            printf("%d -> ", temp->sommet);
            temp = temp->suivant;
        }
        printf("NULL\n");
    }
}

int main() {
    int N = 4;
    struct Graph* graph = creerGraph(N);
    
    ajouterArete(graph, 0, 1);
    ajouterArete(graph, 0, 2);
    ajouterArete(graph, 1, 2);
    ajouterArete(graph, 1, 3);
    ajouterArete(graph, 2, 3);

    afficherGraph(graph);
    
    return 0;
}
```

✅ **Avantages** : Économe en mémoire 🌱  
❌ **Inconvénients** : Accès moins rapide qu’une matrice 🚀  


## 🔹 2. Parcours des Graphes  

### 📌 2.1 Parcours en **Profondeur** (DFS) 🔍  
Le **DFS** (Depth First Search) explore un graphe en allant toujours **le plus loin possible avant de revenir en arrière**.

📌 **Implémentation en C**  
```c
#include <stdio.h>

#define N 4

void DFS(int graph[N][N], int visited[], int sommet) {
    printf("%d ", sommet);
    visited[sommet] = 1;

    for (int i = 0; i < N; i++) {
        if (graph[sommet][i] == 1 && !visited[i])
            DFS(graph, visited, i);
    }
}

int main() {
    int graph[N][N] = {
        {0, 1, 1, 0},
        {1, 0, 1, 1},
        {1, 1, 0, 1},
        {0, 1, 1, 0}
    };
    int visited[N] = {0};

    printf("Parcours DFS : ");
    DFS(graph, visited, 0);
    
    return 0;
}
```


Voici l'implémentation complète du **parcours en largeur (BFS - Breadth First Search)** en C 🚀.  

---

### 📌 2.2 Parcours en **Largeur** (BFS) 🌊  
Le **BFS** (Breadth First Search) explore un graphe **niveau par niveau**, en utilisant une **file (queue)**.  

🔹 **Principe** :
1. Commence au sommet de départ 🏁  
2. Explore tous ses voisins 👀  
3. Passe au niveau suivant avant d'aller plus loin 🔄  
4. Utilise une **file (queue)** pour mémoriser les sommets à explorer 📥  

## ✅ Implémentation du BFS en C  

```c
#include <stdio.h>
#include <stdlib.h>

#define N 6 // Nombre de sommets

// Structure pour la file (queue)
struct Queue {
    int items[N];
    int front;
    int rear;
};

// Création de la file
struct Queue* creerQueue() {
    struct Queue* q = (struct Queue*)malloc(sizeof(struct Queue));
    q->front = -1;
    q->rear = -1;
    return q;
}

// Vérifie si la file est vide
int estVide(struct Queue* q) {
    return q->front == -1;
}

// Enfile un élément
void enfiler(struct Queue* q, int valeur) {
    if (q->rear == N - 1) {
        printf("La file est pleine\n");
        return;
    }
    if (q->front == -1)
        q->front = 0;
    q->rear++;
    q->items[q->rear] = valeur;
}

// Défile un élément
int defiler(struct Queue* q) {
    if (estVide(q)) {
        printf("La file est vide\n");
        return -1;
    }
    int valeur = q->items[q->front];
    q->front++;
    if (q->front > q->rear)
        q->front = q->rear = -1;
    return valeur;
}

// Fonction BFS
void BFS(int graph[N][N], int depart) {
    struct Queue* queue = creerQueue();
    int visite[N] = {0}; // Tableau pour suivre les sommets visités

    // Marquer le sommet de départ comme visité et l'ajouter à la file
    visite[depart] = 1;
    enfiler(queue, depart);

    printf("Parcours BFS : ");

    while (!estVide(queue)) {
        int sommet = defiler(queue);
        printf("%d ", sommet);

        // Explorer les voisins du sommet actuel
        for (int i = 0; i < N; i++) {
            if (graph[sommet][i] == 1 && !visite[i]) {
                visite[i] = 1;
                enfiler(queue, i);
            }
        }
    }

    printf("\n");
}

int main() {
    // Graphe représenté sous forme de matrice d'adjacence
    int graph[N][N] = {
        {0, 1, 1, 0, 0, 0},
        {1, 0, 0, 1, 1, 0},
        {1, 0, 0, 1, 0, 1},
        {0, 1, 1, 0, 1, 1},
        {0, 1, 0, 1, 0, 1},
        {0, 0, 1, 1, 1, 0}
    };

    int depart = 0; // On commence par le sommet 0

    BFS(graph, depart);

    return 0;
}
```


## 🏆 Explication du Code  

1️⃣ **Création d’une file** 📥  
   - On utilise une structure pour implémenter la **file (queue)**  
   - Fonction `enfiler()` pour ajouter un élément  
   - Fonction `defiler()` pour retirer un élément  

2️⃣ **Initialisation du parcours BFS** 🏁  
   - On commence par le **sommet de départ**, qu'on **marque comme visité** et qu'on ajoute à la file  

3️⃣ **Exploration des sommets** 🔄  
   - On prend un sommet de la file  
   - On explore **tous ses voisins non visités**  
   - On marque ces voisins comme visités et on les ajoute à la file  

4️⃣ **Affichage du parcours** 🎯  
   - Tous les sommets sont affichés dans l'ordre de visite  


## 🎯 Exécution  

🎥 **Exemple de graphe utilisé** :  
```
   (0) --- (1) --- (4)
    |       |       |
    |       |       |
   (2) --- (3) --- (5)
```

📌 **Sortie attendue pour BFS depuis 0** :  
```
Parcours BFS : 0 1 2 3 4 5
```


## 🔥 Points Forts du BFS  
✅ **Trouve le chemin le plus court dans un graphe non pondéré**  
✅ **Explore tous les voisins avant d'aller plus loin**  
✅ **Utile pour les recherches de plus court chemin et les parcours de niveaux**  

🚀 Maintenant, tu peux utiliser **BFS** pour résoudre plein de problèmes comme :
- Rechercher le plus court chemin dans un labyrinthe 🏰  
- Trouver des relations dans un réseau social 📱  
- Explorer un graphe de sites web 🌍  

🔥 **Astuce** : Si tu veux optimiser BFS pour des graphes très grands, utilise une **liste d’adjacence** au lieu d’une matrice d’adjacence pour économiser de la mémoire. 🎯


## 🎯 Conclusion  

Les **graphes** sont une structure essentielle en algorithmique.  
✔️ **Matrice d’adjacence** : rapide mais coûteux en mémoire 🏛️  
✔️ **Liste d’adjacence** : économe en mémoire, mais plus lente 📜  
✔️ **Parcours DFS et BFS** : utilisés pour explorer les graphes 🔍  

💡 **Astuce** : Bien choisir la représentation selon les besoins du problème ! 🚀