# 📚 Cours Complet sur les Matrices en C  

Les **matrices** sont des structures de données bidimensionnelles utilisées pour stocker et manipuler des données sous forme de tableau. Elles sont très utilisées en programmation, notamment pour la gestion des données tabulaires, les algorithmes mathématiques et le traitement d'images.  


## 🏁 Introduction  

Une **matrice** est un tableau à deux dimensions, où chaque élément est identifié par **deux indices** :  

📌 **Syntaxe générale** :  
```c
type nom[ligne][colonne];
```

📌 **Exemple** : Déclaration d'une matrice de 3 lignes et 4 colonnes.  
```c
int mat[3][4];
```

✅ **Pourquoi utiliser des matrices ?**  
✔️ Représenter des données tabulaires 📊  
✔️ Manipuler des grilles (jeux, images, cartes, etc.) 🎮🖼️  
✔️ Faciliter certains algorithmes mathématiques 🔢  


## 🔹 1. Déclaration et Initialisation d'une Matrice  

### 📌 Déclaration sans initialisation  
```c
int mat[3][3]; // Matrice de 3x3
```

### 📌 Déclaration avec initialisation  
```c
int mat[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

### 📌 Initialisation implicite  
```c
int mat[][3] = { {1, 2, 3}, {4, 5, 6} }; // Le nombre de lignes est déduit
```

## 🔹 2. Accès aux Éléments d'une Matrice  

Les **indices commencent à 0**, comme pour les tableaux unidimensionnels.  

```c
int mat[2][2] = { {1, 2}, {3, 4} };

printf("%d\n", mat[0][1]); // Affiche 2
printf("%d\n", mat[1][0]); // Affiche 3
```

✅ **Accès avec `mat[i][j]`** où `i` est l’indice de ligne et `j` celui de colonne.  


## 🔹 3. Parcourir une Matrice  

### 📌 Affichage d’une Matrice  
```c
#include <stdio.h>

int main() {
    int mat[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    for (int i = 0; i < 3; i++) { 
        for (int j = 0; j < 3; j++) {
            printf("%d ", mat[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

✅ **Explication** :  
✔️ Deux boucles `for` pour parcourir les lignes (`i`) et colonnes (`j`).  
✔️ `printf("%d ", mat[i][j]);` affiche l’élément en position `[i][j]`.  


## 🔹 4. Lecture et Écriture d'une Matrice  

### 📌 Saisie par l'utilisateur  
```c
#include <stdio.h>

int main() {
    int mat[2][2];

    // Saisie de la matrice
    printf("Entrez 4 nombres :\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            scanf("%d", &mat[i][j]);
        }
    }

    // Affichage de la matrice
    printf("Matrice :\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d ", mat[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

✅ **Explication** :  
✔️ `scanf("%d", &mat[i][j]);` permet de saisir les valeurs.  


## 🔹 5. Opérations sur les Matrices  

### 📌 Addition de deux matrices  
```c
#include <stdio.h>

int main() {
    int A[2][2] = { {1, 2}, {3, 4} };
    int B[2][2] = { {5, 6}, {7, 8} };
    int C[2][2];

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    printf("Matrice Somme :\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

✅ **Explication** :  
✔️ Chaque élément de `C` est la somme des éléments correspondants de `A` et `B`.  


### 📌 Multiplication de deux matrices  
```c
#include <stdio.h>

int main() {
    int A[2][2] = { {1, 2}, {3, 4} };
    int B[2][2] = { {5, 6}, {7, 8} };
    int C[2][2] = {0};

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    printf("Matrice Produit :\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

✅ **Explication** :  
✔️ Trois boucles `for` sont nécessaires :  
  - `i` pour les lignes de `A`  
  - `j` pour les colonnes de `B`  
  - `k` pour parcourir les éléments à multiplier  


## 🔹 6. Transposition d’une Matrice  

L'opération de **transposition** échange les lignes et colonnes d’une matrice.  

```c
#include <stdio.h>

int main() {
    int mat[2][3] = { {1, 2, 3}, {4, 5, 6} };
    int trans[3][2];

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            trans[j][i] = mat[i][j];
        }
    }

    printf("Matrice Transposée :\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d ", trans[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

✅ **Explication** :  
✔️ `trans[j][i] = mat[i][j];` échange les indices.  


## 🎯 Conclusion  

Les **matrices** sont indispensables en C pour stocker et manipuler des données sous forme de **tableau bidimensionnel**. Elles permettent de résoudre des **problèmes mathématiques et algorithmiques complexes**.  

✅ **Résumé des opérations sur les matrices** :  
✔️ Déclaration et initialisation 📌  
✔️ Accès aux éléments 🔍  
✔️ Parcours et affichage 🔄  
✔️ Addition et multiplication ➕✖️  
✔️ Transposition 🔄  

💡 **Astuce** : Toujours bien gérer la mémoire pour éviter les dépassements de tableau ! 🚀