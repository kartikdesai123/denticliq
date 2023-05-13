(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/shop/ShopRegistration.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/shop/ShopRegistration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-tel-input */ "./node_modules/vue-tel-input/dist/vue-tel-input.umd.min.js");
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_tel_input__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      mobileInputProps: {
        inputOptions: {
          type: "tel",
          placeholder: "phone number"
        },
        dropdownOptions: {
          showDialCodeInSelection: false,
          showFlags: true,
          showDialCodeInList: true
        },
        autoDefaultCountry: false,
        validCharactersOnly: true,
        mode: "international"
      },
      form: {
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        invalidPhone: true,
        showInvalidPhone: false,
        shopName: "",
        shopPhone: "",
        shopAddress: ""
      }
    };
  },
  components: {
    VueTelInput: vue_tel_input__WEBPACK_IMPORTED_MODULE_2__["VueTelInput"]
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"]
      },
      phone: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(6)
      },
      confirmPassword: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["sameAs"])("password")
      },
      shopName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      shopPhone: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      shopAddress: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("app", ["generalSettings", "availableCountries"])), {}, {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
      !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
      return errors;
    },
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.required && errors.push(this.$i18n.t("this_field_is_required"));
      !this.$v.form.password.minLength && errors.push(this.$i18n.t("password_must_be_minimum_6_characters"));
      return errors;
    },
    confirmPasswordErrors: function confirmPasswordErrors() {
      var errors = [];
      if (!this.$v.form.confirmPassword.$dirty) return errors;
      !this.$v.form.confirmPassword.required && errors.push(this.$i18n.t("this_field_is_required"));
      !this.$v.form.confirmPassword.sameAsPassword && errors.push(this.$i18n.t("password_and_confirm_password_should_match"));
      return errors;
    },
    shopNameErrors: function shopNameErrors() {
      var errors = [];
      if (!this.$v.form.shopName.$dirty) return errors;
      !this.$v.form.shopName.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    },
    shopPhoneErrors: function shopPhoneErrors() {
      var errors = [];
      if (!this.$v.form.shopPhone.$dirty) return errors;
      !this.$v.form.shopPhone.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    },
    shopAddressErrors: function shopAddressErrors() {
      var errors = [];
      if (!this.$v.form.shopAddress.$dirty) return errors;
      !this.$v.form.shopAddress.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("auth", ["login"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("cart", ["removeTempUserId"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("auth", ["updateChatWindow", "showLoginDialog"])), {}, {
    phoneValidate: function phoneValidate(phone) {
      this.form.invalidPhone = phone.valid ? false : true;
      if (phone.valid) this.form.showInvalidPhone = false;
    },
    register: function register() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.$v.form.$touch();
              if (!_this.form.invalidPhone) {
                _context.next = 4;
                break;
              }
              _this.form.showInvalidPhone = true;
              return _context.abrupt("return");
            case 4:
              if (!_this.$v.form.$anyError) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return");
            case 6:
              _this.form.phone = _this.form.phone.replace(/\s/g, "");
              _this.loading = true;
              _context.next = 10;
              return _this.call_api("post", "shop/register", _this.form);
            case 10:
              res = _context.sent;
              if (res.data.success) {
                _this.snack({
                  color: "green",
                  message: res.data.message
                });
                _this.$router.push({
                  name: "ShopConfirmation"
                });
                // this.resetForm()
              } else {
                _this.snack({
                  message: res.data.message,
                  color: "red"
                });
              }
              _this.loading = false;
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    resetForm: function resetForm() {
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.password = "";
      this.form.confirmPassword = "";
      this.form.invalidPhone = true;
      this.form.showInvalidPhone = false;
      this.form.shopName = "";
      this.form.shopPhone = "";
      this.form.shopAddress = "";
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/shop/ShopRegistration.vue?vue&type=template&id=b144f962&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/shop/ShopRegistration.vue?vue&type=template&id=b144f962& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    staticClass: "py-6"
  }, [_c("div", {
    staticClass: "rounded border border-primary bg-soft-primary py-7 px-16 d-md-flex justify-space-between align-center mb-5"
  }, [_c("h3", {
    staticClass: "text-h5 fw-700 mb-5 mb-md-0"
  }, [_vm._v(_vm._s(_vm.$t("already_a_seller")))]), _vm._v(" "), _c("a", {
    staticClass: "btn primary px-12 py-3 rounded white--text fs-16",
    attrs: {
      href: _vm.$store.getters["app/appUrl"] + "/login",
      target: "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$t("login")))])]), _vm._v(" "), _c("banner", {
    staticClass: "mb-15",
    attrs: {
      loading: false,
      banner: _vm.$store.getters["app/banners"].shop_registration_page
    }
  }), _vm._v(" "), _c("v-row", [_c("v-col", {
    staticClass: "mx-auto",
    attrs: {
      cols: "12",
      lg: "6",
      md: "8",
      sm: "10"
    }
  }, [_c("h1", {
    staticClass: "text-h3 fw-700 mb-8"
  }, [_vm._v(_vm._s(_vm.$t("register_your_shop")))]), _vm._v(" "), _c("v-form", {
    attrs: {
      "lazy-validation": ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.register();
      }
    }
  }, [_c("v-card", {
    staticClass: "border",
    attrs: {
      elevation: "0"
    }
  }, [_c("v-card-title", [_c("span", {
    staticClass: "text-h6 fw-600 opacity-80"
  }, [_vm._v(_vm._s(_vm.$t("personal_information")))])]), _vm._v(" "), _c("v-card-text", [_c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("full_name")) + "\n                            ")]), _vm._v(" "), _c("v-text-field", {
    attrs: {
      placeholder: _vm.$t("full_name"),
      type: "text",
      "error-messages": _vm.nameErrors,
      "hide-details": "auto",
      required: "",
      outlined: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.name.$touch();
      }
    },
    model: {
      value: _vm.form.name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("phone_number")) + "\n                            ")]), _vm._v(" "), _c("vue-tel-input", _vm._b({
    attrs: {
      onlyCountries: _vm.availableCountries
    },
    on: {
      validate: _vm.phoneValidate
    },
    model: {
      value: _vm.form.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "phone", $$v);
      },
      expression: "form.phone"
    }
  }, "vue-tel-input", _vm.mobileInputProps, false), [_c("template", {
    slot: "arrow-icon"
  }, [_c("span", {
    staticClass: "vti__dropdown-arrow"
  }, [_vm._v(" ▼")])])], 2), _vm._v(" "), _vm.$v.form.phone.$error ? _c("div", {
    staticClass: "v-text-field__details mt-2 pl-3"
  }, [_c("div", {
    staticClass: "v-messages theme--light error--text",
    attrs: {
      role: "alert"
    }
  }, [_c("div", {
    staticClass: "v-messages__wrapper"
  }, [_c("div", {
    staticClass: "v-messages__message"
  }, [_vm._v(_vm._s(_vm.$t("this_field_is_required")))])])])]) : _vm._e(), _vm._v(" "), !_vm.$v.form.phone.$error && _vm.form.showInvalidPhone ? _c("div", {
    staticClass: "v-text-field__details mt-2 pl-3"
  }, [_c("div", {
    staticClass: "v-messages theme--light error--text",
    attrs: {
      role: "alert"
    }
  }, [_c("div", {
    staticClass: "v-messages__wrapper"
  }, [_c("div", {
    staticClass: "v-messages__message"
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t("phone_number_must_be_valid")) + "\n                                        ")])])])]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "fs-13 fw-500"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("email_address")) + "\n                            ")]), _vm._v(" "), _c("v-text-field", {
    attrs: {
      placeholder: _vm.$t("email_address"),
      type: "email",
      "error-messages": _vm.emailErrors,
      "hide-details": "auto",
      required: "",
      outlined: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.email.$touch();
      }
    },
    model: {
      value: _vm.form.email,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("password")) + "\n                            ")]), _vm._v(" "), _c("v-text-field", {
    staticClass: "input-group--focused",
    attrs: {
      placeholder: "* * * * * * * *",
      "error-messages": _vm.passwordErrors,
      type: "password",
      "hide-details": "auto",
      required: "",
      outlined: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.password.$touch();
      }
    },
    model: {
      value: _vm.form.password,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "password", $$v);
      },
      expression: "form.password"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("confirm_password")) + "\n                            ")]), _vm._v(" "), _c("v-text-field", {
    staticClass: "input-group--focused",
    attrs: {
      placeholder: "* * * * * * * *",
      "error-messages": _vm.confirmPasswordErrors,
      type: "password",
      "hide-details": "auto",
      required: "",
      outlined: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.confirmPassword.$touch();
      }
    },
    model: {
      value: _vm.form.confirmPassword,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "confirmPassword", $$v);
      },
      expression: "form.confirmPassword"
    }
  })], 1)]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-title", [_c("span", {
    staticClass: "text-h6 fw-600 opacity-80"
  }, [_vm._v(_vm._s(_vm.$t("shop_information")))])]), _vm._v(" "), _c("v-card-text", [_c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("shop_name")) + "\n                            ")]), _vm._v(" "), _c("v-text-field", {
    attrs: {
      placeholder: _vm.$t("shop_name"),
      type: "text",
      "error-messages": _vm.shopNameErrors,
      "hide-details": "auto",
      required: "",
      outlined: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.shopName.$touch();
      }
    },
    model: {
      value: _vm.form.shopName,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "shopName", $$v);
      },
      expression: "form.shopName"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("shop_phone")) + "\n                            ")]), _vm._v(" "), _c("v-text-field", {
    attrs: {
      placeholder: _vm.$t("shop_phone"),
      type: "number",
      "error-messages": _vm.shopPhoneErrors,
      "hide-details": "auto",
      required: "",
      outlined: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.shopPhone.$touch();
      }
    },
    model: {
      value: _vm.form.shopPhone,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "shopPhone", $$v);
      },
      expression: "form.shopPhone"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("shop_address")) + "\n                            ")]), _vm._v(" "), _c("v-text-field", {
    attrs: {
      placeholder: _vm.$t("shop_address"),
      type: "text",
      "error-messages": _vm.shopAddressErrors,
      "hide-details": "auto",
      required: "",
      outlined: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.shopAddress.$touch();
      }
    },
    model: {
      value: _vm.form.shopAddress,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "shopAddress", $$v);
      },
      expression: "form.shopAddress"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("by_signing_up_you_agree_to_our")) + "\n                            "), _c("router-link", {
    staticClass: "primary--text text-decoration-underline",
    attrs: {
      to: {
        name: "CustomPage",
        params: {
          pageSlug: "terms-and-conditions"
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("terms_and_conditions")))])], 1)])], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "px-12 mb-4 w-100 mt-5",
    attrs: {
      "x-large": "",
      elevation: "0",
      type: "submit",
      color: "primary",
      loading: _vm.loading,
      disabled: _vm.loading
    },
    on: {
      click: _vm.register
    }
  }, [_vm._v(_vm._s(_vm.$t("register_shop")))])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/shop/ShopRegistration.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/shop/ShopRegistration.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopRegistration_vue_vue_type_template_id_b144f962___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopRegistration.vue?vue&type=template&id=b144f962& */ "./resources/js/pages/shop/ShopRegistration.vue?vue&type=template&id=b144f962&");
/* harmony import */ var _ShopRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopRegistration.vue?vue&type=script&lang=js& */ "./resources/js/pages/shop/ShopRegistration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopRegistration_vue_vue_type_template_id_b144f962___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopRegistration_vue_vue_type_template_id_b144f962___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/shop/ShopRegistration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/shop/ShopRegistration.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/shop/ShopRegistration.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopRegistration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/shop/ShopRegistration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/shop/ShopRegistration.vue?vue&type=template&id=b144f962&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/shop/ShopRegistration.vue?vue&type=template&id=b144f962& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopRegistration_vue_vue_type_template_id_b144f962___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopRegistration.vue?vue&type=template&id=b144f962& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/shop/ShopRegistration.vue?vue&type=template&id=b144f962&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopRegistration_vue_vue_type_template_id_b144f962___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopRegistration_vue_vue_type_template_id_b144f962___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);