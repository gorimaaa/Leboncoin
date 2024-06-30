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

class UserController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/userAnnonces', name: 'userAnnonces')]
    public function userAnnonces(AnnoncesRepository $annoncesRepository, SerializerInterface $serializer): Response
    {
        // Récupérer l'utilisateur actuel
        $user = $this->getUser();

        // Récupérer les annonces associées à l'utilisateur
        $annonces = $annoncesRepository->findBy(['user' => $user]);

        $annoncesAllJson = $serializer->serialize($annonces, 'json', [
        'groups' => ['default', 'photos', 'user', 'GeographicSite']
    ]);
       return $this->render('admin/adminAnnonces.html.twig', [
           'Annonces' => $annoncesAllJson,
       ]);
    }


}
