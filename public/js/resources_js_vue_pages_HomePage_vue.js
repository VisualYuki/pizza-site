"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_pages_HomePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/PizzaItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/PizzaItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PizzaItem",
  props: {
    pizzaInfo: {
      required: true,
      type: Object
    }
  },
  methods: {
    addToCart: function addToCart() {
      var _this = this;

      axios.post("/api/cart/add", {
        id: this.pizzaInfo.id
      }).then(function (response) {
        _this.$emit("refresh");
      });
    },
    removeFromCart: function removeFromCart() {
      var _this2 = this;

      axios.post("/api/cart/remove", {
        id: this.pizzaInfo.id
      }).then(function (response) {
        _this2.$emit("refresh");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/HomePage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/HomePage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PizzaItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PizzaItem.vue */ "./resources/js/vue/components/PizzaItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HomePage",
  components: {
    PizzaItem: _components_PizzaItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      pizzaInfos: null
    };
  },
  mounted: function mounted() {
    this.refresh();
  },
  methods: {
    refresh: function refresh() {
      var _this = this;

      axios.get("/api/pizzas").then(function (response) {
        _this.pizzaInfos = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/vue/components/PizzaItem.vue":
/*!***************************************************!*\
  !*** ./resources/js/vue/components/PizzaItem.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PizzaItem_vue_vue_type_template_id_e1a8946e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PizzaItem.vue?vue&type=template&id=e1a8946e&scoped=true& */ "./resources/js/vue/components/PizzaItem.vue?vue&type=template&id=e1a8946e&scoped=true&");
/* harmony import */ var _PizzaItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PizzaItem.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/PizzaItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PizzaItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PizzaItem_vue_vue_type_template_id_e1a8946e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PizzaItem_vue_vue_type_template_id_e1a8946e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e1a8946e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/PizzaItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/pages/HomePage.vue":
/*!*********************************************!*\
  !*** ./resources/js/vue/pages/HomePage.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePage_vue_vue_type_template_id_58d433c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=58d433c0&scoped=true& */ "./resources/js/vue/pages/HomePage.vue?vue&type=template&id=58d433c0&scoped=true&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/vue/pages/HomePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_58d433c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomePage_vue_vue_type_template_id_58d433c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58d433c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/pages/HomePage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/PizzaItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/vue/components/PizzaItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PizzaItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/PizzaItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/pages/HomePage.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/vue/pages/HomePage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/HomePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/PizzaItem.vue?vue&type=template&id=e1a8946e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/vue/components/PizzaItem.vue?vue&type=template&id=e1a8946e&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaItem_vue_vue_type_template_id_e1a8946e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaItem_vue_vue_type_template_id_e1a8946e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaItem_vue_vue_type_template_id_e1a8946e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PizzaItem.vue?vue&type=template&id=e1a8946e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/PizzaItem.vue?vue&type=template&id=e1a8946e&scoped=true&");


/***/ }),

/***/ "./resources/js/vue/pages/HomePage.vue?vue&type=template&id=58d433c0&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/vue/pages/HomePage.vue?vue&type=template&id=58d433c0&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_58d433c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_58d433c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_58d433c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePage.vue?vue&type=template&id=58d433c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/HomePage.vue?vue&type=template&id=58d433c0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/PizzaItem.vue?vue&type=template&id=e1a8946e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/PizzaItem.vue?vue&type=template&id=e1a8946e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-6 col-md-4" }, [
    _c("div", { staticClass: "card h-100" }, [
      _c("img", {
        staticClass: "card-img-top",
        attrs: { src: "/images/pizza-img.jpg", alt: "" },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("h3", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.pizzaInfo.name)),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "card-text" }, [
          _vm._v(
            "\n                " + _vm._s(_vm.pizzaInfo.desc) + "\n            "
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-between align-items-center mb-2",
          },
          [
            _c("div", { staticClass: "h6" }, [_vm._v("Price:")]),
            _vm._v(" "),
            _c("div", { staticClass: "fw-bold h5" }, [
              _vm._v(_vm._s(_vm.pizzaInfo.price) + " Rub."),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-outline-primary",
            class: {
              disabled: _vm.pizzaInfo.in_cart,
              "btn-danger text-danger": _vm.pizzaInfo.in_cart,
            },
            on: { click: _vm.addToCart },
          },
          [
            _vm.pizzaInfo.in_cart
              ? _c("span", [_vm._v(" Already in cart ")])
              : _c("span", [_vm._v("Add to cart")]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/HomePage.vue?vue&type=template&id=58d433c0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/HomePage.vue?vue&type=template&id=58d433c0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row g-3 align-items-stretch" },
    [
      !_vm.pizzaInfos
        ? [_vm._m(0), _vm._v(" "), _c("p", [_vm._v("loading ...")])]
        : _vm._l(_vm.pizzaInfos, function (pizzaInfo, index) {
            return _c("PizzaItem", {
              key: index,
              attrs: { pizzaInfo: pizzaInfo },
              on: { refresh: _vm.refresh },
            })
          }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "spinner-border",
        staticStyle: { width: "5rem", height: "5rem" },
        attrs: { role: "status" },
      },
      [_c("span", { staticClass: "visually-hidden" }, [_vm._v("Loading...")])]
    )
  },
]
render._withStripped = true



/***/ })

}]);