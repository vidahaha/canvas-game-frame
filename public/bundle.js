/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vida = {
    setOption: function setOption() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            canvas: {
                width: 500,
                height: 500,
                background: '#666',
                opacity: 0.8
            },

            series: [{
                name: 'vida_1',
                type: 'circular',
                shape: [20],
                position: [100, 100],
                attr: {
                    backgroundColor: 'red'
                }
            }, {
                name: 'vida_2',
                type: 'square',
                shape: [20, 40],
                position: [50, 50],
                attr: {
                    backgroundColor: 'red'
                }
            }]
        };

        var canvas = this._initCanvas(option.canvas);
        var res = canvas.render(option.series);
        console.log(res);
    },
    _initCanvas: function _initCanvas(oCanvas) {
        var target = document.getElementById('canvas');
        var canvas = new _index2.default(oCanvas, target);
        return canvas;
    }
};

exports.default = window.vida = vida;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _render = __webpack_require__(2);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Init = function () {
	function Init(oCanvas, target) {
		_classCallCheck(this, Init);

		var canvas = document.createElement("canvas");
		canvas.width = oCanvas.width;
		canvas.height = oCanvas.height;
		canvas.style.backgroundColor = oCanvas.backgroundColor;
		target.appendChild(canvas);
		this.canvas = canvas;
	}

	_createClass(Init, [{
		key: "render",
		value: function render(oSeries) {
			var _this = this;

			var eleFromRender = [];
			oSeries.forEach(function (ele) {
				eleFromRender.push(new _render2.default(ele, _this.canvas));
			});
			return eleFromRender;
		}
	}]);

	return Init;
}();

exports.default = Init;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASIC_SHAPE_ATTRIBUTES = {
	width: 0,
	height: 0,
	border: 0,
	borderRadius: 0
};

var BASIC_COLOR_ATTRIBUTES = {
	color: '#000',
	backgroundColor: '#000',
	borderColor: '#000'
};

var Render = function () {
	function Render(ele, canvas) {
		_classCallCheck(this, Render);

		var ctx = canvas.getContext('2d');
		this.view = ele;
		if (ctx) {
			this._draw(ctx, ele);
		}
	}

	_createClass(Render, [{
		key: '_draw',
		value: function _draw(ctx, ele) {
			var type = ele.type,
			    shape = ele.shape,
			    position = ele.position,
			    attr = ele.attr;

			ctx.fillStyle = attr.backgroundColor || 'red';
			switch (type) {
				case 'square':
					{
						ctx.fillRect(position[0], position[1], shape[0], shape[1]);
						break;
					}
				case 'circular':
					{
						ctx.beginPath();
						ctx.arc(position[0], position[1], shape[0], 0, Math.PI * 2);
						ctx.fill();
					}
			}
		}
	}]);

	return Render;
}();

exports.default = Render;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map