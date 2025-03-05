# 🧠 Gestion de la Mémoire Dynamique en C  

En C, la mémoire peut être allouée **statiquement** (lors de la compilation) ou **dynamiquement** (à l’exécution). La mémoire dynamique permet de **gérer efficacement l’espace mémoire** en fonction des besoins du programme.  

## 📝 1. Pourquoi Utiliser la Mémoire Dynamique ?  

✅ Permet d’**allouer** et **libérer** la mémoire pendant l’exécution.  
✅ Évite le gaspillage de mémoire en **réservant uniquement l’espace nécessaire**.  
✅ Indispensable pour les **tableaux de taille variable**, les **listes chaînées**, etc.  


## 🔑 2. Fonctions d’Allocation Dynamique  

📌 Toutes ces fonctions sont disponibles dans **`stdlib.h`**  

| Fonction   | Rôle |
|------------|--------------------------------------|
| `malloc()` | Alloue un bloc mémoire sans l'initialiser |
| `calloc()` | Alloue et **initialise** la mémoire à zéro |
| `realloc()` | Réalloue un bloc mémoire avec une nouvelle taille |
| `free()`   | Libère la mémoire allouée |


## 🏗️ 3. `malloc()` – Allocation Dynamique  

🔹 **Principe** :  
- `malloc()` alloue un bloc mémoire de la taille demandée en **octets**.  
- Elle retourne un **pointeur** vers la mémoire allouée ou `NULL` en cas d'échec.  

🔹 **Syntaxe** :  
```c
void *malloc(size_t taille);
```

🔹 **Exemple** :  

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;

    ptr = (int*) malloc(5 * sizeof(int)); // Allouer 5 entiers

    if (ptr == NULL) {
        printf("Erreur d'allocation mémoire !\n");
        return 1;
    }

    // Initialisation et affichage
    for (int i = 0; i < 5; i++) {
        ptr[i] = i * 2;
        printf("%d ", ptr[i]);
    }

    free(ptr); // Libération mémoire
    return 0;
}
```

🔹 **Explication** :  
✅ `malloc(5 * sizeof(int))` réserve **5 cases mémoire** pour des `int`.  
✅ On vérifie si `malloc()` a réussi (`ptr == NULL` sinon).  
✅ On utilise `free(ptr)` pour **éviter les fuites mémoire**.  

## 🏗️ 4. `calloc()` – Allocation et Initialisation  

🔹 **Différences avec `malloc()`** :  
✅ **Alloue ET initialise** la mémoire à `0`.  
✅ Prend **deux paramètres** : nombre d’éléments et taille d’un élément.  

🔹 **Syntaxe** :  
```c
void *calloc(size_t nb_elements, size_t taille_element);
```

🔹 **Exemple** :  

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int*) calloc(5, sizeof(int));

    if (ptr == NULL) {
        printf("Erreur d'allocation !\n");
        return 1;
    }

    // Affichage des valeurs initialisées à 0
    for (int i = 0; i < 5; i++) {
        printf("%d ", ptr[i]);
    }

    free(ptr); // Libérer la mémoire
    return 0;
}
```

🔹 **Explication** :  
✅ `calloc(5, sizeof(int))` réserve **5 entiers initialisés à `0`**.  
✅ Toujours **libérer** la mémoire avec `free()`.  


## 🔄 5. `realloc()` – Redimensionner une Allocation  

🔹 **Pourquoi `realloc()` ?**  
✅ Permet d'**agrandir** ou **réduire** une allocation **sans perdre** les données existantes.  
✅ Évite de devoir allouer un nouveau bloc et de copier manuellement les anciennes valeurs.  

🔹 **Syntaxe** :  
```c
void *realloc(void *ptr, size_t nouvelle_taille);
```

🔹 **Exemple** :  

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int*) malloc(3 * sizeof(int));

    if (ptr == NULL) {
        printf("Erreur d'allocation !\n");
        return 1;
    }

    ptr[0] = 10; ptr[1] = 20; ptr[2] = 30;

    // Agrandissement du tableau à 5 éléments
    ptr = (int*) realloc(ptr, 5 * sizeof(int));

    if (ptr == NULL) {
        printf("Erreur de réallocation !\n");
        return 1;
    }

    ptr[3] = 40; ptr[4] = 50;

    for (int i = 0; i < 5; i++) {
        printf("%d ", ptr[i]);
    }

    free(ptr);
    return 0;
}
```

🔹 **Explication** :  
✅ `realloc(ptr, 5 * sizeof(int))` agrandit l’espace mémoire de **3 à 5 entiers**.  
✅ Toujours vérifier que `realloc()` ne retourne pas `NULL`.  


## ❌ 6. `free()` – Libération de la Mémoire  

🔹 **Pourquoi ?**  
✅ Éviter les **fuites mémoire** (`memory leaks`).  
✅ Assurer que la mémoire soit **disponible** pour d’autres parties du programme.  

🔹 **Exemple de fuite mémoire** 🚨 :  

```c
void fuite() {
    int *ptr = (int*) malloc(10 * sizeof(int));
    // Oups, on oublie free(ptr) !
}
```

🔹 **Bonnes pratiques** ✅ :  

```c
free(ptr);
ptr = NULL; // Éviter l’utilisation de pointeurs invalides
```


## 🚀 7. Exercice Complet  

🔹 **Programme qui utilise `malloc()`, `realloc()` et `free()`** :  

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *tableau, taille;

    printf("Entrez la taille du tableau : ");
    scanf("%d", &taille);

    tableau = (int*) malloc(taille * sizeof(int));

    if (tableau == NULL) {
        printf("Erreur d'allocation !\n");
        return 1;
    }

    // Remplir le tableau
    for (int i = 0; i < taille; i++) {
        tableau[i] = i * i;
        printf("%d ", tableau[i]);
    }

    // Agrandir la taille du tableau
    int nouvelle_taille;
    printf("\nEntrez la nouvelle taille du tableau : ");
    scanf("%d", &nouvelle_taille);

    tableau = (int*) realloc(tableau, nouvelle_taille * sizeof(int));

    if (tableau == NULL) {
        printf("Erreur de réallocation !\n");
        return 1;
    }

    // Remplissage des nouvelles cases
    for (int i = taille; i < nouvelle_taille; i++) {
        tableau[i] = i * i;
    }

    // Affichage
    for (int i = 0; i < nouvelle_taille; i++) {
        printf("%d ", tableau[i]);
    }

    free(tableau);
    return 0;
}
```

## 🎯 8. Récapitulatif  

✅ `malloc()` ➝ Allocation simple, **non initialisée**  
✅ `calloc()` ➝ Allocation **initialisée à zéro**  
✅ `realloc()` ➝ Modification de la taille  
✅ `free()` ➝ **Libérer** la mémoire allouée  

⚠ **Toujours vérifier que `malloc()`, `calloc()` ou `realloc()` ne renvoient pas `NULL` !**  

Avec une bonne gestion de la mémoire dynamique, ton programme sera **plus efficace et optimisé** ! 🚀🔥