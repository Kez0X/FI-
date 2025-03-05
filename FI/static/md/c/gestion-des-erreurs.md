# ⚠️ Gestion des Erreurs en C  

En langage **C**, la gestion des erreurs est cruciale pour garantir la robustesse et la fiabilité des programmes. Contrairement à d'autres langages comme Python ou Java qui ont des **exceptions**, C utilise des mécanismes plus basiques comme les **codes de retour**, `errno` et les **signaux**.

## 🎯 1. Codes de Retour (`return`)  

🔹 **Principe** :  
- La plupart des fonctions retournent une **valeur spéciale** en cas d'erreur.  
- Cette valeur doit être **testée** par le programme pour détecter l'erreur.

🔹 **Exemple : Erreur d'ouverture de fichier** 📂  

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("fichier_inexistant.txt", "r");

    if (file == NULL) {
        printf("Erreur : Impossible d'ouvrir le fichier !\n");
        return 1; // Code d'erreur
    }

    fclose(file);
    return 0;
}
```

📌 **Explication** :  
- `fopen()` retourne `NULL` si le fichier n'existe pas ou ne peut être ouvert.  
- On vérifie le retour et on affiche un message d’erreur si besoin.  


## 🛑 2. `errno` et `perror()`  

🔹 **`errno`** est une variable globale qui stocke le **code d’erreur** produit par la dernière fonction système exécutée.  
🔹 **`perror()`** permet d'afficher un message correspondant à l’erreur stockée dans `errno`.  

🔹 **Exemple : Gestion d'erreur avec `errno`** 🛠  

```c
#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    FILE *file = fopen("fichier_inexistant.txt", "r");

    if (file == NULL) {
        printf("Erreur %d : %s\n", errno, strerror(errno));
        perror("fopen");
        return 1;
    }

    fclose(file);
    return 0;
}
```

📌 **Explication** :  
- `errno` contient le **numéro d’erreur** produit.  
- `strerror(errno)` affiche une description lisible de l’erreur.  
- `perror("fopen")` affiche directement l’erreur avec un message personnalisé.  

🔹 **Sortie attendue** :  
```
Erreur 2 : No such file or directory
fopen: No such file or directory
```


## 🔄 3. Gestion des Erreurs avec `setjmp` et `longjmp`  

🔹 **Principe** :  
- `setjmp()` permet d'enregistrer un **point de retour** en cas d'erreur.  
- `longjmp()` permet de sauter directement à ce point si une erreur survient.

🔹 **Exemple : Sauter une erreur fatale** 🚨  

```c
#include <stdio.h>
#include <setjmp.h>

jmp_buf buffer;

void fonction_avec_erreur() {
    printf("Une erreur fatale survient...\n");
    longjmp(buffer, 1); // Retourne au point enregistré
}

int main() {
    if (setjmp(buffer) == 0) {
        fonction_avec_erreur();
        printf("Ce message ne sera jamais affiché.\n");
    } else {
        printf("Erreur gérée avec setjmp/longjmp !\n");
    }
    return 0;
}
```

📌 **Explication** :  
- `setjmp(buffer)` enregistre l’état du programme.  
- `longjmp(buffer, 1)` saute immédiatement à `setjmp()`, interrompant l’exécution normale.  
- Pratique pour gérer des erreurs **fatales** sans arrêter le programme.  

🔹 **Sortie attendue** :  
```
Une erreur fatale survient...
Erreur gérée avec setjmp/longjmp !
```


## 🔥 4. Gestion des Signaux (`signal`)  

🔹 **Principe** :  
- Permet de capter et de **gérer** des événements comme `Ctrl + C` ou une **division par zéro**.  
- `signal(SIGINT, handler)` assigne une fonction à un signal.  

🔹 **Exemple : Intercepter `Ctrl + C`** ⛔  

```c
#include <stdio.h>
#include <signal.h>

void signalHandler(int signal) {
    printf("\nSignal %d reçu. Interruption bloquée !\n", signal);
}

int main() {
    signal(SIGINT, signalHandler);

    while (1) {
        printf("Appuyez sur Ctrl + C pour tester...\n");
        sleep(1);
    }

    return 0;
}
```

📌 **Explication** :  
- `signal(SIGINT, signalHandler)` capture `Ctrl + C`.  
- Le programme continue au lieu d’être **interrompu**.  

🔹 **Sortie attendue après `Ctrl + C`** :  
```
Signal 2 reçu. Interruption bloquée !
```

## 🎯 5. Bonnes Pratiques  

✅ Toujours **vérifier** les codes de retour des fonctions 📌  
✅ Afficher des **messages d’erreur clairs** 📝  
✅ Utiliser `errno` pour des erreurs système 🛠  
✅ Utiliser `setjmp/longjmp` pour les erreurs critiques 🚨  
✅ Gérer les signaux pour éviter les interruptions inattendues ⛔  

Avec ces techniques, ton programme en C sera **plus robuste** et **moins sujet aux plantages** ! 🚀