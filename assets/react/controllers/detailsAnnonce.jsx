import React from 'react';
import { HeartIcon, ChatAlt2Icon, MapIcon } from '@heroicons/react/outline';
import { PhotographIcon } from '@heroicons/react/solid';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailAnnonce = () => {
  const { id } = useParams();
  const [annonceDetail, setAnnonce] = useState(null);

  useEffect(() => {
    // Simuler un appel réseau pour récupérer les détails
    fetch(`/detailAnnonce/${id}`) // Assurez-vous que cette URL est gérée par Symfony pour retourner les détails de l'annonce
      .then(response => response.json())
      .then(data => {
        console.log('Data received:', data); // Vérifiez ce qui est imprimé ici
        setAnnonce(data);
      })
      .catch(error => console.error('Erreur lors du chargement de l\'annonce', error));
  }, [id]);

  if (annonceDetail) {
    return <div>Chargement des détails...</div>;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    {/* <div className="flex flex-row space-x-4 p-4">
    
      {photos.length > 0 ? photos.map((photo, index) => (
        <img
          key={index}
          src={photo.photoPath} // Assurez-vous que le chemin est correct
          alt={`Image ${index}`}
          className="h-40 w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        />
      )) : (
        <div className="text-center p-4">Aucune image disponible</div>
      )}
    </div> */}

      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{annonceDetail.furnitureType}</h3>
        <div className="flex items-center space-x-3">
          <p className="text-lg text-gray-900">{annonceDetail.price} €</p>
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {annonceDetail.furnitureCondition}
          </span>
        </div>
        <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{annonceDetail.description}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Localisation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
              <MapIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <span className="ml-2">{location}</span>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Vendeur</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{annonceDetail.firstName} {annonceDetail.lastName}</dd>
          </div>
        </dl>
      </div>

      <div className="px-4 py-4 sm:px-6 flex justify-end space-x-3">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ChatAlt2Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span className="ml-2">Contacter le vendeur</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <HeartIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span className="ml-2">Ajouter aux favoris</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PhotographIcon className="h-5 w-5 text-white" aria-hidden="true" />
          <span className="ml-2">Voir les photos</span>
        </button>
      </div>
    </div>
  );
};

export default DetailAnnonce;