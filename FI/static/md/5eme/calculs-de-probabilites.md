### **Calculs de Probabilités** 🎲

Les **probabilités** permettent de quantifier la chance qu'un événement se produise. Elles sont exprimées sous forme d'un nombre entre 0 et 1, où :

- **0** signifie qu'un événement ne se produira jamais,
- **1** signifie qu'il se produira toujours.



#### **1. La probabilité d’un événement simple** ⚖️

Si une expérience aléatoire a \( n \) issues possibles, et que l'événement **A** contient \( m \) résultats favorables parmi ces \( n \) issues, alors la probabilité \( P(A) \) de cet événement est donnée par :

$$
P(A) = \frac{m}{n}
$$

**Exemple :** Si tu lances un dé à six faces, la probabilité d'obtenir un 3 est :

$$
P(\text{obtenir un 3}) = \frac{1}{6}
$$

Car il y a 6 résultats possibles (1, 2, 3, 4, 5, 6), et un seul "3" parmi eux.



#### **2. Probabilité d’un événement complémentaire** 🚫

Si l’événement **A** a une probabilité \( P(A) \), l’événement complémentaire **A'** (c’est-à-dire l’événement "non A") a une probabilité :

$$
P(A') = 1 - P(A)
$$

**Exemple :** Si la probabilité d’obtenir un 3 en lançant un dé est \( P(A) = \frac{1}{6} \), alors la probabilité de **ne pas obtenir un 3** est :

$$
P(A') = 1 - \frac{1}{6} = \frac{5}{6}
$$



#### **3. Probabilité d’une union d’événements** 🔗

Si on a deux événements **A** et **B**, la probabilité que l’un ou l’autre se produise est donnée par la formule de l'union :

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

- **Si A et B sont disjoints** (c’est-à-dire qu’ils ne peuvent pas se produire en même temps), alors \( P(A \cap B) = 0 \) et on obtient simplement :

$$
P(A \cup B) = P(A) + P(B)
$$

**Exemple :** Si on lance un dé et on définit l’événement **A** : "obtenir un nombre pair" (2, 4, 6) et l’événement **B** : "obtenir un nombre supérieur à 3" (4, 5, 6), la probabilité que l’on obtienne un nombre pair **ou** un nombre supérieur à 3 est :

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

On sait que :

- \( P(A) = \frac{3}{6} = \frac{1}{2} \) (pour les nombres 2, 4, 6),
- \( P(B) = \frac{4}{6} = \frac{2}{3} \) (pour les nombres 4, 5, 6),
- \( P(A \cap B) = \frac{2}{6} = \frac{1}{3} \) (pour les nombres 4 et 6, qui sont à la fois pairs et supérieurs à 3).

Donc :

$$
P(A \cup B) = \frac{1}{2} + \frac{2}{3} - \frac{1}{3} = \frac{1}{2} + \frac{1}{3} = \frac{5}{6}
$$



#### **4. Probabilité d’une intersection d’événements** 🔒

Si les événements **A** et **B** sont indépendants (c’est-à-dire qu'ils n’affectent pas l’un l’autre), la probabilité qu'ils se produisent en même temps est simplement le produit de leurs probabilités individuelles :

$$
P(A \cap B) = P(A) \times P(B)
$$

**Exemple :** Si tu lances un dé et une pièce de monnaie, la probabilité d’obtenir un 3 sur le dé et pile sur la pièce est :

$$
P(\text{3 sur le dé} \cap \text{pile}) = P(\text{3 sur le dé}) \times P(\text{pile}) = \frac{1}{6} \times \frac{1}{2} = \frac{1}{12}
$$



#### **5. Probabilité conditionnelle** 🔄

La probabilité **conditionnelle** est la probabilité qu'un événement se produise, sachant qu'un autre événement s'est déjà produit. Si l'événement **B** est déjà survenu, la probabilité de **A** étant donné que **B** s'est produit est notée \( P(A \mid B) \), et elle est donnée par :

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

**Exemple :** Si tu lances un dé et tu sais déjà qu'un nombre supérieur à 3 a été obtenu (l’événement **B**), la probabilité d’obtenir un 5 (l’événement **A**) est :

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

Ici, \( P(A \cap B) = P(\text{obtenir un 5}) = \frac{1}{6} \), et \( P(B) = P(\text{obtenir un nombre supérieur à 3}) = \frac{3}{6} = \frac{1}{2} \).

Donc, \( P(A \mid B) \) est :

$$
P(A \mid B) = \frac{\frac{1}{6}}{\frac{1}{2}} = \frac{1}{3}
$$



#### **6. Règles de probabilité pour des événements dépendants** 🔗

Lorsque les événements **A** et **B** ne sont pas indépendants (c’est-à-dire qu’ils sont **dépendants**), la probabilité de leur intersection est donnée par :

$$
P(A \cap B) = P(A) \times P(B \mid A)
$$

où \( P(B \mid A) \) est la probabilité de **B** sachant que **A** s’est déjà produit.

**Exemple :** Si tu tires une carte d’un jeu de cartes sans la remettre, la probabilité d’obtenir une carte rouge (événement **A**) puis une carte cœur (événement **B**) est calculée comme suit :

$$
P(A \cap B) = P(A) \times P(B \mid A)
$$



#### **7. Résumé des Formules de Probabilité** 🧠

- Probabilité d’un événement simple : \( P(A) = \frac{m}{n} \)
- Probabilité complémentaire : \( P(A') = 1 - P(A) \)
- Probabilité de l’union : \( P(A \cup B) = P(A) + P(B) - P(A \cap B) \)
- Probabilité de l’intersection (événements indépendants) : \( P(A \cap B) = P(A) \times P(B) \)
- Probabilité conditionnelle : \( P(A \mid B) = \frac{P(A \cap B)}{P(B)} \)
  


### **Conclusion** 🎯

Les **calculs de probabilités** sont essentiels pour comprendre comment prédire les résultats d’expériences aléatoires. Que ce soit pour les événements simples ou complexes, la maîtrise des différentes règles de probabilité t’aidera à résoudre de nombreux problèmes. N'oublie pas : plus tu connais bien les événements et leurs relations, plus tu pourras calculer des probabilités précises ! ✨