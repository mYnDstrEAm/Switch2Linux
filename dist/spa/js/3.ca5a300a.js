(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "302e":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de": [
		"215a",
		0
	],
	"./de.js": [
		"215a",
		0
	],
	"./en-us": [
		"1f91"
	],
	"./en-us.js": [
		"1f91"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "302e";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "3161":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdeneon_2.be001133.png";

/***/ }),

/***/ "51c5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kdeneon_1.92ca84df.png";

/***/ }),

/***/ "8b24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=template&id=4a53b060&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"page pre-formatted"},[_c('div',{staticClass:"q-pa-md page_container"},[_c('span',{staticClass:"page_upper"},[_c('Slideshow'),_c('div',{staticClass:"what_row row justify-between items-start q-col-gutter-xl"},[_c('div',{staticClass:"col-xs-12 col-sm-6 description_box whatIsLinuxBox",on:{"mouseover":function($event){return _vm.showWhatIsLinux(true)}}},[_c('transition',{attrs:{"appear":"","enter-active-class":"animated fadeIn slow","leave-active-class":"animated fadeIn slow"}},[_c('span',[_c('h5',[_vm._v(_vm._s(_vm.$t('explanations.what_is_linux_header')))]),_c('p',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$t('explanations.what_is_linux'))}}),_c('span',{staticClass:"hidden",attrs:{"id":"what_is_linux"}},[_vm._v(_vm._s(_vm.$t('explanations.what_is_linux_hidden')))])])])])],1),_c('div',{staticClass:"col-xs-12 col-sm-6 description_box whatIsWebsiteBox",on:{"mouseover":function($event){return _vm.showWhatIsWebsite(true)}}},[_c('transition',{attrs:{"appear":"","enter-active-class":"animated fadeIn slow","leave-active-class":"animated fadeIn slow"}},[_c('span',[_c('h5',[_vm._v(_vm._s(_vm.$t('explanations.what_is_website_header')))]),_c('p',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$t('explanations.what_is_website'))}}),_c('span',{attrs:{"id":"to_hide"}},[_vm._v(_vm._s(_vm.$t('explanations.what_is_website_tohide')))]),_c('span',{staticClass:"hidden",attrs:{"id":"what_is_website"}},[_vm._v(_vm._s(_vm.$t('explanations.what_is_website_hidden'))+"\n                ")])])])])],1)])],1),_c('div',{staticClass:"row why_how_row_top"}),_c('div',{staticClass:"row why_how_row justify-between items-start q-col-gutter-xl"},[_c('div',{staticClass:"col-xs-6 col-sm-6 why_how_row_2"},[_c('h5',{staticClass:"why_how"},[_vm._v(_vm._s(_vm.$t('explanations.why')))]),_c('q-icon',{staticClass:"arrow_down",attrs:{"name":"keyboard_arrow_down","id":"scroll_arrow"},on:{"click":function($event){return _vm.scrollToElement2('why')}}})],1),_c('div',{staticClass:"col-xs-6 col-sm-6 why_how_row_3"},[_c('h5',{staticClass:"why_how"},[_vm._v(_vm._s(_vm.$t('explanations.how')))]),_c('q-icon',{staticClass:"arrow_down",attrs:{"name":"keyboard_arrow_down"},on:{"click":function($event){return _vm.scrollToElement2('how')}}})],1)])]),_c('div',{staticClass:"col-xs-12 col-sm-12",attrs:{"id":"why"}},[_c('h5',[_vm._v(_vm._s(_vm.$t('explanations.reasons_header')))]),_c('p',[_vm._v(_vm._s(_vm.$t('explanations.reasons_subheader')))]),_vm._l((_vm.reasons),function(reason){return _c('Reason',{key:reason.id,staticClass:"reasons perma_hidden2",attrs:{"reason":reason}})})],2),_c('div',{staticClass:"col-xs-12 col-sm-12",attrs:{"id":"how"}},[_c('h5',[_vm._v(_vm._s(_vm.$t('explanations.wizard_header')))]),_c('p',[_vm._v(_vm._s(_vm.$t('explanations.wizard_subheader')))]),_c('q-tab-panels',{ref:"options_panel_1",staticClass:"bg-transparent text-white",attrs:{"animated":"","infinite":"","id":"options_panel"},model:{value:(_vm.panel),callback:function ($$v) {_vm.panel=$$v},expression:"panel"}},[_c('q-tab-panel',{attrs:{"name":"user_os"}},[_c('div',{staticClass:"options_container_container",attrs:{"id":"user_os_options"}},[_c('div',{staticClass:"row justify-between items-start q-col-gutter-xl"},[_c('div',{staticClass:"col options_container"},[_c('p',[_vm._v(_vm._s(_vm.$t('explanations.wizard_current_os')))]),_c('q-option-group',{attrs:{"options":_vm.options_user_os,"color":"primary"},on:{"input":_vm.options_user_os_changed},model:{value:(_vm.user_os),callback:function ($$v) {_vm.user_os=$$v},expression:"user_os"}}),(_vm.hasOptionsArrowBackBeenClicked === true)?_c('q-icon',{staticClass:"arrow_right",staticStyle:{"vertical-align":"center","horizontal-align":"right","top":"30%","right":"0px","position":"absolute","font-size":"30pt"},attrs:{"name":"keyboard_arrow_right"},on:{"click":function($event){return _vm.jumpForward()}}}):_vm._e()],1)])])]),_c('q-tab-panel',{attrs:{"name":"user_type"}},[_c('div',{staticClass:"options_container_container",attrs:{"id":"user_type_options"}},[_c('div',{staticClass:"row justify-between items-start q-col-gutter-xl"},[(_vm.user_os !== '')?_c('div',{staticClass:"steps_selection_buttons options_container"},[_c('q-icon',{staticClass:"arrow_left",staticStyle:{"vertical-align":"center","horizontal-align":"left","top":"30%","left":"0px","position":"absolute"},attrs:{"name":"keyboard_arrow_left"},on:{"click":function($event){return _vm.jumpBack()}}}),_c('p',[_vm._v(_vm._s(_vm.$t('explanations.wizard_user_type')))]),_c('q-option-group',{attrs:{"options":_vm.options_user_type,"color":"primary"},on:{"input":_vm.options_user_type_changed},model:{value:(_vm.user_type),callback:function ($$v) {_vm.user_type=$$v},expression:"user_type"}})],1):_vm._e()])])]),_c('q-tab-panel',{attrs:{"name":"setup_wizard"}},[_c('div',{attrs:{"id":"setup_wizard_left_side"}},[_c('q-icon',{staticClass:"arrow_left",staticStyle:{"vertical-align":"center","horizontal-align":"left","top":"30%","left":"0px","position":"absolute"},attrs:{"name":"keyboard_arrow_left"},on:{"click":function($event){return _vm.jumpBack()}}})],1),_c('SetupWizard',{attrs:{"user_type":_vm.user_type,"user_os":_vm.user_os}}),(_vm.user_type === '' || _vm.user_os === '')?_c('div',[_c('p',[_vm._v(_vm._s(_vm.$t('explanations.wizard_select_first_message')))])]):_vm._e()],1)],1)],1),_c('div',{staticStyle:{"margin":"auto","padding-bottom":"20px","background-color":"#245f5e"}},[_c('table',{staticStyle:{"margin":"auto"}},[_c('tr',[_c('td',[_c('q-icon',{staticClass:"logo_icon",staticStyle:{"cursor":"pointer"},attrs:{"name":"ion-logo-github","href":"https://github.com"},on:{"click":function($event){return _vm.openUrl('https://github.com')}}})],1),_c('td',[_c('q-icon',{staticClass:"logo_icon",staticStyle:{"cursor":"pointer"},attrs:{"name":"ion-logo-reddit"},on:{"click":function($event){return _vm.openUrl('https://www.reddit.com')}}})],1),_c('td',[_c('q-icon',{staticClass:"logo_icon",staticStyle:{"cursor":"pointer"},attrs:{"name":"ion-logo-twitter"},on:{"click":function($event){return _vm.openUrl('https://twitter.com/hashtag/Switch2Linux')}}})],1),_c('td',[_c('div',{staticStyle:{"position":"absolute","right":"0px","text-align":"right","padding-right":"10px","cursor":"pointer"}},[_c('p',{on:{"click":function($event){return _vm.showImageSources()}}},[_vm._v("Image sources")])])])])])]),_c('SocialFeed')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=4a53b060&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./src/boot/i18n.js + 3 modules
var i18n = __webpack_require__("8847");

// CONCATENATED MODULE: ./src/statics/reasons.js

var id = -1;
var reasons = [{
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "left",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: [""],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "right",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: ["right"],
  visible: false,
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  source_background_details_tiles: [{
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[0]")),
    icon: "email",
    image: null,
    previous: ["Outlook"],
    content: "Thunderbird",
    link: "https://www.thunderbird.net/en-US/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[1]")),
    icon: "work",
    image: null,
    previous: ["Microsoft Office"],
    content: "LibreOffice",
    link: "https://www.libreoffice.org/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[2]")),
    icon: "picture_as_pdf",
    image: null,
    previous: ["Adobe Reader"],
    content: "Okular",
    link: "https://okular.kde.org/download.php"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[3]")),
    icon: "folder",
    image: null,
    previous: ["Windows Explorer"],
    content: "Dolphin",
    link: "https://kde.org/applications/system/org.kde.dolphin"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[4]")),
    icon: "image",
    image: null,
    content: "Gwenview",
    link: "https://userbase.kde.org/Gwenview"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[5]")),
    icon: "photo_size_select_large",
    image: null,
    previous: ["Photoshop"],
    content: "GIMP",
    link: "https://www.gimp.org/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[6]")),
    icon: "movie",
    image: null,
    content: "Kdenlive",
    link: "https://kdenlive.org/en/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[7]")),
    icon: "play_circle_outline",
    image: null,
    content: "MPV",
    link: "https://mpv.io/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[8]")),
    icon: "album",
    image: null,
    content: "K3b",
    link: "https://userbase.kde.org/K3b"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[9]")),
    icon: "ebooks",
    image: null,
    content: "Calibre",
    link: "https://calibre-ebook.com/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[10]")),
    icon: "archive",
    image: null,
    previous: ["WinRar", "7zip"],
    content: "Ark",
    link: "https://kde.org/applications/utilities/org.kde.ark"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[11]")),
    icon: "web",
    image: null,
    previous: "",
    content: "Firefox",
    link: "https://www.mozilla.org/en-US/firefox/linux/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[12]")),
    icon: "code",
    image: null,
    content: "Visual Studio Code",
    link: "https://vscodium.com/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[13]")),
    icon: "devices_other",
    image: null,
    content: "aQEMU/QEMU/KVM",
    link: "https://github.com/tobimensch/aqemu"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[14]")),
    icon: "computer",
    image: null,
    content: "Remmina",
    link: "https://remmina.org/"
  }, {
    title: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details_tiles[15]")),
    icon: "settings_backup_restore",
    image: null,
    content: "Back In Time",
    link: "https://backintime.readthedocs.io/en/latest/"
  } // {
  //   title: i18n.t(`reasons[${id}].source_background_details_tiles[15]`),
  //   icon: "settings_backup_restore",
  //   image: null,
  //   content: "BleachBit",
  //   link: ""
  // },
  // {
  //   title: Virus scanner,
  //   icon: "",
  //   image: null,
  //   content: "ClamTk",
  //   link: ""
  // }
  // Software management discover/apper/..
  ]
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "left",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: [""],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  reason_subpoints: i18n["b" /* i18n */].t("reasons[".concat(id, "].subpoints")),
  image: {
    location: "right",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: ["right"],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "left",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: [""],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "right",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: ["right"],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "left",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: [""],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "right",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: ["right"],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "left",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: [""],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "right",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: ["right"],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, // TODO: array of src = carousel
{
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "bottom",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: [""],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, // TODO add url to image: jump to screenshots, or sliding carousel with screenshots expands when hovered over
{
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "left",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: ["right"],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "right",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: [""],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "left",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  slide: ["right"],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}, {
  id: id = id + 1,
  reason_title: i18n["b" /* i18n */].t("reasons[".concat(id, "].title")),
  reason_main_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].main_text")),
  reason_text: i18n["b" /* i18n */].t("reasons[".concat(id, "].text")),
  image: {
    location: "bottom",
    src: i18n["b" /* i18n */].t("reasons[".concat(id, "].image_src"))
  },
  special: true,
  slide: [""],
  source_background_details: i18n["b" /* i18n */].t("reasons[".concat(id, "].source_background_details")),
  visible: false
}];
// EXTERNAL MODULE: ./src/assets/styles/main.sass
var main = __webpack_require__("f17c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Reason.vue?vue&type=template&id=156dc8a1&
var Reasonvue_type_template_id_156dc8a1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-tab-panels',{ref:"reason_panels",staticClass:"bg-transparent text-white reason_panels",staticStyle:{"overflow":"visible","white-space":"normal"},attrs:{"animated":"","swipeable":"","infinite":"","id":'reason_' + _vm.reason.id},model:{value:(_vm.panel),callback:function ($$v) {_vm.panel=$$v},expression:"panel"}},[_c('q-tab-panel',{staticClass:"reason_panel",attrs:{"name":"bla"}},[_c('div',{staticClass:"reason_box"},[(_vm.reason.image !== null && _vm.reason.image.location === 'top')?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 reason reason_img_container_topdown"},[_c('q-img',{staticClass:"reason_img reason_img_topdown",attrs:{"src":_vm.reason.image.src}})],1)]):_vm._e(),_c('div',{staticClass:"row",staticStyle:{"vertical-align":"middle"}},[_c('transition',{attrs:{"appear":"","enter-active-class":"animated fadeIn delay","leave-active-class":"animated fadeIn delay"}},[(_vm.reason.image !== null && _vm.reason.image.location === 'left')?_c('div',{staticClass:"col-xs-12 col-sm-3 col-md-3 reason_img_container_left"},[_c('q-img',{staticStyle:{"vertical-align":"middle !important"},attrs:{"src":_vm.reason.image.src}})],1):_vm._e()]),_c('transition',{attrs:{"appear":"","enter-active-class":"animated fadeIn delay","leave-active-class":"animated fadeIn delay"}},[_c('div',{class:{
              'col-sm-12 col-md-12':
                _vm.reason.image === null ||
                (_vm.reason.image !== null &&
                  (_vm.reason.image.location === 'bottom' ||
                    _vm.reason.image.location === 'top')),
              'reason_left col-sm-9 col-md-9':
                _vm.reason.image !== null && _vm.reason.image.location === 'left',
              'reason_right col-sm-9 col-md-9':
                _vm.reason.image !== null && _vm.reason.image.location === 'right',
              'reason col-xs-12 col-sm-12 col-md-12': _vm.reason.image === null,
              'reason col-xs-12': _vm.reason.image !== null
            },staticStyle:{"white-space":"pre-wrap"}},[_c('div',[_c('h4',[_vm._v(_vm._s(_vm.reason.reason_title))]),_c('h6',[_vm._v(_vm._s(_vm.reason.reason_main_text))]),(_vm.reason.reason_text)?_c('p',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.reason.reason_text)}})]):_vm._e(),(
                  _vm.reason.reason_subpoints !== undefined &&
                    _vm.reason.reason_subpoints !== null
                )?_c('div',[_c('ul',{staticClass:"reason_subpoints"},_vm._l((_vm.reason.reason_subpoints),function(reason_subpoint,index){return _c('li',{key:index,staticClass:"reason_subpoint"},[_c('span',{domProps:{"innerHTML":_vm._s(reason_subpoint)}})])}),0)]):_vm._e()])])]),_c('transition',{attrs:{"appear":"","enter-active-class":"animated fadeIn delay","leave-active-class":"animated fadeIn delay"}},[(_vm.reason.image !== null && _vm.reason.image.location === 'right')?_c('div',{staticClass:"col-xs-12 col-sm-3 col-md-3 reason_img_container_right",staticStyle:{"vertical-align":"middle !important"}},[_c('div',{staticStyle:{"padding-right":"20px"}},[_c('q-img',{staticStyle:{"vertical-align":"middle !important"},attrs:{"src":_vm.reason.image.src}})],1)]):_vm._e()])],1),_c('transition',{attrs:{"appear":"","enter-active-class":"animated fadeIn delay","leave-active-class":"animated fadeIn delay"}},[(_vm.reason.image !== null && _vm.reason.image.location === 'bottom')?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 reason reason_img_container_topdown"},[_c('q-img',{staticClass:"reason_img reason_img_topdown",attrs:{"src":_vm.reason.image.src}})],1)]):_vm._e()]),_c('q-icon',{staticClass:"arrow_right",attrs:{"name":"keyboard_arrow_right"},on:{"click":function($event){return _vm.slidePanel()}}})],1)]),_c('q-tab-panel',{staticStyle:{"overflow":"visible"},attrs:{"name":"bla2"}},[_c('div',{staticClass:"reason_box",staticStyle:{"min-height":"400px","overflow":"visible"}},[_c('ul',_vm._l((_vm.reason.source_background_details),function(source_background_detail){return _c('li',{key:source_background_detail,staticClass:"source_background_detail"},[_c('span',{domProps:{"innerHTML":_vm._s(source_background_detail)}})])}),0),(
          _vm.reason.source_background_details_tiles !== undefined &&
            _vm.reason.source_background_details_tiles !== null &&
            _vm.reason.source_background_details_tiles.length > 0
        )?_c('div',{staticClass:"q-pa-md row items-start q-gutter-md",staticStyle:{"overflow":"visible"}},_vm._l((_vm.reason.source_background_details_tiles),function(source_background_details_tile){return _c('q-card',{key:source_background_details_tile.title,staticClass:"my-card text-white tooltip",staticStyle:{"background-color":"#2B2B2B","overflow":"visible"}},[(
              source_background_details_tile.previous !== undefined &&
                source_background_details_tile.previous !== null &&
                source_background_details_tile.previous.length > 0
            )?_c('span',{staticClass:"tooltiptext"},[_c('p',[_vm._v("Replaces:")]),_vm._l((source_background_details_tile.previous),function(source_background_details_tile_previous){return _c('p',{key:source_background_details_tile_previous},[_vm._v("\n              "+_vm._s(source_background_details_tile_previous)+"\n            ")])})],2):_vm._e(),_c('a',{staticStyle:{"color":"white","text-decoration":"none"},attrs:{"href":source_background_details_tile.link}},[_c('q-card-section',{staticStyle:{"word-wrap":"normal","padding-bottom":"3px","padding-top":"3px","text-align":"center"}},[_c('q-icon',{staticStyle:{"font-size":"20pt","text-align":"center"},attrs:{"name":source_background_details_tile.icon}}),_c('div',[_vm._v(_vm._s(source_background_details_tile.title))])],1),_c('q-separator',{attrs:{"dark":"","inset":""}}),_c('q-card-section',{staticStyle:{"word-wrap":"normal","padding-bottom":"3px","padding-top":"3px"}},[_c('div',[_c('div',[_vm._v(_vm._s(source_background_details_tile.content))])])])],1)])}),1):_vm._e(),_c('q-icon',{staticClass:"arrow_right",attrs:{"name":"keyboard_arrow_right"},on:{"click":function($event){return _vm.slidePanel()}}})],1)])],1)}
var Reasonvue_type_template_id_156dc8a1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Reason.vue?vue&type=template&id=156dc8a1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Reason.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Reasonvue_type_script_lang_js_ = ({
  name: "Reason",
  props: {
    reason: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      panel: "bla"
    };
  },
  mounted: function mounted() {
    // https://stackoverflow.com/questions/15702867/html-tooltip-position-relative-to-mouse-pointer
    var tooltips = document.getElementsByClassName("tooltiptext");

    window.onmousemove = function (e) {
      var x = e.clientX - 40 + "px",
          y = e.clientY - 40 + "px";

      for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
      }
    };
  },
  methods: {
    slidePanel: function slidePanel() {
      this.$refs.reason_panels.next();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Reason.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Reasonvue_type_script_lang_js_ = (Reasonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__("adad");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__("823b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// CONCATENATED MODULE: ./src/components/Reason.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Reasonvue_type_script_lang_js_,
  Reasonvue_type_template_id_156dc8a1_render,
  Reasonvue_type_template_id_156dc8a1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Reason = (component.exports);








runtime_auto_import_default()(component, 'components', {QTabPanels: QTabPanels["a" /* default */],QTabPanel: QTabPanel["a" /* default */],QImg: QImg["a" /* default */],QIcon: QIcon["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QSeparator: QSeparator["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SetupWizard.vue?vue&type=template&id=013832a5&
var SetupWizardvue_type_template_id_013832a5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.user_type !== '' && _vm.user_os !== '')?_c('div',{staticClass:"q-pa-md",attrs:{"id":"stepper_module"}},[_c('q-stepper',{attrs:{"id":"setup_wizard","vertical":"","color":"primary","animated":""},model:{value:(_vm.step),callback:function ($$v) {_vm.step=$$v},expression:"step"}},[_c('q-icon',{staticClass:"fullscreen_btn",attrs:{"name":"fullscreen"},on:{"click":function($event){return _vm.fullscreen()}}}),_c('q-step',{attrs:{"name":1,"title":"Select distribution and desktop environment","prefix":"1","done":_vm.step > 1}},[_c('p',[_vm._v("First you have to choose a linux \"distribution\" and a \"desktop environment\" to use with that distribution.")]),_c('div',{staticClass:"expandableInfoContainer"},[_c('q-expansion-item',{staticClass:"expandableInfo",attrs:{"dense":"","dense-toggle":"","expand-separator":"","label":"What is a Linux distribution?"}},[_c('q-card',[_c('q-card-section',[_vm._v("\n        A Linux distribution is a specific GNU/Linux operating system that\n        bundles various software with the Linux kernel and GNU software. Many\n        such distributions exist and this page will recommend the most\n        prospectful, used and user-friendly ones and help you decide which one\n        to pick.\n        ")])],1)],1)],1),_c('div',{staticClass:"expandableInfoContainer"},[_c('q-expansion-item',{staticClass:"expandableInfo",attrs:{"dense":"","dense-toggle":"","expand-separator":"","label":"What is a desktop environment?"}},[_c('q-card',[_c('q-card-section',[_vm._v("\n        Each distribution is used with a \"desktop environment\" which is\n        software for the graphical user interface like windows, icons and\n        related functionalities. Many such desktop environments exist and this\n        page will again recommend the most prospectful, used and user-friendly\n        ones.\n        ")])],1)],1)],1),_c('div',{attrs:{"id":"distributionContainer"}},[_c('p',[_vm._v("Select GNU/Linux distribution:")]),_c('q-table',{staticClass:"distributionsTable",attrs:{"data":_vm.distributions,"columns":_vm.columns,"row-key":"name","selection":"single","selected":_vm.selection_distro2,"hide-header":"","hide-bottom":""},on:{"update:selected":function($event){_vm.selection_distro2=$event}},scopedSlots:_vm._u([{key:"body",fn:function(props){return [_c('q-tr',{class:{ disabledTableRow: props.row.enabled === false },attrs:{"props":props}},[_c('q-td',{key:"logo",staticStyle:{"width":"100px"},attrs:{"props":props}},[_c('q-img',{staticStyle:{"vertical-align":"middle !important","text-align":"left","width":"100px","height":"100px"},attrs:{"src":props.row.logo}})],1),_c('q-td',{key:"name",staticStyle:{"text-align":"left","width":"100px","font-weight":"bold"},attrs:{"props":props}},[_vm._v(_vm._s(props.row.name))]),_c('q-td',{key:"description",staticStyle:{"text-align":"left","white-space":"normal"},attrs:{"props":props}},[_c('span',{domProps:{"innerHTML":_vm._s(props.row.description)}})]),_c('q-td',{key:"website",staticStyle:{"text-align":"right","width":"100px"},attrs:{"props":props}},[_c('a',{staticStyle:{"color":"white","padding-right":"20px"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":props.row.website}},[_vm._v("Website")])]),_c('q-td',{staticStyle:{"text-align":"right","width":"150px"},attrs:{"auto-width":""}},[_c('q-btn',{attrs:{"color":"primary","label":"Select","disable":props.row.enabled === false},on:{"click":function($event){return _vm.selectDistro(props)}}})],1)],1)]}}],null,false,849479522)})],1),_c('div',{attrs:{"id":"desktopEnvironmentContainer"}},[_c('p',[_vm._v("Select desktop environment:")]),_c('q-table',{staticClass:"desktopEnvironmentsTable",attrs:{"data":_vm.desktopEnvironments,"columns":_vm.columns,"row-key":"name","selection":"single","selected":_vm.selection_de2,"hide-header":"","hide-bottom":""},on:{"update:selected":function($event){_vm.selection_de2=$event}},scopedSlots:_vm._u([{key:"body",fn:function(props){return [_c('q-tr',{class:{ disabledTableRow: props.row.enabled === false },attrs:{"props":props}},[_c('q-td',{key:"logo",staticStyle:{"width":"100px"},attrs:{"props":props}},[_c('q-img',{staticStyle:{"vertical-align":"middle !important","text-align":"left","width":"100px","height":"100px"},attrs:{"src":props.row.logo}})],1),_c('q-td',{key:"name",staticStyle:{"text-align":"left","width":"100px","font-weight":"bold"},attrs:{"props":props}},[_vm._v(_vm._s(props.row.name))]),_c('q-td',{key:"description",staticStyle:{"text-align":"left","white-space":"normal"},attrs:{"props":props}},[_vm._v(_vm._s(props.row.description))]),_c('q-td',{key:"website",staticStyle:{"text-align":"right","width":"100px"},attrs:{"props":props}},[_c('a',{staticStyle:{"color":"white","padding-right":"20px"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":props.row.website}},[_vm._v("Website")])]),_c('q-td',{staticStyle:{"text-align":"right","width":"150px"},attrs:{"auto-width":""}},[_c('q-btn',{attrs:{"color":"primary","label":"Select","disable":props.row.enabled === false},on:{"click":function($event){return _vm.selectDe(props)}}})],1)],1)]}}],null,false,3244149546)})],1),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Continue","disable":(_vm.selection_distro === '' || _vm.selection_de === '')},on:{"click":function($event){_vm.step = 2}}})],1)],1),_c('q-step',{attrs:{"name":2,"title":"Download iso & burn to DVD","prefix":"2","done":_vm.step > 2}},[_c('ul',{staticStyle:{"text-align":"left"}},[(_vm.selection_distro === 'kdeneon')?_c('li',[_vm._v("Download the .iso file of your selected distribution (KDE neon): "),_c('a',{staticStyle:{"color":"white","font-weight":"bold"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://neon.kde.org/download"}},[_vm._v("here")]),_vm._v(" by clicking on the button \"User Edition Live/Install Image\" on the left.")]):_vm._e(),_c('li',[_vm._v("Insert an empty DVD into your DVD reader.")]),(_vm.user_os === 'Windows')?_c('li',[_vm._v("Right click the downloaded .iso file and select Burn disc image. Select the DVD drive and check \"Verify disc after burning\". Then press Burn and wait for it to finish.")]):_vm._e(),(_vm.user_os === 'macOS')?_c('li',[_vm._v("Double click the disc, then drag the downloaded .iso file into the disc's window, choose File > Burn and wait for it to finish")]):_vm._e(),_c('li',[_vm._v("Use a waterproof pencil to label the DVD with the name of your dsitribution and the version number which is in the .iso's filename")])]),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Continue"},on:{"click":function($event){_vm.step = 3}}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){_vm.step = 1}}})],1)],1),_c('q-step',{attrs:{"name":3,"title":"Backup your data","prefix":"3"}},[_c('ul',[_c('li',[_vm._v("Do a complete backup of all your data or all the data you want to keep.")]),_c('li',[_vm._v("Don't just copy your files but use a backup program for this. An external hard drive is probably the most convenient storage device for the backup, but you could also use another internal hard drive or something else that has large enough storage space.")]),_c('li',[_vm._v("It's best to disconnect the storage device before you install GNU/Linux so you don't accidentally overwrite it.")]),_c('li',[_vm._v("GNU/Linux doesn't work with all filesystems of storage devices so you might have to change the filesystem of the storage device before you do the backup. This will erase all the data on the storage device. You can do this with the program "),_c('a',{staticStyle:{"color":"white","font-weight":"bold"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://gparted.org/download.php"}},[_vm._v("GParted")]),_vm._v(". For example select your connected external hard drive and change the filesystem to \"NTFS\" which also works on GNU/Linux.")]),(_vm.user_os === 'Windows')?_c('div',[_c('li',[_vm._v("If you don't have a backup program already download and install "),_c('a',{staticStyle:{"color":"white","font-weight":"bold"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://www.uranium-backup.com/uranium-backup-free-download/"}},[_vm._v("Uranium Backup Free")])]),_c('li',[_vm._v("Do a Full Backup of all the data you don't want to lose as described in "),_c('a',{staticStyle:{"color":"white","font-weight":"bold"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://www.uranium-backup.com/tutorials/configuring-a-files-and-folders-backup/"}},[_vm._v("this tutorial for Uranium Backup")]),_vm._v(". For this simply check \"This PC\" so that everything is selected when selecting the files to backup.")]),_c('li',[_vm._v("You might also lose all passwords saved in your browser and other things stored in apps. You can also save the licenses to software you bought by running for example "),_c('a',{staticStyle:{"color":"white","font-weight":"bold"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://www.abelssoft.de/en/windows/helpers/mykeyfinderAbelsoft"}},[_vm._v("MyKeyFinder Free")]),_vm._v(". You should do this if you plan to use Windows 10 if you don't like GNU/Linux or on another computer.")])]):_vm._e(),(_vm.user_os === 'macOS')?_c('div',[_c('li',[_vm._v("Backup all your data using Apple's TimeMachine.")]),_c('li',[_vm._v("You might lose all passwords saved in your browser and other things stored in apps.")])]):_vm._e(),_c('li',[_vm._v("You might also want to backup data on storage devices which have a filesystem that don't work with GNU/Linux. For example usb sticks. But most likely they will work under GNU/Linux. If it is a FAT32 filesystem there might be problems with long filenames. NTFS filesystems work perfectly fine. Ext2, Ext3, and Ext4 filesystems only work properly on GNU/Linux. You can change the filesystem with GParted but will lose all data on the device.")]),_c('li',[_vm._v("Before you continue verify that the backup worked correctly and that you have backedup all important data: go through some of the folders, check if the filesize of the entire backup is as large as the folders you backedup and check if the backup program had errors.")])]),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Continue"},on:{"click":function($event){_vm.step = 4}}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){_vm.step = 2}}})],1)],1),_c('q-step',{attrs:{"name":4,"title":"Install GNU/Linux","prefix":"4"}},[_c('ul',[_c('li',[_vm._v("To install GNU/Linux from DVD you need to make your computer start the DVD before it starts "+_vm._s(_vm.user_os)+". This is called booting from DVD.")]),_c('li',[_vm._v("To do this insert the DVD with GNU/Linux that you burned earlier into your disc drive. Then check that you really didn't forget to backup anything and shut your computer off.")]),_c('li',[_vm._v("Now disconnect all storage devices except the internal hard drive that you want to install GNU/Linux on.")]),_c('li',[_vm._v("Turn the computer on again. To make it boot from the DVD you need to change the boot order so that booting from DVD has the highest priority. To change this setting you need to press a key immediately after turning the computer on. This key is different for different computers but usually it's F2, F12 or Del. If it's not one of those you should look for the key in the texts that get displayed when you start your computer.")]),_c('li',[_vm._v("If it displays \"Press any key to boot from CD or DVD\" you should press any key")]),_c('li',[_vm._v("Once KDE neon has started click on \"Install neon user\" in the upper left")]),_c('li',[_vm._v("Go through the installation wizard. "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://youtu.be/y4OWeQZD8h4?t=107"}},[_vm._v("Here is a video of how")]),_vm._v(".")]),_c('li',[_vm._v("The installation wizard is mostly self-explanatory and you can also skip some steps like connecting to your WiFi. Once you complete step \"Disk Setup\" data on the selected hard drive will be lost. This is why it is important that you have backedup everything and that you don't select the wrong hard drive. It is recommended to select \"Guided - use entire disk and set up encrypted LVM\" because this allows you to protect your data with a password which you then have to enter every time you start (boot) your computer.")]),_c('li',[_vm._v("In step \"User Info\" select \"Require my password to log in\" and select a password that's not too short and simple. Make sure you remember your password/s for example by writing it down somewhere.")])]),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Continue"},on:{"click":function($event){_vm.step = 5}}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){_vm.step = 3}}})],1)],1),_c('q-step',{attrs:{"name":5,"title":"Install drivers and updates","prefix":"5"}},[_c('p',[_vm._v("You might have to enter your password before making changes")]),_c('ul',[_c('li',[_vm._v("Connect to your WLAN or LAN if you aren't yet by clicking the WiFi icon in bottom right, selecting your WLAN and entering your password. You can configure the connection by clicking the button in the upper right of the box.")]),_c('li',[_vm._v("Once you're connected to your WLAN install the latest updates if you haven't yet by clicking the button in the bottom left > Software Center > Updates > Install")]),_c('li',[_vm._v("Connect other hardware to your computer if it isn't connected yet like your printer or your graphics card.")]),_c('li',[_vm._v("To get your printer to work click on the button in the bottom left and enter \"printer\" in the search field > Print Settings.")])]),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Continue"},on:{"click":function($event){_vm.step = 6}}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){_vm.step = 4}}})],1)],1),_c('q-step',{attrs:{"name":6,"title":"Install needed software","prefix":"6"}},[_c('ul',[_c('li',[_vm._v("Replace software you used that only runs on "+_vm._s(_vm.user_os)+" or if there's no alternative use "),(_vm.user_os === 'Windows')?_c('span',[_vm._v("Wine or ")]):_vm._e(),_vm._v("a virtual machine.")]),_c('li',[_vm._v("Common software can be found by swiping the card "),_c('span',{staticStyle:{"text-decoration":"underline"},on:{"click":function($event){return _vm.scrollToElement('reason_1')}}},[_vm._v("here")]),_vm._v(".")]),_c('li',[_vm._v("If you can't find an alternative for some software you could also try sites like "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://alternativeto.net/"}},[_vm._v("AlternativeTo")]),_vm._v(" to find free software alternatives that run on GNU/Linux.")]),(_vm.user_os === 'Windows')?_c('span',[_c('li',[_vm._v("If you still need some software that only runs on Windows you can simply use Wine to run it. "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://itsfoss.com/use-windows-applications-linux/"}},[_vm._v("Here is how to install and use Wine.")])])]):_vm._e(),_c('li',[_vm._v("As a last option you can create a virtual machine with "+_vm._s(_vm.user_os)+" within Linux to use "+_vm._s(_vm.user_os)+"-programs: "),_c('div',{staticClass:"expandableInfoContainer"},[_c('q-expansion-item',{staticClass:"expandableInfo",staticStyle:{"text-align":"left"},attrs:{"dense":"","dense-toggle":"","expand-separator":"","label":"How to use a virtual machine"}},[_c('q-card',[_c('q-card-section',[_vm._v("For this install the program \"aqemu\" (alternatively VirtualBox works too), start it, click the green plus button on the left and press next in all steps but make sure to select the most appropriate OS-type template, and a disk size that's large enough (usually 30GB). Once the virtual machine has been prepared, click on it, select Media and select Add CD-ROM. Then select an .iso file for "+_vm._s(_vm.user_os)+" or insert the DVD and select the DVD. Then also increase the memory to a few gigabytes under VM > Memory. Then press apply and start the virtual machine by right click > Start. Install "+_vm._s(_vm.user_os)+" in the virtual machine. That won't delete any data on your hard drive because the machine is only virtual. Once it's installed you can install software within the virtual machine and use it within the virtual machine. You can share files via Folder Sharing, via the Internet or via .iso files.\n              ")])],1)],1)],1)]),_c('li',[_vm._v("If you play computer games not all of them might work on GNU/Linux. To play games on GNU/Linux use "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://lutris.net/"}},[_vm._v("Lutris")]),_vm._v(", "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://www.protondb.com/"}},[_vm._v("ProtonDB")]),_vm._v(" and/or "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://steamcommunity.com/linux/"}},[_vm._v("Steam for Linux")]),_c('br'),_vm._v("You can also play console games with emulators. For example PlayStation2 games with "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://pcsx2.net/download/releases/linux.html"}},[_vm._v("PCSX2")]),_vm._v("."),_c('br'),_vm._v("And there are also some games that were made for GNU/Linux. You can install many of those with your software manager the same way you can install any other software. One such game is "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://supertuxkart.net/Main_Page"}},[_vm._v("SuperTuxKart")]),_vm._v(".")]),_c('li',[_vm._v("Your software manager in KDE neon is "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://userbase.kde.org/Discover"}},[_vm._v("Discover")]),_vm._v(". But it doesn't yet work with packages so you also have a second software-manager \"Apper\". You can open them by entering the name in the search after pressing the button in the bottom left. To install something simply enter the name in the search bar of the software manager, press install and enter your password. The software manager is also used to do updates for all of your software.")]),_c('li',[_vm._v("Never run software as root. Apps should be installed via your software manager only except if it's not available in the \"repositories\" it has configured.")])]),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Continue"},on:{"click":function($event){_vm.step = 7}}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){_vm.step = 5}}})],1)],1),_c('q-step',{attrs:{"name":7,"title":"Configure your system","prefix":"7"}},[_c('ul',[_c('li',[_vm._v("Most settings can be found under System Settings after pressing the button in the bottom left.")]),_c('li',[_vm._v("To change KDE to dark mode select Workspace Theme > Breeze Dark, Colors > Breeze Dark, Icons > Breeze Dark, Application Style > Widget Style > Breeze")]),_c('li',[_vm._v("Under Desktop Behaviour check Double click to open files and folders.")]),_c('li',[_vm._v("Disable notification sounds because they can be too loud by going to Notifications, selecting one Event source after another and clicking the button \"Disable sounds for all of these events\" at the bottom.")]),_c('li',[_vm._v("Under Accessibility > make sure \"Use system bell\", \"Use customized bell\" and \"Use visual bell\" are disabled.")]),_c('li',[_vm._v("It's important that you know how to open the Terminal if you ever need to enter a command: press the button in the bottom left and enter \"terminal\" in the search. For KDE the Terminal is Konsole by default. You can enter commands here. Make sure you don't enter dangerous commands because they could delete data. Commands without \"sudo\" in them are unlikely to be dangerous. One exemplary command is \"sudo apt-get update && sudo apt-get upgrade\" which is an alternative way to update all your software at once.")]),_c('li',[_vm._v("You can also configure updates to be done automatically so you don't need to them every time.")]),_c('li',[_vm._v("You probably need to configure some software such as adding spellchecking for your language for LibreOffice.")]),_c('li',[_vm._v("The Firefox AddOn "),_c('a',{staticStyle:{"color":"white"},attrs:{"target":"_blank","rel":"noopener noreferrer","href":"https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/"}},[_vm._v("Plasma Integration")]),_vm._v(" better integrates the browser into KDE. For example it shows browser notifications within KDE.")]),_c('li',[_vm._v("To view your files press the bottom left button and click on File Manager")]),_c('li',[_vm._v("Connect the devices you stored your backups on and copy them to your hard drive. On the left side of your file manager \"Dolphin\" you can find folders for various types of content. You can add shortcuts there by right click > Add entry.")])]),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Continue"},on:{"click":function($event){_vm.step = 8}}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){_vm.step = 6}}})],1)],1),_c('q-step',{attrs:{"name":8,"title":"Finish","prefix":"8"}},[_c('p',[_vm._v("Congratulations for switching to GNU/Linux!")]),_c('q-btn',{staticStyle:{"background-color":"#027BE3 !important","margin-top":"15px","margin-bottom":"15px"},attrs:{"flat":""}},[_c('a',{staticClass:"twitter-hashtag-button",staticStyle:{"color":"white","text-decoration":"none"},attrs:{"href":"https://twitter.com/intent/tweet?text=I'm%20switching%20to%20Linux%20&button_hashtag=Switch2Linux","data-show-count":"false"}},[_vm._v("Tweet about it")])]),_c('p',[_vm._v("If you need help you can find help in places such as "),_c('span',{staticStyle:{"text-decoration":"underline"},on:{"click":function($event){return _vm.scrollToElement('reason_13')}}},[_vm._v("these")]),_vm._v(" (swipe card).")]),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"primary","label":"Finish"}}),_c('q-btn',{staticClass:"q-ml-sm",attrs:{"flat":"","color":"primary","label":"Back"},on:{"click":function($event){_vm.step = 7}}})],1)],1)],1)],1):_vm._e()}
var SetupWizardvue_type_template_id_013832a5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SetupWizard.vue?vue&type=template&id=013832a5&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SetupWizard.vue?vue&type=script&lang=js&

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
/* harmony default export */ var SetupWizardvue_type_script_lang_js_ = ({
  name: "SetupWizard",
  props: {
    user_type: {
      type: String,
      required: true
    },
    user_os: {
      type: String,
      required: true
    }
  },
  data: function data() {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;

    return {
      step: 1,
      selection_distro2: [],
      selection_distro: '',
      selection_de2: [],
      selection_de: '',
      columns: [(_ref = {
        name: 'logo',
        align: 'center',
        required: true,
        label: 'logo',
        field: 'logo'
      }, defineProperty_default()(_ref, "align", 'left'), defineProperty_default()(_ref, "sortable", false), _ref), (_ref2 = {
        name: 'name',
        align: 'center',
        required: true,
        label: 'name',
        field: 'name'
      }, defineProperty_default()(_ref2, "align", 'left'), defineProperty_default()(_ref2, "sortable", false), _ref2), (_ref3 = {
        name: 'description',
        align: 'center',
        required: true,
        label: 'description',
        field: 'description'
      }, defineProperty_default()(_ref3, "align", 'left'), defineProperty_default()(_ref3, "sortable", false), _ref3), (_ref4 = {
        name: 'website',
        align: 'center',
        required: true,
        label: 'website',
        field: 'website'
      }, defineProperty_default()(_ref4, "align", 'left'), defineProperty_default()(_ref4, "sortable", false), _ref4), (_ref5 = {
        name: 'selectionKey',
        align: 'center',
        required: true,
        label: 'selectionKey',
        field: 'selectionKey'
      }, defineProperty_default()(_ref5, "align", 'left'), defineProperty_default()(_ref5, "sortable", false), _ref5), (_ref6 = {
        name: 'enabled',
        align: 'center',
        required: true,
        label: 'enabled',
        field: 'enabled'
      }, defineProperty_default()(_ref6, "align", 'left'), defineProperty_default()(_ref6, "sortable", false), _ref6)],
      distributions: [{
        logo: '../statics/logos_debian_small.png',
        name: 'Debian',
        description: '100% FOSS, run by a large community, very stable and the distribution used on most servers. However not easy for beginners yet. Debian calls itself the "universal operating system" which makes its high goals clear. More reasons to use it <a target="_blank" rel="noopener noreferrer" href="https://www.debian.org/intro/why_debian" style="color: white; font-weight: bold;">here</a>.',
        enabled: true,
        website: 'https://www.debian.org/',
        selectionKey: 'debian'
      }, {
        logo: '../statics/logos_kdeneon_small.png',
        name: 'KDE neon',
        description: 'Easy to use, looks modern and great, "the latest and greatest of KDE community software packaged on a rock-solid base". Video showcasing it <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=TXWUyUUx3ZE" style="color: white; font-weight: bold;">here</a>',
        enabled: true,
        website: 'https://neon.kde.org/',
        selectionKey: 'kdeneon'
      }, {
        logo: '../statics/logos_kubuntu_small.png',
        name: 'Kubuntu',
        description: 'Similar to KDE neon but "Kubuntu maintains stable releases and LTS version of Ubuntu while KDE neon focuses on updating developer editions of KDE applications without maintaining stable releases of Ubuntu unless the root user actively chooses to upgrade their systems". In short in KDE neon you\'ll have newer KDE applications while in Kubuntu you\'ll have newer Ubuntu software by default',
        enabled: false,
        website: 'https://kubuntu.org/',
        selectionKey: 'kubuntu'
      }],
      desktopEnvironments: [{
        logo: '../statics/logos_kde.png',
        name: 'KDE',
        description: '"Simple by default, Powerful when needed", highly customizable, modern UI, phone integration and more',
        enabled: true,
        website: 'https://kde.org/',
        selectionKey: 'kde'
      }, {
        logo: '../statics/logos_gnome.png',
        name: 'GNOME',
        description: '"An easy and elegant way to use your computer, GNOME is designed to put you in control and get things done."',
        enabled: false,
        website: 'https://www.gnome.org/',
        selectionKey: 'gnome'
      }]
    };
  },
  methods: {
    fullscreen: function fullscreen() {
      var el = document.getElementById("setup_wizard");

      if (this.isSetupWizardFullscreen === false) {
        el.classList.add("setup_wizard_fullscreen");
        this.isSetupWizardFullscreen = true;
      } else {
        el.classList.remove("setup_wizard_fullscreen");
        this.isSetupWizardFullscreen = false;
      }
    },
    selectDistro: function selectDistro(props) {
      this.selection_distro = props.row.selectionKey;
      this.selection_distro2 = [props.row.selectionKey];
      props.selected = true;

      if (props.row.selectionKey === "kdeneon" || props.row.selectionKey === "kubuntu") {
        this.selection_de = "kde";
        this.selection_de2 = ["kde"]; //TODO props.selected = true;
      } else {
        this.selection_de = "";
        this.selection_de2 = [];
      }
    },
    selectDe: function selectDe(props) {
      this.selection_de = props.row.selectionKey;
      this.selection_de2 = [props.row.selectionKey];
      props.selected = true;
    },
    scrollToElement: function scrollToElement(el) {
      var ell = document.getElementById(el);
      ell.scrollIntoView();
    }
  },
  watch: {
    user_type: function user_type(val) {
      if (val === "Geek (experienced)") {
        this.distributions = [{
          logo: '../statics/logos_debian_small.png',
          name: 'Debian',
          description: 'bla',
          enabled: true,
          website: '',
          selectionKey: 'debian'
        }, {
          logo: '../statics/logos_kdeneon_small.png',
          name: 'KDE neon',
          description: 'bla',
          enabled: true,
          website: '',
          selectionKey: 'kdeneon'
        }, {
          logo: '../statics/logos_kubuntu_small.png',
          name: 'Kubuntu',
          description: 'bla',
          enabled: false,
          website: '',
          selectionKey: 'kubuntu'
        }];
      } else {
        this.distributions = [{
          logo: '../statics/logos_kdeneon_small.png',
          name: 'KDE neon',
          description: 'bla',
          enabled: true,
          website: '',
          selectionKey: 'kdeneon'
        }, {
          logo: '../statics/logos_kubuntu_small.png',
          name: 'Kubuntu',
          description: 'bla',
          enabled: false,
          website: '',
          selectionKey: 'kubuntu'
        }, {
          logo: '../statics/logos_debian_small.png',
          name: 'Debian',
          description: 'Not recommended for inexperienced users yet',
          enabled: true,
          website: '',
          selectionKey: 'debian'
        }];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/SetupWizard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SetupWizardvue_type_script_lang_js_ = (SetupWizardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__("f531");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js
var QStep = __webpack_require__("87fe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js
var QExpansionItem = __webpack_require__("3b73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 26 modules
var QTable = __webpack_require__("eaac");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__("bd08");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__("db86");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepperNavigation.js
var QStepperNavigation = __webpack_require__("b19c");

// CONCATENATED MODULE: ./src/components/SetupWizard.vue





/* normalize component */

var SetupWizard_component = Object(componentNormalizer["a" /* default */])(
  components_SetupWizardvue_type_script_lang_js_,
  SetupWizardvue_type_template_id_013832a5_render,
  SetupWizardvue_type_template_id_013832a5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SetupWizard = (SetupWizard_component.exports);













runtime_auto_import_default()(SetupWizard_component, 'components', {QStepper: QStepper["a" /* default */],QIcon: QIcon["a" /* default */],QStep: QStep["a" /* default */],QExpansionItem: QExpansionItem["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QTable: QTable["a" /* default */],QTr: QTr["a" /* default */],QTd: QTd["a" /* default */],QImg: QImg["a" /* default */],QBtn: QBtn["a" /* default */],QStepperNavigation: QStepperNavigation["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Slideshow.vue?vue&type=template&id=4cabd760&
var Slideshowvue_type_template_id_4cabd760_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row slideshow_row"},[_c('div',{staticClass:"slideshow_container"},[_c('q-carousel',{staticClass:"qcarousel",attrs:{"animated":"","navigation":"","arrows":"","infinite":"","autoplay":"","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:(_vm.slide),callback:function ($$v) {_vm.slide=$$v},expression:"slide"}},[_c('q-carousel-slide',{staticClass:"slide_item",attrs:{"name":1,"img-src":__webpack_require__("51c5")}}),_c('q-carousel-slide',{staticClass:"slide_item",attrs:{"name":2,"img-src":__webpack_require__("3161")}})],1)],1)])}
var Slideshowvue_type_template_id_4cabd760_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Slideshow.vue?vue&type=template&id=4cabd760&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Slideshow.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Slideshowvue_type_script_lang_js_ = ({
  name: "Slideshow",
  data: function data() {
    return {
      slide: 1
    };
  }
});
// CONCATENATED MODULE: ./src/components/Slideshow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Slideshowvue_type_script_lang_js_ = (Slideshowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js
var QCarousel = __webpack_require__("880c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__("62cd");

// CONCATENATED MODULE: ./src/components/Slideshow.vue





/* normalize component */

var Slideshow_component = Object(componentNormalizer["a" /* default */])(
  components_Slideshowvue_type_script_lang_js_,
  Slideshowvue_type_template_id_4cabd760_render,
  Slideshowvue_type_template_id_4cabd760_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Slideshow = (Slideshow_component.exports);



runtime_auto_import_default()(Slideshow_component, 'components', {QCarousel: QCarousel["a" /* default */],QCarouselSlide: QCarouselSlide["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SocialFeed.vue?vue&type=template&id=900ab202&
var SocialFeedvue_type_template_id_900ab202_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{attrs:{"id":"rss"}},[(_vm.items.length > 0 && _vm.isSocialFeedExpanded === false)?_c('div',[_c('q-carousel',{staticClass:"qcarousel2",attrs:{"animated":"","swipeable":"","infinite":"","autoplay":"","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:(_vm.slide),callback:function ($$v) {_vm.slide=$$v},expression:"slide"}},_vm._l((_vm.items),function(item){return _c('q-carousel-slide',{key:item.guid,staticClass:"slide_item",attrs:{"name":item.title}},[(
              item.feed_name === 'reddit' &&
                item.categories[0] !== undefined &&
                item.categories[0] !== null
            )?_c('div',{staticStyle:{"border":"1px solid orange"}},[_c('p',[_vm._v(_vm._s(item.title))]),_c('a',{staticStyle:{"padding":"0px !important","margin":"0px"},attrs:{"href":item.link}},[_vm._v(_vm._s(item.author)+" on /r/"+_vm._s(item.categories[0]))]),_c('p',{staticStyle:{"font-size":"8pt","opacity":"0.7","text-align":"left"}},[_vm._v("\n              ("+_vm._s(_vm.dateFormat1(item.pubDate))+")\n            ")])]):(item.feed_name === 'twitter')?_c('div',{staticStyle:{"border":"1px solid blue"}},[_c('div',{domProps:{"innerHTML":_vm._s(item.content)}})]):_vm._e()])}),1),_c('div',{staticStyle:{"width":"100%","height":"auto","background-color":"#245f5e","horizontal-align":"center","text-align":"center"}},[_c('q-icon',{staticClass:"arrow_down_2",attrs:{"name":"keyboard_arrow_down"},on:{"click":function($event){return _vm.expandSocialFeed()}}})],1)],1):_vm._e(),(_vm.items.length > 0 && _vm.isSocialFeedExpanded === true)?_c('div',[_c('div',{staticStyle:{"width":"100%","height":"auto","background-color":"#245f5e","horizontal-align":"center","text-align":"center"}},[_c('q-icon',{staticClass:"arrow_up_2",attrs:{"name":"keyboard_arrow_up"},on:{"click":function($event){return _vm.collapseSocialFeed()}}})],1),_c('q-list',{staticStyle:{"background-color":"#245f5e"}},_vm._l((_vm.items),function(item){return _c('q-item',{key:item.guid,attrs:{"href":item.link}},[_c('q-item-section',[(item.feed_name === 'reddit')?_c('div',{staticClass:"reddit_post",staticStyle:{"border":"1px solid orange"}},[_c('p',[_vm._v(_vm._s(item.title))]),_c('a',{staticStyle:{"padding":"0px !important","margin":"0px"},attrs:{"href":item.link}},[_vm._v(_vm._s(item.author)+" on /r/"+_vm._s(item.categories[0]))]),_c('p',{staticStyle:{"font-size":"8pt","opacity":"0.7","text-align":"left"}},[_vm._v("\n                ("+_vm._s(_vm.dateFormat1(item.pubDate))+")\n              ")])]):(item.feed_name === 'twitter')?_c('div',{staticClass:"tweet",staticStyle:{"border":"1px solid blue"}},[_c('div',{domProps:{"innerHTML":_vm._s(item.content)}})]):_vm._e()])],1)}),1)],1):_vm._e()])])}
var SocialFeedvue_type_template_id_900ab202_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SocialFeed.vue?vue&type=template&id=900ab202&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("097d");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");

// EXTERNAL MODULE: ./node_modules/dateformat/lib/dateformat.js
var dateformat = __webpack_require__("b9b9");
var dateformat_default = /*#__PURE__*/__webpack_require__.n(dateformat);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SocialFeed.vue?vue&type=script&lang=js&




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


var API = "https://api.rss2json.com/v1/api.json?rss_url=";
/* harmony default export */ var SocialFeedvue_type_script_lang_js_ = ({
  name: "SocialFeed",
  data: function data() {
    return {
      slide: "",
      items: [],
      loading: true,
      isSocialFeedExpanded: false,
      settings: {
        feeds: [// {
          //   name: "twitter",
          //   url: "..."
          // },
          // {
          //   name: "reddit",
          //   url: "https://www.reddit.com/search.xml?q=Switch2Linux&sort=new"
          // }
        ]
      },
      newFeed: ""
    };
  },
  mounted: function mounted() {
    this.items = [];
    this.loadFeeds();
  },
  methods: {
    fetch: function fetch(url) {
      var x = this.$axios.get("".concat(API).concat(encodeURIComponent(url))).then(function (res) {
        return res.data;
      });
      return x;
    },
    addFeed: function addFeed(url) {
      if (url.trim().length === 0) return;
      this.newFeed = "";
      this.settings.feeds.push(url);
      this.loadFeeds();
    },
    removeFeed: function removeFeed(idx) {
      this.settings.feeds.splice(idx, 1);
    },
    loadFeeds: function loadFeeds() {
      var _this = this;

      this.settings.feeds.forEach(function (feed) {
        Promise.resolve(_this.fetch(feed.url)).then(function (feeds) {
          if (!feeds) throw new Error("Unexpected response from API");
          feeds.items.forEach(function (item) {
            item.feed_name = feed.name;
          });
          _this.items = _this.items.concat(feeds.items).filter(function (item) {
            return item.feed_name === "reddit" && item.item.categories[0] !== undefined && item.categories[0] !== null || item.feed_name === "twitter";
          }).sort(function (a, b) {
            return new Date(b.pubDate) - new Date(a.pubDate);
          }); // TODO sort by likes and upvotes (not in rss feed) or preselect tweets
        }).finally(function () {
          _this.loading = false;
        }).catch(function (err) {
          return _this.$emit("Error: ", err);
        });
      });
    },
    expandSocialFeed: function expandSocialFeed() {
      this.isSocialFeedExpanded = true;
    },
    collapseSocialFeed: function collapseSocialFeed() {
      this.isSocialFeedExpanded = false;
    },
    dateFormat1: function dateFormat1(item_pubDate) {
      return dateformat_default()(new Date(item_pubDate), "UTC:h:MM TT Z - d mmm yyyy");
    }
  }
});
// CONCATENATED MODULE: ./src/components/SocialFeed.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SocialFeedvue_type_script_lang_js_ = (SocialFeedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// CONCATENATED MODULE: ./src/components/SocialFeed.vue





/* normalize component */

var SocialFeed_component = Object(componentNormalizer["a" /* default */])(
  components_SocialFeedvue_type_script_lang_js_,
  SocialFeedvue_type_template_id_900ab202_render,
  SocialFeedvue_type_template_id_900ab202_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SocialFeed = (SocialFeed_component.exports);







runtime_auto_import_default()(SocialFeed_component, 'components', {QCarousel: QCarousel["a" /* default */],QCarouselSlide: QCarouselSlide["a" /* default */],QIcon: QIcon["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */]})

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/scroll.js
var utils_scroll = __webpack_require__("0831");

// EXTERNAL MODULE: ./node_modules/quasar/lang/index.json
var lang = __webpack_require__("a6d8");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=script&lang=js&

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








var getScrollTarget = utils_scroll["a" /* default */].getScrollTarget,
    setScrollPosition = utils_scroll["a" /* default */].setScrollPosition;

var availableTranslations = ["de-de", "en-us"];
var appLanguages = lang.filter(function (lang) {
  return availableTranslations.includes(lang.isoName);
});
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "PageIndex",
  mounted: function mounted() {
    //setlang
    var language = window.navigator.userLanguage || window.navigator.language;

    if (availableTranslations.includes(language)) {
      //.isoName)
      this.lang = language;
    }

    window.addEventListener("resize", this.init);
    window.addEventListener("scroll", this.checkPosition);
    window.addEventListener("DOMContentLoaded", this.checkPosition);
    this.animationDone = false;
    this.isWhyHowExpanded = false;
    this.init();
  },
  data: function data() {
    return {
      user_type: "",
      user_os: "",
      panel: "user_os",
      lang: this.$q.lang.isoName,
      animationDone: false,
      isWhyHowExpanded: false,
      isSetupWizardFullscreen: false,
      hasOptionsArrowBackBeenClicked: false,
      elements: [],
      windowHeight: 0,
      options_user_os: [{
        label: "Windows",
        value: "Windows"
      }, {
        label: "macOS",
        value: "macOS"
      }],
      options_user_type: [{
        label: i18n["b" /* i18n */].t("explanations.wizard_options_user_type_personal"),
        value: "Personal user (inexperienced)"
      }, {
        label: i18n["b" /* i18n */].t("explanations.wizard_options_user_type_geek"),
        value: "Geek (experienced)"
      }, {
        label: i18n["b" /* i18n */].t("explanations.wizard_options_user_type_developer"),
        value: "Developer"
      }, {
        label: i18n["b" /* i18n */].t("explanations.wizard_options_user_type_school"),
        value: "School"
      }, {
        label: i18n["b" /* i18n */].t("explanations.wizard_options_user_type_administration"),
        value: "Public administration"
      }, {
        label: i18n["b" /* i18n */].t("explanations.wizard_options_user_type_business"),
        value: "Business"
      }],
      reasons: reasons
    };
  },
  components: {
    Reason: Reason,
    SocialFeed: SocialFeed,
    SetupWizard: SetupWizard,
    Slideshow: Slideshow
  },
  methods: {
    scrollToElement: function scrollToElement(el) {
      var ell = document.getElementById(el);
      var target = getScrollTarget(ell);
      var offset = ell.offsetTop;
      var duration = 200;
      setScrollPosition(target, offset, duration);
    },
    scrollToElement2: function scrollToElement2(el2) {
      var ell = document.getElementById(el2);
      ell.scrollIntoView();
    },
    init: function init() {
      this.elements = document.querySelectorAll(".hidden");
      this.windowHeight = window.innerHeight;
      this.checkPosition();
    },
    checkPosition: function checkPosition() {
      this.showWhatIsLinux(false);
      this.showWhatIsWebsite(false);

      if (!this.animationDone) {
        for (var i = 0; i < this.elements.length; i++) {
          var element = this.elements[i];
          var positionFromTop = this.elements[i].getBoundingClientRect().top;

          if (positionFromTop - this.windowHeight <= 0) {
            element.classList.add("animated", "bounceInUp", "slow");
            element.classList.remove("hidden");
            this.animationDone = true;
          }
        }
      }

      var elll = document.getElementsByClassName("reasons");

      for (var i = 0; i < elll.length; i++) {
        if (document.documentElement.scrollTop + this.windowHeight > elll[i].offsetTop + elll[i].offsetHeight - 10) {
          if (this.reasons[i].special !== undefined && this.reasons[i].special !== null && this.reasons[i].special === true) elll[i].classList.add("animated", "slideInUp", "slow");else if (this.reasons[i].slide !== undefined && this.reasons[i].slide !== null && this.reasons[i].slide.indexOf("right") < 0) elll[i].classList.add("animated", "slideInRight", "slow");else elll[i].classList.add("animated", "slideInLeft", "slow");
          elll[i].classList.remove("perma_hidden2");
        }
      }
    },
    showWhatIsLinux: function showWhatIsLinux(isMouseOver) {
      var el = document.getElementById("what_is_linux");
      el.classList.add("animated", "fadeIn", "slow");
      el.classList.remove("hidden");

      if (isMouseOver) {
        var ell = document.getElementById("scroll_arrow");
        var offset = ell.offsetTop;
        var scrollPixels = offset - window.pageYOffset;
        var x = offset + 36 - (window.pageYOffset + window.innerHeight);
        if (x > 0) window.scrollBy(0, x);
      }
    },
    showWhatIsWebsite: function showWhatIsWebsite(isMouseOver) {
      var el = document.getElementById("what_is_website");
      el.classList.add("animated", "fadeIn", "slow");
      el.classList.remove("hidden");
      var el3 = document.getElementById("to_hide");
      el3.classList.add("perma_hidden");

      if (isMouseOver) {
        var ell = document.getElementById("scroll_arrow");
        var offset = ell.offsetTop;
        var scrollPixels = offset - window.pageYOffset;
        var x = offset + 36 - (window.pageYOffset + window.innerHeight);
        if (x > 0) window.scrollBy(0, x);
      }
    },
    options_user_type_changed: function options_user_type_changed(value) {
      console.log("###", value);
      this.panel = "setup_wizard";
    },
    options_user_os_changed: function options_user_os_changed(value) {
      console.log("###", value);
      this.panel = "user_type";
    },
    jumpBack: function jumpBack() {
      this.$refs.options_panel_1.previous();
      this.hasOptionsArrowBackBeenClicked = true;
    },
    jumpForward: function jumpForward() {
      this.$refs.options_panel_1.next();
    },
    openUrl: function openUrl(url) {
      window.open(url, "_blank");
    },
    showImageSources: function showImageSources() {
      this.$q.dialog({
        dark: true,
        title: '<p>Image sources</p>',
        html: true,
        message: '<ul><li><strong>Reason \"It\'s gratis\"</strong>: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://svgsilh.com/image/2073604.html\" style=\"color: white;\">1</a> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pxhere.com/en/photo/1453371\" style=\"color: white;\">2</a></li>' + '<li><strong>Reason \"It\'s free software\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Free_and_open-source_software_logo_(2009).svg" style="color: white;">1</a></li>' + '<li><strong>Reason \"Realizes a free and open society\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/pt/illustrations/globo-global-terra-planeta-mundo-689407/" style="color: white;">1</a> <a target="_blank" rel="noopener noreferrer" href="https://svgsilh.com/de/image/147015.html" style="color: white;">2</a> <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/de/illustrations/puzzle-puzzleteil-spiel-puzzeln-1318349/" style="color: white;">3</a></li>' + '<li><strong>Reason \"More secure\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/fr/illustrations/de-s%C3%A9curit%C3%A9-bouclier-protection-3482962/" style="color: white;">1</a> <a target="_blank" rel="noopener noreferrer" href="https://openclipart.org/detail/215819/linux%20avatar" style="color: white;">2</a></li>' + '<li><strong>Reason \"Fosters innovation\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/illustrations/business-idea-innovation-creative-3420279/" style="color: white;">1</a></li>' + '<li><strong>Reason \"Also runs on old hardware and mini computers\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://community.kde.org/File:Mascot_konqi-app-hardware.png" style="color: white;">1</a></li>' + '<li><strong>Reason \"No walled garden and vendor-lock-in\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Ic_lock_open_48px.svg" style="color: white;">1</a></li>' + '<li><strong>Reason \"Privacy\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://rally.stopwatching.us/resources.html" style="color: white;">1</a></li>' + '<li><strong>Reason \"Independence and sovereignty\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/de/illustrations/computer-vergr%C3%B6%C3%9Fern-glas-laptop-3710284/" style="color: white;">1</a></li>' + '<li><strong>Reason \"Update mechanism and software repository\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://userbase.kde.org/Discover#How_to_use_Discover" style="color: white;">1</a></li>' + '<li><strong>Reason \"Can look better than Windows and macOS\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Neon-logo.svg" style="color: white;">1</a></li>' + '<li><strong>Reason \"Changeable source code\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pxhere.com/en/photo/1451251" style="color: white;">1</a></li>' + '<li><strong>Reason \"Community support\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Editors_and_community_support.png" style="color: white;">1</a></li>' + '<li><strong>Reason \"Only few barriers left\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Usage_share_of_operating_systems#Desktop_and_laptop_computers" style="color: white;">1</a></li>' + '<li><strong>Logos</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Debian-OpenLogo.svg" style="color: white;">Debian</a> <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Neon-logo.svg" style="color: white;">KDE neon</a> <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Kubuntu_logo.svg" style="color: white;">Kubuntu</a> <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:KDE_logo.svg" style="color: white;">KDE</a> <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/File:Gnomelogo.svg" style="color: white;">GNOME</a></li>' + '<li><strong>Screenshots</strong>: <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/unixporn/comments/b62mqc/kde_neon_mountains/" style="color: white;">1 by reddit user u/MrChrobok</a> <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Kde-neon-5.14.png" style="color: white;">2 by Wikipedia User Ulexer Miner</a>' + '<li>The reddit user will be contacted and more Screenshots will be added. The images have been modified.</li>' + '</ul>'
      }).onOk(function () {});
    }
  },
  watch: {
    user_os: function user_os(val) {},
    user_type: function user_type(val) {
      var _this = this;

      this.$nextTick(function () {
        _this.scrollToElement2("stepper_module");
      });
    },
    lang: function lang(_lang) {
      var _this2 = this;

      // dynamic import, so loading on demand only
      __webpack_require__("302e")("./".concat(_lang)).then(function (lang) {
        _this2.$q.lang.set(lang.default);
      });
    }
  },
  created: function created() {
    this.langOptions = appLanguages.map(function (lang) {
      return {
        label: lang.nativeName,
        value: lang.isoName
      };
    });
  }
});
// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/option-group/QOptionGroup.js + 2 modules
var QOptionGroup = __webpack_require__("9f0a");

// CONCATENATED MODULE: ./src/pages/Index.vue





/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  pages_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (Index_component.exports);






runtime_auto_import_default()(Index_component, 'components', {QPage: QPage["a" /* default */],QIcon: QIcon["a" /* default */],QTabPanels: QTabPanels["a" /* default */],QTabPanel: QTabPanel["a" /* default */],QOptionGroup: QOptionGroup["a" /* default */]})


/***/ }),

/***/ "f17c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=3.ca5a300a.js.map