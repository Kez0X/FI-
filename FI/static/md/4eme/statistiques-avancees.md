## 📊 Statistiques Avancées

Les statistiques avancées vont au-delà des concepts de base comme la moyenne et la médiane. Elles permettent d'analyser des ensembles de données complexes en utilisant des méthodes plus poussées. Dans cette leçon, nous allons aborder plusieurs concepts importants pour une meilleure analyse des données.

### 🧮 Moyenne Pondérée

La **moyenne pondérée** est utilisée lorsqu'on veut attribuer un poids à chaque donnée en fonction de son importance. C’est utile lorsque certaines valeurs ont plus de significations que d’autres dans le calcul de la moyenne.

#### 🔸 Formule de la Moyenne Pondérée

La moyenne pondérée \( M \) est calculée de la manière suivante :

$$ M = \frac{\sum_{i=1}^{n} w_i \cdot x_i}{\sum_{i=1}^{n} w_i} $$

- \( x_i \) est chaque valeur des données.
- \( w_i \) est le poids associé à chaque valeur.
- \( n \) est le nombre total de valeurs.

#### 🧑‍🏫 Exemple

Si tu veux calculer la moyenne pondérée des notes suivantes dans un examen avec des poids différents :
- Note 1 : 12/20, poids 2
- Note 2 : 16/20, poids 3
- Note 3 : 14/20, poids 1

La moyenne pondérée est :

$$ M = \frac{(12 \times 2) + (16 \times 3) + (14 \times 1)}{2 + 3 + 1} = \frac{24 + 48 + 14}{6} = \frac{86}{6} = 14.33 $$

Donc, la moyenne pondérée des notes est de 14.33/20.

### 📉 Écart-Type et Variance

L'**écart-type** et la **variance** sont des outils statistiques utilisés pour mesurer la dispersion des données par rapport à la moyenne. Plus la valeur de l'écart-type est élevée, plus les données sont dispersées autour de la moyenne.

#### 🔸 Variance

La **variance** \( \sigma^2 \) mesure l’écart des données par rapport à la moyenne. Elle est calculée par la formule suivante :

$$ \sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \mu)^2 $$

- \( x_i \) est chaque valeur des données.
- \( \mu \) est la moyenne des données.
- \( n \) est le nombre total de données.

#### 🔸 Écart-Type

L'**écart-type** est la racine carrée de la variance et permet de comprendre l'étendue des variations des données.

$$ \sigma = \sqrt{\sigma^2} $$

#### 🧑‍🏫 Exemple

Soit l’ensemble de données suivant : \( 3, 5, 7, 9, 11 \).

1. **Calcul de la moyenne** :
   
   $$ \mu = \frac{3 + 5 + 7 + 9 + 11}{5} = 7 $

2. **Calcul de la variance** :

   $$ \sigma^2 = \frac{(3 - 7)^2 + (5 - 7)^2 + (7 - 7)^2 + (9 - 7)^2 + (11 - 7)^2}{5} = \frac{16 + 4 + 0 + 4 + 16}{5} = \frac{40}{5} = 8 $$

3. **Calcul de l’écart-type** :

   $$ \sigma = \sqrt{8} \approx 2.83 $$

L'écart-type de cet ensemble de données est environ 2.83, ce qui signifie que les valeurs sont en moyenne éloignées de 2.83 unités de la moyenne.

### 📊 Quartiles et Boîte à Moustaches

Les **quartiles** sont des valeurs qui divisent un ensemble de données en quatre parties égales. Ils permettent de mieux comprendre la répartition des données.

- Le **1er quartile (Q1)** est la médiane de la première moitié des données.
- Le **2e quartile (Q2)** est la médiane de l’ensemble des données (c'est-à-dire la médiane).
- Le **3e quartile (Q3)** est la médiane de la deuxième moitié des données.

#### 🔸 Interquartile Range (IQR)

La **plage interquartile (IQR)** est la différence entre le troisième quartile \( Q3 \) et le premier quartile \( Q1 \) :

$$ \text{IQR} = Q3 - Q1 $$

Elle permet de mesurer l’étendue des 50 % centraux des données. Un IQR élevé indique que les données sont plus dispersées.

#### 🧑‍🏫 Exemple

Pour les données : \( 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 \)

1. **Médiane (Q2)** :
   La médiane est la valeur au centre des données, soit \( 10 \).

2. **1er Quartile (Q1)** :
   La médiane de la première moitié des données (\( 1, 3, 5, 7, 9 \)) est \( 5 \).

3. **3e Quartile (Q3)** :
   La médiane de la deuxième moitié des données (\( 11, 13, 15, 17, 19 \)) est \( 15 \).

Donc, \( Q1 = 5 \), \( Q2 = 10 \), et \( Q3 = 15 \).

La plage interquartile est :

$$ \text{IQR} = 15 - 5 = 10 $$

### 📉 Corrélation

La **corrélation** est une mesure statistique qui décrit l’intensité et la direction de la relation entre deux variables. Elle peut être mesurée par le **coefficient de corrélation de Pearson**, noté \( r \).

- Si \( r = 1 \), il y a une **corrélation positive parfaite**.
- Si \( r = -1 \), il y a une **corrélation négative parfaite**.
- Si \( r = 0 \), il n’y a **pas de corrélation**.

La corrélation peut être utilisée pour prédire la valeur d'une variable à partir de l'autre.

### 🎯 Conclusion

Les statistiques avancées sont essentielles pour analyser des données complexes et tirer des conclusions significatives. Elles sont particulièrement utiles dans les domaines de la recherche, de l'économie, de la finance, et bien d'autres encore. En maîtrisant des concepts comme la moyenne pondérée, la variance, les quartiles, et la corrélation, tu seras capable de mieux comprendre et d'interpréter les données autour de toi. 📊✨