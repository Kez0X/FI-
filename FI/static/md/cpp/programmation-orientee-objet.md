# 📚 Programmation Orientée Objet (POO) en C++

La **programmation orientée objet (POO)** est un paradigme de programmation qui organise le code en **objets**. Un objet est une instance d'une **classe**, et une classe est un modèle ou un plan qui définit un type d'objet. La POO permet de structurer les programmes de manière plus modulaire, plus flexible et plus réutilisable. 

Le C++ étant un langage de programmation orienté objet, permet d'utiliser des concepts de la POO pour organiser et gérer les données et le comportement des objets.


## 🧩 Les Concepts Clés de la POO

### 1. **Classes et Objets** 🏷️

- **Classe** : Une classe est un modèle ou une structure qui définit les caractéristiques (attributs) et le comportement (méthodes) d'un objet.
- **Objet** : Un objet est une instance d'une classe, c'est-à-dire un exemplaire concret de cette classe.

#### Exemple de classe et objet :

```cpp
class Voiture {
public:
    // Attributs
    std::string marque;
    int annee;

    // Méthodes
    void demarrer() {
        std::cout << "La voiture démarre." << std::endl;
    }
};

int main() {
    // Création d'un objet 'maVoiture' de la classe Voiture
    Voiture maVoiture;
    maVoiture.marque = "Toyota";
    maVoiture.annee = 2021;
    maVoiture.demarrer(); // Appel d'une méthode
}
```


### 2. **Encapsulation** 🔒

L'encapsulation consiste à cacher les détails internes d'une classe, et à fournir une interface publique pour interagir avec les objets de cette classe. Cela permet de protéger les données sensibles et de simplifier l'usage des objets.

- Les **attributs** sont généralement privés (private), ce qui empêche l'accès direct depuis l'extérieur.
- Les **méthodes** publiques (public) permettent d'accéder et de manipuler les données internes de manière contrôlée.

#### Exemple d'encapsulation :

```cpp
class CompteBancaire {
private:
    double solde;  // Attribut privé

public:
    // Méthodes publiques pour manipuler l'attribut privé
    void deposer(double montant) {
        if (montant > 0) {
            solde += montant;
        }
    }

    double obtenirSolde() {
        return solde;
    }
};

int main() {
    CompteBancaire compte;
    compte.deposer(1000);  // On peut utiliser la méthode pour ajouter de l'argent
    std::cout << "Solde : " << compte.obtenirSolde();  // Accès sécurisé à l'attribut
}
```

### 3. **Héritage** 🧬

L'héritage permet de créer de nouvelles classes basées sur des classes existantes. La classe dérivée (ou sous-classe) hérite des attributs et des méthodes de la classe de base (ou super-classe). Cela permet de réutiliser le code et de créer une hiérarchie de classes.

#### Exemple d'héritage :

```cpp
// Classe de base
class Animal {
public:
    void manger() {
        std::cout << "L'animal mange." << std::endl;
    }
};

// Classe dérivée
class Chien : public Animal {
public:
    void aboyer() {
        std::cout << "Le chien aboie." << std::endl;
    }
};

int main() {
    Chien monChien;
    monChien.manger();  // Héritée de la classe Animal
    monChien.aboyer();  // Spécifique à la classe Chien
}
```


### 4. **Polymorphisme** 🧩

Le polymorphisme permet à une même méthode d'agir de manière différente selon le type d'objet sur lequel elle est appelée. Il existe deux types de polymorphisme :
- **Polymorphisme de méthode** (ou surcharge de méthodes) : Plusieurs méthodes peuvent avoir le même nom, mais des signatures différentes.
- **Polymorphisme d'héritage** (ou substitution) : Une méthode dans une classe dérivée peut redéfinir une méthode de la classe de base.

#### Exemple de polymorphisme :

```cpp
// Classe de base
class Animal {
public:
    virtual void faireDuBruit() {
        std::cout << "L'animal fait un bruit." << std::endl;
    }
};

// Classe dérivée
class Chien : public Animal {
public:
    void faireDuBruit() override { // Redéfinition de la méthode
        std::cout << "Le chien aboie." << std::endl;
    }
};

// Classe dérivée
class Chat : public Animal {
public:
    void faireDuBruit() override { // Redéfinition de la méthode
        std::cout << "Le chat miaule." << std::endl;
    }
};

int main() {
    Animal* monAnimal;
    Chien monChien;
    Chat monChat;

    monAnimal = &monChien;
    monAnimal->faireDuBruit();  // Affiche "Le chien aboie."

    monAnimal = &monChat;
    monAnimal->faireDuBruit();  // Affiche "Le chat miaule."
}
```


### 5. **Abstraction** 🧠

L'abstraction permet de ne montrer que les détails nécessaires à l'utilisateur et de cacher les détails complexes ou inutiles. Cela est réalisé à l'aide de classes abstraites et de méthodes virtuelles pures.

Une **classe abstraite** est une classe qui ne peut pas être instanciée directement et qui peut contenir des méthodes virtuelles pures, c'est-à-dire des méthodes qui n'ont pas de corps, mais qui doivent être implémentées dans les classes dérivées.

#### Exemple d'abstraction :

```cpp
// Classe abstraite
class Forme {
public:
    virtual double calculerSurface() = 0;  // Méthode virtuelle pure
};

// Classe dérivée
class Cercle : public Forme {
private:
    double rayon;
public:
    Cercle(double r) : rayon(r) {}

    double calculerSurface() override {
        return 3.14 * rayon * rayon;
    }
};

int main() {
    Cercle c(5);
    std::cout << "Surface du cercle : " << c.calculerSurface();  // Affiche la surface du cercle
}
```

## 🧩 Modificateurs d'Accès

Les modificateurs d'accès contrôlent la visibilité des membres d'une classe (attributs et méthodes).

- **public** : Les membres sont accessibles depuis l'extérieur de la classe.
- **private** : Les membres sont accessibles uniquement depuis les méthodes de la classe.
- **protected** : Les membres sont accessibles depuis la classe elle-même et les classes dérivées.

## 🎯 Conclusion

La **programmation orientée objet** (POO) en C++ vous permet de structurer vos programmes de manière modulaire et flexible. En combinant des concepts comme les **classes**, **objets**, **héritage**, **polymorphisme**, et **abstraction**, vous pouvez créer des programmes réutilisables, extensibles et maintenables.

💡 **Astuce** : Utilisez les principes de la POO pour organiser votre code de manière claire et logique, en regroupant des comportements et des données connexes dans des classes. Cela rendra votre code plus facile à comprendre et à étendre à l'avenir. 🚀