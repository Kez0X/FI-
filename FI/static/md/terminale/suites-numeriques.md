# **Les Suites Numériques et le Raisonnement par Récurrence** 🎓

Les **suites numériques** sont des suites ordonnées de nombres réels, généralement notées $$(u_n)_{n \in \mathbb{N}}$$, où chaque terme est défini par une relation spécifique. Elles jouent un rôle essentiel en mathématiques, notamment en analyse et en algèbre. Une méthode fondamentale pour établir des propriétés sur les suites est le **raisonnement par récurrence**. 🔄

## **Définition d'une Suite Numérique** 🔢

Une suite numérique est une fonction définie sur l'ensemble des entiers naturels $$\mathbb{N}$$ à valeurs réelles. Autrement dit, une suite associe à chaque entier naturel $$n$$ un réel $$u_n$$. Par exemple, la suite des entiers naturels $$(n)_{n \in \mathbb{N}}$$ est définie par $$u_n = n$$ pour tout $$n \in \mathbb{N}$$. 🧮

## **Le Raisonnement par Récurrence** 🔍

Le raisonnement par récurrence est une méthode de démonstration utilisée pour prouver qu'une propriété $$P(n)$$ est vraie pour tous les entiers naturels $$n$$ à partir d'un certain rang. Cette méthode se décompose en deux étapes :

1. **Initialisation** : Vérifier que la propriété est vraie pour un premier entier naturel, généralement $$n = 0$$ ou $$n = 1$$. 🟢
2. **Hérédité** : Supposer que la propriété est vraie pour un certain entier $$k$$ (hypothèse de récurrence) et démontrer qu'elle est alors vraie pour l'entier suivant, $$k+1$$. 🔴

Si ces deux étapes sont validées, on conclut que la propriété est vraie pour tous les entiers naturels à partir de l'initialisation. ✅

## **Application aux Suites Numériques** 💡

### **Exemple 1 : Suite Arithmétique** ➕

Considérons la suite $$(u_n)$$ définie par :

- $$u_0 = 1$$ 
- $$u_{n+1} = u_n + 2$$ pour tout $$n \in \mathbb{N}$$

Démontrons par récurrence que $$u_n = 2n + 1$$ pour tout $$n \in \mathbb{N}$$.

**Initialisation** : Pour $$n = 0$$, on a $$u_0 = 1$$ et $$2 \times 0 + 1 = 1$$. ✔️  
La propriété est vraie pour $$n = 0$$. 🎯

**Hérédité** : Supposons que la propriété est vraie pour un certain $$k \in \mathbb{N}$$, c'est-à-dire que $$u_k = 2k + 1$$. Montrons que $$u_{k+1} = 2(k+1) + 1$$.  
On a :  
$$u_{k+1} = u_k + 2 = (2k + 1) + 2 = 2k + 3 = 2(k+1) + 1$$  
La propriété est donc vraie pour $n = k+1$. 🎉

Par le principe de récurrence, la propriété est vraie pour tout $n \in \mathbb{N}$, et la suite $(u_n)$ est une suite arithmétique de premier terme 1 et de raison 2. 📈

### **Exemple 2 : Suite Définie par une Relation Fonctionnelle** 🔄

Considérons la suite $(v_n)$ définie par :

- $$v_0 = 1$$
- $$v_{n+1} = \frac{v_n}{2} + 1$$ pour tout $$n \in \mathbb{N}$$

Démontrons par récurrence que $$v_n = 2 - \frac{1}{2^n}$$ pour tout $$n \in \mathbb{N}$$.

**Initialisation** : Pour $$n = 0$$, on a $$v_0 = 1$$ et $$2 - \frac{1}{2^0} = 2 - 1 = 1$$. ✔️  
La propriété est vraie pour $$n = 0$$. ✅

**Hérédité** : Supposons que la propriété est vraie pour un certain $$k \in \mathbb{N}$$, c'est-à-dire que $$v_k = 2 - \frac{1}{2^k}$$. Montrons que $$v_{k+1} = 2 - \frac{1}{2^{k+1}}$$.  
On a :  
$$ v_{k+1} = \frac{v_k}{2} + 1 = \frac{2 - \frac{1}{2^k}}{2} + 1 = 2 - \frac{1}{2^{k+1}} $$  
La propriété est donc vraie pour $$n = k+1$$. 🎯

Par le principe de récurrence, la propriété est vraie pour tout $$n \in \mathbb{N}$$, et la suite $$(v_n)$$ est définie par $$v_n = 2 - \frac{1}{2^n}$$. 🌱

## **Propriétés des Suites Numériques** 🌟

### **Suites Croissantes et Décroissantes** 📈📉

- Une suite $$(u_n)$$ est **croissante** si, pour tout $$n \in \mathbb{N}$$, $$u_{n+1} \geq u_n$$. 📊
- Une suite $$(u_n)$$ est **strictement croissante** si, pour tout $$n \in \mathbb{N}$$, $$u_{n+1} > u_n$$. 🚀
- Une suite $$(u_n)$$ est **décroissante** si, pour tout $$n \in \mathbb{N}$$, $$u_{n+1} \leq u_n$$. 📉
- Une suite $$(u_n)$$ est **strictement décroissante** si, pour tout $$n \in \mathbb{N}$$, $$u_{n+1} < u_n$$. 🧮

### **Suites Majorées et Minorées** 🔒

- Une suite $$(u_n)$$ est **majorée** s'il existe un réel $$M$$ tel que, pour tout $$n \in \mathbb{N}$$, $$u_n \leq M$$. 🏔️
- Une suite $$(u_n)$$ est **minorée** s'il existe un réel $$m$$ tel que, pour tout $$n \in \mathbb{N}$$, $$u_n \geq m$$. 🏞️
- Une suite $$(u_n)$$ est **bornée** si elle est à la fois majorée et minorée. ⚖️

### **Convergence des Suites** 🌱

Une suite $$(u_n)$$ est dite **convergente** si elle admet une limite réelle $$L$$, c'est-à-dire si, pour tout $$\epsilon > 0$$, il existe un entier $$N$$ tel que, pour tout $$n \geq N$$, $$|u_n - L| < \epsilon$$. La limite $L$ est unique et est donnée par :

$$
L = \lim_{n \to +\infty} u_n
$$

### **Suites Définies par Récurrence** 🔁

Certaines suites sont définies par une relation de récurrence. Ce type de suite est très courant, notamment pour les suites arithmétiques, géométriques, ou encore les suites définies par des relations fonctionnelles complexes. 🎲

## **Exemples de Suites Définies par Récurrence** 🧮

### **Exemple : Suite Géométrique** 🌍

Une suite géométrique $$(u_n)$$ est définie par :

- $$u_0 = a$$ (premier terme)
- $$u_{n+1} = r \cdot u_n$$ pour tout $$n \in \mathbb{N}$$ (avec $$r$$ la raison)

Démontrons par récurrence que $$u_n = a \cdot r^n$$ pour tout $$n \in \mathbb{N}$$.

**Initialisation** : Pour $$n = 0$$, on a $$u_0 = a$$ et $$a \cdot r^0 = a$$. ✔️  
La propriété est vraie pour $$n = 0$$. ✅

**Hérédité** : Supposons que la propriété est vraie pour un certain $$k \in \mathbb{N}$$, c'est-à-dire que $$u_k = a \cdot r^k$$. Montrons que $$u_{k+1} = a \cdot r^{k+1}$$.  
On a :  
$$ u_{k+1} = r \cdot u_k = r \cdot (a \cdot r^k) = a \cdot r^{k+1} $$ 
La propriété est donc vraie pour $$n = k+1$$. 🎯

Par le principe de récurrence, la propriété est vraie pour tout $$n \in \mathbb{N}$$, et la suite $$(u_n)$$ est une suite géométrique dont le terme général est donné par $$u_n = a \cdot r^n$$. 🌟

### **Exemple : Suite Définie par une Relation Fonctionnelle** 🧩

Prenons la suite $$(w_n)$$ définie par :

- $$w_0 =

 2$$
- $$w_{n+1} = \frac{w_n + 2}{2}$$ pour tout $$n \in \mathbb{N}$$

Démontrons par récurrence que $$w_n = 2 - \frac{2}{2^n}$$ pour tout $$n \in \mathbb{N}$$.

**Initialisation** : Pour $$n = 0$$, on a $$w_0 = 2$$ et $$2 - \frac{2}{2^0} = 2 - 2 = 0$$. 🎯  
La propriété est vraie pour $$n = 0$$. 💡
