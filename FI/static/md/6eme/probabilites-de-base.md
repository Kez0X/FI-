# Probabilités de Base

Les **probabilités** sont un domaine des mathématiques qui étudie les phénomènes aléatoires. Elles permettent de mesurer la chance qu'un événement se produise. La probabilité d'un événement est un nombre compris entre 0 et 1, où :

- $$0$$ signifie que l'événement ne se produit jamais,
- $$1$$ signifie que l'événement se produit toujours.

## 1. **Définition d'un Événement**

Un **événement** est un résultat possible d'une expérience aléatoire. Par exemple, si vous lancez un dé, les événements possibles sont les résultats des faces du dé, c'est-à-dire $$1, 2, 3, 4, 5, 6$$.

### Types d'Événements
- **Événement certain** : Un événement qui se produit à chaque fois (probabilité = 1). Par exemple, lorsqu'on lance un dé, obtenir un nombre compris entre 1 et 6 est certain.
- **Événement impossible** : Un événement qui ne peut jamais se produire (probabilité = 0). Par exemple, obtenir un 7 en lançant un dé est un événement impossible.

## 2. **Calcul de Probabilité**

La probabilité d'un événement $$A$$ se note $$P(A)$$ et est calculée à partir du rapport entre le nombre de cas favorables et le nombre total de cas possibles.

### Formule de Probabilité :

$$P(A) = \frac{\text{Nombre de cas favorables}}{\text{Nombre total de cas possibles}}$$

### Exemple :
Si vous lancez un dé à 6 faces et que vous voulez connaître la probabilité d'obtenir un nombre pair :
- Les nombres pairs possibles sont $$2, 4, 6$$ (ce qui donne 3 cas favorables).
- Le nombre total de cas possibles est 6 (car le dé a 6 faces).
Donc, la probabilité d'obtenir un nombre pair est :

$$P(\text{pair}) = \frac{3}{6} = \frac{1}{2}$$

## 3. **Espaces Probabilistes**

L'**espace probabiliste** est l'ensemble de tous les résultats possibles d'une expérience aléatoire. Pour un dé à 6 faces, l'espace probabiliste est :

$$\Omega = \{1, 2, 3, 4, 5, 6\}$$

Chaque élément de cet ensemble est un **issue** de l'expérience, et chaque événement est un sous-ensemble de cet espace.

### Exemple :
Si l'on considère l'événement "obtenir un nombre supérieur à 4" lors du lancement d'un dé :
- L'événement favorable est $$\{5, 6\}$$.
- La probabilité de cet événement est :

$$P(\text{supérieur à 4}) = \frac{2}{6} = \frac{1}{3}$$

## 4. **Événements Indépendants**

Deux événements $$A$$ et $$B$$ sont dits **indépendants** si la réalisation de l'un n'affecte pas la probabilité de réalisation de l'autre. 

### Propriété des Événements Indépendants :

Si $$A$$ et $$B$$ sont indépendants, alors la probabilité de la conjonction (la réalisation simultanée de $$A$$ et $$B$$) est donnée par :

$$P(A \cap B) = P(A) \times P(B)$$

### Exemple :
Lorsqu'on lance deux dés, l'événement d'obtenir un certain résultat sur le premier dé est indépendant de l'événement d'obtenir un certain résultat sur le deuxième dé. Par exemple :
- La probabilité d'obtenir un 3 sur le premier dé est $$P(A) = \frac{1}{6}$$.
- La probabilité d'obtenir un 5 sur le deuxième dé est $$P(B) = \frac{1}{6}$$.

La probabilité d'obtenir un 3 sur le premier dé ET un 5 sur le deuxième dé est :

$$P(A \cap B) = P(A) \times P(B) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36}$$

## 5. **Événements Exclusifs (Mutuellement Exclusifs)**

Deux événements $$A$$ et $$B$$ sont dits **mutuellement exclusifs** si la réalisation de l'un exclut la réalisation de l'autre. Autrement dit, les deux événements ne peuvent pas se produire en même temps.

### Propriété des Événements Exclusifs :

Si $$A$$ et $$B$$ sont mutuellement exclusifs, alors la probabilité de leur union (la probabilité que l'un ou l'autre se produise) est donnée par :

$$P(A \cup B) = P(A) + P(B)$$

### Exemple :
Si l'on lance un dé, l'événement "obtenir un nombre pair" et l'événement "obtenir un nombre impair" sont mutuellement exclusifs, car un dé ne peut pas montrer à la fois un nombre pair et impair. La probabilité d'obtenir un nombre pair ou impair est donc :

$$P(\text{pair} \cup \text{impair}) = P(\text{pair}) + P(\text{impair}) = \frac{1}{2} + \frac{1}{2} = 1$$

## 6. **Probabilité Conditionnelle**

La **probabilité conditionnelle** d'un événement $$A$$ sachant qu'un autre événement $$B$$ s'est produit, notée $$P(A | B)$$, représente la probabilité de $$A$$ en tenant compte du fait que $$B$$ est déjà survenu.

### Formule de la Probabilité Conditionnelle :

$$P(A | B) = \frac{P(A \cap B)}{P(B)}$$

### Exemple :
Si l'on lance un dé et que l'on sait qu'un nombre pair est apparu, la probabilité d'obtenir un 4 parmi les résultats possibles (2, 4, 6) est :

$$P(\text{obtenir 4 | pair}) = \frac{P(\text{obtenir 4})}{P(\text{pair})} = \frac{\frac{1}{6}}{\frac{3}{6}} = \frac{1}{3}$$

## 7. **Conclusion**

Les probabilités sont un outil puissant pour analyser et prédire les événements dans des situations aléatoires. Comprendre les bases de la probabilité permet de mieux appréhender les phénomènes aléatoires et de prendre des décisions éclairées.

### Récapitulatif des Formules Clés :

1. **Probabilité d'un événement :**
   $$P(A) = \frac{\text{Nombre de cas favorables}}{\text{Nombre total de cas possibles}}$$

2. **Événements indépendants :**
   $$P(A \cap B) = P(A) \times P(B)$$

3. **Événements exclusifs :**
   $$P(A \cup B) = P(A) + P(B)$$

4. **Probabilité conditionnelle :**
   $$P(A | B) = \frac{P(A \cap B)}{P(B)}$$

Les bases des probabilités permettent d'aborder des situations plus complexes comme les probabilités composées et les lois de probabilité.