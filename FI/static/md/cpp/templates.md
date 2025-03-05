# 📚 Templates en C++

Les **templates** en C++ sont un mécanisme permettant de créer des fonctions et des classes génériques. En d'autres termes, un template permet d'écrire du code qui peut fonctionner avec n'importe quel type de données sans avoir à spécifier ces types à l'avance. Cela permet d'écrire du code réutilisable, flexible et plus maintenable.

Les templates sont une fonctionnalité puissante du langage C++ qui vous permet de travailler avec des types de données génériques sans perdre les avantages de la sécurité de type du langage.


## 🧩 Les Types de Templates en C++

Il existe principalement deux types de templates en C++ :

1. **Template de fonction**
2. **Template de classe**


### 1. **Template de Fonction** 🔧

Un template de fonction permet de définir une fonction générique qui peut fonctionner avec différents types de données. Le type est déterminé automatiquement lors de l'appel de la fonction.

#### Exemple de Template de Fonction :

```cpp
#include <iostream>
using namespace std;

// Définition du template de fonction
template <typename T>
T addition(T a, T b) {
    return a + b;
}

int main() {
    // Appels de la fonction avec des types différents
    cout << addition(5, 10) << endl;        // Addition d'entiers
    cout << addition(5.5, 10.2) << endl;    // Addition de nombres à virgule flottante
    cout << addition("Hello ", "World!") << endl; // Concatenation de chaînes de caractères

    return 0;
}
```

#### Explication :

- Le mot-clé `template <typename T>` indique que nous définissons un template de fonction avec un type générique `T`.
- Lors de l'appel de la fonction `addition`, le compilateur déduit automatiquement le type de `T` en fonction des arguments passés à la fonction.


### 2. **Template de Classe** 🏷️

Un template de classe permet de créer une classe générique, où les types des attributs et des méthodes peuvent être spécifiés lors de l'instanciation de la classe.

#### Exemple de Template de Classe :

```cpp
#include <iostream>
using namespace std;

// Définition du template de classe
template <typename T>
class Boite {
private:
    T valeur;

public:
    Boite(T v) : valeur(v) {}

    T obtenirValeur() {
        return valeur;
    }
};

int main() {
    // Création d'objets de type générique
    Boite<int> boiteEntiere(100);
    Boite<double> boiteDouble(99.9);

    cout << boiteEntiere.obtenirValeur() << endl;  // Affiche 100
    cout << boiteDouble.obtenirValeur() << endl;   // Affiche 99.9

    return 0;
}
```

#### Explication :

- Ici, `Boite` est une classe générique, et `T` représente un type qui sera spécifié lors de l'instanciation de la classe.
- `Boite<int>` crée une boîte contenant un `int`, et `Boite<double>` crée une boîte contenant un `double`.


### 3. **Templates avec Plusieurs Paramètres** 🧩

Il est également possible de définir des templates avec plusieurs paramètres de type.

#### Exemple de Template avec plusieurs paramètres :

```cpp
#include <iostream>
using namespace std;

// Définition d'un template avec plusieurs paramètres
template <typename T, typename U>
void afficher(T a, U b) {
    cout << "Premier paramètre: " << a << endl;
    cout << "Deuxième paramètre: " << b << endl;
}

int main() {
    afficher(10, 20.5);   // Affiche un entier et un flottant
    afficher("Hello", 3);  // Affiche une chaîne de caractères et un entier

    return 0;
}
```

#### Explication :

- Le template `afficher` prend deux paramètres génériques `T` et `U`, qui peuvent être de types différents. Lors de l'appel de la fonction, le compilateur déduit les types exacts.


### 4. **Specialisation de Templates** 🎯

La spécialisation de templates permet de définir un comportement spécifique pour un type donné. Cela peut être utile si vous voulez fournir une implémentation différente pour un type particulier, comme une gestion spéciale pour les types `int` ou `double`.

#### Exemple de Spécialisation de Template :

```cpp
#include <iostream>
using namespace std;

// Template général
template <typename T>
void afficher(T a) {
    cout << "Type générique: " << a << endl;
}

// Spécialisation pour le type int
template <>
void afficher<int>(int a) {
    cout << "Type entier spécial: " << a << endl;
}

int main() {
    afficher(10);       // Utilise la spécialisation pour int
    afficher(3.14);     // Utilise le template générique
    afficher("Hello");  // Utilise le template générique

    return 0;
}
```

#### Explication :

- La fonction `afficher` utilise un template générique pour les types généraux.
- La spécialisation de template est utilisée pour fournir une implémentation spécifique lorsque le type est `int`.


### 5. **Templates avec des Paramètres Non-Typés** 🧠

Les templates peuvent aussi accepter des valeurs non-typées comme paramètres, ce qui permet de créer des classes ou des fonctions génériques qui dépendent non seulement des types, mais aussi des valeurs constantes.

#### Exemple de Template avec Paramètre Non-Typé :

```cpp
#include <iostream>
using namespace std;

// Template avec un paramètre non-typé
template <typename T, int N>
class Tableau {
private:
    T arr[N];

public:
    void set(int index, T value) {
        if (index < N) {
            arr[index] = value;
        }
    }

    T get(int index) {
        if (index < N) {
            return arr[index];
        }
        return T();  // Retourne une valeur par défaut
    }
};

int main() {
    Tableau<int, 5> tab;
    tab.set(0, 10);
    tab.set(1, 20);

    cout << "Premier élément : " << tab.get(0) << endl;
    cout << "Deuxième élément : " << tab.get(1) << endl;

    return 0;
}
```

#### Explication :

- Ce template de classe `Tableau` accepte deux paramètres : un type `T` et une constante `N` qui définit la taille du tableau. 
- La taille du tableau est donc une valeur déterminée lors de l'instanciation du template.


## 🎯 Conclusion

Les **templates** en C++ sont un outil extrêmement puissant pour la création de fonctions et de classes génériques. Ils vous permettent de :
- **Écrire des fonctions** et des **classes réutilisables** qui fonctionnent avec n'importe quel type de données.
- **Optimiser** la flexibilité de votre code tout en gardant les avantages de la sécurité de type.
- **Spécialiser** les templates pour gérer des cas particuliers de manière efficace.

💡 **Astuce** : Utilisez les templates pour rendre vos programmes plus modulaires et réutilisables, et n'oubliez pas de tirer parti de la spécialisation pour gérer des cas particuliers lorsque nécessaire. 🚀