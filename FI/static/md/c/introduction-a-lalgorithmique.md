# 📚 Introduction à l'Algorithmique  

L’**algorithmique** est la science de la conception et de l’analyse des **algorithmes**. Un **algorithme** est une **suite d’instructions** permettant de résoudre un problème de manière **claire, précise et finie**. C'est la base de la programmation et de l’informatique en général.  

## 🧐 Pourquoi apprendre l’algorithmique ?  

✔ **Résolution de problèmes** : Permet de diviser un problème complexe en étapes plus simples.  
✔ **Optimisation** : Trouver la solution la plus efficace pour économiser du temps et des ressources.  
✔ **Indépendance du langage** : Un bon algorithme peut être implémenté dans n’importe quel langage de programmation.  


## 🎯 Caractéristiques d’un bon algorithme  

✅ **Finitude** : Il doit avoir un nombre limité d’étapes.  
✅ **Précision** : Chaque étape doit être clairement définie.  
✅ **Efficacité** : Il doit consommer un minimum de ressources (temps et mémoire).  
✅ **Généralité** : Il doit être applicable à un ensemble de problèmes similaires.  


## 🏗️ Structure d’un Algorithme  

Un algorithme suit généralement la structure suivante :  

1. **Entrée** 🟢 : Les données initiales nécessaires à l'exécution.  
2. **Traitement** ⚙️ : Les opérations effectuées sur les données.  
3. **Sortie** 🔵 : Le résultat produit après le traitement.  

🔹 **Exemple d’un algorithme simple** : Trouver le plus grand de deux nombres  

🔸 **Pseudo-code** :  
```
Début  
    Lire A, B  
    Si A > B Alors  
        Afficher "A est le plus grand"  
    Sinon  
        Afficher "B est le plus grand"  
Fin
```
🔹 **Version en langage C** :  
```c
#include <stdio.h>

int main() {
    int A, B;
    printf("Entrez deux nombres : ");
    scanf("%d %d", &A, &B);

    if (A > B) {
        printf("%d est le plus grand\n", A);
    } else {
        printf("%d est le plus grand\n", B);
    }
    return 0;
}
```

## 🔄 Types d’Algorithmes  

Il existe plusieurs **types d’algorithmes**, chacun étant utilisé pour un besoin spécifique :  

### 1️⃣ **Algorithmes Séquentiels**  
🔹 S’exécutent **ligne par ligne**, sans choix ni répétition.  
🔸 **Exemple** : Calcul de l’aire d’un rectangle.  

### 2️⃣ **Algorithmes Conditionnels** (Structure de contrôle)  
🔹 Utilisent des **conditions** (`if`, `switch`) pour prendre des décisions.  
🔸 **Exemple** : Vérifier si un nombre est pair ou impair.  

### 3️⃣ **Algorithmes Itératifs** (Boucles)  
🔹 Répètent une action tant qu’une condition est vraie (`for`, `while`).  
🔸 **Exemple** : Afficher les nombres de 1 à 10.  

### 4️⃣ **Algorithmes Récursifs**  
🔹 Une fonction **s’appelle elle-même** pour résoudre un problème.  
🔸 **Exemple** : Calcul du **factoriel** d’un nombre.  

```c
int factoriel(int n) {
    if (n == 0) return 1;
    return n * factoriel(n - 1);
}
```

## 🕒 Complexité des Algorithmes  

Un bon algorithme doit être **efficace** en termes de **temps d’exécution** et d’**espace mémoire**.  

📌 **Notation Big-O** : Évalue la **croissance** du temps d’exécution en fonction de la taille des données.  

| Complexité | Exemple | Performance |
|------------|--------|------------|
| **O(1)** | Accès à un élément d'un tableau | 🚀 Très rapide |
| **O(log n)** | Recherche dichotomique | ⚡ Efficace |
| **O(n)** | Parcours d'un tableau | ⏳ Moyen |
| **O(n²)** | Tri par sélection | 🐌 Lent |
| **O(2ⁿ)** | Récursivité non optimisée | 🛑 Très lent |


## 🚀 Conclusion  

L'algorithmique est une **compétence essentielle** en informatique et en programmation. **Maîtriser les algorithmes** permet d’écrire des programmes **plus performants, plus lisibles et plus optimisés**.  

🔹 **Prochaines étapes** :  
📌 Apprendre **les structures de contrôle** (boucles, conditions)  
📌 Étudier **les structures de données** (tableaux, listes, arbres)  
📌 Comprendre **l’optimisation des algorithmes**  

💡 **Un bon programmeur ne se contente pas d’écrire du code, il conçoit de bons algorithmes !** 🚀