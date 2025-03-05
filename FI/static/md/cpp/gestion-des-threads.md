# 📚 Gestion des Threads en C++

La gestion des **threads** (ou fils d'exécution) est un aspect crucial dans la programmation moderne pour tirer parti des processeurs multi-cœurs et exécuter plusieurs tâches en parallèle. Les threads permettent à un programme d'effectuer plusieurs tâches simultanément, ce qui améliore l'efficacité et la réactivité de l'application.

En C++, la gestion des threads se fait principalement à l’aide de la bibliothèque **`<thread>`**, introduite dans le C++11, qui offre une API standardisée pour créer et gérer des threads.


## 🧑‍💻 Introduction aux Threads

Un **thread** est l'unité de base d'exécution dans un programme. Chaque programme a au moins un thread principal qui démarre lors de l'exécution. Cependant, un programme peut créer d'autres threads pour effectuer différentes tâches en parallèle.

### Pourquoi utiliser des Threads ?
- **Amélioration des performances** : Les threads permettent de paralléliser les calculs et les tâches longues, exploitant mieux les ressources matérielles, comme les processeurs multi-cœurs.
- **Réactivité** : Un programme peut effectuer des opérations en arrière-plan (par exemple, télécharger un fichier) sans bloquer l’interface utilisateur.


## 🧵 Créer et Lancer un Thread

La création d’un thread en C++ se fait avec la classe `std::thread`. Voici un exemple simple de création d’un thread qui exécute une fonction.

### Exemple de création de thread :

```cpp
#include <iostream>
#include <thread>
using namespace std;

// Fonction à exécuter dans un thread
void afficherMessage() {
    cout << "Bonjour du thread!" << endl;
}

int main() {
    // Création d'un thread qui exécute la fonction afficherMessage
    thread t(afficherMessage);

    // Attente de la fin du thread
    t.join();

    cout << "Retour au thread principal" << endl;
    return 0;
}
```

### Explication :
- La fonction `std::thread` crée un nouveau thread d'exécution. Elle prend comme argument une fonction ou un objet callable (comme une fonction lambda).
- La méthode `join()` est utilisée pour attendre que le thread terminé son exécution avant que le programme principal ne continue.


## 🧑‍🏫 Fonctions et Classes de Gestion des Threads

### 1. **`join()`** 🚀
La méthode `join()` permet au thread principal d'attendre qu’un thread spécifique termine son exécution avant de poursuivre. Cela garantit que les ressources allouées au thread sont libérées correctement.

### 2. **`detach()`** ⛔
La méthode `detach()` permet de détacher un thread, ce qui signifie que le thread s'exécutera indépendamment et ne bloquera pas le thread principal.

**Attention** : Après un appel à `detach()`, vous ne pouvez plus interagir avec ce thread (comme appeler `join()`).

```cpp
#include <iostream>
#include <thread>
using namespace std;

void afficherMessage() {
    cout << "Message du thread détaché" << endl;
}

int main() {
    thread t(afficherMessage);

    // Détacher le thread pour qu'il continue en arrière-plan
    t.detach();

    cout << "Thread principal continue..." << endl;

    return 0;
}
```


## 🧩 Passer des Arguments aux Threads

Vous pouvez passer des arguments aux fonctions exécutées par un thread. Il suffit de les inclure dans l’appel de `std::thread`.

### Exemple de passage de paramètres :

```cpp
#include <iostream>
#include <thread>
using namespace std;

// Fonction qui prend des arguments
void afficherSomme(int a, int b) {
    cout << "La somme est: " << a + b << endl;
}

int main() {
    // Créer un thread avec des arguments
    thread t(afficherSomme, 5, 7);

    // Attendre que le thread finisse
    t.join();

    return 0;
}
```


## 🔒 Synchronisation des Threads

Quand plusieurs threads accèdent à des ressources partagées (comme des variables ou des objets), cela peut causer des conflits. La **synchronisation** est utilisée pour éviter que plusieurs threads n'accèdent à ces ressources en même temps, ce qui pourrait entraîner des comportements indéfinis.

La STL fournit plusieurs mécanismes pour la synchronisation, comme les **mutex** et les **verrous**.

### 1. **Mutex (Mutual Exclusion)** 🔒
Un **mutex** est un objet utilisé pour garantir qu'un seul thread accède à une ressource partagée à la fois.

### Exemple avec un Mutex :

```cpp
#include <iostream>
#include <thread>
#include <mutex>
using namespace std;

mutex mtx; // Mutex pour protéger l'accès à la ressource partagée

void incrementerCompteur(int& compteur) {
    for (int i = 0; i < 1000; i++) {
        // Verrouiller le mutex avant de modifier le compteur
        lock_guard<mutex> lock(mtx);
        compteur++;
    }
}

int main() {
    int compteur = 0;

    // Création de deux threads qui incrémentent le compteur
    thread t1(incrementerCompteur, ref(compteur));
    thread t2(incrementerCompteur, ref(compteur));

    // Attente de la fin des deux threads
    t1.join();
    t2.join();

    // Affichage du résultat
    cout << "Valeur du compteur : " << compteur << endl;

    return 0;
}
```

### Explication :
- **`std::mutex`** est utilisé pour protéger l’accès à la ressource partagée (`compteur` dans cet exemple).
- **`lock_guard<mutex>`** est une classe qui garantit le verrouillage et le déverrouillage automatique du mutex. Elle protège la ressource pendant toute la durée de son utilisation.


## ⚡ Gestion des Exceptions avec les Threads

Les exceptions dans les threads peuvent être un peu complexes à gérer. Si une exception se produit dans un thread, elle ne sera pas propagée au thread principal par défaut.

### Exemple de gestion des exceptions dans un thread :

```cpp
#include <iostream>
#include <thread>
#include <stdexcept>
using namespace std;

void fonctionAvecException() {
    throw runtime_error("Erreur dans le thread");
}

int main() {
    try {
        thread t(fonctionAvecException);
        t.join(); // Attendre la fin du thread
    } catch (const exception& e) {
        cout << "Exception attrapée dans le thread principal : " << e.what() << endl;
    }

    return 0;
}
```

## 🧑‍🏫 Conclusion

Les threads en C++ sont un excellent moyen de paralléliser les tâches et d'optimiser l’utilisation des ressources système. La bibliothèque `<thread>` permet de créer, gérer et synchroniser facilement les threads. Cependant, une gestion correcte des ressources partagées, des synchronisations adéquates et une gestion appropriée des exceptions sont essentielles pour éviter les erreurs et les comportements indéfinis dans un programme multithread.

💡 **Astuce** : Utilisez les threads avec parcimonie, car la gestion de la synchronisation peut complexifier un programme. Les performances ne sont pas toujours augmentées par l’ajout de threads, notamment si les tâches sont trop petites ou trop légères pour justifier l'utilisation de la parallélisation.