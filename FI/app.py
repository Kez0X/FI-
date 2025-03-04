from flask import Flask, render_template, send_from_directory
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/services')
def services():
    return render_template("services.html")

@app.route('/langages')
def langages():
    return render_template('langages.html')

@app.route('/cours/<langage>/<cours>')
def cours(langage, cours):
    return render_template('cours.html', langage=langage, cours=cours)

@app.route('/md/<langage>/<cours>')
def get_markdown(langage, cours):
    return send_from_directory('static/md', f'{langage}/{cours}.md')

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

if __name__ == "__main__":
    app.run(port=10000)

# les feuilles de style, scripts, images et autres éléments qui ne seront jamais générés dynamiquement doivent être dans le dossier static,
# les fichiers HTML doivent être dans le dossier templates,
# les tests doivent être dans le dossier tests,
# le fichier app.py contient les différentes routes de l'application