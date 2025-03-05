# Statistiques de Base

Les statistiques permettent d'analyser, de résumer et d'interpréter des données. Elles jouent un rôle essentiel dans l'étude des phénomènes et la prise de décision. Dans cette leçon, nous allons aborder les bases des statistiques, en particulier les mesures de tendance centrale, la médiane, la moyenne et l'écart-type.

## 1. **La Moyenne (ou Moyenne Arithmétique)**

La **moyenne** est l'une des mesures de tendance centrale les plus courantes. Elle permet de représenter la "valeur centrale" d'un ensemble de données.

### Formule de la Moyenne :
$$\text{Moyenne} = \frac{\sum_{i=1}^{n} x_i}{n}$$

- $$\sum_{i=1}^{n} x_i$$ : somme de toutes les valeurs des données.
- $$n$$ : nombre total de données.

#### Exemple :
Si les données sont : $$4, 7, 9, 5, 6$$, la moyenne est :
$$\text{Moyenne} = \frac{4 + 7 + 9 + 5 + 6}{5} = \frac{31}{5} = 6.2$$

La moyenne de cet ensemble de données est donc $$6.2$$.

## 2. **La Médiane**

La **médiane** est une autre mesure de tendance centrale. Elle représente la valeur qui sépare les données en deux parties égales.

### Étapes pour trouver la Médiane :
1. **Trier les données** dans l'ordre croissant.
2. Si le nombre de données $$n$$ est impair, la médiane est la valeur du **milieu**.
3. Si $$n$$ est pair, la médiane est la **moyenne** des deux valeurs centrales.

#### Exemple 1 (Nombre impair de données) :
Données : $$3, 7, 1, 9, 5$$
- Trier les données : $$1, 3, 5, 7, 9$$
- La médiane est la valeur du milieu, ici $$5$$.

#### Exemple 2 (Nombre pair de données) :
Données : $$4, 2, 8, 6$$
- Trier les données : $$2, 4, 6, 8$$
- La médiane est la moyenne des deux valeurs centrales : $$\frac{4 + 6}{2} = 5$$.

## 3. **Le Mode**

Le **mode** est la valeur qui apparaît le plus fréquemment dans un ensemble de données. Un ensemble peut avoir un seul mode, plusieurs modes, ou aucun mode.

#### Exemple 1 :
Données : $$1, 2, 2, 3, 4$$
Le mode est $$2$$, car il apparaît le plus fréquemment.

#### Exemple 2 (Aucun mode) :
Données : $$1, 2, 3, 4$$
Il n'y a pas de mode, car toutes les valeurs apparaissent une seule fois.

#### Exemple 3 (Plusieurs modes) :
Données : $$1, 2, 2, 3, 3, 4$$
Les modes sont $$2$$ et $$3$$, car ils apparaissent chacun deux fois.

## 4. **L'Écart-Type**

L'**écart-type** mesure la dispersion des données autour de la moyenne. Un écart-type faible signifie que les données sont proches de la moyenne, tandis qu'un écart-type élevé signifie que les données sont dispersées.

### Formule de l'Écart-Type :
$$\text{Écart-type} = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}}$$

- $$x_i$$ : chaque valeur de données.
- $$\bar{x}$$ : la moyenne des données.
- $$n$$ : le nombre total de données.

#### Exemple :
Données : $$4, 7, 9, 5, 6$$
1. La moyenne est $$6.2$$ (calculée plus tôt).
2. On calcule la somme des carrés des écarts à la moyenne :
   $$ (4 - 6.2)^2 = 4.84$$
   $$ (7 - 6.2)^2 = 0.64$$
   $$ (9 - 6.2)^2 = 7.84$$
   $$ (5 - 6.2)^2 = 1.44$$
   $$ (6 - 6.2)^2 = 0.04$$
3. La somme des carrés est : $$4.84 + 0.64 + 7.84 + 1.44 + 0.04 = 14.8$$.
4. L'écart-type est :
   $$\text{Écart-type} = \sqrt{\frac{14.8}{5}} = \sqrt{2.96} \approx 1.72$$.

L'écart-type est donc d'environ $$1.72$$.

## 5. **Le Coefficient de Variation**

Le **coefficient de variation** est une mesure de la dispersion relative par rapport à la moyenne. Il est souvent utilisé pour comparer la dispersion de deux séries de données ayant des moyennes différentes.

### Formule du Coefficient de Variation :
$$\text{Coefficient de Variation} = \frac{\text{Écart-type}}{\text{Moyenne}} \times 100$$

#### Exemple :
Si la moyenne est $$6.2$$ et l'écart-type est $$1.72$$, alors :
$$\text{Coefficient de Variation} = \frac{1.72}{6.2} \times 100 \approx 27.74\%$$.

Cela signifie que l'écart-type est environ $$27.74\%$$ de la moyenne.

## 6. **Conclusion**

Les **statistiques de base** sont essentielles pour organiser, analyser et interpréter des données. La **moyenne**, la **médiane**, le **mode** et l'**écart-type** sont des outils puissants pour résumer un ensemble de données et en extraire des informations utiles. Le **coefficient de variation** permet de comparer la dispersion des données relatives à leur moyenne. Ces concepts sont utilisés dans de nombreux domaines, notamment en sciences, économie, et même dans la vie quotidienne pour prendre des décisions éclairées.