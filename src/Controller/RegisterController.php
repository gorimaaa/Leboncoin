<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Constraints\Email;

class RegisterController extends AbstractController
{
    
    #[Route('/register', name: 'home')]
    public function index(Request $request): Response
    {
        
        return $this->render("react/register.html.twig");
    }

    #[Route('/info_register', name:'info_register')]
    public function infoRegister(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $hasher): Response
    {
        $error = false;
        
        $nom = $request->request->get('nom');
        $prenom = $request->request->get('prenom');
        $email = $request->request->get('email');
        $phone = $request->request->get('phone');
        $password = $request->request->get('password');
        $confirmPassword = $request->request->get('confirmPassword');
        

        if($password != $confirmPassword){
            $error = true;
        }
        // Vérification de la non vacuité des champs
        if($nom == "" || $prenom == "" || $email == "" || $password == "" || $confirmPassword == "" || $phone == ""){
            $error = true;
        }
        // Vérification email
        $validator = Validation::createValidator();
        $errors = $validator->validate($email, [
            new Email(['mode' => 'strict']),
        ]);
        if(count($errors) > 0){
            $error = true;
        }

        // Tester la longueur des champs (max 255, et un mini à définir)
        if(!$error){
            $user = new User();
            $user->setEmail($email)
            ->setPassword($hasher->hashPassword($user, $password))
            ->setRoles(["ROLE_USER"])
            ->setFirstName($prenom)
            ->setLastName($nom)
            ->setPhoneNumber($phone)
            ->setUsername("");
            $em->persist($user);
            $em->flush();
        }
        
        
        return new RedirectResponse("/login");
    }
}
