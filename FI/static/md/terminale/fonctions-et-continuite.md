# **Les Fonctions et la Continuité** 🎓

## **Une Fonction** 📊

Une fonction est une règle qui associe à chaque élément d'un ensemble un et un seul élément d'un autre ensemble. Par exemple, si on considère la fonction $$ f $$ qui associe à chaque nombre réel $$ x $$ son carré, on la note :

$$ f(x) = x^2 $$

Cela signifie que pour chaque valeur de $$ x $$, on trouve une valeur de $$ f(x) $$ qui est le carré de $$ x $$. 🎯

En général, on écrit une fonction de la forme :  
$$ f : A \to B $$  
Cela signifie que $$ f $$ est une fonction qui associe chaque élément de l'ensemble $$ A $$ à un élément de l'ensemble $$ B $$. On dit aussi que $$ A $$ est le **domaine** de la fonction, et $$ B $$ l'**ensemble d'arrivée**.

### **Exemple simple** :  
Prenons $$ f(x) = x + 3 $$, une fonction affine.  
Si on donne $$ x = 2 $$, alors $$ f(2) = 2 + 3 = 5 $$. 🎉

## **La Continuité d'une Fonction** 🌱

Une fonction est dite **continue** en un point si, intuitivement, on peut dessiner son graphe sans lever le crayon. 🖊️💡 En termes plus rigoureux, une fonction $$ f $$ est continue en un point $$ a $$ si la limite de $$ f(x) $$ quand $$ x $$ tend vers $$ a $$ est égale à la valeur de $$ f(a) $$.

Formellement, une fonction $$ f $$ est continue en $$ a $$ si, pour tout $$ \epsilon > 0 $$, il existe un $$ \delta > 0 $$ tel que pour tout $$ x $$ vérifiant $$ |x - a| < \delta $$, on ait :

$$ |f(x) - f(a)| < \epsilon $$

Cela signifie que, lorsqu'on approche $$ a $$ par la droite ou la gauche, les valeurs de $$ f(x) $$ s'approchent de $$ f(a) $$. 👀

### **Exemple simple de continuité :**  
Prenons la fonction $$ f(x) = x^2 $$ et voyons si elle est continue en $$ x = 2 $$.  
On veut vérifier si la limite de $$ f(x) $$ lorsque $$ x $$ tend vers 2 est bien égale à $$ f(2) $$.

On a :  
$$ \lim_{x \to 2} x^2 = 4 $$  
et  
$$ f(2) = 2^2 = 4 $$

Donc la fonction est bien continue en $$ x = 2 $$, car la limite est égale à la valeur de la fonction en ce point. ✅

## **Conditions de Continuité** 📏

Une fonction $$ f $$ est continue si elle satisfait les trois conditions suivantes :

1. **Existence de la fonction en $$ a $$** : La fonction doit être définie en $$ a $$.
2. **Existence de la limite en $$ a $$** : La limite de $$ f(x) $$ lorsque $$ x $$ tend vers $$ a $$ doit exister.
3. **Égalité de la limite et de la valeur de la fonction** : La limite de $$ f(x) $$ en $$ a $$ doit être égale à $$ f(a) $$.

Si l'une de ces conditions est violée, la fonction **n'est pas continue** en $$ a $$. Par exemple, une fonction avec une **discontinuité de saut** ou une **discontinuité de type infini** n'est pas continue. 😕

### **Exemple de fonction discontinue** 🛑

Prenons la fonction définie par :

$$ f(x) = \begin{cases} 
x & \text{si } x \neq 2, \\
3 & \text{si } x = 2.
\end{cases} $$

En $$ x = 2 $$, on a :

- $$ \lim_{x \to 2} f(x) = 2 $$
- Mais $$ f(2) = 3 $$

Comme la limite de $$ f(x) $$ en $$ x = 2 $$ n'est pas égale à la valeur de $$ f(2) $$, la fonction est **discontinue** en $$ x = 2 $$. 🚫

## **Les Types de Discontinuités** ⚠️

1. **Discontinuité de saut** :  
Il y a un saut brusque dans la fonction. La limite à gauche et la limite à droite de ce point ne sont pas égales.  
Exemple :  
$$ f(x) = \begin{cases} 1 & \text{si } x \leq 0, \\ 2 & \text{si } x > 0. \end{cases} $$

2. **Discontinuité de type infini** :  
La fonction devient infinie à ce point.  
Exemple :  
$$ f(x) = \frac{1}{x} $$  
en $$ x = 0 $$.

3. **Discontinuité amovible** :  
La limite existe, mais la fonction n’est pas définie en ce point. En d’autres termes, on pourrait "retirer" la discontinuité en définissant la fonction en ce point.  
Exemple :  
$$ f(x) = \frac{x^2 - 4}{x - 2} $$  
en $$ x = 2 $$.

## **Propriétés des Fonctions Continues** 🌟

- Une fonction continue sur un intervalle fermé $$ [a, b] $$ atteint ses **bornes supérieures et inférieures**. Cela découle du théorème de **Weierstrass**.
- Si une fonction est continue sur un intervalle fermé, elle est **bornée** et atteint son maximum et son minimum sur cet intervalle. 🎯
- Si une fonction est continue et que $$ f(a) < 0 $$ et $$ f(b) > 0 $$ pour $$ a < b $$, alors, grâce au **théorème des valeurs intermédiaires**, il existe un $$ c \in [a, b] $$ tel que $$ f(c) = 0 $$. ✨

### **Exemple de théorème des valeurs intermédiaires :**  
Soit $$ f(x) = x^3 - 4 $$, et considérons l'intervalle $$ [1, 2] $$. On a :

- $$ f(1) = 1^3 - 4 = -3 $$
- $$ f(2) = 2^3 - 4 = 4 $$

Comme $$ f(x) $$ est continue et que $$ f(1) < 0 $$ et $$ f(2) > 0 $$, il existe un $$ c \in [1, 2] $$ tel que $$ f(c) = 0 $$. 🎉 Ce $$ c $$ est la racine de $$ f(x) $$ dans cet intervalle.

## **Résumé** 📝

- Une **fonction** associe chaque élément d'un ensemble à un élément d'un autre ensemble.  
- Une fonction est **continue** en un point si, en approchant ce point par la droite et la gauche, la fonction tend vers la même valeur.  
- Une fonction peut être **discontinue** en cas de discontinuités de saut, infinies ou amovibles.  
- Les fonctions continues sur un intervalle fermé sont **bornées** et atteignent leurs bornes. Elles garantissent l'existence de solutions dans certains cas grâce aux théorèmes comme celui des valeurs intermédiaires.
