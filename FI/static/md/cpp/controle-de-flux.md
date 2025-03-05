# 📚 Contrôle de Flux en C++

Le **contrôle de flux** en C++ permet de contrôler l'ordre d'exécution des instructions dans un programme. Grâce à des structures conditionnelles et des boucles, vous pouvez décider quel bloc de code exécuter en fonction des conditions ou répéter certaines actions plusieurs fois.


## 🧐 Pourquoi le Contrôle de Flux est-il Important ?

✔ **Décision** 🧠 : Il permet de prendre des décisions basées sur des conditions.  
✔ **Répétition** 🔄 : Il permet de répéter des actions jusqu'à ce qu'une condition soit remplie.  
✔ **Optimisation** ⚡ : Il permet d'optimiser l'exécution du programme en évitant des calculs inutiles.


## 🧩 Structures de Contrôle de Flux en C++

### 1. **Les Instructions Conditionnelles (if, else, switch)** 🧐

Les instructions conditionnelles permettent d'exécuter un bloc de code uniquement si une condition donnée est vraie.

#### 1.1 **`if`**

L'instruction `if` exécute un bloc de code si la condition donnée est vraie.

```cpp
if (condition) {
    // Code à exécuter si la condition est vraie
}
```

##### Exemple :

```cpp
int age = 20;
if (age >= 18) {
    std::cout << "Vous êtes majeur!" << std::endl;
}
```

#### 1.2 **`else`**

Le bloc `else` permet d'exécuter un code alternatif si la condition du `if` est fausse.

```cpp
if (condition) {
    // Code à exécuter si la condition est vraie
} else {
    // Code à exécuter si la condition est fausse
}
```

##### Exemple :

```cpp
int age = 16;
if (age >= 18) {
    std::cout << "Vous êtes majeur!" << std::endl;
} else {
    std::cout << "Vous êtes mineur!" << std::endl;
}
```

#### 1.3 **`else if`**

L'instruction `else if` permet de tester plusieurs conditions de manière séquentielle.

```cpp
if (condition1) {
    // Code si condition1 est vraie
} else if (condition2) {
    // Code si condition2 est vraie
} else {
    // Code si aucune des conditions n'est vraie
}
```

##### Exemple :

```cpp
int note = 12;
if (note >= 16) {
    std::cout << "Excellent!" << std::endl;
} else if (note >= 10) {
    std::cout << "Bien!" << std::endl;
} else {
    std::cout << "Insuffisant!" << std::endl;
}
```

#### 1.4 **`switch`**

L'instruction `switch` est utilisée pour tester une seule variable sur plusieurs cas différents. Cela permet d'éviter l'utilisation de plusieurs `else if`.

```cpp
switch (variable) {
    case valeur1:
        // Code à exécuter si variable == valeur1
        break;
    case valeur2:
        // Code à exécuter si variable == valeur2
        break;
    default:
        // Code à exécuter si aucune condition n'est vraie
}
```

##### Exemple :

```cpp
int jour = 3;
switch (jour) {
    case 1:
        std::cout << "Lundi" << std::endl;
        break;
    case 2:
        std::cout << "Mardi" << std::endl;
        break;
    case 3:
        std::cout << "Mercredi" << std::endl;
        break;
    default:
        std::cout << "Jour inconnu" << std::endl;
}
```


### 2. **Les Boucles (for, while, do-while)** 🔁

Les boucles permettent de répéter un bloc de code plusieurs fois, tant qu'une condition est vraie.

#### 2.1 **`for`**

La boucle `for` est généralement utilisée lorsque vous connaissez le nombre d'itérations à l'avance.

```cpp
for (initialisation; condition; mise-à-jour) {
    // Code à exécuter
}
```

##### Exemple :

```cpp
for (int i = 0; i < 5; i++) {
    std::cout << "i = " << i << std::endl;
}
```

La boucle ci-dessus affiche les valeurs de `i` de 0 à 4.

#### 2.2 **`while`**

La boucle `while` répète un bloc de code tant qu'une condition est vraie. L'évaluation de la condition se fait avant chaque itération.

```cpp
while (condition) {
    // Code à exécuter
}
```

##### Exemple :

```cpp
int i = 0;
while (i < 5) {
    std::cout << "i = " << i << std::endl;
    i++;
}
```

#### 2.3 **`do-while`**

La boucle `do-while` est similaire à la boucle `while`, mais la condition est évaluée après chaque itération, ce qui garantit que le bloc de code sera exécuté au moins une fois.

```cpp
do {
    // Code à exécuter
} while (condition);
```

##### Exemple :

```cpp
int i = 0;
do {
    std::cout << "i = " << i << std::endl;
    i++;
} while (i < 5);
```

### 3. **L'instruction `break` et `continue`** 🛑🔄

#### 3.1 **`break`**

L'instruction `break` permet de sortir immédiatement d'une boucle ou d'un `switch`, quel que soit l'état de la condition.

##### Exemple dans une boucle :

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // Sort de la boucle lorsque i == 5
    }
    std::cout << "i = " << i << std::endl;
}
```

#### 3.2 **`continue`**

L'instruction `continue` permet de passer à l'itération suivante d'une boucle, en sautant le reste du code dans la boucle pour cette itération.

##### Exemple dans une boucle :

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;  // Passe à l'itération suivante lorsque i == 5
    }
    std::cout << "i = " << i << std::endl;
}
```

## 🎯 Conclusion

Le **contrôle de flux** en C++ permet de diriger l'exécution du programme en fonction de conditions et de répétitions. Que ce soit avec les **instructions conditionnelles** comme `if` et `switch`, ou les **boucles** comme `for`, `while`, et `do-while`, vous pouvez construire des programmes flexibles et interactifs.

💡 **Astuce** : Utilisez **`break`** et **`continue`** judicieusement pour avoir un contrôle fin sur l'exécution des boucles et améliorer la lisibilité de votre code ! 🚀