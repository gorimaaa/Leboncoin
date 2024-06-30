
import './styles/app.css';
import './styles/ProfileUtilisateur.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acceuil from './react/controllers/Acceuil.jsx';
import Login from './react/controllers/Login.jsx';
import Register from './react/controllers/Register.jsx';
import Add from './react/controllers/addAnnonce.jsx';
import All from './react/controllers/ListeAnnonces.jsx';
import Detail from './react/controllers/detailsAnnonce.jsx';
import Profil from './react/controllers/ProfilUtilisateur.jsx';
import ModifyAnnonce from './react/controllers/modifierAnnonce.jsx';
import AdminAnnonces from './react/controllers/AdminAnnonces.jsx';
import UserAnnonces from './react/controllers/UserAnnonces.jsx';
// S'assurez d'avoir un composant Acceuil capable de recevoir 
// les annonces en tant que props
const annonces = JSON.parse(window.annoncesData || '[]');
const annoncesAll = JSON.parse(window.annoncesAllData || '[]');
const allA = JSON.parse(window.allA || '[]');
const userA = JSON.parse(window.allA || '[]');

 

const router = createBrowserRouter([
  {
    path: "/react",
    element: <Acceuil annoncesInitiales={annonces} />,
  },
  {
    path:"/allAnnonces",
    element: <All allAnnonces={annoncesAll} />,
  },
  {
    path: "/detailAnnonce/:id",
    element: <Detail />,
  },
  {
    path: "/login",
    element:<Login />,
  },
  {
    path:"/register", 
    element:<Register/>,
  },
  {
    path:"/add",
    element:<Add/>
  },
  {
    path:"/profil",
    element:<Profil/>
  },
  {
    path:"/modify/:id",
    element:<ModifyAnnonce/>
  },
  {
    path:"/adminAnnonces",
    element:<AdminAnnonces allAnnonces={allA}/>
  },
  {
    path:"/userAnnonces",
    element:<UserAnnonces userAnnonces={userA}/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
