<?php

namespace App\Controller;
use App\Entity\Annonces;
use App\Entity\Photo;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\AnnoncesRepository;
use Doctrine\ORM\EntityManagerInterface;


class AddController extends AbstractController
{
    #[isGranted("ROLE_USER")]
    #[Route('/add', name: 'app_add')]
    public function index(): Response
    {
        return $this->render('add/index.html.twig', [
            'controller_name' => 'AddController',
        ]);
    }

    #[isGranted("ROLE_USER")]
    #[Route('/addAnnonce', name: 'addAnnonce', methods: ['POST'])]
    public function addAnnonce(Request $request, EntityManagerInterface $entityManager): Response
    {
        $data = json_decode($request->getContent(), true);

        $annonce = new Annonces();
        $user = $this->getUser();

        // Mettre à jour les propriétés de l'annonce avec les données reçues
        $annonce->setUser($user);
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
        $annonce->setAnnouncementStatus("Active");
        $annonce->setPrice(floatval($data['Price']));
        $annonce->setAnnouncementDate(new \DateTimeImmutable());

        /*$annonce->setFurnitureType('Armoire');
        $annonce->setWidth(100.0);
        $annonce->setLength(200.0);
        $annonce->setHeight(150.0);
        $annonce->setDescription('Description de l\'annonce');
        $annonce->setPrice(500.0);
        $annonce->setIsDismountable(true);
        $annonce->setAnnouncementDate(new \DateTimeImmutable()); // Date et heure actuelles
        $annonce->setStorageLocation('Emplacement de stockage');
        $annonce->setMovementCondition('Condition de déplacement');
        $annonce->setFurnitureCondition('État du meuble');
        $annonce->setAnnouncementStatus('Statut de l\'annonce');
        $annonce->setIsRepairable(true);*/
        

        $entityManager->persist($annonce);
        $entityManager->flush();
        return new Response(null, Response::HTTP_OK);


    }

}
