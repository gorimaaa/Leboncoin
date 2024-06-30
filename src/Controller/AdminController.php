<?php

namespace App\Controller;
use App\Entity\Favorites;
use App\Entity\Photo;
use App\Entity\Annonces;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\AnnoncesRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Serializer\SerializerInterface;

class AdminController extends AbstractController
{
    #[isGranted('ROLE_ADMIN')]
    #[Route('/adminAnnonces', name: 'adminAnnonces' , methods: ['GET'])]
    public function adminAnnonces(AnnoncesRepository $annoncesRepository, SerializerInterface $serializer): Response
    {
        $annoncesAll = $annoncesRepository->findAll();

        $annoncesAllJson = $serializer->serialize($annoncesAll, 'json', [
        'groups' => ['default', 'photos', 'user', 'GeographicSite']
        ]);
        
       return $this->render('admin/adminAnnonces.html.twig', [
           'Annonces' => $annoncesAllJson,
       ]);
    }


    #[Route('/modify/{id}', name: 'modifyAnnonce' , requirements: ['id' => '\d+'], methods: ['GET'])]
    public function modifyAnnonce(int $id, AnnoncesRepository $annoncesRepository, SerializerInterface $serializer): Response
    {
        $annonce = $annoncesRepository->find($id);
        if (!$annonce) {
            throw $this->createNotFoundException('L\'annonce n\'existe pas.');
        }
        $annonceDetails = $serializer->serialize($annonce, 'json', [
            'groups' => ['default', 'photos', 'user', 'GeographicSite']]);

        return $this->render('admin/modifyAdmin.html.twig',[
            'data' => $annonceDetails]);
    }

    #[Route('/delete/{id}', name: 'deleteAnnonce' , requirements: ['id' => '\d+'], methods: ['GET'])]
    public function deleteAnnonce(int $id, AnnoncesRepository $annoncesRepository, EntityManagerInterface $entityManager): Response
    {
        $annonce = $annoncesRepository->find($id);
        if (!$annonce) {
            throw $this->createNotFoundException('L\'annonce n\'existe pas.');
        }
    
        // Récupérer toutes les photos associées à l'annonce
        $photos = $entityManager->getRepository(Photo::class)->findBy(['annonce' => $annonce]);
    
        // Supprimer chaque photo
        foreach ($photos as $photo) {
            $entityManager->remove($photo);
        }

    
        // Supprimer l'annonce de la base de données
        $entityManager->remove($annonce);
        $entityManager->flush();
    
        // Rediriger vers une page de confirmation ou une autre page appropriée
        return new RedirectResponse($this->generateUrl('adminAnnonces'));
    }

    #[Route('/change/{id}', name: 'changeAnnonce' , requirements: ['id' => '\d+'], methods: ['POST'])]
    public function change(Request $request, int $id, EntityManagerInterface $entityManager): Response
    {
        $data = json_decode($request->getContent(), true);

        // Récupérer l'annonce à modifier
        $annonce = $entityManager->getRepository(Annonces::class)->find($id);

        if (!$annonce) {
            return new Response(null, Response::HTTP_NOT_FOUND);
        }

        // Mettre à jour les propriétés de l'annonce avec les données reçues
        
        $annonce->setFurnitureType($data['typeMeuble']);
        $annonce->setWidth(floatval($data['largeur']));
        $annonce->setLength(floatval($data['longueur']));
        $annonce->setHeight(floatval($data['hauteur']));
        $annonce->setDescription($data['description']);
        $annonce->setIsDismountable($data['demontable']);
        $annonce->setStorageLocation($data['lieuStockage']);
        $annonce->setMovementCondition($data['conditionDeplacement']);
        $annonce->setFurnitureCondition($data['etat']);
        $annonce->setIsRepairable($data['isRepairable']);
        $annonce->setAnnouncementStatus($data['status']);
        $annonce->setPrice($data['Price']);
        $entityManager->flush();
        return new Response(null, Response::HTTP_OK);


    }
}
