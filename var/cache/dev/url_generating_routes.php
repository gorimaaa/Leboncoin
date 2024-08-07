<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], [], []],
    '_wdt' => [['token'], ['_controller' => 'web_profiler.controller.profiler::toolbarAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_wdt']], [], [], []],
    '_profiler_home' => [[], ['_controller' => 'web_profiler.controller.profiler::homeAction'], [], [['text', '/_profiler/']], [], [], []],
    '_profiler_search' => [[], ['_controller' => 'web_profiler.controller.profiler::searchAction'], [], [['text', '/_profiler/search']], [], [], []],
    '_profiler_search_bar' => [[], ['_controller' => 'web_profiler.controller.profiler::searchBarAction'], [], [['text', '/_profiler/search_bar']], [], [], []],
    '_profiler_phpinfo' => [[], ['_controller' => 'web_profiler.controller.profiler::phpinfoAction'], [], [['text', '/_profiler/phpinfo']], [], [], []],
    '_profiler_xdebug' => [[], ['_controller' => 'web_profiler.controller.profiler::xdebugAction'], [], [['text', '/_profiler/xdebug']], [], [], []],
    '_profiler_font' => [['fontName'], ['_controller' => 'web_profiler.controller.profiler::fontAction'], [], [['text', '.woff2'], ['variable', '/', '[^/\\.]++', 'fontName', true], ['text', '/_profiler/font']], [], [], []],
    '_profiler_search_results' => [['token'], ['_controller' => 'web_profiler.controller.profiler::searchResultsAction'], [], [['text', '/search/results'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    '_profiler_open_file' => [[], ['_controller' => 'web_profiler.controller.profiler::openAction'], [], [['text', '/_profiler/open']], [], [], []],
    '_profiler' => [['token'], ['_controller' => 'web_profiler.controller.profiler::panelAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    '_profiler_router' => [['token'], ['_controller' => 'web_profiler.controller.router::panelAction'], [], [['text', '/router'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    '_profiler_exception' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::body'], [], [['text', '/exception'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    '_profiler_exception_css' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::stylesheet'], [], [['text', '/exception.css'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    'app_add' => [[], ['_controller' => 'App\\Controller\\AddController::index'], [], [['text', '/add']], [], [], []],
    'addAnnonce' => [[], ['_controller' => 'App\\Controller\\AddController::addAnnonce'], [], [['text', '/addAnnonce']], [], [], []],
    'adminAnnonces' => [[], ['_controller' => 'App\\Controller\\AdminController::adminAnnonces'], [], [['text', '/adminAnnonces']], [], [], []],
    'modifyAnnonce' => [['id'], ['_controller' => 'App\\Controller\\AdminController::modifyAnnonce'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/modify']], [], [], []],
    'deleteAnnonce' => [['id'], ['_controller' => 'App\\Controller\\AdminController::deleteAnnonce'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/delete']], [], [], []],
    'changeAnnonce' => [['id'], ['_controller' => 'App\\Controller\\AdminController::change'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/change']], [], [], []],
    'app_all_annonces' => [[], ['_controller' => 'App\\Controller\\AllAnnoncesController::index'], [], [['text', '/allAnnonces']], [], [], []],
    'annonce_detail' => [['id'], ['_controller' => 'App\\Controller\\AllAnnoncesController::detail'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/detailAnnonce']], [], [], []],
    'profil' => [[], ['_controller' => 'App\\Controller\\ProfilController::index'], [], [['text', '/profil']], [], [], []],
    'app_react' => [[], ['_controller' => 'App\\Controller\\ReactController::index'], [], [['text', '/react']], [], [], []],
    'home' => [[], ['_controller' => 'App\\Controller\\RegisterController::index'], [], [['text', '/register']], [], [], []],
    'info_register' => [[], ['_controller' => 'App\\Controller\\RegisterController::infoRegister'], [], [['text', '/info_register']], [], [], []],
    'app_login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/login']], [], [], []],
    'app_logout' => [[], ['_controller' => 'App\\Controller\\SecurityController::logout'], [], [['text', '/logout']], [], [], []],
    'database' => [[], ['_controller' => 'App\\Controller\\TestDatabaseController::index'], [], [['text', '/database']], [], [], []],
    'userAnnonces' => [[], ['_controller' => 'App\\Controller\\UserController::userAnnonces'], [], [['text', '/userAnnonces']], [], [], []],
    'App\Controller\AddController::index' => [[], ['_controller' => 'App\\Controller\\AddController::index'], [], [['text', '/add']], [], [], []],
    'App\Controller\AddController::addAnnonce' => [[], ['_controller' => 'App\\Controller\\AddController::addAnnonce'], [], [['text', '/addAnnonce']], [], [], []],
    'App\Controller\AdminController::adminAnnonces' => [[], ['_controller' => 'App\\Controller\\AdminController::adminAnnonces'], [], [['text', '/adminAnnonces']], [], [], []],
    'App\Controller\AdminController::modifyAnnonce' => [['id'], ['_controller' => 'App\\Controller\\AdminController::modifyAnnonce'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/modify']], [], [], []],
    'App\Controller\AdminController::deleteAnnonce' => [['id'], ['_controller' => 'App\\Controller\\AdminController::deleteAnnonce'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/delete']], [], [], []],
    'App\Controller\AdminController::change' => [['id'], ['_controller' => 'App\\Controller\\AdminController::change'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/change']], [], [], []],
    'App\Controller\AllAnnoncesController::index' => [[], ['_controller' => 'App\\Controller\\AllAnnoncesController::index'], [], [['text', '/allAnnonces']], [], [], []],
    'App\Controller\AllAnnoncesController::detail' => [['id'], ['_controller' => 'App\\Controller\\AllAnnoncesController::detail'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/detailAnnonce']], [], [], []],
    'App\Controller\HomeController::index' => [[], ['_controller' => 'App\\Controller\\RegisterController::index'], [], [['text', '/register']], [], [], []],
    'App\Controller\ProfilController::index' => [[], ['_controller' => 'App\\Controller\\ProfilController::index'], [], [['text', '/profil']], [], [], []],
    'App\Controller\ReactController::index' => [[], ['_controller' => 'App\\Controller\\ReactController::index'], [], [['text', '/react']], [], [], []],
    'App\Controller\RegisterController::index' => [[], ['_controller' => 'App\\Controller\\RegisterController::index'], [], [['text', '/register']], [], [], []],
    'App\Controller\RegisterController::infoRegister' => [[], ['_controller' => 'App\\Controller\\RegisterController::infoRegister'], [], [['text', '/info_register']], [], [], []],
    'App\Controller\SecurityController::login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/login']], [], [], []],
    'App\Controller\SecurityController::logout' => [[], ['_controller' => 'App\\Controller\\SecurityController::logout'], [], [['text', '/logout']], [], [], []],
    'App\Controller\TestDatabaseController::index' => [[], ['_controller' => 'App\\Controller\\TestDatabaseController::index'], [], [['text', '/database']], [], [], []],
    'App\Controller\UserController::userAnnonces' => [[], ['_controller' => 'App\\Controller\\UserController::userAnnonces'], [], [['text', '/userAnnonces']], [], [], []],
];
