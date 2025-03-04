# 📊 Moyenne et Écart-Type  

## 🧐 Introduction  

En **statistiques**, il est important de **résumer** une série de données pour mieux la comprendre.  
Deux outils essentiels sont :  
✔️ **La moyenne** : mesure **centrale** des données.  
✔️ **L'écart-type** : mesure la **dispersion** des valeurs autour de la moyenne.  

---

## 1️⃣ 📏 Moyenne  

### 📌 Définition  

La **moyenne** d’une série de valeurs est la somme des valeurs divisée par le nombre total d’éléments.  

### 📌 Formule  

Si on a \( n \) valeurs notées \( x_1, x_2, ..., x_n \), la moyenne \( \bar{x} \) est :  

$$ \bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n} $$  

ou encore :  

$$ \bar{x} = \frac{\sum x_i}{n} $$  

où \( \sum x_i \) représente la **somme de toutes les valeurs**.  

---

### ✍️ Exemple de Calcul  

On considère les notes d'un élève : **12, 15, 10, 18, 14**  

On applique la formule :  

$$ \bar{x} = \frac{12 + 15 + 10 + 18 + 14}{5} $$  

$$ \bar{x} = \frac{69}{5} = 13.8 $$  

🔹 **Réponse** : La moyenne est **13.8**  

---

## 2️⃣ 📏 Écart-Type  

### 📌 Définition  

L’**écart-type** mesure **la dispersion des valeurs autour de la moyenne**.  
Plus l’écart-type est **petit**, plus les valeurs sont proches de la moyenne.  
Plus il est **grand**, plus les valeurs sont dispersées.  

### 📌 Formule  

L'écart-type \( \sigma \) d'une série de \( n \) valeurs est donné par :  

$$ \sigma = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n}} $$  

où :  
🔹 \( x_i \) sont les valeurs de la série.  
🔹 \( \bar{x} \) est la moyenne.  
🔹 \( n \) est le nombre total de valeurs.  

💡 **Remarque** : Pour un **échantillon** (et non une population entière), on divise par **\( n-1 \)** au lieu de \( n \).  

---

### ✍️ Exemple de Calcul  

On reprend les notes : **12, 15, 10, 18, 14** (moyenne \( \bar{x} = 13.8 \))  

1️⃣ **Calcul des écarts à la moyenne** :  

| \( x_i \) | \( x_i - \bar{x} \) | \( (x_i - \bar{x})^2 \) |
|-----------|---------------------|-------------------------|
| 12        | \( 12 - 13.8 = -1.8 \) | \( (-1.8)^2 = 3.24 \)  |
| 15        | \( 15 - 13.8 = 1.2 \)  | \( (1.2)^2 = 1.44 \)   |
| 10        | \( 10 - 13.8 = -3.8 \) | \( (-3.8)^2 = 14.44 \) |
| 18        | \( 18 - 13.8 = 4.2 \)  | \( (4.2)^2 = 17.64 \)  |
| 14        | \( 14 - 13.8 = 0.2 \)  | \( (0.2)^2 = 0.04 \)   |

2️⃣ **Somme des carrés des écarts** :  

$$ \sum (x_i - \bar{x})^2 = 3.24 + 1.44 + 14.44 + 17.64 + 0.04 = 36.8 $$  

3️⃣ **Calcul de l'écart-type** :  

$$ \sigma = \sqrt{\frac{36.8}{5}} = \sqrt{7.36} \approx 2.71 $$  

🔹 **Réponse** : L'écart-type est **2.71**  

---

## 📝 Exercices  

📌 **Exercice 1** : Calculer la **moyenne** et l'**écart-type** pour la série : **8, 12, 14, 10, 16**.  

📌 **Exercice 2** : Une série de 6 nombres a une moyenne de **20** et un écart-type de **5**. Ajouter un 7ᵉ nombre qui maintient la même moyenne.  

📌 **Exercice 3** : Deux classes ont des moyennes de **14** et **16**, mais l'écart-type de la première est **2.5** et celui de la seconde **4.8**. Quelle classe a des notes plus homogènes ?  

---

## 🎯 Applications de la Moyenne et de l'Écart-Type  

🔹 **Notes scolaires** 📚 : Évaluer la performance et la régularité des élèves.  
🔹 **Économie** 💰 : Calcul des revenus moyens et des inégalités de richesse.  
🔹 **Sport** ⚽ : Comparaison des performances des joueurs ou des équipes.  
🔹 **Science** 🔬 : Analyser des mesures expérimentales en physique ou chimie.  
🔹 **Finance** 📈 : Étudier la volatilité des marchés boursiers.  

---

## 🎉 Conclusion  

📌 **Moyenne** : Centre des données, calculé par  

$$ \bar{x} = \frac{\sum x_i}{n} $$  

📌 **Écart-type** : Mesure la dispersion autour de la moyenne  

$$ \sigma = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n}} $$  

📌 **Points à retenir** :  
✅ La **moyenne** résume la tendance générale des données.  
✅ L’**écart-type** indique si les valeurs sont regroupées ou dispersées.  
✅ Plus **\( \sigma \)** est petit, plus les valeurs sont proches de la moyenne.  

💡 **Astuce** : Toujours **vérifier les unités** et s'assurer que l'on divise par le bon \( n \) ou \( n-1 \).  

📚 **À toi de jouer !** Essaye les exercices et maîtrise la moyenne et l'écart-type ! 🚀  
