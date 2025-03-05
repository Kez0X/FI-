### **Moyenne et Écart-Type** 📊

Les notions de **moyenne** et d'**écart-type** sont deux concepts fondamentaux en statistiques. Elles permettent de résumer et d'analyser un ensemble de données numériques. Comprendre ces concepts te permettra de mieux comprendre la distribution des valeurs et leur dispersion.

#### **1. La Moyenne (ou Moyenne Arithmétique)** 💡

La **moyenne** est un moyen de trouver une valeur centrale ou représentative d'un ensemble de données. C'est la somme de toutes les valeurs, divisée par le nombre total de valeurs. 

La formule de la moyenne est la suivante :

$$
\text{Moyenne} = \frac{\sum x_i}{n}
$$

- **$\sum x_i$** : La somme de toutes les valeurs de l'échantillon.
- **n** : Le nombre total de valeurs.

##### Exemple : 
Si les valeurs de température sur 5 jours sont : 18°C, 22°C, 25°C, 19°C, et 20°C, la moyenne de ces températures est :

$$
\text{Moyenne} = \frac{18 + 22 + 25 + 19 + 20}{5} = \frac{104}{5} = 20,8 \, \text{°C}
$$

Cela signifie que la température moyenne des 5 jours est de **20,8°C**.


#### **2. L'Écart-Type** 📉

L'**écart-type** est une mesure de la dispersion des données par rapport à la moyenne. Plus l'écart-type est grand, plus les données sont dispersées. À l'inverse, un écart-type faible indique que les données sont concentrées autour de la moyenne.

La formule de l'écart-type est la suivante :

$$
\sigma = \sqrt{\frac{\sum (x_i - \mu)^2}{n}}
$$

- **$\sigma$** : L'écart-type.
- **$x_i$** : Chaque valeur dans l'ensemble de données.
- **$\mu$** : La moyenne des données.
- **n** : Le nombre total de valeurs.

L'écart-type est souvent noté **$\sigma$** et se calcule en suivant ces étapes :

1. Trouve la moyenne des données.
2. Soustrais la moyenne de chaque valeur, puis élève le résultat au carré.
3. Fais la somme de tous ces carrés.
4. Divise par le nombre de données (pour une population entière) ou par **n-1** (pour un échantillon).
5. Prends la racine carrée du résultat.

##### Exemple :
Prenons les mêmes données que précédemment : 18°C, 22°C, 25°C, 19°C, et 20°C.

1. **Calcul de la moyenne** :
   $$ \mu = \frac{104}{5} = 20,8 $$

2. **Calcul des différences au carré** :
   - $(18 - 20,8)^2 = (-2,8)^2 = 7,84$
   - $(22 - 20,8)^2 = (1,2)^2 = 1,44$
   - $(25 - 20,8)^2 = (4,2)^2 = 17,64$
   - $(19 - 20,8)^2 = (-1,8)^2 = 3,24$
   - $(20 - 20,8)^2 = (-0,8)^2 = 0,64$

3. **Somme des carrés** :
   $$ 7,84 + 1,44 + 17,64 + 3,24 + 0,64 = 30,8 $$

4. **Calcul de la variance** (on divise par **n**, car on a ici la population entière) :
   $$ \text{Variance} = \frac{30,8}{5} = 6,16 $$

5. **Calcul de l'écart-type** :
   $$ \sigma = \sqrt{6,16} \approx 2,48 $$

Ainsi, l'**écart-type** des températures est d'environ **2,48°C**.


#### **Interprétation de la Moyenne et de l'Écart-Type** 🧐

- La **moyenne** te donne une idée du "centre" des données. C'est une mesure de tendance centrale.
- L'**écart-type** te donne une idée de l'**étalement** des données. Si l'écart-type est faible, cela signifie que les valeurs sont proches de la moyenne, tandis qu'un écart-type élevé indique que les données sont plus dispersées.


### **Conclusion** 🎯

La **moyenne** et l'**écart-type** sont deux outils essentiels pour analyser un ensemble de données. La moyenne te donne une vue d'ensemble des valeurs, tandis que l'écart-type te permet de mesurer leur variation. Ces concepts sont très utilisés en statistiques pour résumer des informations et prendre des décisions basées sur des données. 📊