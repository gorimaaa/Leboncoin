<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class HomeController extends AbstractController
{
    
    #[Route('/', name: 'home')]
    public function index(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $hasher): Response
    {
        dd("oui");
        return $this->redirectToRoute('all_annonces/index.html.twig');
    }
}
