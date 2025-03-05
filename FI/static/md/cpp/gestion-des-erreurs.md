# 📚 Gestion des Erreurs en C++

La gestion des erreurs est essentielle dans tout programme informatique pour garantir son bon fonctionnement et la sécurité des données. En C++, plusieurs mécanismes permettent de traiter les erreurs et d'éviter que des erreurs inattendues n'interrompent l'exécution du programme de manière brutale.

## 🧩 Les Types d'Erreurs

Les erreurs peuvent être divisées en plusieurs catégories :

1. **Erreurs de compilation** : Ce sont des erreurs qui se produisent lorsque le programme est écrit de manière incorrecte (par exemple, une faute de syntaxe).
2. **Erreurs d'exécution** : Ce sont des erreurs qui surviennent pendant l'exécution du programme, telles que des erreurs de division par zéro, l'accès à une mémoire non allouée, etc.
3. **Erreurs logiques** : Ce sont des erreurs dans la logique du programme qui produisent des résultats incorrects.

En C++, la gestion des erreurs repose principalement sur deux mécanismes :
1. **Les codes de retour**.
2. **Les exceptions**.


## ⚙️ 1. Utilisation des Codes de Retour

Les codes de retour sont utilisés pour signaler des erreurs dans un programme. Ils sont souvent utilisés dans des fonctions pour indiquer si une opération a réussi ou échoué. Si une fonction renvoie un code d'erreur spécifique, l'appelant peut réagir en conséquence.

### Exemple d'utilisation des codes de retour :

```cpp
#include <iostream>
using namespace std;

int division(int a, int b) {
    if (b == 0) {
        return -1; // Code d'erreur pour division par zéro
    }
    return a / b;
}

int main() {
    int result = division(10, 0);

    if (result == -1) {
        cout << "Erreur: Division par zéro!" << endl;
    } else {
        cout << "Résultat de la division : " << result << endl;
    }

    return 0;
}
```

#### Explication :
- Ici, la fonction `division` renvoie un code d'erreur (-1) si le dénominateur est égal à zéro.
- Dans le `main`, le programme vérifie le code de retour pour déterminer si une erreur s'est produite et affiche un message approprié.


## ⚙️ 2. Gestion des Exceptions

Les exceptions sont un mécanisme plus puissant et flexible pour gérer les erreurs en C++. Elles permettent de capturer des erreurs et de les traiter de manière centralisée. Une exception est "jetée" (lancée) lorsqu'une erreur se produit et peut être "attrapée" (capturée) par un gestionnaire d'exceptions.

### La syntaxe des exceptions

- **Lancer une exception** : `throw <expression>;`
- **Capturer une exception** : `try { ... } catch (<type d'exception> <nom de l'exception>) { ... }`

### Exemple de gestion des exceptions :

```cpp
#include <iostream>
#include <stdexcept>  // Pour std::invalid_argument
using namespace std;

int division(int a, int b) {
    if (b == 0) {
        throw invalid_argument("Erreur: Division par zéro!");
    }
    return a / b;
}

int main() {
    try {
        int result = division(10, 0);
        cout << "Résultat de la division : " << result << endl;
    } catch (const invalid_argument& e) {
        cout << "Exception attrapée: " << e.what() << endl;
    }

    return 0;
}
```

#### Explication :
- La fonction `division` lance une exception de type `std::invalid_argument` si le dénominateur est égal à zéro.
- Le bloc `try` tente d'exécuter la fonction et, si une exception est lancée, le bloc `catch` capture l'exception et affiche un message d'erreur.
- La méthode `what()` de l'exception permet d'obtenir une description de l'erreur.


## ⚙️ 3. Types d'Exceptions Standard en C++

Le C++ propose un certain nombre d'exceptions standard que vous pouvez utiliser pour gérer des erreurs courantes.

### Quelques exemples :

- **std::exception** : La classe de base pour toutes les exceptions.
- **std::invalid_argument** : Utilisé pour les arguments invalides.
- **std::out_of_range** : Utilisé lorsque l'on tente d'accéder à une position hors de portée.
- **std::runtime_error** : Utilisé pour les erreurs d'exécution.

### Exemple d'exception `std::out_of_range` :

```cpp
#include <iostream>
#include <stdexcept>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3};

    try {
        cout << v.at(5) << endl;  // Accès hors limites
    } catch (const out_of_range& e) {
        cout << "Exception attrapée: " << e.what() << endl;
    }

    return 0;
}
```

#### Explication :
- `v.at(5)` essaie d'accéder à un élément du vecteur en dehors des limites. La méthode `at()` lance une exception `std::out_of_range` si l'index est hors de portée.


## ⚙️ 4. Gestion des Exceptions Personnalisées

Vous pouvez aussi définir vos propres exceptions en créant une classe qui hérite de `std::exception` et en surchargeant la méthode `what()` pour retourner un message personnalisé.

### Exemple de gestion d'exceptions personnalisées :

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

class DivisionByZeroException : public exception {
public:
    const char* what() const noexcept override {
        return "Erreur: Division par zéro!";
    }
};

int division(int a, int b) {
    if (b == 0) {
        throw DivisionByZeroException();
    }
    return a / b;
}

int main() {
    try {
        int result = division(10, 0);
        cout << "Résultat de la division : " << result << endl;
    } catch (const DivisionByZeroException& e) {
        cout << "Exception attrapée: " << e.what() << endl;
    }

    return 0;
}
```

#### Explication :
- Une classe `DivisionByZeroException` est définie pour créer une exception personnalisée.
- La fonction `division` lance cette exception si le dénominateur est zéro, et le `catch` dans `main` capture et affiche l'exception.


## 🎯 Conclusion

La gestion des erreurs est cruciale pour garantir que vos programmes se comportent de manière fiable et prévisible. En C++, les erreurs peuvent être gérées à l'aide de codes de retour simples ou de mécanismes plus complexes tels que les exceptions. Les exceptions permettent de gérer les erreurs de manière plus robuste et plus flexible.

💡 **Astuce** : Utilisez les exceptions pour gérer les erreurs dans des cas où une logique simple de code de retour ne suffira pas, en particulier pour les erreurs d'exécution complexes. Cependant, veillez à ne pas abuser des exceptions pour chaque petite erreur, car elles peuvent avoir un coût en termes de performance.


🚀 **Bonus** : N'oubliez pas d'attraper toutes les exceptions possibles dans vos programmes, surtout lorsque vous travaillez avec des entrées externes, des fichiers ou des ressources système.