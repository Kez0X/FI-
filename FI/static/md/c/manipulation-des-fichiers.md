# 📂 Manipulation des Fichiers en C  

En C, la manipulation des fichiers permet de **lire**, **écrire**, **modifier** et **supprimer** des données stockées sur un disque. Grâce aux fonctions de la bibliothèque **`stdio.h`**, il est possible d’interagir avec des fichiers de manière efficace.  


## 📝 1. Types de Fichiers  

📌 Il existe deux types de fichiers en C :  

1️⃣ **Fichiers Texte** 📄  
   - Stockent des données sous forme de texte lisible.  
   - Exemple : `.txt`, `.csv`, `.log`.  

2️⃣ **Fichiers Binaires** 💾  
   - Stockent des données sous une forme brute (non lisible directement).  
   - Exemple : `.bin`, `.dat`.  


## 🔑 2. Ouvrir et Fermer un Fichier  

🔹 En C, on utilise **`FILE *`** pour manipuler un fichier.  
🔹 La fonction **`fopen()`** ouvre un fichier, et **`fclose()`** le ferme.  

### 📌 Modes d’ouverture (`fopen`)  

| Mode  | Signification |
|-------|-------------------------------------------------|
| `"r"`  | Lire un fichier (erreur si le fichier n'existe pas) |
| `"w"`  | Écrire un fichier (crée un fichier s'il n'existe pas, écrase s'il existe) |
| `"a"`  | Ajouter à un fichier (crée un fichier s'il n'existe pas) |
| `"r+"` | Lire et écrire (sans supprimer le contenu) |
| `"w+"` | Lire et écrire (supprime le contenu si le fichier existe) |
| `"a+"` | Lire et écrire (ajoute les nouvelles données à la fin) |

### 📌 Exemple : Ouvrir et Fermer un Fichier  

```c
#include <stdio.h>

int main() {
    FILE *fichier;

    fichier = fopen("donnees.txt", "w"); // Ouvre en mode écriture

    if (fichier == NULL) {
        printf("Erreur lors de l'ouverture du fichier !\n");
        return 1;
    }

    printf("Fichier ouvert avec succès !\n");

    fclose(fichier); // Fermer le fichier
    return 0;
}
```


## ✏️ 3. Écriture dans un Fichier  

📌 Pour écrire dans un fichier, on utilise :  

| Fonction    | Description |
|------------|----------------------------------|
| `fprintf()` | Écrire du texte formaté |
| `fputs()`   | Écrire une chaîne de caractères |
| `fputc()`   | Écrire un seul caractère |

### 📌 Exemple : Écrire un Texte dans un Fichier  

```c
#include <stdio.h>

int main() {
    FILE *fichier = fopen("donnees.txt", "w");

    if (fichier == NULL) {
        printf("Erreur d'ouverture !\n");
        return 1;
    }

    fprintf(fichier, "Bonjour, ceci est un fichier texte.\n");
    fputs("Une autre ligne de texte.\n", fichier);
    fputc('A', fichier); // Ajoute un seul caractère

    fclose(fichier);
    printf("Données écrites avec succès !\n");

    return 0;
}
```


## 📖 4. Lecture depuis un Fichier  

📌 Pour lire un fichier, on utilise :  

| Fonction    | Description |
|------------|----------------------------------|
| `fscanf()` | Lire des données formatées |
| `fgets()`  | Lire une ligne entière |
| `fgetc()`  | Lire un seul caractère |

### 📌 Exemple : Lire un Fichier Texte  

```c
#include <stdio.h>

int main() {
    FILE *fichier = fopen("donnees.txt", "r");
    char ligne[100];

    if (fichier == NULL) {
        printf("Erreur d'ouverture du fichier !\n");
        return 1;
    }

    while (fgets(ligne, sizeof(ligne), fichier) != NULL) {
        printf("%s", ligne); // Affiche la ligne lue
    }

    fclose(fichier);
    return 0;
}
```


## 📋 5. Gestion des Fichiers Binaires  

📌 Pour manipuler des fichiers binaires, on utilise :  

| Fonction       | Description |
|---------------|----------------------------------|
| `fwrite()`    | Écrire dans un fichier binaire |
| `fread()`     | Lire depuis un fichier binaire |

### 📌 Exemple : Écriture et Lecture dans un Fichier Binaire  

```c
#include <stdio.h>

typedef struct {
    char nom[20];
    int age;
} Personne;

int main() {
    FILE *fichier;
    Personne p = {"Alice", 25};

    // Écriture
    fichier = fopen("data.bin", "wb");
    fwrite(&p, sizeof(Personne), 1, fichier);
    fclose(fichier);

    // Lecture
    fichier = fopen("data.bin", "rb");
    Personne p_lu;
    fread(&p_lu, sizeof(Personne), 1, fichier);
    fclose(fichier);

    printf("Nom : %s, Age : %d\n", p_lu.nom, p_lu.age);

    return 0;
}
```


## 🗑️ 6. Supprimer et Renommer un Fichier  

| Fonction      | Rôle |
|--------------|------------------------------|
| `remove()`   | Supprime un fichier |
| `rename()`   | Renomme un fichier |

### 📌 Exemple : Suppression et Renommage  

```c
#include <stdio.h>

int main() {
    // Renommer un fichier
    if (rename("ancien_nom.txt", "nouveau_nom.txt") == 0) {
        printf("Fichier renommé avec succès !\n");
    } else {
        printf("Erreur lors du renommage !\n");
    }

    // Supprimer un fichier
    if (remove("fichier_a_supprimer.txt") == 0) {
        printf("Fichier supprimé avec succès !\n");
    } else {
        printf("Erreur lors de la suppression !\n");
    }

    return 0;
}
```


## 🎯 7. Bonnes Pratiques  

✅ Toujours **fermer les fichiers** après utilisation avec `fclose()`.  
✅ Vérifier si le fichier s'est ouvert correctement (`if (fichier == NULL)`).  
✅ Utiliser `feof(fichier)` pour détecter la fin d’un fichier.  
✅ Utiliser des **buffers** (`fgets()` pour les chaînes) pour éviter les débordements.  


## 🚀 8. Exercice Complet  

🔹 **Objectif** : Lire des noms et âges depuis un fichier et les afficher.  

📌 **Contenu du fichier `personnes.txt`** :  
```
Alice 25
Bob 30
Charlie 22
```

📌 **Programme** :  

```c
#include <stdio.h>

int main() {
    FILE *fichier = fopen("personnes.txt", "r");
    char nom[20];
    int age;

    if (fichier == NULL) {
        printf("Erreur d'ouverture !\n");
        return 1;
    }

    printf("Liste des personnes :\n");
    while (fscanf(fichier, "%s %d", nom, &age) != EOF) {
        printf("Nom : %s, Age : %d\n", nom, age);
    }

    fclose(fichier);
    return 0;
}
```

## 🔥 9. Récapitulatif  

✅ **Ouverture (`fopen`) et fermeture (`fclose`)** des fichiers.  
✅ **Écriture** avec `fprintf()`, `fputs()`, `fputc()`.  
✅ **Lecture** avec `fscanf()`, `fgets()`, `fgetc()`.  
✅ **Fichiers binaires** avec `fwrite()` et `fread()`.  
✅ **Gestion des fichiers** avec `rename()` et `remove()`.  

En maîtrisant ces concepts, vous serez capable de **gérer des fichiers efficacement** en C ! 🚀📂