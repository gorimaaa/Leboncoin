O:41:"Symfony\Component\AssetMapper\MappedAsset":12:{s:10:"sourcePath";s:97:"/home/gorima/lbc/leboncoin2/leboncoin-ur/vendor/symfony/ux-react/assets/dist/render_controller.js";s:10:"publicPath";s:79:"/assets/@symfony/ux-react/render_controller-0e1ac9ab76cef3a8e5f7f21c90688b38.js";s:23:"publicPathWithoutDigest";s:46:"/assets/@symfony/ux-react/render_controller.js";s:15:"publicExtension";s:2:"js";s:7:"content";s:1763:"import React from 'react';
import require$$0 from 'react-dom';
import { Controller } from '@hotwired/stimulus';

var createRoot;

var m = require$$0;
if ('development' === 'production') {
  createRoot = m.createRoot;
  m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

class default_1 extends Controller {
    connect() {
        const props = this.propsValue ? this.propsValue : null;
        this.dispatchEvent('connect', { component: this.componentValue, props: props });
        if (!this.componentValue) {
            throw new Error('No component specified.');
        }
        const component = window.resolveReactComponent(this.componentValue);
        this._renderReactElement(React.createElement(component, props, null));
        this.dispatchEvent('mount', {
            componentName: this.componentValue,
            component: component,
            props: props,
        });
    }
    disconnect() {
        this.element.root.unmount();
        this.dispatchEvent('unmount', {
            component: this.componentValue,
            props: this.propsValue ? this.propsValue : null,
        });
    }
    _renderReactElement(reactElement) {
        const element = this.element;
        if (!element.root) {
            element.root = createRoot(this.element);
        }
        element.root.render(reactElement);
    }
    dispatchEvent(name, payload) {
        this.dispatch(name, { detail: payload, prefix: 'react' });
    }
}
default_1.values = {
    component: String,
    props: Object,
};

export { default_1 as default };
";s:6:"digest";s:32:"0e1ac9ab76cef3a8e5f7f21c90688b38";s:13:"isPredigested";b:0;s:8:"isVendor";b:0;s:55:" Symfony\Component\AssetMapper\MappedAsset dependencies";a:0:{}s:59:" Symfony\Component\AssetMapper\MappedAsset fileDependencies";a:0:{}s:60:" Symfony\Component\AssetMapper\MappedAsset javaScriptImports";a:2:{i:0;O:56:"Symfony\Component\AssetMapper\ImportMap\JavaScriptImport":5:{s:10:"importName";s:5:"react";s:16:"assetLogicalPath";s:27:"vendor/react/react.index.js";s:15:"assetSourcePath";s:75:"/home/gorima/lbc/leboncoin2/leboncoin-ur/assets/vendor/react/react.index.js";s:6:"isLazy";b:0;s:24:"addImplicitlyToImportMap";b:0;}i:1;O:56:"Symfony\Component\AssetMapper\ImportMap\JavaScriptImport":5:{s:10:"importName";s:18:"@hotwired/stimulus";s:16:"assetLogicalPath";s:43:"vendor/@hotwired/stimulus/stimulus.index.js";s:15:"assetSourcePath";s:91:"/home/gorima/lbc/leboncoin2/leboncoin-ur/assets/vendor/@hotwired/stimulus/stimulus.index.js";s:6:"isLazy";b:0;s:24:"addImplicitlyToImportMap";b:0;}}s:11:"logicalPath";s:38:"@symfony/ux-react/render_controller.js";}