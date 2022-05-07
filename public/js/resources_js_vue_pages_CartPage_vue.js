"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_pages_CartPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/RowProductItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/RowProductItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  name: "ProductItem",
  props: {
    productInfo: {
      required: true,
      type: Object
    }
  },
  methods: {
    removeFromCart: function removeFromCart() {
      var _this = this;

      axios.post("/api/cart/remove", {
        id: this.productInfo.id
      }).then(function (response) {
        _this.$emit("refresh");
      });
    },
    incrementCount: function incrementCount() {
      var _this2 = this;

      axios.post("/api/cart/increment-count", {
        id: this.productInfo.id
      }).then(function (response) {
        _this2.$emit("refresh");
      });
    },
    decrementCount: function decrementCount() {
      var _this3 = this;

      axios.post("/api/cart/decrement-count", {
        id: this.productInfo.id
      }).then(function (response) {
        _this3.$emit("refresh");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/CartPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/CartPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_RowProductItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/RowProductItem.vue */ "./resources/js/vue/components/RowProductItem.vue");
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
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CartPage",
  components: {
    RowProductItem: _components_RowProductItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      cartProducts: null,
      totalPrice: 0,
      isLoading: true,
      form: {
        name: "",
        phone: "",
        street: "",
        comment: null
      },
      isError: false,
      errorMessages: undefined
    };
  },
  mounted: function mounted() {
    this.refresh();
  },
  computed: {
    count: function count() {
      return this.cartProducts.length;
    }
  },
  methods: {
    buy: function buy() {
      var _this = this;

      axios.post("/api/cart/buy", {
        name: this.form.name,
        phone: this.form.phone,
        street: this.form.street,
        comment: this.form.comment
      }).then(function (response) {
        _this.$router.push("/order");
      })["catch"](function (error) {
        _this.isError = true;
        _this.errorMessages = error.response.data.errors;
      });
    },
    refresh: function refresh() {
      var _this2 = this;

      axios.get("/api/cart").then(function (response) {
        _this2.cartProducts = response.data;
        _this2.isLoading = false;
      });
      this.getTotalPrice();
    },
    getTotalPrice: function getTotalPrice() {
      var _this3 = this;

      axios.get("/api/cart/total-price").then(function (response) {
        _this3.totalPrice = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/vue/components/RowProductItem.vue":
/*!********************************************************!*\
  !*** ./resources/js/vue/components/RowProductItem.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RowProductItem_vue_vue_type_template_id_3b1725ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RowProductItem.vue?vue&type=template&id=3b1725ca&scoped=true& */ "./resources/js/vue/components/RowProductItem.vue?vue&type=template&id=3b1725ca&scoped=true&");
/* harmony import */ var _RowProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowProductItem.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/RowProductItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RowProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RowProductItem_vue_vue_type_template_id_3b1725ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RowProductItem_vue_vue_type_template_id_3b1725ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b1725ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/RowProductItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/pages/CartPage.vue":
/*!*********************************************!*\
  !*** ./resources/js/vue/pages/CartPage.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CartPage_vue_vue_type_template_id_f9682dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartPage.vue?vue&type=template&id=f9682dfe&scoped=true& */ "./resources/js/vue/pages/CartPage.vue?vue&type=template&id=f9682dfe&scoped=true&");
/* harmony import */ var _CartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartPage.vue?vue&type=script&lang=js& */ "./resources/js/vue/pages/CartPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartPage_vue_vue_type_template_id_f9682dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CartPage_vue_vue_type_template_id_f9682dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f9682dfe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/pages/CartPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/RowProductItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/vue/components/RowProductItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RowProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RowProductItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/RowProductItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RowProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/pages/CartPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/vue/pages/CartPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/CartPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/RowProductItem.vue?vue&type=template&id=3b1725ca&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/vue/components/RowProductItem.vue?vue&type=template&id=3b1725ca&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowProductItem_vue_vue_type_template_id_3b1725ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowProductItem_vue_vue_type_template_id_3b1725ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowProductItem_vue_vue_type_template_id_3b1725ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RowProductItem.vue?vue&type=template&id=3b1725ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/RowProductItem.vue?vue&type=template&id=3b1725ca&scoped=true&");


/***/ }),

/***/ "./resources/js/vue/pages/CartPage.vue?vue&type=template&id=f9682dfe&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/vue/pages/CartPage.vue?vue&type=template&id=f9682dfe&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartPage_vue_vue_type_template_id_f9682dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartPage_vue_vue_type_template_id_f9682dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartPage_vue_vue_type_template_id_f9682dfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartPage.vue?vue&type=template&id=f9682dfe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/CartPage.vue?vue&type=template&id=f9682dfe&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/RowProductItem.vue?vue&type=template&id=3b1725ca&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/RowProductItem.vue?vue&type=template&id=3b1725ca&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card mb-2 p-3" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-3" }, [
        _c("img", {
          staticClass: "d-md-block d-none",
          staticStyle: { height: "150px" },
          attrs: { src: _vm.productInfo.image },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-10 col-md-6 col d-flex align-items-start justify-content-center flex-column",
        },
        [
          _c("h3", { staticClass: "card-title text-nowrap mb-2" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.productInfo.name) +
                "\n            "
            ),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "card-text" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.productInfo.desc) +
                "\n            "
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
              _c("div", { staticClass: "h6 me-2" }, [_vm._v("Price:")]),
              _vm._v(" "),
              _c("div", { staticClass: "fw-bold h5" }, [
                _vm._v(_vm._s(_vm.productInfo.price) + " Rub."),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-2 d-flex flex-column align-items-center justify-content-center",
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-success",
              on: { click: _vm.incrementCount },
            },
            [_vm._v("\n                +\n            ")]
          ),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.productInfo.count))]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              class: { disabled: _vm.productInfo.count == 1 },
              on: { click: _vm.decrementCount },
            },
            [_vm._v("\n                -\n            ")]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-1 d-flex align-items-center justify-content-end" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              on: { click: _vm.removeFromCart },
            },
            [_vm._v("\n                ×\n            ")]
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/CartPage.vue?vue&type=template&id=f9682dfe&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/pages/CartPage.vue?vue&type=template&id=f9682dfe&scoped=true& ***!
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
    [
      _vm.isLoading
        ? [_vm._m(0)]
        : [
            _vm.count
              ? [
                  _vm._l(_vm.cartProducts, function (item, index) {
                    return _c("RowProductItem", {
                      key: index,
                      attrs: { productInfo: item },
                      on: { refresh: _vm.refresh },
                    })
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "p-4 mt-4 border border-info rounded",
                      staticStyle: {
                        background: "white",
                        "max-width": "700px",
                        margin: "0 auto",
                      },
                    },
                    [
                      _c("div", { staticClass: "mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Name" },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.phone,
                              expression: "form.phone",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "phone", placeholder: "Phone" },
                          domProps: { value: _vm.form.phone },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "phone", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.street,
                              expression: "form.street",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Street" },
                          domProps: { value: _vm.form.street },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "street", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-3" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.comment,
                              expression: "form.comment",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            rows: "3",
                            name: "comment",
                            placeholder: "Comment",
                          },
                          domProps: { value: _vm.form.comment },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "comment", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "h3 mt-5",
                          staticStyle: { "text-align": "center" },
                        },
                        [
                          _vm._v(
                            "\n                    Total price :\n                    "
                          ),
                          _c("span", { staticClass: "fw-bold" }, [
                            _vm._v(_vm._s(_vm.totalPrice) + " Rub."),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          staticStyle: { margin: "0 auto", display: "block" },
                          on: { click: _vm.buy },
                        },
                        [_vm._v("\n                    Buy\n                ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "text-danger" },
                        [
                          _vm._l(
                            _vm.errorMessages,
                            function (errorMessageArray) {
                              return [
                                _vm._l(
                                  errorMessageArray,
                                  function (errorMessage) {
                                    return [
                                      _c("span", { key: errorMessage }, [
                                        _vm._v(_vm._s(errorMessage)),
                                      ]),
                                    ]
                                  }
                                ),
                              ]
                            }
                          ),
                        ],
                        2
                      ),
                    ]
                  ),
                ]
              : [_vm._v(" Empty cart ")],
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
]
render._withStripped = true



/***/ })

}]);