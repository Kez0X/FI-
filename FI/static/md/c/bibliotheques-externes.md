# 📚 Bibliothèques Externes en C  

Le langage **C** propose une puissante gestion des bibliothèques, permettant d'étendre ses fonctionnalités sans réécrire du code existant. Les **bibliothèques externes** contiennent des fonctions et des structures utiles pour divers domaines (mathématiques, graphiques, réseaux, etc.).  

## 📝 1. Types de Bibliothèques  

📌 En C, on distingue deux types de bibliothèques :  

1️⃣ **Bibliothèques Standard** ✅  
   - Déjà incluses dans le compilateur C.  
   - Exemples : `stdio.h`, `math.h`, `string.h`, etc.  

2️⃣ **Bibliothèques Externes** 📦  
   - Nécessitent une installation et une liaison avec le programme.  
   - Exemples : `SDL`, `OpenGL`, `libcurl`, `GTK`.  


## 🔗 2. Utilisation d’une Bibliothèque  

### 📌 Étapes générales :  

1️⃣ **Inclure l'en-tête (`#include <nom.h>`)**  
2️⃣ **Vérifier l'installation de la bibliothèque**  
3️⃣ **Lier la bibliothèque lors de la compilation**  


## 📌 3. Bibliothèques Standard (Déjà Disponibles)  

🔹 Ces bibliothèques sont incluses directement avec **GCC, Clang ou MSVC**.  

| 📂 Bibliothèque | 📌 Fonctionnalité |
|---------------|---------------------------|
| `stdio.h`    | Entrées/sorties (`printf`, `scanf`) |
| `stdlib.h`   | Allocation mémoire (`malloc`, `free`) |
| `math.h`     | Fonctions mathématiques (`sqrt`, `pow`) |
| `string.h`   | Manipulation des chaînes (`strlen`, `strcpy`) |
| `time.h`     | Gestion du temps (`time`, `clock`) |

🔹 **Exemple avec `math.h`** :  

```c
#include <stdio.h>
#include <math.h>

int main() {
    double x = 9.0;
    printf("Racine carrée de %.2f = %.2f\n", x, sqrt(x));
    return 0;
}
```

Compilation avec GCC :  
```sh
gcc programme.c -o programme -lm  # `-lm` lie la bibliothèque mathématique
```


## 🔥 4. Bibliothèques Externes (À Installer)  

Certaines bibliothèques ne sont pas incluses par défaut et doivent être **installées** puis **liées** au programme.  

### 🎨 Exemples de Bibliothèques Externes  

| 📂 Bibliothèque | 🛠️ Utilisation |
|---------------|---------------------------|
| `SDL2`       | Développement de jeux/graphismes |
| `OpenGL`     | Rendu graphique 3D |
| `libcurl`    | Requêtes HTTP |
| `GTK`        | Interfaces graphiques |
| `SQLite`     | Bases de données embarquées |


## 🖥️ 5. Installation et Compilation d’une Bibliothèque Externe  

🔹 **Méthode 1 : Installer via un gestionnaire de paquets**  
```sh
sudo apt install libsdl2-dev  # (Ubuntu/Debian)
brew install sdl2            # (MacOS)
```

🔹 **Méthode 2 : Télécharger et compiler la bibliothèque manuellement**  
- Télécharger depuis le site officiel  
- Compiler et installer avec `make`  


## 🎮 6. Exemple avec SDL2 (Bibliothèque Graphique)  

### 📌 Installation (Linux) :  
```sh
sudo apt install libsdl2-dev
```

### 📌 Programme C utilisant SDL2  

```c
#include <SDL2/SDL.h>
#include <stdio.h>

int main() {
    SDL_Init(SDL_INIT_VIDEO);

    SDL_Window *window = SDL_CreateWindow("Ma Fenêtre SDL",
        SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 640, 480, SDL_WINDOW_SHOWN);

    SDL_Delay(2000); // Afficher pendant 2 secondes
    SDL_DestroyWindow(window);
    SDL_Quit();

    return 0;
}
```

### 📌 Compilation avec GCC  
```sh
gcc programme.c -o programme -lSDL2
```


## 🌍 7. Bibliothèques Réseau (libcurl)  

`libcurl` permet de réaliser des requêtes HTTP en C.  

### 📌 Installation (Linux)  
```sh
sudo apt install libcurl4-openssl-dev
```

### 📌 Programme : Faire une requête HTTP GET  

```c
#include <stdio.h>
#include <curl/curl.h>

int main() {
    CURL *curl = curl_easy_init();

    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "https://www.example.com");
        curl_easy_perform(curl);
        curl_easy_cleanup(curl);
    }

    return 0;
}
```

### 📌 Compilation  
```sh
gcc programme.c -o programme -lcurl
```

## 🎯 8. Récapitulatif  

✅ **Les bibliothèques standard** sont intégrées (ex : `math.h`, `stdio.h`).  
✅ **Les bibliothèques externes** doivent être installées et liées (`SDL2`, `libcurl`).  
✅ **La compilation** avec des bibliothèques externes nécessite `-l<nom>` (ex : `-lSDL2`).  

Avec ces connaissances, vous pourrez **étendre les fonctionnalités** de vos programmes en utilisant des bibliothèques externes adaptées à vos besoins ! 🚀