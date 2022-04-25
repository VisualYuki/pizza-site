"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_pages_OrderPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/OrderItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/OrderItem.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "",
  props: {
    orderItem: {
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/OrderPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/OrderPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_OrderItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/OrderItem.vue */ "./resources/js/vue/components/OrderItem.vue");
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "OrderPage",
  components: {
    OrderItem: _components_OrderItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isLoading: true,
      orderItems: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/order").then(function (response) {
      _this.isLoading = false;
      _this.orderItems = response.data;
    });
  },
  computed: {
    count: function count() {
      return this.orderItems.length;
    }
  }
});

/***/ }),

/***/ "./resources/js/vue/components/OrderItem.vue":
/*!***************************************************!*\
  !*** ./resources/js/vue/components/OrderItem.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderItem_vue_vue_type_template_id_2e758ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderItem.vue?vue&type=template&id=2e758ae2&scoped=true& */ "./resources/js/vue/components/OrderItem.vue?vue&type=template&id=2e758ae2&scoped=true&");
/* harmony import */ var _OrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderItem.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/OrderItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderItem_vue_vue_type_template_id_2e758ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderItem_vue_vue_type_template_id_2e758ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2e758ae2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/OrderItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/pages/OrderPage.vue":
/*!**********************************************!*\
  !*** ./resources/js/vue/pages/OrderPage.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderPage_vue_vue_type_template_id_9340fb8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderPage.vue?vue&type=template&id=9340fb8a&scoped=true& */ "./resources/js/vue/pages/OrderPage.vue?vue&type=template&id=9340fb8a&scoped=true&");
/* harmony import */ var _OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderPage.vue?vue&type=script&lang=js& */ "./resources/js/vue/pages/OrderPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderPage_vue_vue_type_template_id_9340fb8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderPage_vue_vue_type_template_id_9340fb8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9340fb8a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/pages/OrderPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/OrderItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/vue/components/OrderItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/OrderItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/pages/OrderPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/vue/pages/OrderPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/OrderPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/OrderItem.vue?vue&type=template&id=2e758ae2&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/vue/components/OrderItem.vue?vue&type=template&id=2e758ae2&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderItem_vue_vue_type_template_id_2e758ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderItem_vue_vue_type_template_id_2e758ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderItem_vue_vue_type_template_id_2e758ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderItem.vue?vue&type=template&id=2e758ae2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/OrderItem.vue?vue&type=template&id=2e758ae2&scoped=true&");


/***/ }),

/***/ "./resources/js/vue/pages/OrderPage.vue?vue&type=template&id=9340fb8a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/vue/pages/OrderPage.vue?vue&type=template&id=9340fb8a&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_9340fb8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_9340fb8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPage_vue_vue_type_template_id_9340fb8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderPage.vue?vue&type=template&id=9340fb8a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/OrderPage.vue?vue&type=template&id=9340fb8a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/OrderItem.vue?vue&type=template&id=2e758ae2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/OrderItem.vue?vue&type=template&id=2e758ae2&scoped=true& ***!
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
  return _c("tr", [
    _c("th", { attrs: { scope: "row" } }, [
      _vm._v(_vm._s(_vm.orderItem.order_id)),
    ]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.orderItem.registration_date))]),
    _vm._v(" "),
    _c("td", [_vm._v("-")]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.orderItem.total_price) + " Rub.")]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.orderItem.phone))]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.orderItem.street))]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.orderItem.name))]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/OrderPage.vue?vue&type=template&id=9340fb8a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/OrderPage.vue?vue&type=template&id=9340fb8a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    [
      _vm.isLoading
        ? [_vm._m(0)]
        : [
            _vm.count
              ? [
                  _c("table", { staticClass: "table" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.orderItems, function (item, index) {
                        return _c("OrderItem", {
                          key: index,
                          attrs: { orderItem: item },
                        })
                      }),
                      1
                    ),
                  ]),
                ]
              : [_vm._v(" Empty orders ")],
          ],
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Products")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Street")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);