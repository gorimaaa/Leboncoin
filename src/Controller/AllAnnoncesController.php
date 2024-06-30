<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\AnnoncesRepository;
use Symfony\Component\Serializer\SerializerInterface;

class AllAnnoncesController extends AbstractController
{
    #[Route('/allAnnonces', name: 'app_all_annonces')]
    public function index(AnnoncesRepository $annoncesRepository, SerializerInterface $serializer): Response
    {
        $annoncesAll = $annoncesRepository->findAll();

        $annoncesAllJson = $serializer->serialize($annoncesAll, 'json', [
        'groups' => ['default', 'photos', 'user', 'GeographicSite']
    ]);
       
       return $this->render('all_annonces/index.html.twig', [
           'annoncesAll' => $annoncesAllJson,
       ]);
    }

    #[Route('/detailAnnonce/{id}', name: 'annonce_detail' , requirements: ['id' => '\d+'], methods: ['GET'])]
    public function detail(int $id, AnnoncesRepository $annoncesRepository, SerializerInterface $serializer): Response
    {
        $annonce = $annoncesRepository->find($id);
        if (!$annonce) {
            throw $this->createNotFoundException('L\'annonce n\'existe pas.');
        }
        $annonceDetails = $serializer->serialize($annonce, 'json', [
            'groups' => ['default', 'photos', 'user', 'GeographicSite']]);

        return new Response($annonceDetails, 200, ['Content-Type' => 'application/json']);
    }
}
