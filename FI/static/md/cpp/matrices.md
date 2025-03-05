# 📚 Les Matrices en C++

Une **matrice** est une structure de données bidimensionnelle, composée de lignes et de colonnes, permettant de stocker des éléments organisés sous la forme d’un tableau à deux dimensions. En programmation, les matrices sont particulièrement utiles dans des applications telles que les calculs scientifiques, le traitement d'images, les jeux vidéo, les algorithmes de graphes, etc.

En C++, une matrice est essentiellement un tableau de tableaux, où chaque élément de la matrice est accessible par deux indices : un pour la ligne et un pour la colonne.

## 🧩 Déclaration d'une Matrice

### 1. **Déclaration de matrice statique**
En C++, une matrice statique (de taille fixe) est généralement déclarée comme un tableau bidimensionnel.

#### Exemple :
```cpp
#include <iostream>
using namespace std;

int main() {
    // Déclaration d'une matrice 3x3
    int matrice[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    // Affichage de la matrice
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrice[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
```

**Explication :**
- `matrice[3][3]` représente une matrice avec 3 lignes et 3 colonnes.
- Les éléments sont stockés dans un tableau de tableaux, chaque sous-tableau représentant une ligne.


## 🧩 Accès aux Éléments de la Matrice

Les éléments d’une matrice sont accessibles par deux indices : un pour la ligne et un pour la colonne. En C++, l'indice commence à 0, ce qui signifie que la première ligne et la première colonne ont l'indice 0.

#### Exemple d'accès :
```cpp
#include <iostream>
using namespace std;

int main() {
    int matrice[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    // Accès à l'élément de la première ligne, deuxième colonne
    cout << "Element à la position (0, 1) : " << matrice[0][1] << endl; // Affiche 2

    return 0;
}
```


## 🧩 Matrices Dynamiques

Si la taille de la matrice n’est pas connue à l’avance, vous pouvez créer une matrice dynamique en utilisant les pointeurs et l'allocation dynamique de mémoire.

### 1. **Déclaration d'une matrice dynamique**
Voici comment déclarer une matrice dynamique à l’aide de `new` et `delete` en C++.

#### Exemple :
```cpp
#include <iostream>
using namespace std;

int main() {
    int lignes = 3, colonnes = 3;
    
    // Allocation dynamique de la matrice
    int** matrice = new int*[lignes]; // Allocation de lignes
    for (int i = 0; i < lignes; i++) {
        matrice[i] = new int[colonnes]; // Allocation de colonnes pour chaque ligne
    }

    // Remplir la matrice
    int count = 1;
    for (int i = 0; i < lignes; i++) {
        for (int j = 0; j < colonnes; j++) {
            matrice[i][j] = count++;
        }
    }

    // Affichage de la matrice
    for (int i = 0; i < lignes; i++) {
        for (int j = 0; j < colonnes; j++) {
            cout << matrice[i][j] << " ";
        }
        cout << endl;
    }

    // Libération de la mémoire
    for (int i = 0; i < lignes; i++) {
        delete[] matrice[i]; // Libérer chaque ligne
    }
    delete[] matrice; // Libérer le tableau de lignes

    return 0;
}
```

**Explication :**
- `new int*[lignes]` alloue un tableau de pointeurs, chaque pointeur pointant vers un tableau de `int` représentant une ligne.
- `delete[]` est utilisé pour libérer la mémoire allouée dynamiquement.


## 🧩 Opérations sur les Matrices

### 1. **Addition de matrices**
L'addition de matrices consiste à additionner les éléments correspondants de deux matrices de même taille.

#### Exemple d'addition de matrices :
```cpp
#include <iostream>
using namespace std;

int main() {
    int matrice1[2][2] = {{1, 2}, {3, 4}};
    int matrice2[2][2] = {{5, 6}, {7, 8}};
    int resultat[2][2];

    // Addition des matrices
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            resultat[i][j] = matrice1[i][j] + matrice2[i][j];
        }
    }

    // Affichage de la matrice résultat
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << resultat[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
```

### 2. **Multiplication de matrices**
La multiplication de matrices est un peu plus complexe que l'addition, car elle implique la somme des produits des éléments correspondants.

#### Exemple de multiplication de matrices :
```cpp
#include <iostream>
using namespace std;

int main() {
    int matrice1[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int matrice2[3][2] = {{7, 8}, {9, 10}, {11, 12}};
    int resultat[2][2] = {0};

    // Multiplication des matrices
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 3; k++) {
                resultat[i][j] += matrice1[i][k] * matrice2[k][j];
            }
        }
    }

    // Affichage de la matrice résultat
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << resultat[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
```


## 🧩 Matrices et Algorithmes

Les matrices sont souvent utilisées dans des algorithmes comme :
- **La multiplication de matrices** dans des applications mathématiques.
- **La résolution de systèmes d'équations linéaires**.
- **Les transformations dans la géométrie informatique**.
- **Les graphes et les algorithmes de plus court chemin**, où une matrice d'adjacence est utilisée pour représenter le graphe.


## 🎯 Conclusion

Les matrices sont des structures de données très puissantes et largement utilisées en C++ pour résoudre des problèmes dans divers domaines comme les calculs numériques, le traitement d'image, et les graphes. Que ce soit sous forme de tableaux statiques ou dynamiques, ou que vous fassiez des opérations comme l'addition et la multiplication, il est essentiel de comprendre comment manipuler les matrices pour résoudre efficacement des problèmes complexes.

💡 **Astuce :** Toujours être attentif à la taille de vos matrices et à leur gestion en mémoire, notamment lorsqu'il s'agit de matrices dynamiques. Optimisez bien vos algorithmes pour ne pas avoir de pertes de performance ou de mémoire.