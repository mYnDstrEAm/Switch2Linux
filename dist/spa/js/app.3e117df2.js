(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "0047":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("967e");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fa84");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/ionicons-v4/ionicons-v4.css
var ionicons_v4 = __webpack_require__("35fc");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounce.css
var bounce = __webpack_require__("44391");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flash.css
var flash = __webpack_require__("4605");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flip.css
var flip = __webpack_require__("f580");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/headShake.css
var headShake = __webpack_require__("5b2b");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/hinge.css
var hinge = __webpack_require__("2967");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/jello.css
var jello = __webpack_require__("7e67");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/pulse.css
var pulse = __webpack_require__("d770");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rubberBand.css
var rubberBand = __webpack_require__("dd82");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/shake.css
var shake = __webpack_require__("922c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/swing.css
var swing = __webpack_require__("c32e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/tada.css
var tada = __webpack_require__("a151");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/wobble.css
var wobble = __webpack_require__("8bc7");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceIn.css
var bounceIn = __webpack_require__("d67f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInDown.css
var bounceInDown = __webpack_require__("880e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInLeft.css
var bounceInLeft = __webpack_require__("1c10");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInRight.css
var bounceInRight = __webpack_require__("9482");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInUp.css
var bounceInUp = __webpack_require__("e797");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeIn.css
var fadeIn = __webpack_require__("4848");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInDown.css
var fadeInDown = __webpack_require__("e9fd");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInDownBig.css
var fadeInDownBig = __webpack_require__("195c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInLeft.css
var fadeInLeft = __webpack_require__("64e9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInLeftBig.css
var fadeInLeftBig = __webpack_require__("33c5");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInRight.css
var fadeInRight = __webpack_require__("4f62");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInRightBig.css
var fadeInRightBig = __webpack_require__("0dbc");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInUp.css
var fadeInUp = __webpack_require__("4953");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInUpBig.css
var fadeInUpBig = __webpack_require__("81db");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipInX.css
var flipInX = __webpack_require__("2e52");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipInY.css
var flipInY = __webpack_require__("22485");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedIn.css
var lightSpeedIn = __webpack_require__("e592");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rollIn.css
var rollIn = __webpack_require__("70ca");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateIn.css
var rotateIn = __webpack_require__("2318");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInDownLeft.css
var rotateInDownLeft = __webpack_require__("24bd");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInDownRight.css
var rotateInDownRight = __webpack_require__("8f27");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInUpLeft.css
var rotateInUpLeft = __webpack_require__("3064");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInUpRight.css
var rotateInUpRight = __webpack_require__("c9a2");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInDown.css
var slideInDown = __webpack_require__("8767");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInLeft.css
var slideInLeft = __webpack_require__("4a8e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInRight.css
var slideInRight = __webpack_require__("b828");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInUp.css
var slideInUp = __webpack_require__("3c1c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomIn.css
var zoomIn = __webpack_require__("21cb");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInDown.css
var zoomInDown = __webpack_require__("c00e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInLeft.css
var zoomInLeft = __webpack_require__("e4a8");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInRight.css
var zoomInRight = __webpack_require__("e4d3");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInUp.css
var zoomInUp = __webpack_require__("f4d9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOut.css
var bounceOut = __webpack_require__("b794");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutDown.css
var bounceOutDown = __webpack_require__("af24");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutLeft.css
var bounceOutLeft = __webpack_require__("7c9c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutRight.css
var bounceOutRight = __webpack_require__("7bb2");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutUp.css
var bounceOutUp = __webpack_require__("64f7");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOut.css
var fadeOut = __webpack_require__("c382");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutDown.css
var fadeOutDown = __webpack_require__("f5d1");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutDownBig.css
var fadeOutDownBig = __webpack_require__("3cec");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutLeft.css
var fadeOutLeft = __webpack_require__("c00ee");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutLeftBig.css
var fadeOutLeftBig = __webpack_require__("d450");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutRight.css
var fadeOutRight = __webpack_require__("ca07");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutRightBig.css
var fadeOutRightBig = __webpack_require__("14e3");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutUp.css
var fadeOutUp = __webpack_require__("1dba");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutUpBig.css
var fadeOutUpBig = __webpack_require__("674a");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipOutX.css
var flipOutX = __webpack_require__("de26");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipOutY.css
var flipOutY = __webpack_require__("6721");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedOut.css
var lightSpeedOut = __webpack_require__("25e9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rollOut.css
var rollOut = __webpack_require__("fc83");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOut.css
var rotateOut = __webpack_require__("98e5");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutDownLeft.css
var rotateOutDownLeft = __webpack_require__("605a");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutDownRight.css
var rotateOutDownRight = __webpack_require__("ba60");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutUpLeft.css
var rotateOutUpLeft = __webpack_require__("df07");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutUpRight.css
var rotateOutUpRight = __webpack_require__("7903");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutDown.css
var slideOutDown = __webpack_require__("e046");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutLeft.css
var slideOutLeft = __webpack_require__("58af");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutRight.css
var slideOutRight = __webpack_require__("7713");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutUp.css
var slideOutUp = __webpack_require__("0571");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOut.css
var zoomOut = __webpack_require__("3e27");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutDown.css
var zoomOutDown = __webpack_require__("6837");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutLeft.css
var zoomOutLeft = __webpack_require__("3fc9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutRight.css
var zoomOutRight = __webpack_require__("0693");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutUp.css
var zoomOutUp = __webpack_require__("bf41");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./src/css/app.sass
var css_app = __webpack_require__("0047");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 9 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Dialog.js + 6 modules
var Dialog = __webpack_require__("436b");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {},
  plugins: {
    Dialog: Dialog["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=3dcdee04&
var Appvue_type_template_id_3dcdee04_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=3dcdee04&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "App"
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_3dcdee04_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/index.js

 // import example from './module-example'

vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  var Store = new vuex_esm["a" /* default */].Store({
    modules: {// example
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  });
  return Store;
});
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/routes.js
var routes = [{
  path: "/",
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "f241"));
  },
  children: [{
    path: "",
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "8b24"));
    }
  }]
}]; // Always leave this as last one

if (true) {
  routes.push({
    path: "*",
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "e51e"));
    }
  });
}

/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

/* harmony default export */ var src_router = (function ()
/* { store, ssrContext } */
{
  var Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: function scrollBehavior() {
      return {
        x: 0,
        y: 0
      };
    },
    routes: router_routes,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js




/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (function () {
  return app_ref.apply(this, arguments);
});

function app_ref() {
  app_ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee() {
    var store, router, app;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof src_store === 'function')) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return src_store({
              Vue: vue_runtime_esm["a" /* default */]
            });

          case 3:
            _context.t0 = _context.sent;
            _context.next = 7;
            break;

          case 6:
            _context.t0 = src_store;

          case 7:
            store = _context.t0;

            if (!(typeof src_router === 'function')) {
              _context.next = 14;
              break;
            }

            _context.next = 11;
            return src_router({
              Vue: vue_runtime_esm["a" /* default */],
              store: store
            });

          case 11:
            _context.t1 = _context.sent;
            _context.next = 15;
            break;

          case 14:
            _context.t1 = src_router;

          case 15:
            router = _context.t1;
            // make router instance available in store
            store.$router = router; // Create the app instantiation Object.
            // Here we inject the router, store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = {
              el: '#q-app',
              router: router,
              store: store,
              render: function render(h) {
                return h(App);
              }
            }; // expose the app, the router and the store.
            // note we are not mounting the app here, since bootstrapping will be
            // different depending on whether we are in a browser or on the server.

            return _context.abrupt("return", {
              app: app,
              store: store,
              router: router
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return app_ref.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/boot/i18n.js + 3 modules
var i18n = __webpack_require__("8847");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/boot/axios.js


vue_runtime_esm["a" /* default */].prototype.$axios = axios_default.a;
// CONCATENATED MODULE: ./.quasar/client-entry.js





/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/















































































 // We load Quasar stylesheet file








function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee() {
    var _ref, app, store, router, routeUnchanged, redirect, urlPath, bootFiles, i;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _quasar_app();

          case 2:
            _ref = _context.sent;
            app = _ref.app;
            store = _ref.store;
            router = _ref.router;
            routeUnchanged = true;

            redirect = function redirect(url) {
              routeUnchanged = false;
              window.location.href = url;
            };

            urlPath = window.location.href.replace(window.location.origin, '');
            bootFiles = [i18n["a" /* default */], /* Cannot get final name for export "default" in "./src/boot/axios.js" (known exports: , known reexports: ) */ undefined];
            i = 0;

          case 11:
            if (!(routeUnchanged === true && i < bootFiles.length)) {
              _context.next = 29;
              break;
            }

            if (!(typeof bootFiles[i] !== 'function')) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("continue", 26);

          case 14:
            _context.prev = 14;
            _context.next = 17;
            return bootFiles[i]({
              app: app,
              router: router,
              store: store,
              Vue: vue_runtime_esm["a" /* default */],
              ssrContext: null,
              redirect: redirect,
              urlPath: urlPath
            });

          case 17:
            _context.next = 26;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](14);

            if (!(_context.t0 && _context.t0.url)) {
              _context.next = 24;
              break;
            }

            window.location.href = _context.t0.url;
            return _context.abrupt("return");

          case 24:
            console.error('[Quasar] boot error:', _context.t0);
            return _context.abrupt("return");

          case 26:
            i++;
            _context.next = 11;
            break;

          case 29:
            if (!(routeUnchanged === false)) {
              _context.next = 31;
              break;
            }

            return _context.abrupt("return");

          case 31:
            new vue_runtime_esm["a" /* default */](app);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[14, 19]]);
  }));
  return _start.apply(this, arguments);
}

start();

/***/ }),

/***/ "8847":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("a925");

// CONCATENATED MODULE: ./src/i18n/en-us/index.js
/* harmony default export */ var en_us = ({
  reasons: [{
    title: "It's gratis",
    main_text: "It's gratis and always will be and the apps running on it are gratis, too",
    text: "You can also just try it out and still switch to another OS later. Unlike for macOS or Windows you don't have to pay anything for the OS.",
    image_src: "/statics/reasons_free.png",
    source_background_details: ["GNU/Linux software is made by volunteers, for-profit and non-profit developers and simply anybody with an interest in advancing the common good through code this way.", "It is published under licenses that allow use free of charge even for commercial purposes.", "Many people see an advantage to the software being free of charge and a lot of money can be saved in larger orders"]
  }, {
    title: "It's free software",
    main_text: "It gives the user the freedom to share, study and modify the software and the apps running on it are free software, too",
    text: "Many arguments in favor of GNU/Linux listed here stem from it being free and open source software. It is called free software because the user is free.<br/>Free software include LibreOffice for office programs, GIMP for image editing, Kdenlive for video editing, Thunderbird for e-mail.<br/><b>Swipe this card to the right see more free software alternatives</b>.",
    image_src: "../statics/reasons_foss.png",
    source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.fsf.org/about/what-is-free-software>What is free software and why is it so important for society? by FSF</a>", "<a href=https://www.wired.com/2013/09/why-free-software-is-more-important-now-than-ever-before/>Why Free Software Is More Important Now Than Ever Before by Angela Watercutter on WIRED</a>", "Recommended software alternatives:"],
    source_background_details_tiles: ["Email", "Office", "PDF reader", "File manager", "Image viewer", "Image editor", "Video editor", "Media player", "CD/DVD burner", "Ebook reader", "Archiving tool", "Browser", "IDE", "Virtual machine", "Remote desktop", "Backup", "Cleaning"]
  }, {
    title: "Realizes a free and open society",
    main_text: 'By using free and open source software (here: "free" as in free speech, not as in gratis) you can help realize a society that values collaboration, transparency, participation, freedom, privacy, respect for users, rationality, openness, innovation and sovereignty',
    text: 'Every software project may reflect different values, but these values are mostly inherent to free software. For example if people don\'t like some design-decisions made by a project they could code their favored approach as an extension or option to it or make a "fork" of the software. A fork is simply a copy of the software that developers modify differently than the original software and distribute it freely under a different name. The Debian project whose distibutions are recommended here also has a "Social Contract" that codifies some values for the project.',
    image_src: "../statics/reasons_society.png",
    source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.debian.org/social_contract>The Debian Social Contract</a>", "<a href=https://fsfe.org/freesoftware/society/society.en.html>Free software, Free Society by FSFE</a>"]
  }, {
    title: "More secure",
    main_text: "There are multiple reasons for why GNU/Linux is more secure:",
    text: "",
    subpoints: ['<b>Open source software is a development-model that can deliver inherently more secure software.</b><br/>Because the code is open to the public and other developers security vulnerabilities can be fixed quickly. It also depends on how many developers are actively watching changes to the code and have audited it. Open source software allows more people to check the code. But software that is not open source can never reach the level of security of an open source project. This is also because it could contain hidden "backdoors" and bugs and because there\'s no dependence on a single company to fix security issues.', "<b>GNU/Linux still doesn't have a market share as large as Windows so less malware is designed for it.</b>", "<b>GNU/Linux has better security designs including its implementation of privileges.</b><br/>For example it requires the password to be entered for making some changes. Sandboxing can prevent malware from causing harm. And more technologies like sandboxing are already getting picked up by developers to be included in the OS.", "More: <a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.pcworld.com/article/202452/why_linux_is_more_secure_than_windows.html>Why Linux Is More Secure Than Windows, by Katherine Noyes, PCWorld </a>"],
    image_src: "../statics/reasons_security.png",
    source_background_details: [""]
  }, {
    title: "Fosters innovation",
    main_text: "Open source code allows people to easily innovate upon others' work",
    text: "Innovators can study or directly use code of other projects to build new products. Innovators can also extend these projects or modify them to suit their needs or cut costs by using free software.",
    image_src: "../statics/reasons_innovation.png",
    source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://opensource.com/business/13/1/impact-open-source-business>Open source boosts entrepreneurship and social good through collaboration by Aseem Sharma on opensource.com</a>", "Many innovative devices run GNU/Linux.", "A lot of innovative software runs software made for GNU/Linux or free software in general"]
  }, {
    title: "Also runs on old hardware and mini computers",
    main_text: "A universal operating system for all devices",
    text: "This allows more convergent software that runs on many different devices, standardization and familiarity. GNU/Linux runs on phones, supercomputers and small embedded devices.",
    image_src: "../statics/reasons_hardware.png",
    source_background_details: ["This is because the software is free and because it can be lightweight."]
  }, {
    title: "No walled garden and vendor-lock-in",
    main_text: "Personal freedom and independence and fair opportunities for alternatives",
    text: "Windows, macOS and non-free software running on these OS are (or can be) a \"walled garden\" wherein the service provider has control over applications, content, and media, and restricts convenient access to non-approved applicants or content.<br/>Similarly a vendor lock-in makes a customer dependent on a vendor for products and services, unable to use another vendor without substantial switching costs.",
    image_src: "../statics/reasons_vendorlockin.png",
    source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=http://www.hbs.edu/faculty/Publication%20Files/09-030.pdf>Opening Platforms: How, When and Why?</a>"]
  }, {
    title: "Privacy",
    main_text: "A high level of privacy is enabled by default by the OS and most applications",
    text: "Because the software is free developers can inspect the open source code and modify it if it contains privacy-violating code or misses features to protect privacy.",
    image_src: "../statics/reasons_privacy.png",
    source_background_details: ["<a href=https://www.zdnet.com/article/sick-of-windows-spying-on-you-go-linux/>Sick of Windows spying on you? Go Linux, ZDNet</a>", "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.infoworld.com/article/2969704/windows-10-privacy-concerns-may-help-linux.html>Windows 10 privacy concerns may help Linux, Infoworld</a>", "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.computerworld.com/article/3163627/if-you-want-privacy-you-need-to-run-linux.html>If you want privacy you need to run Linux, Computerworld</a>", "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://spreadprivacy.com/linux-privacy-tips/>How to Protect Your Privacy on Linux, Short Tutorial by DuckDuckGo</a>"]
  }, {
    title: "Independence and sovereignty",
    main_text: "By using GNU/Linux you don't depend on a company or its decisions",
    text: "This is especially relevant for nations' federal agencies and businesses.",
    image_src: "../statics/reasons_sovereignty.png",
    source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.zdnet.com/article/microsoft-poses-threat-to-germanys-digital-sovereignty-warns-study/>Microsoft poses threat to Germany's digital sovereignty, warns study, ZDNet</a>"]
  }, {
    title: "Update mechanism and software repository",
    main_text: "All software in GNU/Linux is supposed to be managed with a single program",
    text: "This allows simple, timely and fast updates, ensures security and provides a great level of convenience for quickly installing and removing software.<br/>For example if you want to test out a new software you only need to enter its name in your software-manager, click on install, enter your password, wait a short time for it to install and can then easily uninstall or update it with a click of a button in the same software-management program.<br/>Different distributions have different such \"package-managers\" preinstalled. Two examples are \"Apper\" and \"Discover\" (in the image on the right).",
    image_src: "../statics/reasons_update.png",
    source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://userbase.kde.org/Discover>Intro to Discover by KDE</a>"]
  }, {
    title: "Highly customizable",
    main_text: "Especially KDE is highly customizable and can also be made to look like Windows or macOS",
    text: "Swipe this card to see an exemplary guide to reproduce the setup of the screenshot.",
    // Click on a screenshot below to view a tutorial for the set-up or simply follow the guide below which includes customization.
    image_src: "../statics/kdeneon_2.png",
    source_background_details: ["Guide: 1. <a target=\"_blank\" rel=\"noopener noreferrer\" href=https://store.kde.org/content/show.php/Kvantum?content=166241>Kvantum</a> 2. <a target=\"_blank\" rel=\"noopener noreferrer\" href=https://github.com/PapirusDevelopmentTeam/papirus-icon-theme>Papirus Icons</a> 3. <a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.techrepublic.com/article/how-to-install-the-latte-dock-on-kde/>Latte Dock</a>"]
  }, {
    title: "Can look better than Windows and macOS",
    main_text: "Especially KDE looks sleek and modern by default",
    text: "As KDE/GNU/Linux is highly customizable you can make it look many different ways - more on that in the point above. Depending on your taste and the distribution/DE you choose it can look better than Windows or macOS even without any customization.",
    image_src: "../statics/reasons_looks.png",
    source_background_details: ["A guide for making it look more like Windows will be added above (swipe card)", "A guide for making it look more like macOS will be added above (swipe card)"]
  }, {
    title: "Changeable source code",
    main_text: "Especially if you are a developer you might occasionally want to change or request a change to some of the software",
    text: "This gives users more flexibility and allows for more use-cases and increased efficiency.",
    image_src: "../statics/reasons_changeable.png",
    source_background_details: ["Some changes only require running commands in the terminal. Other changes may require downloading the source code, changing it, compiling it and then running and potentially distributing it.", "If you want to request a change to a software you need to find the place the source code is hosted and open a new issue for your request. Typical places to do so are GitLab and GitHub. Before making a new issue you should check if it's not available in the options and whether somebody asked about it before."]
  }, {
    title: "Community support",
    main_text: "There is a huge community of people willing to help you use free software",
    text: "Volunteer-support also cuts maintenance costs. Most problems have already been solved and you only need to use a search engine to find out how. But if you need help there are many sites where people respond to your questions like the StackExchange sites.<br/>Swipe this card to see places where to find help.</b>",
    image_src: "../statics/reasons_support.png",
    source_background_details: ["<a href=https://unix.stackexchange.com/>Unix & Linux Stack Exchange - Recommended place to ask about Linux-related things</a>", "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://askubuntu.com/>AskUbuntu Stack Exchange - Questions related to Ubuntu, answers typically also apply to Debian as Ubuntu is based on Debian</a>", "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://superuser.com/>Super User Stack Exchange - More general questions such as about hardware</a>", "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://linux-help.org/chat>#Linux-Help - One of many live chats where you can find help</a>"]
  }, {
    title: "Only few barriers left",
    main_text: "Most reasons for not using GNU/Linux have been resolved by now",
    text: 'For example it\'s not harder to use than Windows or macOS - sometimes even easier: for instance unlike for Windows many drivers are included in the "kernel" already. Users sometimes can have different difficulties with GNU/Linux such as missing specific programs, familiar layout, problems with gaming or how to install GNU/Linux. But these have been mostly resolved. In the guide below we show you how to make it look like Windows, MacOs and better, Windows programs and games. Only few problems remain for some users > namely that some games might not work. Except for those games as a last option you could run a Windows operating system in a "virtual machine" to get a software to work - it\'s not hard to do and at the bottom of the guide you\'ll be shown how exactly you can set such a thing up if you need to. Other than that hibernation doesn\'t work and switching to GNU/Linux takes some effort.<br/>The usage-share of GNU/Linux is still small but it\'s rising.',
    image_src: "../statics/reasons_barrier.png",
    source_background_details: ["Fragmentation of GNU/Linux into many different distributions and desktop environments and many different applications could be detrimental to a GNU/Linux as a project. This is partly why this page is so decisive in the recommendations given and e.g. only recommends one software alternative in the first reasons's details instead of multiple ones. Another reason for that is that inexperienced users should not be expected to have to (spend a lot of time) research things like that. This site is about making the switch fast and simple and to improve the GNU/Linux FOSS ecosystem most effectively.", "Many Linux users have some kind of elitism by which they don't consider mass-adoption a goal and GUIs, good user experience, marketing and design as uneccesary."]
  }],
  explanations: {
    why: "Why?",
    how: "How?",
    what_is_linux_header: "What is Linux?",
    what_is_linux_hidden: 'An OS is software that makes computer components available to applications. "Linux" is only one part of the OS (the "kernel") so a more correct name for the OS is "GNU/Linux".',
    what_is_linux: "It is an operating system, like Windows.<br/>",
    what_is_website_hidden: "as support ended on January 14, 2020. And Linux is now better than ever: most reasons not to switch have been resolved. It is easy to set up: everybody can do it!",
    what_is_website: "It shows you <b>why</b> and <b>how</b> to switch to GNU/Linux.<br/>Windows 7 is getting phased out ",
    what_is_website_tohide: "soon.",
    what_is_website_header: "What is this website?",
    reasons_header: "Why to switch?",
    reasons_subheader: "What's better than macOS or Windows 10?",
    wizard_header: "How to switch?",
    wizard_subheader: "The recommendations and steps of the guide vary depending on what you select in the options",
    wizard_current_os: "Current OS",
    wizard_user_type: "I'm a",
    wizard_select_first_message: "Please first select OS and user type.",
    wizard_options_user_type_personal: "Personal user (inexperienced)",
    wizard_options_user_type_geek: "Geek (experienced)",
    wizard_options_user_type_developer: "Developer",
    wizard_options_user_type_school: "School",
    wizard_options_user_type_administration: "Public administration",
    wizard_options_user_type_business: "Business"
  }
});
// CONCATENATED MODULE: ./src/i18n/de-de/index.js
/* harmony default export */ var de_de = ({
  failed: "Action schlug fehl",
  reasons: {
    reason1: {
      title: "It's free"
    }
  }
});
// CONCATENATED MODULE: ./src/i18n/index.js


/* harmony default export */ var i18n = ({
  "en-us": en_us,
  "de-DE": de_de
});
// CONCATENATED MODULE: ./src/boot/i18n.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return i18n_i18n; });



vue_runtime_esm["a" /* default */].use(vue_i18n_esm["a" /* default */]);
var i18n_i18n = new vue_i18n_esm["a" /* default */]({
  locale: "en-us",
  fallbackLocale: "en-us",
  messages: i18n
});
/* harmony default export */ var boot_i18n = __webpack_exports__["a"] = (function (_ref) {
  var app = _ref.app;
  // Set i18n instance on app
  app.i18n = i18n_i18n;
});


/***/ })

},[[0,2,0]]]);
//# sourceMappingURL=app.3e117df2.js.map