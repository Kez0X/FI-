# Leçon : Fonction exponentielle 📈

## Objectifs 🎯 :
- Comprendre la définition et les propriétés de la fonction exponentielle.
- Savoir tracer la courbe représentative de la fonction exponentielle.
- Résoudre des équations impliquant la fonction exponentielle.



## 1. Définition de la fonction exponentielle 🌱

La fonction exponentielle est définie par la relation :

$$
f(x) = e^x
$$

où $$ e $$ est la base de l'exponentielle, une constante qui vaut environ $$ 2.718 $$.

### Propriétés de la fonction exponentielle :
- **Domaine de définition** : $$ \mathbb{R} $$ (la fonction est définie pour tous les réels).
- **Image de la fonction** : $$ f(x) = e^x $$ prend toutes les valeurs strictement positives, soit $$ f(x) > 0 $$ pour tout $$ x \in \mathbb{R} $$.
- **Monotonie** : La fonction exponentielle est strictement croissante, c'est-à-dire que pour tous $$ x_1 < x_2 $$, on a $$ e^{x_1} < e^{x_2} $$.
- **Limites** : 
  - $$ \lim_{x \to -\infty} e^x = 0 $$.
  - $$ \lim_{x \to +\infty} e^x = +\infty $$.
- **Valeur en 0** : $$ e^0 = 1 $$.



## 2. La courbe représentative de la fonction exponentielle 📉

La fonction exponentielle $$ f(x) = e^x $$ est une courbe qui :
- Passe par le point $$ (0, 1) $$.
- Croît sans limite vers $$ +\infty $$ lorsque $$ x $$ augmente.
- Se rapproche asymptotiquement de l'axe des abscisses (mais ne l'atteint jamais) quand $$ x $$ tend vers $$ -\infty $$.

### Graphique de $$ f(x) = e^x $$ :

1. La courbe est toujours au-dessus de l'axe des abscisses.
2. À mesure que $$ x $$ augmente, $$ e^x $$ devient de plus en plus grand.
3. À mesure que $$ x $$ diminue, $$ e^x $$ se rapproche de 0 sans jamais l'atteindre.



## 3. Propriétés fondamentales de la fonction exponentielle 🧮

### 3.1. Propriétés algébriques :
- **Propriété 1** : Pour tous les réels $$ a $$ et $$ b $$,
  $$
  e^{a+b} = e^a \cdot e^b
  $$.
- **Propriété 2** : Pour tous les réels $$ a $$ et $$ b $$,
  $$
  e^{a-b} = \frac{e^a}{e^b}
  $$.
- **Propriété 3** : Pour tout réel $$ a $$,
  $$
  e^{0} = 1
  $$.
  
### 3.2. La fonction exponentielle et la dérivée :
- La fonction $$ f(x) = e^x $$ est sa propre dérivée, c'est-à-dire que :
  $$
  f'(x) = e^x
  $$.
  Cela signifie que la pente de la courbe est toujours égale à la valeur de la fonction en chaque point. La fonction exponentielle est donc la seule fonction dont la dérivée est égale à la fonction elle-même.



## 4. La fonction exponentielle dans le cadre des équations différentielles 📚

La fonction exponentielle est particulièrement importante dans les équations différentielles. Une équation différentielle très simple mais fondamentale est :

$$
\frac{dy}{dx} = y
$$

La solution générale de cette équation est donnée par la fonction exponentielle :

$$
y(x) = Ce^x
$$

où $$ C $$ est une constante déterminée par les conditions initiales.



## 5. La fonction exponentielle et les logarithmes 🔍

La fonction exponentielle est inverse de la fonction logarithme népérien, notée $$ \ln(x) $$.

- Si $$ y = e^x $$, alors $$ x = \ln(y) $$.
- La fonction logarithme est donc la fonction réciproque de la fonction exponentielle.
- Les propriétés du logarithme :
  - $$ \ln(1) = 0 $$.
  - $$ \ln(e) = 1 $$.
  - $$ \ln(ab) = \ln(a) + \ln(b) $$.
  - $$ \ln\left(\frac{a}{b}\right) = \ln(a) - \ln(b) $$.
  - $$ \ln(a^n) = n\ln(a) $$.



## 6. Applications de la fonction exponentielle 🌍

La fonction exponentielle apparaît dans de nombreux domaines :
- **Croissance exponentielle** : Par exemple, la population d'une espèce peut croître de manière exponentielle.
- **Décroissance exponentielle** : Par exemple, la radioactivité ou la dépréciation d'un bien suivent souvent un modèle de décroissance exponentielle.
- **Processus de diffusion** : L'évolution de certains phénomènes physiques, comme la diffusion de la chaleur ou de la matière, peut être modélisée par une fonction exponentielle.



## 7. Exemple d'application : Modélisation de la croissance d'une population 🌱

Supposons qu'une population initiale de 100 individus croît de 5 % par an. La taille de la population après $$ t $$ années peut être modélisée par :

$$
P(t) = 100 \cdot e^{0.05t}
$$

### Interprétation :
- $$ 100 $$ est la population initiale.
- $$ 0.05 $$ est le taux de croissance annuel sous forme décimale.
- $$ e^{0.05t} $$ décrit l'augmentation de la population en fonction du temps.



## 8. Tracer la courbe de la fonction exponentielle 🖼️

Voici comment tracer la courbe de $$ f(x) = e^x $$ sur un intervalle donné :

1. Tracez l'axe des abscisses et l'axe des ordonnées.
2. Marquez le point $$ (0,1) $$, car $$ e^0 = 1 $$.
3. Choisissez plusieurs valeurs de $$ x $$ (par exemple, $$ -2, -1, 0, 1, 2 $$) et calculez $$ e^x $$ pour chaque valeur.
4. Placez les points obtenus sur le graphique.
5. Reliez les points de manière lisse pour former une courbe croissante.



## 9. Conclusion 🌟

- La fonction exponentielle est une fonction fondamentale en mathématiques, avec des applications variées dans la modélisation des phénomènes de croissance et de décroissance.
- Sa courbe est une fonction strictement croissante qui ne touche jamais l'axe des abscisses et qui passe par le point $$ (0, 1) $$.
- La fonction exponentielle est liée au logarithme et est la seule fonction qui est égale à sa propre dérivée.



## Devoirs 📑

1. Tracer la courbe de la fonction $$ f(x) = e^x $$ sur l'intervalle $$ [-2, 2] $$ et analyser son comportement.
2. Résoudre l'équation suivante : 
   - $$ e^x = 5 $$.
3. Lire le chapitre suivant sur les **équations différentielles**. 📚
