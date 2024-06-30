import React from "react";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const ProfilUtilisateur = () => {
  const user = {
    name: "Massi",
    email: "massi@test.com",
    phone: "+33 621394682",
    admin: false,
  };

const email = JSON.parse(document.getElementById('root').getAttribute('email'));
const phone = JSON.parse(document.getElementById('root').getAttribute('phone'));
const firstName = JSON.parse(document.getElementById('root').getAttribute('firstName'));
const lastName = JSON.parse(document.getElementById('root').getAttribute('lastName'));
const isAdmin = JSON.parse(document.getElementById('root').getAttribute('isAdmin'));
  return (
    <div className="rootProfile">
      <div className="header-root">
        <p className="headingProfile">Salut, {firstName} !</p>
        <p className="greeting">Bienvenue ! Bon shopping !</p>
      </div>
      <div className="profileContainer">
        <div className="leftContainer">
          <h4 className="profileHeadingLeft">Aperçu du profil</h4>
          <div className="profileSection">
            <div className="leftDetails">
              <p className="profileText">
                <span className="profileSubHeading">Nom : </span>
                {lastName}
              </p>
              <p className="profileText">
                <span className="profileSubHeading">Prénom : </span>
                {firstName}
              </p>
              <p className="profileText">
                <span className="profileSubHeading">Email : </span>
                {email}
              </p>
            </div>
          </div>

          <div>
  {isAdmin ? (
    <>
      <div className="mesAnnonces">
        <p>Toutes les annonces</p>
          <Button variant="contained" className="ordersButton" href="/adminAnnonces">
            Voir
          </Button>
      </div>
    </>
  ) : (
    <div className="mesAnnonces">
      <p>Mes Annonces</p>
        <Button variant="contained" className="ordersButton" href="/userAnnonces">
          Voir
        </Button>
    </div>
  )}
</div>



          <div className="AjoutAnnonce">
            <p>Ajouter une Annonce</p>
              <Button variant="contained" className="ordersButton" href="/add">
                Ajout
              </Button>
          </div>
        </div>

        


        <div className ="GererAnnonce">
          
        </div>

        <div className="rightContainer">
          <div className="righHeadings">
            <p className="profileHeading">Informations Personnelles</p>
            <p className="profileText2">
              Salut ! Voici votre profil, depuis ce profil vous pouvez voir vos annonces et vos informations associés à votre compte !
              Vous pouvez aussi ajouter une annonce
            </p>
          </div>

          <div className="profileDetials">
            <div className="details">
              <p className="profileHeading">Mes Coordonnées</p>
              <p className="profileText">Email: {email}</p>
              <p className="profileText">Numéro de téléphone: 0{phone}</p>
            </div>

            <div className="mangeAccount">
              <p className="profileHeading">
                Se déconnecter de tous les appareils
              </p>
              <p className="profileText3">
                Pour accéder à nouveau au site web Le BonCoin UR, vous devez
                fournir vos informations d'identification. Cette action vous
                déconnectera de tout autre navigateur web que vous avez utilisé
                auparavant.
              </p>
            </div>
            <Button
              variant="contained"
              className="profileButton"
              href="/logout"
            >
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilUtilisateur;

