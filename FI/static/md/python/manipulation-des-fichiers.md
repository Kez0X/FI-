# Manipulation des Fichiers en Python 📂

La manipulation des fichiers est une tâche courante en programmation. Python offre des outils simples et puissants pour lire, écrire et modifier des fichiers. Ces fichiers peuvent être des fichiers texte (comme des `.txt`), des fichiers CSV, des fichiers JSON, et bien d'autres types.

Nous allons explorer comment ouvrir, lire, écrire et fermer des fichiers en Python. Nous verrons aussi comment manipuler le contenu des fichiers avec différentes méthodes.

---

## 1. Ouvrir un fichier 📖

La première étape pour manipuler un fichier est de l'ouvrir. En Python, tu utilises la fonction intégrée **`open()`** pour ouvrir un fichier. Cette fonction prend deux arguments principaux :
- **Nom du fichier** : Le chemin du fichier à ouvrir (par exemple, `"mon_fichier.txt"`).
- **Mode d'ouverture** : Ce mode détermine ce que tu peux faire avec le fichier (lire, écrire, etc.).

### 1.1. Syntaxe de la fonction `open()`

```python
fichier = open("nom_du_fichier", "mode")
```

Les modes d'ouverture les plus courants sont :
- `"r"` : Lecture seule (par défaut). Le fichier doit exister.
- `"w"` : Écriture seule. Crée un fichier vide ou écrase un fichier existant.
- `"a"` : Ajout. Ouvre un fichier pour y ajouter des données à la fin sans écraser le contenu existant.
- `"x"` : Création. Crée un fichier, mais échoue si le fichier existe déjà.
- `"b"` : Mode binaire (par exemple, pour des images ou des fichiers non texte).
- `"t"` : Mode texte (par défaut, souvent implicite).

### 1.2. Exemple d'ouverture d'un fichier en mode lecture

```python
fichier = open("exemple.txt", "r")
```

Si le fichier existe, il est ouvert en mode lecture. Sinon, une erreur sera levée.

---

## 2. Lire un fichier 📚

Une fois que tu as ouvert un fichier en mode lecture, tu peux en lire le contenu. Il existe plusieurs façons de lire un fichier en Python.

### 2.1. Lire tout le contenu avec `read()`

```python
fichier = open("exemple.txt", "r")
contenu = fichier.read()  # Lit tout le contenu du fichier
print(contenu)
fichier.close()
```

- La méthode **`read()`** lit l'ensemble du fichier et retourne son contenu sous forme de chaîne de caractères.

### 2.2. Lire une ligne à la fois avec `readline()`

```python
fichier = open("exemple.txt", "r")
ligne = fichier.readline()  # Lit une seule ligne
print(ligne)
fichier.close()
```

- La méthode **`readline()`** lit une seule ligne du fichier à la fois.

### 2.3. Lire toutes les lignes avec `readlines()`

```python
fichier = open("exemple.txt", "r")
lignes = fichier.readlines()  # Lit toutes les lignes et les retourne sous forme de liste
print(lignes)
fichier.close()
```

- La méthode **`readlines()`** lit le fichier ligne par ligne et retourne une liste où chaque élément est une ligne du fichier.

---

## 3. Écrire dans un fichier ✍️

Tu peux également ouvrir un fichier en mode écriture pour y insérer du texte. En mode `"w"`, tout le contenu du fichier est écrasé, tandis qu'en mode `"a"`, tu ajoutes du texte à la fin du fichier sans effacer son contenu.

### 3.1. Exemple d'écriture dans un fichier en mode `"w"`

```python
fichier = open("nouveau_fichier.txt", "w")
fichier.write("Bonjour, ceci est un fichier texte.\n")
fichier.write("Ligne 2\n")
fichier.close()
```

- La méthode **`write()`** permet d'écrire du texte dans le fichier. Attention, cela n'ajoute pas automatiquement de saut de ligne. Si tu veux ajouter des sauts de ligne, tu dois le spécifier explicitement (par exemple, `\n`).

### 3.2. Exemple d'ajout dans un fichier en mode `"a"`

```python
fichier = open("nouveau_fichier.txt", "a")
fichier.write("Ligne supplémentaire ajoutée.\n")
fichier.close()
```

- La méthode **`write()`** en mode `"a"` ajoute du texte à la fin du fichier sans le supprimer.

---

## 4. Fermer un fichier 🔒

Il est important de fermer un fichier après l'avoir ouvert pour libérer les ressources système. Cela se fait avec la méthode **`close()`**.

```python
fichier = open("exemple.txt", "r")
# Lire ou écrire des données...
fichier.close()  # Fermeture du fichier
```

**Important :** Si tu oublies de fermer un fichier, cela peut entraîner des problèmes de gestion de mémoire et de verrouillage du fichier.

---

## 5. Utiliser le gestionnaire de contexte `with` ⏳

Plutôt que d'ouvrir un fichier avec `open()` et de devoir le fermer explicitement avec `close()`, tu peux utiliser le gestionnaire de contexte `with`. Ce mécanisme garantit que le fichier sera correctement fermé, même si une erreur se produit pendant la lecture ou l'écriture.

### 5.1. Exemple avec `with`

```python
with open("exemple.txt", "r") as fichier:
    contenu = fichier.read()
    print(contenu)
```

- Le bloc **`with`** ouvre le fichier et le ferme automatiquement à la fin de l'indentation, ce qui est plus sûr et plus propre.

---

## 6. Manipulation de fichiers binaires 📸

Si tu dois manipuler des fichiers binaires (comme des images ou des fichiers audio), tu peux utiliser les modes `"rb"` (lecture binaire) et `"wb"` (écriture binaire).

### 6.1. Exemple de lecture d'un fichier binaire

```python
with open("image.jpg", "rb") as fichier:
    contenu_binaire = fichier.read()
    print(contenu_binaire[:10])  # Affiche les 10 premiers octets
```

- En mode binaire, **`read()`** lit les octets du fichier, et le contenu sera un objet `bytes`.

### 6.2. Exemple d'écriture dans un fichier binaire

```python
with open("copie_image.jpg", "wb") as fichier:
    fichier.write(contenu_binaire)  # Copie les données binaires dans un nouveau fichier
```

---

## 7. Gestion des erreurs lors de la manipulation des fichiers ⚠️

Lors de l'ouverture et de la manipulation des fichiers, il est important de prévoir les erreurs possibles. Par exemple, un fichier peut ne pas exister ou une tentative d'écriture peut échouer. Tu peux gérer ces erreurs avec des blocs `try`/`except`.

### 7.1. Exemple de gestion des erreurs

```python
try:
    with open("fichier_inexistant.txt", "r") as fichier:
        contenu = fichier.read()
except FileNotFoundError:
    print("Erreur : Le fichier n'a pas été trouvé.")
except IOError:
    print("Erreur d'entrée/sortie.")
```

- **`FileNotFoundError`** : Lève une erreur si le fichier spécifié n'existe pas.
- **`IOError`** : Lève une erreur pour des problèmes d'entrée/sortie, comme un fichier qui ne peut pas être ouvert.

---

## 8. Conclusion 🏁

Voici un récapitulatif des concepts clés que nous avons vus pour manipuler des fichiers en Python :

- **`open()`** : Ouvre un fichier avec un mode spécifique (lecture, écriture, etc.).
- **`read()`**, **`readline()`**, **`readlines()`** : Méthodes pour lire des fichiers.
- **`write()`** : Méthode pour écrire dans un fichier.
- **`close()`** : Ferme un fichier.
- **`with`** : Utilise un gestionnaire de contexte pour ouvrir et fermer automatiquement des fichiers.
- **Gestion des erreurs** : Utilisation de `try`/`except` pour gérer les erreurs liées à la manipulation des fichiers.

La manipulation de fichiers est une compétence essentielle pour toute programmation, et Python rend cette tâche particulièrement facile grâce à ses fonctions et à son approche intuitive.