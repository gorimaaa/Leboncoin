import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";


function Modify() {
  const dataAnnonce = JSON.parse(data); 
  console.log(data);
  const [annonce, setAnnonce] = useState({
    typeMeuble : dataAnnonce.furnitureType,
    longueur: dataAnnonce.Length,
    largeur: dataAnnonce.Width,
    hauteur: dataAnnonce.Height,
    description: dataAnnonce.description,
    demontable: dataAnnonce.isDismountable,
    lieuStockage: dataAnnonce.storageLocation,
    Price: dataAnnonce.price,
    conditionDeplacement: dataAnnonce.movementCondition,
    etat: dataAnnonce.furnitureCondition,
    status: dataAnnonce.announcementStatus,
    isRepairable: dataAnnonce.isRepairable,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnnonce({ ...annonce, [name]: value});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/change/" + dataAnnonce.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(annonce),
      });

      if (response.ok) {
        alert("Modification réussi");
      } else {
        alert("La modification a échoué!");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire", error);
    }
    //navigate("/change/" + dataAnnonce.id, { state: { annonce } });

    
  };
  return (
    <>
    <header className="fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between text-center">
        <Link to="/add" className="text-4xl font-semibold text-orange-600 hover:text-orange-700">
          Leboncoin
        </Link>
        
        <label htmlFor="text" className="text-3xl font-medium text-gray-800 flex-grow">
          Modifier l'annonce, laissez le champs inchangé pour ne rien modifier
        </label>

        <Button
          href="/adminAnnonces"
          className="rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-800 shadow-sm border border-gray-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Quitter
        </Button>
      </nav>
    </header>

    <div className="max-w-4xl mx-auto my-5 bg-white p-8 rounded-lg shadow">
        <div className="pt-[4rem]"></div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="sm:col-span-3">
            <label htmlFor="typeMeuble" className="block text-sm font-semibold text-gray-700">
              Type de meuble
            </label>
            <input
              type="text"
              id="typeMeuble"
              name="typeMeuble"
              min="0"
              defaultValue={dataAnnonce.furnitureType}
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              
              onChange={handleInputChange} />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="longueur" className="block text-sm font-semibold text-gray-700">
                Longueur (cm)
              </label>
              <input
                type="text"
                id="longueur"
                name="longueur"
                min="0"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                defaultValue={dataAnnonce.Length}
                onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="largeur" className="block text-sm font-semibold text-gray-700">
                Largeur (cm)
              </label>
              <input
                type="text"
                id="largeur"
                name="largeur"
                min="0"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                defaultValue={dataAnnonce.Width}
                onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="hauteur" className="block text-sm font-semibold text-gray-700">
                Hauteur (cm)
              </label>
              <input
                type="text"
                id="hauteur"
                name="hauteur"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                defaultValue={dataAnnonce.Height}
                onChange={handleInputChange} />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              defaultValue={dataAnnonce.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="demontable" className="block text-sm font-semibold text-gray-700">
              Démontable
            </label>
            <select
              id="demontable"
              name="demontable"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              onChange={handleInputChange}
            >
              <option value={dataAnnonce.isDismountable ? "1" : "0"} selected disabled hidden>{dataAnnonce.isDismountable ? "Oui" : "Non"}</option>
              <option value="1">Oui</option>
              <option value="0">Non</option>
            </select>
          </div>

          <div>
            <label htmlFor="lieuStockage" className="block text-sm font-semibold text-gray-700">
              Lieu de stockage
            </label>
            <input
              type="text"
              id="lieuStockage"
              name="lieuStockage"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              defaultValue={dataAnnonce.storageLocation}
              onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="Price" className="block text-sm font-semibold text-gray-700">
              Prix
            </label>
            <input
              type="text"
              id="Price"
              name="Price"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              defaultValue={dataAnnonce.price}
              onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="conditionDeplacement" className="block text-sm font-semibold text-gray-700">
              Condition de déplacement
            </label>
            <input
              type="text"
              id="conditionDeplacement"
              name="conditionDeplacement"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              defaultValue={dataAnnonce.movementCondition}
              onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="etat" className="block text-sm font-semibold text-gray-700">
              État
            </label>
            <select
              id="etat"
              name="etat"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              defaultValue={dataAnnonce.furnitureCondition}
              onChange={handleInputChange}
            >
              <option value={dataAnnonce.furnitureCondition} selected disabled hidden>{dataAnnonce.furnitureCondition}</option>
              <option value="Neuf">Neuf</option>
              <option value="Usagé">Usagé</option>
              <option value="Endommagé">Endommagé</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-semibold text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              defaultValue={dataAnnonce.announcementStatus}
              onChange={handleInputChange}
            >
              <option value={dataAnnonce.announcementStatus} selected disabled hidden>{dataAnnonce.announcementStatus}</option>
              <option value="Active">Active</option>
              <option value="Archivé">Archivé</option>
              <option value="Donné">Donné</option>
              <option value="Détruit">Détruit</option>
            </select>
          </div>

          <div>
            <label htmlFor="isRepairable" className="block text-sm font-semibold text-gray-700">
              Réparable
            </label>
            <select
              id="isRepairable"
              name="isRepairable"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              onChange={handleInputChange}
            >
              <option value={dataAnnonce.isRepairable ? "1" : "0"} selected disabled hidden>{dataAnnonce.isRepairable ? "Oui" : "Non"}</option>
              <option value="1">Oui</option>
              <option value="0">Non</option>
            </select>
          </div>



          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Modifier l'annonce
            </button>
          </div>
        </form>
      </div></>
  );
}

export default Modify;