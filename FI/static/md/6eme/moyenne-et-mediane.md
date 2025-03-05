# Moyenne et Médiane

Dans cette leçon, nous allons aborder deux concepts clés en statistiques : la **moyenne** et la **médiane**. Ces deux mesures de tendance centrale permettent de résumer un ensemble de données et de mieux comprendre leur distribution.

## 1. **La Moyenne**

La **moyenne** (ou moyenne arithmétique) est une mesure qui permet de trouver une valeur centrale dans un ensemble de données. Elle représente la somme de toutes les valeurs divisée par le nombre total de valeurs.

### Formule de la Moyenne :
$$\text{Moyenne} = \frac{\sum_{i=1}^{n} x_i}{n}$$

- $$\sum_{i=1}^{n} x_i$$ : somme de toutes les valeurs des données.
- $$n$$ : nombre total de données.

### Exemple :
Soit l'ensemble de données suivant : $$4, 7, 9, 5, 6$$. Pour calculer la moyenne :
$$\text{Moyenne} = \frac{4 + 7 + 9 + 5 + 6}{5} = \frac{31}{5} = 6.2$$

La moyenne de cet ensemble de données est donc $$6.2$$.

### Remarque :
La moyenne est très sensible aux valeurs extrêmes. Par exemple, si l'on modifie une valeur de l'ensemble de données de manière significative, la moyenne peut être fortement influencée par cette modification.

## 2. **La Médiane**

La **médiane** est une autre mesure de tendance centrale, mais elle n'est pas influencée par les valeurs extrêmes. Elle correspond à la valeur qui sépare l'ensemble des données en deux parties égales lorsque celles-ci sont triées par ordre croissant.

### Étapes pour Trouver la Médiane :

1. **Trier les données** dans l'ordre croissant.
2. Si le nombre de données $$n$$ est impair, la médiane est la **valeur du milieu**.
3. Si $$n$$ est pair, la médiane est la **moyenne** des deux valeurs centrales.

### Exemple 1 (Nombre impair de données) :
Données : $$3, 7, 1, 9, 5$$
- Trier les données : $$1, 3, 5, 7, 9$$
- La médiane est la valeur du milieu, ici $$5$$.

### Exemple 2 (Nombre pair de données) :
Données : $$4, 2, 8, 6$$
- Trier les données : $$2, 4, 6, 8$$
- La médiane est la moyenne des deux valeurs centrales : $$\frac{4 + 6}{2} = 5$$.

### Remarque :
La médiane est particulièrement utile lorsque l'on souhaite se protéger des effets de valeurs extrêmes (outliers) qui peuvent fausser la moyenne.

## 3. **Comparaison entre Moyenne et Médiane**

- **Moyenne** : Très sensible aux valeurs extrêmes. Par exemple, dans un ensemble de données tel que $$1, 2, 3, 4, 100$$, la moyenne sera influencée par le $$100$$, ce qui donne une moyenne de $$22$$.
- **Médiane** : Pas influencée par les valeurs extrêmes. Dans l'exemple précédent, la médiane serait $$3$$, car c'est la valeur du milieu après tri.

### Exemple Comparatif :
Données : $$1, 2, 3, 4, 100$$
- La moyenne est $$\frac{1 + 2 + 3 + 4 + 100}{5} = 22$$.
- La médiane est $$3$$.

Dans ce cas, la **médiane** est une mesure plus représentative de l'ensemble des données, car elle n'est pas affectée par la valeur extrême de $$100$$.

## 4. **Conclusion**

- La **moyenne** est utile pour obtenir une valeur centrale représentative des données lorsque celles-ci ne contiennent pas de valeurs extrêmes. Elle donne une bonne estimation de l'ensemble des données, mais elle peut être influencée par les outliers.
- La **médiane** est préférable lorsque les données contiennent des valeurs extrêmes ou lorsqu'elles ne suivent pas une distribution symétrique. Elle permet de trouver une valeur qui sépare l'ensemble des données en deux parties égales sans être affectée par les valeurs extrêmes.

La compréhension de la différence entre la moyenne et la médiane est essentielle pour analyser correctement des ensembles de données et tirer des conclusions pertinentes.