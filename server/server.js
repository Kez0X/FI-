const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servez les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Démarrez le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
