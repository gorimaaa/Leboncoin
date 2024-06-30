"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_ProfileUtilisateur_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ProfileUtilisateur.css */ "./assets/styles/ProfileUtilisateur.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _react_controllers_Acceuil_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./react/controllers/Acceuil.jsx */ "./assets/react/controllers/Acceuil.jsx");
/* harmony import */ var _react_controllers_Login_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./react/controllers/Login.jsx */ "./assets/react/controllers/Login.jsx");
/* harmony import */ var _react_controllers_Register_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./react/controllers/Register.jsx */ "./assets/react/controllers/Register.jsx");
/* harmony import */ var _react_controllers_addAnnonce_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./react/controllers/addAnnonce.jsx */ "./assets/react/controllers/addAnnonce.jsx");
/* harmony import */ var _react_controllers_ListeAnnonces_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./react/controllers/ListeAnnonces.jsx */ "./assets/react/controllers/ListeAnnonces.jsx");
/* harmony import */ var _react_controllers_detailsAnnonce_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./react/controllers/detailsAnnonce.jsx */ "./assets/react/controllers/detailsAnnonce.jsx");
/* harmony import */ var _react_controllers_ProfilUtilisateur_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./react/controllers/ProfilUtilisateur.jsx */ "./assets/react/controllers/ProfilUtilisateur.jsx");
/* harmony import */ var _react_controllers_modifierAnnonce_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./react/controllers/modifierAnnonce.jsx */ "./assets/react/controllers/modifierAnnonce.jsx");
/* harmony import */ var _react_controllers_AdminAnnonces_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./react/controllers/AdminAnnonces.jsx */ "./assets/react/controllers/AdminAnnonces.jsx");
/* harmony import */ var _react_controllers_UserAnnonces_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./react/controllers/UserAnnonces.jsx */ "./assets/react/controllers/UserAnnonces.jsx");
















// S'assurez d'avoir un composant Acceuil capable de recevoir 
// les annonces en tant que props
var annonces = JSON.parse(window.annoncesData || '[]');
var annoncesAll = JSON.parse(window.annoncesAllData || '[]');
var allA = JSON.parse(window.allA || '[]');
var userA = JSON.parse(window.allA || '[]');
var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.createBrowserRouter)([{
  path: "/react",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_Acceuil_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    annoncesInitiales: annonces
  })
}, {
  path: "/allAnnonces",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_ListeAnnonces_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    allAnnonces: annoncesAll
  })
}, {
  path: "/detailAnnonce/:id",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_detailsAnnonce_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], null)
}, {
  path: "/login",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_Login_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)
}, {
  path: "/register",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_Register_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null)
}, {
  path: "/add",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_addAnnonce_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)
}, {
  path: "/profil",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_ProfilUtilisateur_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], null)
}, {
  path: "/modify/:id",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_modifierAnnonce_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], null)
}, {
  path: "/adminAnnonces",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_AdminAnnonces_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
    allAnnonces: allA
  })
}, {
  path: "/userAnnonces",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_react_controllers_UserAnnonces_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
    userAnnonces: userA
  })
}]);
var root = react_dom__WEBPACK_IMPORTED_MODULE_4__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.RouterProvider, {
  router: router
})));

/***/ }),

/***/ "./assets/react/controllers/Acceuil.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/Acceuil.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _BarreRecherche__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BarreRecherche */ "./assets/react/controllers/BarreRecherche.jsx");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/ChatIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/UserIcon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/HeartIcon.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Footer */ "./assets/react/controllers/Footer.jsx");
























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







// Acceptez les annonces initiales en tant que props
var Acceuil = function Acceuil(_ref) {
  var annoncesInitiales = _ref.annoncesInitiales;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    termeRecherche = _useState2[0],
    setTermeRecherche = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)("prixCroissant"),
    _useState4 = _slicedToArray(_useState3, 2),
    optionTri = _useState4[0],
    setOptionTri = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    filtre = _useState6[0],
    setFiltre = _useState6[1];

  // Stocke les ID des annonces favorites
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(new Set()),
    _useState8 = _slicedToArray(_useState7, 2),
    favorites = _useState8[0],
    setFavorites = _useState8[1];
  var handleFavoriteClick = function handleFavoriteClick(annonceId) {
    setFavorites(function (prevFavorites) {
      var newFavorites = new Set(prevFavorites);
      if (newFavorites.has(annonceId)) {
        newFavorites["delete"](annonceId);
      } else {
        newFavorites.add(annonceId);
      }
      return newFavorites;
    });
  };
  var annoncesFiltrees = (0,react__WEBPACK_IMPORTED_MODULE_24__.useMemo)(function () {
    var resultats = annoncesInitiales.filter(function (annonce) {
      return annonce.furnitureType.toLowerCase().includes(termeRecherche.toLowerCase());
    });

    // Application du filtre
    if (filtre) {
      switch (filtre) {
        case "demontable":
          resultats = resultats.filter(function (annonce) {
            return annonce.isDismountable;
          });
          break;
        case "nonDemontable":
          resultats = resultats.filter(function (annonce) {
            return !annonce.isDismountable;
          });
          break;
        case "neuf":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Neuf";
          });
          break;
        case "usage":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Usagé";
          });
          break;
        case "endommage":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Endommagé";
          });
          break;
        default:
          // Aucune action si le filtre n'est pas reconnu
          break;
      }
    }

    // Application du tri
    return resultats.sort(function (a, b) {
      if (optionTri === "prixCroissant") return a.price - b.price;
      if (optionTri === "prixDecroissant") return b.price - a.price;
      return 0;
    });
  }, [annoncesInitiales, termeRecherche, optionTri, filtre]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "min-h-screen flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("header", {
    className: "fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("nav", {
    className: "container mx-auto px-4 py-3 flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/react",
    className: "text-4xl font-semibold text-orange-600 hover:text-orange-700"
  }, "LeBonCoin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex justify-center items-center py-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/add",
    className: "bg-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition duration-300",
    style: {
      padding: '0.5rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-gray-200 p-1 rounded",
    style: {
      width: '30px',
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("svg", {
    className: "w-6 h-6 bg-orange-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 4v16m8-8H4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-sm text-white ml-2"
  }, "D\xE9poser une annonce"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: "w-5 h-5 text-gray-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    id: "tri",
    onChange: function onChange(e) {
      return setOptionTri(e.target.value);
    },
    className: "border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "prixCroissant"
  }, "Prix croissant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "prixDecroissant"
  }, "Prix d\xE9croissant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Aucun tri"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: "w-5 h-5 text-gray-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    id: "filtre",
    onChange: function onChange(e) {
      return setFiltre(e.target.value);
    },
    className: "border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Aucun filtre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "demontable"
  }, "D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "nonDemontable"
  }, "Non D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "neuf"
  }, "\xC9tat Neuf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "usage"
  }, "\xC9tat Us\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "endommage"
  }, "\xC9tat Endommag\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_BarreRecherche__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onRecherche: setTermeRecherche
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "ml-auto flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/favoris",
    className: "text-gray-700 hover:text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
    className: "w-7 h-7 bg-transparent"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-xs"
  }, "Favoris")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/messages",
    className: "text-gray-700 hover:text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_30__["default"], {
    className: "w-7 h-7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-xs"
  }, "Messages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/login",
    className: "text-gray-700 hover:text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: "w-7 h-7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-xs"
  }, "Se connecter")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("main", {
    className: "flex-grow container mx-auto px-4 pt-[70px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  }, annoncesFiltrees.map(function (annonce) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      key: annonce.id,
      className: "group relative bg-white p-4 rounded-lg shadow space-y-2"
    }, annonce.photos && annonce.photos.length > 0 ?
    /*#__PURE__*/
    // Afficher uniquement la première photo de la collection
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("img", {
      src: annonce.photos[0].photoPath // Utiliser le premier élément de la collection
      ,
      alt: "Photo principale de ".concat(annonce.furnitureType),
      className: "h-full w-full object-cover object-center"
    })) :
    /*#__PURE__*/
    // Fallback si aucune photo n'est disponible
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", null, "Pas d'image disponible")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", {
      className: "text-lg text-gray-900 font-semibold"
    }, annonce.furnitureType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-gray-500"
    }, annonce.Width, " x ", annonce.Length, " x ", annonce.Height, " cm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-gray-900"
    }, annonce.price, " \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm text-gray-500"
    }, "Date de mise en ligne: ", new Date(annonce.announcementDate).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm ".concat(annonce.furnitureCondition === 'Neuf' ? 'text-green-500' : annonce.furnitureCondition === 'Usagé' ? 'text-orange-500' : 'text-red-500')
    }, "\xC9tat: ", annonce.furnitureCondition, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm text-gray-500"
    }, " propri\xE9taire : ", annonce.user.firstName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "flex justify-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
      onClick: function onClick() {
        return handleFavoriteClick(annonce.id);
      },
      className: "cursor-pointer"
    }, favorites.has(annonce.id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
      className: "w-5 h-5 text-orange-600"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_32__["default"], {
      className: "w-5 h-5 text-gray-700 hover:text-orange-600"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
      href: "/annonces/".concat(annonce.id),
      className: "text-indigo-600 hover:text-indigo-900 text-sm font-semibold"
    }, "Voir d\xE9tails"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/allAnnonces",
    className: "flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", null, "Voir plus d'annonces"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 5l7 7-7 7"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_26__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Acceuil);

/***/ }),

/***/ "./assets/react/controllers/AdminAnnonces.jsx":
/*!****************************************************!*\
  !*** ./assets/react/controllers/AdminAnnonces.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/UserIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js");
/* harmony import */ var _BarreRecherche__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BarreRecherche */ "./assets/react/controllers/BarreRecherche.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/HeartIcon.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Footer */ "./assets/react/controllers/Footer.jsx");
























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var AdminAnnonces = function AdminAnnonces(_ref) {
  var allAnnonces = _ref.allAnnonces;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    termeRecherche = _useState2[0],
    setTermeRecherche = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)("prixCroissant"),
    _useState4 = _slicedToArray(_useState3, 2),
    optionTri = _useState4[0],
    setOptionTri = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    filtre = _useState6[0],
    setFiltre = _useState6[1];

  // Stocke les ID des annonces favorites
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(new Set()),
    _useState8 = _slicedToArray(_useState7, 2),
    favorites = _useState8[0],
    setFavorites = _useState8[1];
  var handleFavoriteClick = function handleFavoriteClick(annonceId) {
    setFavorites(function (prevFavorites) {
      var newFavorites = new Set(prevFavorites);
      if (newFavorites.has(annonceId)) {
        newFavorites["delete"](annonceId);
      } else {
        newFavorites.add(annonceId);
      }
      return newFavorites;
    });
  };
  var annoncesFiltrees = (0,react__WEBPACK_IMPORTED_MODULE_24__.useMemo)(function () {
    var resultats = allAnnonces.filter(function (annonce) {
      return annonce.furnitureType.toLowerCase().includes(termeRecherche.toLowerCase());
    });

    // Application du filtre
    if (filtre) {
      switch (filtre) {
        case "demontable":
          resultats = resultats.filter(function (annonce) {
            return annonce.isDismountable;
          });
          break;
        case "nonDemontable":
          resultats = resultats.filter(function (annonce) {
            return !annonce.isDismountable;
          });
          break;
        case "neuf":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Neuf";
          });
          break;
        case "usage":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Usagé";
          });
          break;
        case "endommage":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Endommagé";
          });
          break;
        default:
          // Aucune action si le filtre n'est pas reconnu
          break;
      }
    }

    // Application du tri
    return resultats.sort(function (a, b) {
      if (optionTri === "prixCroissant") return a.price - b.price;
      if (optionTri === "prixDecroissant") return b.price - a.price;
      return 0;
    });
  }, [allAnnonces, termeRecherche, optionTri, filtre]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "min-h-screen flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("header", {
    className: "fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("nav", {
    className: "container mx-auto px-4 py-3 flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/allAnnonces",
    className: "text-4xl font-semibold text-orange-600 hover:text-orange-700"
  }, "LeBonCoin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: "w-5 h-5 text-gray-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    id: "tri",
    onChange: function onChange(e) {
      return setOptionTri(e.target.value);
    },
    className: "border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "prixCroissant"
  }, "Prix croissant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "prixDecroissant"
  }, "Prix d\xE9croissant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Aucun tri"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: "w-5 h-5 text-gray-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    id: "filtre",
    onChange: function onChange(e) {
      return setFiltre(e.target.value);
    },
    className: "border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Aucun filtre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "demontable"
  }, "D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "nonDemontable"
  }, "Non D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "neuf"
  }, "\xC9tat Neuf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "usage"
  }, "\xC9tat Us\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "endommage"
  }, "\xC9tat Endommag\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_BarreRecherche__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onRecherche: setTermeRecherche
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "ml-auto flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
    href: "/profil",
    className: "text-gray-700 hover:text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
    className: "w-7 h-7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-xs"
  }, "Profil")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("main", {
    className: "flex-grow container mx-auto px-4 pt-[70px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  }, annoncesFiltrees.map(function (annonce) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      key: annonce.id,
      className: "group relative bg-white p-4 rounded-lg shadow space-y-2"
    }, annonce.photos && annonce.photos.length > 0 ?
    /*#__PURE__*/
    // Afficher uniquement la première photo de la collection
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("img", {
      src: annonce.photos[0].photoPath // Utiliser le premier élément de la collection
      ,
      alt: "Photo principale de ".concat(annonce.furnitureType),
      className: "h-full w-full object-cover object-center"
    })) :
    /*#__PURE__*/
    // Fallback si aucune photo n'est disponible
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", null, "Pas d'image disponible")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", {
      className: "text-lg text-gray-900 font-semibold"
    }, annonce.furnitureType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-gray-500"
    }, annonce.Width, " x ", annonce.Length, " x ", annonce.Height, " cm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-gray-900"
    }, annonce.price, " \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm text-gray-500"
    }, "Date de mise en ligne: ", new Date(annonce.announcementDate).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm ".concat(annonce.furnitureCondition === 'Neuf' ? 'text-green-500' : annonce.furnitureCondition === 'Usagé' ? 'text-orange-500' : 'text-red-500')
    }, "\xC9tat: ", annonce.furnitureCondition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm text-gray-500"
    }, "Propri\xE9taire : ", annonce.user.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "flex justify-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
      onClick: function onClick() {
        return handleFavoriteClick(annonce.id);
      },
      className: "cursor-pointer"
    }, favorites.has(annonce.id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_30__["default"], {
      className: "w-5 h-5 text-orange-600"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_31__["default"], {
      className: "w-5 h-5 text-gray-700 hover:text-orange-600"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
      href: "/modify/".concat(annonce.id),
      className: "text-indigo-600 hover:text-indigo-900 text-sm font-semibold"
    }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
      href: "/delete/".concat(annonce.id),
      className: "text-red-600 hover:text-red-900 text-sm font-semibold ml-2"
    }, "Supprimer"));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_26__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminAnnonces);

/***/ }),

/***/ "./assets/react/controllers/BarreRecherche.jsx":
/*!*****************************************************!*\
  !*** ./assets/react/controllers/BarreRecherche.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/SearchIcon.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var BarreRecherche = function BarreRecherche(_ref) {
  var onRecherche = _ref.onRecherche;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    termeRecherche = _useState2[0],
    setTermeRecherche = _useState2[1];
  var handleRecherche = function handleRecherche(e) {
    // Prévenir le rechargement de la page
    e.preventDefault();
    onRecherche(termeRecherche);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("form", {
    onSubmit: handleRecherche,
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "search",
    className: "sr-only"
  }, "Rechercher"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "relative flex items-center w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: "absolute left-3 h-5 w-5 text-gray-500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "text",
    id: "search",
    placeholder: "Recherchez une annonce",
    value: termeRecherche,
    onChange: function onChange(e) {
      return setTermeRecherche(e.target.value);
    },
    className: "w-full rounded-md border-2 border-gray-300 pl-10 p-2 focus:border-indigo-500 focus:ring-indigo-500"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    type: "submit",
    className: "ml-2 rounded-md bg-indigo-600 p-2 text-white hover:bg-indigo-700"
  }, "Rechercher"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarreRecherche);

/***/ }),

/***/ "./assets/react/controllers/Footer.jsx":
/*!*********************************************!*\
  !*** ./assets/react/controllers/Footer.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "bg-gray-800 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "-mx-5 -my-2 flex flex-wrap justify-center",
    "aria-label": "Footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-5 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase"
  }, "\xC0 propos de LeBoncoin"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-8 flex justify-center space-x-6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-8 text-center text-base text-gray-400"
  }, "\xA9 2024 LeBonCoin. Tous droits r\xE9serv\xE9s.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/react/controllers/ListeAnnonces.jsx":
/*!****************************************************!*\
  !*** ./assets/react/controllers/ListeAnnonces.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _BarreRecherche__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BarreRecherche */ "./assets/react/controllers/BarreRecherche.jsx");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/ChatIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/UserIcon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/HeartIcon.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Footer */ "./assets/react/controllers/Footer.jsx");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ListeAnnonces = function ListeAnnonces(_ref) {
  var allAnnonces = _ref.allAnnonces;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    termeRecherche = _useState2[0],
    setTermeRecherche = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)("prixCroissant"),
    _useState4 = _slicedToArray(_useState3, 2),
    optionTri = _useState4[0],
    setOptionTri = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    filtre = _useState6[0],
    setFiltre = _useState6[1];

  // Stocke les ID des annonces favorites
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(new Set()),
    _useState8 = _slicedToArray(_useState7, 2),
    favorites = _useState8[0],
    setFavorites = _useState8[1];
  var handleFavoriteClick = function handleFavoriteClick(annonceId) {
    setFavorites(function (prevFavorites) {
      var newFavorites = new Set(prevFavorites);
      if (newFavorites.has(annonceId)) {
        newFavorites["delete"](annonceId);
      } else {
        newFavorites.add(annonceId);
      }
      return newFavorites;
    });
  };
  var annoncesFiltrees = (0,react__WEBPACK_IMPORTED_MODULE_24__.useMemo)(function () {
    var resultats = allAnnonces.filter(function (annonce) {
      return annonce.furnitureType.toLowerCase().includes(termeRecherche.toLowerCase());
    });

    // Application du filtre
    if (filtre) {
      switch (filtre) {
        case "demontable":
          resultats = resultats.filter(function (annonce) {
            return annonce.isDismountable;
          });
          break;
        case "nonDemontable":
          resultats = resultats.filter(function (annonce) {
            return !annonce.isDismountable;
          });
          break;
        case "neuf":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Neuf";
          });
          break;
        case "usage":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Usagé";
          });
          break;
        case "endommage":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Endommagé";
          });
          break;
        default:
          // Aucune action si le filtre n'est pas reconnu
          break;
      }
    }

    // Application du tri
    return resultats.sort(function (a, b) {
      if (optionTri === "prixCroissant") return a.price - b.price;
      if (optionTri === "prixDecroissant") return b.price - a.price;
      return 0;
    });
  }, [allAnnonces, termeRecherche, optionTri, filtre]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "min-h-screen flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("header", {
    className: "fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("nav", {
    className: "container mx-auto px-4 py-3 flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/allAnnonces",
    className: "text-4xl font-semibold text-orange-600 hover:text-orange-700"
  }, "LeBonCoin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex justify-center items-center py-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/add",
    className: "bg-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition duration-300",
    style: {
      padding: '0.5rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-gray-200 p-1 rounded",
    style: {
      width: '30px',
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("svg", {
    className: "w-6 h-6 bg-orange-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 4v16m8-8H4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-sm text-white ml-2"
  }, "D\xE9poser une annonce"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: "w-5 h-5 text-gray-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    id: "tri",
    onChange: function onChange(e) {
      return setOptionTri(e.target.value);
    },
    className: "border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "prixCroissant"
  }, "Prix croissant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "prixDecroissant"
  }, "Prix d\xE9croissant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Aucun tri"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: "w-5 h-5 text-gray-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    id: "filtre",
    onChange: function onChange(e) {
      return setFiltre(e.target.value);
    },
    className: "border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Aucun filtre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "demontable"
  }, "D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "nonDemontable"
  }, "Non D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "neuf"
  }, "\xC9tat Neuf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "usage"
  }, "\xC9tat Us\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "endommage"
  }, "\xC9tat Endommag\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_BarreRecherche__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onRecherche: setTermeRecherche
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "ml-auto flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/favoris",
    className: "text-gray-700 hover:text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
    className: "w-7 h-7 bg-transparent"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-xs"
  }, "Favoris")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/messages",
    className: "text-gray-700 hover:text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_30__["default"], {
    className: "w-7 h-7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-xs"
  }, "Messages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_31__["default"], {
    href: "/profil",
    className: "text-gray-700 hover:text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "w-7 h-7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-xs"
  }, "Profil")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("main", {
    className: "flex-grow container mx-auto px-4 pt-[70px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  }, annoncesFiltrees.map(function (annonce) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      key: annonce.id,
      className: "group relative bg-white p-4 rounded-lg shadow space-y-2"
    }, annonce.photos && annonce.photos.length > 0 ?
    /*#__PURE__*/
    // Afficher uniquement la première photo de la collection
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("img", {
      src: annonce.photos[0].photoPath // Utiliser le premier élément de la collection
      ,
      alt: "Photo principale de ".concat(annonce.furnitureType),
      className: "h-full w-full object-cover object-center"
    })) :
    /*#__PURE__*/
    // Fallback si aucune photo n'est disponible
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", null, "Pas d'image disponible")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", {
      className: "text-lg text-gray-900 font-semibold"
    }, annonce.furnitureType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-gray-500"
    }, annonce.Width, " x ", annonce.Length, " x ", annonce.Height, " cm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-gray-900"
    }, annonce.price, " \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm text-gray-500"
    }, "Date de mise en ligne: ", new Date(annonce.announcementDate).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm ".concat(annonce.furnitureCondition === 'Neuf' ? 'text-green-500' : annonce.furnitureCondition === 'Usagé' ? 'text-orange-500' : 'text-red-500')
    }, "\xC9tat: ", annonce.furnitureCondition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm text-gray-500"
    }, "Propri\xE9taire : ", annonce.user.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "flex justify-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
      onClick: function onClick() {
        return handleFavoriteClick(annonce.id);
      },
      className: "cursor-pointer"
    }, favorites.has(annonce.id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
      className: "w-5 h-5 text-orange-600"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_33__["default"], {
      className: "w-5 h-5 text-gray-700 hover:text-orange-600"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
      href: "/detailAnnonce/".concat(annonce.id),
      className: "text-indigo-600 hover:text-indigo-900 text-sm font-semibold"
    }, "Voir d\xE9tails"));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_26__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListeAnnonces);

/***/ }),

/***/ "./assets/react/controllers/Login.jsx":
/*!********************************************!*\
  !*** ./assets/react/controllers/Login.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/EyeIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var togglePasswordVisibility = function togglePasswordVisibility() {
    return setShowPassword(!showPassword);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h2", {
    className: "mt-6 text-center text-3xl font-extrabold text-gray-900"
  }, "Connexion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    autoComplete: "email",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    placeholder: "you@example.com"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "mt-1 flex rounded-md shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: showPassword ? "text" : "password",
    name: "password",
    id: "password",
    autoComplete: "current-password",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    placeholder: "entrez votre mot de passe..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", {
    className: "mt-1 inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    type: "button",
    onClick: togglePasswordVisibility,
    className: "focus:outline-none"
  }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: "h-5 w-5"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: "h-5 w-5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    id: "remember_me",
    name: "remember_me",
    type: "checkbox",
    className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "remember_me",
    className: "ml-2 block text-sm text-gray-900"
  }, "Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    href: "/",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Mot de passe oubli\xE9 ?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    type: "submit",
    className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Sign in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "mt-6 text-center"
  }, "Envie de nous rejoindre ?  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
    href: "/register",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, " Cr\xE9er un Compte")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./assets/react/controllers/ProfilUtilisateur.jsx":
/*!********************************************************!*\
  !*** ./assets/react/controllers/ProfilUtilisateur.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");




var ProfilUtilisateur = function ProfilUtilisateur() {
  var user = {
    name: "Massi",
    email: "massi@test.com",
    phone: "+33 621394682",
    admin: false
  };
  var email = JSON.parse(document.getElementById('root').getAttribute('email'));
  var phone = JSON.parse(document.getElementById('root').getAttribute('phone'));
  var firstName = JSON.parse(document.getElementById('root').getAttribute('firstName'));
  var lastName = JSON.parse(document.getElementById('root').getAttribute('lastName'));
  var isAdmin = JSON.parse(document.getElementById('root').getAttribute('isAdmin'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "rootProfile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "header-root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "headingProfile"
  }, "Salut, ", firstName, " !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "greeting"
  }, "Bienvenue ! Bon shopping !")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "profileContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "leftContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
    className: "profileHeadingLeft"
  }, "Aper\xE7u du profil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "profileSection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "leftDetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "profileSubHeading"
  }, "Nom : "), lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "profileSubHeading"
  }, "Pr\xE9nom : "), firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "profileSubHeading"
  }, "Email : "), email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, isAdmin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mesAnnonces"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Toutes les annonces"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    className: "ordersButton",
    href: "/adminAnnonces"
  }, "Voir"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mesAnnonces"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Mes Annonces"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    className: "ordersButton",
    href: "/userAnnonces"
  }, "Voir"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "AjoutAnnonce"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Ajouter une Annonce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    className: "ordersButton",
    href: "/add"
  }, "Ajout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "GererAnnonce"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "rightContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "righHeadings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileHeading"
  }, "Informations Personnelles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileText2"
  }, "Salut ! Voici votre profil, depuis ce profil vous pouvez voir vos annonces et vos informations associ\xE9s \xE0 votre compte ! Vous pouvez aussi ajouter une annonce")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "profileDetials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileHeading"
  }, "Mes Coordonn\xE9es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileText"
  }, "Email: ", email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileText"
  }, "Num\xE9ro de t\xE9l\xE9phone: 0", phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mangeAccount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileHeading"
  }, "Se d\xE9connecter de tous les appareils"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "profileText3"
  }, "Pour acc\xE9der \xE0 nouveau au site web Le BonCoin UR, vous devez fournir vos informations d'identification. Cette action vous d\xE9connectera de tout autre navigateur web que vous avez utilis\xE9 auparavant.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    className: "profileButton",
    href: "/logout"
  }, "D\xE9connexion")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilUtilisateur);

/***/ }),

/***/ "./assets/react/controllers/Register.jsx":
/*!***********************************************!*\
  !*** ./assets/react/controllers/Register.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/PhoneIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/EyeIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Register() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var togglePasswordVisibility = function togglePasswordVisibility() {
    return setShowPassword(!showPassword);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h2", {
    className: "mt-6 text-center text-3xl font-extrabold text-gray-900"
  }, "Inscription")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("form", {
    className: "space-y-6",
    action: "/info_register",
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "nom",
    className: "block text-sm font-medium text-gray-700"
  }, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "text",
    name: "nom",
    id: "nom",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    placeholder: "Entrez votre nom..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "prenom",
    className: "block text-sm font-medium text-gray-700"
  }, "Pr\xE9nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "text",
    name: "prenom",
    id: "prenom",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    placeholder: "Entrez votre pr\xE9nom..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    autoComplete: "email",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    placeholder: "Entrez votre email..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "mt-1 flex rounded-md shadow-sm relative border border-gray-300 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", {
    className: "inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-500 sm:text-sm"
  }, "+33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "tel",
    name: "phone",
    id: "phone",
    autoComplete: "tel",
    required: true,
    pattern: "^[0-9]+$",
    maxLength: "9",
    className: "block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "mt-1 flex rounded-md shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: showPassword ? "text" : "password",
    name: "password",
    id: "password",
    autoComplete: "current-password",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    placeholder: "entrez votre mot de passe..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", {
    className: "mt-1 inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    type: "button",
    onClick: togglePasswordVisibility,
    className: "focus:outline-none"
  }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: "h-5 w-5"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: "h-5 w-5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "mt-1 flex rounded-md shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: showPassword ? "text" : "password",
    name: "confirmPassword",
    id: "password",
    autoComplete: "current-password",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    placeholder: "confirmer votre mot de passe..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", {
    className: "mt-1 inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    type: "button",
    onClick: togglePasswordVisibility,
    className: "focus:outline-none"
  }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: "h-5 w-5"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: "h-5 w-5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    type: "submit",
    className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "S'inscrire"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "mt-6 text-center"
  }, "D\xE9j\xE0 utilisateur ?  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
    to: "/login",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Se connecter")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./assets/react/controllers/UserAnnonces.jsx":
/*!***************************************************!*\
  !*** ./assets/react/controllers/UserAnnonces.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/UserIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js");
/* harmony import */ var _BarreRecherche__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BarreRecherche */ "./assets/react/controllers/BarreRecherche.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/HeartIcon.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Footer */ "./assets/react/controllers/Footer.jsx");
























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var UserAnnonces = function UserAnnonces(_ref) {
  var userAnnonces = _ref.userAnnonces;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    termeRecherche = _useState2[0],
    setTermeRecherche = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)("prixCroissant"),
    _useState4 = _slicedToArray(_useState3, 2),
    optionTri = _useState4[0],
    setOptionTri = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    filtre = _useState6[0],
    setFiltre = _useState6[1];

  // Stocke les ID des annonces favorites
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(new Set()),
    _useState8 = _slicedToArray(_useState7, 2),
    favorites = _useState8[0],
    setFavorites = _useState8[1];
  var handleFavoriteClick = function handleFavoriteClick(annonceId) {
    setFavorites(function (prevFavorites) {
      var newFavorites = new Set(prevFavorites);
      if (newFavorites.has(annonceId)) {
        newFavorites["delete"](annonceId);
      } else {
        newFavorites.add(annonceId);
      }
      return newFavorites;
    });
  };
  var annoncesFiltrees = (0,react__WEBPACK_IMPORTED_MODULE_24__.useMemo)(function () {
    var resultats = userAnnonces.filter(function (annonce) {
      return annonce.furnitureType.toLowerCase().includes(termeRecherche.toLowerCase());
    });

    // Application du filtre
    if (filtre) {
      switch (filtre) {
        case "demontable":
          resultats = resultats.filter(function (annonce) {
            return annonce.isDismountable;
          });
          break;
        case "nonDemontable":
          resultats = resultats.filter(function (annonce) {
            return !annonce.isDismountable;
          });
          break;
        case "neuf":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Neuf";
          });
          break;
        case "usage":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Usagé";
          });
          break;
        case "endommage":
          resultats = resultats.filter(function (annonce) {
            return annonce.furnitureCondition === "Endommagé";
          });
          break;
        default:
          // Aucune action si le filtre n'est pas reconnu
          break;
      }
    }

    // Application du tri
    return resultats.sort(function (a, b) {
      if (optionTri === "prixCroissant") return a.price - b.price;
      if (optionTri === "prixDecroissant") return b.price - a.price;
      return 0;
    });
  }, [userAnnonces, termeRecherche, optionTri, filtre]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "min-h-screen flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("header", {
    className: "fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("nav", {
    className: "container mx-auto px-4 py-3 flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
    to: "/react",
    className: "text-4xl font-semibold text-orange-600 hover:text-orange-700"
  }, "LeBonCoin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: "w-5 h-5 text-gray-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    id: "tri",
    onChange: function onChange(e) {
      return setOptionTri(e.target.value);
    },
    className: "border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "prixCroissant"
  }, "Prix croissant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "prixDecroissant"
  }, "Prix d\xE9croissant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Aucun tri"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: "w-5 h-5 text-gray-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    id: "filtre",
    onChange: function onChange(e) {
      return setFiltre(e.target.value);
    },
    className: "border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Aucun filtre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "demontable"
  }, "D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "nonDemontable"
  }, "Non D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "neuf"
  }, "\xC9tat Neuf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "usage"
  }, "\xC9tat Us\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: "endommage"
  }, "\xC9tat Endommag\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_BarreRecherche__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onRecherche: setTermeRecherche
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "ml-auto flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
    href: "/profil",
    className: "text-gray-700 hover:text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_29__["default"], {
    className: "w-7 h-7"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "text-xs"
  }, "Profil")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("main", {
    className: "flex-grow container mx-auto px-4 pt-[70px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  }, annoncesFiltrees.map(function (annonce) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      key: annonce.id,
      className: "group relative bg-white p-4 rounded-lg shadow space-y-2"
    }, annonce.photos && annonce.photos.length > 0 ?
    /*#__PURE__*/
    // Afficher uniquement la première photo de la collection
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("img", {
      src: annonce.photos[0].photoPath // Utiliser le premier élément de la collection
      ,
      alt: "Photo principale de ".concat(annonce.furnitureType),
      className: "h-full w-full object-cover object-center"
    })) :
    /*#__PURE__*/
    // Fallback si aucune photo n'est disponible
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", null, "Pas d'image disponible")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", {
      className: "text-lg text-gray-900 font-semibold"
    }, annonce.furnitureType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-gray-500"
    }, annonce.Width, " x ", annonce.Length, " x ", annonce.Height, " cm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-gray-900"
    }, annonce.price, " \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm text-gray-500"
    }, "Date de mise en ligne: ", new Date(annonce.announcementDate).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm ".concat(annonce.furnitureCondition === 'Neuf' ? 'text-green-500' : annonce.furnitureCondition === 'Usagé' ? 'text-orange-500' : 'text-red-500')
    }, "\xC9tat: ", annonce.furnitureCondition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
      className: "text-sm text-gray-500"
    }, "Propri\xE9taire : ", annonce.user.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "flex justify-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
      onClick: function onClick() {
        return handleFavoriteClick(annonce.id);
      },
      className: "cursor-pointer"
    }, favorites.has(annonce.id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_30__["default"], {
      className: "w-5 h-5 text-orange-600"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_31__["default"], {
      className: "w-5 h-5 text-gray-700 hover:text-orange-600"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
      href: "/modify/".concat(annonce.id),
      className: "text-indigo-600 hover:text-indigo-900 text-sm font-semibold"
    }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
      href: "/delete/".concat(annonce.id),
      className: "text-red-600 hover:text-red-900 text-sm font-semibold ml-2"
    }, "Supprimer"));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_26__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAnnonces);

/***/ }),

/***/ "./assets/react/controllers/addAnnonce.jsx":
/*!*************************************************!*\
  !*** ./assets/react/controllers/addAnnonce.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/PhotographIcon.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }















































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Addannonce() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_47__.useState)({
      typeMeuble: "",
      longueur: "",
      largeur: "",
      hauteur: "",
      description: "",
      demontable: "1",
      lieuStockage: "",
      Price: "",
      conditionDeplacement: "",
      etat: "neuf",
      isRepairable: "1",
      photos: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    annonce = _useState2[0],
    setAnnonce = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_47__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    photos = _useState4[0],
    setPhotos = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_47__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    previewImages = _useState6[0],
    setPreviewImages = _useState6[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_48__.useNavigate)();
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setAnnonce(_objectSpread(_objectSpread({}, annonce), {}, _defineProperty({}, name, value)));
  };
  var handlePhotoChange = function handlePhotoChange(event) {
    if (event.target.files) {
      // Convertir les fichiers téléchargés en tableau et filtrer les doublons
      var newPhotosArray = Array.from(event.target.files).filter(function (file) {
        return !photos.some(function (photo) {
          return photo.name === file.name;
        });
      });

      // Ajouter les nouvelles photos à l'état actuel, sans dépasser 10 images
      setPhotos(function (photos) {
        return [].concat(_toConsumableArray(photos), _toConsumableArray(newPhotosArray)).slice(0, 10);
      });

      // Prévisualiser les images
      var newPreviewImages = newPhotosArray.map(function (file) {
        return URL.createObjectURL(file);
      });
      setPreviewImages(function (prevImages) {
        return [].concat(_toConsumableArray(prevImages), _toConsumableArray(newPreviewImages));
      });
    }
  };
  var handleRemovePhoto = function handleRemovePhoto(name) {
    // Mettre à jour l'état des photos et des aperçus
    setPhotos(function (photos) {
      return photos.filter(function (photo) {
        return photo.name !== name;
      });
    });
    setPreviewImages(function (prevImages) {
      return prevImages.filter(function (url) {
        // Créer un objet File à partir de l'URL pour accéder à `name`
        var matches = url.match(/blob:(.*)$/);
        if (matches && matches[1]) {
          var file = new File([""], name);
          return URL.createObjectURL(file) !== url;
        }
        return true;
      });
    });
  };

  // Utilisez cette fonction pour nettoyer les URLs lors du démontage du composant
  (0,react__WEBPACK_IMPORTED_MODULE_47__.useEffect)(function () {
    return function () {
      previewImages.forEach(function (image) {
        return URL.revokeObjectURL(image);
      });
    };
  }, [previewImages]);
  var renderPhotos = function renderPhotos() {
    return photos.map(function (photo, index) {
      var photoURL = URL.createObjectURL(photo);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
        key: photo.name,
        className: "relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("img", {
        src: photoURL,
        alt: "Aper\xE7u ".concat(index),
        className: "w-24 h-24 object-cover"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("button", {
        type: "button",
        onClick: function onClick() {
          return handleRemovePhoto(photo.name);
        },
        className: "absolute top-0 right-0 bg-red-100 p-1 rounded-full"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_49__["default"], {
        className: "h-4 w-4 text-red-600"
      })));
    });
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.prev = 1;
            _context.next = 4;
            return fetch("/addAnnonce", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(annonce)
            });
          case 4:
            response = _context.sent;
            if (response.ok) {
              alert("Ajout réussi");
            } else {
              alert("L'ajout a échoué! " + response.status);
              console.log(response);
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("Erreur lors de la soumission du formulaire", _context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement((react__WEBPACK_IMPORTED_MODULE_47___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("header", {
    className: "fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("nav", {
    className: "container mx-auto px-4 py-3 flex items-center justify-between text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_50__["default"], {
    href: "/allAnnonces",
    className: "text-4xl font-semibold text-orange-600 hover:text-orange-700"
  }, "LeBonCoin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "text",
    className: "text-3xl font-medium text-gray-800 flex-grow"
  }, "D\xE9poser votre annonce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_50__["default"], {
    href: "/allAnnonces",
    className: "rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-800 shadow-sm border border-gray-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Quitter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "max-w-4xl mx-auto my-5 bg-white p-8 rounded-lg shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "pt-[4rem]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "sm:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "typeMeuble",
    className: "block text-sm font-semibold text-gray-700"
  }, "Type de meuble"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("input", {
    type: "text",
    id: "typeMeuble",
    name: "typeMeuble",
    min: "0",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    value: annonce.typeMeuble,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "longueur",
    className: "block text-sm font-semibold text-gray-700"
  }, "Longueur (cm)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("input", {
    type: "text",
    id: "longueur",
    name: "longueur",
    min: "0",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    value: annonce.longueur,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "largeur",
    className: "block text-sm font-semibold text-gray-700"
  }, "Largeur (cm)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("input", {
    type: "text",
    id: "largeur",
    name: "largeur",
    min: "0",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    value: annonce.largeur,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "hauteur",
    className: "block text-sm font-semibold text-gray-700"
  }, "Hauteur (cm)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("input", {
    type: "text",
    id: "hauteur",
    name: "hauteur",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    value: annonce.hauteur,
    onChange: handleInputChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "description",
    className: "block text-sm font-semibold text-gray-700"
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("textarea", {
    id: "description",
    name: "description",
    rows: "4",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    value: annonce.description,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "demontable",
    className: "block text-sm font-semibold text-gray-700"
  }, "D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("select", {
    id: "demontable",
    name: "demontable",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    value: annonce.demontable,
    onChange: handleInputChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("option", {
    value: "1"
  }, "Oui"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("option", {
    value: "0"
  }, "Non"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "isRepairable",
    className: "block text-sm font-semibold text-gray-700"
  }, "R\xE9parable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("select", {
    id: "isRepairable",
    name: "isRepairable",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    onChange: handleInputChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("option", {
    value: "1"
  }, "Oui"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("option", {
    value: "0"
  }, "Non"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "lieuStockage",
    className: "block text-sm font-semibold text-gray-700"
  }, "Lieu de stockage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("input", {
    type: "text",
    id: "lieuStockage",
    name: "lieuStockage",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    value: annonce.lieuStockage,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "conditionDeplacement",
    className: "block text-sm font-semibold text-gray-700"
  }, "Condition de d\xE9placement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("input", {
    type: "text",
    id: "conditionDeplacement",
    name: "conditionDeplacement",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    value: annonce.conditionDeplacement,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "etat",
    className: "block text-sm font-semibold text-gray-700"
  }, "\xC9tat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("select", {
    id: "etat",
    name: "etat",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: "neuf",
    onChange: handleInputChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("option", {
    value: "neuf"
  }, "Neuf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("option", {
    value: "usag\xE9"
  }, "Usag\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("option", {
    value: "endommag\xE9"
  }, "Endommag\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "Price",
    className: "block text-sm font-semibold text-gray-700"
  }, "Prix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("input", {
    type: "text",
    id: "Price",
    name: "Price",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: annonce.price,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "photo-upload",
    className: "block text-sm font-semibold text-gray-700 mb-4"
  }, "Ajouter des photos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "flex flex-wrap gap-4 justify-center mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "flex flex-wrap gap-4 justify-center border-2 border-dashed border-gray-300 rounded-lg p-4"
  }, renderPhotos(), photos.length < 10 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("label", {
    htmlFor: "photo-upload",
    className: "cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "flex items-center justify-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_51__["default"], {
    className: "h-10 w-10 text-gray-400"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("input", {
    id: "photo-upload",
    type: "file",
    multiple: true,
    onChange: handlePhotoChange,
    className: "hidden",
    accept: "image/*"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("div", {
    className: "flex justify-end mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_47___default().createElement("button", {
    type: "submit",
    className: "inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
  }, "Publier l'annonce")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Addannonce);

/***/ }),

/***/ "./assets/react/controllers/detailsAnnonce.jsx":
/*!*****************************************************!*\
  !*** ./assets/react/controllers/detailsAnnonce.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/MapIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/HeartIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/PhotographIcon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var DetailAnnonce = function DetailAnnonce() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    annonceDetail = _useState2[0],
    setAnnonce = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    // Simuler un appel réseau pour récupérer les détails
    fetch("/detailAnnonce/".concat(id)) // Assurez-vous que cette URL est gérée par Symfony pour retourner les détails de l'annonce
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Data received:', data); // Vérifiez ce qui est imprimé ici
      setAnnonce(data);
    })["catch"](function (error) {
      return console.error('Erreur lors du chargement de l\'annonce', error);
    });
  }, [id]);
  if (annonceDetail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", null, "Chargement des d\xE9tails...");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "bg-white shadow overflow-hidden sm:rounded-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "px-4 py-5 sm:px-6 flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, annonceDetail.furnitureType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "flex items-center space-x-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
    className: "text-lg text-gray-900"
  }, annonceDetail.price, " \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
  }, annonceDetail.furnitureCondition)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("p", {
    className: "text-sm text-gray-500"
  }, new Date(date).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "border-t border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("dl", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
  }, annonceDetail.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Localisation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
    className: "ml-2"
  }, location))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Vendeur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
  }, annonceDetail.firstName, " ", annonceDetail.lastName)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "px-4 py-4 sm:px-6 flex justify-end space-x-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("button", {
    type: "button",
    className: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
    className: "ml-2"
  }, "Contacter le vendeur")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("button", {
    type: "button",
    className: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_23__["default"], {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
    className: "ml-2"
  }, "Ajouter aux favoris")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("button", {
    type: "button",
    className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: "h-5 w-5 text-white",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
    className: "ml-2"
  }, "Voir les photos"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailAnnonce);

/***/ }),

/***/ "./assets/react/controllers/modifierAnnonce.jsx":
/*!******************************************************!*\
  !*** ./assets/react/controllers/modifierAnnonce.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











































function Modify() {
  var dataAnnonce = JSON.parse(data);
  console.log(data);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)({
      typeMeuble: dataAnnonce.furnitureType,
      longueur: dataAnnonce.Length,
      largeur: dataAnnonce.Width,
      hauteur: dataAnnonce.Height,
      description: dataAnnonce.description,
      demontable: dataAnnonce.isDismountable,
      lieuStockage: dataAnnonce.storageLocation,
      Price: dataAnnonce.price,
      conditionDeplacement: dataAnnonce.movementCondition,
      etat: dataAnnonce.furnitureCondition,
      status: dataAnnonce.announcementStatus,
      isRepairable: dataAnnonce.isRepairable
    }),
    _useState2 = _slicedToArray(_useState, 2),
    annonce = _useState2[0],
    setAnnonce = _useState2[1];
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setAnnonce(_objectSpread(_objectSpread({}, annonce), {}, _defineProperty({}, name, value)));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.prev = 1;
            _context.next = 4;
            return fetch("/change/" + dataAnnonce.id, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(annonce)
            });
          case 4:
            response = _context.sent;
            if (response.ok) {
              alert("Modification réussi");
            } else {
              alert("La modification a échoué!");
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("Erreur lors de la soumission du formulaire", _context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement((react__WEBPACK_IMPORTED_MODULE_40___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("header", {
    className: "fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("nav", {
    className: "container mx-auto px-4 py-3 flex items-center justify-between text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.Link, {
    to: "/add",
    className: "text-4xl font-semibold text-orange-600 hover:text-orange-700"
  }, "Leboncoin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "text",
    className: "text-3xl font-medium text-gray-800 flex-grow"
  }, "Modifier l'annonce, laissez le champs inchang\xE9 pour ne rien modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_42__["default"], {
    href: "/adminAnnonces",
    className: "rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-800 shadow-sm border border-gray-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Quitter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "max-w-4xl mx-auto my-5 bg-white p-8 rounded-lg shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "pt-[4rem]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "sm:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "typeMeuble",
    className: "block text-sm font-semibold text-gray-700"
  }, "Type de meuble"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
    type: "text",
    id: "typeMeuble",
    name: "typeMeuble",
    min: "0",
    defaultValue: dataAnnonce.furnitureType,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "longueur",
    className: "block text-sm font-semibold text-gray-700"
  }, "Longueur (cm)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
    type: "text",
    id: "longueur",
    name: "longueur",
    min: "0",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.Length,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "largeur",
    className: "block text-sm font-semibold text-gray-700"
  }, "Largeur (cm)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
    type: "text",
    id: "largeur",
    name: "largeur",
    min: "0",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.Width,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "hauteur",
    className: "block text-sm font-semibold text-gray-700"
  }, "Hauteur (cm)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
    type: "text",
    id: "hauteur",
    name: "hauteur",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.Height,
    onChange: handleInputChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "description",
    className: "block text-sm font-semibold text-gray-700"
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("textarea", {
    id: "description",
    name: "description",
    rows: "4",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.description,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "demontable",
    className: "block text-sm font-semibold text-gray-700"
  }, "D\xE9montable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("select", {
    id: "demontable",
    name: "demontable",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    onChange: handleInputChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: dataAnnonce.isDismountable ? "1" : "0",
    selected: true,
    disabled: true,
    hidden: true
  }, dataAnnonce.isDismountable ? "Oui" : "Non"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "1"
  }, "Oui"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "0"
  }, "Non"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "lieuStockage",
    className: "block text-sm font-semibold text-gray-700"
  }, "Lieu de stockage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
    type: "text",
    id: "lieuStockage",
    name: "lieuStockage",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.storageLocation,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "Price",
    className: "block text-sm font-semibold text-gray-700"
  }, "Prix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
    type: "text",
    id: "Price",
    name: "Price",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.price,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "conditionDeplacement",
    className: "block text-sm font-semibold text-gray-700"
  }, "Condition de d\xE9placement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
    type: "text",
    id: "conditionDeplacement",
    name: "conditionDeplacement",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.movementCondition,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "etat",
    className: "block text-sm font-semibold text-gray-700"
  }, "\xC9tat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("select", {
    id: "etat",
    name: "etat",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.furnitureCondition,
    onChange: handleInputChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: dataAnnonce.furnitureCondition,
    selected: true,
    disabled: true,
    hidden: true
  }, dataAnnonce.furnitureCondition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "Neuf"
  }, "Neuf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "Usag\xE9"
  }, "Usag\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "Endommag\xE9"
  }, "Endommag\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "status",
    className: "block text-sm font-semibold text-gray-700"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("select", {
    id: "status",
    name: "status",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    defaultValue: dataAnnonce.announcementStatus,
    onChange: handleInputChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: dataAnnonce.announcementStatus,
    selected: true,
    disabled: true,
    hidden: true
  }, dataAnnonce.announcementStatus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "Active"
  }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "Archiv\xE9"
  }, "Archiv\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "Donn\xE9"
  }, "Donn\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "D\xE9truit"
  }, "D\xE9truit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
    htmlFor: "isRepairable",
    className: "block text-sm font-semibold text-gray-700"
  }, "R\xE9parable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("select", {
    id: "isRepairable",
    name: "isRepairable",
    required: true,
    className: "mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3",
    onChange: handleInputChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: dataAnnonce.isRepairable ? "1" : "0",
    selected: true,
    disabled: true,
    hidden: true
  }, dataAnnonce.isRepairable ? "Oui" : "Non"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "1"
  }, "Oui"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
    value: "0"
  }, "Non"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "flex justify-end mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("button", {
    type: "submit",
    className: "inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
  }, "Modifier l'annonce")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modify);

/***/ }),

/***/ "./assets/styles/ProfileUtilisateur.css":
/*!**********************************************!*\
  !*** ./assets/styles/ProfileUtilisateur.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_material_Button_Button_js-node_modules_react-router-dom_dist_index_j-a0c25c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM7SUFDbkJFLFFBQVE7SUFDUnJELFNBQVMsRUFBQyxvSUFBb0k7SUFDOUllLFFBQVEsRUFBRXdOO0VBQWtCLGdCQUU1QjdULDJEQUFBO0lBQVF3RyxLQUFLLEVBQUU2USxXQUFXLENBQUM5RCxZQUFZLEdBQUcsR0FBRyxHQUFHLEdBQUk7SUFBQ2tFLFFBQVE7SUFBQ0MsUUFBUTtJQUFDQyxNQUFNO0VBQUEsR0FBRU4sV0FBVyxDQUFDOUQsWUFBWSxHQUFHLEtBQUssR0FBRyxLQUFjLENBQUMsZUFDakl2VCwyREFBQTtJQUFRd0csS0FBSyxFQUFDO0VBQUcsR0FBQyxLQUFXLENBQUMsZUFDOUJ4RywyREFBQTtJQUFRd0csS0FBSyxFQUFDO0VBQUcsR0FBQyxLQUFXLENBQ3ZCLENBQ0wsQ0FBQyxlQUlOeEcsMkRBQUE7SUFBS3NGLFNBQVMsRUFBQztFQUF1QixnQkFDcEN0RiwyREFBQTtJQUNFZ0ksSUFBSSxFQUFDLFFBQVE7SUFDYjFDLFNBQVMsRUFBQztFQUFnTyxHQUMzTyxvQkFFTyxDQUNMLENBQ0QsQ0FDSCxDQUFHLENBQUM7QUFFZjtBQUVBLGlFQUFlOFIsTUFBTTs7Ozs7Ozs7Ozs7QUMxUnJCOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0FjY2V1aWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9BZG1pbkFubm9uY2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQmFycmVSZWNoZXJjaGUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9MaXN0ZUFubm9uY2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTG9naW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Qcm9maWxVdGlsaXNhdGV1ci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1JlZ2lzdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvVXNlckFubm9uY2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRkQW5ub25jZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2RldGFpbHNBbm5vbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbW9kaWZpZXJBbm5vbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL1Byb2ZpbGVVdGlsaXNhdGV1ci5jc3M/YTMzOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL1Byb2ZpbGVVdGlsaXNhdGV1ci5jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFjY2V1aWwgZnJvbSAnLi9yZWFjdC9jb250cm9sbGVycy9BY2NldWlsLmpzeCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9yZWFjdC9jb250cm9sbGVycy9Mb2dpbi5qc3gnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vcmVhY3QvY29udHJvbGxlcnMvUmVnaXN0ZXIuanN4JztcbmltcG9ydCBBZGQgZnJvbSAnLi9yZWFjdC9jb250cm9sbGVycy9hZGRBbm5vbmNlLmpzeCc7XG5pbXBvcnQgQWxsIGZyb20gJy4vcmVhY3QvY29udHJvbGxlcnMvTGlzdGVBbm5vbmNlcy5qc3gnO1xuaW1wb3J0IERldGFpbCBmcm9tICcuL3JlYWN0L2NvbnRyb2xsZXJzL2RldGFpbHNBbm5vbmNlLmpzeCc7XG5pbXBvcnQgUHJvZmlsIGZyb20gJy4vcmVhY3QvY29udHJvbGxlcnMvUHJvZmlsVXRpbGlzYXRldXIuanN4JztcbmltcG9ydCBNb2RpZnlBbm5vbmNlIGZyb20gJy4vcmVhY3QvY29udHJvbGxlcnMvbW9kaWZpZXJBbm5vbmNlLmpzeCc7XG5pbXBvcnQgQWRtaW5Bbm5vbmNlcyBmcm9tICcuL3JlYWN0L2NvbnRyb2xsZXJzL0FkbWluQW5ub25jZXMuanN4JztcbmltcG9ydCBVc2VyQW5ub25jZXMgZnJvbSAnLi9yZWFjdC9jb250cm9sbGVycy9Vc2VyQW5ub25jZXMuanN4Jztcbi8vIFMnYXNzdXJleiBkJ2F2b2lyIHVuIGNvbXBvc2FudCBBY2NldWlsIGNhcGFibGUgZGUgcmVjZXZvaXIgXG4vLyBsZXMgYW5ub25jZXMgZW4gdGFudCBxdWUgcHJvcHNcbmNvbnN0IGFubm9uY2VzID0gSlNPTi5wYXJzZSh3aW5kb3cuYW5ub25jZXNEYXRhIHx8ICdbXScpO1xuY29uc3QgYW5ub25jZXNBbGwgPSBKU09OLnBhcnNlKHdpbmRvdy5hbm5vbmNlc0FsbERhdGEgfHwgJ1tdJyk7XG5jb25zdCBhbGxBID0gSlNPTi5wYXJzZSh3aW5kb3cuYWxsQSB8fCAnW10nKTtcbmNvbnN0IHVzZXJBID0gSlNPTi5wYXJzZSh3aW5kb3cuYWxsQSB8fCAnW10nKTtcblxuIFxuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcbiAge1xuICAgIHBhdGg6IFwiL3JlYWN0XCIsXG4gICAgZWxlbWVudDogPEFjY2V1aWwgYW5ub25jZXNJbml0aWFsZXM9e2Fubm9uY2VzfSAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6XCIvYWxsQW5ub25jZXNcIixcbiAgICBlbGVtZW50OiA8QWxsIGFsbEFubm9uY2VzPXthbm5vbmNlc0FsbH0gLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9kZXRhaWxBbm5vbmNlLzppZFwiLFxuICAgIGVsZW1lbnQ6IDxEZXRhaWwgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9sb2dpblwiLFxuICAgIGVsZW1lbnQ6PExvZ2luIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDpcIi9yZWdpc3RlclwiLCBcbiAgICBlbGVtZW50OjxSZWdpc3Rlci8+LFxuICB9LFxuICB7XG4gICAgcGF0aDpcIi9hZGRcIixcbiAgICBlbGVtZW50OjxBZGQvPlxuICB9LFxuICB7XG4gICAgcGF0aDpcIi9wcm9maWxcIixcbiAgICBlbGVtZW50OjxQcm9maWwvPlxuICB9LFxuICB7XG4gICAgcGF0aDpcIi9tb2RpZnkvOmlkXCIsXG4gICAgZWxlbWVudDo8TW9kaWZ5QW5ub25jZS8+XG4gIH0sXG4gIHtcbiAgICBwYXRoOlwiL2FkbWluQW5ub25jZXNcIixcbiAgICBlbGVtZW50OjxBZG1pbkFubm9uY2VzIGFsbEFubm9uY2VzPXthbGxBfS8+XG4gIH0sXG4gIHtcbiAgICBwYXRoOlwiL3VzZXJBbm5vbmNlc1wiLFxuICAgIGVsZW1lbnQ6PFVzZXJBbm5vbmNlcyB1c2VyQW5ub25jZXM9e3VzZXJBfS8+XG4gIH0sXG5cbl0pO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFycmVSZWNoZXJjaGUgZnJvbSBcIi4vQmFycmVSZWNoZXJjaGVcIjtcbmltcG9ydCB7IFNlYXJjaEljb24sIEhlYXJ0SWNvbiwgVXNlckljb24sIENoYXRJY29uLCBTZWxlY3Rvckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgSGVhcnRJY29uIGFzIE91dGxpbmVIZWFydEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cblxuLy8gQWNjZXB0ZXogbGVzIGFubm9uY2VzIGluaXRpYWxlcyBlbiB0YW50IHF1ZSBwcm9wc1xuY29uc3QgQWNjZXVpbCA9ICh7IGFubm9uY2VzSW5pdGlhbGVzIH0pID0+IHtcbiAgY29uc3QgW3Rlcm1lUmVjaGVyY2hlLCBzZXRUZXJtZVJlY2hlcmNoZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29wdGlvblRyaSwgc2V0T3B0aW9uVHJpXSA9IHVzZVN0YXRlKFwicHJpeENyb2lzc2FudFwiKTtcbiAgY29uc3QgW2ZpbHRyZSwgc2V0RmlsdHJlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIFN0b2NrZSBsZXMgSUQgZGVzIGFubm9uY2VzIGZhdm9yaXRlc1xuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGUobmV3IFNldCgpKTsgXG5cbiAgY29uc3QgaGFuZGxlRmF2b3JpdGVDbGljayA9IChhbm5vbmNlSWQpID0+IHtcbiAgICBzZXRGYXZvcml0ZXMoKHByZXZGYXZvcml0ZXMpID0+IHtcbiAgICAgIGNvbnN0IG5ld0Zhdm9yaXRlcyA9IG5ldyBTZXQocHJldkZhdm9yaXRlcyk7XG4gICAgICBpZiAobmV3RmF2b3JpdGVzLmhhcyhhbm5vbmNlSWQpKSB7XG4gICAgICAgIG5ld0Zhdm9yaXRlcy5kZWxldGUoYW5ub25jZUlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0Zhdm9yaXRlcy5hZGQoYW5ub25jZUlkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdGYXZvcml0ZXM7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYW5ub25jZXNGaWx0cmVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCByZXN1bHRhdHMgPSBhbm5vbmNlc0luaXRpYWxlcy5maWx0ZXIoYW5ub25jZSA9PiBcbiAgICAgIGFubm9uY2UuZnVybml0dXJlVHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm1lUmVjaGVyY2hlLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcblxuICAgIC8vIEFwcGxpY2F0aW9uIGR1IGZpbHRyZVxuICAgIGlmIChmaWx0cmUpIHtcbiAgICAgIHN3aXRjaCAoZmlsdHJlKSB7XG4gICAgICAgIGNhc2UgXCJkZW1vbnRhYmxlXCI6XG4gICAgICAgICAgcmVzdWx0YXRzID0gcmVzdWx0YXRzLmZpbHRlcihhbm5vbmNlID0+IGFubm9uY2UuaXNEaXNtb3VudGFibGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibm9uRGVtb250YWJsZVwiOlxuICAgICAgICAgIHJlc3VsdGF0cyA9IHJlc3VsdGF0cy5maWx0ZXIoYW5ub25jZSA9PiAhYW5ub25jZS5pc0Rpc21vdW50YWJsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJuZXVmXCI6XG4gICAgICAgICAgcmVzdWx0YXRzID0gcmVzdWx0YXRzLmZpbHRlcihhbm5vbmNlID0+IGFubm9uY2UuZnVybml0dXJlQ29uZGl0aW9uID09PSBcIk5ldWZcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ1c2FnZVwiOlxuICAgICAgICAgIHJlc3VsdGF0cyA9IHJlc3VsdGF0cy5maWx0ZXIoYW5ub25jZSA9PiBhbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbiA9PT0gXCJVc2Fnw6lcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlbmRvbW1hZ2VcIjpcbiAgICAgICAgICByZXN1bHRhdHMgPSByZXN1bHRhdHMuZmlsdGVyKGFubm9uY2UgPT4gYW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb24gPT09IFwiRW5kb21tYWfDqVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBBdWN1bmUgYWN0aW9uIHNpIGxlIGZpbHRyZSBuJ2VzdCBwYXMgcmVjb25udVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGxpY2F0aW9uIGR1IHRyaVxuICAgIHJldHVybiByZXN1bHRhdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKG9wdGlvblRyaSA9PT0gXCJwcml4Q3JvaXNzYW50XCIpICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xuICAgICAgaWYgKG9wdGlvblRyaSA9PT0gXCJwcml4RGVjcm9pc3NhbnRcIikgcmV0dXJuIGIucHJpY2UgLSBhLnByaWNlO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH0sIFthbm5vbmNlc0luaXRpYWxlcywgdGVybWVSZWNoZXJjaGUsIG9wdGlvblRyaSwgZmlsdHJlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICB7LyogSGVhZGVyIGF2ZWMgbGEgbG9naXF1ZSBkJ2ltcG9ydGF0aW9uIGRlIGwnaWPDtG5lICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBzaGFkb3cgei0xMFwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPExpbmsgdG89XCIvcmVhY3RcIiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS03MDBcIj5cbiAgICAgICAgICBMZUJvbkNvaW5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHktMVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvYWRkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGhvdmVyOmJvcmRlci1ncmF5LTQwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiIFxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMC41cmVtJyB9fSBcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTEgcm91bmRlZFwiIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnIH19PlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgYmctb3JhbmdlLTUwMFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA0djE2bTgtOEg0XCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgbWwtMlwiPkTDqXBvc2VyIHVuZSBhbm5vbmNlPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIETDqXBsYWNlciBsZXMgc8OpbGVjdGV1cnMgZGUgdHJpIGV0IGZpbHRyZSBpY2kgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xXCI+XG4gICAgICAgICAgICAgIDxTZWxlY3Rvckljb24gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNjAwXCIgLz5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwidHJpXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9wdGlvblRyaShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMSBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLW9yYW5nZS01MDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLW9yYW5nZS0yMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXhDcm9pc3NhbnRcIj5Qcml4IGNyb2lzc2FudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcml4RGVjcm9pc3NhbnRcIj5Qcml4IGTDqWNyb2lzc2FudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BdWN1biB0cmk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdG9ySWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS02MDBcIiAvPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJmaWx0cmVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmlsdHJlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0xIHNoYWRvdy1zbSBmb2N1czpib3JkZXItb3JhbmdlLTUwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctb3JhbmdlLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QXVjdW4gZmlsdHJlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlbW9udGFibGVcIj5Ew6ltb250YWJsZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25EZW1vbnRhYmxlXCI+Tm9uIETDqW1vbnRhYmxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ldWZcIj7DiXRhdCBOZXVmPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVzYWdlXCI+w4l0YXQgVXPDqTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbmRvbW1hZ2VcIj7DiXRhdCBFbmRvbW1hZ8OpPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBJY8O0bmVzIGV0IGJhcnJlIGRlIHJlY2hlcmNoZSAqL31cbiAgICAgICAgICAgIDxCYXJyZVJlY2hlcmNoZSBvblJlY2hlcmNoZT17c2V0VGVybWVSZWNoZXJjaGV9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIHsvKiBGYXZvcmlzICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZmF2b3Jpc1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgPEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJ3LTcgaC03IGJnLXRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPkZhdm9yaXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgey8qIE1lc3NhZ2VzICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWVzc2FnZXNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxDaGF0SWNvbiBjbGFzc05hbWU9XCJ3LTcgaC03XCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPk1lc3NhZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHsvKiBTZSBjb25uZWN0ZXIgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgPFVzZXJJY29uIGNsYXNzTmFtZT1cInctNyBoLTdcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+U2UgY29ubmVjdGVyPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgXG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBjb250YWluZXIgbXgtYXV0byBweC00IHB0LVs3MHB4XVwiPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgcHktMTYgc206cHgtNiBsZzpweC04XCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC14LTYgZ2FwLXktMTAgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxuICAgICAgXG4gICAgICB7YW5ub25jZXNGaWx0cmVlcy5tYXAoKGFubm9uY2UpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2Fubm9uY2UuaWR9IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdyBzcGFjZS15LTJcIj5cbiAgICAgICAgICB7LyogVsOpcmlmaWVyIHNpIGwnYW5ub25jZSBhIGRlcyBwaG90b3MgKi99XG4gICAgICAgICAge2Fubm9uY2UucGhvdG9zICYmIGFubm9uY2UucGhvdG9zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgLy8gQWZmaWNoZXIgdW5pcXVlbWVudCBsYSBwcmVtacOocmUgcGhvdG8gZGUgbGEgY29sbGVjdGlvblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBncm91cC1ob3ZlcjpvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YW5ub25jZS5waG90b3NbMF0ucGhvdG9QYXRofSAvLyBVdGlsaXNlciBsZSBwcmVtaWVyIMOpbMOpbWVudCBkZSBsYSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIGFsdD17YFBob3RvIHByaW5jaXBhbGUgZGUgJHthbm5vbmNlLmZ1cm5pdHVyZVR5cGV9YH0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgIC8vIEZhbGxiYWNrIHNpIGF1Y3VuZSBwaG90byBuJ2VzdCBkaXNwb25pYmxlXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLWdyYXktMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj5QYXMgZCdpbWFnZSBkaXNwb25pYmxlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkXCI+e2Fubm9uY2UuZnVybml0dXJlVHlwZX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57YW5ub25jZS5XaWR0aH0geCB7YW5ub25jZS5MZW5ndGh9IHgge2Fubm9uY2UuSGVpZ2h0fSBjbTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwXCI+e2Fubm9uY2UucHJpY2V9IOKCrDwvcD5cbiAgICAgICAgICB7LyogQWZmaWNoZXIgbGEgZGF0ZSBkZSBsJ2Fubm9uY2UgKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+RGF0ZSBkZSBtaXNlIGVuIGxpZ25lOiB7bmV3IERhdGUoYW5ub25jZS5hbm5vdW5jZW1lbnREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC1zbSAke1xuICAgICAgICAgICAgICBhbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbiA9PT0gJ05ldWYnID8gICd0ZXh0LWdyZWVuLTUwMCcgOlxuICAgICAgICAgICAgICBhbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbiA9PT0gJ1VzYWfDqScgPyAndGV4dC1vcmFuZ2UtNTAwJyA6XG4gICAgICAgICAgICAgJ3RleHQtcmVkLTUwMCdcbiAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgIMOJdGF0OiB7YW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb259XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj4gcHJvcHJpw6l0YWlyZSA6IHthbm5vbmNlLnVzZXIuZmlyc3ROYW1lfTwvcD5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZhdm9yaXRlQ2xpY2soYW5ub25jZS5pZCl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgIHtmYXZvcml0ZXMuaGFzKGFubm9uY2UuaWQpID8gKFxuICAgICAgICAgICAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxPdXRsaW5lSGVhcnRJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIFNpIGwnYW5ub25jZSBlc3QgZMOpbW9udGFibGUgb3Ugbm9uICovfVxuICAgICAgICAgIHsvKiBCb3V0b24gcG91ciB2b2lyIHBsdXMgZGUgZMOpdGFpbHMgb3UgY29udGFjdGVyIGxlIHZlbmRldXIgKi99XG4gICAgICAgICAgPGEgaHJlZj17YC9hbm5vbmNlcy8ke2Fubm9uY2UuaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTkwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIFZvaXIgZMOpdGFpbHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIEJvdXRvbiBwb3VyIHZvaXIgcGx1cyBkJ2Fubm9uY2VzICovfVxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvYWxsQW5ub25jZXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPlZvaXIgcGx1cyBkJ2Fubm9uY2VzPC9zcGFuPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTRcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIGQ9XCJNOSA1bDcgNy03IDdcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY2V1aWw7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlYXJjaEljb24sIEhlYXJ0SWNvbiwgVXNlckljb24sIENoYXRJY29uLCBTZWxlY3Rvckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcbmltcG9ydCBCYXJyZVJlY2hlcmNoZSBmcm9tIFwiLi9CYXJyZVJlY2hlcmNoZVwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEhlYXJ0SWNvbiBhcyBPdXRsaW5lSGVhcnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5jb25zdCBBZG1pbkFubm9uY2VzID0gKHsgYWxsQW5ub25jZXMgfSkgPT4ge1xuICBjb25zdCBbdGVybWVSZWNoZXJjaGUsIHNldFRlcm1lUmVjaGVyY2hlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3B0aW9uVHJpLCBzZXRPcHRpb25UcmldID0gdXNlU3RhdGUoXCJwcml4Q3JvaXNzYW50XCIpO1xuICBjb25zdCBbZmlsdHJlLCBzZXRGaWx0cmVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gU3RvY2tlIGxlcyBJRCBkZXMgYW5ub25jZXMgZmF2b3JpdGVzXG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZShuZXcgU2V0KCkpOyBcblxuICBjb25zdCBoYW5kbGVGYXZvcml0ZUNsaWNrID0gKGFubm9uY2VJZCkgPT4ge1xuICAgIHNldEZhdm9yaXRlcygocHJldkZhdm9yaXRlcykgPT4ge1xuICAgICAgY29uc3QgbmV3RmF2b3JpdGVzID0gbmV3IFNldChwcmV2RmF2b3JpdGVzKTtcbiAgICAgIGlmIChuZXdGYXZvcml0ZXMuaGFzKGFubm9uY2VJZCkpIHtcbiAgICAgICAgbmV3RmF2b3JpdGVzLmRlbGV0ZShhbm5vbmNlSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RmF2b3JpdGVzLmFkZChhbm5vbmNlSWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0Zhdm9yaXRlcztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhbm5vbmNlc0ZpbHRyZWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHJlc3VsdGF0cyA9IGFsbEFubm9uY2VzLmZpbHRlcihhbm5vbmNlID0+IFxuICAgICAgYW5ub25jZS5mdXJuaXR1cmVUeXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybWVSZWNoZXJjaGUudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuXG4gICAgLy8gQXBwbGljYXRpb24gZHUgZmlsdHJlXG4gICAgaWYgKGZpbHRyZSkge1xuICAgICAgc3dpdGNoIChmaWx0cmUpIHtcbiAgICAgICAgY2FzZSBcImRlbW9udGFibGVcIjpcbiAgICAgICAgICByZXN1bHRhdHMgPSByZXN1bHRhdHMuZmlsdGVyKGFubm9uY2UgPT4gYW5ub25jZS5pc0Rpc21vdW50YWJsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJub25EZW1vbnRhYmxlXCI6XG4gICAgICAgICAgcmVzdWx0YXRzID0gcmVzdWx0YXRzLmZpbHRlcihhbm5vbmNlID0+ICFhbm5vbmNlLmlzRGlzbW91bnRhYmxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5ldWZcIjpcbiAgICAgICAgICByZXN1bHRhdHMgPSByZXN1bHRhdHMuZmlsdGVyKGFubm9uY2UgPT4gYW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb24gPT09IFwiTmV1ZlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInVzYWdlXCI6XG4gICAgICAgICAgcmVzdWx0YXRzID0gcmVzdWx0YXRzLmZpbHRlcihhbm5vbmNlID0+IGFubm9uY2UuZnVybml0dXJlQ29uZGl0aW9uID09PSBcIlVzYWfDqVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImVuZG9tbWFnZVwiOlxuICAgICAgICAgIHJlc3VsdGF0cyA9IHJlc3VsdGF0cy5maWx0ZXIoYW5ub25jZSA9PiBhbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbiA9PT0gXCJFbmRvbW1hZ8OpXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIEF1Y3VuZSBhY3Rpb24gc2kgbGUgZmlsdHJlIG4nZXN0IHBhcyByZWNvbm51XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbGljYXRpb24gZHUgdHJpXG4gICAgcmV0dXJuIHJlc3VsdGF0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAob3B0aW9uVHJpID09PSBcInByaXhDcm9pc3NhbnRcIikgICByZXR1cm4gYS5wcmljZSAtIGIucHJpY2U7XG4gICAgICBpZiAob3B0aW9uVHJpID09PSBcInByaXhEZWNyb2lzc2FudFwiKSByZXR1cm4gYi5wcmljZSAtIGEucHJpY2U7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfSwgW2FsbEFubm9uY2VzLCB0ZXJtZVJlY2hlcmNoZSwgb3B0aW9uVHJpLCBmaWx0cmVdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICB7LyogSGVhZGVyIGF2ZWMgbGEgbG9naXF1ZSBkJ2ltcG9ydGF0aW9uIGRlIGwnaWPDtG5lICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBzaGFkb3cgei0xMFwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPExpbmsgdG89XCIvYWxsQW5ub25jZXNcIiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS03MDBcIj5cbiAgICAgICAgICBMZUJvbkNvaW5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgey8qIETDqXBsYWNlciBsZXMgc8OpbGVjdGV1cnMgZGUgdHJpIGV0IGZpbHRyZSBpY2kgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xXCI+XG4gICAgICAgICAgICAgIDxTZWxlY3Rvckljb24gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNjAwXCIgLz5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwidHJpXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9wdGlvblRyaShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMSBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLW9yYW5nZS01MDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLW9yYW5nZS0yMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXhDcm9pc3NhbnRcIj5Qcml4IGNyb2lzc2FudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcml4RGVjcm9pc3NhbnRcIj5Qcml4IGTDqWNyb2lzc2FudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BdWN1biB0cmk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdG9ySWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS02MDBcIiAvPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJmaWx0cmVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmlsdHJlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0xIHNoYWRvdy1zbSBmb2N1czpib3JkZXItb3JhbmdlLTUwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctb3JhbmdlLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QXVjdW4gZmlsdHJlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlbW9udGFibGVcIj5Ew6ltb250YWJsZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25EZW1vbnRhYmxlXCI+Tm9uIETDqW1vbnRhYmxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ldWZcIj7DiXRhdCBOZXVmPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVzYWdlXCI+w4l0YXQgVXPDqTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbmRvbW1hZ2VcIj7DiXRhdCBFbmRvbW1hZ8OpPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBJY8O0bmVzIGV0IGJhcnJlIGRlIHJlY2hlcmNoZSAqL31cbiAgICAgICAgICAgIDxCYXJyZVJlY2hlcmNoZSBvblJlY2hlcmNoZT17c2V0VGVybWVSZWNoZXJjaGV9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7LyogU2UgY29ubmVjdGVyICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9maWxcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICA8VXNlckljb24gY2xhc3NOYW1lPVwidy03IGgtN1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHNcIj5Qcm9maWw8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICBcblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC1ncm93IGNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHQtWzcwcHhdXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBweS0xNiBzbTpweC02IGxnOnB4LThcIj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXgtNiBnYXAteS0xMCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICBcbiAgICAgIHthbm5vbmNlc0ZpbHRyZWVzLm1hcCgoYW5ub25jZSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YW5ub25jZS5pZH0gY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93IHNwYWNlLXktMlwiPlxuICAgICAgICAgIHsvKiBWw6lyaWZpZXIgc2kgbCdhbm5vbmNlIGEgZGVzIHBob3RvcyAqL31cbiAgICAgICAgICB7YW5ub25jZS5waG90b3MgJiYgYW5ub25jZS5waG90b3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAvLyBBZmZpY2hlciB1bmlxdWVtZW50IGxhIHByZW1pw6hyZSBwaG90byBkZSBsYSBjb2xsZWN0aW9uXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXthbm5vbmNlLnBob3Rvc1swXS5waG90b1BhdGh9IC8vIFV0aWxpc2VyIGxlIHByZW1pZXIgw6lsw6ltZW50IGRlIGxhIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgYWx0PXtgUGhvdG8gcHJpbmNpcGFsZSBkZSAke2Fubm9uY2UuZnVybml0dXJlVHlwZX1gfSBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgLy8gRmFsbGJhY2sgc2kgYXVjdW5lIHBob3RvIG4nZXN0IGRpc3BvbmlibGVcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC13LTEgYXNwZWN0LWgtMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPlBhcyBkJ2ltYWdlIGRpc3BvbmlibGU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGRcIj57YW5ub25jZS5mdXJuaXR1cmVUeXBlfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPnthbm5vbmNlLldpZHRofSB4IHthbm5vbmNlLkxlbmd0aH0geCB7YW5ub25jZS5IZWlnaHR9IGNtPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDBcIj57YW5ub25jZS5wcmljZX0g4oKsPC9wPlxuICAgICAgICAgIHsvKiBBZmZpY2hlciBsYSBkYXRlIGRlIGwnYW5ub25jZSAqL31cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5EYXRlIGRlIG1pc2UgZW4gbGlnbmU6IHtuZXcgRGF0ZShhbm5vbmNlLmFubm91bmNlbWVudERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICB7LyogQWZmaWNoZXIgbGUgbGlldSBkZSBzdG9ja2FnZSAqL31cbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+TGlldToge2Fubm9uY2Uuc3RvcmFnZUxvY2F0aW9ufTwvcD4gKi99XG4gICAgICAgICAgey8qIENvbmRpdGlvbnMgZGUgZMOpcGxhY2VtZW50ICovfVxuICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj7DgCByw6ljdXDDqXJlcjoge2Fubm9uY2UubW92ZW1lbnRDb25kaXRpb259PC9wPiAqL31cbiAgICAgICAgICB7Lyogw4l0YXQgZGUgbCdhcnRpY2xlICovfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtc20gJHtcbiAgICAgICAgICAgICAgYW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb24gPT09ICdOZXVmJyA/ICAndGV4dC1ncmVlbi01MDAnIDpcbiAgICAgICAgICAgICAgYW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb24gPT09ICdVc2Fnw6knID8gJ3RleHQtb3JhbmdlLTUwMCcgOlxuICAgICAgICAgICAgICd0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICDDiXRhdDoge2Fubm9uY2UuZnVybml0dXJlQ29uZGl0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Qcm9wcmnDqXRhaXJlIDoge2Fubm9uY2UudXNlci5maXJzdE5hbWV9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGYXZvcml0ZUNsaWNrKGFubm9uY2UuaWQpfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICB7ZmF2b3JpdGVzLmhhcyhhbm5vbmNlLmlkKSA/IChcbiAgICAgICAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8T3V0bGluZUhlYXJ0SWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBCb3V0b24gcG91ciB2b2lyIHBsdXMgZGUgZMOpdGFpbHMgb3UgY29udGFjdGVyIGxlIHZlbmRldXIgKi99XG4gICAgICAgICAgPGEgaHJlZj17YC9tb2RpZnkvJHthbm5vbmNlLmlkfWB9IGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby05MDAgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBNb2RpZmllclxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICB7LyogQWpvdXQgZHUgYm91dG9uIFwiU3VwcHJpbWVyXCIgKi99XG4gICAgICAgICAgPGEgaHJlZj17YC9kZWxldGUvJHthbm5vbmNlLmlkfWB9IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCBob3Zlcjp0ZXh0LXJlZC05MDAgdGV4dC1zbSBmb250LXNlbWlib2xkIG1sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWRtaW5Bbm5vbmNlcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcblxuY29uc3QgQmFycmVSZWNoZXJjaGUgPSAoeyBvblJlY2hlcmNoZSB9KSA9PiB7XG4gIGNvbnN0IFt0ZXJtZVJlY2hlcmNoZSwgc2V0VGVybWVSZWNoZXJjaGVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVJlY2hlcmNoZSA9IChlKSA9PiB7XG4gICAgLy8gUHLDqXZlbmlyIGxlIHJlY2hhcmdlbWVudCBkZSBsYSBwYWdlXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uUmVjaGVyY2hlKHRlcm1lUmVjaGVyY2hlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVSZWNoZXJjaGV9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5SZWNoZXJjaGVyPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMyBoLTUgdy01IHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hleiB1bmUgYW5ub25jZVwiXG4gICAgICAgICAgdmFsdWU9e3Rlcm1lUmVjaGVyY2hlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVybWVSZWNoZXJjaGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBwbC0xMCBwLTIgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHAtMiB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby03MDBcIlxuICAgICAgPlxuICAgICAgICBSZWNoZXJjaGVyXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJyZVJlY2hlcmNoZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXhsIG14LWF1dG8gcHktMTIgcHgtNCBvdmVyZmxvdy1oaWRkZW4gc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiLW14LTUgLW15LTIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIiBhcmlhLWxhYmVsPVwiRm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB0cmFja2luZy13aWRlciB1cHBlcmNhc2VcIj7DgCBwcm9wb3MgZGUgTGVCb25jb2luPC9oMz5cbiAgICAgICAgICAgIHsvKiBMaXN0IG9mIGxpbmtzICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBSZXBlYXQgZm9yIGVhY2ggc2VjdGlvbiAqL31cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNlwiPlxuICAgICAgICAgIHsvKiBTb2NpYWwgbWVkaWEgbGlua3MgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC04IHRleHQtY2VudGVyIHRleHQtYmFzZSB0ZXh0LWdyYXktNDAwXCI+JmNvcHk7IDIwMjQgTGVCb25Db2luLiBUb3VzIGRyb2l0cyByw6lzZXJ2w6lzLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYXJyZVJlY2hlcmNoZSBmcm9tIFwiLi9CYXJyZVJlY2hlcmNoZVwiO1xuaW1wb3J0IHsgU2VhcmNoSWNvbiwgSGVhcnRJY29uLCBVc2VySWNvbiwgQ2hhdEljb24sIFNlbGVjdG9ySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBIZWFydEljb24gYXMgT3V0bGluZUhlYXJ0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cbmNvbnN0IExpc3RlQW5ub25jZXMgPSAoeyBhbGxBbm5vbmNlcyB9KSA9PiB7XG4gIGNvbnN0IFt0ZXJtZVJlY2hlcmNoZSwgc2V0VGVybWVSZWNoZXJjaGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvcHRpb25UcmksIHNldE9wdGlvblRyaV0gPSB1c2VTdGF0ZShcInByaXhDcm9pc3NhbnRcIik7XG4gIGNvbnN0IFtmaWx0cmUsIHNldEZpbHRyZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBTdG9ja2UgbGVzIElEIGRlcyBhbm5vbmNlcyBmYXZvcml0ZXNcbiAgY29uc3QgW2Zhdm9yaXRlcywgc2V0RmF2b3JpdGVzXSA9IHVzZVN0YXRlKG5ldyBTZXQoKSk7IFxuXG4gIGNvbnN0IGhhbmRsZUZhdm9yaXRlQ2xpY2sgPSAoYW5ub25jZUlkKSA9PiB7XG4gICAgc2V0RmF2b3JpdGVzKChwcmV2RmF2b3JpdGVzKSA9PiB7XG4gICAgICBjb25zdCBuZXdGYXZvcml0ZXMgPSBuZXcgU2V0KHByZXZGYXZvcml0ZXMpO1xuICAgICAgaWYgKG5ld0Zhdm9yaXRlcy5oYXMoYW5ub25jZUlkKSkge1xuICAgICAgICBuZXdGYXZvcml0ZXMuZGVsZXRlKGFubm9uY2VJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdGYXZvcml0ZXMuYWRkKGFubm9uY2VJZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3RmF2b3JpdGVzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFubm9uY2VzRmlsdHJlZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgcmVzdWx0YXRzID0gYWxsQW5ub25jZXMuZmlsdGVyKGFubm9uY2UgPT4gXG4gICAgICBhbm5vbmNlLmZ1cm5pdHVyZVR5cGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtZVJlY2hlcmNoZS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG5cbiAgICAvLyBBcHBsaWNhdGlvbiBkdSBmaWx0cmVcbiAgICBpZiAoZmlsdHJlKSB7XG4gICAgICBzd2l0Y2ggKGZpbHRyZSkge1xuICAgICAgICBjYXNlIFwiZGVtb250YWJsZVwiOlxuICAgICAgICAgIHJlc3VsdGF0cyA9IHJlc3VsdGF0cy5maWx0ZXIoYW5ub25jZSA9PiBhbm5vbmNlLmlzRGlzbW91bnRhYmxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5vbkRlbW9udGFibGVcIjpcbiAgICAgICAgICByZXN1bHRhdHMgPSByZXN1bHRhdHMuZmlsdGVyKGFubm9uY2UgPT4gIWFubm9uY2UuaXNEaXNtb3VudGFibGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibmV1ZlwiOlxuICAgICAgICAgIHJlc3VsdGF0cyA9IHJlc3VsdGF0cy5maWx0ZXIoYW5ub25jZSA9PiBhbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbiA9PT0gXCJOZXVmXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidXNhZ2VcIjpcbiAgICAgICAgICByZXN1bHRhdHMgPSByZXN1bHRhdHMuZmlsdGVyKGFubm9uY2UgPT4gYW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb24gPT09IFwiVXNhZ8OpXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZW5kb21tYWdlXCI6XG4gICAgICAgICAgcmVzdWx0YXRzID0gcmVzdWx0YXRzLmZpbHRlcihhbm5vbmNlID0+IGFubm9uY2UuZnVybml0dXJlQ29uZGl0aW9uID09PSBcIkVuZG9tbWFnw6lcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gQXVjdW5lIGFjdGlvbiBzaSBsZSBmaWx0cmUgbidlc3QgcGFzIHJlY29ubnVcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBsaWNhdGlvbiBkdSB0cmlcbiAgICByZXR1cm4gcmVzdWx0YXRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChvcHRpb25UcmkgPT09IFwicHJpeENyb2lzc2FudFwiKSAgIHJldHVybiBhLnByaWNlIC0gYi5wcmljZTtcbiAgICAgIGlmIChvcHRpb25UcmkgPT09IFwicHJpeERlY3JvaXNzYW50XCIpIHJldHVybiBiLnByaWNlIC0gYS5wcmljZTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9LCBbYWxsQW5ub25jZXMsIHRlcm1lUmVjaGVyY2hlLCBvcHRpb25UcmksIGZpbHRyZV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIHsvKiBIZWFkZXIgYXZlYyBsYSBsb2dpcXVlIGQnaW1wb3J0YXRpb24gZGUgbCdpY8O0bmUgKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIHNoYWRvdyB6LTEwXCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0zIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8TGluayB0bz1cIi9hbGxBbm5vbmNlc1wiIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTcwMFwiPlxuICAgICAgICAgIExlQm9uQ29pblxuICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweS0xXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9hZGRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktNDAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCIgXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcwLjVyZW0nIH19IFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtMSByb3VuZGVkXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcgfX0+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBiZy1vcmFuZ2UtNTAwXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDR2MTZtOC04SDRcIlxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBtbC0yXCI+RMOpcG9zZXIgdW5lIGFubm9uY2U8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogRMOpcGxhY2VyIGxlcyBzw6lsZWN0ZXVycyBkZSB0cmkgZXQgZmlsdHJlIGljaSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdG9ySWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS02MDBcIiAvPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJ0cmlcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3B0aW9uVHJpKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0xIHNoYWRvdy1zbSBmb2N1czpib3JkZXItb3JhbmdlLTUwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctb3JhbmdlLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpeENyb2lzc2FudFwiPlByaXggY3JvaXNzYW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXhEZWNyb2lzc2FudFwiPlByaXggZMOpY3JvaXNzYW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkF1Y3VuIHRyaTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMVwiPlxuICAgICAgICAgICAgICA8U2VsZWN0b3JJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTYwMFwiIC8+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBpZD1cImZpbHRyZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaWx0cmUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTEgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1vcmFuZ2UtNTAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1vcmFuZ2UtMjAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BdWN1biBmaWx0cmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVtb250YWJsZVwiPkTDqW1vbnRhYmxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbkRlbW9udGFibGVcIj5Ob24gRMOpbW9udGFibGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV1ZlwiPsOJdGF0IE5ldWY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXNhZ2VcIj7DiXRhdCBVc8OpPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuZG9tbWFnZVwiPsOJdGF0IEVuZG9tbWFnw6k8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEljw7RuZXMgZXQgYmFycmUgZGUgcmVjaGVyY2hlICovfVxuICAgICAgICAgICAgPEJhcnJlUmVjaGVyY2hlIG9uUmVjaGVyY2hlPXtzZXRUZXJtZVJlY2hlcmNoZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgey8qIEZhdm9yaXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9mYXZvcmlzXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT1cInctNyBoLTcgYmctdHJhbnNwYXJlbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+RmF2b3Jpczwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7LyogTWVzc2FnZXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tZXNzYWdlc1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgPENoYXRJY29uIGNsYXNzTmFtZT1cInctNyBoLTdcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+TWVzc2FnZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgey8qIFNlIGNvbm5lY3RlciAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cIi9wcm9maWxcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxVc2VySWNvbiBjbGFzc05hbWU9XCJ3LTcgaC03XCIgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+UHJvZmlsPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgXG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBjb250YWluZXIgbXgtYXV0byBweC00IHB0LVs3MHB4XVwiPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgcHktMTYgc206cHgtNiBsZzpweC04XCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC14LTYgZ2FwLXktMTAgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxuICAgICAgXG4gICAgICB7YW5ub25jZXNGaWx0cmVlcy5tYXAoKGFubm9uY2UpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2Fubm9uY2UuaWR9IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdyBzcGFjZS15LTJcIj5cbiAgICAgICAgICB7LyogVsOpcmlmaWVyIHNpIGwnYW5ub25jZSBhIGRlcyBwaG90b3MgKi99XG4gICAgICAgICAge2Fubm9uY2UucGhvdG9zICYmIGFubm9uY2UucGhvdG9zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgLy8gQWZmaWNoZXIgdW5pcXVlbWVudCBsYSBwcmVtacOocmUgcGhvdG8gZGUgbGEgY29sbGVjdGlvblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBncm91cC1ob3ZlcjpvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YW5ub25jZS5waG90b3NbMF0ucGhvdG9QYXRofSAvLyBVdGlsaXNlciBsZSBwcmVtaWVyIMOpbMOpbWVudCBkZSBsYSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIGFsdD17YFBob3RvIHByaW5jaXBhbGUgZGUgJHthbm5vbmNlLmZ1cm5pdHVyZVR5cGV9YH0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgIC8vIEZhbGxiYWNrIHNpIGF1Y3VuZSBwaG90byBuJ2VzdCBkaXNwb25pYmxlXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLWdyYXktMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj5QYXMgZCdpbWFnZSBkaXNwb25pYmxlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkXCI+e2Fubm9uY2UuZnVybml0dXJlVHlwZX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57YW5ub25jZS5XaWR0aH0geCB7YW5ub25jZS5MZW5ndGh9IHgge2Fubm9uY2UuSGVpZ2h0fSBjbTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwXCI+e2Fubm9uY2UucHJpY2V9IOKCrDwvcD5cbiAgICAgICAgICB7LyogQWZmaWNoZXIgbGEgZGF0ZSBkZSBsJ2Fubm9uY2UgKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+RGF0ZSBkZSBtaXNlIGVuIGxpZ25lOiB7bmV3IERhdGUoYW5ub25jZS5hbm5vdW5jZW1lbnREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgey8qIEFmZmljaGVyIGxlIGxpZXUgZGUgc3RvY2thZ2UgKi99XG4gICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkxpZXU6IHthbm5vbmNlLnN0b3JhZ2VMb2NhdGlvbn08L3A+ICovfVxuICAgICAgICAgIHsvKiBDb25kaXRpb25zIGRlIGTDqXBsYWNlbWVudCAqL31cbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+w4AgcsOpY3Vww6lyZXI6IHthbm5vbmNlLm1vdmVtZW50Q29uZGl0aW9ufTwvcD4gKi99XG4gICAgICAgICAgey8qIMOJdGF0IGRlIGwnYXJ0aWNsZSAqL31cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXNtICR7XG4gICAgICAgICAgICAgIGFubm9uY2UuZnVybml0dXJlQ29uZGl0aW9uID09PSAnTmV1ZicgPyAgJ3RleHQtZ3JlZW4tNTAwJyA6XG4gICAgICAgICAgICAgIGFubm9uY2UuZnVybml0dXJlQ29uZGl0aW9uID09PSAnVXNhZ8OpJyA/ICd0ZXh0LW9yYW5nZS01MDAnIDpcbiAgICAgICAgICAgICAndGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgw4l0YXQ6IHthbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+UHJvcHJpw6l0YWlyZSA6IHthbm5vbmNlLnVzZXIuZmlyc3ROYW1lfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRmF2b3JpdGVDbGljayhhbm5vbmNlLmlkKX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAge2Zhdm9yaXRlcy5oYXMoYW5ub25jZS5pZCkgPyAoXG4gICAgICAgICAgICAgICAgPEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPE91dGxpbmVIZWFydEljb24gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogQm91dG9uIHBvdXIgdm9pciBwbHVzIGRlIGTDqXRhaWxzIG91IGNvbnRhY3RlciBsZSB2ZW5kZXVyICovfVxuICAgICAgICAgIDxhIGhyZWY9e2AvZGV0YWlsQW5ub25jZS8ke2Fubm9uY2UuaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTkwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIFZvaXIgZMOpdGFpbHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTGlzdGVBbm5vbmNlcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEV5ZUljb24sIEV5ZU9mZkljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1mdWxsIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHB5LTEyIHNtOnB4LTYgbGc6cHgtOCBiZy1ncmF5LTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm14LWF1dG8gc206dy1mdWxsIHNtOm1heC13LW1kXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5Db25uZXhpb248L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBzbTpteC1hdXRvIHNtOnctZnVsbCBzbTptYXgtdy1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTggcHgtNCBzaGFkb3cgc206cm91bmRlZC1sZyBzbTpweC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBmbGV4IHJvdW5kZWQtbWQgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudHJleiB2b3RyZSBtb3QgZGUgcGFzc2UuLi5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0xIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHJvdW5kZWQtci1tZCBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCB0ZXh0LWdyYXktNTAwIHRleHQtc20gcHktMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eX0gY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gPEV5ZUljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+IDogPEV5ZU9mZkljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJfbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyX21lXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtaW5kaWdvLTYwMCBmb2N1czpyaW5nLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1lbWJlcl9tZVwiIGNsYXNzTmFtZT1cIm1sLTIgYmxvY2sgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+UmVtZW1iZXIgbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIj5Nb3QgZGUgcGFzc2Ugb3VibGnDqSA/PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBFbnZpZSBkZSBub3VzIHJlam9pbmRyZSA/ICA8QnV0dG9uIGhyZWY9XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC1pbmRpZ28tNTAwXCI+IENyw6llciB1biBDb21wdGU8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgUHJvZmlsVXRpbGlzYXRldXIgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSB7XG4gICAgbmFtZTogXCJNYXNzaVwiLFxuICAgIGVtYWlsOiBcIm1hc3NpQHRlc3QuY29tXCIsXG4gICAgcGhvbmU6IFwiKzMzIDYyMTM5NDY4MlwiLFxuICAgIGFkbWluOiBmYWxzZSxcbiAgfTtcblxuY29uc3QgZW1haWwgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykuZ2V0QXR0cmlidXRlKCdlbWFpbCcpKTtcbmNvbnN0IHBob25lID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmdldEF0dHJpYnV0ZSgncGhvbmUnKSk7XG5jb25zdCBmaXJzdE5hbWUgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykuZ2V0QXR0cmlidXRlKCdmaXJzdE5hbWUnKSk7XG5jb25zdCBsYXN0TmFtZSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKS5nZXRBdHRyaWJ1dGUoJ2xhc3ROYW1lJykpO1xuY29uc3QgaXNBZG1pbiA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKS5nZXRBdHRyaWJ1dGUoJ2lzQWRtaW4nKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290UHJvZmlsZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcm9vdFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkaW5nUHJvZmlsZVwiPlNhbHV0LCB7Zmlyc3ROYW1lfSAhPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJncmVldGluZ1wiPkJpZW52ZW51ZSAhIEJvbiBzaG9wcGluZyAhPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0Q29udGFpbmVyXCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkaW5nTGVmdFwiPkFwZXLDp3UgZHUgcHJvZmlsPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVTZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnREZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGVUZXh0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZVN1YkhlYWRpbmdcIj5Ob20gOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAge2xhc3ROYW1lfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGVUZXh0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZVN1YkhlYWRpbmdcIj5QcsOpbm9tIDogPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZVRleHRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlU3ViSGVhZGluZ1wiPkVtYWlsIDogPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtlbWFpbH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICB7aXNBZG1pbiA/IChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNBbm5vbmNlc1wiPlxuICAgICAgICA8cD5Ub3V0ZXMgbGVzIGFubm9uY2VzPC9wPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNsYXNzTmFtZT1cIm9yZGVyc0J1dHRvblwiIGhyZWY9XCIvYWRtaW5Bbm5vbmNlc1wiPlxuICAgICAgICAgICAgVm9pclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNBbm5vbmNlc1wiPlxuICAgICAgPHA+TWVzIEFubm9uY2VzPC9wPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjbGFzc05hbWU9XCJvcmRlcnNCdXR0b25cIiBocmVmPVwiL3VzZXJBbm5vbmNlc1wiPlxuICAgICAgICAgIFZvaXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICl9XG48L2Rpdj5cblxuXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFqb3V0QW5ub25jZVwiPlxuICAgICAgICAgICAgPHA+QWpvdXRlciB1bmUgQW5ub25jZTwvcD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY2xhc3NOYW1lPVwib3JkZXJzQnV0dG9uXCIgaHJlZj1cIi9hZGRcIj5cbiAgICAgICAgICAgICAgICBBam91dFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJHZXJlckFubm9uY2VcIj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodENvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaEhlYWRpbmdzXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlSGVhZGluZ1wiPkluZm9ybWF0aW9ucyBQZXJzb25uZWxsZXM8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlVGV4dDJcIj5cbiAgICAgICAgICAgICAgU2FsdXQgISBWb2ljaSB2b3RyZSBwcm9maWwsIGRlcHVpcyBjZSBwcm9maWwgdm91cyBwb3V2ZXogdm9pciB2b3MgYW5ub25jZXMgZXQgdm9zIGluZm9ybWF0aW9ucyBhc3NvY2nDqXMgw6Agdm90cmUgY29tcHRlICFcbiAgICAgICAgICAgICAgVm91cyBwb3V2ZXogYXVzc2kgYWpvdXRlciB1bmUgYW5ub25jZVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlRGV0aWFsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkaW5nXCI+TWVzIENvb3Jkb25uw6llczwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZVRleHRcIj5FbWFpbDoge2VtYWlsfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZVRleHRcIj5OdW3DqXJvIGRlIHTDqWzDqXBob25lOiAwe3Bob25lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hbmdlQWNjb3VudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlSGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIFNlIGTDqWNvbm5lY3RlciBkZSB0b3VzIGxlcyBhcHBhcmVpbHNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlVGV4dDNcIj5cbiAgICAgICAgICAgICAgICBQb3VyIGFjY8OpZGVyIMOgIG5vdXZlYXUgYXUgc2l0ZSB3ZWIgTGUgQm9uQ29pbiBVUiwgdm91cyBkZXZlelxuICAgICAgICAgICAgICAgIGZvdXJuaXIgdm9zIGluZm9ybWF0aW9ucyBkJ2lkZW50aWZpY2F0aW9uLiBDZXR0ZSBhY3Rpb24gdm91c1xuICAgICAgICAgICAgICAgIGTDqWNvbm5lY3RlcmEgZGUgdG91dCBhdXRyZSBuYXZpZ2F0ZXVyIHdlYiBxdWUgdm91cyBhdmV6IHV0aWxpc8OpXG4gICAgICAgICAgICAgICAgYXVwYXJhdmFudC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlQnV0dG9uXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi9sb2dvdXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEw6ljb25uZXhpb25cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsVXRpbGlzYXRldXI7XG5cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEV5ZUljb24sIEV5ZU9mZkljb24sIFBob25lSWNvbiwgRmxhZ0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcblxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLWZ1bGwgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHktMTIgc206cHgtNiBsZzpweC04IGJnLWdyYXktNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXctbWRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPkluc2NyaXB0aW9uPC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggc206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXctbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS04IHB4LTQgc2hhZG93IHNtOnJvdW5kZWQtbGcgc206cHgtMTBcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiBhY3Rpb249Jy9pbmZvX3JlZ2lzdGVyJyBtZXRob2Q9J3Bvc3QnPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21cIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5Ob208L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJub21cIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRyZXogdm90cmUgbm9tLi4uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByZW5vbVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlByw6lub208L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInByZW5vbVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwcmVub21cIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRyZXogdm90cmUgcHLDqW5vbS4uLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50cmV6IHZvdHJlIGVtYWlsLi4uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgZmxleCByb3VuZGVkLW1kIHNoYWRvdy1zbSByZWxhdGl2ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHJvdW5kZWQtbC1tZCBiZy1ncmF5LTUwIHRleHQtZ3JheS01MDAgc206dGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICszM1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidGVsXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJeWzAtOV0rJFwiXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiOVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHByLTMgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuICAgICAgICAgICAgICAgIDxQaG9uZUljb24gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWdyYXktNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgZmxleCByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRyZXogdm90cmUgbW90IGRlIHBhc3NlLi4uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyByb3VuZGVkLXItbWQgYm9yZGVyIGJvcmRlci1sLTAgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgdGV4dC1ncmF5LTUwMCB0ZXh0LXNtIHB5LTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/IDxFeWVJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPiA6IDxFeWVPZmZJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIGZsZXggcm91bmRlZC1tZCBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvbmZpcm1lciB2b3RyZSBtb3QgZGUgcGFzc2UuLi5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0xIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHJvdW5kZWQtci1tZCBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCB0ZXh0LWdyYXktNTAwIHRleHQtc20gcHktMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eX0gY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gPEV5ZUljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+IDogPEV5ZU9mZkljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUydpbnNjcmlyZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIETDqWrDoCB1dGlsaXNhdGV1ciA/ICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIj5cbiAgICAgICAgICAgIFNlIGNvbm5lY3RlclxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlYXJjaEljb24sIEhlYXJ0SWNvbiwgVXNlckljb24sIENoYXRJY29uLCBTZWxlY3Rvckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcbmltcG9ydCBCYXJyZVJlY2hlcmNoZSBmcm9tIFwiLi9CYXJyZVJlY2hlcmNoZVwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEhlYXJ0SWNvbiBhcyBPdXRsaW5lSGVhcnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5jb25zdCBVc2VyQW5ub25jZXMgPSAoeyB1c2VyQW5ub25jZXMgfSkgPT4ge1xuICBjb25zdCBbdGVybWVSZWNoZXJjaGUsIHNldFRlcm1lUmVjaGVyY2hlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3B0aW9uVHJpLCBzZXRPcHRpb25UcmldID0gdXNlU3RhdGUoXCJwcml4Q3JvaXNzYW50XCIpO1xuICBjb25zdCBbZmlsdHJlLCBzZXRGaWx0cmVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gU3RvY2tlIGxlcyBJRCBkZXMgYW5ub25jZXMgZmF2b3JpdGVzXG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZShuZXcgU2V0KCkpOyBcblxuICBjb25zdCBoYW5kbGVGYXZvcml0ZUNsaWNrID0gKGFubm9uY2VJZCkgPT4ge1xuICAgIHNldEZhdm9yaXRlcygocHJldkZhdm9yaXRlcykgPT4ge1xuICAgICAgY29uc3QgbmV3RmF2b3JpdGVzID0gbmV3IFNldChwcmV2RmF2b3JpdGVzKTtcbiAgICAgIGlmIChuZXdGYXZvcml0ZXMuaGFzKGFubm9uY2VJZCkpIHtcbiAgICAgICAgbmV3RmF2b3JpdGVzLmRlbGV0ZShhbm5vbmNlSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RmF2b3JpdGVzLmFkZChhbm5vbmNlSWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0Zhdm9yaXRlcztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhbm5vbmNlc0ZpbHRyZWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHJlc3VsdGF0cyA9IHVzZXJBbm5vbmNlcy5maWx0ZXIoYW5ub25jZSA9PiBcbiAgICAgIGFubm9uY2UuZnVybml0dXJlVHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm1lUmVjaGVyY2hlLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcblxuICAgIC8vIEFwcGxpY2F0aW9uIGR1IGZpbHRyZVxuICAgIGlmIChmaWx0cmUpIHtcbiAgICAgIHN3aXRjaCAoZmlsdHJlKSB7XG4gICAgICAgIGNhc2UgXCJkZW1vbnRhYmxlXCI6XG4gICAgICAgICAgcmVzdWx0YXRzID0gcmVzdWx0YXRzLmZpbHRlcihhbm5vbmNlID0+IGFubm9uY2UuaXNEaXNtb3VudGFibGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibm9uRGVtb250YWJsZVwiOlxuICAgICAgICAgIHJlc3VsdGF0cyA9IHJlc3VsdGF0cy5maWx0ZXIoYW5ub25jZSA9PiAhYW5ub25jZS5pc0Rpc21vdW50YWJsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJuZXVmXCI6XG4gICAgICAgICAgcmVzdWx0YXRzID0gcmVzdWx0YXRzLmZpbHRlcihhbm5vbmNlID0+IGFubm9uY2UuZnVybml0dXJlQ29uZGl0aW9uID09PSBcIk5ldWZcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ1c2FnZVwiOlxuICAgICAgICAgIHJlc3VsdGF0cyA9IHJlc3VsdGF0cy5maWx0ZXIoYW5ub25jZSA9PiBhbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbiA9PT0gXCJVc2Fnw6lcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlbmRvbW1hZ2VcIjpcbiAgICAgICAgICByZXN1bHRhdHMgPSByZXN1bHRhdHMuZmlsdGVyKGFubm9uY2UgPT4gYW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb24gPT09IFwiRW5kb21tYWfDqVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBBdWN1bmUgYWN0aW9uIHNpIGxlIGZpbHRyZSBuJ2VzdCBwYXMgcmVjb25udVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGxpY2F0aW9uIGR1IHRyaVxuICAgIHJldHVybiByZXN1bHRhdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKG9wdGlvblRyaSA9PT0gXCJwcml4Q3JvaXNzYW50XCIpICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xuICAgICAgaWYgKG9wdGlvblRyaSA9PT0gXCJwcml4RGVjcm9pc3NhbnRcIikgcmV0dXJuIGIucHJpY2UgLSBhLnByaWNlO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH0sIFt1c2VyQW5ub25jZXMsIHRlcm1lUmVjaGVyY2hlLCBvcHRpb25UcmksIGZpbHRyZV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIHsvKiBIZWFkZXIgYXZlYyBsYSBsb2dpcXVlIGQnaW1wb3J0YXRpb24gZGUgbCdpY8O0bmUgKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIHNoYWRvdyB6LTEwXCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0zIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8TGluayB0bz1cIi9yZWFjdFwiIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTcwMFwiPlxuICAgICAgICAgIExlQm9uQ29pblxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICB7LyogRMOpcGxhY2VyIGxlcyBzw6lsZWN0ZXVycyBkZSB0cmkgZXQgZmlsdHJlIGljaSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdG9ySWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS02MDBcIiAvPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJ0cmlcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3B0aW9uVHJpKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0xIHNoYWRvdy1zbSBmb2N1czpib3JkZXItb3JhbmdlLTUwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctb3JhbmdlLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpeENyb2lzc2FudFwiPlByaXggY3JvaXNzYW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaXhEZWNyb2lzc2FudFwiPlByaXggZMOpY3JvaXNzYW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkF1Y3VuIHRyaTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMVwiPlxuICAgICAgICAgICAgICA8U2VsZWN0b3JJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTYwMFwiIC8+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBpZD1cImZpbHRyZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaWx0cmUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTEgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1vcmFuZ2UtNTAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1vcmFuZ2UtMjAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BdWN1biBmaWx0cmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVtb250YWJsZVwiPkTDqW1vbnRhYmxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbkRlbW9udGFibGVcIj5Ob24gRMOpbW9udGFibGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV1ZlwiPsOJdGF0IE5ldWY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXNhZ2VcIj7DiXRhdCBVc8OpPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuZG9tbWFnZVwiPsOJdGF0IEVuZG9tbWFnw6k8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEljw7RuZXMgZXQgYmFycmUgZGUgcmVjaGVyY2hlICovfVxuICAgICAgICAgICAgPEJhcnJlUmVjaGVyY2hlIG9uUmVjaGVyY2hlPXtzZXRUZXJtZVJlY2hlcmNoZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHsvKiBTZSBjb25uZWN0ZXIgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2ZpbFwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIDxVc2VySWNvbiBjbGFzc05hbWU9XCJ3LTcgaC03XCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPlByb2ZpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIFxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgY29udGFpbmVyIG14LWF1dG8gcHgtNCBwdC1bNzBweF1cIj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHB5LTE2IHNtOnB4LTYgbGc6cHgtOFwiPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAteC02IGdhcC15LTEwIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgIFxuICAgICAge2Fubm9uY2VzRmlsdHJlZXMubWFwKChhbm5vbmNlKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXthbm5vbmNlLmlkfSBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3cgc3BhY2UteS0yXCI+XG4gICAgICAgICAgey8qIFbDqXJpZmllciBzaSBsJ2Fubm9uY2UgYSBkZXMgcGhvdG9zICovfVxuICAgICAgICAgIHthbm5vbmNlLnBob3RvcyAmJiBhbm5vbmNlLnBob3Rvcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIC8vIEFmZmljaGVyIHVuaXF1ZW1lbnQgbGEgcHJlbWnDqHJlIHBob3RvIGRlIGxhIGNvbGxlY3Rpb25cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC13LTEgYXNwZWN0LWgtMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2Fubm9uY2UucGhvdG9zWzBdLnBob3RvUGF0aH0gLy8gVXRpbGlzZXIgbGUgcHJlbWllciDDqWzDqW1lbnQgZGUgbGEgY29sbGVjdGlvblxuICAgICAgICAgICAgICBhbHQ9e2BQaG90byBwcmluY2lwYWxlIGRlICR7YW5ub25jZS5mdXJuaXR1cmVUeXBlfWB9IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAvLyBGYWxsYmFjayBzaSBhdWN1bmUgcGhvdG8gbidlc3QgZGlzcG9uaWJsZVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMSBhc3BlY3QtaC0xIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPHNwYW4+UGFzIGQnaW1hZ2UgZGlzcG9uaWJsZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZFwiPnthbm5vbmNlLmZ1cm5pdHVyZVR5cGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e2Fubm9uY2UuV2lkdGh9IHgge2Fubm9uY2UuTGVuZ3RofSB4IHthbm5vbmNlLkhlaWdodH0gY208L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMFwiPnthbm5vbmNlLnByaWNlfSDigqw8L3A+XG4gICAgICAgICAgey8qIEFmZmljaGVyIGxhIGRhdGUgZGUgbCdhbm5vbmNlICovfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkRhdGUgZGUgbWlzZSBlbiBsaWduZToge25ldyBEYXRlKGFubm9uY2UuYW5ub3VuY2VtZW50RGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIHsvKiBBZmZpY2hlciBsZSBsaWV1IGRlIHN0b2NrYWdlICovfVxuICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5MaWV1OiB7YW5ub25jZS5zdG9yYWdlTG9jYXRpb259PC9wPiAqL31cbiAgICAgICAgICB7LyogQ29uZGl0aW9ucyBkZSBkw6lwbGFjZW1lbnQgKi99XG4gICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPsOAIHLDqWN1cMOpcmVyOiB7YW5ub25jZS5tb3ZlbWVudENvbmRpdGlvbn08L3A+ICovfVxuICAgICAgICAgIHsvKiDDiXRhdCBkZSBsJ2FydGljbGUgKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC1zbSAke1xuICAgICAgICAgICAgICBhbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbiA9PT0gJ05ldWYnID8gICd0ZXh0LWdyZWVuLTUwMCcgOlxuICAgICAgICAgICAgICBhbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbiA9PT0gJ1VzYWfDqScgPyAndGV4dC1vcmFuZ2UtNTAwJyA6XG4gICAgICAgICAgICAgJ3RleHQtcmVkLTUwMCdcbiAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgIMOJdGF0OiB7YW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlByb3ByacOpdGFpcmUgOiB7YW5ub25jZS51c2VyLmZpcnN0TmFtZX08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZhdm9yaXRlQ2xpY2soYW5ub25jZS5pZCl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgIHtmYXZvcml0ZXMuaGFzKGFubm9uY2UuaWQpID8gKFxuICAgICAgICAgICAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxPdXRsaW5lSGVhcnRJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIEJvdXRvbiBwb3VyIHZvaXIgcGx1cyBkZSBkw6l0YWlscyBvdSBjb250YWN0ZXIgbGUgdmVuZGV1ciAqL31cbiAgICAgICAgICA8YSBocmVmPXtgL21vZGlmeS8ke2Fubm9uY2UuaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTkwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIE1vZGlmaWVyXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHsvKiBBam91dCBkdSBib3V0b24gXCJTdXBwcmltZXJcIiAqL31cbiAgICAgICAgICA8YSBocmVmPXtgL2RlbGV0ZS8ke2Fubm9uY2UuaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIGhvdmVyOnRleHQtcmVkLTkwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICBTdXBwcmltZXJcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBVc2VyQW5ub25jZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUGhvdG9ncmFwaEljb24sIFhJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cblxuZnVuY3Rpb24gQWRkYW5ub25jZSgpIHtcbiAgY29uc3QgW2Fubm9uY2UsIHNldEFubm9uY2VdID0gdXNlU3RhdGUoe1xuICAgIHR5cGVNZXVibGU6IFwiXCIsXG4gICAgbG9uZ3VldXI6IFwiXCIsXG4gICAgbGFyZ2V1cjogXCJcIixcbiAgICBoYXV0ZXVyOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGRlbW9udGFibGU6IFwiMVwiLFxuICAgIGxpZXVTdG9ja2FnZTogXCJcIixcbiAgICBQcmljZTpcIlwiLFxuICAgIGNvbmRpdGlvbkRlcGxhY2VtZW50OiBcIlwiLFxuICAgIGV0YXQ6IFwibmV1ZlwiLFxuICAgIGlzUmVwYWlyYWJsZTogXCIxXCIsXG4gICAgcGhvdG9zOiBbXSxcbiAgfSk7XG5cbiAgY29uc3QgW3Bob3Rvcywgc2V0UGhvdG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ByZXZpZXdJbWFnZXMsIHNldFByZXZpZXdJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0QW5ub25jZSh7IC4uLmFubm9uY2UsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGhvdG9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzKSB7XG4gICAgICAvLyBDb252ZXJ0aXIgbGVzIGZpY2hpZXJzIHTDqWzDqWNoYXJnw6lzIGVuIHRhYmxlYXUgZXQgZmlsdHJlciBsZXMgZG91YmxvbnNcbiAgICAgIGNvbnN0IG5ld1Bob3Rvc0FycmF5ID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQuZmlsZXMpLmZpbHRlcihcbiAgICAgICAgKGZpbGUpID0+ICFwaG90b3Muc29tZShwaG90byA9PiBwaG90by5uYW1lID09PSBmaWxlLm5hbWUpXG4gICAgICApO1xuXG4gICAgICAvLyBBam91dGVyIGxlcyBub3V2ZWxsZXMgcGhvdG9zIMOgIGwnw6l0YXQgYWN0dWVsLCBzYW5zIGTDqXBhc3NlciAxMCBpbWFnZXNcbiAgICAgIHNldFBob3RvcyhwaG90b3MgPT4gWy4uLnBob3RvcywgLi4ubmV3UGhvdG9zQXJyYXldLnNsaWNlKDAsIDEwKSk7XG4gICAgICBcbiAgICAgIC8vIFByw6l2aXN1YWxpc2VyIGxlcyBpbWFnZXNcbiAgICAgIGNvbnN0IG5ld1ByZXZpZXdJbWFnZXMgPSBuZXdQaG90b3NBcnJheS5tYXAoZmlsZSA9PiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcbiAgICAgIHNldFByZXZpZXdJbWFnZXMocHJldkltYWdlcyA9PiBbLi4ucHJldkltYWdlcywgLi4ubmV3UHJldmlld0ltYWdlc10pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVQaG90byA9IChuYW1lKSA9PiB7XG4gICAgLy8gTWV0dHJlIMOgIGpvdXIgbCfDqXRhdCBkZXMgcGhvdG9zIGV0IGRlcyBhcGVyw6d1c1xuICAgIHNldFBob3RvcyhwaG90b3MgPT4gcGhvdG9zLmZpbHRlcihwaG90byA9PiBwaG90by5uYW1lICE9PSBuYW1lKSk7XG4gICAgc2V0UHJldmlld0ltYWdlcyhwcmV2SW1hZ2VzID0+IHByZXZJbWFnZXMuZmlsdGVyKHVybCA9PiB7XG4gICAgICAvLyBDcsOpZXIgdW4gb2JqZXQgRmlsZSDDoCBwYXJ0aXIgZGUgbCdVUkwgcG91ciBhY2PDqWRlciDDoCBgbmFtZWBcbiAgICAgIGxldCBtYXRjaGVzID0gdXJsLm1hdGNoKC9ibG9iOiguKikkLyk7XG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShbXCJcIl0sIG5hbWUpO1xuICAgICAgICByZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSAhPT0gdXJsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkpO1xuICB9O1xuXG4gIC8vIFV0aWxpc2V6IGNldHRlIGZvbmN0aW9uIHBvdXIgbmV0dG95ZXIgbGVzIFVSTHMgbG9ycyBkdSBkw6ltb250YWdlIGR1IGNvbXBvc2FudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBwcmV2aWV3SW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4gVVJMLnJldm9rZU9iamVjdFVSTChpbWFnZSkpO1xuICAgIH07XG4gIH0sIFtwcmV2aWV3SW1hZ2VzXSk7XG5cbiAgY29uc3QgcmVuZGVyUGhvdG9zID0gKCkgPT4ge1xuICAgIHJldHVybiBwaG90b3MubWFwKChwaG90bywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBob3RvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChwaG90byk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17cGhvdG8ubmFtZX0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIiA+XG4gICAgICAgICAgPGltZyBcbiAgICAgICAgICAgIHNyYz17cGhvdG9VUkx9IFxuICAgICAgICAgICAgYWx0PXtgQXBlcsOndSAke2luZGV4fWB9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yNCBoLTI0IG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVQaG90byhwaG90by5uYW1lKX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJnLXJlZC0xMDAgcC0xIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1yZWQtNjAwXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FkZEFubm9uY2VcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFubm9uY2UpLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBhbGVydChcIkFqb3V0IHLDqXVzc2lcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkwnYWpvdXQgYSDDqWNob3XDqSEgXCIgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBzb3VtaXNzaW9uIGR1IGZvcm11bGFpcmVcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBzaGFkb3cgei0xMFwiPlxuICAgICAgXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxCdXR0b24gaHJlZj1cIi9hbGxBbm5vbmNlc1wiIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTcwMFwiPlxuICAgICAgICAgIExlQm9uQ29pblxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGV4dFwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZmxleC1ncm93XCI+XG4gICAgICAgICAgRMOpcG9zZXIgdm90cmUgYW5ub25jZVxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBocmVmPVwiL2FsbEFubm9uY2VzXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLXdoaXRlIHB5LTIgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgc2hhZG93LXNtIGJvcmRlciBib3JkZXItZ3JheS0zMDAgaG92ZXI6Ymctb3JhbmdlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgPlxuICAgICAgICAgIFF1aXR0ZXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gbXktNSBiZy13aGl0ZSBwLTggcm91bmRlZC1sZyBzaGFkb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC1bNHJlbV1cIj48L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi0zXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVNZXVibGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBUeXBlIGRlIG1ldWJsZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwidHlwZU1ldWJsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0eXBlTWV1YmxlXCJcbiAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICB2YWx1ZT17YW5ub25jZS50eXBlTWV1YmxlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9uZ3VldXJcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIExvbmd1ZXVyIChjbSlcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9uZ3VldXJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb25ndWV1clwiXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YW5ub25jZS5sb25ndWV1cn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFyZ2V1clwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgTGFyZ2V1ciAoY20pXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cImxhcmdldXJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXJnZXVyXCJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthbm5vbmNlLmxhcmdldXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhhdXRldXJcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIEhhdXRldXIgKGNtKVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJoYXV0ZXVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaGF1dGV1clwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YW5ub25jZS5oYXV0ZXVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Fubm9uY2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVtb250YWJsZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIETDqW1vbnRhYmxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBpZD1cImRlbW9udGFibGVcIlxuICAgICAgICAgICAgICBuYW1lPVwiZGVtb250YWJsZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICB2YWx1ZT17YW5ub25jZS5kZW1vbnRhYmxlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3VpPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+Tm9uPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlzUmVwYWlyYWJsZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIFLDqXBhcmFibGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGlkPVwiaXNSZXBhaXJhYmxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImlzUmVwYWlyYWJsZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3VpPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+Tm9uPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxpZXVTdG9ja2FnZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIExpZXUgZGUgc3RvY2thZ2VcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImxpZXVTdG9ja2FnZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsaWV1U3RvY2thZ2VcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Fubm9uY2UubGlldVN0b2NrYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25kaXRpb25EZXBsYWNlbWVudFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIENvbmRpdGlvbiBkZSBkw6lwbGFjZW1lbnRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImNvbmRpdGlvbkRlcGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmRpdGlvbkRlcGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgIHZhbHVlPXthbm5vbmNlLmNvbmRpdGlvbkRlcGxhY2VtZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJldGF0XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgw4l0YXRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGlkPVwiZXRhdFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJldGF0XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIm5ldWZcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXVmXCI+TmV1Zjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXNhZ8OpXCI+VXNhZ8OpPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbmRvbW1hZ8OpXCI+RW5kb21tYWfDqTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlByaWNlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgUHJpeFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwiUHJpY2VcIlxuICAgICAgICAgICAgICBuYW1lPVwiUHJpY2VcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthbm5vbmNlLnByaWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQWpvdXQgZGUgcGhvdG9zICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob3RvLXVwbG9hZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1iLTRcIj5cbiAgICAgICAgICAgICAgQWpvdXRlciBkZXMgcGhvdG9zXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtNCBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtNCBqdXN0aWZ5LWNlbnRlciBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICAgICAge3JlbmRlclBob3RvcygpfVxuICAgICAgICAgICAgICAgICAge3Bob3Rvcy5sZW5ndGggPCAxMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvdG8tdXBsb2FkXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMjQgaC0yNCBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGhvdmVyOmJvcmRlci1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvZ3JhcGhJY29uIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInBob3RvLXVwbG9hZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBob3RvQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC02XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctb3JhbmdlLTYwMCBweS0yIHB4LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1vcmFuZ2UtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vcmFuZ2UtNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQdWJsaWVyIGwnYW5ub25jZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PjwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRhbm5vbmNlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFydEljb24sIENoYXRBbHQySWNvbiwgTWFwSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XG5pbXBvcnQgeyBQaG90b2dyYXBoSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRGV0YWlsQW5ub25jZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IFthbm5vbmNlRGV0YWlsLCBzZXRBbm5vbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2ltdWxlciB1biBhcHBlbCByw6lzZWF1IHBvdXIgcsOpY3Vww6lyZXIgbGVzIGTDqXRhaWxzXG4gICAgZmV0Y2goYC9kZXRhaWxBbm5vbmNlLyR7aWR9YCkgLy8gQXNzdXJlei12b3VzIHF1ZSBjZXR0ZSBVUkwgZXN0IGfDqXLDqWUgcGFyIFN5bWZvbnkgcG91ciByZXRvdXJuZXIgbGVzIGTDqXRhaWxzIGRlIGwnYW5ub25jZVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhIHJlY2VpdmVkOicsIGRhdGEpOyAvLyBWw6lyaWZpZXogY2UgcXVpIGVzdCBpbXByaW3DqSBpY2lcbiAgICAgICAgc2V0QW5ub25jZShkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZSBsXFwnYW5ub25jZScsIGVycm9yKSk7XG4gIH0sIFtpZF0pO1xuXG4gIGlmIChhbm5vbmNlRGV0YWlsKSB7XG4gICAgcmV0dXJuIDxkaXY+Q2hhcmdlbWVudCBkZXMgZMOpdGFpbHMuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IG92ZXJmbG93LWhpZGRlbiBzbTpyb3VuZGVkLWxnXCI+XG4gICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBzcGFjZS14LTQgcC00XCI+XG4gICAgXG4gICAgICB7cGhvdG9zLmxlbmd0aCA+IDAgPyBwaG90b3MubWFwKChwaG90bywgaW5kZXgpID0+IChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgc3JjPXtwaG90by5waG90b1BhdGh9IC8vIEFzc3VyZXotdm91cyBxdWUgbGUgY2hlbWluIGVzdCBjb3JyZWN0XG4gICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNDAgdy00MCBmbGV4LW5vbmUgYmctY292ZXIgcm91bmRlZC10IGxnOnJvdW5kZWQtdC1ub25lIGxnOnJvdW5kZWQtbCB0ZXh0LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAvPlxuICAgICAgKSkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC00XCI+QXVjdW5lIGltYWdlIGRpc3BvbmlibGU8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktNSBzbTpweC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPnthbm5vbmNlRGV0YWlsLmZ1cm5pdHVyZVR5cGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS05MDBcIj57YW5ub25jZURldGFpbC5wcmljZX0g4oKsPC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgaW5saW5lLWZsZXggdGV4dC14cyBsZWFkaW5nLTUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tODAwXCI+XG4gICAgICAgICAgICB7YW5ub25jZURldGFpbC5mdXJuaXR1cmVDb25kaXRpb259XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICA8ZGw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHB4LTQgcHktNSBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB4LTZcIj5cbiAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5EZXNjcmlwdGlvbjwvZHQ+XG4gICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS05MDAgc206bXQtMCBzbTpjb2wtc3Bhbi0yXCI+e2Fubm9uY2VEZXRhaWwuZGVzY3JpcHRpb259PC9kZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgcHktNSBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB4LTZcIj5cbiAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5Mb2NhbGlzYXRpb248L2R0PlxuICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIHNtOm10LTAgc206Y29sLXNwYW4tMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8TWFwSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS00MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e2xvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHB4LTQgcHktNSBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB4LTZcIj5cbiAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5WZW5kZXVyPC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTkwMCBzbTptdC0wIHNtOmNvbC1zcGFuLTJcIj57YW5ub25jZURldGFpbC5maXJzdE5hbWV9IHthbm5vbmNlRGV0YWlsLmxhc3ROYW1lfTwvZGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTQgc206cHgtNiBmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtM1wiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTcwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPENoYXRBbHQySWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS00MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5Db250YWN0ZXIgbGUgdmVuZGV1cjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWdyYXktNzAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPkFqb3V0ZXIgYXV4IGZhdm9yaXM8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxQaG90b2dyYXBoSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5Wb2lyIGxlcyBwaG90b3M8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxBbm5vbmNlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuXG5cbmZ1bmN0aW9uIE1vZGlmeSgpIHtcbiAgY29uc3QgZGF0YUFubm9uY2UgPSBKU09OLnBhcnNlKGRhdGEpOyBcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IFthbm5vbmNlLCBzZXRBbm5vbmNlXSA9IHVzZVN0YXRlKHtcbiAgICB0eXBlTWV1YmxlIDogZGF0YUFubm9uY2UuZnVybml0dXJlVHlwZSxcbiAgICBsb25ndWV1cjogZGF0YUFubm9uY2UuTGVuZ3RoLFxuICAgIGxhcmdldXI6IGRhdGFBbm5vbmNlLldpZHRoLFxuICAgIGhhdXRldXI6IGRhdGFBbm5vbmNlLkhlaWdodCxcbiAgICBkZXNjcmlwdGlvbjogZGF0YUFubm9uY2UuZGVzY3JpcHRpb24sXG4gICAgZGVtb250YWJsZTogZGF0YUFubm9uY2UuaXNEaXNtb3VudGFibGUsXG4gICAgbGlldVN0b2NrYWdlOiBkYXRhQW5ub25jZS5zdG9yYWdlTG9jYXRpb24sXG4gICAgUHJpY2U6IGRhdGFBbm5vbmNlLnByaWNlLFxuICAgIGNvbmRpdGlvbkRlcGxhY2VtZW50OiBkYXRhQW5ub25jZS5tb3ZlbWVudENvbmRpdGlvbixcbiAgICBldGF0OiBkYXRhQW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb24sXG4gICAgc3RhdHVzOiBkYXRhQW5ub25jZS5hbm5vdW5jZW1lbnRTdGF0dXMsXG4gICAgaXNSZXBhaXJhYmxlOiBkYXRhQW5ub25jZS5pc1JlcGFpcmFibGUsXG4gIH0pO1xuXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldEFubm9uY2UoeyAuLi5hbm5vbmNlLCBbbmFtZV06IHZhbHVlfSk7XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2NoYW5nZS9cIiArIGRhdGFBbm5vbmNlLmlkLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYW5ub25jZSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGFsZXJ0KFwiTW9kaWZpY2F0aW9uIHLDqXVzc2lcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkxhIG1vZGlmaWNhdGlvbiBhIMOpY2hvdcOpIVwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIHNvdW1pc3Npb24gZHUgZm9ybXVsYWlyZVwiLCBlcnJvcik7XG4gICAgfVxuICAgIC8vbmF2aWdhdGUoXCIvY2hhbmdlL1wiICsgZGF0YUFubm9uY2UuaWQsIHsgc3RhdGU6IHsgYW5ub25jZSB9IH0pO1xuXG4gICAgXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIHNoYWRvdyB6LTEwXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPExpbmsgdG89XCIvYWRkXCIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LW9yYW5nZS02MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNzAwXCI+XG4gICAgICAgICAgTGVib25jb2luXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGV4dFwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZmxleC1ncm93XCI+XG4gICAgICAgICAgTW9kaWZpZXIgbCdhbm5vbmNlLCBsYWlzc2V6IGxlIGNoYW1wcyBpbmNoYW5nw6kgcG91ciBuZSByaWVuIG1vZGlmaWVyXG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGhyZWY9XCIvYWRtaW5Bbm5vbmNlc1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy13aGl0ZSBweS0yIHB4LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLW9yYW5nZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICAgID5cbiAgICAgICAgICBRdWl0dGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIG15LTUgYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgc2hhZG93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtWzRyZW1dXCI+PC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tM1wiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlTWV1YmxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgVHlwZSBkZSBtZXVibGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cInR5cGVNZXVibGVcIlxuICAgICAgICAgICAgICBuYW1lPVwidHlwZU1ldWJsZVwiXG4gICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGFBbm5vbmNlLmZ1cm5pdHVyZVR5cGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvbmd1ZXVyXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICBMb25ndWV1ciAoY20pXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cImxvbmd1ZXVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibG9uZ3VldXJcIlxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhQW5ub25jZS5MZW5ndGh9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhcmdldXJcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIExhcmdldXIgKGNtKVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsYXJnZXVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFyZ2V1clwiXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGFBbm5vbmNlLldpZHRofVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJoYXV0ZXVyXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICBIYXV0ZXVyIChjbSlcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwiaGF1dGV1clwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImhhdXRldXJcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhQW5ub25jZS5IZWlnaHR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGFBbm5vbmNlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlbW9udGFibGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBEw6ltb250YWJsZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgaWQ9XCJkZW1vbnRhYmxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRlbW9udGFibGVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtkYXRhQW5ub25jZS5pc0Rpc21vdW50YWJsZSA/IFwiMVwiIDogXCIwXCJ9IHNlbGVjdGVkIGRpc2FibGVkIGhpZGRlbj57ZGF0YUFubm9uY2UuaXNEaXNtb3VudGFibGUgPyBcIk91aVwiIDogXCJOb25cIn08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5PdWk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5Ob248L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGlldVN0b2NrYWdlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgTGlldSBkZSBzdG9ja2FnZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwibGlldVN0b2NrYWdlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImxpZXVTdG9ja2FnZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGFBbm5vbmNlLnN0b3JhZ2VMb2NhdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiUHJpY2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBQcml4XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJQcmljZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbSBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGFBbm5vbmNlLnByaWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25kaXRpb25EZXBsYWNlbWVudFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIENvbmRpdGlvbiBkZSBkw6lwbGFjZW1lbnRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImNvbmRpdGlvbkRlcGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmRpdGlvbkRlcGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YUFubm9uY2UubW92ZW1lbnRDb25kaXRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV0YXRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICDDiXRhdFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgaWQ9XCJldGF0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImV0YXRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhQW5ub25jZS5mdXJuaXR1cmVDb25kaXRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17ZGF0YUFubm9uY2UuZnVybml0dXJlQ29uZGl0aW9ufSBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+e2RhdGFBbm5vbmNlLmZ1cm5pdHVyZUNvbmRpdGlvbn08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5ldWZcIj5OZXVmPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVc2Fnw6lcIj5Vc2Fnw6k8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVuZG9tbWFnw6lcIj5FbmRvbW1hZ8OpPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXR1c1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIFN0YXR1c1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS00MDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YUFubm9uY2UuYW5ub3VuY2VtZW50U3RhdHVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2RhdGFBbm5vbmNlLmFubm91bmNlbWVudFN0YXR1c30gc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPntkYXRhQW5ub25jZS5hbm5vdW5jZW1lbnRTdGF0dXN9PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBY3RpdmVcIj5BY3RpdmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFyY2hpdsOpXCI+QXJjaGl2w6k8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRvbm7DqVwiPkRvbm7DqTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRMOpdHJ1aXRcIj5Ew6l0cnVpdDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc1JlcGFpcmFibGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBSw6lwYXJhYmxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBpZD1cImlzUmVwYWlyYWJsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJpc1JlcGFpcmFibGVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20gcHktMiBweC0zXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtkYXRhQW5ub25jZS5pc1JlcGFpcmFibGUgPyBcIjFcIiA6IFwiMFwifSBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+e2RhdGFBbm5vbmNlLmlzUmVwYWlyYWJsZSA/IFwiT3VpXCIgOiBcIk5vblwifTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk91aTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPk5vbjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG10LTZcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1vcmFuZ2UtNjAwIHB5LTIgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLW9yYW5nZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9yYW5nZS01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1vZGlmaWVyIGwnYW5ub25jZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PjwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RpZnk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJBY2NldWlsIiwiTG9naW4iLCJSZWdpc3RlciIsIkFkZCIsIkFsbCIsIkRldGFpbCIsIlByb2ZpbCIsIk1vZGlmeUFubm9uY2UiLCJBZG1pbkFubm9uY2VzIiwiVXNlckFubm9uY2VzIiwiYW5ub25jZXMiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJhbm5vbmNlc0RhdGEiLCJhbm5vbmNlc0FsbCIsImFubm9uY2VzQWxsRGF0YSIsImFsbEEiLCJ1c2VyQSIsInJvdXRlciIsInBhdGgiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFubm9uY2VzSW5pdGlhbGVzIiwiYWxsQW5ub25jZXMiLCJ1c2VyQW5ub25jZXMiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiQmFycmVSZWNoZXJjaGUiLCJTZWFyY2hJY29uIiwiSGVhcnRJY29uIiwiVXNlckljb24iLCJDaGF0SWNvbiIsIlNlbGVjdG9ySWNvbiIsIkxpbmsiLCJPdXRsaW5lSGVhcnRJY29uIiwiRm9vdGVyIiwiX3JlZiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRlcm1lUmVjaGVyY2hlIiwic2V0VGVybWVSZWNoZXJjaGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm9wdGlvblRyaSIsInNldE9wdGlvblRyaSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZmlsdHJlIiwic2V0RmlsdHJlIiwiX3VzZVN0YXRlNyIsIlNldCIsIl91c2VTdGF0ZTgiLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJoYW5kbGVGYXZvcml0ZUNsaWNrIiwiYW5ub25jZUlkIiwicHJldkZhdm9yaXRlcyIsIm5ld0Zhdm9yaXRlcyIsImhhcyIsImFkZCIsImFubm9uY2VzRmlsdHJlZXMiLCJyZXN1bHRhdHMiLCJmaWx0ZXIiLCJhbm5vbmNlIiwiZnVybml0dXJlVHlwZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJpc0Rpc21vdW50YWJsZSIsImZ1cm5pdHVyZUNvbmRpdGlvbiIsInNvcnQiLCJhIiwiYiIsInByaWNlIiwiY2xhc3NOYW1lIiwidG8iLCJzdHlsZSIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJzdHJva2UiLCJ2aWV3Qm94IiwieG1sbnMiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25SZWNoZXJjaGUiLCJtYXAiLCJrZXkiLCJwaG90b3MiLCJsZW5ndGgiLCJzcmMiLCJwaG90b1BhdGgiLCJhbHQiLCJjb25jYXQiLCJXaWR0aCIsIkxlbmd0aCIsIkhlaWdodCIsIkRhdGUiLCJhbm5vdW5jZW1lbnREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidXNlciIsImZpcnN0TmFtZSIsIm9uQ2xpY2siLCJocmVmIiwiaGFuZGxlUmVjaGVyY2hlIiwicHJldmVudERlZmF1bHQiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJCdXR0b24iLCJMaXN0ZUFubm9uY2VzIiwiRXllSWNvbiIsIkV5ZU9mZkljb24iLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJQcm9maWxVdGlsaXNhdGV1ciIsImVtYWlsIiwicGhvbmUiLCJhZG1pbiIsImdldEF0dHJpYnV0ZSIsImxhc3ROYW1lIiwiaXNBZG1pbiIsIkZyYWdtZW50IiwidmFyaWFudCIsIlBob25lSWNvbiIsIkZsYWdJY29uIiwiYWN0aW9uIiwibWV0aG9kIiwicGF0dGVybiIsIm1heExlbmd0aCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiaXRlciIsIkFycmF5IiwiZnJvbSIsImlzQXJyYXkiLCJfYXJyYXlMaWtlVG9BcnJheSIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJvYmoiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm1pbkxlbiIsInRvU3RyaW5nIiwidGVzdCIsImxlbiIsImFycjIiLCJ1c2VOYXZpZ2F0ZSIsIlBob3RvZ3JhcGhJY29uIiwiWEljb24iLCJBZGRhbm5vbmNlIiwidHlwZU1ldWJsZSIsImxvbmd1ZXVyIiwibGFyZ2V1ciIsImhhdXRldXIiLCJkZXNjcmlwdGlvbiIsImRlbW9udGFibGUiLCJsaWV1U3RvY2thZ2UiLCJQcmljZSIsImNvbmRpdGlvbkRlcGxhY2VtZW50IiwiZXRhdCIsImlzUmVwYWlyYWJsZSIsInNldEFubm9uY2UiLCJzZXRQaG90b3MiLCJwcmV2aWV3SW1hZ2VzIiwic2V0UHJldmlld0ltYWdlcyIsIm5hdmlnYXRlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJfZSR0YXJnZXQiLCJoYW5kbGVQaG90b0NoYW5nZSIsImV2ZW50IiwiZmlsZXMiLCJuZXdQaG90b3NBcnJheSIsImZpbGUiLCJzb21lIiwicGhvdG8iLCJuZXdQcmV2aWV3SW1hZ2VzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldkltYWdlcyIsImhhbmRsZVJlbW92ZVBob3RvIiwidXJsIiwibWF0Y2hlcyIsIm1hdGNoIiwiRmlsZSIsImltYWdlIiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwiaW5kZXgiLCJwaG90b1VSTCIsImhhbmRsZVN1Ym1pdCIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5Iiwib2siLCJhbGVydCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsIl94IiwibWluIiwicm93cyIsImRlZmF1bHRWYWx1ZSIsIm11bHRpcGxlIiwiYWNjZXB0IiwiQ2hhdEFsdDJJY29uIiwiTWFwSWNvbiIsInVzZUxvY2F0aW9uIiwidXNlUGFyYW1zIiwiRGV0YWlsQW5ub25jZSIsIl91c2VQYXJhbXMiLCJhbm5vbmNlRGV0YWlsIiwianNvbiIsImRhdGEiLCJkYXRlIiwibG9jYXRpb24iLCJNb2RpZnkiLCJkYXRhQW5ub25jZSIsInN0b3JhZ2VMb2NhdGlvbiIsIm1vdmVtZW50Q29uZGl0aW9uIiwiYW5ub3VuY2VtZW50U3RhdHVzIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=