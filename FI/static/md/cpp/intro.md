# 🚀 Introduction au C++  

Le **C++** est un langage de programmation puissant et polyvalent, dérivé du **C**. Il prend en charge la **programmation procédurale**, la **programmation orientée objet (POO)** et même la **programmation générique** grâce aux **templates**.  

Développé par **Bjarne Stroustrup** dans les années 1980, il est largement utilisé pour le développement de **logiciels, jeux vidéo, systèmes embarqués, intelligence artificielle et applications haute performance**.  


## 🏆 Pourquoi Apprendre le C++ ?  

✔ **Puissant et performant** 💪 : Idéal pour les logiciels nécessitant une gestion fine des ressources.  
✔ **Orienté Objet** 🎯 : Facilite la modularité et la réutilisation du code.  
✔ **Portable et multiplateforme** 🌍 : Fonctionne sur Windows, Linux, macOS et bien d'autres.  
✔ **Utilisé dans l'industrie** 🏭 : Employé dans les jeux vidéo, systèmes embarqués, finance et plus encore.  


## 🏗️ Structure d’un Programme en C++  

Un programme **C++** est composé de **fonctions**, avec un point d'entrée appelé `main()`.  

🔹 **Exemple minimal en C++** :  

```cpp
#include <iostream>  // Inclusion de la bibliothèque standard pour l'affichage

int main() {
    std::cout << "Hello, World! 🌍" << std::endl;  // Affichage à l'écran
    return 0;  // Fin du programme
}
```

🔎 **Explication** :  
- `#include <iostream>` : Inclut la bibliothèque pour l'affichage.  
- `std::cout` : Permet d'afficher du texte dans la console.  
- `std::endl` : Passe à la ligne.  
- `return 0;` : Indique que le programme s'est bien terminé.  


## 🧩 Principales Caractéristiques du C++  

### 📌 1. **Les Variables et Types de Données**  
En C++, chaque variable doit avoir un **type** (`int`, `float`, `char`, `bool`, etc.).  

```cpp
int age = 25;      // Entier
double pi = 3.14;  // Nombre décimal
char lettre = 'A'; // Caractère
bool estVrai = true; // Booléen (vrai ou faux)
```


### 📌 2. **Les Opérateurs**  
Le C++ prend en charge de nombreux **opérateurs** pour manipuler les variables.  

| Type         | Opérateurs |
|-------------|-----------|
| **Arithmétiques** | `+`, `-`, `*`, `/`, `%` |
| **Comparaison**   | `==`, `!=`, `<`, `>`, `<=`, `>=` |
| **Logiques**      | `&&`, `||`, `!` |
| **Affectation**   | `=`, `+=`, `-=`, `*=`, `/=` |

```cpp
int a = 10, b = 5;
int somme = a + b;  // 15
bool estEgal = (a == b);  // false
```


### 📌 3. **Les Conditions (if, else, switch)**  
Les structures conditionnelles permettent d'exécuter du code selon une condition donnée.  

```cpp
int age = 18;

if (age >= 18) {
    std::cout << "Vous êtes majeur ! 🎉" << std::endl;
} else {
    std::cout << "Vous êtes mineur. 🚫" << std::endl;
}
```


### 📌 4. **Les Boucles (for, while, do-while)**  
Les boucles permettent de **répéter** des instructions plusieurs fois.  

```cpp
// Boucle for
for (int i = 1; i <= 5; i++) {
    std::cout << "Iteration " << i << std::endl;
}

// Boucle while
int x = 0;
while (x < 3) {
    std::cout << "x = " << x << std::endl;
    x++;
}
```


### 📌 5. **Les Fonctions**  
Une fonction est un bloc de code réutilisable qui effectue une tâche spécifique.  

```cpp
// Déclaration et définition d'une fonction
void direBonjour() {
    std::cout << "Bonjour ! 😊" << std::endl;
}

int main() {
    direBonjour(); // Appel de la fonction
    return 0;
}
```


### 📌 6. **Les Pointeurs**  
Un **pointeur** stocke l’adresse mémoire d’une variable, ce qui permet une manipulation avancée de la mémoire.  

```cpp
int nombre = 42;
int* ptr = &nombre; // Pointeur vers l'adresse de "nombre"

std::cout << "Valeur : " << *ptr << std::endl; // Affiche 42
```


### 📌 7. **Programmation Orientée Objet (POO)**  
Le C++ est un langage **orienté objet**, ce qui signifie qu'il supporte les concepts de **classe** et **objet**.  

```cpp
class Personne {
public:
    std::string nom;
    int age;

    void sePresenter() {
        std::cout << "Je m'appelle " << nom << " et j'ai " << age << " ans." << std::endl;
    }
};

int main() {
    Personne p1;
    p1.nom = "Alice";
    p1.age = 25;
    p1.sePresenter();

    return 0;
}
```

## 🎯 Conclusion  

Le **C++** est un langage puissant et flexible qui permet de créer **des programmes performants**. Il repose sur des concepts clés comme la **programmation procédurale, orientée objet et générique**.  

💡 **Prochaines étapes** :  
📌 Comprendre **les types de données**  
📌 Maîtriser **les structures de contrôle (conditions, boucles)**  
📌 Apprendre **les fonctions, pointeurs et objets**  

🚀 **Bienvenue dans le monde du C++ !**