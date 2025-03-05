# **Fonctions Exponentielles et Logarithmes** 📊

## **La Fonction Exponentielle** 📈

La **fonction exponentielle** est une fonction qui croît très rapidement. Elle est définie par :

$$ f(x) = e^x $$

où $$ e $$ est une constante irrationnelle appelée **base des logarithmes naturels**, approximativement égale à 2,71828. 

### **Propriétés de la fonction exponentielle** :

1. **Croissance rapide** : La fonction $$ e^x $$ est **strictement croissante**, c'est-à-dire que pour tous $$ x_1 < x_2 $$, on a $$ e^{x_1} < e^{x_2} $$. 📈
2. **Continuité et dérivabilité** : La fonction $$ e^x $$ est continue et dérivable partout. Sa dérivée est égale à la fonction elle-même :
   $$ \frac{d}{dx} e^x = e^x $$
3. **Valeurs limites** :
   - $$ \lim_{x \to -\infty} e^x = 0 $$
   - $$ \lim_{x \to +\infty} e^x = +\infty $$
4. **Propriété fondamentale** : La fonction exponentielle satisfait l'équation fonctionnelle suivante :
   $$ e^{x+y} = e^x \cdot e^y $$

### **Applications** :
- En **croissance et décroissance exponentielle**, notamment pour modéliser des phénomènes comme la **population**, la **radioactivité**, ou la **finance**.
- En **résolution d'équations différentielles** (par exemple, pour modéliser des phénomènes de type $$ y' = ky $$).


## **Le Logarithme** 🔍

Le **logarithme** est la fonction inverse de l'exponentielle. Pour une base $$ a > 0 $$ et $$ a \neq 1 $$, le logarithme de $$ x $$ en base $$ a $$ est défini par :

$$ \log_a(x) = y \quad \text{si et seulement si} \quad a^y = x $$

Cela signifie que $$ \log_a(x) $$ est le nombre auquel il faut élever $$ a $$ pour obtenir $$ x $$.

### **Logarithme Naturel** $$ \ln(x) $$ 🌱

Le **logarithme naturel** est un cas particulier de logarithme où la base est $$ e $$ (la constante d'Euler). Il est noté $$ \ln(x) $$ et satisfait la relation suivante :

$$ \ln(x) = y \quad \text{si et seulement si} \quad e^y = x $$

Le logarithme naturel est très utilisé en analyse et dans les sciences appliquées.

### **Propriétés des Logarithmes** :

1. **Propriétés de base** :
   - $$ \log_a(xy) = \log_a(x) + \log_a(y) $$ 🧮
   - $$ \log_a\left(\frac{x}{y}\right) = \log_a(x) - \log_a(y) $$
   - $$ \log_a(x^k) = k \cdot \log_a(x) $$
   
2. **Changement de base** :
   Si vous voulez changer la base d'un logarithme, vous pouvez utiliser la formule suivante :
   $$ \log_a(x) = \frac{\ln(x)}{\ln(a)} $$

3. **Limites** :
   - $$ \lim_{x \to 0^+} \ln(x) = -\infty $$
   - $$ \lim_{x \to +\infty} \ln(x) = +\infty $$
   
4. **Dérivée du logarithme naturel** :
   La dérivée de $$ \ln(x) $$ est :
   $$ \frac{d}{dx} \ln(x) = \frac{1}{x} $$

### **Relation entre la fonction exponentielle et le logarithme** 🌱
Le logarithme et l'exponentielle sont des fonctions inverses l'une de l'autre. Cela signifie que :
- $$ \ln(e^x) = x $$ pour tout $$ x \in \mathbb{R} $$.
- $$ e^{\ln(x)} = x $$ pour tout $$ x > 0 $$.


## **Propriétés de l'Exponentielle et du Logarithme** ✨

### **Exponentielle et logarithme : Fonctions inverses** 🔄

Comme mentionné, $$ e^x $$ et $$ \ln(x) $$ sont des fonctions inverses l'une de l'autre. Cela signifie que :

- Si $$ y = e^x $$, alors $$ x = \ln(y) $$.
- Si $$ x = \ln(y) $$, alors $$ y = e^x $$.

### **Exemples** :

1. **Logarithme naturel** :
   - $$ \ln(e^5) = 5 $$
   - $$ e^{\ln(3)} = 3 $$

2. **Exponentielle d'un logarithme** :
   Si on a une expression comme $$ e^{\ln(2)} $$, on peut simplifier directement :
   $$ e^{\ln(2)} = 2 $$

3. **Propriétés de la fonction exponentielle** :
   - $$ e^{x+y} = e^x \cdot e^y $$
   - $$ e^{-x} = \frac{1}{e^x} $$

4. **Propriétés du logarithme** :
   - $$ \ln(xy) = \ln(x) + \ln(y) $$
   - $$ \ln\left(\frac{x}{y}\right) = \ln(x) - \ln(y) $$
   - $$ \ln(x^k) = k \ln(x) $$


## **Applications des Fonctions Exponentielles et Logarithmes** 💡

1. **Croissance et Décroissance exponentielle** :
   - **Croissance** : $$ P(t) = P_0 \cdot e^{kt} $$ (par exemple, pour la population ou la finance).
   - **Décroissance** : $$ N(t) = N_0 \cdot e^{-kt} $$ (exemples : déclin radioactif, dépréciation d'actifs).
   
2. **Résolution d'équations exponentielles** :
   Pour résoudre des équations du type $$ e^x = 5 $$, on prend le logarithme naturel des deux côtés :
   $$ \ln(e^x) = \ln(5) \quad \Rightarrow \quad x = \ln(5) $$

3. **Résolution d'équations logarithmiques** :
   Pour résoudre des équations du type $$ \log_a(x) = 3 $$, on écrit cela sous forme exponentielle :
   $$ a^3 = x \quad \Rightarrow \quad x = a^3 $$


### **Résumé** 📝

- **Fonction exponentielle** : $$ e^x $$ est une fonction qui croît très rapidement et sa dérivée est égale à elle-même. Elle est utilisée pour modéliser la croissance et la décroissance exponentielle.
- **Logarithme** : $$ \ln(x) $$ est la fonction inverse de $$ e^x $$. Il possède des propriétés importantes pour la simplification d'expressions et la résolution d'équations exponentielles et logarithmiques.
- **Exponentielle et logarithme sont liés** par une relation inverse : $$ e^{\ln(x)} = x $$ et $$ \ln(e^x) = x $$.
