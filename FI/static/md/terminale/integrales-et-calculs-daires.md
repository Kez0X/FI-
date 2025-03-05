# **Intégrales et calculs d'aires**

### **1. Les Bases de l'Intégration**

L'intégration est l'opération inverse de la dérivation. Si on dérive une fonction, on obtient une autre fonction, et si on intègre une fonction, on revient à une fonction plus générale qui donne l'aire sous la courbe de la fonction d'origine.

#### **Définition de l'intégrale définie**

L'intégrale d'une fonction $$ f(x) $$ sur un intervalle $$ [a, b] $$ est définie comme la limite d'une somme de Riemann, qui correspond à l'aire sous la courbe de $$ f(x) $$ entre $$ a $$ et $$ b $$.

$$ \int_a^b f(x) \, dx $$

Elle représente l'aire entre la courbe $$ f(x) $$, l'axe des abscisses et les lignes verticales $$ x = a $$ et $$ x = b $$.

#### **Définition de l'intégrale indéfinie**

L'intégrale indéfinie, ou primitive, est l'ensemble de toutes les fonctions qui, lorsqu'elles sont dérivées, donnent la fonction $$ f(x) $$.

$$ \int f(x) \, dx = F(x) + C $$

où $$ F(x) $$ est une fonction dont la dérivée est $$ f(x) $$, et $$ C $$ est une constante d'intégration.


### **2. Règles d'Intégration**

#### **1. L'intégrale d'une constante**

Si $$ c $$ est une constante, alors :

$$ \int c \, dx = cx + C $$

#### **2. L'intégrale de la somme de fonctions**

Si $$ f(x) $$ et $$ g(x) $$ sont des fonctions, alors :

$$ \int (f(x) + g(x)) \, dx = \int f(x) \, dx + \int g(x) \, dx $$

#### **3. L'intégrale d'un produit par une constante**

Si $$ c $$ est une constante, alors :

$$ \int c f(x) \, dx = c \int f(x) \, dx $$

#### **4. Intégrales des puissances de $$ x $$**

Pour $$ n \neq -1 $$, l'intégrale de $$ x^n $$ est :

$$ \int x^n \, dx = \frac{x^{n+1}}{n+1} + C $$

#### **5. Intégrales des fonctions trigonométriques**

Voici quelques intégrales courantes des fonctions trigonométriques :

- $$ \int \sin(x) \, dx = -\cos(x) + C $$
- $$ \int \cos(x) \, dx = \sin(x) + C $$
- $$ \int \tan(x) \, dx = \ln|\sec(x)| + C $$


### **3. Calcul d'Aires sous une Courbe**

L'intégrale est utilisée pour calculer l'aire sous une courbe, c'est-à-dire l'intégrale définie d'une fonction entre deux bornes $$ a $$ et $$ b $$.

#### **Exemple 1 : Aire sous la courbe $$ f(x) = x^2 $$**

Pour calculer l'aire sous la courbe de $$ f(x) = x^2 $$ entre $$ x = 0 $$ et $$ x = 2 $$, on calcule l'intégrale définie :

$$ \int_0^2 x^2 \, dx $$

On commence par trouver la primitive de $$ x^2 $$, qui est $$ \frac{x^3}{3} $$.

Ensuite, on évalue cette primitive entre 0 et 2 :

$$ \left[ \frac{x^3}{3} \right]_0^2 = \frac{2^3}{3} - \frac{0^3}{3} = \frac{8}{3} $$

Donc, l'aire sous la courbe de $$ x^2 $$ entre $$ x = 0 $$ et $$ x = 2 $$ est $$ \frac{8}{3} $$.


#### **Exemple 2 : Aire sous la courbe $$ f(x) = \sin(x) $$**

Calculons l'aire sous la courbe de $$ f(x) = \sin(x) $$ entre $$ x = 0 $$ et $$ x = \pi $$.

L'intégrale à résoudre est :

$$ \int_0^\pi \sin(x) \, dx $$

La primitive de $$ \sin(x) $$ est $$ -\cos(x) $$, donc :

$$ \left[ -\cos(x) \right]_0^\pi = -\cos(\pi) + \cos(0) = -(-1) + 1 = 2 $$

L'aire sous la courbe $$ \sin(x) $$ entre 0 et $$ \pi $$ est donc $$ 2 $$.


### **4. Méthodes de Calcul d'Intégrales**

#### **1. Intégration par substitution**

C'est une technique qui permet de simplifier une intégrale en changeant de variable. Par exemple, pour une fonction $$ f(g(x)) \cdot g'(x) $$, on pose $$ u = g(x) $$, ce qui transforme l'intégrale en une forme plus simple.

#### **2. Intégration par parties**

Elle est basée sur la formule suivante, qui provient de la règle du produit pour la dérivation :

$$ \int u \, dv = uv - \int v \, du $$

Cela permet de transformer une intégrale difficile en une autre plus simple.


### **5. Exemples supplémentaires**

#### **Exemple 3 : Intégration par substitution**

Calculons l'intégrale suivante :

$$ \int 2x \cdot \cos(x^2) \, dx $$

On pose $$ u = x^2 $$, donc $$ du = 2x \, dx $$.

L'intégrale devient :

$$ \int \cos(u) \, du $$

La primitive de $$ \cos(u) $$ est $$ \sin(u) $$, donc :

$$ \sin(u) + C = \sin(x^2) + C $$


#### **Exemple 4 : Intégration par parties**

Calculons l'intégrale :

$$ \int x e^x \, dx $$

On applique la formule d'intégration par parties en posant $$ u = x $$ et $$ dv = e^x \, dx $$, ce qui donne $$ du = dx $$ et $$ v = e^x $$.

La formule devient :

$$ \int x e^x \, dx = x e^x - \int e^x \, dx $$

En intégrant $$ e^x $$, on obtient :

$$ x e^x - e^x + C $$


### **6. Applications des Intégrales**

Les intégrales sont utilisées dans de nombreux domaines, notamment :

- **Calcul de l'aire sous une courbe** : Comme vu ci-dessus, l'intégrale permet de calculer l'aire entre une courbe et l'axe des abscisses.
- **Calcul de volumes** : Les intégrales peuvent aussi être utilisées pour calculer des volumes de solides de révolution (par exemple, le volume d'un cylindre ou d'un cône).
- **Problèmes de physique** : Les intégrales interviennent dans le calcul de la distance parcourue, du travail effectué, de l'énergie dissipée, etc.


### **Résumé** 📝

- L'intégrale permet de calculer des aires sous des courbes et d'autres grandeurs géométriques et physiques.
- Les **intégrales définies** donnent l'aire sous la courbe entre deux bornes, tandis que les **intégrales indéfinies** fournissent une famille de primitives.
- Les **techniques d'intégration** comme la substitution et l'intégration par parties permettent de simplifier des intégrales complexes.
