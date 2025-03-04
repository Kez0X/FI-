# 📚 Cours Complet sur les Structures de Données en C  

Les **structures de données** sont des moyens d'organiser et de stocker des données de manière efficace. En C, elles sont essentielles pour manipuler des collections d'informations de manière optimisée.  



## 🏁 Introduction  

Une **structure de données** est une manière d’organiser, de gérer et de stocker des informations afin de les utiliser efficacement.  

✅ **Pourquoi utiliser des structures de données ?**  
✔️ Organiser et gérer les données efficacement 📦  
✔️ Optimiser les performances des programmes 🚀  
✔️ Faciliter la manipulation de grandes quantités d’informations 🔢  



## 🔹 1. Les Structures (`struct`)  

Une **structure** (`struct`) est une collection de **variables de types différents** regroupées sous un même nom.  

### 📌 Déclaration d’une Structure  

```c
struct Point {
    int x;
    int y;
};
```

### 📌 Utilisation  

```c
struct Point p1;  // Déclaration d'une variable de type struct Point
p1.x = 10;
p1.y = 20;

printf("Point: (%d, %d)\n", p1.x, p1.y);
```

✅ **Explication :**  
✔️ `struct Point` définit une structure contenant deux entiers.  
✔️ `p1` est une variable de type `struct Point`.  
✔️ Les membres sont accessibles via l’opérateur `.`.  

### 📌 Initialisation Directe  

```c
struct Point p2 = {5, 15};
```



## 🔹 2. Les Tableaux de Structures  

On peut déclarer un **tableau de structures** pour stocker plusieurs éléments de même type.  

```c
struct Point tab[3] = { {1, 2}, {3, 4}, {5, 6} };

for (int i = 0; i < 3; i++) {
    printf("Point %d: (%d, %d)\n", i+1, tab[i].x, tab[i].y);
}
```

✅ **Explication :**  
✔️ `tab` est un tableau contenant trois `struct Point`.  



## 🔹 3. Les Pointeurs sur Structures  

Il est possible de manipuler les structures avec des **pointeurs**, ce qui optimise l’utilisation de la mémoire.  

```c
struct Point p1 = {10, 20};
struct Point *ptr = &p1;

printf("Point: (%d, %d)\n", ptr->x, ptr->y);
```

✅ **Explication :**  
✔️ `ptr` pointe sur `p1`.  
✔️ `->` est utilisé pour accéder aux membres via un pointeur.  



## 🔹 4. Structures et Fonctions  

Une structure peut être passée en argument d’une fonction.  

```c
void afficherPoint(struct Point p) {
    printf("Point: (%d, %d)\n", p.x, p.y);
}

int main() {
    struct Point p = {10, 20};
    afficherPoint(p);
    return 0;
}
```

✅ **Passage par adresse (optimisé) :**  

```c
void modifierPoint(struct Point *p) {
    p->x = 50;
    p->y = 100;
}

int main() {
    struct Point p = {10, 20};
    modifierPoint(&p);
    printf("Point modifié: (%d, %d)\n", p.x, p.y);
    return 0;
}
```

✔️ Passage **par référence** évite la copie de données et optimise la mémoire.  



## 🔹 5. Les Unions (`union`)  

Une **union** est similaire à une structure, sauf que tous ses membres **partagent la même mémoire**.  

```c
union Data {
    int i;
    float f;
    char str[20];
};

union Data data;
data.i = 10;
printf("i: %d\n", data.i);
```

✅ **Avantages :**  
✔️ Économie de mémoire.  

🚨 **Attention !** Modifier un champ écrase les autres.  



## 🔹 6. Les Listes Chaînées  

Une **liste chaînée** est une structure de données où chaque élément (**nœud**) contient une valeur et un **pointeur vers le nœud suivant**.  

### 📌 Définition d'une Liste Chaînée  

```c
struct Node {
    int data;
    struct Node *next;
};
```

### 📌 Création d’un Nœud  

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

int main() {
    struct Node *head = NULL;
    head = (struct Node*)malloc(sizeof(struct Node));
    
    head->data = 10;
    head->next = NULL;

    printf("Valeur du premier nœud: %d\n", head->data);
    free(head);
    return 0;
}
```

✅ **Explication :**  
✔️ `malloc()` alloue un espace mémoire pour un nœud.  
✔️ `head` est le premier élément de la liste.  
✔️ `free(head)` libère la mémoire allouée.  



## 🔹 7. Les Piles (Stack)  

Une **pile** est une structure de données suivant le **principe LIFO (Last In, First Out)**.  

### 📌 Implémentation d’une Pile avec un Tableau  

```c
#define MAX 100
int stack[MAX];
int top = -1;

void push(int x) {
    if (top < MAX - 1) {
        stack[++top] = x;
    }
}

int pop() {
    if (top >= 0) {
        return stack[top--];
    }
    return -1;
}
```

✅ **Opérations :**  
✔️ **Push** : Ajouter un élément.  
✔️ **Pop** : Retirer un élément.  



## 🔹 8. Les Files (Queue)  

Une **file** suit le **principe FIFO (First In, First Out)**.  

### 📌 Implémentation d’une File  

```c
#define MAX 100
int queue[MAX];
int front = 0, rear = -1;

void enqueue(int x) {
    if (rear < MAX - 1) {
        queue[++rear] = x;
    }
}

int dequeue() {
    if (front <= rear) {
        return queue[front++];
    }
    return -1;
}
```

✅ **Opérations :**  
✔️ **Enqueue** : Ajouter à la fin.  
✔️ **Dequeue** : Retirer au début.  



## 🎯 Conclusion  

Les **structures de données** en C permettent une gestion efficace de la mémoire et des performances.  

✅ **Résumé :**  
✔️ **`struct`** pour grouper plusieurs types de données 📦  
✔️ **Pointeurs sur structures** pour optimiser l'accès mémoire 🧭  
✔️ **Listes chaînées** pour une mémoire dynamique 🔗  
✔️ **Piles et Files** pour gérer des données de manière structurée 📚  

💡 **Astuce :** Toujours bien gérer l’allocation et la libération de mémoire pour éviter les fuites mémoire ! 🚀