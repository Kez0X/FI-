# Leçon : Dérivation d'une fonction 🧑‍🏫

## Objectifs 🎯 :
- Comprendre la notion de dérivée d'une fonction.
- Apprendre les principales règles de dérivation.
- Savoir dériver des fonctions simples.
- Interpréter la dérivée en termes de variation d'une fonction.



## Qu'est-ce que la dérivée ? 🤔

La **dérivée** d'une fonction \( f(x) \) à un point \( x_0 \) est le taux de variation de la fonction au voisinage de ce point. Intuitivement, la dérivée mesure la pente de la tangente à la courbe de la fonction en ce point.

La **dérivée** de \( f(x) \) au point \( x \) est notée \( f'(x) \) et peut être interprétée de plusieurs manières :

- **Géométriquement** : \( f'(x) \) donne la pente de la tangente à la courbe en \( x \).
- **Physiquement** : Si \( f(x) \) représente une position en fonction du temps, alors \( f'(x) \) représente la vitesse.



## Règles de dérivation 🛠️

Voici les principales règles de dérivation qui nous permettent de dériver des fonctions de manière plus rapide et systématique :

### 1. La dérivée d'une constante :
Si \( c \) est une constante, alors la dérivée de \( f(x) = c \) est :

$$
f'(x) = 0
$$

### 2. La dérivée d'une puissance de \(x\) :
Si $$\( f(x) = x^n \)$$, où \( n \) est un nombre réel, alors :

$$
f'(x) = n \cdot x^{n-1}
$$

### 3. La dérivée de $$\(e^x\)$$ :
La dérivée de la fonction exponentielle $$\( e^x \)$$ est :

$$
\frac{d}{dx}(e^x) = e^x
$$

### 4. La dérivée de $$\( \ln(x) \)$$ :
La dérivée du logarithme népérien $$\( \ln(x) \)$$ est :

$$
\frac{d}{dx}(\ln(x)) = \frac{1}{x}
$$

### 5. La règle de la somme :
Si $$\( f(x) = g(x) + h(x) \)$$, alors :

$$
f'(x) = g'(x) + h'(x)
$$

### 6. La règle du produit :
Si $$\( f(x) = g(x) \cdot h(x) \)$$, alors :

$$
f'(x) = g'(x) \cdot h(x) + g(x) \cdot h'(x)
$$

### 7. La règle du quotient :
Si $$\( f(x) = \frac{g(x)}{h(x)} \)$$, alors :

$$
f'(x) = \frac{g'(x) \cdot h(x) - g(x) \cdot h'(x)}{h(x)^2}
$$

### 8. La dérivée de la fonction composée (règle de la chaîne) :
Si $$\( f(x) = g(h(x)) \)$$, alors la dérivée est :

$$
f'(x) = g'(h(x)) \cdot h'(x)
$$

# Liste des dérivées courantes 📝

## 1. **Fonctions polynomiales** 📈

- La dérivée de $$\( x^n \)$$, où $$\( n \)$$ est un réel :
  $$
  \frac{d}{dx}(x^n) = n \cdot x^{n-1}
  $$

- La dérivée d'un polynôme :
  $$
  \frac{d}{dx}(a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0) = n \cdot a_n x^{n-1} + (n-1) \cdot a_{n-1} x^{n-2} + \dots + a_1
  $$



## 2. **Fonctions exponentielles** 🔢

- La dérivée de $$\( e^x \)$$ :
  $$
  \frac{d}{dx}(e^x) = e^x
  $$

- La dérivée de \( a^x \) (où \( a \) est une constante) :
  $$
  \frac{d}{dx}(a^x) = a^x \ln(a)
  $$



## 3. **Fonctions logarithmiques** 🔍

- La dérivée de $$\( \ln(x) \)$$ :
  $$
  \frac{d}{dx}(\ln(x)) = \frac{1}{x}
  $$

- La dérivée de \( \log_a(x) \) (logarithme en base \( a \)) :
  $$
  \frac{d}{dx}(\log_a(x)) = \frac{1}{x \ln(a)}
  $$



## 4. **Fonctions trigonométriques** 🔵

- La dérivée de $$\( \sin(x) \)$$ :
  $$
  \frac{d}{dx}(\sin(x)) = \cos(x)
  $$

- La dérivée de $$\( \cos(x) \)$$ :
  $$
  \frac{d}{dx}(\cos(x)) = -\sin(x)
  $$

- La dérivée de $$\( \tan(x) \)$$ :
  $$
  \frac{d}{dx}(\tan(x)) = \sec^2(x)
  $$

- La dérivée de $$\( \cot(x) \)$$ :
  $$
  \frac{d}{dx}(\cot(x)) = -\csc^2(x)
  $$

- La dérivée de $$\( \sec(x) \)$$ :
  $$
  \frac{d}{dx}(\sec(x)) = \sec(x) \tan(x)
  $$

- La dérivée de $$\( \csc(x) \)$$ :
  $$
  \frac{d}{dx}(\csc(x)) = -\csc(x) \cot(x)
  $$



## 5. **Fonctions hyperboliques** 🔠

- La dérivée de $$\( \sinh(x) \)$$ :
  $$
  \frac{d}{dx}(\sinh(x)) = \cosh(x)
  $$

- La dérivée de $$\( \cosh(x) \)$$ :
  $$
  \frac{d}{dx}(\cosh(x)) = \sinh(x)
  $$

- La dérivée de $$\( \tanh(x) \)$$ :
  $$
  \frac{d}{dx}(\tanh(x)) = \text{sech}^2(x)
  $$



## 6. **Règles de dérivation** 🔧

### 6.1. **Règle de la somme** ➕

Si $$\( f(x) = g(x) + h(x) \)$$,$$ alors :
$$
f'(x) = g'(x) + h'(x)
$$

### 6.2. **Règle du produit** ✖️

Si $$\( f(x) = g(x) \cdot h(x) \)$$, alors :
$$
f'(x) = g'(x) \cdot h(x) + g(x) \cdot h'(x)
$$

### 6.3. **Règle du quotient** ➗

Si \( f(x) = \frac{g(x)}{h(x)} \), alors :
$$
f'(x) = \frac{g'(x) \cdot h(x) - g(x) \cdot h'(x)}{h(x)^2}
$$

### 6.4. **Règle de la chaîne** (fonction composée) 🔗

Si \( f(x) = g(h(x)) \), alors :
$$
f'(x) = g'(h(x)) \cdot h'(x)
$$



## 7. **Dérivées de fonctions usuelles** 📋

- La dérivée de \( x \) (fonction linéaire) :
  $$
  \frac{d}{dx}(x) = 1
  $$

- La dérivée d'une constante \( c \) :
  $$
  \frac{d}{dx}(c) = 0
  $$

- La dérivée de \( \sqrt{x} \) :
  $$
  \frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}
  $$

- La dérivée de \( \frac{1}{x} \) :
  $$
  \frac{d}{dx}\left(\frac{1}{x}\right) = -\frac{1}{x^2}
  $$



## 8. **Dérivée de fonctions composées courantes** 🔄

- La dérivée de \( \sin(3x) \) :
  $$
  \frac{d}{dx}(\sin(3x)) = 3\cos(3x)
  $$

- La dérivée de \( \cos(5x) \) :
  $$
  \frac{d}{dx}(\cos(5x)) = -5\sin(5x)
  $$

- La dérivée de \( e^{2x} \) :
  $$
  \frac{d}{dx}(e^{2x}) = 2e^{2x}
  $$



## 9. **Dérivées des fonctions trigonométriques inverses** 🔄

- La dérivée de \( \arcsin(x) \) :
  $$
  \frac{d}{dx}(\arcsin(x)) = \frac{1}{\sqrt{1-x^2}}
  $$

- La dérivée de \( \arccos(x) \) :
  $$
  \frac{d}{dx}(\arccos(x)) = -\frac{1}{\sqrt{1-x^2}}
  $$

- La dérivée de \( \arctan(x) \) :
  $$
  \frac{d}{dx}(\arctan(x)) = \frac{1}{1+x^2}
  $$



## Conclusion 🌟

Cette liste des dérivées courantes permet de récapituler les fonctions les plus fréquemment rencontrées et leurs dérivées. Il est essentiel de connaître ces règles pour pouvoir résoudre efficacement des exercices en analyse, notamment pour étudier les variations des fonctions et déterminer les tangentes.



## Devoirs 📑

1. Calculer les dérivées de \( f(x) = 3x^5 - 2x^3 + x - 4 \).
2. Trouver la dérivée de \( f(x) = \sin(x) \cdot \cos(x) \).
3. Lire le chapitre suivant sur les **tableaux de variations**. 📚



## Exemple 1 : Dériver une fonction simple 🧮

Prenons la fonction suivante :

$$
f(x) = 3x^4 - 5x^2 + 2x - 7
$$

### Dérivation :

1. **Dérivée de \( 3x^4 \)** :  
   Utilisons la règle de la puissance :  
   $$ \frac{d}{dx}(3x^4) = 3 \cdot 4 \cdot x^{4-1} = 12x^3 $$

2. **Dérivée de \( -5x^2 \)** :  
   $$ \frac{d}{dx}(-5x^2) = -5 \cdot 2 \cdot x^{2-1} = -10x $$

3. **Dérivée de \( 2x \)** :  
   $$ \frac{d}{dx}(2x) = 2 $$

4. **Dérivée de \( -7 \)** (constante) :  
   $$ \frac{d}{dx}(-7) = 0 $$

### Dérivée complète :

Donc, la dérivée de \( f(x) \) est :

$$
f'(x) = 12x^3 - 10x + 2
$$



## Exemple 2 : Dériver une fonction avec une règle de produit 🧮

Soit la fonction suivante :

$$
f(x) = (x^2 + 1)(2x - 3)
$$

### Dérivation :

On va utiliser la règle du produit.

1. Soit \( g(x) = x^2 + 1 \) et \( h(x) = 2x - 3 \).
2. La dérivée de \( g(x) \) est :  
   $$ g'(x) = 2x $$

3. La dérivée de \( h(x) \) est :  
   $$ h'(x) = 2 $$

### Application de la règle du produit :

$$
f'(x) = g'(x) \cdot h(x) + g(x) \cdot h'(x)
$$

$$
f'(x) = (2x)(2x - 3) + (x^2 + 1)(2)
$$

En développant :

$$
f'(x) = 4x^2 - 6x + 2x^2 + 2
$$

$$
f'(x) = 6x^2 - 6x + 2
$$



## Exemple 3 : Dérivation d'une fonction composée 🧮

Soit la fonction suivante :

$$
f(x) = \ln(3x^2 + 2x)
$$

### Dérivation :

On va utiliser la règle de la chaîne, où :

- \( g(x) = \ln(x) \) et \( h(x) = 3x^2 + 2x \).

1. La dérivée de \( g(x) = \ln(x) \) est :  
   $$ g'(x) = \frac{1}{x} $$

2. La dérivée de \( h(x) = 3x^2 + 2x \) est :  
   $$ h'(x) = 6x + 2 $$

### Application de la règle de la chaîne :

$$
f'(x) = \frac{1}{h(x)} \cdot h'(x)
$$

$$
f'(x) = \frac{1}{3x^2 + 2x} \cdot (6x + 2)
$$

Donc, la dérivée est :

$$
f'(x) = \frac{6x + 2}{3x^2 + 2x}
$$



## Interprétation géométrique de la dérivée 📐

La dérivée \( f'(x) \) représente la pente de la tangente à la courbe de la fonction \( f(x) \) en un point \( x \). Voici quelques interprétations possibles :

- **Si \( f'(x) > 0 \)**, la fonction est **croissante** en ce point.
- **Si \( f'(x) < 0 \)**, la fonction est **décroissante** en ce point.
- **Si \( f'(x) = 0 \)**, la tangente est horizontale, et cela peut correspondre à un point d'extremum (maximum ou minimum local).



## Conclusion 🌟

- La **dérivée** mesure le taux de variation d'une fonction et représente la pente de la tangente à la courbe de la fonction.
- Les principales **règles de dérivation** permettent de calculer rapidement la dérivée de fonctions simples.
- La **dérivée** est utile pour analyser les variations de la fonction, pour trouver des extrema, et pour résoudre des problèmes liés à la croissance/décroissance de la fonction.



## Devoirs 📑

1. Trouver la dérivée de \( f(x) = 4x^3 - 6x + 2 \).
2. Trouver la dérivée de \( f(x) = (x^2 + 1)(x - 2) \).
3. Lire le chapitre suivant sur les **tableaux de variations**. 📚
