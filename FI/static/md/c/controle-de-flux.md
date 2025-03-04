# 🎯 Cours Complet sur le Contrôle de Flux en C

Dans un programme en C, il est souvent nécessaire de prendre des décisions ou de répéter certaines instructions en fonction de conditions spécifiques. C'est ce qu'on appelle le **contrôle de flux**.  

## 🏁 Introduction  

Le contrôle de flux permet :  
✅ **D'exécuter un bloc d’instructions sous certaines conditions** (ex : si un nombre est positif, afficher "positif").  
✅ **De répéter une action plusieurs fois** (ex : afficher "Bonjour" 10 fois).  

Il repose sur deux grands concepts :  
1️⃣ **Les structures conditionnelles** (exécuter un bloc de code selon une condition).  
2️⃣ **Les boucles** (répéter un bloc de code plusieurs fois).  

## 🔍 1. Les Structures Conditionnelles  

Les structures conditionnelles permettent d’exécuter différentes instructions selon des conditions.  

### 📌 La Condition `if`  

L'instruction `if` permet d'exécuter un bloc de code **seulement si une condition est vraie**.  

```c
if (condition) {
    // Instructions exécutées si la condition est vraie
}
```

🔹 **Exemple :** Vérifier si un nombre est positif.  

```c
int nombre = 5;
if (nombre > 0) {
    printf("Le nombre est positif.\n");
}
```



### 📌 La Condition `if-else`  

Si la condition est **fausse**, le bloc `else` est exécuté.  

```c
if (condition) {
    // Instructions si la condition est vraie
} else {
    // Instructions si la condition est fausse
}
```

🔹 **Exemple :** Vérifier si un nombre est positif ou négatif.  

```c
int nombre = -3;
if (nombre > 0) {
    printf("Le nombre est positif.\n");
} else {
    printf("Le nombre est négatif.\n");
}
```



### 📌 La Condition `if-else if-else`  

Si plusieurs conditions doivent être testées, on utilise `else if`.  

```c
if (condition1) {
    // Instructions si condition1 est vraie
} else if (condition2) {
    // Instructions si condition2 est vraie
} else {
    // Instructions si aucune condition n'est vraie
}
```

🔹 **Exemple :** Vérifier si un nombre est **positif, négatif ou nul**.  

```c
int nombre = 0;
if (nombre > 0) {
    printf("Le nombre est positif.\n");
} else if (nombre < 0) {
    printf("Le nombre est négatif.\n");
} else {
    printf("Le nombre est zéro.\n");
}
```



### 📌 La Condition `switch` 🕹️  

L'instruction `switch` est utilisée lorsque l’on compare une variable à plusieurs **valeurs possibles**. Elle remplace souvent plusieurs `if-else if`.  

```c
switch (variable) {
    case valeur1:
        // Instructions si variable == valeur1
        break;
    case valeur2:
        // Instructions si variable == valeur2
        break;
    default:
        // Instructions si aucune valeur ne correspond
}
```

🔹 **Exemple :** Afficher le jour de la semaine en fonction d'un numéro.  

```c
int jour = 3;
switch (jour) {
    case 1:
        printf("Lundi\n");
        break;
    case 2:
        printf("Mardi\n");
        break;
    case 3:
        printf("Mercredi\n");
        break;
    default:
        printf("Jour inconnu\n");
}
```



## 🔄 2. Les Boucles  

Les boucles permettent **de répéter des instructions plusieurs fois** tant qu'une condition est remplie.  

### 📌 La Boucle `while` ♻️  

La boucle `while` s’exécute tant que **la condition est vraie**.  

```c
while (condition) {
    // Instructions répétées tant que la condition est vraie
}
```

🔹 **Exemple :** Afficher les nombres de 1 à 5.  

```c
int i = 1;
while (i <= 5) {
    printf("%d\n", i);
    i++; // Incrémentation pour éviter une boucle infinie
}
```

⚠️ **Attention aux boucles infinies !** Si la condition reste toujours vraie, la boucle ne s’arrête jamais.  



### 📌 La Boucle `do-while` 🔁  

La boucle `do-while` s’exécute **au moins une fois**, puis se répète tant que la condition est vraie.  

```c
do {
    // Instructions exécutées au moins une fois
} while (condition);
```

🔹 **Exemple :** Demander un nombre à l’utilisateur jusqu’à ce qu’il entre un nombre positif.  

```c
int nombre;
do {
    printf("Entrez un nombre positif : ");
    scanf("%d", &nombre);
} while (nombre < 0);
```



### 📌 La Boucle `for` 🚀  

La boucle `for` est utilisée lorsque **le nombre d'itérations est connu à l’avance**.  

```c
for (initialisation; condition; incrémentation) {
    // Instructions répétées
}
```

🔹 **Exemple :** Afficher les nombres de 1 à 5.  

```c
for (int i = 1; i <= 5; i++) {
    printf("%d\n", i);
}
```



### 📌 L’Instruction `break` ⛔  

L’instruction `break` permet **d’arrêter immédiatement** une boucle ou un `switch`.  

🔹 **Exemple :** Arrêter la boucle dès que `i` vaut 3.  

```c
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break; // Sort de la boucle
    }
    printf("%d\n", i);
}
```



### 📌 L’Instruction `continue` 🔄  

L’instruction `continue` permet **d’ignorer une itération** et de passer à la suivante.  

🔹 **Exemple :** Ignorer le nombre `3` et afficher les autres nombres de 1 à 5.  

```c
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; // Passe directement à l'itération suivante
    }
    printf("%d\n", i);
}
```



## 🎯 Conclusion  

Les structures de contrôle de flux en C permettent :  
✅ **De prendre des décisions** grâce aux conditions (`if`, `switch`).  
✅ **De répéter des actions** avec les boucles (`while`, `do-while`, `for`).  
✅ **De modifier l’exécution des boucles** avec `break` et `continue`.  

**Astuce :** Toujours bien **gérer les conditions** pour éviter des **boucles infinies** ou des **erreurs logiques** ! 🚀  