# 📚 Cours Complet sur les Types de Données en C

Dans le langage **C**, les types de données sont utilisés pour définir la nature des variables et la manière dont elles occupent de la mémoire. Un bon choix de type de données est essentiel pour écrire des programmes efficaces et sûrs.

## 📝 Introduction

Le langage C est un langage typé, ce qui signifie que chaque variable doit être déclarée avec un type spécifique avant d'être utilisée. Un type de données détermine l'espace mémoire alloué à une variable ainsi que les opérations qui peuvent être effectuées sur cette variable.

### 🚨 Pourquoi les Types de Données sont-ils Importants ?
- Ils définissent la taille de la mémoire utilisée. 💾
- Ils déterminent les opérations que l'on peut réaliser sur les données. 🔧
- Ils aident à assurer la sécurité et la validité des données dans le programme. 🔒

## 🏆 Types de Données Primitifs en C

### 1. **Les Entiers (`int`)** 🔢

Le type `int` est utilisé pour représenter des nombres entiers (sans décimales). Les valeurs possibles d’un `int` varient selon la plateforme et le compilateur (généralement entre `-32768` et `32767` pour un `int` de 2 octets).

#### Exemples :
```c
int a = 10; // entier positif
int b = -3; // entier négatif
```

### 2. **Les Caractères (`char`)** 🔤

Le type `char` est utilisé pour stocker un seul caractère, comme une lettre ou un symbole. Un `char` occupe généralement 1 octet en mémoire.

#### Exemples :
```c
char c = 'A'; // caractère majuscule
char d = 'z'; // caractère minuscule
char e = '!'; // caractère spécial
```

### 3. **Les Nombres à Virgule Flottante (`float` et `double`)** 📊

- **`float`** : Permet de représenter des nombres à virgule flottante avec une précision simple. Il occupe généralement 4 octets en mémoire.
- **`double`** : Permet de représenter des nombres à virgule flottante avec une précision double. Il occupe généralement 8 octets.

#### Exemples :
```c
float f = 3.14f;    // nombre à virgule flottante simple précision
double d = 3.141592; // nombre à virgule flottante double précision
```

### 4. **Les Nombres Entiers Longs (`long` et `long long`)** 🔢💪

- **`long`** : Utilisé pour les entiers plus grands que ceux d’un `int`. Il occupe généralement 4 octets sur les systèmes 32 bits et 8 octets sur les systèmes 64 bits.
- **`long long`** : Une version encore plus grande que `long`. Sur la plupart des systèmes, il occupe 8 octets.

#### Exemples :
```c
long l = 1234567890L;      // long entier
long long ll = 9876543210LL; // long long entier
```

### 5. **Les Types de Données Non Signés (`unsigned`)** 🆗

Les types non signés sont utilisés pour représenter uniquement des nombres positifs (ou zéro). Un `unsigned int` a une plage plus large que l'`int` standard puisqu’il ne doit pas gérer les valeurs négatives.

- **`unsigned int`**
- **`unsigned char`**
- **`unsigned long`**

#### Exemples :
```c
unsigned int ui = 4000000000U; // entier non signé
unsigned char uc = 255U;        // caractère non signé
```

## ⚙️ Types de Données Composés en C

### 1. **Les Tableaux (Arrays)** 📏

Un tableau est une structure de données qui permet de stocker plusieurs valeurs du même type sous un même nom. Les tableaux en C ont une taille fixe, définie lors de la déclaration.

#### Exemple :
```c
int tab[5] = {1, 2, 3, 4, 5}; // tableau d'entiers
```

### 2. **Les Structures (`struct`)** 🏗️

Une structure permet de regrouper des variables de types différents sous un même nom. Chaque variable au sein d'une structure est appelée un "membre" ou un "champ".

#### Exemple :
```c
struct Point {
    int x;
    int y;
};

struct Point p1 = {10, 20}; // création d'un point avec deux coordonnées
```

### 3. **Les Unions (`union`)** 💡

Une union permet de stocker plusieurs types de données dans le même espace mémoire. Cependant, un seul des membres peut contenir une valeur à la fois. Cela économise de la mémoire mais peut compliquer l’utilisation des données.

#### Exemple :
```c
union Data {
    int i;
    float f;
    char str[20];
};

union Data data;
data.i = 10; // L'union contient un entier
```

### 4. **Les Pointeurs (`pointer`)** 🧭

Un pointeur est une variable qui contient l'adresse mémoire d'une autre variable. Les pointeurs sont utilisés pour manipuler directement la mémoire, ce qui les rend puissants, mais aussi potentiellement dangereux si mal utilisés.

#### Exemple :
```c
int a = 10;
int *ptr = &a; // pointeur qui stocke l'adresse de 'a'
```

## 🧩 Types de Données Complémentaires

### 1. **Le Type `void`** 🚫

Le type `void` est utilisé pour indiquer qu'une fonction ne retourne rien ou qu'un pointeur ne pointe vers rien. Il sert aussi à définir des fonctions génériques dans des bibliothèques.

#### Exemple :
```c
void printMessage() {
    printf("Hello, world!\n");
}
```

### 2. **Les Types `enum`** 🏅

Les énumérations (ou `enum`) sont utilisées pour définir un ensemble de constantes entières. Cela rend le code plus lisible et permet de gérer plus facilement des ensembles d'éléments spécifiques.

#### Exemple :
```c
enum Day {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};
enum Day today = Wednesday; // affectation d'un jour de la semaine
```

## 🧮 Taille des Types de Données

La taille de chaque type de données peut varier en fonction de l'architecture de la machine et du compilateur utilisé. Cependant, voici les tailles typiques pour les systèmes 32 bits et 64 bits :

| Type          | Taille typique (32 bits) | Taille typique (64 bits) |
|---------------|--------------------------|--------------------------|
| `int`         | 4 octets                 | 4 octets                 |
| `char`        | 1 octet                  | 1 octet                  |
| `float`       | 4 octets                 | 4 octets                 |
| `double`      | 8 octets                 | 8 octets                 |
| `long`        | 4 octets                 | 8 octets                 |
| `long long`   | 8 octets                 | 8 octets                 |

## 🎯 Conclusion

En C, le choix du type de données est crucial pour optimiser la mémoire et les performances de votre programme. Que ce soit pour des calculs simples avec des entiers, pour gérer des valeurs flottantes, ou pour organiser des données complexes à l'aide de structures et d'unions, comprendre les types de données est fondamental pour devenir un bon programmeur en C. 🚀

**Astuce :** Toujours choisir le type le plus adapté pour vos données afin d'optimiser la mémoire et les performances de votre programme ! 💡
