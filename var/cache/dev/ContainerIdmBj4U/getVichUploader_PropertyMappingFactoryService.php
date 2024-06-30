<?php

namespace ContainerIdmBj4U;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getVichUploader_PropertyMappingFactoryService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'vich_uploader.property_mapping_factory' shared service.
     *
     * @return \Vich\UploaderBundle\Mapping\PropertyMappingFactory
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Mapping/PropertyMappingFactory.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Mapping/PropertyMappingResolverInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Mapping/PropertyMappingResolver.php';

        return $container->privates['vich_uploader.property_mapping_factory'] = new \Vich\UploaderBundle\Mapping\PropertyMappingFactory(($container->privates['vich_uploader.metadata_reader'] ?? self::getVichUploader_MetadataReaderService($container)), new \Vich\UploaderBundle\Mapping\PropertyMappingResolver($container, [], '_name'));
    }
}
