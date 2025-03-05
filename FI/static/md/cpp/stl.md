# 📚 Introduction à la STL (Standard Template Library) en C++

La **STL** (Standard Template Library) est une partie importante de la bibliothèque standard en C++ qui permet d’utiliser des structures de données et des algorithmes génériques. Elle est très puissante, flexible, et permet de réduire considérablement le temps de développement en offrant des solutions prêtes à l’emploi pour une multitude de tâches courantes.

La STL est composée de trois composants principaux :
1. **Conteneurs** : Structures de données permettant de stocker des éléments.
2. **Algorithmes** : Fonctions permettant de manipuler les données dans les conteneurs.
3. **Itérateurs** : Objets permettant de parcourir les éléments des conteneurs.


## 🧑‍💻 Conteneurs

Les **conteneurs** sont utilisés pour stocker et organiser des collections d'objets. La STL propose plusieurs types de conteneurs, chacun ayant des caractéristiques et des usages spécifiques.

### 1. **Conteneurs Séquentiels**
Les conteneurs séquentiels sont utilisés pour stocker des éléments dans un ordre spécifique.

#### a) **`vector`** 📈
Le `vector` est un tableau dynamique qui peut changer de taille. Il offre un accès rapide aux éléments via un index, et peut croître dynamiquement lorsque l'espace mémoire est insuffisant.

- Accès aux éléments : O(1)
- Insertion à la fin : O(1) (amortie)
- Insertion en début : O(n)

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3}; // Initialisation du vector

    // Ajouter un élément à la fin
    v.push_back(4);

    // Accéder aux éléments via un index
    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << " ";
    }
    cout << endl;

    return 0;
}
```

#### b) **`deque`** 📜
Le `deque` (double-ended queue) est similaire au `vector`, mais permet des insertions et suppressions efficaces à la fois au début et à la fin du conteneur.

- Accès aux éléments : O(1)
- Insertion/suppression à la fin : O(1)
- Insertion/suppression au début : O(1)

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> d = {10, 20, 30};

    // Ajouter un élément au début
    d.push_front(5);

    // Ajouter un élément à la fin
    d.push_back(40);

    for (int i : d) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
```

#### c) **`list`** 🔗
La `list` est une liste doublement chaînée. Contrairement aux autres conteneurs, l'accès aux éléments par index n'est pas possible, mais elle permet des insertions et suppressions efficaces à n'importe quel endroit.

- Accès aux éléments : O(n)
- Insertion/suppression à n'importe quelle position : O(1)

```cpp
#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> l = {5, 10, 15};

    // Ajouter un élément à la fin
    l.push_back(20);

    // Affichage de la liste
    for (int i : l) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
```

### 2. **Conteneurs Associatifs**
Les conteneurs associatifs permettent de stocker des paires clé-valeur, offrant un accès rapide aux éléments à partir de la clé.

#### a) **`set`** 🔑
Le `set` est un conteneur qui stocke des éléments uniques, triés selon un critère défini (par défaut croissant).

- Recherche : O(log n)
- Insertion : O(log n)

```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {1, 2, 3};

    // Ajouter un élément (la duplication est ignorée)
    s.insert(2);
    s.insert(4);

    for (int i : s) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
```

#### b) **`map`** 🗺️
Le `map` est un conteneur qui associe des clés uniques à des valeurs. Chaque élément est une paire clé-valeur, et les clés sont triées.

- Recherche : O(log n)
- Insertion : O(log n)

```cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> m;
    m["Alice"] = 25;
    m["Bob"] = 30;

    // Accès à un élément par clé
    cout << "Alice: " << m["Alice"] << endl;

    for (const auto& pair : m) {
        cout << pair.first << ": " << pair.second << endl;
    }

    return 0;
}
```


## 🔧 Algorithmes

La STL offre un ensemble d'algorithmes puissants qui opèrent sur les conteneurs, ce qui permet de réaliser des tâches courantes telles que le tri, la recherche, ou encore la manipulation des données.

Exemples :

### a) **`sort()`** 🔀
Le `sort()` permet de trier les éléments d'un conteneur. Par défaut, il trie dans l'ordre croissant.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 1, 4, 2, 3};

    // Trier les éléments
    sort(v.begin(), v.end());

    for (int i : v) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
```

### b) **`find()`** 🔍
L'algorithme `find()` permet de rechercher un élément dans un conteneur.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 1, 4, 2, 3};

    auto it = find(v.begin(), v.end(), 4);

    if (it != v.end()) {
        cout << "Élément trouvé à l'index: " << distance(v.begin(), it) << endl;
    } else {
        cout << "Élément non trouvé" << endl;
    }

    return 0;
}
```


## 🔄 Itérateurs

Les **itérateurs** sont des objets qui permettent de parcourir un conteneur de manière uniforme. Ils sont utilisés avec des algorithmes pour accéder et manipuler les éléments des conteneurs.

### Exemple avec un itérateur :
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30, 40};

    // Utilisation d'un itérateur pour parcourir le vector
    for (auto it = v.begin(); it != v.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;

    return 0;
}
```


## 🎯 Conclusion

La **STL** en C++ est une bibliothèque puissante qui offre des structures de données et des algorithmes génériques et optimisés. Elle permet de manipuler facilement les données et d'écrire des programmes plus courts et plus efficaces. Grâce aux conteneurs, aux algorithmes et aux itérateurs, vous pouvez résoudre une grande variété de problèmes de manière élégante et performante.

💡 **Astuce** : Utilisez les conteneurs STL pour éviter de réinventer la roue. Ils sont bien conçus, optimisés et largement utilisés dans l’industrie.