# 🚀 Optimisation et Performance en C  

L'optimisation en C vise à **réduire l'utilisation des ressources** (CPU, mémoire, I/O) et **accélérer l'exécution des programmes**. Cela est essentiel pour les systèmes embarqués, les applications haute performance et les logiciels critiques.  

## 🏎 1. Règle d'Or : **Profilage avant Optimisation**  

📌 Avant d’optimiser un programme, il faut d’abord **identifier les goulots d'étranglement** grâce à des outils de **profilage** :  
✅ `gprof` (profilage CPU)  
✅ `valgrind --tool=cachegrind` (analyse du cache)  
✅ `perf` (analyse approfondie sur Linux)  

**Exemple d'utilisation de `gprof`** :  
1. Compiler avec l’option `-pg` :  
   ```bash
   gcc -pg programme.c -o programme
   ```
2. Exécuter le programme :  
   ```bash
   ./programme
   ```
3. Générer un rapport :  
   ```bash
   gprof programme gmon.out > rapport.txt
   ```


## 📏 2. Optimisation du Code  

### 📌 a) **Éviter les Boucles Inutiles** 🔄  

💡 Remplacez les **boucles répétitives** par des expressions plus efficaces.  

❌ Mauvaise approche :  
```c
for (int i = 0; i < 100; i++) {
    a[i] = i * 2;
}
```
✅ Bonne approche (vectorisation) :  
```c
memset(a, 0, sizeof(a));  // Initialisation rapide
for (int i = 0; i < 100; i += 4) {
    a[i] = i * 2;
    a[i+1] = (i+1) * 2;
    a[i+2] = (i+2) * 2;
    a[i+3] = (i+3) * 2;
}
```
🔹 **Gain** : Moins d'itérations = exécution plus rapide  


### 📌 b) **Optimisation des Conditions** 🤔  

💡 Évitez les **branches conditionnelles coûteuses** et privilégiez les **opérations bitwise**.  

❌ Mauvaise approche :  
```c
if (x % 2 == 0) { // Coût élevé : division et modulo
    printf("Pair\n");
}
```
✅ Bonne approche :  
```c
if ((x & 1) == 0) { // Opération bitwise rapide
    printf("Pair\n");
}
```


### 📌 c) **Minimiser l’Utilisation de `malloc()`** 🔥  

💡 **L’allocation dynamique est coûteuse**, surtout avec `malloc()` et `free()`.  

❌ Mauvaise approche (multiples allocations) :  
```c
int *tab;
for (int i = 0; i < 1000; i++) {
    tab = (int*) malloc(sizeof(int));
    free(tab);
}
```
✅ Bonne approche (allocation groupée) :  
```c
int *tab = (int*) malloc(1000 * sizeof(int));
// Utilisation de tab
free(tab);
```
🔹 **Gain** : Moins d’appels à `malloc()`, allocation plus rapide  


## 🎯 3. Optimisation de la Mémoire  

### 📌 a) **Utilisation Efficace du Cache CPU** 🎛  

📌 **Accéder aux données en mémoire dans l’ordre séquentiel** améliore les performances grâce à la prélecture du cache CPU.  

❌ Mauvaise approche (accès non séquentiel) :  
```c
for (int j = 0; j < N; j++) {
    for (int i = 0; i < M; i++) {
        mat[i][j] = i + j;
    }
}
```
✅ Bonne approche (accès séquentiel optimisé) :  
```c
for (int i = 0; i < N; i++) {
    for (int j = 0; j < M; j++) {
        mat[i][j] = i + j;
    }
}
```
🔹 **Gain** : Moins de fautes de cache = accès mémoire plus rapide  


### 📌 b) **Réduire la Consommation Mémoire** 🧠  

💡 **Utiliser les types de données les plus adaptés** réduit l’empreinte mémoire.  

❌ Mauvaise approche (utilisation excessive de mémoire) :  
```c
double x = 3.14;  // Inutile si la précision n’est pas critique
```
✅ Bonne approche :  
```c
float x = 3.14f;  // Moins gourmand en mémoire
```

🔹 **Gain** : Moins de mémoire utilisée, meilleure gestion du cache  


## ⚡ 4. Optimisation du Compilateur  

### 📌 a) **Activer les Optimisations (`-O2`, `-O3`)** ⚙️  

Le compilateur GCC propose plusieurs niveaux d'optimisation :  
- `-O1` : Optimisation basique  
- `-O2` : Optimisation intermédiaire (recommandé)  
- `-O3` : Optimisation agressive  
- `-Ofast` : Optimisation maximale (peut casser des standards IEEE)  

💡 **Exemple de compilation optimisée** :  
```bash
gcc -O2 programme.c -o programme
```


### 📌 b) **Utiliser les Extensions SIMD (Vectorisation)** 🏎  

📌 Les processeurs modernes supportent **SSE, AVX** pour traiter plusieurs données en parallèle.  

✅ Exemple avec **AVX** :  
```c
#include <immintrin.h>

void add_arrays(float *a, float *b, float *res, int n) {
    for (int i = 0; i < n; i += 8) {
        __m256 va = _mm256_loadu_ps(&a[i]);
        __m256 vb = _mm256_loadu_ps(&b[i]);
        __m256 vr = _mm256_add_ps(va, vb);
        _mm256_storeu_ps(&res[i], vr);
    }
}
```
🔹 **Gain** : Exécute **8 additions en une seule instruction CPU**  


## 🔗 5. Optimisation des Entrées/Sorties  

📌 **Réduire le nombre d’appels système** (`printf`, `fread`, `fwrite`) améliore les performances.  

❌ Mauvaise approche :  
```c
for (int i = 0; i < 1000; i++) {
    printf("%d\n", i);
}
```
✅ Bonne approche (bufferisation) :  
```c
char buffer[10000];
int pos = 0;

for (int i = 0; i < 1000; i++) {
    pos += sprintf(buffer + pos, "%d\n", i);
}
printf("%s", buffer);
```
🔹 **Gain** : Moins d’appels à `printf()`, meilleure performance  


## 🏁 Conclusion  

✅ **Avant toute optimisation, mesurez les performances avec `gprof` ou `valgrind`** 📊  
✅ **Utilisez des algorithmes efficaces et réduisez la complexité temporelle** ⏳  
✅ **Évitez les accès mémoire aléatoires, privilégiez les accès séquentiels** 📂  
✅ **Activez les optimisations du compilateur (-O2, -O3) et utilisez AVX/SIMD** 🏎  
✅ **Optimisez les entrées/sorties en réduisant les appels système** 🔄  

En appliquant ces techniques, vos programmes C seront **plus rapides, plus légers et plus performants** ! 🚀