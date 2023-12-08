/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0px;\n}\n\ndiv#content-wrapper {\n  height: 70vh;\n  width: clamp(300px, 50%, 1200px);\n  background-color: whitesmoke;\n  box-shadow: 5px 5px 5px gray;\n  display: grid;\n  grid-template-columns: minmax(150px, 2fr) 5fr;\n  grid-template-rows: minmax(50px, 1fr) 8fr;\n}\n\ndiv#sidebar-wrapper {\n  grid-column: 1 / 2;\n  grid-row: 1/ 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\ndiv#todo-wrapper,\ndiv#project-wrapper {\n  overflow: scroll;\n}\n\ndiv.project > h3 {\n  cursor: pointer;\n  flex-grow: 1;\n}\n\ndiv.todo-header > h4.title {\n  cursor: pointer;\n}\n\n\ndiv.project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv.todo-header {\n  display: flex;\n  align-items: center;\n}\n\ndiv.todo-header > .title {\n  flex-grow: 1;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/dashify/index.js":
/*!***************************************!*\
  !*** ./node_modules/dashify/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("/*!\n * dashify <https://github.com/jonschlinkert/dashify>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = (str, options) => {\n  if (typeof str !== 'string') throw new TypeError('expected a string');\n  return str.trim()\n    .replace(/([a-z])([A-Z])/g, '$1-$2')\n    .replace(/\\W/g, m => /[À-ž]/.test(m) ? m : '-')\n    .replace(/^-+|-+$/g, '')\n    .replace(/-{2,}/g, m => options && options.condense ? '-' : m)\n    .toLowerCase();\n};\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/dashify/index.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/expansion.js":
/*!**********************************!*\
  !*** ./src/scripts/expansion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateTodoExpansion: () => (/* binding */ generateTodoExpansion)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/scripts/todo.js\");\n// expands a given todo div with the info\n\n\n\nfunction generateTodoExpansion(todo) {\n  const div = document.createElement('div')\n  div.classList.add('todo-info')\n\n  description.textContent = todo.description\n  priority.textContent = todo.priority\n  notes.textContent = todo.notes\n\n  for (const property of _todo__WEBPACK_IMPORTED_MODULE_0__.expandedTodoProperties) {\n    const propertyDiv = document.createElement('div')\n    const propertyHeading = document.createElement('h5')\n    const propertyDetails = document.createElement('p')\n    propertyHeading.textContent = capitalize(property)\n    propertyDetails.textContent = todo[property]\n\n    propertyDiv.append(propertyHeading, propertyDetails)\n    div.append(propertyDiv)\n  }\n  return div\n}\n\nfunction capitalize(str) {\n  const lower = str.toLowerCase()\n  return str.charAt(0).toUpperCase() + lower.slice(1)\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/expansion.js?");

/***/ }),

/***/ "./src/scripts/forms.js":
/*!******************************!*\
  !*** ./src/scripts/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editProjectForm: () => (/* binding */ editProjectForm),\n/* harmony export */   editTodoForm: () => (/* binding */ editTodoForm),\n/* harmony export */   newProjectForm: () => (/* binding */ newProjectForm),\n/* harmony export */   newTodoForm: () => (/* binding */ newTodoForm)\n/* harmony export */ });\n/* harmony import */ var dashify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dashify */ \"./node_modules/dashify/index.js\");\n/* harmony import */ var dashify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dashify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/scripts/index.js\");\n\n\n\n// ids are in the format [item's, project's if applicable]\nfunction openForm(formType, title, submitText, action, ids) {\n  const modal = document.querySelector(`dialog#${formType}-modal`)\n  const form = modal.querySelector(`form#${formType}-form`)\n  const modalTitle = modal.querySelector(`h2#${formType}-form-type`)\n  const formAction = form.querySelector(`input[name=action]`)\n  const formSubmit = form.querySelector(`input[type=submit]`)\n  modalTitle.textContent = title\n  formAction.value = action\n  formSubmit.value = submitText\n  modal.showModal()\n\n  const formItemId = form.querySelector(`input[name=id]`)\n  formItemId.value = ids[0]\n\n  if (formType === 'todo') {\n    const formProjectId = form.querySelector(`input[name=project-id]`)\n    formProjectId.value = ids[1]\n  }\n  \n  return form\n}\n\nfunction newTodoForm(projectId, todoId) {\n  openForm('todo', 'New Todo', 'Create Todo', 'new', [todoId, projectId])\n}\n\nfunction newProjectForm(projectId) {\n  openForm('project', 'New Project', 'Create Project', 'new', [projectId])\n}\n\nfunction editTodoForm(projectId, todo) {\n  const parameters = [\n    'title', 'description', 'dueDate', 'priority', 'notes', 'id'\n  ]\n  const formDiv = openForm('todo', 'Edit Todo', 'Edit', 'edit', [todo.id, projectId])\n  fillForm(formDiv, todo, parameters)\n}\n\nfunction editProjectForm(project) {\n  const parameters = [\n    'title'\n  ]\n\n  const formDiv = openForm('project', 'Edit Project', 'Edit', 'edit', [project.id])\n  fillForm(formDiv, project, parameters)\n}\n\n// prefills a given form with the object, and given parameters\n// assumes the form and object have all given parameters\nfunction fillForm(formDiv, object, parameters) {\n  for (const param of parameters) {\n    const targetInput = formDiv.querySelector(`input[name=${dashify__WEBPACK_IMPORTED_MODULE_0___default()(param)}]`)\n    targetInput.value = object[param]\n  }\n}\n\nconst todoModal = document.querySelector('dialog#todo-modal')\nconst todoForm = document.querySelector('form#todo-form')\nconst projectModal = document.querySelector('dialog#project-modal')\nconst projectForm = document.querySelector('form#project-form')\n\ntodoForm.addEventListener('submit', (e) => {\n  e.preventDefault()\n  todoModal.close()\n  const action = e.target.action.value\n  switch (action) {\n    case 'new':\n      ;(0,___WEBPACK_IMPORTED_MODULE_1__.createTodo)(e.target)\n      break\n    case 'edit':\n      ;(0,___WEBPACK_IMPORTED_MODULE_1__.editTodo)(e.target)\n      break\n  }\n})\n\nprojectForm.addEventListener('submit', (e) => {\n  e.preventDefault()\n  projectModal.close()\n  const action = e.target.action.value\n  switch (action) {\n    case 'new':\n      ;(0,___WEBPACK_IMPORTED_MODULE_1__.createProject)(e.target)\n      break\n    case 'edit':\n      const projectId = e.target.id.value\n      ;(0,___WEBPACK_IMPORTED_MODULE_1__.editProject)(projectId, e.target)\n      break\n  }\n})\n\n//# sourceURL=webpack://to-do-list/./src/scripts/forms.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeProject: () => (/* binding */ changeProject),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTodo: () => (/* binding */ createTodo),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   editProject: () => (/* binding */ editProject),\n/* harmony export */   editTodo: () => (/* binding */ editTodo),\n/* harmony export */   expandTodo: () => (/* binding */ expandTodo),\n/* harmony export */   openEditTodoForm: () => (/* binding */ openEditTodoForm)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/scripts/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/scripts/project.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ \"./src/scripts/forms.js\");\n/* harmony import */ var _expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expansion */ \"./src/scripts/expansion.js\");\n\n\n\n\n\n\nconst generalTodos = [\n  new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo('Groceries', 'Buy eggs', '12-5-23', 1, ''),\n  new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo('School', 'Pass classes', '12-25-23', 1, ''),\n  new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo('Feed yourself', 'cook', '12-15-23', 1, ''),\n  new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo('Sleep', '', '12-29-23', 1, ''),\n]\n\nconst worldDominationTodos = [\n  new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo('Take over the world', '', '12-8-23', 1, ''),\n  new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo('Make sure Diego sleeps well', '', '12-10-23', 1, ''),\n]\n\nconst projects = [\n  new _project__WEBPACK_IMPORTED_MODULE_2__.Project(\"Default\", 0),\n  new _project__WEBPACK_IMPORTED_MODULE_2__.Project(\"World Domination\", 1),\n]\n\nlet currentProjectId = 0\nlet nextProjectId = 2\n\nconst projectWrapper = document.querySelector('div#project-wrapper')\nconst todoWrapper = document.querySelector('div#todo-wrapper')\nconst createNewTodo = document.querySelector('button#new-todo')\nconst createNewProject = document.querySelector('button#new-project')\n\nfunction setup() {\n  for (const todo of generalTodos) {\n    projects[0].addTodo(todo)\n  }\n  for (const todo of worldDominationTodos) {\n    projects[1].addTodo(todo)\n  }\n  createNewTodo.addEventListener('click', () => {\n    const newId = projects[findIndex(projects, currentProjectId)].nextTodoId\n    ;(0,_forms__WEBPACK_IMPORTED_MODULE_3__.newTodoForm)(currentProjectId, newId)\n  })\n\n  createNewProject.addEventListener('click', () => {\n    ;(0,_forms__WEBPACK_IMPORTED_MODULE_3__.newProjectForm)(nextProjectId)\n  })\n\n  // generate sidebar\n  renderProjects()\n  renderTodos()\n}\n\nsetup()\n\nfunction renderProjects() {\n  projectWrapper.replaceChildren(...(0,_project__WEBPACK_IMPORTED_MODULE_2__.generateProjects)(projects))\n}\n\nfunction renderTodos() {\n  let selectedProject = projects[findIndex(projects, currentProjectId)]\n  todoWrapper.replaceChildren(...(0,_todo__WEBPACK_IMPORTED_MODULE_1__.generateTodos)(selectedProject.todos, selectedProject.id))\n}\n\n// iterates over arr until id is matched\n// assumes id exists\nfunction findIndex(arr, id) {\n  const intId = parseInt(id)\n  for (const index in arr) {\n    if (arr[index].id === intId) {\n      return index\n    }\n  }\n  return null\n}\n\nfunction findTodo(projectId, todoId) {\n  const targetProject = projects[findIndex(projects, projectId)]\n  return targetProject.todos[findIndex(targetProject.todos, todoId)]\n}\n\nfunction createTodo(form) {\n  const formData = new FormData(form)\n  const projectIndex = findIndex(projects, currentProjectId)\n  projects[projectIndex].addTodo((0,_todo__WEBPACK_IMPORTED_MODULE_1__.todoFromFormData)(formData))\n  renderTodos()\n}\n\nfunction createProject(form) {\n  const formData = new FormData(form)\n  projects.push((0,_project__WEBPACK_IMPORTED_MODULE_2__.projectFromForm)(nextProjectId, formData))\n  changeProject(nextProjectId)\n  nextProjectId++\n  renderProjects()\n}\n\nfunction changeProject(id) {\n  if (id !== null) {\n    currentProjectId = id\n    createNewTodo.disabled = false\n    renderTodos()\n  } else {\n    todoWrapper.replaceChildren((0,_todo__WEBPACK_IMPORTED_MODULE_1__.renderNoTodos)())\n    createNewTodo.disabled = true\n  }\n}\n\nfunction deleteProject(id) {\n  const index = findIndex(projects, id)\n  projects.splice(index, 1)\n  renderProjects()\n  // select the first project, if there is one\n  changeProject(projects[0] ? projects[0].id : null)\n}\n\nfunction editProject(projectId, form) {\n  const index = findIndex(projects, projectId)\n  const formData = new FormData(form)\n  ;(0,_project__WEBPACK_IMPORTED_MODULE_2__.editProjectFromFormData)(projects[index], formData)\n  renderProjects()\n}\n\n// calls the corresponding function after finding the particular todo\nfunction expandTodo(todoDiv) {\n  const projectId = todoDiv.dataset.projectId\n  const todoId = todoDiv.dataset.id\n  const targetTodo = findTodo(projectId, todoId)\n  todoDiv.append((0,_expansion__WEBPACK_IMPORTED_MODULE_4__.generateTodoExpansion)(targetTodo))\n}\n\nfunction deleteTodo(projectId, todoId) {\n  const targetProject = projects[findIndex(projects, projectId)]\n  const todoIndex = findIndex(targetProject.todos, todoId)\n  targetProject.todos.splice(todoIndex, 1)\n  renderTodos()\n}\n\nfunction openEditTodoForm(projectId, todoId) {\n  (0,_forms__WEBPACK_IMPORTED_MODULE_3__.editTodoForm)(projectId, findTodo(projectId, todoId))\n}\n\nfunction editTodo(form) {\n  const formData = new FormData(form)\n  const projectId = formData.get('project-id')\n  const todoId = formData.get('id')\n  const target = findTodo(projectId, todoId)\n  ;(0,_todo__WEBPACK_IMPORTED_MODULE_1__.editTodoFromFormData)(target, formData)\n  renderTodos()\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   editProjectFromFormData: () => (/* binding */ editProjectFromFormData),\n/* harmony export */   generateProjects: () => (/* binding */ generateProjects),\n/* harmony export */   projectFromForm: () => (/* binding */ projectFromForm)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/scripts/index.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/scripts/forms.js\");\n\n\n\nclass Project {\n  constructor(title, id) {\n    this.title = title.trim()\n    this.todos = []\n    this.id = parseInt(id)\n    this.nextTodoId = 0\n\n    // show modal for when this fails\n    if (this.title.length < 1) {\n      throw new Error('Name must not be empty')\n    }\n  }\n\n  addTodo(todo) {\n    todo.id = this.nextTodoId\n    this.todos.push(todo)\n    this.nextTodoId++\n  }\n\n  removeTodo(index) {\n    this.todos.splice(index, 1)\n  }\n\n  edit(title) {\n    this.title = title\n  }\n}\n\nfunction projectFromForm(id, formData) {\n  let project = new Project(\n    formData.get('title'),\n    id,\n  )\n  return project\n}\n\nfunction editProjectFromFormData(project, formData) {\n  project.edit(\n    formData.get('title')\n  )\n}\n\nfunction generateProjects(projects) {\n  let res = []\n  \n  for (const project of projects) {\n    let projectDiv = document.createElement('div')\n    let deleteButton = document.createElement('button')\n    let editButton = document.createElement('button')\n    let projectName = document.createElement('h3')\n    projectName.textContent = project.title\n    \n    editButton.textContent = 'E'\n    deleteButton.textContent = 'X'\n\n    projectDiv.classList.add('project')\n\n    projectName.addEventListener('click', () => {\n      ;(0,___WEBPACK_IMPORTED_MODULE_0__.changeProject)(project.id, \"change\")\n    })\n\n    editButton.addEventListener('click', () => {\n      ;(0,_forms__WEBPACK_IMPORTED_MODULE_1__.editProjectForm)(project)\n    })\n\n    deleteButton.addEventListener('click', () => {\n      ;(0,___WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project.id)\n    })\n\n    projectDiv.append(projectName, editButton, deleteButton)\n\n    res.push(projectDiv)\n  }\n\n  return res\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/project.js?");

/***/ }),

/***/ "./src/scripts/todo.js":
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   editTodoFromFormData: () => (/* binding */ editTodoFromFormData),\n/* harmony export */   expandedTodoProperties: () => (/* binding */ expandedTodoProperties),\n/* harmony export */   generateTodos: () => (/* binding */ generateTodos),\n/* harmony export */   renderNoTodos: () => (/* binding */ renderNoTodos),\n/* harmony export */   todoFromFormData: () => (/* binding */ todoFromFormData)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/scripts/index.js\");\n\n\nclass Todo {\n  constructor(title, description, dueDate, priority, notes, id, projectId) {\n    this.title = title.trim()\n    this.description = description.trim()\n    this.dueDate = dueDate\n    this.priority = parseInt(priority)\n    this.notes = notes.trim()\n    this.id = parseInt(id)\n    this.projectId = parseInt(projectId)\n  }\n\n  edit(title, description, dueDate, priority, notes) {\n    this.title = title\n    this.description = description.trim()\n    this.dueDate = dueDate\n    this.priority = parseInt(priority)\n    this.notes = notes.trim()\n  }\n\n  get title() {\n    return this._title\n  }\n\n  set title(value) {\n    const valueTrimmed = value.trim()\n    if (valueTrimmed.length < 1) {\n      // perhaps a modal for if this fails\n      throw new Error('Title must not be empty')\n    } else {\n      this._title = valueTrimmed\n    }\n  }\n}\n\nconst expandedTodoProperties = ['description', 'priority', 'notes']\n\nfunction todoFromFormData(formData) {\n  let todo = new Todo(\n    formData.get('title'),\n    formData.get('description'),\n    formData.get('due-date'),\n    formData.get('priority'),\n    formData.get('notes'),\n    formData.get('id'),\n    formData.get('project-id'),\n  )\n  return todo\n}\n\nfunction editTodoFromFormData(todo, formData) {\n  todo.edit(\n    formData.get('title'),\n    formData.get('description'),\n    formData.get('due-date'),\n    formData.get('priority'),\n    formData.get('notes'),\n  )\n}\n\nfunction generateTodos(todos, projectId) {\n  let res = []\n  if (todos.length == 0) {\n    res.push(renderNoTodos())\n  }\n\n  for (const todo of todos) {\n    let div = document.createElement('div')\n    let headerWrapper = document.createElement('div')\n    let headerTitle = document.createElement('h4')\n    headerWrapper.classList.add('todo-header')\n\n    div.classList.add('todo')\n    headerTitle.classList.add('title')\n    headerTitle.textContent = todo.title\n    div.dataset.projectId = projectId\n    div.dataset.id = todo.id\n    if (todo.dueDate) {\n      headerTitle.textContent += \" — \" + todo.dueDate\n    }\n\n    // expansion\n    headerTitle.addEventListener('click', (e) => {\n      if (e.target.dataset.expanded !== undefined) {\n        e.target.removeAttribute('data-expanded')\n        e.target.parentNode.parentNode.querySelector('div.todo-info').remove()\n      } else {\n        e.target.dataset.expanded = ''\n        ;(0,___WEBPACK_IMPORTED_MODULE_0__.expandTodo)(e.target.parentNode.parentNode)\n      }\n    })\n\n    // modify buttons\n    let editButton = generateModifyButton(projectId, todo.id, 'Edit')\n    let deleteButton = generateModifyButton(projectId, todo.id, 'Delete')\n    headerWrapper.append(headerTitle, editButton, deleteButton)\n    div.append(headerWrapper)\n    res.push(div)\n  }\n  return res\n}\n\nfunction renderNoTodos() {\n  let p = document.createElement('div')\n  p.classList.add('empty-todo')\n  p.textContent = 'Nothing to see here...'\n  return p\n}\n\nfunction generateModifyButton(projectId, todoId, action) {\n  const b = document.createElement('button')\n  b.dataset.action = action\n  b.textContent = action\n  b.addEventListener('click', (e) => {\n    switch(e.target.dataset.action) {\n      case 'Edit':\n        ;(0,___WEBPACK_IMPORTED_MODULE_0__.openEditTodoForm)(projectId, todoId)\n        break\n      case 'Delete':\n        ;(0,___WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(projectId, todoId)\n        break\n    }\n  })\n  return b\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;