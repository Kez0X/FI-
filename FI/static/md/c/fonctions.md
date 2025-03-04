# 🚀 Cours Complet sur les Fonctions en C  

Les **fonctions** sont des blocs de code réutilisables qui permettent de **simplifier** et **organiser** un programme en le divisant en sous-parties logiques. Elles rendent le code **plus lisible, modulaire et facile à déboguer**.  



## 🏁 Introduction  

Une **fonction** en C est un morceau de code qui **effectue une tâche spécifique**.  
Elle peut **recevoir des paramètres**, **effectuer un traitement** et **retourner une valeur**.  

✅ **Pourquoi utiliser des fonctions ?**  
✔️ Éviter la répétition de code ♻️  
✔️ Faciliter la lecture et la maintenance du programme 👀  
✔️ Permettre la réutilisation du code 🔄  



## 🔍 1. Déclaration et Définition d'une Fonction  

### 📌 Syntaxe d'une fonction  

```c
type_de_retour nom_de_fonction(paramètres) {
    // Instructions
    return valeur;
}
```

- **`type_de_retour`** : Le type de valeur renvoyé par la fonction (`int`, `float`, `void`, etc.).  
- **`nom_de_fonction`** : Le nom donné à la fonction.  
- **`paramètres`** : Liste des valeurs envoyées à la fonction (peut être vide).  
- **`return`** : Permet de renvoyer un résultat (sauf si la fonction est de type `void`).  



## 📌 2. Création et Appel d'une Fonction  

### 🔹 Exemple d'une fonction qui additionne deux nombres  

```c
#include <stdio.h>

// Déclaration de la fonction
int addition(int a, int b) {
    return a + b;
}

int main() {
    int resultat = addition(5, 3); // Appel de la fonction
    printf("La somme est : %d\n", resultat);
    return 0;
}
```

✅ **Explication :**  
1️⃣ La fonction `addition()` prend deux nombres en paramètres.  
2️⃣ Elle retourne leur somme.  
3️⃣ La fonction est appelée dans `main()` et son résultat est affiché.  



## 📌 3. Les Types de Fonctions  

### 🎯 1. Fonction sans paramètre et sans retour  

Cette fonction **exécute un bloc de code mais ne retourne rien** (`void`).  

```c
#include <stdio.h>

void afficherMessage() {
    printf("Bonjour !\n");
}

int main() {
    afficherMessage(); // Appel de la fonction
    return 0;
}
```

✅ **Explication :**  
✔️ `afficherMessage()` n’a pas de paramètres et ne retourne pas de valeur.  



### 🎯 2. Fonction avec paramètres mais sans retour  

Cette fonction **utilise des paramètres mais ne retourne pas de valeur**.  

```c
#include <stdio.h>

void afficherNom(char nom[]) {
    printf("Bonjour, %s !\n", nom);
}

int main() {
    afficherNom("Alice"); // Appel de la fonction avec un argument
    return 0;
}
```

✅ **Explication :**  
✔️ La fonction prend un **nom en paramètre** et l'affiche.  



### 🎯 3. Fonction sans paramètre mais avec retour  

Cette fonction **ne prend pas d’argument mais retourne une valeur**.  

```c
#include <stdio.h>

int obtenirNombre() {
    return 42;
}

int main() {
    int nombre = obtenirNombre(); // Appel de la fonction
    printf("Le nombre est : %d\n", nombre);
    return 0;
}
```

✅ **Explication :**  
✔️ `obtenirNombre()` retourne **42**, mais ne prend aucun paramètre.  



### 🎯 4. Fonction avec paramètres et retour  

Cette fonction **utilise des paramètres et retourne une valeur**.  

```c
#include <stdio.h>

int multiplier(int a, int b) {
    return a * b;
}

int main() {
    int resultat = multiplier(4, 5); // Appel avec arguments
    printf("Le produit est : %d\n", resultat);
    return 0;
}
```

✅ **Explication :**  
✔️ `multiplier()` prend **deux nombres** en paramètre et retourne leur produit.  



## 📌 4. Passage de Paramètres  

### 🎯 1. Passage par Valeur (Copy)  

Le **passage par valeur** signifie que la fonction reçoit une **copie** des variables.  
Les modifications faites à l'intérieur **n'affectent pas** les variables originales.  

```c
#include <stdio.h>

void changerValeur(int x) {
    x = 10; // Ne modifie que la copie
}

int main() {
    int a = 5;
    changerValeur(a);
    printf("Valeur de a : %d\n", a); // Toujours 5
    return 0;
}
```

✅ **Explication :**  
✔️ `a` reste **inchangé** car seule une copie est modifiée.  



### 🎯 2. Passage par Référence (Pointeur)  

Le **passage par référence** permet de modifier directement la variable originale en utilisant **les pointeurs** (`*`).  

```c
#include <stdio.h>

void changerValeur(int *x) {
    *x = 10; // Modifie directement la variable originale
}

int main() {
    int a = 5;
    changerValeur(&a);
    printf("Valeur de a : %d\n", a); // Devient 10
    return 0;
}
```

✅ **Explication :**  
✔️ `changerValeur()` reçoit **l'adresse** de `a` et le modifie directement.  



## 📌 5. Les Fonctions Récursives 🔄  

Une fonction récursive est une fonction qui **s'appelle elle-même** jusqu'à atteindre une **condition d'arrêt**.  

### 🔹 Exemple : Factorielle d'un nombre  

```c
#include <stdio.h>

int factorielle(int n) {
    if (n == 0) return 1; // Condition d'arrêt
    return n * factorielle(n - 1); // Appel récursif
}

int main() {
    printf("Factorielle de 5 : %d\n", factorielle(5));
    return 0;
}
```

✅ **Explication :**  
✔️ `factorielle(5)` appelle `factorielle(4)`, qui appelle `factorielle(3)`, etc., jusqu'à `factorielle(0)`.  



## 📌 6. Utilisation des Fonctions avec des Tableaux  

Les tableaux sont toujours **passés par référence** (puisqu'ils sont en réalité des pointeurs).  

### 🔹 Exemple : Modifier un tableau dans une fonction  

```c
#include <stdio.h>

void modifierTableau(int tab[], int taille) {
    for (int i = 0; i < taille; i++) {
        tab[i] += 10; // Ajoute 10 à chaque élément
    }
}

int main() {
    int nombres[3] = {1, 2, 3};
    modifierTableau(nombres, 3);
    
    for (int i = 0; i < 3; i++) {
        printf("%d ", nombres[i]); // Affichera : 11 12 13
    }
    return 0;
}
```

✅ **Explication :**  
✔️ Le tableau est **modifié directement** car il est passé par référence.  



## 🎯 Conclusion  

Les **fonctions** sont **indispensables** pour écrire du code propre et modulaire en C.  
📌 Elles peuvent avoir **des paramètres** et **retourner des valeurs**.  
📌 On peut passer des **valeurs** ou des **références** (pointeurs).  
📌 Elles permettent de **réutiliser du code** et de **simplifier la maintenance**.  

💡 **Astuce :** Toujours **bien nommer** vos fonctions pour rendre le code **facile à comprendre** ! 🚀