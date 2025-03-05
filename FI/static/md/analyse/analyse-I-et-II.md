# Cours d'Analyse Mathématique (Bac+1 / Bac+2 Avancé)

## Table des matières

1. [Introduction à l'analyse réelle](#introduction-à-lanalyse-réelle)
2. [Suites numériques](#suites-numériques)
   1. [Définition d'une suite](#définition-dune-suite)
   2. [Limite d'une suite](#limite-dune-suite)
   3. [Critères de convergence](#critères-de-convergence)
   4. [Suites récurrentes](#suites-récurrentes)
3. [Fonctions réelles de variable réelle](#fonctions-réelles-de-variable-réelle)
   1. [Continuité](#continuité)
   2. [Dérivabilité](#dérivabilité)
   3. [Théorème de la valeur intermédiaire](#théorème-de-la-valeur-intermédiaire)
4. [Séries numériques](#séries-numériques)
   1. [Convergence des séries](#convergence-des-séries)
   2. [Critères de convergence des séries](#critères-de-convergence-des-séries)
   3. [Séries de fonctions](#séries-de-fonctions)
5. [Applications de l'analyse](#applications-de-lanalyse)
   1. [Développements en séries de Taylor](#développements-en-séries-de-taylor)
   2. [Intégration par séries](#intégration-par-séries)
6. [Propriétés supplémentaires](#propriétés-supplémentaires)
   1. [Propriétés des suites monotones](#propriétés-des-suites-monotones)
   2. [Propriétés des fonctions convexes](#propriétés-des-fonctions-convexes)
7. [Conclusion](#conclusion)


## 1. Introduction à l'analyse réelle

L'analyse réelle est une branche des mathématiques qui étudie les propriétés des nombres réels et des fonctions réelles. Cette discipline repose sur des concepts fondamentaux tels que les suites, les séries, la continuité et la dérivabilité. Ces concepts sont essentiels pour comprendre des théories plus avancées dans des domaines comme l'intégration, la topologie, et les équations différentielles.

### Objectifs de l'analyse réelle :
- Étudier les limites et la convergence des suites et des séries.
- Analyser les comportements asymptotiques des fonctions réelles.
- Comprendre les propriétés des fonctions continues et dérivées.
- Appliquer ces concepts dans des problèmes d'approximation et d'optimisation.


## 2. Suites numériques

### 2.1 Définition d'une suite

Une suite numérique est une fonction définie sur \( \mathbb{N} \) (ou un sous-ensemble de \( \mathbb{N} \)) qui prend des valeurs dans \( \mathbb{R} \). On la note \( (u_n) \), où \( u_n \) est le terme de la suite de rang \( n \).

Exemples de suites :
- Suite arithmétique : 
  $$ u_n = u_0 + n \cdot d $$ 
  où \( u_0 \) est le premier terme et \( d \) la différence entre les termes successifs.

- Suite géométrique : 
  $$ u_n = a^n $$ 
  où \( a \in \mathbb{R} \).

- Suite harmonique : 
  $$ u_n = \frac{1}{n} $$


### 2.2 Limite d'une suite

La limite d'une suite \( (u_n) \) en \( +\infty \) est un nombre réel \( L \) vers lequel les termes de la suite se rapprochent à mesure que \( n \) augmente. On dit que la suite converge vers \( L \) si :
$$ \lim_{n \to +\infty} u_n = L $$

Formellement, une suite converge vers \( L \) si pour tout \( \epsilon > 0 \), il existe un \( N \in \mathbb{N} \) tel que pour tous \( n \geq N \), 
$$ |u_n - L| < \epsilon $$

#### Exemple :
Considérons la suite \( u_n = \frac{1}{n} \). La limite de cette suite est :
$$ \lim_{n \to +\infty} u_n = 0 $$


### 2.3 Critères de convergence

Il existe plusieurs critères pour déterminer si une suite converge ou diverge.

#### Critère de la monotonicité :
Si une suite \( (u_n) \) est monotone (croissante ou décroissante) et bornée, alors elle converge.

#### Critère de Cauchy :
Une suite \( (u_n) \) est convergente si et seulement si, pour tout \( \epsilon > 0 \), il existe un \( N \in \mathbb{N} \) tel que pour tous \( m, n \geq N \), 
$$ |u_n - u_m| < \epsilon $$

#### Critère de la racine :
Si la suite \( (u_n) \) vérifie :
$$ \limsup_{n \to +\infty} \sqrt[n]{|u_n|} = L $$ 
alors :
- Si \( L < 1 \), la suite converge.
- Si \( L > 1 \), la suite diverge.
- Si \( L = 1 \), le critère est indéterminé.


### 2.4 Suites récurrentes

Une suite récurrente est une suite où chaque terme est défini à partir des précédents. La forme la plus simple d'une suite récurrente est la suite de Fibonacci, qui est définie par :
$$ u_0 = 0, \quad u_1 = 1, \quad u_n = u_{n-1} + u_{n-2} \quad \text{pour} \quad n \geq 2 $$

Cette suite a des applications en informatique, en théorie des graphes et dans diverses modélisations mathématiques.


## 3. Fonctions réelles de variable réelle

### 3.1 Continuité

Une fonction \( f : \mathbb{R} \to \mathbb{R} \) est dite **continue** en un point \( a \) si :
$$ \lim_{x \to a} f(x) = f(a) $$

Cela signifie que la fonction ne présente aucune discontinuité en \( a \). Plus généralement, une fonction est continue sur un intervalle \( I \subset \mathbb{R} \) si elle est continue en chaque point de cet intervalle.

#### Exemple de fonction continue :
La fonction \( f(x) = x^2 \) est continue sur \( \mathbb{R} \).


### 3.2 Dérivabilité

La dérivée d'une fonction \( f \) en un point \( a \) est la limite du taux de variation de la fonction en ce point :
$$ f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} $$

Si cette limite existe, la fonction est dérivable en \( a \). La dérivée permet de mesurer le taux de variation instantané de la fonction à un point donné. Une fonction est dérivable sur un intervalle si elle est dérivable en chaque point de cet intervalle.

#### Exemple de dérivée :
Pour la fonction \( f(x) = x^2 \), on calcule la dérivée :
$$ f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = 2x $$


### 3.3 Théorème de la valeur intermédiaire

Le théorème de la valeur intermédiaire stipule que si \( f \) est une fonction continue sur un intervalle fermé \( [a, b] \) et que \( f(a) \neq f(b) \), alors pour tout \( y \) compris entre \( f(a) \) et \( f(b) \), il existe un \( c \in [a, b] \) tel que :
$$ f(c) = y $$

Cela signifie que si une fonction est continue sur un intervalle, elle prend toutes les valeurs entre \( f(a) \) et \( f(b) \) au moins une fois.


## 4. Séries numériques

### 4.1 Convergence des séries

Une **série numérique** est une somme infinie de termes de la forme :
$$ S = \sum_{n=1}^{\infty} a_n $$

La série converge vers une somme \( S \) si :
$$ \lim_{N \to \infty} \sum_{n=1}^{N} a_n = S $$

Cela signifie que la somme des premiers termes de la série se rapproche de \( S \) à mesure que \( N \) devient grand.


### 4.2 Critères de convergence des séries

#### Critère de comparaison :
Si \( 0 \leq a_n \leq b_n \) pour tous \( n \) suffisamment grands et que la série \( \sum b_n \) converge, alors la série \( \sum a_n \) converge aussi.

#### Critère de D'Alembert :
Une série \( \sum a_n \) converge si :
$$ \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = L $$ 
- Si \( L < 1 \), la série converge.
- Si \( L > 1 \), la série diverge.
- Si \( L = 1 \), le critère est indéterminé.


### 4.3 Séries de fonctions

Une **série de fonctions** est une somme infinie de fonctions :
$$ f(x) = \sum_{n=0}^{\infty} f_n(x) $$

La convergence d'une telle série dépend de la convergence des termes \( f_n(x) \) pour chaque \( x \). La convergence uniforme et la convergence simple sont des concepts importants dans ce domaine.


## 5. Applications de l'analyse

### 5.1 Développements en séries de Taylor

Le développement en série de Taylor permet d'approximer une fonction \( f \) autour d'un point \( a \) par un polynôme dont les coefficients sont les dérivées de la fonction en \( a \).

La série de Taylor d'une fonction \( f \) autour du point \( a \) est donnée par :
$$ f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f^{(3)}(a)}{3!}(x-a)^3 + \cdots $$

Cela permet d'approximer des fonctions complexes par des polynômes de degré supérieur.


### 5.2 Intégration par séries

L'intégration de certaines fonctions peut être effectuée en utilisant des séries infinies. Par exemple, on peut intégrer des séries de Taylor terme à terme pour obtenir une approximation de l'intégrale d'une fonction.


## 6. Propriétés supplémentaires

### 6.1 Propriétés des suites monotones

Une suite \( (u_n) \) est dite monotone si elle est soit croissante, soit décroissante. Si elle est également bornée, elle est convergente.


### 6.2 Propriétés des fonctions convexes

Une fonction \( f \) est convexe sur un intervalle \( I \) si pour tous \( x_1, x_2 \in I \) et \( \lambda \in [0,1] \), on a :
$$ f(\lambda x_1 + (1-\lambda) x_2) \leq \lambda f(x_1) + (1-\lambda) f(x_2) $$

Les fonctions convexes jouent un rôle crucial en optimisation et dans la théorie des inégalités.

## 7. Conclusion

Ce cours sur l'analyse réelle a exploré les bases des suites, des séries, de la continuité et de la dérivabilité des fonctions. Ces concepts sont essentiels pour une compréhension approfondie des mathématiques et des applications dans des domaines variés tels que l'optimisation, l'intégration, et les approximations fonctionnelles. L'étude des séries et des suites permet également d'approfondir des résultats plus avancés dans d'autres branches des mathématiques. 

# Lien vers une fiche de cours complète

<a href="https://guillaumemetzler.github.io/courses/contents/analyse/poly.pdf">Lien vers la fiche d'analyse complète</a>