<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class ProfilController extends AbstractController
{
    #[isGranted("ROLE_USER")]
    #[Route('/profil', name: 'profil')]
    public function index(Request $request, EntityManagerInterface $em, Security $security): Response
    {


        $user = $this->getUser();
        $roles = $user->getRoles();
        $isAdmin = false;
        if (in_array("ROLE_ADMIN", $roles)) {
            $isAdmin = true;
        }
        $parametres = [
            'email' => $user->getEmail(),
            'phone' => $user->getPhoneNumber(),
            'firstName' => $user->getFirstName(),
            'lastName' => $user->getLastName(),
            'isAdmin' => $isAdmin,
            // Ajoutez d'autres paramètres si nécessaire
        ];
        return $this->render("react/profil.html.twig", $parametres);
    }
}
