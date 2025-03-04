# 📚 Cours Complet sur les Opérations et Opérateurs en C

## 📝 Introduction

Les **opérateurs** en C sont utilisés pour effectuer des opérations sur des variables et des valeurs. Ils sont essentiels pour la manipulation des données dans les programmes. En C, les opérateurs se divisent en plusieurs catégories : arithmétiques, relationnels, logiques, etc.

## 🧮 Types d'Opérateurs en C

### 1. **Opérateurs Arithmétiques** ➗✖️➕

Les opérateurs arithmétiques sont utilisés pour effectuer des calculs mathématiques de base. Voici les opérateurs arithmétiques courants en C :

- **Addition (`+`)** : Additionne deux valeurs.
- **Soustraction (`-`)** : Soustrait une valeur de l'autre.
- **Multiplication (`*`)** : Multiplie deux valeurs.
- **Division (`/`)** : Divise une valeur par une autre.
- **Modulo (`%`)** : Renvoie le reste de la division entière de deux nombres.

#### Exemples :
```c
int a = 10, b = 5;
int sum = a + b;      // addition : 10 + 5 = 15
int diff = a - b;     // soustraction : 10 - 5 = 5
int product = a * b;  // multiplication : 10 * 5 = 50
int quotient = a / b; // division : 10 / 5 = 2
int remainder = a % b;// modulo : 10 % 5 = 0
```

### 2. **Opérateurs de Comparaison** 🔍

Les opérateurs de comparaison sont utilisés pour comparer deux valeurs. Ils retournent un résultat booléen (`1` pour vrai et `0` pour faux).

- **Égalité (`==`)** : Vérifie si deux valeurs sont égales.
- **Différence (`!=`)** : Vérifie si deux valeurs sont différentes.
- **Inférieur (`<`)** : Vérifie si la première valeur est inférieure à la deuxième.
- **Supérieur (`>`)** : Vérifie si la première valeur est supérieure à la deuxième.
- **Inférieur ou égal (`<=`)** : Vérifie si la première valeur est inférieure ou égale à la deuxième.
- **Supérieur ou égal (`>=`)** : Vérifie si la première valeur est supérieure ou égale à la deuxième.

#### Exemples :
```c
int a = 10, b = 5;
int eq = (a == b);  // égalité : 0 (faux)
int diff = (a != b);// différence : 1 (vrai)
int inf = (a < b);  // inférieur : 0 (faux)
int sup = (a > b);  // supérieur : 1 (vrai)
int inf_eq = (a <= b); // inférieur ou égal : 0 (faux)
int sup_eq = (a >= b); // supérieur ou égal : 1 (vrai)
```

### 3. **Opérateurs Logiques** 🧠

Les opérateurs logiques sont utilisés pour effectuer des opérations logiques entre des expressions booléennes.

- **ET logique (`&&`)** : Renvoie vrai si les deux expressions sont vraies.
- **OU logique (`||`)** : Renvoie vrai si l'une des expressions est vraie.
- **Non logique (`!`)** : Inverse la valeur d'une expression (si vraie devient fausse, et vice versa).

#### Exemples :
```c
int a = 1, b = 0;
int et_log = (a && b); // ET logique : 0 (faux, car b est 0)
int ou_log = (a || b); // OU logique : 1 (vrai, car a est 1)
int non_log = !a;      // NON logique : 0 (faux, car a est vrai)
```

### 4. **Opérateurs d'Incrémentation et de Décrémentation** 🔼🔽

Les opérateurs d'incrémentation et de décrémentation sont utilisés pour augmenter ou diminuer la valeur d'une variable de 1.

- **Incrémentation (`++`)** : Augmente la valeur de la variable de 1.
- **Décrémentation (`--`)** : Diminue la valeur de la variable de 1.

Ils peuvent être utilisés en mode **préfixe** ou **suffixe** :

- **Préfixe (`++a`)** : L'incrémentation ou décrémentation est effectuée avant l'utilisation de la variable.
- **Suffixe (`a++`)** : L'incrémentation ou décrémentation est effectuée après l'utilisation de la variable.

#### Exemples :
```c
int a = 5;
int b = ++a; // pré-incrémentation : a devient 6, b reçoit 6
int c = a--; // post-décrémentation : c reçoit 6, a devient 5
```

### 5. **Opérateurs d'Affectation** 🖋️

Les opérateurs d'affectation sont utilisés pour assigner des valeurs à des variables.

- **Affectation simple (`=`)** : Assigne la valeur de la droite à la variable de gauche.
- **Affectation par addition (`+=`)** : Ajoute la valeur de la droite à la variable de gauche.
- **Affectation par soustraction (`-=`)** : Soustrait la valeur de la droite de la variable de gauche.
- **Affectation par multiplication (`*=`)** : Multiplie la variable de gauche par la valeur de la droite.
- **Affectation par division (`/=`)** : Divise la variable de gauche par la valeur de la droite.
- **Affectation par modulo (`%=`)** : Applique le modulo à la variable de gauche et à la valeur de la droite.

#### Exemples :
```c
int a = 5;
a += 3;  // a devient 8 (5 + 3)
a -= 2;  // a devient 6 (8 - 2)
a *= 2;  // a devient 12 (6 * 2)
a /= 4;  // a devient 3 (12 / 4)
a %= 2;  // a devient 1 (3 % 2)
```

### 6. **Opérateurs de Bits** 💻

Les opérateurs de bits sont utilisés pour effectuer des opérations au niveau des bits de données.

- **ET de bits (`&`)** : Effectue une opération AND au niveau des bits.
- **OU de bits (`|`)** : Effectue une opération OR au niveau des bits.
- **XOR de bits (`^`)** : Effectue une opération XOR au niveau des bits.
- **Complément de bits (`~`)** : Inverse les bits.
- **Décalage à gauche (`<<`)** : Décale les bits vers la gauche.
- **Décalage à droite (`>>`)** : Décale les bits vers la droite.

#### Exemples :
```c
int a = 5;  // 0101 en binaire
int b = 3;  // 0011 en binaire
int and_op = a & b;  // ET de bits : 0001 (1 en décimal)
int or_op = a | b;   // OU de bits : 0111 (7 en décimal)
int xor_op = a ^ b;  // XOR de bits : 0110 (6 en décimal)
int not_op = ~a;     // Complément de bits : 1010 (-6 en décimal)
int left_shift = a << 1;  // Décalage à gauche : 1010 (10 en décimal)
int right_shift = a >> 1; // Décalage à droite : 0010 (2 en décimal)
```

## 🎯 Conclusion

Les opérateurs en C permettent de réaliser une variété d'opérations sur les données. Bien comprendre leur fonctionnement est essentiel pour manipuler efficacement les variables et contrôler la logique des programmes. Que ce soit pour des calculs mathématiques, des comparaisons, ou des manipulations de bits, les opérateurs sont au cœur de la programmation en C.

**Astuce :** Toujours vérifier le type des variables lors des opérations, en particulier pour éviter des erreurs avec les opérateurs de bits et les opérations de division. 💡