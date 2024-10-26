// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import EditBook from "./components/EditBook";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Container maxWidth="md">
        <h1>Book Management</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </Container>

      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Plan de Travail
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Tester les Requêtes avec Postman
        </Typography>
        <Typography variant="body1" paragraph>
          Assurez-vous que toutes les requêtes (GET, POST, PUT, DELETE)
          fonctionnent correctement avant de passer à l'interface utilisateur.
          Vérifiez les codes de réponse HTTP, les données de retour et les
          éventuels messages d'erreur.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. Aperçu de la Partie Frontend
        </Typography>
        <Typography variant="body1" paragraph>
          Identifiez les composants React nécessaires pour gérer l'interface
          utilisateur :<br />
          <strong>BookList :</strong> pour l'affichage de tous les livres
          <br />
          <strong>AddBook : </strong> pour l'ajout :<br />
          <strong>BookDetail : </strong> pour les détails d'un livre
          <br />
          <strong>EditBook : </strong> pour la modification d'un livre.
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Exemple de Requête : Affichage de Tous les Livres
        </Typography>
        <Typography variant="body1" paragraph>
          Commencez par implémenter une requête GET pour récupérer et afficher
          tous les livres.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Étapes :
        </Typography>

        <Typography variant="h6" gutterBottom>
          Étape 1 : Déclarer la Variable d'État
        </Typography>
        <Typography variant="body1" paragraph>
          Utilisez <code>useState</code> pour créer une variable d'état qui
          contiendra tous les livres. Par exemple :<br />
          <code>const [books, setBooks] = useState([]);</code>
        </Typography>

        <Typography variant="h6" gutterBottom>
          Étape 2 : Installer Axios
        </Typography>
        <Typography variant="body1" paragraph>
          Installez Axios pour effectuer des requêtes HTTP :<br />
          <code>npm install axios</code>
        </Typography>

        <Typography variant="h6" gutterBottom>
          Étape 3 : Utiliser <code>useEffect</code> pour Lancer la Requête
        </Typography>
        <Typography variant="body1" paragraph>
          Utilisez le hook <code>useEffect</code> pour effectuer une requête GET
        </Typography>

        <Typography variant="h6" gutterBottom>
          Étape 4 : Gestion des Cas de Succès et d'Erreur
        </Typography>
        <Typography variant="body1" paragraph>
          Assurez-vous de bien gérer les erreurs avec un
          <code>try...catch</code> et de mettre à jour l'interface utilisateur
          en fonction du succès ou de l'échec de la requête.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Étape 5 : Personnaliser l'Interface pour Afficher les Livres
        </Typography>
        <Typography variant="body1" paragraph>
          Utilisez des composants de Material UI comme <code>Card</code>,{" "}
          <code>Typography</code>, et <code>Grid</code> pour afficher les livres
          de manière agréable et structurée.
        </Typography>
        <Typography variant="h5" gutterBottom>
          4. Remarque sur les requêtes :
        </Typography>
        <Typography variant="h6" gutterBottom>
          Pour éditer ou afficher un livre, nous utilisons le hook{" "}
          <code>useParams()</code> pour récupérer l'ID du livre concerné par
          l'édition ou l'affichage.
        </Typography>
      </Container>
    </Router>
  );
};

export default App;
