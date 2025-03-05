


# 🎲 Calculs de Probabilités

Les **probabilités** permettent de quantifier la chance qu'un événement se produise. On peut les utiliser pour résoudre des problèmes liés aux jeux, aux expériences aléatoires, aux risques, etc.



## 🔍 Qu'est-ce qu'une probabilité ?

La probabilité d'un événement est un nombre compris entre **0** et **1**, qui mesure la **chance** qu'un événement se produise.

- Si $$P(E) = 0$$, cela signifie que l'événement $$E$$ ne se produira jamais.
- Si $$P(E) = 1$$, cela signifie que l'événement $$E$$ se produira à coup sûr.
- Si $$0 < P(E) < 1$$, cela signifie que l'événement $$E$$ peut se produire, mais ce n'est pas garanti.

La probabilité d'un événement $$E$$ se note $$P(E)$$.



## 📚 Calcul de Probabilité

La probabilité d'un événement $$E$$ est calculée à l'aide de la formule suivante :

$$
P(E) = \frac{\text{nombre de cas favorables à } E}{\text{nombre total de cas possibles}}
$$

- **Cas favorables** : Ce sont les situations où l'événement $$E$$ se produit.
- **Cas possibles** : Ce sont toutes les situations possibles qui peuvent se produire.

### Exemple 1 :

Si on lance un dé à 6 faces et qu'on veut savoir la probabilité d'obtenir un **2**, le nombre total de cas possibles est **6** (car il y a 6 faces sur le dé), et le nombre de cas favorables est **1** (car il n'y a qu'un seul **2**). Ainsi, la probabilité est :

$$
P(\text{2}) = \frac{1}{6}
$$



### Exemple 2 : Tirage d'une carte

Imaginons un paquet de cartes standard de 52 cartes (13 cartes de chaque couleur : cœur, carreau, trèfle et pique).

- Si l'on souhaite connaître la probabilité de tirer un **as**, le nombre total de cas possibles est **52** et le nombre de cas favorables est **4** (car il y a 4 as dans le paquet). La probabilité de tirer un as est donc :

$$
P(\text{As}) = \frac{4}{52} = \frac{1}{13}
$$



## 🧮 Probabilité d'événements complémentaires

L'événement complémentaire d'un événement $$E$$ est l'événement qui correspond au fait que $$E$$ **ne se produit pas**. On note l'événement complémentaire de $$E$$ par $$E^c$$.

La probabilité de l'événement complémentaire est calculée de la manière suivante :

$$
P(E^c) = 1 - P(E)
$$

### Exemple :

Si la probabilité de tirer un **as** d'un paquet de cartes est de $$\frac{1}{13}$$, alors la probabilité de **ne pas** tirer un as est :

$$
P(\text{pas d'as}) = 1 - \frac{1}{13} = \frac{12}{13}
$$



## 🤝 Probabilité d'événements indépendants

Deux événements sont dits **indépendants** si la réalisation de l'un n'affecte pas la probabilité de l'autre. Par exemple, lorsque l'on lance deux dés, l'obtention d'un certain résultat sur le premier dé n'influence pas le résultat du deuxième dé.

La probabilité que deux événements indépendants $$E_1$$ et $$E_2$$ se produisent en même temps est donnée par la multiplication de leurs probabilités respectives :

$$
P(E_1 \cap E_2) = P(E_1) \times P(E_2)
$$

### Exemple :

Si on lance deux dés, la probabilité d'obtenir un **6** sur le premier dé et un **4** sur le deuxième dé est :

$$
P(\text{6 sur 1er dé et 4 sur 2ème dé}) = P(\text{6 sur 1er dé}) \times P(\text{4 sur 2ème dé}) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36}
$$



## 🧑‍🏫 Probabilité d'événements exclusifs

Deux événements sont dits **mutuellement exclusifs** si **ils ne peuvent pas se produire en même temps**. Par exemple, lorsqu'on lance un dé, on ne peut pas obtenir à la fois un **2** et un **3**.

La probabilité que l'un ou l'autre de ces événements se produise est la somme de leurs probabilités :

$$
P(E_1 \cup E_2) = P(E_1) + P(E_2)
$$

### Exemple :

Si on lance un dé et qu'on veut connaître la probabilité d'obtenir un **2** ou un **3**, la probabilité est :

$$
P(\text{2 ou 3}) = P(\text{2}) + P(\text{3}) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}
$$



## 🧑‍🏫 La probabilité totale

Si un ensemble d'événements forme une **partition** de l'espace des événements (c'est-à-dire que ces événements sont mutuellement exclusifs et couvrent toutes les possibilités), la probabilité totale d'un événement $$E$$ est la somme des probabilités conditionnelles des événements qui composent la partition :

$$
P(E) = P(E_1 \cup E_2 \cup \cdots) = P(E_1) + P(E_2) + \cdots
$$



## 📚 Exemple de Probabilité Totale

Si on lance un dé et qu'on veut calculer la probabilité d'obtenir un nombre pair, on sait qu'il y a 3 nombres pairs : **2**, **4**, et **6**. La probabilité est donc la somme des probabilités de chacun de ces événements :

$$
P(\text{pair}) = P(\text{2}) + P(\text{4}) + P(\text{6}) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{3}{6} = \frac{1}{2}
$$



## 📝 Conclusion

Les **calculs de probabilités** sont un outil puissant pour modéliser des phénomènes aléatoires. Ils permettent de comprendre et de quantifier le risque dans des situations aussi variées que les jeux de hasard, la météo ou les décisions économiques.



Tu es maintenant prêt à calculer des probabilités ! 🎉