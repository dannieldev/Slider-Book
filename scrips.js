(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _inView = _interopRequireDefault(require("in-view"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Anima = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Anima, _Component);
    
      var _super = _createSuper(Anima);
    
      function Anima(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Anima);
        _this = _super.call(this, "anima");
        site.components.mount((0, _assertThisInitialized2["default"])(_this));
        site.navigation.registerNavigationCallback(_this.enterPageWithDelay.bind((0, _assertThisInitialized2["default"])(_this), 100));
        _this.t = 100;
        _this.base = 100;
        _this.benter = _this.enter.bind((0, _assertThisInitialized2["default"])(_this));
        _this.bexit = _this.exit.bind((0, _assertThisInitialized2["default"])(_this));
        _this.bclear = _this.clear.bind((0, _assertThisInitialized2["default"])(_this));
    
        if (site.browser.state.isMobile) {
          _inView["default"].threshold(0);
    
          _inView["default"].offset(window.innerHeight * 0);
        } else {
          _inView["default"].threshold(0);
    
          _inView["default"].offset(window.innerHeight * 0.1);
        }
    
        if (site.edit) document.documentElement.classList.add("no-anima");
        return _this;
      }
    
      (0, _createClass2["default"])(Anima, [{
        key: "mount",
        value: function mount(site) {}
      }, {
        key: "enterPageWithDelay",
        value: function enterPageWithDelay(delay) {
          if (!delay || delay == 0) this.enterPage();else setTimeout(this.enterPage.bind(this), delay);
        }
      }, {
        key: "enterPage",
        value: function enterPage() {
          document.querySelectorAll(".entry").forEach(this.run.bind(this));
          (0, _inView["default"])('.scroll').on('enter', this.run.bind(this));
          (0, _inView["default"])('.scroll').check();
        }
      }, {
        key: "run",
        value: function run(el) {
          if (el.classList.contains("anima")) this.enter(el);
          el.querySelectorAll(".anima").forEach(this.benter);
          el.classList.remove("scroll");
        }
      }, {
        key: "enter",
        value: function enter(el) {
          el.classList.remove("out");
          var delay = Number(el.getAttribute("data-anima-delay")) || 0;
          setTimeout(function () {
            el.classList.add("in");
          }, delay * this.t + this.base);
        }
      }, {
        key: "exit",
        value: function exit(el) {
          el.classList.add("out");
        }
      }, {
        key: "clear",
        value: function clear(el) {
          el.classList.remove("out");
          el.classList.remove("in");
        }
      }, {
        key: "inChildren",
        value: function inChildren(el) {
          if (!el) return;
          var c = el.querySelectorAll(".anima");
          if (!c) return;
          c.forEach(this.benter);
        }
      }, {
        key: "outChildren",
        value: function outChildren(el) {
          if (!el) return;
          var c = el.querySelectorAll(".anima");
          if (!c) return;
          c.forEach(this.bexit);
        }
      }, {
        key: "clearChildren",
        value: function clearChildren(el) {
          if (!el) return;
          var c = el.querySelectorAll(".anima");
          if (!c) return;
          c.forEach(this.bclear);
        }
      }]);
      return Anima;
    }(_component["default"]);
    
    exports["default"] = Anima;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39,"in-view":52}],2:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _ajax = require("../utility/ajax");
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Bestiary = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Bestiary, _Component);
    
      var _super = _createSuper(Bestiary);
    
      function Bestiary(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Bestiary);
        _this = _super.call(this, "bestiary");
        _this.parser = new DOMParser();
        site.components.attachToPages(["bestiary"], (0, _assertThisInitialized2["default"])(_this));
        site.components.getComponent("poppers").addPopperCallback(_this.checkPopper.bind((0, _assertThisInitialized2["default"])(_this)));
        _this.userState = site.components.getComponent("userstate");
        return _this;
      }
    
      (0, _createClass2["default"])(Bestiary, [{
        key: "mount",
        value: function mount(site) {
          soundPlayer.playDefaultAmbientState();
          this.checkFound();
        }
      }, {
        key: "checkFound",
        value: function (_checkFound) {
          function checkFound() {
            return _checkFound.apply(this, arguments);
          }
    
          checkFound.toString = function () {
            return _checkFound.toString();
          };
    
          return checkFound;
        }(function () {
          var beasts = document.querySelectorAll("[data-beast]");
          beasts.forEach(function (beast, i) {
            var id = beast.getAttribute("data-beast");
    
            if (checkFound(id)) {
              beast.classList.add("found");
            }
          });
        })
      }, {
        key: "focusElement",
        value: function focusElement(href) {
          history.pushState({
            bestiary: true
          }, null, href);
        }
      }, {
        key: "checkPopper",
        value: function checkPopper(uid, el) {
          if (el) {
            var found = el.querySelector("[data-beast-found]");
    
            if (found) {
              var id = found.getAttribute("data-beast-found");
              var firstTime = !this.userState.checkFound(id);
              this.userState.setFound(id);
    
              if (firstTime) {
                el.classList.add("first-time");
                var anim = el.querySelector("lottie-player");
                setTimeout(function () {
                  // console.log("play first time");
                  if (anim) anim.play();
                }, 500);
              }
            }
          }
        } // handle popstate
    
      }]);
      return Bestiary;
    }(_component["default"]);
    
    exports["default"] = Bestiary;
    
    },{"../utility/ajax":30,"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],3:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Car = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Car, _Component);
    
      var _super = _createSuper(Car);
    
      function Car(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Car);
        _this = _super.call(this, "car");
        site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
        _this.cars = [];
        _this.anima = site.components.getComponent("anima"); // this.wistia = site.components.getComponent("wista-handler");
    
        site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
        return _this;
      }
    
      (0, _createClass2["default"])(Car, [{
        key: "mount",
        value: function mount(site) {
          this.initCars();
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.cars.forEach(function (car) {
            clearTimeout(car.intervalTimeout);
          });
          this.cars = [];
        }
      }, {
        key: "initCars",
        value: function initCars() {
          document.querySelectorAll("[data-car]").forEach(this.initOneCar.bind(this));
        }
      }, {
        key: "initOneCar",
        value: function initOneCar(el) {
          var _this2 = this;
    
          var car = {
            el: el,
            id: el.getAttribute("data-car"),
            index: Number(el.getAttribute("data-car-active")) || 0,
            count: Number(el.getAttribute("data-car-count")) || 1,
            wrap: !(el.getAttribute("data-car-wrap") == "false"),
            activeOffset: Number(el.getAttribute("data-car-active-offset")) || 0,
            slides: Array.from(el.querySelectorAll("[data-car-slide], [data-car-goto]")).map(function (el) {
              return {
                el: el,
                index: Number(el.getAttribute("data-car-slide")) || Number(el.getAttribute("data-car-goto")),
                active: false
              };
            }),
            bar: el.querySelector("[data-car-bar]"),
            barOffset: Number(el.getAttribute("data-car-active")) || 0,
            row: el.querySelector("[data-car-row]"),
            timeout: Number(el.getAttribute("data-car-timeout")) || 0,
            interval: Number(el.getAttribute("data-car-interval")) || 0,
            delay: Number(el.getAttribute("data-car-delay")) || 0,
            scrollTop: el.querySelector("[data-car-scrollTop]"),
            canMove: true,
            active: false,
            anima: el.getAttribute("data-car-anima") != undefined ? Number(el.getAttribute("data-car-anima")) : false,
            getHeights: []
          };
          car.goToPrev = this.goToPrev.bind(this, car);
          car.goToNext = this.goToNext.bind(this, car);
          el.querySelectorAll("[data-car-prev]").forEach(function (el) {
            return el.addEventListener("click", car.goToPrev);
          });
          el.querySelectorAll("[data-car-next]").forEach(function (el) {
            return el.addEventListener("click", car.goToNext);
          });
          el.querySelectorAll("[data-car-goto]").forEach(function (el) {
            return el.addEventListener("click", _this2.goToSlide.bind(_this2, car, Number(el.getAttribute("data-car-goto"))));
          });
          el.querySelectorAll("[data-car-hover]").forEach(function (el) {
            return el.addEventListener("mouseenter", function (e) {
              var index = Number(el.getAttribute("data-car-goto"));
    
              _this2.goToSlide(car, index);
    
              _this2.hoverIn(car, index);
            });
          });
          el.querySelectorAll("[data-car-hover]").forEach(function (el) {
            return el.addEventListener("mouseleave", function (e) {
              var index = Number(el.getAttribute("data-car-goto"));
    
              _this2.hoverOut(car, index);
            });
          });
          el.querySelectorAll("[data-car-get-height]").forEach(function (el) {
            _this2.getHeightFromChildren(el);
    
            setTimeout(function () {
              _this2.getHeightFromChildren(el);
            }, 1000);
            car.getHeights.push(el);
          });
          car.slides.forEach(function (slide) {
            slide.car = car;
            slide.video = slide.el.querySelector("video");
    
            if (slide.video) {
              slide.video.pause();
            } // slide.wistia = slide.el.getAttribute("data-car-wistia");
    
          });
          car.active = true;
          this.cars.push(car);
    
          var start = function start() {
            _this2.update(car);
    
            _this2.setProceedInterval(car);
          };
    
          if (car.delay == 0) start();else setTimeout(start.bind(this), car.delay);
        }
      }, {
        key: "goToSlide",
        value: function goToSlide(car, index) {
          if (!car.canMove) return;
          car.index = index;
          this.update(car);
        }
      }, {
        key: "goToNext",
        value: function goToNext(car) {
          if (!car.canMove) return;
    
          if (car.wrap) {
            car.index = this.wrap(car.index + 1, car.count);
          } else {
            car.index = Math.min(car.index + 1, car.count - 1);
          }
    
          this.update(car);
        }
      }, {
        key: "goToPrev",
        value: function goToPrev(car) {
          if (!car.canMove) return;
    
          if (car.wrap) {
            car.index = this.wrap(car.index - 1, car.count);
          } else {
            car.index = Math.max(car.index - 1, 0);
          }
    
          this.update(car);
        }
      }, {
        key: "wrap",
        value: function wrap(val, count) {
          return (val + count) % count;
        }
      }, {
        key: "setProceedInterval",
        value: function setProceedInterval(car) {
          if (car.interval > 0 && car.active) {
            clearTimeout(car.intervalTimeout);
            car.intervalTimeout = setTimeout(car.goToNext, car.interval);
          }
        }
      }, {
        key: "update",
        value: function update(car) {
          var _this3 = this;
    
          car.slides.forEach(function (slide) {
            var add = [];
            var remove = [];
    
            if (slide.active && slide.index != car.index) {
              add.push("was-active");
              if (car.anima != false) _this3.anima.outChildren(slide.el);
            } else {
              remove.push("was-active");
              if (car.anima != false) _this3.anima.clearChildren(slide.el);
            }
    
            slide.active = slide.index == car.index;
    
            if (slide.active) {
              add.push("active");
              if (car.anima != false) setTimeout(function () {
                _this3.anima.inChildren(slide.el);
              }, car.anima);
            } else {
              remove.push("active");
            }
    
            for (var i = 1; i <= car.activeOffset; i++) {
              (slide.index == wrap(car.index + i, car.count) ? add : remove).push("after-active-" + i);
              (slide.index == wrap(car.index - i, car.count) ? add : remove).push("before-active-" + i);
            }
    
            var draw = function draw() {
              var _slide$el$classList, _slide$el$classList2;
    
              (_slide$el$classList = slide.el.classList).remove.apply(_slide$el$classList, remove);
    
              (_slide$el$classList2 = slide.el.classList).add.apply(_slide$el$classList2, add);
    
              if (slide.video) {
                if (slide.active) slide.video.play();else slide.video.pause();
              } // if (slide.wistia){
              //   if (slide.active) this.wistia.playId(slide.wistia);
              //   else this.wistia.pauseId(slide.wistia);
              // }
    
            };
    
            if (car.delay == 0 || add.indexOf("active") == -1) draw();else setTimeout(draw, car.delay);
          });
    
          if (car.bar) {
            car.bar.style.transform = "scaleX(".concat(this.wrap(car.index - car.barOffset, car.count) / Math.max(1, car.count - 1), ")");
          }
    
          if (car.scrollTop) {
            car.scrollTop.scrollTo(0, 0);
          }
    
          if (car.row) {
            var amt = this.wrap(car.index - car.barOffset, car.count) / Math.max(1, car.count - 1);
            car.row.style.transform = "translateX(".concat(amt * -100, "%) translateX(").concat(amt * 90, "vw)");
          }
    
          if (car.timeout > 0) {
            car.canMove = false;
            setTimeout(function () {
              return car.canMove = true;
            }, car.timeout);
          }
    
          if (car.id == "abcar") {
            var images = document.getElementById("abcar-images");
    
            var _wrap = document.getElementById("abcar-wrap");
    
            var active = document.querySelector(".aboutCarousel__image.active");
    
            if (_wrap && active && images) {
              _wrap.classList.add("contract");
    
              var width = Number(active.getAttribute("data-image-width"));
              var height = Number(active.getAttribute("data-image-height"));
              var bounds = images.getBoundingClientRect();
              var w = width / 830 * bounds.width;
              var h = height / 700 * bounds.height;
              setTimeout(function () {
                if (_this3.w != w) {
                  _wrap.style.width = w + "px";
                  _this3.w = w;
                }
    
                if (_this3.h != h) {
                  _wrap.style.height = h + "px";
                  _this3.h = h;
                }
    
                _wrap.classList.remove("contract");
              }, 350);
            }
          }
    
          this.setProceedInterval(car);
        }
      }, {
        key: "hoverIn",
        value: function hoverIn(car, index) {
          car.slides.forEach(function (slide) {
            if (slide.index == index) slide.el.classList.add("hover");else slide.el.classList.remove("hover");
          });
        }
      }, {
        key: "hoverOut",
        value: function hoverOut(car, index) {
          car.slides.forEach(function (slide) {
            slide.el.classList.remove("hover");
          });
        }
      }, {
        key: "getHeightFromChildren",
        value: function getHeightFromChildren(el) {
          var max = 0;
          el.childNodes.forEach(function (item, i) {
            if (item instanceof Element) {
              max = Math.max(item.getBoundingClientRect().height, max);
            }
          });
          el.style.height = max + "px";
        }
      }, {
        key: "resize",
        value: function resize() {
          var _this4 = this;
    
          this.cars.forEach(function (car, i) {
            car.getHeights.forEach(function (item, i) {
              _this4.getHeightFromChildren(item);
            });
          });
        }
      }]);
      return Car;
    }(_component["default"]);
    
    exports["default"] = Car;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],4:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var VideoPlayer = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(VideoPlayer, _Component);
    
      var _super = _createSuper(VideoPlayer);
    
      function VideoPlayer(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, VideoPlayer);
        _this = _super.call(this, "chapterPlayer");
        _this.state = {
          player: null,
          isPlaying: false,
          requestedPlay: false,
          currentMedia: "",
          playerReady: false,
          mediaDuration: 60,
          els: {},
          segments: [] // totalTime: 0,
    
        };
        _this.youtube = site.components.getComponent("youtube");
        _this.settings = site.components.getComponent("settings");
        _this.settings.videoPlayer = (0, _assertThisInitialized2["default"])(_this);
        site.components.attachToPages(["chapters", "home"], (0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
    
      (0, _createClass2["default"])(VideoPlayer, [{
        key: "mount",
        value: function mount(site) {
          if (!this.youtube.APILoaded) {
            this.youtube.mountWhenLoaded = this;
            return;
          } // console.log("Chapter Player Mounted");
    
    
          this.initEls(); // this.getSegments();
    
          this.createPlayer();
          this.state.drawInterval = setInterval(this.draw.bind(this), 200);
        }
      }, {
        key: "unmount",
        value: function unmount(site) {
          this.state.mountWhenLoaded = false;
          this.state.segments = [];
          this.state.playerReady = false;
          clearInterval(this.state.drawInterval);
          document.documentElement.classList.remove("video-playing");
        }
      }, {
        key: "initEls",
        value: function initEls() {
          this.state.els.video = document.getElementById("video");
          this.state.els.playButton = document.getElementById("play-button");
          this.state.els.cover = document.getElementById("cover");
          this.state.els.timeline = document.getElementById("timeline");
          this.state.els.segmentWrap = document.getElementById("segments");
          this.state.els.progress = document.getElementById("timeline-progress");
          this.state.els.elapsed = document.getElementById("time-elapsed");
          this.state.els.remaining = document.getElementById("time-remaining");
          this.state.els.playButton.addEventListener("click", this.togglePlay.bind(this));
          this.state.els.cover.addEventListener("click", this.togglePlay.bind(this));
          this.state.els.timeline.addEventListener("click", this.seekTo.bind(this));
        }
      }, {
        key: "getSegments",
        value: function getSegments(videoEl) {
          var segEls = videoEl.querySelectorAll("[data-segment-time]");
          if (!this.state.els.segmentWrap) return;
          this.state.els.segmentWrap.innerHTML = "";
    
          for (var i = 0; i < segEls.length; i++) {
            var segment = {
              playTime: Number(segEls[i].getAttribute("data-segment-time")),
              title: segEls[i].getAttribute("data-segment-title")
            }; // create the segment el.
    
            var segmentEl = document.createElement("div");
            segmentEl.className = "videoPlayer__segment";
            segmentEl.style.flex = 1;
            var segmentStart = document.createElement("div");
            segmentStart.className = "videoPlayer__segmentStart";
            var segmentTitle = document.createElement("div");
            segmentTitle.className = "videoPlayer__segmentTooltip";
            segmentTitle.innerHTML = segment.title;
            segmentEl.appendChild(segmentStart);
            segmentEl.appendChild(segmentTitle);
            this.state.els.segmentWrap.appendChild(segmentEl);
            segment.el = segmentEl;
            segment.seconds = Math.floor(segment.playTime) * 60 + segment.playTime % 1 * 100;
            this.state.segments.push(segment);
          }
        }
      }, {
        key: "loadVideo",
        value: function loadVideo(videoEl) {
          if (videoEl == null) return;
          this.getSegments(videoEl);
          var mediaId = videoEl.getAttribute("data-video"); // console.log("cue video", mediaId);
    
          if (this.state.player) {
            this.state.player.cueVideoById(mediaId);
          }
    
          if (this.state.els.video) this.state.els.video.classList.remove("ended");
        }
      }, {
        key: "createPlayer",
        value: function createPlayer() {
          // this.state.currentMedia = mediaId;
          this.state.player = new YT.Player('player', {
            height: '390',
            width: '640',
            playerVars: {
              'playsinline': 1,
              'showinfo': 0,
              'controls': 0,
              'disablekb': 1,
              'enablejsapi': 1,
              'fs': 0,
              'modestbranding': 1,
              'rel': 0
            },
            events: {
              'onReady': this.onPlayerReady.bind(this),
              'onStateChange': this.onPlayerStateChange.bind(this)
            }
          });
        }
      }, {
        key: "onPlayerReady",
        value: function onPlayerReady() {
          // console.log("player ready");
          // this.initSegments();
          this.state.player.setVolume(this.settings.state.volume * 100);
          this.state.playerReady = true;
        }
      }, {
        key: "initSegments",
        value: function initSegments() {
          this.state.mediaDuration = this.state.player.getDuration();
          var end = this.state.mediaDuration; // console.log(end);
    
          for (var i = this.state.segments.length - 1; i >= 0; i--) {
            var segment = this.state.segments[i];
            var length = end - segment.seconds;
            segment.el.style.flex = length;
            end = segment.seconds;
          }
    
          var videoData = this.state.player.getVideoData();
          console.log(videoData);
        }
      }, {
        key: "onPlayerStateChange",
        value: function onPlayerStateChange(e) {
          // console.log("player state change", e.data);
          if (e.data == -1) {
            // unstarted
            this.state.isPlaying = false;
          } else if (e.data == 0) {
            // ended
            this.state.isPlaying = false;
            this.onEnd();
          } else if (e.data == 1) {
            // playing
            // if not ready then pause the video
            if (!this.state.requestedPlay) {
              this.state.player.pauseVideo();
              this.initSegments();
            } else this.state.isPlaying = true;
          } else if (e.data == 2) {
            // paused
            this.state.isPlaying = false;
          } else if (e.data == 3) {// buffering
          } else if (e.data == 5) {// video cued
          }
    
          this.showState.bind(this)();
        }
      }, {
        key: "showState",
        value: function showState() {
          this.state.els.video.classList[this.state.isPlaying ? "add" : "remove"]("playing");
          document.documentElement.classList[this.state.isPlaying ? "add" : "remove"]("video-playing");
        }
      }, {
        key: "togglePlay",
        value: function togglePlay() {
          // console.log("toggle", this);
          if (this.state.isPlaying) this.pause.bind(this)();else this.play.bind(this)();
        }
      }, {
        key: "seekTo",
        value: function seekTo(e) {
          // console.log("seek");
          var rect = this.state.els.timeline.getBoundingClientRect();
          var p = (e.clientX - rect.left) / rect.width;
          this.state.player.seekTo(this.state.mediaDuration * p);
        }
      }, {
        key: "play",
        value: function play() {
          // console.log("play");
          if (!this.state.player) return;
          this.state.requestedPlay = true;
          this.initSegments();
          this.state.player.playVideo();
          this.state.els.video.classList.remove("ended");
        }
      }, {
        key: "pause",
        value: function pause() {
          var _this2 = this;
    
          // console.log("pause");
          if (!this.state.player) return;
          this.state.els.video.classList.remove("playing");
          setTimeout(function () {
            _this2.state.player.pauseVideo();
          }, 200);
        }
      }, {
        key: "draw",
        value: function draw() {
          if (!this.state.playerReady) return;
          var playerTime = this.state.player.getCurrentTime();
          this.state.mediaDuration = this.state.player.getDuration();
          this.outputTime(this.state.els.elapsed, playerTime);
          this.outputTime(this.state.els.remaining, this.state.mediaDuration - playerTime);
          this.state.els.progress.style.width = playerTime / this.state.mediaDuration * 100 + "%";
        }
      }, {
        key: "outputTime",
        value: function outputTime(el, seconds) {
          var mins = Math.floor(seconds / 60);
          var seconds = Math.floor(seconds % 60);
          el.innerHTML = mins + ":" + (seconds < 10 ? "0" : "") + seconds;
        }
      }, {
        key: "onEnd",
        value: function onEnd() {
          if (this.state.els.video) this.state.els.video.classList.add("ended");
          document.documentElement.classList.remove("video-playing");
          this.chapters.finishChapter();
        }
      }]);
      return VideoPlayer;
    }(_component["default"]);
    
    exports["default"] = VideoPlayer;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],5:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Chapters = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Chapters, _Component);
    
      var _super = _createSuper(Chapters);
    
      function Chapters(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Chapters);
        _this = _super.call(this, "chapters");
        site.components.attachToPages(["chapters", "home"], (0, _assertThisInitialized2["default"])(_this));
        _this.chapterPlayer = site.components.getComponent("chapterPlayer");
        _this.chapterPlayer.chapters = (0, _assertThisInitialized2["default"])(_this);
        _this.userState = site.components.getComponent("userstate");
        _this.state = {
          focus: 1,
          debug: site.debug
        };
        site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
        return _this;
      }
    
      (0, _createClass2["default"])(Chapters, [{
        key: "mount",
        value: function mount(site) {
          this.initChapters();
          this.state.mounted = true;
        }
      }, {
        key: "unmount",
        value: function unmount() {
          document.documentElement.classList.remove("video-playing");
          this.state.mounted = false;
        }
      }, {
        key: "initChapters",
        value: function initChapters() {
          var spines = document.querySelector(".chapterSpines");
          this.initSpines(spines);
        }
      }, {
        key: "initSpines",
        value: function initSpines(el) {
          var _this2 = this;
    
          this.state.el = el;
          this.state.chapters = el.querySelectorAll(".chapterSpines__chapter");
          this.state.images = el.querySelectorAll(".chapterSpines__image");
          this.state.imgs = el.querySelectorAll(".chapterSpines__image img");
          this.state.chapters.forEach(function (chapter, i) {
            var focusLink = chapter.querySelector(".chapterSpines__focusLink");
    
            if (focusLink) {
              focusLink.addEventListener("click", function () {
                _this2.state.chapters.forEach(function (el, i) {
                  if (el.contains(focusLink)) {
                    el.classList.toggle("focus");
                    var spine = focusLink.closest(".chapterSpines");
                    spine.classList[el.classList.contains("focus") ? "add" : "remove"]("focussed"); // load video
    
                    var video = spine.querySelector(".chapterSpines__video");
    
                    if (video) {
                      _this2.chapterPlayer.loadVideo(video);
                    }
                  } else {
                    el.classList.remove("focus");
                  }
    
                  el.classList.remove("finished");
                });
    
                _this2.state.el.classList.remove("finished");
              });
            }
    
            var play = function play() {
              // play the video
              _this2.chapterPlayer.state.els.video.classList.add("started");
    
              setTimeout(function () {
                _this2.state.el.classList.add("playing");
              }, 100);
              setTimeout(function () {
                _this2.state.el.classList.remove("finished");
              }, 2000);
    
              var complete = function complete() {
                if (_this2.chapterPlayer.state.els.video) {
                  if (_this2.chapterPlayer.state.isPlaying) {
                    // console.log("complete");
                    setTimeout(function () {
                      _this2.chapterPlayer.state.els.video.classList.remove("started"); // need to make this happen only after the video is playing
    
                    }, 3000);
                  } else {
                    // console.log("wait");
                    setTimeout(complete, 100);
                  }
                }
              };
    
              setTimeout(complete, 100);
    
              _this2.chapterPlayer.play();
    
              soundPlayer.clearAmbientState(); // debug finishing the video
              // if(this.state.debug){
              //   setTimeout(() => {
              //     this.chapterPlayer.pause();
              //     this.chapterPlayer.onEnd();
              //     // this.finishChapter.bind(this);
              //   }, 5000);
              // }
            };
    
            var playButton = chapter.querySelector(".chapterCover__playButton");
            if (playButton) playButton.addEventListener("click", play);
            var replayButton = chapter.querySelector(".chapterSpines__replayButton");
            if (replayButton) replayButton.addEventListener("click", play);
          });
          var back = this.state.el.querySelector(".chapterSpines__back");
          back.addEventListener("click", function () {
            _this2.state.chapters.forEach(function (chapter, i) {
              chapter.classList.remove("focus");
            });
    
            _this2.state.el.classList.remove("focussed");
          });
        }
      }, {
        key: "finishChapter",
        value: function finishChapter() {
          var _this3 = this;
    
          this.state.chapters.forEach(function (chapter, i) {
            if (chapter.classList.contains("focus")) {
              chapter.classList.add("finished");
    
              _this3.userState.setChapter(i + 1);
    
              var anim = chapter.querySelector("lottie-player");
              setTimeout(function () {
                console.log("play chapter complete");
                if (anim) anim.play();
              }, 2000);
            }
    
            chapter.classList.remove("focus");
          });
          this.state.el.classList.remove("focussed");
          this.state.el.classList.add("finished");
          this.state.el.classList.remove("playing");
          document.documentElement.classList.remove("video-playing"); // play sound
    
          setTimeout(function () {
            // soundPlayer.playSfxByName("ph_celebration");
            soundPlayer.triggerEvent("finishChapter");
          }, 1200);
          soundPlayer.playDefaultAmbientState();
        }
      }, {
        key: "render",
        value: function render(deltaTime) {
          if (!this.state.mounted) return; // stick the images to their content
    
          var totalWidth = this.state.el.offsetWidth;
    
          for (var i = 0; i < this.state.chapters.length; i++) {
            var prop = this.state.chapters[i].offsetWidth / totalWidth;
            var left = this.state.chapters[i].offsetLeft;
            this.state.images[i].style.transform = "translateX(" + left + "px) scaleX(" + prop + ")";
            this.state.imgs[i].style.transform = "scaleX(" + 1 / prop + ")";
          }
        }
      }]);
      return Chapters;
    }(_component["default"]);
    
    exports["default"] = Chapters;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],6:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var Component = /*#__PURE__*/function () {
      function Component() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        (0, _classCallCheck2["default"])(this, Component);
        this.name = name;
      }
    
      (0, _createClass2["default"])(Component, [{
        key: "mount",
        value: function mount() {}
      }, {
        key: "unmount",
        value: function unmount() {}
      }]);
      return Component;
    }();
    
    exports["default"] = Component;
    
    },{"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/interopRequireDefault":38}],7:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _bezierEasing = _interopRequireDefault(require("bezier-easing"));
    
    var _impetus = _interopRequireDefault(require("impetus"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Explore = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Explore, _Component);
    
      var _super = _createSuper(Explore);
    
      function Explore(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Explore);
        _this = _super.call(this, "explore");
        _this.state = {
          active: false,
          location: "",
          mouse: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          },
          scroll: {
            x: 0,
            y: 0
          },
          // scrollTarget: {x: 0, y: 0},
          // scrollSpeed: {x: 0, y: 0},
          inTransition: false,
          transitionVector: {
            x: 0,
            y: 0,
            z: 0
          },
          transitionDuration: 1000,
          transitionTime: 0,
          transitionProgress: 0,
          els: {},
          easeIn: new _bezierEasing["default"](0.420, 0.000, 1.000, 1.000),
          easeOut: new _bezierEasing["default"](0.520, 0.080, 0.745, 0.475),
          xMax: 0,
          yMax: 0,
          defaultLocation: "area-1"
        };
        _this.browser = site.browser;
        _this.layeredImage = site.components.getComponent("layeredImages");
        _this.map = site.components.getComponent("map");
    
        _this.initExploreData();
    
        _this.preloadAmbientState();
    
        site.components.attachToPages(["explore", "home"], (0, _assertThisInitialized2["default"])(_this));
        site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
        site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
        site.navigation.registerNavigationCallback(_this.updateExploreLinks.bind((0, _assertThisInitialized2["default"])(_this)));
        _this.setFlag = site.setFlag;
        return _this;
      }
    
      (0, _createClass2["default"])(Explore, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          // console.log("explore");
          if (document.querySelector(".explore-base")) {
            // console.log("explore-base");
            var location = getFlag("location");
            if (!location || location == "") location = this.state.defaultLocation;
            site.navigation.navigateTo("/explore/" + location);
            return;
          }
    
          this.state.els.explore = document.getElementById("explore");
          this.state.els.bg = document.getElementById("explore-bg");
          this.state.els.nodes = document.getElementById("explore-nodes");
          this.state.els.gui = document.getElementById("explore-gui");
          this.state.els.bg.addEventListener("mousemove", function (e) {
            _this2.state.mouse.x = e.clientX;
            _this2.state.mouse.y = e.clientY;
          });
          this.state.els.bg.addEventListener('touchmove', function (e) {
            // recude the range a little on these?
            _this2.state.mouse.x = e.touches[0].screenX;
            _this2.state.mouse.y = e.touches[0].screenY;
          });
          this.state.active = true;
          this.state.location = this.state.els.bg.getAttribute("data-explore-location");
          var firstTime = !site.checkVisited(this.state.location);
          site.setFlag("location", this.state.location);
          site.setVisited(this.state.location);
    
          if (firstTime) {
            this.state.els.explore.classList.add("first-time");
            var anim = this.state.els.gui.querySelector("lottie-player");
            setTimeout(function () {
              // console.log("play first time");
              // soundPlayer.playSfxByName("ph_celebration");
              if (anim) anim.play();
            }, 1500);
          }
    
          this.updateExploreLinks();
          this.resize();
          this.initNodes();
          this.initMap();
          this.initAudio();
          site.loader.preloadAssets(document.getElementById("explore-preload"));
          this.preloadLinkAmbience();
          if (window.location.pathname != "/") this.showOnboard();
        }
      }, {
        key: "showOnboard",
        value: function showOnboard() {
          var _this3 = this;
    
          if (!this.browser.state.isMobile) return;
    
          if (!getFlag("explore-onboarded")) {
            setTimeout(function () {
              showPopper("explore-onboard");
    
              _this3.setFlag("explore-onboarded", true);
            }, 1);
          }
        }
      }, {
        key: "draw",
        value: function draw(x, y) {
          this.state.els.bg.style.transform = "translate3d(" + x + "px, " + y + "px, 0 )";
        }
      }, {
        key: "unmount",
        value: function unmount(site) {
          if (this.state.inTransition) {
            this.flipTransitionVector();
            this.state.inTransition = false;
            this.state.transitionTime = 0;
          } else {
            this.resetTransition(); // document.documentElement.classList.remove("explore-transition");
          } // if(this.state.playing.length > 0) this.stopAudio();
    
    
          this.state.active = false;
          window.finishFireflies();
        }
      }, {
        key: "initExploreData",
        value: function initExploreData() {
          var exploreData = document.getElementById("explore-data");
          this.exploreData = JSON.parse(exploreData.textContent); // console.log(this.exploreData);
        }
      }, {
        key: "initNodes",
        value: function initNodes() {
          var linkNodes = this.state.els.bg.querySelectorAll(".explore-link");
    
          for (var i = 0; i < linkNodes.length; i++) {
            linkNodes[i].addEventListener("click", this.onLinkClicked.bind(this, linkNodes[i]));
          }
        }
      }, {
        key: "initMap",
        value: function initMap() {
          //find the current node and activate it
          this.map.selectLocation(this.state.location);
          this.map.updateNodes();
        }
      }, {
        key: "onLinkClicked",
        value: function onLinkClicked(node) {
          var linkDir = node.getAttribute("data-link-direction"); // this.setTransitionVector(linkDir);
          // this.stopAudio();
    
          this.startTransition();
        }
      }, {
        key: "setTransitionVector",
        value: function setTransitionVector(direction) {
          this.state.transitionVector = this.getTransitionVector(direction);
        }
      }, {
        key: "getTransitionVector",
        value: function getTransitionVector(direction) {
          switch (direction) {
            case "up":
              return {
                x: 0,
                y: 1,
                z: 0
              };
              break;
    
            case "down":
              return {
                x: 0,
                y: -1,
                z: 0
              };
              break;
    
            case "left":
              return {
                x: 1,
                y: 0,
                z: 0
              };
              break;
    
            case "right":
              return {
                x: -1,
                y: 0,
                z: 0
              };
              break;
    
            case "in":
              return {
                x: 0,
                y: 0,
                z: 1
              };
              break;
    
            case "out":
              return {
                x: 0,
                y: 0,
                z: -1
              };
              break;
          }
    
          return {
            x: 0,
            y: 0,
            z: 0
          };
        }
      }, {
        key: "startTransition",
        value: function startTransition() {
          this.state.transitionProgress = 0;
          this.state.transitionTime = 0;
          this.state.inTransition = true; // document.documentElement.classList.add("explore-transition");
        }
      }, {
        key: "flipTransitionVector",
        value: function flipTransitionVector() {
          this.state.transitionVector.x *= -1;
          this.state.transitionVector.y *= -1;
          this.state.transitionVector.z *= -1;
        }
      }, {
        key: "resetTransition",
        value: function resetTransition() {
          this.state.transitionProgress = 0;
          this.state.transitionTime = 0;
        }
      }, {
        key: "render",
        value: function render() {
          if (!this.state.active) return;
          if (this.state.inTransition) this.progressTransition();else if (this.state.transitionProgress > 0) this.transitionOut();
          this.moveBG();
        }
      }, {
        key: "progressTransition",
        value: function progressTransition() {
          this.state.transitionTime += this.browser.state.delta;
          this.state.transitionProgress = this.state.easeIn(Math.min(this.state.transitionTime / this.state.transitionDuration, 1));
          this.applyTransition();
        }
      }, {
        key: "transitionOut",
        value: function transitionOut() {
          this.state.transitionTime += this.browser.state.delta;
          this.state.transitionProgress = this.state.easeOut(1 - Math.min(this.state.transitionTime / this.state.transitionDuration, 1));
          this.applyTransition();
          if (this.state.transitionProgress <= 0) document.documentElement.classList.remove("explore-transition");
        }
      }, {
        key: "applyTransition",
        value: function applyTransition() {
          var dist = -2;
          this.layeredImage.setTransitionVector({
            x: this.state.transitionVector.x * this.state.transitionProgress * dist,
            y: this.state.transitionVector.y * this.state.transitionProgress * dist,
            z: this.state.transitionVector.z * this.state.transitionProgress * dist
          });
        }
      }, {
        key: "resize",
        value: function resize() {
          if (!this.state.active) return;
          this.state.innerBounds = this.state.els.explore.getBoundingClientRect();
          this.state.moveBounds = this.state.els.bg.getBoundingClientRect();
          this.state.xMax = this.state.innerBounds.width - this.state.moveBounds.width;
          this.state.yMax = this.state.innerBounds.height - this.state.moveBounds.height;
        }
      }, {
        key: "moveBG",
        value: function moveBG() {
          if (this.state.xMax == 0 || this.state.yMax == 0) return; // how to handle moving by device
    
          var yMouse = this.state.mouse.y / window.innerHeight;
          var xMouse = (this.state.mouse.x - this.state.innerBounds.left) / this.state.innerBounds.width; // console.log(xMouse);
    
          var xTarget = xMouse * this.state.xMax;
          var yTarget = yMouse * this.state.yMax;
          this.state.scroll.x += (xTarget - this.state.scroll.x) * 0.1;
          this.state.scroll.y += (yTarget - this.state.scroll.y) * 0.1;
          var xPer = this.state.scroll.x / window.innerWidth;
          var yPer = this.state.scroll.y / window.innerHeight; // this.state.els.nodes.style.transform =  "translate3d("+xTarget+"px, "+yTarget+"px, 0)";
    
          this.state.els.nodes.style.transform = "translate3d(" + this.state.scroll.x / 10 + "px, " + this.state.scroll.y / 10 + "px, 2px)";
          this.state.els.bg.style.transform = "translate3d(" + this.state.scroll.x + "px, " + this.state.scroll.y + "px, 0)";
          this.layeredImage.setExternalOffset({
            x: xPer * -10,
            y: yPer * -6,
            z: 0
          });
        }
      }, {
        key: "preloadLinkAmbience",
        value: function preloadLinkAmbience() {
          var _this4 = this;
    
          var links = document.querySelectorAll("#explore-preload [data-explore-link]");
          links.forEach(function (link) {
            var slug = link.getAttribute("data-explore-link");
            if (slug) _this4.preloadAmbientState(slug);
          });
        }
      }, {
        key: "preloadAmbientState",
        value: function preloadAmbientState(location) {
          if (location == undefined || location == "") {
            location = getFlag("location");
            if (!location) location = this.state.defaultLocation;
          }
    
          var data = this.exploreData[location];
          if (!data) return;
          var ambientState = [];
          data.forEach(function (trackName, i) {
            ambientState.push({
              name: trackName
            });
          });
          soundPlayer.preloadAmbientState(ambientState);
        }
      }, {
        key: "initAudio",
        value: function initAudio() {
          var _this5 = this;
    
          this.ambientState = [];
          var tracks = this.state.els.explore.querySelectorAll(".explore__ambientTrack");
          tracks.forEach(function (track, i) {
            var name = track.getAttribute("data-track");
            var volume = Number(track.getAttribute("data-volume")) * 0.1;
    
            _this5.ambientState.push({
              name: name,
              volume: volume
            });
          });
          soundPlayer.playAmbientState(this.ambientState);
        }
      }, {
        key: "stopAudio",
        value: function stopAudio() {// console.log("stop");
          // this.state.playing.forEach((item, i) => {
          //   // soundPlayer.fadeOutByName(item.name, item.id);
          // });
          // this.state.playing = [];
        }
      }, {
        key: "updateExploreLinks",
        value: function updateExploreLinks() {
          var location = getFlag("location");
          if (!location || location == "") return; // console.log("update");
    
          var exploreLinks = document.querySelectorAll(".dynamic-explore-link, .nav__primaryLink[href^='/explore']");
          exploreLinks.forEach(function (item, i) {
            // console.log(item);
            item.href = "/explore/" + location;
          });
        }
      }]);
      return Explore;
    }(_component["default"]);
    
    exports["default"] = Explore;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39,"bezier-easing":47,"impetus":51}],8:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var HTMLClass = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(HTMLClass, _Component);
    
      var _super = _createSuper(HTMLClass);
    
      function HTMLClass(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, HTMLClass);
        _this = _super.call(this, "htmlclass");
        site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
        _this.remove = ["no-settings"];
        return _this;
      }
    
      (0, _createClass2["default"])(HTMLClass, [{
        key: "unmount",
        value: function unmount() {// document.documentElement.classList.remove(...this.remove);
        }
      }, {
        key: "mount",
        value: function mount(site) {
          var classEl = document.getElementById("htmlclass");
    
          if (classEl) {
            var classes = classEl.getAttribute("data-class");
    
            if (classes != null) {
              this.remove.forEach(function (c) {
                if (classes.indexOf(c) < 0 && c != "") document.documentElement.classList.remove(c);
              });
              var split = classes.split(" ");
              split.forEach(function (c) {
                if (c != "") document.documentElement.classList.add(c);
              }); // document.documentElement.className += " " + classes;
            }
          }
        }
      }]);
      return HTMLClass;
    }(_component["default"]);
    
    exports["default"] = HTMLClass;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],9:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Intro = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Intro, _Component);
    
      var _super = _createSuper(Intro);
    
      function Intro(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Intro);
        _this = _super.call(this, "intro");
        _this.state = {};
        _this.browser = site.browser;
        _this.explore = site.components.getComponent("explore");
        _this.chapterPlayer = site.components.getComponent("chapterPlayer");
        site.components.attachToPages(["home"], (0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
    
      (0, _createClass2["default"])(Intro, [{
        key: "unmount",
        value: function unmount() {
          document.documentElement.classList.remove("intro-enter");
          document.documentElement.classList.remove("intro-explore");
        }
      }, {
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          this.state.entered = false;
          document.documentElement.classList.add("intro-window");
          var chapterButton = document.getElementById("chapter-button");
          var exploreButton = document.getElementById("explore-button");
          chapterButton.addEventListener("mouseenter", function () {
            if (!_this2.state.entered) document.documentElement.classList.remove("intro-explore");
          });
          exploreButton.addEventListener("mouseenter", function () {
            if (!_this2.state.entered) document.documentElement.classList.add("intro-explore");
          });
          chapterButton.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
    
            _this2.enterPage(); // load the video here.
    
    
            var spine = document.querySelector(".chapterSpines__chapter.focus");
    
            if (spine) {
              var video = spine.querySelector(".chapterSpines__video");
    
              if (video) {
                _this2.chapterPlayer.loadVideo(video);
              }
            }
          });
          exploreButton.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
    
            _this2.enterPage();
          });
          this.state.behind = document.getElementById("intro-behind");
    
          if (!site.browser.state.isMobile) {
            site.browser.addToRenderLoop(this.render.bind(this));
          }
        }
      }, {
        key: "enterPage",
        value: function enterPage() {
          var _this3 = this;
    
          this.state.entered = true;
          var isExplore = document.documentElement.classList.contains("intro-explore");
    
          if (isExplore) {
            this.explore.resize();
          }
    
          document.documentElement.classList.add("intro-enter");
          setTimeout(function () {
            document.documentElement.classList.remove("intro-window");
    
            if (isExplore) {
              _this3.explore.resize();
            }
          }, 600);
          setTimeout(function () {
            document.getElementById("intro-screen").remove();
    
            if (isExplore) {
              _this3.explore.resize();
    
              _this3.explore.showOnboard();
            }
          }, 2000); // if needed for performance the other component can be unmounted
          // the url could be updated here also.
        }
      }, {
        key: "render",
        value: function render() {
          if (this.state.entered) return;
          var x = (this.browser.state.mouse.xSlowLag / window.innerWidth - 0.5) * 2 * 11;
          var y = (this.browser.state.mouse.ySlowLag / window.innerHeight - 0.5) * 2 * 11; // x = Math.pow(Math.abs(x), 0.25) * x/Math.abs(x) * 11;
          // y = Math.pow(Math.abs(y), 0.25) * y/Math.abs(y) * 11;
    
          this.state.behind.style.transform = "translate3d(" + x + "vh, " + y + "vh, 0)";
        }
      }]);
      return Intro;
    }(_component["default"]);
    
    exports["default"] = Intro;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],10:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _simplexNoise = require("simplex-noise");
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var LayeredImages = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(LayeredImages, _Component);
    
      var _super = _createSuper(LayeredImages);
    
      function LayeredImages(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, LayeredImages);
        _this = _super.call(this, "layeredImages");
        site.components.mount((0, _assertThisInitialized2["default"])(_this));
        site.navigation.registerNavigationCallback(_this.initLayeredImages.bind((0, _assertThisInitialized2["default"])(_this)));
        site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
        _this.browser = site.browser;
        _this.state = {
          lis: [],
          offset: {
            x: 0,
            y: 0,
            z: 0
          },
          transitionVector: {
            x: 0,
            y: 0,
            z: 0
          },
          externalOffset: {
            x: 0,
            y: 0,
            z: 0
          },
          transitionProgress: 0,
          noise: (0, _simplexNoise.createNoise2D)()
        };
        return _this;
      }
    
      (0, _createClass2["default"])(LayeredImages, [{
        key: "mount",
        value: function mount(site) {}
      }, {
        key: "initLayeredImages",
        value: function initLayeredImages() {
          this.state.lis = [];
          var lis = document.querySelectorAll(".layeredImage");
    
          for (var i = 0; i < lis.length; i++) {
            this.initLayeredImage(lis[i]);
          }
        }
      }, {
        key: "initLayeredImage",
        value: function initLayeredImage(el) {
          var li = {
            el: el,
            layers: []
          };
          var layers = el.querySelectorAll(".layeredImage__layer");
    
          for (var i = 0; i < layers.length; i++) {
            var layer = {
              el: layers[i],
              depth: Number(layers[i].getAttribute("data-layer-depth"))
            };
            layer.el.style.zIndex = Number(layers[i].getAttribute("data-layer-override")) * -10 || layer.depth * -10;
            li.layers.push(layer);
    
            if (layer.el.classList.contains("layeredImage__special")) {
              var specialType = layer.el.getAttribute("data-layer-special");
    
              switch (specialType) {
                case "fireflies":
                  window.generateFireflies(100);
                  break;
              }
            }
          }
    
          this.state.lis.push(li);
        }
      }, {
        key: "setTransitionVector",
        value: function setTransitionVector(vec) {
          this.state.transitionVector = vec;
        }
      }, {
        key: "setExternalOffset",
        value: function setExternalOffset(vec) {
          this.state.externalOffset = vec;
        }
      }, {
        key: "render",
        value: function render() {
          this.calculateOffset();
          this.state.lis.forEach(this.renderLayeredImage.bind(this));
        }
      }, {
        key: "calculateOffset",
        value: function calculateOffset() {
          // // Noise
          // var rate = 0.0001;
          // var dist = 0.2;
          // var nx = this.state.noise(0, this.browser.state.t * rate) * dist;
          // var ny = this.state.noise(100, this.browser.state.t * rate) * dist * 0.5;
          // var nz = this.state.noise(200, this.browser.state.t * rate) * dist * 0.5;
          // nx = 0;
          // ny = 0;
          // nz = 0;
          // console.log("nx", nx);
          // // Mouse
          // dist = 1;
          // var mouse = this.browser.state.mouse;
          // var mx = (mouse.xSlowLag / window.innerWidth - 0.5) * dist * -1;
          // var my = (mouse.ySlowLag / window.innerHeight - 0.5) * dist * 0.5;
          // var mz = (mouse.ySlowLag / window.innerHeight - 0.5) * dist * -0.25;
          // mx = 0;
          // my = 0;
          // mz = 0;
          // // External
          // console.log("mx", mx);
          // // Transition
          // // dist = 3;
          // // var progress = this.state.inTransition ? this.state.transitionProgress : (1-this.state.transitionProgress);
          // // var p = this.state.inTransition ? this.state.easeIn(progress) : this.state.easeOut(progress);
          // // var p = this.state.transitionProgress;
          // var tx = this.state.transitionVector.x;
          // var ty = this.state.transitionVector.y;
          // var tz = this.state.transitionVector.z;
          // console.log("tx", tx);
          // this.state.offset.x = nx + mx + tx + this.state.externalOffset.x;
          // this.state.offset.y = ny + my + ty + this.state.externalOffset.y;
          // this.state.offset.z = nz + mz + tz + this.state.externalOffset.z;
          this.state.offset.x = this.state.externalOffset.x;
          this.state.offset.y = this.state.externalOffset.y;
          this.state.offset.z = this.state.externalOffset.z;
        }
      }, {
        key: "renderLayeredImage",
        value: function renderLayeredImage(li) {
          for (var i = 0; i < li.layers.length; i++) {
            this.renderLayer(li.layers[i]);
          }
        }
      }, {
        key: "renderLayer",
        value: function renderLayer(layer) {
          var x = this.state.offset.x * layer.depth;
          var y = this.state.offset.y * layer.depth;
          var z = this.state.offset.z * layer.depth; // layer.el.style.transform = "translate3d("+x+"rem, "+y+"rem, "+z+"rem)";
    
          layer.el.style.transform = "translateX(" + x + "rem) translateY(" + y + "rem)";
        }
      }]);
      return LayeredImages;
    }(_component["default"]);
    
    exports["default"] = LayeredImages;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39,"simplex-noise":54}],11:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _impetus = _interopRequireDefault(require("impetus"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Map = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Map, _Component);
    
      var _super = _createSuper(Map);
    
      function Map(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Map);
        _this = _super.call(this, "map");
        _this.state = {
          els: {},
          nodes: [],
          selectedNode: null,
          currentLocation: null,
          zoom: 4,
          position: {
            x: 68,
            y: 84
          },
          minZoom: 0,
          maxZoom: 5,
          positionOffset: {
            x: 0,
            y: 0
          }
        };
        _this.checkVisited = site.checkVisited;
        site.components.mount((0, _assertThisInitialized2["default"])(_this));
        site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
        site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
        document.addEventListener('swup:animationOutDone', function () {
          hidePopper("explore-map", true);
        });
        return _this;
      }
    
      (0, _createClass2["default"])(Map, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          this.state.els.inner = document.getElementById("map-inner");
          this.state.els.move = document.getElementById("map-move");
          this.state.els.info = document.getElementById("map-info");
          this.state.els.infoImage = document.getElementById("map-info-image");
          this.state.els.infoIconLabel = document.getElementById("map-info-icon-label");
          this.state.els.infoTitle = document.getElementById("map-info-title");
          this.state.els.infoBlurb = document.getElementById("map-info-blurb");
          this.state.els.infoButton = document.getElementById("map-info-button");
          document.getElementById("map-zoom-out").addEventListener("click", this.zoomOut.bind(this));
          document.getElementById("map-zoom-in").addEventListener("click", this.zoomIn.bind(this));
          this.state.els.zoomIndi = document.getElementById("map-zoom-indi");
          var gotos = document.querySelectorAll("[data-map-goto]");
          gotos.forEach(function (el) {
            el.addEventListener("click", _this2.goTo.bind(_this2, el));
          });
          var innerBounds = this.state.els.inner.getBoundingClientRect();
          var moveBounds = this.state.els.move.getBoundingClientRect(); // var xMax = innerBounds.width - moveBounds.width;
          // var yMax = innerBounds.height - moveBounds.height
    
          this.state.xMax = -window.innerWidth;
          this.state.yMax = -window.innerWidth * 0.66; // TODO: only run this while the map is open
    
          this.state.imp = new _impetus["default"]({
            source: this.state.els.inner,
            multiplier: 0.5,
            friction: 0.92,
            initialValues: [this.state.xMax * this.state.position.x / 100, this.state.yMax * this.state.position.y / 100],
            boundX: [this.state.xMax, 0],
            boundY: [this.state.yMax, 0],
            bounce: false,
            update: function update(x, y) {
              // console.log("update", x, y);
              _this2.state.position.x = x / _this2.state.xMax * 100;
              _this2.state.position.y = y / _this2.state.yMax * 100;
    
              _this2.draw(_this2.state.position.x, _this2.state.position.y);
            }
          });
          this.setZoom();
          this.initNodes();
          this.updateNodes();
        }
      }, {
        key: "initNodes",
        value: function initNodes() {
          var nodes = this.state.els.inner.querySelectorAll(".map__node");
    
          for (var i = 0; i < nodes.length; i++) {
            var el = nodes[i];
            var node = {
              el: el,
              type: el.getAttribute("data-node-type"),
              title: el.getAttribute("data-node-title"),
              image: el.getAttribute("data-node-image"),
              blurb: el.getAttribute("data-node-blurb"),
              pos: el.getAttribute("data-node-pos").split(":")
            };
            node.pos[2] = Math.max(node.pos[2], 4);
    
            switch (node.type) {
              case "location":
                node.url = el.getAttribute("data-node-url");
                node.slug = el.getAttribute("data-node-slug");
                break;
            }
    
            el.addEventListener("click", this.selectNode.bind(this, node));
            this.state.nodes.push(node);
          } // console.log(this.state.nodes);
    
        }
      }, {
        key: "updateNodes",
        value: function updateNodes() {
          var _this3 = this;
    
          this.state.nodes.forEach(function (node) {
            // console.log(node);
            if (node.slug) {
              if (_this3.checkVisited(node.slug)) {
                node.el.classList.add("visited");
              } else {
                node.el.classList.remove("visited");
              }
            }
          });
        } // add in a resize function
    
      }, {
        key: "resize",
        value: function resize() {
          if (this.state.imp == null) return;
          this.state.Max = -window.innerWidth;
          this.state.yMax = -window.innerWidth * 0.66;
          this.state.imp.setBoundX([this.state.xMax, 0]);
          this.state.imp.setBoundY([this.state.yMax, 0]);
        }
      }, {
        key: "render",
        value: function render(rate) {
          if (this.state.positionOffset.x != 0 || this.state.positionOffset.y != 0) {
            var xMove = this.state.positionOffset.x * 0.07 * rate;
            this.state.position.x += xMove;
            this.state.positionOffset.x -= xMove;
            var yMove = this.state.positionOffset.y * 0.07 * rate;
            this.state.position.y += yMove;
            this.state.positionOffset.y -= yMove;
    
            if (this.state.imp != null) {
              this.state.imp.setValues(this.state.position.x / 100 * this.state.xMax, this.state.position.y / 100 * this.state.yMax);
              this.draw(this.state.position.x, this.state.position.y);
            }
    
            if (Math.abs(this.state.positionOffset.x) < 0.1) this.state.positionOffset.x = 0;
            if (Math.abs(this.state.positionOffset.y) < 0.1) this.state.positionOffset.y = 0;
          }
        }
      }, {
        key: "draw",
        value: function draw(x, y) {
          // this.state.els.move.style.transform = "translate3d("+ x +"px, "+ y +"px, 0 )";
          this.state.els.move.style.transformOrigin = x + "% " + y + "%";
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          this.state.zoom = Math.max(this.state.zoom - 1, 0);
          this.setZoom();
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          this.state.zoom = Math.min(this.state.zoom + 1, this.state.maxZoom);
          this.setZoom();
        }
      }, {
        key: "setZoom",
        value: function setZoom() {
          if (this.state.imp != null) {
            var multi = Math.pow((this.state.maxZoom - this.state.zoom + 1) / (this.state.maxZoom + 1), 1.5) * 1;
            this.state.imp.setMultiplier(multi);
          }
    
          this.state.els.move.setAttribute("data-zoom", this.state.zoom);
          var indi = this.state.zoom / this.state.maxZoom * 100 + "%";
          this.state.els.zoomIndi.innerHTML = indi; // if(this.state.zoom == 0) // center map.
        }
      }, {
        key: "goTo",
        value: function goTo(el) {
          // console.log(el);
          var _goto = el.getAttribute("data-map-goto");
    
          var parts = _goto.split(":");
    
          if (parts.length != 3) return;
          var x = Number(parts[0]);
          var y = Number(parts[1]);
          var zoom = Number(parts[2]);
          this.setLocation(x, y, zoom);
        }
      }, {
        key: "setLocation",
        value: function setLocation(x, y, zoom) {
          this.state.positionOffset.x = x - this.state.position.x;
          this.state.positionOffset.y = y - this.state.position.y;
          this.state.zoom = Math.max(0, Math.min(this.state.maxZoom, zoom));
          this.setZoom();
        }
      }, {
        key: "selectLocation",
        value: function selectLocation(slug) {
          var _this4 = this;
    
          var currentLocation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          this.state.nodes.forEach(function (node, i) {
            if (node.type == "location" && node.slug == slug) {
              if (currentLocation) {
                if (_this4.state.currentLocation != null) _this4.state.currentLocation.el.classList.remove("current");
                node.el.classList.add("current");
                _this4.state.currentLocation = node;
              }
    
              _this4.selectNode(node);
    
              _this4.setLocation(node.pos[0], node.pos[1], node.pos[2]);
            }
          });
        }
      }, {
        key: "selectNode",
        value: function selectNode(node) {
          // console.log(node);
          if (this.state.selectedNode != null) this.state.selectedNode.el.classList.remove("active");
          node.el.classList.add("active");
          this.state.selectedNode = node; // this.state.els.info.classList.remove("map__info--current")
          // this.state.els.info.classList.remove("map__info--location")
          // this.state.els.info.classList.remove("map__info--locked")
    
          var cls = node.type;
          ;
          if (node == this.state.currentLocation) cls = "current"; // this.state.els.info.classList.add("map__info--" + cls);
          // switch (cls) {
          //   case "current":
          //       this.state.els.infoIconLabel.innerHTML = "Current Location";
          //     break;
          //   case "location":
          //       this.state.els.infoIconLabel.innerHTML = "Location";
          //     break;
          //   case "locked":
          //       this.state.els.infoIconLabel.innerHTML = "Coming Soon";
          //     break;
          // }
          // this.state.els.infoImage.src = node.image;
          // this.state.els.infoTitle.innerHTML = node.title;
          // this.state.els.infoBlurb.innerHTML = node.blurb;
          // if(node.type == "location"){
          //   this.state.els.infoButton.href = node.url;
          // }
        }
      }]);
      return Map;
    }(_component["default"]);
    
    exports["default"] = Map;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39,"impetus":51}],12:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _access = require("../utility/access");
    
    var _soundPlayer = _interopRequireDefault(require("./soundPlayer"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Menu = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Menu, _Component);
    
      var _super = _createSuper(Menu);
    
      function Menu(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Menu);
        _this = _super.call(this, "menu");
        site.navigation.swup.on('clickLink', function (event) {
          var target = event.target.closest("a");
          if (!target) return;
          var url = target.pathname;
          if (url) _this.highlightActivePage(url);
        });
        document.addEventListener('swup:animationOutDone', _this.closeMenu.bind((0, _assertThisInitialized2["default"])(_this)));
        document.addEventListener('swup:samePage', _this.closeMenu.bind((0, _assertThisInitialized2["default"])(_this)));
        site.navigation.registerNavigationCallback(_this.highlightActivePage.bind((0, _assertThisInitialized2["default"])(_this)));
        site.navigation.registerNavigationCallback(_this.calcProgress.bind((0, _assertThisInitialized2["default"])(_this)));
        site.navigation.registerNavigationCallback(_this.updateShareLinks.bind((0, _assertThisInitialized2["default"])(_this))); //site.navigation.registerNavigationCallback(this.checkBgColor.bind(this));
    
        _this.browser = site.browser;
        _this.nav = document.getElementById("nav");
        _this.navLinks = document.querySelectorAll(".navlink");
        _this.scrolled = false;
        _this.scrollCache = site.browser.state.scrollTop;
        _this.navHeight = 0;
        _this.nav = document.getElementById("nav");
        _this.menu = document.getElementById("menu");
        _this.inner = document.getElementById("menu-inner");
        _this.offset = 0;
        _this.userState = site.components.getComponent("userstate");
        _this.userState.menu = (0, _assertThisInitialized2["default"])(_this);
        site.components.mount((0, _assertThisInitialized2["default"])(_this));
        _this.appHeight = window.innerHeight;
        document.documentElement.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
        setInterval(function () {
          if (_this.appHeight != window.innerHeight) {
            _this.appHeight = window.innerHeight;
            document.documentElement.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
          }
        }, 500);
        window.addEventListener('resize', function () {
          // for testing (landscape only)
          // console.log(window.innerHeight, window.screen.width);
          if (window.innerHeight == window.screen.width) {
            document.documentElement.classList.add("mobfull");
          } else {
            document.documentElement.classList.remove("mobfull");
          }
    
          _this.appHeight = window.innerHeight;
          document.documentElement.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
          window.scrollTo(0, 1);
        });
        return _this;
      }
    
      (0, _createClass2["default"])(Menu, [{
        key: "mount",
        value: function mount(site) {
          this.initMenuToggle();
          site.browser.addToResizeLoop(this.resize.bind(this));
          site.browser.addToRenderLoop(this.render.bind(this));
          this.initMenuLinks();
          this.initSidebar(); // this.openMenu();
        }
      }, {
        key: "render",
        value: function render() {
          this.handleScroll();
        }
      }, {
        key: "resize",
        value: function resize() {
          this.navHeight = nav.getBoundingClientRect().height;
        }
      }, {
        key: "handleScroll",
        value: function handleScroll() {
          if (this.navHeight == 0) return;
          var diff = this.browser.state.scrollTop - this.scrollCache;
          var speed = diff > 0 ? 0.3 : 0.5;
          var min = Math.min(this.browser.state.scrollTop, this.browser.state.rem * 2);
          if (this.browser.state.isTablet) min = 0;
          this.offset = Math.min(this.navHeight, Math.max(min, this.offset + diff * speed)); //nav.style.transform = "translateY("+(this.offset * -1)+"px)";
          // if (!this.scrolled && this.browser.state.scrollTop > 10 && (this.offset == this.navHeight * -1 || diff < 0)){
          //   document.documentElement.classList.add("scrolled");
          //   this.scrolled = true;
          // }
          // if(this.scrolled && this.browser.state.scrollTop < 10) {
          //   document.documentElement.classList.remove("scrolled");
          //   this.scrolled = false;
          // }
    
          this.scrollCache = this.browser.state.scrollTop;
        }
      }, {
        key: "initMenuToggle",
        value: function initMenuToggle() {
          var toggle = document.getElementById("menu-toggle");
          if (toggle) (0, _access.addConfirmListeners)(toggle, this.toggleMenu.bind(this));
          var overlay = document.getElementById("menu-overlay");
          if (overlay) overlay.addEventListener("click", this.closeMenu.bind(this));
          var showSub = document.getElementById("show-submenu");
          if (showSub) (0, _access.addConfirmListeners)(showSub, this.showSubMenu.bind(this));
          var hideSub = document.getElementById("hide-submenu");
          if (hideSub) (0, _access.addConfirmListeners)(hideSub, this.hideSubMenu.bind(this));
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          if (!document.documentElement.classList.contains("menu-open")) {
            this.openMenu();
          } else {
            this.closeMenu();
          }
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          // this.inner.scrollTop = -10000;
          document.documentElement.classList.add("menu-open"); // soundPlayer.playByName("field1");
          // update explore link
    
          soundPlayer.triggerEvent("openMenu");
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          document.documentElement.classList.remove("menu-open");
          this.hideSubMenu();
          soundPlayer.triggerEvent("closeMenu");
        }
      }, {
        key: "showSubMenu",
        value: function showSubMenu() {
          document.documentElement.classList.add("submenu-open");
        }
      }, {
        key: "hideSubMenu",
        value: function hideSubMenu() {
          document.documentElement.classList.remove("submenu-open");
        }
      }, {
        key: "initMenuLinks",
        value: function initMenuLinks() {
          var _this2 = this;
    
          document.addEventListener("click", function (e) {
            var menuLink = e.target.closest("#nav a:not(.ignore-nav-close)");
    
            if (menuLink) {
              _this2.closeMenu();
            }
          });
        }
      }, {
        key: "initSidebar",
        value: function initSidebar() {
          this.sidebarTitle = document.getElementById("sidebar-title");
          this.sidebarBottom = document.getElementById("sidebar-bottom");
          document.addEventListener('swup:contentReplaced', this.updateSidebar.bind(this));
          this.updateSidebar();
        }
      }, {
        key: "updateSidebar",
        value: function updateSidebar() {
          this.sidebarTitle.innerHTML = document.title.split(" - ")[0];
        }
      }, {
        key: "highlightActivePage",
        value: function highlightActivePage() {
          var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var active = this.findActivePage(url);
          this.navLinks.forEach(function (item, i) {
            item.classList.remove("wasActive");
    
            if (active && item.href == active.href) {
              item.classList.add("active");
            } else {
              if (item.classList.contains("active")) {
                item.classList.add("wasActive");
              }
    
              item.classList.remove("active");
            }
          });
        }
      }, {
        key: "findActivePage",
        value: function findActivePage() {
          var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var path = url == "" ? window.location.pathname : url; // console.log(path);
    
          if (path == "/") return null;
          var exploreLink;
          var output;
          this.navLinks.forEach(function (item, i) {
            if (item.href.includes(path)) output = item;
            if (/explore/.test(item.href)) exploreLink = item;
          });
          if (/explore/.test(path) || /collections/.test(path)) output = exploreLink;
          return output;
        }
      }, {
        key: "checkBgColor",
        value: function checkBgColor() {
          if (document.querySelector(".darknav, .header.section--yellow")) {
            document.documentElement.classList.add("menu-dark");
          } else {
            document.documentElement.classList.remove("menu-dark");
          }
        }
      }, {
        key: "calcProgress",
        value: function calcProgress() {
          var _this3 = this;
    
          var progresses = this.nav.querySelectorAll("[data-progress]");
          var totals = this.nav.querySelector(".nav__totals");
          progresses.forEach(function (progress, i) {
            var uid = progress.getAttribute("data-progress");
            var first = progress.querySelector(".first");
            var last = progress.querySelector(".last");
    
            switch (uid) {
              case "explore":
                first.innerHTML = _this3.pad(_this3.userState.data.visited.length);
                last.innerHTML = _this3.pad(Number(totals.getAttribute("data-explore-total")));
                break;
    
              case "chapters":
                first.innerHTML = _this3.pad(_this3.userState.data.chapter);
                last.innerHTML = _this3.pad(Number(totals.getAttribute("data-chapters-total")));
                break;
    
              case "bestiary":
                first.innerHTML = _this3.pad(_this3.userState.data.found.length);
                last.innerHTML = _this3.pad(Number(totals.getAttribute("data-bestiary-total")));
                break;
    
              default:
            }
          });
        }
      }, {
        key: "pad",
        value: function pad(num) {
          return num < 10 ? "0" + num.toString() : num.toString();
        }
      }, {
        key: "updateShareLinks",
        value: function updateShareLinks() {
          // var location = getFlag("location");
          // if(!location || location == "") return;
          // // console.log("update");
          // var exploreLinks = document.querySelectorAll(".dynamic-explore-link, .nav__primaryLink[href^='/explore']");
          // exploreLinks.forEach((item, i) => {
          //   // console.log(item);
          //   item.href="/explore/" + location;
          // });
          var links = document.querySelectorAll("[data-share-href]");
          links.forEach(function (link) {
            link.href = link.getAttribute("data-share-href") + window.location.href;
          });
        }
      }]);
      return Menu;
    }(_component["default"]);
    
    exports["default"] = Menu;
    
    },{"../utility/access":29,"./component":6,"./soundPlayer":17,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],13:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _impetus = _interopRequireDefault(require("impetus"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Mural = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Mural, _Component);
    
      var _super = _createSuper(Mural);
    
      function Mural(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Mural);
        _this = _super.call(this, "mural");
        _this.state = {
          els: {},
          render: false,
          offset: 0,
          loadCount: 0
        };
        site.components.attachToPages(["mural"], (0, _assertThisInitialized2["default"])(_this));
        site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
        site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
        _this.browser = site.browser;
        return _this;
      }
    
      (0, _createClass2["default"])(Mural, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          soundPlayer.playDefaultAmbientState();
          this.state.els.rail = document.getElementById("mural-rail");
          this.state.els.content = document.getElementById("mural-content");
          var innerBounds = this.state.els.rail.getBoundingClientRect();
          var xMax = innerBounds.width - window.innerWidth;
          var lastbar = document.querySelector(".mural__barPart:last-child");
    
          if (lastbar) {
            var bounds = lastbar.getBoundingClientRect();
    
            if (this.browser.state.isMobile) {
              xMax = Math.max(bounds.right - window.innerWidth * 0.25, 10);
            } else {
              xMax = Math.max(bounds.right - window.innerWidth * 0.6, 10);
            }
          } // this.state.offset = 0;
    
    
          var loadCount = this.state.loadCount;
          this.state.imp = new _impetus["default"]({
            source: this.state.els.rail,
            multiplier: 1,
            friction: 0.92,
            initialValues: [this.state.offset, 0],
            boundX: [-xMax, 0],
            boundY: [0, 0],
            bounce: true,
            update: function update(x, y) {
              // var x = Math.min(x, 0);
              _this2.draw(x, loadCount);
            }
          });
    
          if (!getFlag("mural-onboarded")) {
            setTimeout(function () {
              showPopper("mural-onboard");
              site.setFlag("mural-onboarded", true);
            }, 1);
          }
    
          this.initCanvas();
          this.resize();
        }
      }, {
        key: "unmount",
        value: function unmount(site) {
          // destroy state
          // console.log("unmount");
          // this.state.renderer = null;
          // this.state.canvas = null;
          // this.state.material = null;
          this.state.render = false;
          this.state.imp = this.state.imp.destroy(); // this.state.offset = 0;
    
          this.state.loadCount++;
        }
      }, {
        key: "initCanvas",
        value: function initCanvas() {
          var _this3 = this;
    
          if (!this.state.renderer) {
            var canvas = document.getElementById("mural-canvas");
            this.state.canvas = canvas; // Set up WebGL renderer, camera, and scene
    
            var renderer = new THREE.WebGLRenderer({
              canvas: canvas
            });
            this.state.canvas = canvas;
            this.state.renderer = renderer;
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(Math.min(canvas.offsetWidth, 1600), Math.min(canvas.offsetHeight, 800));
            var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
            var scene = new THREE.Scene();
            camera.position.z = 1;
            this.state.camera = camera;
            this.state.scene = scene; // Load image
            // const texture = new THREE.TextureLoader().load("/images/mural.jpg");
    
            this.state.textures = [];
            this.state.textureIndex = 0;
            var imageEls = document.querySelectorAll(".mural__images [data-image]");
            imageEls.forEach(function (el) {
              _this3.state.textures.push(new THREE.TextureLoader().load(_this3.browser.state.isMobile ? el.getAttribute("data-mob-image") : el.getAttribute("data-image")));
            }); // console.log(this.state.textures);
    
            this.state.ratio = canvas.offsetHeight * 2 / canvas.offsetWidth; // Set up plane with image as texture and fragment shader
    
            var material = new THREE.ShaderMaterial({
              uniforms: {
                tex_l: {
                  value: this.state.textures[0]
                },
                tex_c: {
                  value: this.state.textures[1]
                },
                tex_r: {
                  value: this.state.textures[2]
                },
                mouse: {
                  value: new THREE.Vector2()
                },
                progress: {
                  value: 0.0
                },
                offset: {
                  value: 0.0
                },
                time: {
                  value: 0.0
                },
                ratio: {
                  value: this.state.ratio
                }
              },
              vertexShader: "\n          varying vec2 vUv;\n          void main() {\n            vUv = uv;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n          }\n        ",
              fragmentShader: "\n          uniform sampler2D tex_l;\n          uniform sampler2D tex_c;\n          uniform sampler2D tex_r;\n          uniform vec2 mouse;\n          uniform float progress;\n          uniform float offset;\n          uniform float time;\n          uniform float ratio;\n          varying vec2 vUv;\n\n          float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n          vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n          vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}\n\n          //\tClassic Perlin 3D Noise \n          //\tby Stefan Gustavson\n          //\n          vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n          vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n          vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\n          float noise(vec3 P){\n            vec3 Pi0 = floor(P); // Integer part for indexing\n            vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n            Pi0 = mod(Pi0, 289.0);\n            Pi1 = mod(Pi1, 289.0);\n            vec3 Pf0 = fract(P); // Fractional part for interpolation\n            vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n            vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n            vec4 iy = vec4(Pi0.yy, Pi1.yy);\n            vec4 iz0 = Pi0.zzzz;\n            vec4 iz1 = Pi1.zzzz;\n\n            vec4 ixy = permute(permute(ix) + iy);\n            vec4 ixy0 = permute(ixy + iz0);\n            vec4 ixy1 = permute(ixy + iz1);\n\n            vec4 gx0 = ixy0 / 7.0;\n            vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n            gx0 = fract(gx0);\n            vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n            vec4 sz0 = step(gz0, vec4(0.0));\n            gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n            gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n            vec4 gx1 = ixy1 / 7.0;\n            vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n            gx1 = fract(gx1);\n            vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n            vec4 sz1 = step(gz1, vec4(0.0));\n            gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n            gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n            vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n            vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n            vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n            vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n            vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n            vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n            vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n            vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n            vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n            g000 *= norm0.x;\n            g010 *= norm0.y;\n            g100 *= norm0.z;\n            g110 *= norm0.w;\n            vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n            g001 *= norm1.x;\n            g011 *= norm1.y;\n            g101 *= norm1.z;\n            g111 *= norm1.w;\n\n            float n000 = dot(g000, Pf0);\n            float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n            float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n            float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n            float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n            float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n            float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n            float n111 = dot(g111, Pf1);\n\n            vec3 fade_xyz = fade(Pf0);\n            vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n            vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n            float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n            return 2.2 * n_xyz;\n          }\n          \n          void main() {\n            \n            vec2 pos = vUv;\n\n            pos.x -= offset;\n            \n            float blend = 0.015;\n            float my = (1.0 - abs(vUv.y - mouse.y)) * 0.5; \n            \n            float center_off = pow((0.5 - abs(pos.y - 0.5))*2.0,0.5);\n            \n            float prg = progress + center_off * 0.08;\n\n            // float scale = (0.5 + p4) * 30.0;\n            float scale = 30.0;\n\n            float nse  = (noise(vec3(pos.x * scale, pos.y * scale, time * 0.2)))*2.0;\n\n            float p_nse = prg + nse*nse*0.025;\n\n            float p = smoothstep(p_nse-blend, p_nse+blend, pos.x);\n            float p2 = smoothstep(p_nse, p_nse+blend*5.0, pos.x);\n            float p3 = pow(smoothstep(p_nse - blend, p_nse+blend*3.0, pos.x), 0.2);\n            float p4 = smoothstep(prg - blend*1.5, prg+blend*10.0, pos.x);\n\n            pos.y = pos.y + nse * 1.00 * p4;\n            pos.x = pos.x + nse * 1.00 * p4;\n\n            pos.x /= ratio;\n\n\n            vec4 col_l = texture2D(tex_l, vec2(pos.x + 1.0, pos.y));\n            float gray_l = (col_l.r + col_l.g + col_l.b) / 3.0 * (1.0-p3*0.98)+ 0.1;\n            vec4 mix_l = mix(col_l, vec4(gray_l, gray_l, gray_l, 1.0), p);\n\n            vec4 col_c = texture2D(tex_c, pos);\n            float gray_c = (col_c.r + col_c.g + col_c.b) / 3.0 * (1.0-p3*0.98)+ 0.1;\n            vec4 mix_c = mix(col_c, vec4(gray_c, gray_c, gray_c, 1.0), p);\n\n            vec4 col_r = texture2D(tex_r, vec2(pos.x - 1.0, pos.y));\n            float gray_r = (col_r.r + col_r.g + col_r.b) / 3.0 * (1.0-p3*0.98)+ 0.1;\n            vec4 mix_r = mix(col_r, vec4(gray_r, gray_r, gray_r, 1.0), p);\n\n            // just need to mix them now\n\n            vec4 color = mix(mix(mix_l, mix_c, step(0.0, pos.x)), mix_r, step(1.0, pos.x));\n            \n\n            gl_FragColor = color;\n          }\n        "
            });
            this.state.material = material;
            var geometry = new THREE.PlaneBufferGeometry(2, 2);
            var mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            this.state.progress = 0;
            var lastbar = document.querySelector(".mural__barPart:last-child");
    
            if (lastbar) {
              var bounds = lastbar.getBoundingClientRect();
              this.state.progress = bounds.right / window.innerWidth - 0.05;
            } // console.log(progress);
    
    
            material.uniforms.progress.value = this.state.progress;
          } else {
            // reload page
            var _canvas = document.getElementById("mural-canvas");
    
            _canvas.replaceWith(this.state.canvas);
          }
    
          this.state.render = true;
        }
      }, {
        key: "resize",
        value: function resize() {
          if (this.state.imp == null) return;
          var innerBounds = this.state.els.rail.getBoundingClientRect();
          var xMax = innerBounds.width - window.innerWidth;
          var lastbar = document.querySelector(".mural__barPart:last-child");
    
          if (lastbar) {
            var bounds = lastbar.getBoundingClientRect();
    
            if (this.browser.state.isMobile) {
              xMax = Math.max(bounds.right - window.innerWidth * 0.25, 10);
            } else {
              xMax = Math.max(bounds.right - window.innerWidth * 0.6, 10);
            }
    
            this.state.progress = bounds.right / window.innerWidth - 0.05;
          }
    
          this.state.renderer.setSize(Math.min(this.state.canvas.offsetWidth, 1600), Math.min(this.state.canvas.offsetHeight, 800));
          this.state.ratio = this.state.canvas.offsetHeight * 2 / this.state.canvas.offsetWidth;
          this.state.material.uniforms.ratio.value = this.state.ratio;
          this.state.material.uniforms.progress.value = this.state.progress;
          this.state.els.content.style.left = xMax * 1.5 + window.innerWidth * 0.35 + "px";
        }
      }, {
        key: "draw",
        value: function draw(x, loadCount) {
          // console.log(loadCount);
          if (!this.state.render || this.state.loadCount != loadCount) return;
          this.state.offset = x;
          this.state.els.rail.style.transform = "translate3d(" + x + "px, 0, 0 )";
          this.state.els.content.style.transform = "translate3d(" + x * 1.5 + "px, 0, 0 )";
        }
      }, {
        key: "render",
        value: function render() {
          if (!this.state.render) return;
          var _ti = this.state.textureIndex;
          this.state.textureIndex = Math.min(Math.max(Math.floor(this.state.offset * -1 / this.state.canvas.offsetHeight / 2), 0), this.state.textures.length - 2);
    
          if (this.state.textureIndex != _ti) {
            this.state.material.uniforms.tex_l.value = this.state.textures[this.state.textureIndex];
            this.state.material.uniforms.tex_c.value = this.state.textures[this.state.textureIndex + 1];
            this.state.material.uniforms.tex_r.value = this.state.textures[this.state.textureIndex + 2];
          } // console.log(this.state.offset);
    
    
          this.state.material.uniforms.offset.value = this.state.offset / window.innerWidth + this.state.textureIndex * this.state.ratio;
          this.state.material.uniforms.progress.value = this.state.progress - this.state.textureIndex * this.state.ratio;
          this.state.material.uniforms.time.value = this.browser.state.t / 1000;
          this.state.material.uniforms.mouse.value.x = this.browser.state.mouse.x / window.innerWidth;
          this.state.material.uniforms.mouse.value.y = this.browser.state.mouse.y / window.innerHeight;
          this.state.renderer.render(this.state.scene, this.state.camera);
        }
      }]);
      return Mural;
    }(_component["default"]);
    
    exports["default"] = Mural;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39,"impetus":51}],14:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Poppers = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Poppers, _Component);
    
      var _super = _createSuper(Poppers);
    
      function Poppers(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Poppers);
        _this = _super.call(this, "poppers");
        site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
        window.showPopper = _this.showPopper.bind((0, _assertThisInitialized2["default"])(_this));
        window.hidePopper = _this.closePopper.bind((0, _assertThisInitialized2["default"])(_this));
        window.createMusicPopper = _this.createMusicPopper.bind((0, _assertThisInitialized2["default"])(_this));
        _this.popperCallbacks = [];
        _this.setFlag = site.setFlag;
        return _this;
      }
    
      (0, _createClass2["default"])(Poppers, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          setTimeout(function () {
            _this2.initPage(); // this.showPopper("mural-onboard");
    
          }, 0);
        }
      }, {
        key: "initPage",
        value: function initPage() {
          this.poppers = [];
          var popperEls = document.querySelectorAll(".popper");
    
          for (var i = 0; i < popperEls.length; i++) {
            var uid = popperEls[i].getAttribute("data-popper");
            var flag = popperEls[i].getAttribute("data-popper-flag");
            var stick = popperEls[i].hasAttribute("data-popper-stick");
            var inner = popperEls[i].querySelector(".popper__popup");
            this.poppers.push({
              el: popperEls[i],
              inner: inner,
              uid: uid,
              flag: flag,
              stick: stick,
              noneTimer: null,
              show: false
            });
            var closes = popperEls[i].querySelectorAll(".popper-close");
    
            for (var j = 0; j < closes.length; j++) {
              closes[j].addEventListener("click", this.closePopper.bind(this, uid));
            }
    
            if (flag != null && !getFlag(flag)) {
              this.showPopper(uid);
              this.setFlag(flag, true);
            }
          }
    
          var popperShowEls = document.querySelectorAll("[data-popper-show]");
    
          for (var i = 0; i < popperShowEls.length; i++) {
            var uid = popperShowEls[i].getAttribute("data-popper-show");
            popperShowEls[i].addEventListener("click", this.showPopper.bind(this, uid));
          }
        }
      }, {
        key: "showPopper",
        value: function showPopper(uid, el) {
          var _this3 = this;
    
          // console.log("showPopper", uid);
          this.poppers.forEach(function (popper, i) {
            if (popper.uid == uid) {
              popper.show = true; // position sticky ones.
    
              if (popper.stick && el) {
                _this3.positionPopper(popper, el);
              }
    
              clearTimeout(popper.noneTimer);
              popper.el.classList.add("block");
              popper.el.classList.add("show"); //callbacks
    
              _this3.popperCallbacks.forEach(function (callback, i) {
                if (callback) callback(uid, popper.el);
              });
    
              document.documentElement.classList.add("popup-" + popper.uid);
            }
          });
        }
      }, {
        key: "closePopper",
        value: function closePopper(uid, instant) {
          // console.log("closePopper", uid, instant);
          this.poppers.forEach(function (popper, i) {
            if (popper.uid == uid) {
              popper.show = false;
              popper.el.classList.remove("show");
    
              if (instant == true) {
                popper.el.classList.remove("block");
              } else {
                popper.noneTimer = setTimeout(function () {
                  if (popper.show) return;
                  popper.el.classList.remove("block");
                }, 2000);
              }
    
              document.documentElement.classList.remove("popup-" + popper.uid);
            }
          });
        }
      }, {
        key: "positionPopper",
        value: function positionPopper(popper, el) {
          var bounds = el.getBoundingClientRect();
          var left = (bounds.left + bounds.width / 2) / window.innerWidth * 100;
          var top = (bounds.top + bounds.height / 2) / window.innerHeight * 100;
    
          if (popper.inner) {
            // console.log("Position Popper");
            popper.inner.style.left = left + "%";
            popper.inner.style.top = top + "%";
          }
        }
      }, {
        key: "createMusicPopper",
        value: function createMusicPopper(primaryContent, secondaryContent, className, time) {
          var popper = document.createElement("div");
          popper.className = "messagePopper messagePopper--music " + className;
          var primary = document.createElement("div");
          primary.className = "messagePopper__primary";
          primary.innerHTML = primaryContent;
          popper.appendChild(primary);
          var secondary = document.createElement("div");
          secondary.className = "messagePopper__secondary";
          secondary.innerHTML = secondaryContent;
          popper.appendChild(secondary);
          document.getElementById("message-poppers").appendChild(popper);
          setTimeout(function () {
            popper.classList.add("show");
          }, 100);
          setTimeout(function () {
            popper.classList.remove("show");
          }, time);
          setTimeout(function () {
            popper.remove();
          }, time + 1000);
        }
      }, {
        key: "addPopperCallback",
        value: function addPopperCallback(callback) {
          if (callback) this.popperCallbacks.push(callback);
        }
      }]);
      return Poppers;
    }(_component["default"]);
    
    exports["default"] = Poppers;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],15:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _access = require("../utility/access");
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Settings = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Settings, _Component);
    
      var _super = _createSuper(Settings);
    
      function Settings(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Settings);
        _this = _super.call(this, "settings");
        _this.state = {
          volume: 0.8,
          muted: false,
          isFullscreen: document.fullscreenElement != null
        };
        site.settings = _this.state;
        site.components.mount((0, _assertThisInitialized2["default"])(_this));
        site.navigation.registerNavigationCallback(_this.updateFullscreenInputs.bind((0, _assertThisInitialized2["default"])(_this)));
        site.navigation.registerNavigationCallback(_this.updateVolumeInputs.bind((0, _assertThisInitialized2["default"])(_this)));
        return _this;
      }
    
      (0, _createClass2["default"])(Settings, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          var toggle = document.getElementById("settings-toggle");
          if (toggle) (0, _access.addConfirmListeners)(toggle, this.toggleSettings.bind(this));
          document.addEventListener("click", function (e) {
            if (!(e.target.closest(".nav__settings") || e.target.closest(".nav__settingsToggle"))) _this2.closeSettings();
          });
          this.fullscreenToggles = document.querySelectorAll(".fullscreen-toggle");
    
          for (var i = 0; i < this.fullscreenToggles.length; i++) {
            this.fullscreenToggles[i].addEventListener("change", this.toggleFullscreen.bind(this, this.fullscreenToggles[i]));
          }
    
          this.volumeIcons = document.querySelectorAll('.volume-icon');
    
          if (this.volumeIcons.length > 0) {
            this.volumeIconSrc = this.volumeIcons[0].src;
          }
    
          addEventListener('fullscreenchange', this.fullscreenChange.bind(this));
          this.updateVolumeInputs();
          this.soundToggle = document.querySelector('.sound-toggle');
    
          if (this.soundToggle) {
            this.soundToggle.addEventListener('change', this.toggleSound.bind(this));
            this.state.muted = !this.soundToggle.checked;
    
            if (this.state.muted) {
              this.muteVolume();
            }
          }
        }
      }, {
        key: "toggleSettings",
        value: function toggleSettings() {
          if (!document.documentElement.classList.contains("settings-open")) {
            this.openSettings();
          } else {
            this.closeSettings();
          }
        }
      }, {
        key: "openSettings",
        value: function openSettings() {
          document.documentElement.classList.add("settings-open");
        }
      }, {
        key: "closeSettings",
        value: function closeSettings() {
          document.documentElement.classList.remove("settings-open");
        }
      }, {
        key: "toggleFullscreen",
        value: function toggleFullscreen(el) {
          var checked = el.checked;
    
          if (checked) {
            this.fullscreenOn();
          } else {
            this.fullscreenOff();
          }
    
          for (var i = 0; i < this.fullscreenToggles.length; i++) {
            this.fullscreenToggles[i].checked = checked;
          }
        }
      }, {
        key: "fullscreenOn",
        value: function fullscreenOn() {
          document.documentElement.requestFullscreen();
        }
      }, {
        key: "fullscreenOff",
        value: function fullscreenOff() {
          document.exitFullscreen();
        }
      }, {
        key: "fullscreenChange",
        value: function fullscreenChange() {
          // update state of fullscreen buttons
          this.state.isFullscreen = document.fullscreenElement != null;
          this.updateFullscreenInputs();
        }
      }, {
        key: "updateFullscreenInputs",
        value: function updateFullscreenInputs() {
          var _this3 = this;
    
          var inputs = document.querySelectorAll(".fullscreen-input");
          inputs.forEach(function (input, i) {
            input.checked = _this3.state.isFullscreen;
          });
        }
      }, {
        key: "volumeChange",
        value: function volumeChange(el) {
          if (this.state.muted && el.value > 0) {
            this.unmuteVolume();
          }
    
          this.setVolume(el.value);
        }
      }, {
        key: "setVolume",
        value: function setVolume(amt) {
          this.state.volume = amt / 100; // add some callbacks for youtube / audio etc.
    
          soundPlayer.howler.volume(this.state.volume);
          if (this.videoPlayer.state.player != null) this.videoPlayer.state.player.setVolume(this.state.volume * 100); // is it just youtube I need to set?
          // update the position of all the other volume sliders too.
    
          this.updateVolumeInputs();
        }
      }, {
        key: "toggleSound",
        value: function toggleSound() {
          if (this.soundToggle.checked) {
            this.unmuteVolume();
          } else {
            this.muteVolume();
          }
        }
      }, {
        key: "toggleMute",
        value: function toggleMute() {
          if (this.state.muted) {
            this.unmuteVolume();
          } else {
            this.muteVolume();
          }
        }
      }, {
        key: "muteVolume",
        value: function muteVolume() {
          this.state.muted = true;
          this.previousVolume = this.state.volume;
          this.setVolume(0);
        }
      }, {
        key: "unmuteVolume",
        value: function unmuteVolume() {
          this.state.muted = false;
          this.setVolume(this.previousVolume * 100);
        }
      }, {
        key: "updateVolumeInputs",
        value: function updateVolumeInputs() {
          var _this4 = this;
    
          this.volumeToggles = document.querySelectorAll(".volume-toggle");
    
          for (var i = 0; i < this.volumeToggles.length; i++) {
            if (!this.volumeToggles[i].classList.contains("inited")) {
              this.volumeToggles[i].addEventListener("input", this.volumeChange.bind(this, this.volumeToggles[i]));
              this.volumeToggles[i].classList.add("inited");
            }
          }
    
          var inputs = document.querySelectorAll(".volume-input");
          inputs.forEach(function (input, i) {
            input.value = _this4.state.volume * 100;
          });
          this.volumeIcons.forEach(function (i) {
            if (!i.classList.contains("inited")) {
              i.addEventListener('click', _this4.toggleMute.bind(_this4));
              i.classList.add("inited");
            }
    
            i.src = _this4.state.muted ? i.dataset.volumeIcon : _this4.volumeIconSrc;
          });
        }
      }]);
      return Settings;
    }(_component["default"]);
    
    exports["default"] = Settings;
    
    },{"../utility/access":29,"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],16:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var SlowTV = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(SlowTV, _Component);
    
      var _super = _createSuper(SlowTV);
    
      function SlowTV(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, SlowTV);
        _this = _super.call(this, "slowTV");
        _this.state = {
          APILoaded: window.YT != undefined && window.YT.loaded,
          mountWhenLoaded: false,
          player: null,
          inited: false,
          modeVideo: true,
          els: {},
          imageInterval: 15000,
          fireflyCount: 75
        };
        _this.youtube = site.components.getComponent("youtube");
        if (window.Castjs) _this.cjs = new Castjs();
        _this.browser = site.browser; // for now lets mount it here.
        // site.components.mount(this);
    
        site.components.attachToPages(["slow-tv"], (0, _assertThisInitialized2["default"])(_this));
        site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
        document.addEventListener('swup:animationOutStart', _this.fadeOutMusic.bind((0, _assertThisInitialized2["default"])(_this)));
        window.generateFireflies = _this.generateFireflies.bind((0, _assertThisInitialized2["default"])(_this));
    
        window.finishFireflies = function () {
          _this.state.firefliesReady = false;
        };
    
        return _this;
      }
    
      (0, _createClass2["default"])(SlowTV, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          soundPlayer.clearAmbientState();
          setTimeout(function () {
            if (_this2.state.els.slowTV) _this2.state.els.slowTV.classList.add("ready");
          }, 6000);
    
          if (!this.youtube.APILoaded) {
            this.youtube.mountWhenLoaded = this;
            this.initEls();
            this.initMusic();
            this.playMusic();
            this.initEls();
            this.initImages();
            window.generateFireflies((0.5 + Math.random()) * this.state.fireflyCount);
            this.state.els.mediaToggle.checked = false;
            this.changeMedia();
            return;
          } // console.log("Slow TV Mounted");
          // document.documentElement.classList.add("show-spinner");
    
    
          this.initEls();
          this.initImages();
          this.initMusic();
          this.createPlayer();
          this.generateFireflies((0.5 + Math.random()) * this.state.fireflyCount);
    
          if (!getFlag("slow-tv-onboarded")) {
            setTimeout(function () {
              showPopper("slow-tv-onboard");
              site.setFlag("slow-tv-onboarded", true);
            }, 4500);
          }
        }
      }, {
        key: "unmount",
        value: function unmount(site) {
          this.state.mountWhenLoaded = false;
          this.state.inited = false;
          document.documentElement.classList.remove("show-spinner"); //   this.fadeActiveMusic();      
          //   // soundPlayer.fadeOutByName(this.state.music[this.state.musicIndex]);
          // }
    
          this.state.firefliesReady = false; // fade out whatever music is playing.
        }
      }, {
        key: "initEls",
        value: function initEls() {
          this.state.els.slowTV = document.getElementById("slow-tv"); // this.state.els.castButton = document.getElementById("cast-button");
    
          this.state.els.mediaToggle = document.getElementById("media-toggle");
          this.state.els.images = document.getElementById("images"); // this.state.els.castButton.addEventListener("click", this.startCast.bind(this));
    
          this.state.els.mediaToggle.addEventListener("change", this.changeMedia.bind(this));
          document.querySelector(".slowTV__video").addEventListener("click", this.forcePlayVideo.bind(this));
        }
      }, {
        key: "changeMedia",
        value: function changeMedia() {
          this.state.modeVideo = this.state.els.mediaToggle.checked;
    
          if (this.state.modeVideo) {
            this.state.els.slowTV.classList.remove("image-mode");
            if (this.state.player) this.state.player.playVideo();
          } else {
            this.state.els.slowTV.classList.add("image-mode");
            if (this.state.player) this.state.player.pauseVideo();
          }
        }
      }, {
        key: "initImages",
        value: function initImages() {
          this.state.images = [];
          var imgDivs = this.state.els.slowTV.querySelectorAll("[data-image]");
    
          for (var i = 0; i < imgDivs.length; i++) {
            var el = imgDivs[i];
            var url = this.browser.state.isMobile ? el.getAttribute("data-mob-image") : el.getAttribute("data-image");
            this.state.images.push({
              el: el,
              url: url,
              loaded: false,
              img: null
            });
          }
    
          this.state.images = shuffle(this.state.images);
          this.state.imageIndex = 0;
          this.state.nextImageTime = Date.now() + this.state.imageInterval;
          this.nextImage();
        }
      }, {
        key: "nextImage",
        value: function nextImage() {
          if (!this.state.els.slowTV) return null;
    
          if (this.state.imageIndex >= this.state.images.length) {
            this.state.images = shuffle(this.state.images);
            this.state.imageIndex = 0;
          }
    
          var next = this.state.images[this.state.imageIndex];
    
          if (!next.loaded) {
            this.loadImage(next);
          } else {
            this.outputImage(next);
          }
    
          this.state.imageIndex++;
        }
      }, {
        key: "loadImage",
        value: function loadImage(image) {
          // console.log(image);
          image.img = new Image();
          image.img.onload = this.loadedImage.bind(this, image);
          image.img.onerror = this.nextImage.bind(this);
          image.img.src = image.url;
        }
      }, {
        key: "loadedImage",
        value: function loadedImage(image) {
          if (!this.state.els.slowTV) return null;
          this.outputImage(image);
        }
      }, {
        key: "outputImage",
        value: function outputImage(image) {
          var _this3 = this;
    
          if (!this.state.els.slowTV) return null;
          var now = Date.now();
          if (this.state.modeVideo) this.state.nextImageTime = now + this.state.imageInterval / 4;
    
          if (now < this.state.nextImageTime) {
            setTimeout(function () {
              _this3.outputImage(image);
            }, this.state.nextImageTime - now);
          } else {
            // slate old image for removal
            var oldImage = this.state.els.slowTV.querySelector(".slowTV__image");
            setTimeout(function () {
              oldImage.remove();
            }, this.state.imageInterval / 2); // append new image
    
            var el = document.createElement("div");
            el.className = "slowTV__image";
            el.appendChild(image.img);
            this.state.els.images.appendChild(el);
            this.state.nextImageTime = now + this.state.imageInterval; // queue up next image
    
            this.nextImage();
          }
        }
      }, {
        key: "createPlayer",
        value: function createPlayer() {
          var playlist = document.getElementById("slow-tv-media").getAttribute("data-playlist");
          this.state.player = new YT.Player('player', {
            height: '390',
            width: '640',
            playerVars: {
              'playsinline': 1,
              'showinfo': 0,
              'controls': 0,
              'disablekb': 1,
              'enablejsapi': 1,
              'fs': 0,
              'modestbranding': 1,
              'rel': 0,
              'list': playlist,
              'listType': "playlist"
            },
            events: {
              'onReady': this.onPlayerReady.bind(this),
              'onStateChange': this.onPlayerStateChange.bind(this)
            }
          });
        }
      }, {
        key: "onPlayerReady",
        value: function onPlayerReady() {
          // console.log("player ready");
          this.state.player.mute();
          this.state.player.playVideo();
        }
      }, {
        key: "forcePlayVideo",
        value: function forcePlayVideo() {
          if (!this.state.modeVideo || this.state.player == null) {
            window.alert("There was an issue loading Youtube. Please use the 'Images' setting or reload the page to try again");
            return;
          }
    
          this.onPlayerReady();
        }
      }, {
        key: "initPlaylist",
        value: function initPlaylist() {
          this.state.player.setShuffle(true);
          this.state.player.setLoop(true);
          this.state.player.playVideoAt(0); // console.log(this.state.player.getPlaylist());
    
          this.state.inited = true;
          this.playMusic();
        }
      }, {
        key: "initMusic",
        value: function initMusic() {
          // lets get all the ones that have a bgm prefix
          this.state.music = []; // console.log(this.state.els.slowTV);
    
          var tracks = this.state.els.slowTV.querySelectorAll(".slow-tv-audio [data-song]");
    
          for (var i = 0; i < tracks.length; i++) {
            // console.log(tracks[i]);
            this.state.music.push(tracks[i].getAttribute("data-song"));
          }
    
          this.state.music = shuffle(this.state.music);
          this.state.musicIndex = -1;
          this.loadNext(); // console.log(this.state.music[this.state.musicIndex]);
          // this.state.track = soundPlayer.getTrackByName(this.state.music[this.state.musicIndex]);
          // this.state.ambientState = [{ 
          //   name: this.state.music[this.state.musicIndex],
          //   volume: 1,
          //   onLoop: this.finishSong.bind(this),
          // }];
          // soundPlayer.preloadAmbientState(this.state.ambientState);
        }
      }, {
        key: "playMusic",
        value: function playMusic() {
          // soundPlayer.playByName(this.state.music[this.state.musicIndex], true, this.finishSong.bind(this), 0.25);
          soundPlayer.playAmbientState(this.state.ambientState, true);
          this.state.playingState = this.state.ambientState;
          this.state.playingMusic = true; // console.log("playing music");
    
          this.loadNext(); // put in some ambient sounds too?
          // handle next;
        }
      }, {
        key: "fadeOutMusic",
        value: function fadeOutMusic() {
          if (this.state.playingMusic) {
            soundPlayer.fadeOutAmbientState(this.state.playingState, 500);
            this.state.playingMusic = false;
          }
        }
      }, {
        key: "finishSong",
        value: function finishSong() {
          // console.log("finish song");
          if (this.state.playingMusic) {
            this.state.playingMusic = false;
            this.playMusic();
          }
        }
      }, {
        key: "loadNext",
        value: function loadNext() {
          // console.log("loadnext");
          this.state.musicIndex = (this.state.musicIndex + 1) % this.state.music.length;
          this.state.ambientState = [{
            name: this.state.music[this.state.musicIndex],
            volume: 1,
            onLoop: this.finishSong.bind(this),
            fadeTime: 0
          }];
          soundPlayer.preloadAmbientState(this.state.ambientState);
        } // playNext(){
        //   console.log("play next");
        //   // this.state.musicIndex = (this.state.musicIndex + 1) % this.state.music.length;
        //   // setTimeout(this.playMusic.bind(this), 1000);
        //   soundPlayer.playAmbientState(this.state.ambientState);
        //   this.state.playingMusic = true;
        //   this.loadNext();
        // }
    
      }, {
        key: "onPlayerStateChange",
        value: function onPlayerStateChange(e) {
          // console.log("player state change", e.data);
          if (e.data == -1) {
            // unstarted
            this.state.isPlaying = false;
          } else if (e.data == 0) {
            // ended
            this.state.isPlaying = false;
          } else if (e.data == 1) {
            // playing
            this.state.isPlaying = true;
    
            if (!this.state.inited) {
              this.initPlaylist();
            } else {// this.showSongName();
            }
    
            document.documentElement.classList.remove("show-spinner");
          } else if (e.data == 2) {
            // paused
            this.state.isPlaying = false;
          } else if (e.data == 3) {// buffering
          } else if (e.data == 5) {// video cued
          }
    
          this.showState.bind(this)();
        }
      }, {
        key: "showState",
        value: function showState() {
          var _this4 = this;
    
          setTimeout(function () {
            _this4.state.els.slowTV.classList[_this4.state.isPlaying ? "add" : "remove"]("playing");
          }, this.state.isPlaying ? 1000 : 0);
        }
      }, {
        key: "showSongName",
        value: function showSongName() {
          var data = this.state.player.getVideoData(); // console.log(data);
    
          var title = data.title.replace("Radical Face", "");
          var artist = data.author;
          createMusicPopper(title, artist, "", 10000);
        } // need to watch the time and fade out before the end of the video.
        // Need to set up random cylcing audio.
        // need to add in ui and settings.
    
      }, {
        key: "generateFireflies",
        value: function generateFireflies(count, ready) {
          if (this.state.firefliesReady) return;
          var fireflies = [];
          var container = document.getElementById("fireflies");
    
          for (var i = 0; i < count; i++) {
            var firefly = document.createElement("div");
            firefly.classList.add("firefly");
            container.appendChild(firefly);
            var t = Math.random() * 1000;
            fireflies.push({
              el: firefly,
              pos: {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              },
              t: t,
              op: Math.sin(t),
              rate: 0.5 + Math.random()
            });
          }
    
          this.state.firefliesReady = true;
          this.state.fireflies = fireflies;
        }
      }, {
        key: "render",
        value: function render(deltaTime) {
          // console.log(deltaTime);
          if (!this.state.firefliesReady) return;
    
          for (var i = 0; i < this.state.fireflies.length; i++) {
            var firefly = this.state.fireflies[i];
            var pos = firefly.pos;
            firefly.t += deltaTime / (250 * firefly.rate);
            firefly.op = Math.sin(firefly.t);
    
            if (firefly.op >= 0) {
              if (i % 2 == 0) {
                pos.x += Math.cos(i + deltaTime * 0.002) * 0.01;
                pos.y += Math.sin(i + deltaTime * 0.001) * 0.02;
              } else {
                pos.x += Math.sin(i + deltaTime * 0.002) * 0.01;
                pos.y += Math.cos(i + deltaTime * 0.001) * 0.02;
              } // wrap fireflies when they go off the side of the screen
    
    
              pos.x = (pos.x + 100) % 100;
              pos.y = (pos.y + 100) % 100; // use CSS transforms to move the fireflies
    
              firefly.el.style.transform = "translate3d(".concat(pos.x, "vw, ").concat(pos.y, "vh, 0)");
              firefly.el.style.opacity = firefly.op;
            }
          }
        } // Add the startCast function to the SlowTV class
    
      }, {
        key: "startCast",
        value: function startCast() {
          if (window.chrome.cast && window.chrome.cast.isAvailable) {
            window.chrome.cast.requestSession(this.onSessionSuccess.bind(this), this.onSessionError);
          }
        } // Add the onSessionSuccess function to the SlowTV class
    
      }, {
        key: "onSessionSuccess",
        value: function onSessionSuccess(session) {
          var ytPlayer = this.state.player; // Get the video ID of the currently playing video
    
          var videoId = ytPlayer.getVideoData().video_id;
    
          if (videoId) {
            // Load the video on the Chromecast device
            session.loadMedia(new chrome.cast.media.LoadRequest(new chrome.cast.media.MediaInfo('https://www.youtube.com/watch?v=' + videoId, 'video/mp4')), this.onMediaDiscovered.bind(this, 'loadMedia'), this.onMediaError);
          }
        } // Add the onMediaDiscovered function to the SlowTV class
    
      }, {
        key: "onMediaDiscovered",
        value: function onMediaDiscovered(how, media) {
          console.log('Media discovered: ' + how);
        } // Add the onSessionError function to the SlowTV class
    
      }, {
        key: "onSessionError",
        value: function onSessionError(error) {
          console.log('Session error: ' + JSON.stringify(error));
        } // Add the onMediaError function to the SlowTV class
    
      }, {
        key: "onMediaError",
        value: function onMediaError(error) {
          console.log('Media error: ' + JSON.stringify(error));
        }
      }]);
      return SlowTV;
    }(_component["default"]);
    
    exports["default"] = SlowTV;
    
    function shuffle(array) {
      var currentIndex = array.length,
          randomIndex; // While there remain elements to shuffle.
    
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--; // And swap it with the current element.
    
        var _ref = [array[randomIndex], array[currentIndex]];
        array[currentIndex] = _ref[0];
        array[randomIndex] = _ref[1];
      }
    
      return array;
    }
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],17:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _howler = require("howler");
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var SoundPlayer = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(SoundPlayer, _Component);
    
      var _super = _createSuper(SoundPlayer);
    
      function SoundPlayer(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, SoundPlayer);
        _this = _super.call(this, "soundPlayer");
        window.soundPlayer = (0, _assertThisInitialized2["default"])(_this);
        site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
        _this.howler = _howler.Howler;
    
        _howler.Howler.volume(site.settings.volume);
    
        _this.getSoundList();
    
        _this.initSfx();
    
        _this.initMappings();
    
        _this.initAmbientTracks();
    
        _this.initSoundComponents(document.getElementById("nav"));
    
        document.addEventListener('swup:animationOutStart', _this.triggerEvent.bind((0, _assertThisInitialized2["default"])(_this), "pageTransition"));
        _this.currentState = [];
        _this.defaultState = [{
          name: "Wind Loop 1",
          volume: 0.07
        }];
    
        _this.preloadAmbientState(_this.defaultState);
    
        return _this;
      } // set up preloading phase
      // have a list of all assets by name on page load,
      // then have a list of the ones to load on site load,
      // other ones can be queued up to load as needed.
    
    
      (0, _createClass2["default"])(SoundPlayer, [{
        key: "mount",
        value: function mount(site) {
          this.initSoundComponents(document.getElementById("main"));
        }
      }, {
        key: "initSoundComponents",
        value: function initSoundComponents(context) {
          // var mouseenters = context.querySelectorAll("[data-sound-mouseenter]");
          // for (var i = 0; i < mouseenters.length; i++) {
          //   mouseenters[i].addEventListener("mouseenter", this.playSfxByName.bind(this, mouseenters[i].getAttribute("data-sound-mouseenter"), 1, null));
          // }
          // var mouseleaves = context.querySelectorAll("[data-sound-mouseleave]");
          // for (var i = 0; i < mouseleaves.length; i++) {
          //   mouseleaves[i].addEventListener("mouseleave", this.playSfxByName.bind(this, mouseleaves[i].getAttribute("data-sound-mouseleave"), 1, null));
          // }
          // var clicks = context.querySelectorAll("[data-sound-click]");
          // for (var i = 0; i < clicks.length; i++) {
          //   clicks[i].addEventListener("click", this.playSfxByName.bind(this, clicks[i].getAttribute("data-sound-click"), 1, null));
          // }
          var selectors = context.querySelectorAll("[data-sound-selector]");
    
          for (var i = 0; i < selectors.length; i++) {
            var selector = selectors[i].getAttribute("data-sound-selector");
            selectors[i].addEventListener("mouseenter", this.playMappedSound.bind(this, "hover", selector));
            selectors[i].addEventListener("mouseleave", this.playMappedSound.bind(this, "leave", selector));
            selectors[i].addEventListener("click", this.playMappedSound.bind(this, "click", selector));
          }
        }
      }, {
        key: "getSoundList",
        value: function getSoundList() {
          var soundList = document.getElementById("sounds");
          this.soundList = JSON.parse(soundList.textContent); // console.log(this.soundList);
        }
      }, {
        key: "initSfx",
        value: function initSfx() {
          var _this2 = this;
    
          // SFX
          this.sfx = [];
          this.soundList.sfx.forEach(function (sfx, i) {
            var sound = {
              name: sfx.name,
              howls: [],
              id: null,
              relativeVolume: sfx.vol || 1
            };
            sfx.files.forEach(function (src, i) {
              sound.howls.push(new _howler.Howl({
                src: [src],
                preload: true,
                loop: false,
                html5: false
              }));
            });
    
            _this2.sfx.push(sound);
          });
        }
      }, {
        key: "initMappings",
        value: function initMappings() {
          this.mappings = this.soundList.mappings;
          this.mappings.forEach(function (m) {
            m.selectors = m.selector.split(" ");
          });
          this.events = this.soundList.events;
        }
      }, {
        key: "playMappedSound",
        value: function playMappedSound(event, selector) {
          var match = this.findBestMatch(event, selector);
    
          if (match) {
            // console.log(match);
            var sound = "";
    
            switch (event) {
              case "hover":
                sound = match.hover;
                break;
    
              case "leave":
                sound = match.leave;
                break;
    
              case "click":
                sound = match.click;
                break;
            }
    
            if (sound != "") {
              this.playSfxByName(sound, 1, null);
            }
          }
        }
      }, {
        key: "findBestMatch",
        value: function findBestMatch(event, selector) {
          var match = null;
          var selectorParts = selector.split(" ");
    
          for (var i = 0; i < this.mappings.length; i++) {
            if (this.checkMatch(selectorParts, this.mappings[i])) match = this.mappings[i];
          }
    
          return match;
        }
      }, {
        key: "checkMatch",
        value: function checkMatch(parts, mapping) {
          for (var i = 0; i < mapping.selectors.length; i++) {
            if (mapping.selectors[i] != "" && parts.indexOf(mapping.selectors[i]) < 0) return false;
          }
    
          return true;
        }
      }, {
        key: "triggerEvent",
        value: function triggerEvent(eventName) {
          var _this3 = this;
    
          console.log("Sound Event: " + eventName);
          this.events.forEach(function (e) {
            if (e.name == eventName) {
              if (e.sound != "") _this3.playSfxByName(e.sound, 1, null);
              return;
            }
          });
        }
      }, {
        key: "initAmbientTracks",
        value: function initAmbientTracks() {
          var _this4 = this;
    
          // Tracks
          this.tracks = [];
          this.soundList.ambientTracks.forEach(function (track, i) {
            var sound = {
              name: track.name,
              howl: new _howler.Howl({
                src: [track.file],
                preload: false,
                loop: true,
                // depends.. can I override this? I don't want to loop on SlowTV.. I think.
                html5: false
              }),
              id: null,
              relativeVolume: track.vol || 1,
              loadState: "",
              currentVolume: 0,
              targetVolume: 0,
              inFade: false
            };
            sound.howl.on("load", _this4.onAmbientTrackLoaded.bind(_this4, sound));
    
            _this4.tracks.push(sound);
          });
        }
      }, {
        key: "getSfxByName",
        value: function getSfxByName(name) {
          var found = null;
          this.sfx.forEach(function (sound, i) {
            if (sound.name == name) {
              found = sound;
            }
          });
          if (found != null) return found; // console.log("ERROR: No SFX named: " + name);
    
          return null;
        }
      }, {
        key: "playSfxByName",
        value: function playSfxByName(name, volume, onEnd) {
          var sfx = this.getSfxByName(name);
          if (sfx != null) return this.playSfx(sfx, volume, onEnd);
          return null;
        }
      }, {
        key: "playSfx",
        value: function playSfx(sound, volume, onEnd) {
          if (sound.howls.length == 0) return;
          var howl = sound.howls[Math.floor(Math.random() * sound.howls.length)];
          if (!howl) return;
          howl.volume(volume * sound.relativeVolume);
          var id = howl.play();
    
          if (onEnd) {
            howl.on("end", function (soundId) {
              if (soundId == id) onEnd();
            });
          }
    
          return id;
        }
      }, {
        key: "getTrackByName",
        value: function getTrackByName(name) {
          var found = null;
          this.tracks.forEach(function (sound, i) {
            if (sound.name == name) {
              found = sound;
            }
          });
          if (found != null) return found; // console.log("ERROR: No track named: " + name);
    
          return null;
        }
      }, {
        key: "preloadAmbientState",
        value: function preloadAmbientState(ambientState) {
          var _this5 = this;
    
          // console.log("preload", ambientState);
          // begins the loading call on those howls
          ambientState.forEach(function (track) {
            var sound = _this5.getTrackByName(track.name); // if not loaded then start loading.
            // console.log(sound);
    
    
            if (sound.loadState == "") {
              sound.loadState = "loading";
              sound.howl.load();
            }
          });
        }
      }, {
        key: "onAmbientTrackLoaded",
        value: function onAmbientTrackLoaded(sound) {
          sound.loadState = "loaded"; // console.log("loaded", sound);
          // if it is part of the current ambient state then we should play it now.
    
          this.fadeAmbientTracksToTargetVolume();
        }
      }, {
        key: "playDefaultAmbientState",
        value: function playDefaultAmbientState() {
          this.playAmbientState(this.defaultState);
        }
      }, {
        key: "clearAmbientState",
        value: function clearAmbientState() {
          this.playAmbientState([]);
        }
      }, {
        key: "fadeOutAmbientState",
        value: function fadeOutAmbientState(ambientState, fadeTime) {
          var _this6 = this;
    
          ambientState.forEach(function (track) {
            var sound = _this6.getTrackByName(track.name);
    
            if (sound) {
              console.log(sound.name, sound.currentVolume);
              sound.targetVolume = 0;
              sound.fadeTime = fadeTime;
            }
          });
          this.fadeAmbientTracksToTargetVolume();
        }
      }, {
        key: "playAmbientState",
        value: function playAmbientState(ambientState) {
          var _this7 = this;
    
          this.preloadAmbientState(ambientState); // console.log("play", ambientState);
          // set everything to zero
    
          this.tracks.forEach(function (sound, i) {
            sound.targetVolume = 0;
            sound.howl.on("end", null);
          }); // play any of the ones that aren't playing that should be.
    
          ambientState.forEach(function (track) {
            var sound = _this7.getTrackByName(track.name);
    
            if (sound) {
              sound.targetVolume = track.volume * sound.relativeVolume;
    
              if (track.onLoop) {
                sound.howl.on("end", track.onLoop);
              }
    
              sound.fadeTime = track.fadeTime != undefined ? track.fadeTime : 2000;
            }
          });
          this.fadeAmbientTracksToTargetVolume();
        }
      }, {
        key: "fadeAmbientTracksToTargetVolume",
        value: function fadeAmbientTracksToTargetVolume() {
          var _this8 = this;
    
          this.tracks.forEach(function (sound, i) {
            if (sound.targetVolume != sound.currentVolume) {
              if (sound.loadState == "loaded" && !sound.inFade) {
                _this8.startFadeToTargetVolume(sound);
              }
            }
          });
        }
      }, {
        key: "startFadeToTargetVolume",
        value: function startFadeToTargetVolume(sound) {
          // console.log(sound.fadeTime);
          if (sound.fadeTime > 0) {
            // console.log("Start Fade: ", sound.name, " from ", sound.currentVolume, " to ", sound.targetVolume);
            sound.inFade = true;
            sound.howl.off("fade");
            sound.howl.on("fade", this.onFadeFinished.bind(this, sound, sound.targetVolume));
            sound.howl.fade(sound.currentVolume, sound.targetVolume, sound.fadeTime);
            sound.howl.play();
          } else {
            sound.howl.volume(sound.targetVolume);
            sound.currentVolume = sound.targetVolume;
            if (sound.targetVolume <= 0) sound.howl.stop();else sound.howl.play();
          }
        }
      }, {
        key: "onFadeFinished",
        value: function onFadeFinished(sound, finalVolume) {
          // console.log("Fade Finished", sound, finalVolume);
          sound.currentVolume = finalVolume;
          sound.inFade = false;
          if (sound.currentVolume <= 0) sound.howl.stop();
    
          if (sound.currentVolume != sound.targetVolume) {
            // console.log("Fade Chain", sound);
            this.startFadeToTargetVolume(sound);
          }
        }
      }]);
      return SoundPlayer;
    }(_component["default"]);
    
    exports["default"] = SoundPlayer;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39,"howler":50}],18:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _ajax = require("../utility/ajax");
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var Subscribe = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(Subscribe, _Component);
    
      var _super = _createSuper(Subscribe);
    
      function Subscribe(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, Subscribe);
        _this = _super.call(this, "subscribe");
        site.components.mount((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
    
      (0, _createClass2["default"])(Subscribe, [{
        key: "mount",
        value: function mount(site) {
          this.initSubscribeForms();
        }
      }, {
        key: "initSubscribeForms",
        value: function initSubscribeForms() {
          var subs = document.querySelectorAll("form.subscribe__form");
          subs.forEach(function (sub) {
            var success = sub.querySelector(".subscribe__success");
            var error = sub.querySelector(".subscribe__error");
            sub.addEventListener("submit", function (e) {
              e.preventDefault();
              sub.classList.add("loading");
              sub.classList.remove("error");
              var data = (0, _ajax.serializeObject)(sub);
              (0, _ajax.postAjax)('/actions/mailchimp-subscribe/audience/subscribe', data, function (response) {
                if (response.success) {
                  success.innerHTML = response.message;
                  sub.classList.add("success");
                } else {
                  error.innerHTML = response.message;
                  sub.classList.add("error");
                }
    
                sub.classList.remove("loading");
              }); // if (ga != undefined){
              //   ga("send", "event", "Form", "Submit", "Subscribe", "1");
              // }
            }); // let success = sub.querySelector(".subscribe__success");
            // let error = sub.querySelector(".subscribe__error");
            //
            // sub.addEventListener("submit", (e) => {
            //   e.preventDefault();
            //   sub.classList.add("loading");
            //   sub.classList.remove("error");
            //   let data = serializeObject(sub);
            //   console.log(data);
            //   postAjax('/mailchimp/send', data, (response) => {
            //     console.log(response);
            //     if (response.success){
            //       success.innerHTML = response.msg;
            //       sub.classList.add("success");
            //     } else {
            //       error.innerHTML = response.msg;
            //       sub.classList.add("error");
            //     }
            //     sub.classList.remove("loading");
            //   })
            //
            //   // if (ga != undefined){
            //   //   ga("send", "event", "Form", "Submit", "Subscribe", "1");
            //   // }
            //
            // })
          });
        }
      }]);
      return Subscribe;
    }(_component["default"]); //
    // import Component from "./component";
    // import {postAjax, serializeObject} from "../utility/ajax";
    //
    //
    // export default class Subscribe extends Component {
    //
    //   constructor(site){
    //     super("subscribe");
    //     site.components.attachToPages(["all"], this);
    //   }
    //
    //   mount(site){
    //     this.initSubscribeForms();
    //   }
    //
    //   initSubscribeForms(){
    //
    //     let subs = document.querySelectorAll("form.subscribe");
    //
    //     subs.forEach(sub => {
    //
    //       let success = sub.querySelector(".subscribe__success");
    //       let error = sub.querySelector(".subscribe__error");
    //
    //       sub.addEventListener("submit", (e) => {
    //         e.preventDefault();
    //         sub.classList.add("loading");
    //         sub.classList.remove("error");
    //         let data = serializeObject(sub);
    //         postAjax('/actions/mailchimp-subscribe/audience/subscribe', data, (response) => {
    //           if (response.success){
    //             success.innerHTML = response.message;
    //             sub.classList.add("success");
    //           } else {
    //             error.innerHTML = response.message;
    //             sub.classList.add("error");
    //           }
    //           sub.classList.remove("loading");
    //         })
    //
    //         // if (ga != undefined){
    //         //   ga("send", "event", "Form", "Submit", "Subscribe", "1");
    //         // }
    //
    //       })
    //
    //     })
    //
    //   }
    //
    //
    // }
    
    
    exports["default"] = Subscribe;
    
    },{"../utility/ajax":30,"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],19:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var TouchHover = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(TouchHover, _Component);
    
      var _super = _createSuper(TouchHover);
    
      function TouchHover(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, TouchHover);
        _this = _super.call(this, "touch-hover");
        site.components.mount((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
    
      (0, _createClass2["default"])(TouchHover, [{
        key: "mount",
        value: function mount(site) {
          if (this.isTouchDevice()) {
            window.addEventListener("click", function (e) {
              var ignore = e.target.closest(".ignore-touch-hover");
    
              if (!ignore) {
                var th = e.target.closest(".touch-hover:not(.touched)");
    
                if (th) {
                  if (!th.classList.contains("touch-hover-nonstop")) {
                    e.stopImmediatePropagation();
                  }
    
                  e.preventDefault(); // th.focus();
                }
              }
    
              var others = document.querySelectorAll(".touch-hover.touched");
    
              for (var i = 0; i < others.length; i++) {
                others[i].classList.remove("touched");
              }
    
              if (th) {
                th.classList.add("touched");
                return false;
              }
            }, true);
          }
        }
      }, {
        key: "isTouchDevice",
        value: function isTouchDevice() {
          return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }
      }]);
      return TouchHover;
    }(_component["default"]);
    
    exports["default"] = TouchHover;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],20:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _cookies = require("../utility/cookies");
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var UserState = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(UserState, _Component);
    
      var _super = _createSuper(UserState);
    
      function UserState(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, UserState);
        _this = _super.call(this, "userstate");
        _this.cookieName = "_itw_data";
        site.components.mount((0, _assertThisInitialized2["default"])(_this));
        window.getFlag = _this.getFlag.bind((0, _assertThisInitialized2["default"])(_this));
        site.setFlag = _this.setFlag.bind((0, _assertThisInitialized2["default"])(_this));
        site.checkVisited = _this.checkVisited.bind((0, _assertThisInitialized2["default"])(_this));
        site.setVisited = _this.setVisited.bind((0, _assertThisInitialized2["default"])(_this));
        window.initData = _this.initData.bind((0, _assertThisInitialized2["default"])(_this));
        window.checkFound = _this.checkFound.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
    
      (0, _createClass2["default"])(UserState, [{
        key: "mount",
        value: function mount(site) {
          // look for the cookie
          var cookieVal = (0, _cookies.getCookie)(this.cookieName); // console.log(cookieVal);
    
          if (!cookieVal) {
            this.initData();
          } else {
            this.parseData(cookieVal);
          }
        }
      }, {
        key: "initData",
        value: function initData() {
          this.data = {
            chapter: 0,
            found: [],
            visited: [],
            flags: {}
          };
          this.saveData();
        }
      }, {
        key: "parseData",
        value: function parseData(val) {
          var parsed = JSON.parse(val); // console.log(parsed);
    
          this.data = parsed;
          this.setChapterClass();
        }
      }, {
        key: "saveData",
        value: function saveData() {
          (0, _cookies.setCookie)(this.cookieName, JSON.stringify(this.data));
        }
      }, {
        key: "setFlag",
        value: function setFlag(name, val) {
          if (!this.data.flags) this.data.flags = {};
          this.data.flags[name] = val;
          this.saveData();
        }
      }, {
        key: "getFlag",
        value: function getFlag(name) {
          if (this.data.flags == undefined) return false;
          if (this.data.flags[name] == undefined) return false;
          return this.data.flags[name];
        }
      }, {
        key: "checkFound",
        value: function checkFound(id) {
          if (!this.data.found) this.data.found = [];
          return this.data.found.indexOf(id) >= 0;
        }
      }, {
        key: "setFound",
        value: function setFound(id) {
          if (!id) return;
          if (checkFound(id)) return;
          this.data.found.push(id);
          this.saveData();
          this.menu.calcProgress();
        }
      }, {
        key: "checkVisited",
        value: function checkVisited(slug) {
          if (!this.data.visited) this.data.visited = [];
          return this.data.visited.indexOf(slug) >= 0;
        }
      }, {
        key: "setVisited",
        value: function setVisited(slug) {
          if (!slug) return;
          if (this.checkVisited(slug)) return;
          this.data.visited.push(slug);
          this.saveData();
          this.menu.calcProgress();
        }
      }, {
        key: "setChapter",
        value: function setChapter(val) {
          this.data.chapter = val;
          this.setChapterClass();
          this.menu.calcProgress();
        }
      }, {
        key: "setChapterClass",
        value: function setChapterClass() {
          document.documentElement.classList.remove("ch1");
          document.documentElement.classList.remove("ch2");
          document.documentElement.classList.remove("ch3");
          document.documentElement.classList.remove("ch4");
          document.documentElement.classList.remove("ch5");
          document.documentElement.classList.remove("ch6");
    
          for (var i = 1; i <= this.data.chapter; i++) {
            document.documentElement.classList.add("ch" + i);
          }
    
          this.updateFavicon();
        }
      }, {
        key: "updateFavicon",
        value: function updateFavicon() {
          var _this2 = this;
    
          var regex = /\/ch[0-9]\//i;
          var favicons = document.querySelectorAll(".favicon-replace");
          favicons.forEach(function (item, i) {
            var href = item.getAttribute("href");
            href = href.replace(regex, "/ch" + _this2.data.chapter + "/");
            item.setAttribute("href", href);
          });
        }
      }]);
      return UserState;
    }(_component["default"]);
    
    exports["default"] = UserState;
    
    },{"../utility/cookies":31,"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],21:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
    
    var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
    
    var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
    
    var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    var YoutubeLoader = /*#__PURE__*/function (_Component) {
      (0, _inherits2["default"])(YoutubeLoader, _Component);
    
      var _super = _createSuper(YoutubeLoader);
    
      function YoutubeLoader(site) {
        var _this;
    
        (0, _classCallCheck2["default"])(this, YoutubeLoader);
        _this = _super.call(this, "youtube");
        _this.APILoaded = false;
        _this.mountWhenLoaded = null; // console.log("Youtube");
    
        if (window.YT != undefined && window.YT.loaded) {
          _this.onYoutubeAPILoaded(site);
        } else {
          window.onYouTubeIframeAPIReady = _this.onYoutubeAPILoaded.bind((0, _assertThisInitialized2["default"])(_this), site);
        }
    
        return _this;
      }
    
      (0, _createClass2["default"])(YoutubeLoader, [{
        key: "onYoutubeAPILoaded",
        value: function onYoutubeAPILoaded(site) {
          console.log("Youtube API Loaded");
          this.APILoaded = true;
          if (this.mountWhenLoaded != null) site.components.mount(this.mountWhenLoaded);
        }
      }]);
      return YoutubeLoader;
    }(_component["default"]);
    
    exports["default"] = YoutubeLoader;
    
    },{"./component":6,"@babel/runtime/helpers/assertThisInitialized":33,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/getPrototypeOf":36,"@babel/runtime/helpers/inherits":37,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/possibleConstructorReturn":39}],22:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _vanillaLazyload = _interopRequireDefault(require("vanilla-lazyload"));
    
    var BrowserController = /*#__PURE__*/function () {
      function BrowserController(site) {
        (0, _classCallCheck2["default"])(this, BrowserController);
        this.state = {
          scrollTop: this.getScroll(),
          scrollLag: this.getScroll(),
          scrollDiff: 0,
          lag: 15,
          toRender: [],
          toResize: [],
          resizeTimeout: null,
          mouse: {
            x: 0,
            y: 0,
            xLag: 0,
            yLag: 0,
            xSlowLag: 0,
            ySlowLag: 0,
            lag: 8,
            down: false
          },
          dpi: Math.min(2, window.devicePixelRatio || 1),
          t: 0,
          d: Date.now(),
          delta: 0,
          rate: 0,
          rem: 0,
          isTablet: false,
          isMobile: false,
          stillTimeout: null
        };
        this.site = site; // this.lazy = new LazyLoad({
        //   "threshold": 1200,
        //   //"cancel_on_exit": false,
        //   //"unobserve_entered": true,
        //   "callback_loaded": (el)=>{ el.parentNode.classList.add("loaded"); }
        //   // "use_native": true,
        // })
    
        if (site.edit) {// setInterval(() => {
          //   this.lazy.update()
          // }, 2000);
        }
    
        this.init();
      }
    
      (0, _createClass2["default"])(BrowserController, [{
        key: "init",
        value: function init() {
          var _this = this;
    
          this.resizeBaseWork(); //window.addEventListener("scroll", this.onScroll.bind(this));
    
          window.addEventListener('mousemove', this.onMouseMove.bind(this));
          window.addEventListener('mousedown', this.onMouseDown.bind(this));
          window.addEventListener('mouseup', this.onMouseUp.bind(this));
          window.addEventListener("mouseout", function (e) {
            e = e ? e : window.event;
            var from = e.relatedTarget || e.toElement;
    
            if (!from || from.nodeName == "HTML") {
              _this.onMouseUp();
            }
          });
          window.addEventListener('resize', this.onResize.bind(this));
          this.boundRender = this.renderLoop.bind(this);
          this.renderLoop();
        }
      }, {
        key: "initLazy",
        value: function initLazy() {// this.lazy = new LazyLoad({
          //   "threshold": 1200,
          //   //"cancel_on_exit": false,
          //   //"unobserve_entered": true,
          //   "callback_loaded": (el)=>{ el.parentNode.classList.add("loaded"); }
          //   // "use_native": true,
          // })
        }
      }, {
        key: "onScroll",
        value: function onScroll(e) {
          var s = this.getScroll();
          this.state.scrollDiff = s - this.state.scrollTop;
          this.state.scrollTop = s;
        }
      }, {
        key: "getScroll",
        value: function getScroll() {
          return window.pageYOffset || document.documentElement.scrollTop;
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(e) {
          this.state.mouse.x = e.clientX;
          this.state.mouse.y = e.clientY;
          document.documentElement.classList.remove("still");
          clearTimeout(this.state.stillTimeout);
          this.state.stillTimeout = setTimeout(this.onStill, 2000);
        }
      }, {
        key: "onStill",
        value: function onStill() {
          document.documentElement.classList.add("still");
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(e) {
          this.state.mouse.down = true;
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp(e) {
          this.state.mouse.down = false;
        }
      }, {
        key: "addToRenderLoop",
        value: function addToRenderLoop(callback) {
          this.state.toRender.push(callback);
        }
      }, {
        key: "renderBaseWork",
        value: function renderBaseWork() {
          this.onScroll();
          this.state.delta = Date.now() - this.state.d;
          this.state.t += this.state.delta;
          this.state.d = Date.now();
          this.state.rate = this.state.delta / 16;
          this.state.mouse.xLag += (this.state.mouse.x - this.state.mouse.xLag) / this.state.mouse.lag;
          this.state.mouse.yLag += (this.state.mouse.y - this.state.mouse.yLag) / this.state.mouse.lag;
          this.state.mouse.xSlowLag += (this.state.mouse.x - this.state.mouse.xSlowLag) / this.state.mouse.lag / 2;
          this.state.mouse.ySlowLag += (this.state.mouse.y - this.state.mouse.ySlowLag) / this.state.mouse.lag / 2;
          this.state.scrollLag += (this.state.scrollTop - this.state.scrollLag) / this.state.lag;
        }
      }, {
        key: "renderLoop",
        value: function renderLoop(e) {
          var _this2 = this;
    
          this.renderBaseWork();
          this.state.toRender.forEach(function (callback) {
            callback(_this2.state.rate);
          });
          requestAnimationFrame(this.boundRender);
        }
      }, {
        key: "addToResizeLoop",
        value: function addToResizeLoop(callback) {
          this.state.toResize.push(callback);
          callback();
        }
      }, {
        key: "resizeBaseWork",
        value: function resizeBaseWork() {
          this.state.rem = window.innerWidth / 100 * (1000 / 1680); // this.state.isTablet = (window.innerWidth <= 1000);
          // if(this.state.isTablet) this.state.rem = window.innerWidth/100 * (1000/834);
    
          this.state.isMobile = window.innerWidth <= 1000;
          if (this.state.isMobile) this.state.rem = window.innerWidth / 100 * (1000 / 375);
        }
      }, {
        key: "onResize",
        value: function onResize() {
          clearTimeout(this.state.resizeTimeout);
          this.state.resizeTimeout = setTimeout(this.resizeLoop.bind(this), 100);
        }
      }, {
        key: "resizeLoop",
        value: function resizeLoop(e) {
          this.resizeBaseWork();
          this.state.toResize.forEach(function (callback) {
            callback();
          });
        }
      }]);
      return BrowserController;
    }();
    
    exports["default"] = BrowserController;
    
    },{"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/interopRequireDefault":38,"vanilla-lazyload":78}],23:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initComponents;
    
    var _componentRegister = _interopRequireDefault(require("./componentRegister"));
    
    function initComponents(site) {
      site.components = {
        site: site,
        debug: site.debug,
        all: [],
        mounted: [],
        attachedToPages: []
      };
      window.components = site.components;
      site.components.getComponent = getComponent.bind(site.components);
      site.components.mount = mount.bind(site.components);
      site.components.unmount = unmount.bind(site.components);
      site.components.attachToPages = attachToPages.bind(site.components);
      site.components.mountPage = mountPage.bind(site.components);
      site.components.unmountPage = unmountPage.bind(site.components);
      (0, _componentRegister["default"])(site);
    }
    
    function getComponent(name) {
      return this.all.find(function (c) {
        return c.name == name;
      });
    }
    
    function mount(component) {
      this.mounted.push({
        component: component
      });
      component.mount(this.site);
    }
    
    function unmount(component) {//loop through and remove
    }
    
    function attachToPages(pages, component) {
      var _this = this;
    
      pages.forEach(function (path) {
        _this.attachedToPages.push({
          component: component,
          path: path
        });
      });
    }
    
    function mountPage(path) {
      var _this2 = this;
    
      this.attachedToPages.forEach(function (attach) {
        if (attach.path == path || attach.path == "all") {
          _this2.mounted.push({
            component: attach.component,
            trigger: {
              path: attach.path
            }
          });
    
          attach.component.mount(_this2.site);
        }
      });
    }
    
    function unmountPage(path) {
      var mount;
    
      for (var i = this.mounted.length - 1; i >= 0; i--) {
        mount = this.mounted[i];
    
        if (mount.trigger && (mount.trigger.path == path || mount.trigger.path == "all")) {
          mount.component.unmount(this.site);
          this.mounted.splice(i, 1);
        }
      }
    }
    
    },{"./componentRegister":24,"@babel/runtime/helpers/interopRequireDefault":38}],24:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = registerComponents;
    
    var _userState = _interopRequireDefault(require("../components/userState"));
    
    var _menu = _interopRequireDefault(require("../components/menu"));
    
    var _anima = _interopRequireDefault(require("../components/anima"));
    
    var _car = _interopRequireDefault(require("../components/car"));
    
    var _layeredImages = _interopRequireDefault(require("../components/layeredImages"));
    
    var _chapterPlayer = _interopRequireDefault(require("../components/chapterPlayer"));
    
    var _poppers = _interopRequireDefault(require("../components/poppers"));
    
    var _soundPlayer = _interopRequireDefault(require("../components/soundPlayer"));
    
    var _slowTV = _interopRequireDefault(require("../components/slowTV"));
    
    var _explore = _interopRequireDefault(require("../components/explore"));
    
    var _youtubeLoader = _interopRequireDefault(require("../components/youtubeLoader"));
    
    var _map = _interopRequireDefault(require("../components/map"));
    
    var _subscribe = _interopRequireDefault(require("../components/subscribe"));
    
    var _mural = _interopRequireDefault(require("../components/mural"));
    
    var _settings = _interopRequireDefault(require("../components/settings"));
    
    var _chapters = _interopRequireDefault(require("../components/chapters"));
    
    var _htmlClass = _interopRequireDefault(require("../components/html-class"));
    
    var _bestiary = _interopRequireDefault(require("../components/bestiary"));
    
    var _touchHover = _interopRequireDefault(require("../components/touch-hover"));
    
    var _intro = _interopRequireDefault(require("../components/intro"));
    
    function registerComponents(site) {
      site.components.all.push(new _settings["default"](site));
      site.components.all.push(new _userState["default"](site));
      site.components.all.push(new _menu["default"](site));
      site.components.all.push(new _youtubeLoader["default"](site));
      site.components.all.push(new _soundPlayer["default"](site));
      site.components.all.push(new _anima["default"](site));
      site.components.all.push(new _car["default"](site));
      site.components.all.push(new _poppers["default"](site));
      site.components.all.push(new _layeredImages["default"](site));
      site.components.all.push(new _chapterPlayer["default"](site));
      site.components.all.push(new _slowTV["default"](site));
      site.components.all.push(new _map["default"](site));
      site.components.all.push(new _explore["default"](site));
      site.components.all.push(new _subscribe["default"](site));
      site.components.all.push(new _mural["default"](site));
      site.components.all.push(new _chapters["default"](site));
      site.components.all.push(new _htmlClass["default"](site));
      site.components.all.push(new _bestiary["default"](site));
      site.components.all.push(new _touchHover["default"](site));
      site.components.all.push(new _intro["default"](site));
    }
    
    },{"../components/anima":1,"../components/bestiary":2,"../components/car":3,"../components/chapterPlayer":4,"../components/chapters":5,"../components/explore":7,"../components/html-class":8,"../components/intro":9,"../components/layeredImages":10,"../components/map":11,"../components/menu":12,"../components/mural":13,"../components/poppers":14,"../components/settings":15,"../components/slowTV":16,"../components/soundPlayer":17,"../components/subscribe":18,"../components/touch-hover":19,"../components/userState":20,"../components/youtubeLoader":21,"@babel/runtime/helpers/interopRequireDefault":38}],25:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
    
    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
    
    var _ajax = require("../utility/ajax");
    
    var LoadingController = /*#__PURE__*/function () {
      function LoadingController(site) {
        (0, _classCallCheck2["default"])(this, LoadingController);
        this.state = {
          waiting: false,
          waitingFor: [],
          waitingTimeout: null
        };
        this.assets = {};
      }
    
      (0, _createClass2["default"])(LoadingController, [{
        key: "preloadAssets",
        value: function preloadAssets(wrap) {
          var assets = wrap.querySelectorAll("[data-loader-asset]");
    
          for (var i = 0; i < assets.length; i++) {
            this.load(assets[i]);
          }
        }
      }, {
        key: "loadGlobals",
        value: function loadGlobals(callback) {
          (0, _ajax.getAjax)("/boiler/globals", function (response) {
            // console.log(response);
            var parser = new DOMParser();
            var doc = parser.parseFromString(response, "text/html");
            var globals = doc.querySelectorAll("[data-global]");
            globals.forEach(function (el) {
              var id = el.getAttribute("data-global");
              var domEl = document.querySelector("[data-global='" + id + "'");
              if (domEl) domEl.replaceWith(el);
            });
            callback();
          });
        }
      }, {
        key: "load",
        value: function load(el) {
          var asset = {
            src: el.getAttribute("data-loader-asset"),
            type: el.getAttribute("data-loader-type") || "image",
            quality: el.getAttribute("data-loader-quality") || "all",
            required: true,
            initiated: false,
            loaded: false,
            node: null
          };
          if (!asset.src || asset.src == "") return;
          if (this.assets[asset.src] != undefined) return; // dont double load.
    
          switch (asset.type) {
            case "image":
              asset.node = new Image();
              asset.node.onload = this.assetLoaded.bind(this, asset);
              asset.node.src = asset.src;
              asset.initiated = true;
              break;
          } // console.log(asset);
    
    
          this.assets[asset.src] = asset;
        }
      }, {
        key: "assetLoaded",
        value: function assetLoaded(asset) {
          asset.loaded = true;
          if (this.state.waiting) this.checkRequiredAssets();
        }
      }, {
        key: "checkPageForRequiredAssets",
        value: function checkPageForRequiredAssets() {
          var requiredWrap = document.getElementById("loader-required");
    
          if (requiredWrap) {
            this.state.waiting = true;
            this.state.waitingFor = [];
            document.documentElement.classList.add("loading-assets");
            var assets = requiredWrap.querySelectorAll("[data-loader-asset]");
    
            for (var i = 0; i < assets.length; i++) {
              var src = assets[i].getAttribute("data-loader-asset");
              if (src && src != "") this.state.waitingFor.push(src);
              this.load(assets[i]);
            } // console.log("loading required assets: " + this.state.waitingFor.length);
    
    
            this.checkRequiredAssets();
            this.timeoutRequiredAssets();
          }
        }
      }, {
        key: "checkRequiredAssets",
        value: function checkRequiredAssets() {
          var _this = this;
    
          if (!this.state.waiting) return;
          var allLoaded = true;
          this.state.waitingFor.forEach(function (src, i) {
            if (_this.assets[src] && !_this.assets[src].loaded) allLoaded = false;
          });
    
          if (allLoaded) {
            this.requiredAssetsLoaded();
          }
        }
      }, {
        key: "timeoutRequiredAssets",
        value: function timeoutRequiredAssets() {// this.state.waitingTimeout = setTimeout(this.requiredAssetsLoaded.bind(this), 5000);
        }
      }, {
        key: "requiredAssetsLoaded",
        value: function requiredAssetsLoaded() {
          if (!this.state.waiting) return;
          this.state.waiting = false;
          this.state.waitingFor = [];
          clearTimeout(this.state.waitingTimeout);
          document.documentElement.classList.remove("loading-assets"); // console.log("required assets loaded");
        }
      }]);
      return LoadingController;
    }();
    
    exports["default"] = LoadingController;
    
    },{"../utility/ajax":30,"@babel/runtime/helpers/classCallCheck":34,"@babel/runtime/helpers/createClass":35,"@babel/runtime/helpers/interopRequireDefault":38}],26:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initNavigation;
    
    var _swupPage = _interopRequireDefault(require("../utility/swup-page"));
    
    function initNavigation(site) {
      site.navigation = {
        site: site,
        debug: site.debug,
        callbacks: [],
        exitCallbacks: []
      };
      site.navigation.enter = enter.bind(site.navigation);
      site.navigation.exit = exit.bind(site.navigation);
      site.navigation.runExitCallbacks = runExitCallbacks.bind(site.navigation);
      site.navigation.runCallbacks = runCallbacks.bind(site.navigation);
      site.navigation.showPreloader = showPreloader.bind(site.navigation);
      site.navigation.navigateTo = navigateTo.bind(site.navigation);
      site.navigation.registerNavigationCallback = registerNavigationCallback.bind(site.navigation);
      site.navigation.registerExitCallback = registerExitCallback.bind(site.navigation);
      if (!site.edit) site.navigation.swup = (0, _swupPage["default"])(site.navigation);
    }
    
    function exit() {
      //window.scrollTo(0, 0);
      // this.site.browser.lazy.destroy();
      this.site.components.unmountPage(this.path);
      this.runExitCallbacks();
    }
    
    function runExitCallbacks() {
      this.exitCallbacks.forEach(function (callback, i) {
        if (callback) callback();
      });
    }
    
    function runCallbacks() {
      this.callbacks.forEach(function (callback, i) {
        if (callback) callback();
      });
    
      if (this.callback) {
        this.callback();
        this.callback = null;
      }
    }
    
    function enter(runCallbacks) {
      this.site.loader.checkPageForRequiredAssets();
      window.scrollTo(0, 0);
      if (runCallbacks) this.runCallbacks();
      this.site.browser.state.scrollTop = 0;
      this.site.browser.state.scrollLag = 0;
      this.path = parseLocation(); //console.log("enter", this.path);
      //this.site.browser.lazy.update();
      // this.site.browser.initLazy();
      // setTimeout(() => this.site.browser.lazy.loadAll(), 1000);
    
      this.site.components.mountPage(this.path);
    }
    
    function parseLocation(path) {
      if (!path) path = window.location.pathname;
      if (path == "/") return "home";
      if (/books/.test(path)) return "chapters";
      if (/play/.test(path)) return "video";
      if (/explore/.test(path)) return "explore";
      if (/bestiary/.test(path)) return "bestiary";
      if (/slow-tv/.test(path)) return "slow-tv";
      if (/the-mural/.test(path)) return "mural";
      if (/policies/.test(path)) return "policy";
      return "default";
    }
    
    function navigateTo(url) {
      var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      if (callback) this.callback = callback;
      this.swup.loadPage({
        url: url,
        method: "GET",
        customTransition: transition
      });
    }
    
    function registerExitCallback(callback) {
      this.exitCallbacks.push(callback);
    }
    
    function registerNavigationCallback(callback) {
      this.callbacks.push(callback);
    }
    
    function showPreloader(site) {
      site.navigation.enter(false);
      var loading = document.getElementById("loading");
      var number = document.getElementById("loading-number");
      var bar = document.getElementById("loading-bar");
    
      if (site.debug || site.edit) {
        // go straight to page
        document.documentElement.classList.add("loading-done");
        document.documentElement.classList.remove("is-animating");
        loading.remove();
        site.navigation.runCallbacks();
      } else {
        var loadingFinished = function loadingFinished() {
          document.documentElement.classList.remove("is-animating");
          site.navigation.runCallbacks();
          setTimeout(function () {
            if (location.pathname == "/") {
              document.documentElement.classList.add("loading-intro");
              setTimeout(function () {
                document.documentElement.classList.add("loading-done");
              }, 10000);
            } else {
              document.documentElement.classList.add("loading-done");
              setTimeout(function () {
                loading.remove();
              }, 2000);
            }
          }, 500);
        };
    
        var progress = 0;
        var interval = setInterval(function () {
          progress = Math.min(progress + Math.random() * 10, 100);
          number.innerHTML = progress.toFixed(0);
          bar.style.transform = "scaleX(" + progress / 100 + ")";
    
          if (progress >= 100) {
            clearInterval(interval);
            loadingFinished();
          }
        }, 50); // how to actually load, and what to load..?
        // how to prevent short lag while loading gloabls at start..?
      }
    }
    
    },{"../utility/swup-page":32,"@babel/runtime/helpers/interopRequireDefault":38}],27:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initSite;
    
    var _browserController = _interopRequireDefault(require("./browserController"));
    
    var _loadingController = _interopRequireDefault(require("./loadingController"));
    
    var _navigationController = _interopRequireDefault(require("./navigationController"));
    
    var _componentController = _interopRequireDefault(require("./componentController"));
    
    function initSite() {
      var site = {
        debug: document.documentElement.classList.contains("debug"),
        edit: window.location !== window.parent.location
      }; // site.debug = false;
    
      site.browser = new _browserController["default"](site);
      site.loader = new _loadingController["default"](site);
    
      var init = function init() {
        (0, _navigationController["default"])(site);
        (0, _componentController["default"])(site);
    
        var portraitWait = function portraitWait() {
          site.navigation.showPreloader(site);
          window.removeEventListener("orientationchange", portraitWait);
        }; // pause preloader if in portait;
    
    
        if (site.browser.state.isMobile && window.matchMedia("(orientation: portrait)").matches) {
          console.log("portrait wait");
          window.addEventListener("orientationchange", portraitWait);
        } else {
          site.navigation.showPreloader(site);
        }
      };
    
      site.loader.loadGlobals(init);
    }
    
    },{"./browserController":22,"./componentController":23,"./loadingController":25,"./navigationController":26,"@babel/runtime/helpers/interopRequireDefault":38}],28:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _siteController = _interopRequireDefault(require("./core/siteController"));
    
    window.addEventListener('DOMContentLoaded', _siteController["default"]);
    
    },{"./core/siteController":27,"@babel/runtime/helpers/interopRequireDefault":38}],29:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addConfirmListeners = addConfirmListeners;
    
    function addConfirmListeners(el, callback, newFocus) {
      if (!el) return;
      el.addEventListener("click", callback);
      el.addEventListener("keydown", function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          callback();
    
          if (newFocus) {
            e.preventDefault();
            newFocus.focus();
          }
        }
      });
    }
    
    },{}],30:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getAjax = getAjax;
    exports.postAjax = postAjax;
    exports.serializeArray = serializeArray;
    exports.serializeObject = serializeObject;
    
    var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
    
    function getAjax(url, success, error) {
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
      xhr.open('GET', url);
    
      xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
      };
    
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send();
      return xhr;
    }
    
    function postAjax(url, data, success, error) {
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open('POST', url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");
    
      xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) {
          success(JSON.parse(xhr.responseText));
        }
      };
    
      var params = JSON.stringify(data);
      xhr.send(params);
      return xhr;
    }
    
    function serializeArray(form) {
      var field, l;
      var s = {};
    
      if ((0, _typeof2["default"])(form) == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;
    
        for (var i = 0; i < len; i++) {
          field = form.elements[i];
    
          if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
            if (field.type == 'select-multiple') {
              l = form.elements[i].options.length;
    
              for (j = 0; j < l; j++) {
                if (field.options[j].selected) s[field.name] = field.options[j].value;
              }
            } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
              s[field.name] = field.value;
            }
          }
        }
      }
    
      return s;
    }
    
    function serializeObject(form) {
      var field,
          l,
          s = [];
    
      if ((0, _typeof2["default"])(form) == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;
    
        for (var i = 0; i < len; i++) {
          field = form.elements[i];
    
          if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
            if (field.type == 'select-multiple') {
              l = form.elements[i].options.length;
    
              for (j = 0; j < l; j++) {
                if (field.options[j].selected) s[s.length] = {
                  name: field.name,
                  value: field.options[j].value
                };
              }
            } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
              s[s.length] = {
                name: field.name,
                value: field.value
              };
            }
          }
        }
      }
    
      var indexed_array = {};
      s.forEach(function (n) {
        indexed_array[n['name']] = n['value'];
      });
      return indexed_array;
    }
    
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41}],31:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.deleteCookie = deleteCookie;
    exports.getCookie = getCookie;
    exports.setCookie = setCookie;
    
    function getCookie(name) {
      var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    }
    
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function deleteCookie(name) {
      setCookie(name, '', -1);
    }
    
    },{}],32:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initSwup;
    
    var _swup = _interopRequireDefault(require("swup"));
    
    var _preloadPlugin = _interopRequireDefault(require("@swup/preload-plugin"));
    
    var _scriptsPlugin = _interopRequireDefault(require("@swup/scripts-plugin"));
    
    var _scrollPlugin = _interopRequireDefault(require("@swup/scroll-plugin"));
    
    var _gaPlugin = _interopRequireDefault(require("@swup/ga-plugin"));
    
    function initSwup(navigation) {
      var swup = null;
      var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
      var isEdge = /Edge/.test(navigator.userAgent);
    
      if (!isIE11 && !isEdge) {
        swup = new _swup["default"]({
          linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]):not([data-popup-url]), a[href^="/"]:not([data-no-swup]):not([data-popup-url]), a[href^="#"]:not([data-no-swup]):not([data-popup-url])',
          containers: ['#main'],
          plugins: [// new SwupPreloadPlugin(),
          new _scriptsPlugin["default"]({
            optin: true
          }), new _gaPlugin["default"](), new _scrollPlugin["default"]({
            doScrollingRightAway: false,
            animateScroll: true,
            scrollFriction: 0.1,
            scrollAcceleration: 0.1
          })]
        });
        document.addEventListener('swup:willReplaceContent', navigation.exit.bind(navigation));
        document.addEventListener('swup:contentReplaced', navigation.enter.bind(navigation));
      } else {
        document.querySelectorAll("a").forEach(function (el) {
          var href = el.getAttribute("href");
    
          if (href && href != "#" && href != "" && !/mailto/.test(href) && !/tel/.test(href) && el.getAttribute("target") != "_blank") {
            el.addEventListener("click", function () {
              document.documentElement.classList.add("is-animating");
            });
          }
        });
      }
    
      return swup;
    }
    
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@swup/ga-plugin":42,"@swup/preload-plugin":44,"@swup/scripts-plugin":45,"@swup/scroll-plugin":46,"swup":64}],33:[function(require,module,exports){
    "use strict";
    
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return self;
    }
    
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{}],34:[function(require,module,exports){
    "use strict";
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{}],35:[function(require,module,exports){
    "use strict";
    
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{}],36:[function(require,module,exports){
    "use strict";
    
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _getPrototypeOf(o);
    }
    
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{}],37:[function(require,module,exports){
    "use strict";
    
    var setPrototypeOf = require("./setPrototypeOf.js");
    
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass) setPrototypeOf(subClass, superClass);
    }
    
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{"./setPrototypeOf.js":40}],38:[function(require,module,exports){
    "use strict";
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{}],39:[function(require,module,exports){
    "use strict";
    
    var _typeof = require("./typeof.js")["default"];
    
    var assertThisInitialized = require("./assertThisInitialized.js");
    
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
    
      return assertThisInitialized(self);
    }
    
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{"./assertThisInitialized.js":33,"./typeof.js":41}],40:[function(require,module,exports){
    "use strict";
    
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _setPrototypeOf(o, p);
    }
    
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{}],41:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) {
      "@babel/helpers - typeof";
    
      return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
    }
    
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    },{}],42:[function(require,module,exports){
    'use strict';
    
    var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    var _plugin = require('@swup/plugin');
    
    var _plugin2 = _interopRequireDefault(_plugin);
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
    }
    
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    
    var GaPlugin = function (_Plugin) {
      _inherits(GaPlugin, _Plugin);
    
      function GaPlugin(options) {
        _classCallCheck(this, GaPlugin);
    
        var _this = _possibleConstructorReturn(this, (GaPlugin.__proto__ || Object.getPrototypeOf(GaPlugin)).call(this));
    
        _this.name = 'GaPlugin';
        var defaultOptions = {
          gaMeasurementId: null
        };
        _this.options = _extends({}, defaultOptions, options);
        return _this;
      }
    
      _createClass(GaPlugin, [{
        key: 'mount',
        value: function mount() {
          var _this2 = this;
    
          this.swup.on('contentReplaced', function (event) {
            if (typeof gtag === 'function') {
              var title = document.title;
              var url = window.location.pathname + window.location.search;
              var gaId = _this2.options.gaMeasurementId;
    
              if (!gaId) {
                throw new Error('gaMeasurementId option is required for gtag.');
              }
    
              window.gtag('config', gaId, {
                page_title: title,
                page_path: url
              });
    
              _this2.swup.log('GTAG pageview (url \'' + url + '\').');
            } else if (typeof window.ga === 'function') {
              var _title = document.title;
    
              var _url = window.location.pathname + window.location.search;
    
              window.ga('set', 'title', _title);
              window.ga('set', 'page', _url);
              window.ga('send', 'pageview');
    
              _this2.swup.log('GA pageview (url \'' + _url + '\').');
            } else {
              console.warn("window.gtag and window.ga don't exists.");
            }
          });
        }
      }]);
    
      return GaPlugin;
    }(_plugin2["default"]);
    
    exports["default"] = GaPlugin;
    
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41,"@swup/plugin":43}],43:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Plugin = function () {
      function Plugin() {
        _classCallCheck(this, Plugin);
    
        this.isSwupPlugin = true;
      }
    
      _createClass(Plugin, [{
        key: "mount",
        value: function mount() {// this is mount method rewritten by class extending
          // and is executed when swup is enabled with plugin
        }
      }, {
        key: "unmount",
        value: function unmount() {// this is unmount method rewritten by class extending
          // and is executed when swup with plugin is disabled
        }
      }, {
        key: "_beforeMount",
        value: function _beforeMount() {// here for any future hidden auto init
        }
      }, {
        key: "_afterUnmount",
        value: function _afterUnmount() {} // here for any future hidden auto-cleanup
        // this is here so we can tell if plugin was created by extending this class
    
      }]);
    
      return Plugin;
    }();
    
    exports["default"] = Plugin;
    
    },{}],44:[function(require,module,exports){
    'use strict';
    
    var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    var _plugin = require('@swup/plugin');
    
    var _plugin2 = _interopRequireDefault(_plugin);
    
    var _delegate = require('delegate');
    
    var _delegate2 = _interopRequireDefault(_delegate);
    
    var _utils = require('swup/lib/utils');
    
    var _helpers = require('swup/lib/helpers');
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
    }
    
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    
    var PreloadPlugin = function (_Plugin) {
      _inherits(PreloadPlugin, _Plugin);
    
      function PreloadPlugin() {
        var _ref;
    
        var _temp, _this, _ret;
    
        _classCallCheck(this, PreloadPlugin);
    
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
    
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PreloadPlugin.__proto__ || Object.getPrototypeOf(PreloadPlugin)).call.apply(_ref, [this].concat(args))), _this), _this.name = "PreloadPlugin", _this.onContentReplaced = function () {
          _this.swup.preloadPages();
        }, _this.onMouseover = function (event) {
          var swup = _this.swup;
          swup.triggerEvent('hoverLink', event);
          var link = new _helpers.Link(event.delegateTarget);
    
          if (link.getAddress() !== (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress()) && swup.preloadPromise == null) {
            swup.preloadPromise = swup.preloadPage(link.getAddress());
            swup.preloadPromise.route = link.getAddress();
            swup.preloadPromise["finally"](function () {
              swup.preloadPromise = null;
            });
          }
        }, _this.preloadPage = function (pathname) {
          var swup = _this.swup;
          var link = new _helpers.Link(pathname);
          return new Promise(function (resolve, reject) {
            if (link.getAddress() != (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress())) {
              (0, _helpers.fetch)({
                url: link.getAddress(),
                headers: swup.options.requestHeaders
              }, function (response) {
                if (response.status === 500) {
                  swup.triggerEvent('serverError');
                  reject();
                } else {
                  // get json data
                  var page = swup.getPageData(response);
    
                  if (page != null) {
                    page.url = link.getAddress();
                    swup.cache.cacheUrl(page, swup.options.debugMode);
                    swup.triggerEvent('pagePreloaded');
                  } else {
                    reject(link.getAddress());
                    return;
                  }
    
                  resolve(swup.cache.getPage(link.getAddress()));
                }
              });
            } else {
              resolve(swup.cache.getPage(link.getAddress()));
            }
          });
        }, _this.preloadPages = function () {
          (0, _utils.queryAll)('[data-swup-preload]').forEach(function (element) {
            _this.swup.preloadPage(element.href);
          });
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
    
      _createClass(PreloadPlugin, [{
        key: 'mount',
        value: function mount() {
          var swup = this.swup;
          swup._handlers.pagePreloaded = [];
          swup._handlers.hoverLink = [];
          swup.preloadPage = this.preloadPage;
          swup.preloadPages = this.preloadPages; // register mouseover handler
    
          swup.delegatedListeners.mouseover = (0, _delegate2["default"])(document.body, swup.options.linkSelector, 'mouseover', this.onMouseover.bind(this)); // initial preload of page form links with [data-swup-preload]
    
          swup.preloadPages(); // do the same on every content replace
    
          swup.on('contentReplaced', this.onContentReplaced);
        }
      }, {
        key: 'unmount',
        value: function unmount() {
          var swup = this.swup;
          swup._handlers.pagePreloaded = null;
          swup._handlers.hoverLink = null;
          swup.preloadPage = null;
          swup.preloadPages = null;
          swup.delegatedListeners.mouseover.destroy();
          swup.off('contentReplaced', this.onContentReplaced);
        }
      }]);
    
      return PreloadPlugin;
    }(_plugin2["default"]);
    
    exports["default"] = PreloadPlugin;
    
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41,"@swup/plugin":43,"delegate":49,"swup/lib/helpers":61,"swup/lib/utils":75}],45:[function(require,module,exports){
    'use strict';
    
    var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    var _plugin = require('@swup/plugin');
    
    var _plugin2 = _interopRequireDefault(_plugin);
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
    }
    
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    
    var arrayify = function arrayify(list) {
      return Array.prototype.slice.call(list);
    };
    
    var ScriptsPlugin = function (_Plugin) {
      _inherits(ScriptsPlugin, _Plugin);
    
      function ScriptsPlugin(options) {
        _classCallCheck(this, ScriptsPlugin);
    
        var _this = _possibleConstructorReturn(this, (ScriptsPlugin.__proto__ || Object.getPrototypeOf(ScriptsPlugin)).call(this));
    
        _this.name = 'ScriptsPlugin';
    
        _this.runScripts = function () {
          var scope = _this.options.head && _this.options.body ? document : _this.options.head ? document.head : document.body;
          var selector = _this.options.optin ? 'script[data-swup-reload-script]' : 'script:not([data-swup-ignore-script])';
          var scripts = arrayify(scope.querySelectorAll(selector));
          scripts.forEach(function (script) {
            return _this.runScript(script);
          });
    
          _this.swup.log('Executed ' + scripts.length + ' scripts.');
        };
    
        _this.runScript = function (originalElement) {
          var element = document.createElement('script');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;
    
          try {
            for (var _iterator = arrayify(originalElement.attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref2 = _step.value;
              var name = _ref2.name,
                  value = _ref2.value;
              element.setAttribute(name, value);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
    
          element.textContent = originalElement.textContent;
          element.setAttribute('async', 'false');
          originalElement.replaceWith(element);
          return element;
        };
    
        var defaultOptions = {
          head: true,
          body: true,
          optin: false
        };
        _this.options = _extends({}, defaultOptions, options);
        return _this;
      }
    
      _createClass(ScriptsPlugin, [{
        key: 'mount',
        value: function mount() {
          this.swup.on('contentReplaced', this.runScripts);
        }
      }, {
        key: 'unmount',
        value: function unmount() {
          this.swup.off('contentReplaced', this.runScripts);
        }
      }]);
    
      return ScriptsPlugin;
    }(_plugin2["default"]);
    
    exports["default"] = ScriptsPlugin;
    
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41,"@swup/plugin":43}],46:[function(require,module,exports){
    'use strict';
    
    var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _typeof3 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
      return (0, _typeof3["default"])(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
    };
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    var _plugin = require('@swup/plugin');
    
    var _plugin2 = _interopRequireDefault(_plugin);
    
    var _scrl = require('scrl');
    
    var _scrl2 = _interopRequireDefault(_scrl);
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && ((0, _typeof3["default"])(call) === "object" || typeof call === "function") ? call : self;
    }
    
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof3["default"])(superClass));
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    
    var ScrollPlugin = function (_Plugin) {
      _inherits(ScrollPlugin, _Plugin);
    
      function ScrollPlugin(options) {
        _classCallCheck(this, ScrollPlugin);
    
        var _this = _possibleConstructorReturn(this, (ScrollPlugin.__proto__ || Object.getPrototypeOf(ScrollPlugin)).call(this));
    
        _this.name = "ScrollPlugin";
    
        _this.getOffset = function () {
          var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    
          switch (_typeof(_this.options.offset)) {
            case 'number':
              return _this.options.offset;
    
            case 'function':
              return parseInt(_this.options.offset(element), 10);
    
            default:
              return parseInt(_this.options.offset, 10);
          }
        };
    
        _this.onSamePage = function () {
          _this.swup.scrollTo(0);
        };
    
        _this.onSamePageWithHash = function (event) {
          var link = event.delegateTarget;
          var element = document.querySelector(link.hash);
    
          var top = element.getBoundingClientRect().top + window.pageYOffset - _this.getOffset(element);
    
          _this.swup.scrollTo(top);
        };
    
        _this.onTransitionStart = function (popstate) {
          if (_this.options.doScrollingRightAway && !_this.swup.scrollToElement) {
            _this.doScrolling(popstate);
          }
        };
    
        _this.onContentReplaced = function (popstate) {
          if (!_this.options.doScrollingRightAway || _this.swup.scrollToElement) {
            _this.doScrolling(popstate);
          }
        };
    
        _this.doScrolling = function (popstate) {
          var swup = _this.swup;
    
          if (!popstate || swup.options.animateHistoryBrowsing) {
            if (swup.scrollToElement != null) {
              var element = document.querySelector(swup.scrollToElement);
    
              if (element != null) {
                var top = element.getBoundingClientRect().top + window.pageYOffset - _this.getOffset(element);
    
                swup.scrollTo(top);
              } else {
                console.warn('Element ' + swup.scrollToElement + ' not found');
              }
    
              swup.scrollToElement = null;
            } else {
              swup.scrollTo(0);
            }
          }
        };
    
        var defaultOptions = {
          doScrollingRightAway: false,
          animateScroll: true,
          scrollFriction: 0.3,
          scrollAcceleration: 0.04,
          offset: 0
        };
        _this.options = _extends({}, defaultOptions, options);
        return _this;
      }
    
      _createClass(ScrollPlugin, [{
        key: 'mount',
        value: function mount() {
          var _this2 = this;
    
          var swup = this.swup; // add empty handlers array for submitForm event
    
          swup._handlers.scrollDone = [];
          swup._handlers.scrollStart = [];
          this.scrl = new _scrl2["default"]({
            onStart: function onStart() {
              return swup.triggerEvent('scrollStart');
            },
            onEnd: function onEnd() {
              return swup.triggerEvent('scrollDone');
            },
            onCancel: function onCancel() {
              return swup.triggerEvent('scrollDone');
            },
            friction: this.options.scrollFriction,
            acceleration: this.options.scrollAcceleration
          }); // set scrollTo method of swup and animate based on current animateScroll option
    
          swup.scrollTo = function (offset) {
            if (_this2.options.animateScroll) {
              _this2.scrl.scrollTo(offset);
            } else {
              swup.triggerEvent('scrollStart');
              window.scrollTo(0, offset);
              swup.triggerEvent('scrollDone');
            }
          }; // disable browser scroll control on popstates when
          // animateHistoryBrowsing option is enabled in swup
    
    
          if (swup.options.animateHistoryBrowsing) {
            window.history.scrollRestoration = 'manual';
          } // scroll to the top of the page
    
    
          swup.on('samePage', this.onSamePage); // scroll to referenced element on the same page
    
          swup.on('samePageWithHash', this.onSamePageWithHash); // scroll to the referenced element
    
          swup.on('transitionStart', this.onTransitionStart); // scroll to the referenced element when it's in the page (after render)
    
          swup.on('contentReplaced', this.onContentReplaced);
        }
      }, {
        key: 'unmount',
        value: function unmount() {
          this.swup.scrollTo = null;
          delete this.scrl;
          this.scrl = null;
          this.swup.off('samePage', this.onSamePage);
          this.swup.off('samePageWithHash', this.onSamePageWithHash);
          this.swup.off('transitionStart', this.onTransitionStart);
          this.swup.off('contentReplaced', this.onContentReplaced);
          this.swup._handlers.scrollDone = null;
          this.swup._handlers.scrollStart = null;
          window.history.scrollRestoration = 'auto';
        }
      }]);
    
      return ScrollPlugin;
    }(_plugin2["default"]);
    
    exports["default"] = ScrollPlugin;
    
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41,"@swup/plugin":43,"scrl":53}],47:[function(require,module,exports){
    "use strict";
    
    /**
     * https://github.com/gre/bezier-easing
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 - 2015 – MIT License
     */
    // These values are established by empiricism with tests (tradeoff: performance VS precision)
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    var float32ArraySupported = typeof Float32Array === 'function';
    
    function A(aA1, aA2) {
      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
    
    function B(aA1, aA2) {
      return 3.0 * aA2 - 6.0 * aA1;
    }
    
    function C(aA1) {
      return 3.0 * aA1;
    } // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
    
    
    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    } // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
    
    
    function getSlope(aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }
    
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX,
          currentT,
          i = 0;
    
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
    
        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    
      return currentT;
    }
    
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
    
        if (currentSlope === 0.0) {
          return aGuessT;
        }
    
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
    
      return aGuessT;
    }
    
    function LinearEasing(x) {
      return x;
    }
    
    module.exports = function bezier(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
      }
    
      if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
      } // Precompute samples table
    
    
      var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    
      function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
    
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
    
        --currentSample; // Interpolate to provide an initial guess for t
    
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
    
        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
    
      return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) {
          return 0;
        }
    
        if (x === 1) {
          return 1;
        }
    
        return calcBezier(getTForX(x), mY1, mY2);
      };
    };
    
    },{}],48:[function(require,module,exports){
    "use strict";
    
    var DOCUMENT_NODE_TYPE = 9;
    /**
     * A polyfill for Element.matches()
     */
    
    if (typeof Element !== 'undefined' && !Element.prototype.matches) {
      var proto = Element.prototype;
      proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
    }
    /**
     * Finds the closest parent that matches a selector.
     *
     * @param {Element} element
     * @param {String} selector
     * @return {Function}
     */
    
    
    function closest(element, selector) {
      while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' && element.matches(selector)) {
          return element;
        }
    
        element = element.parentNode;
      }
    }
    
    module.exports = closest;
    
    },{}],49:[function(require,module,exports){
    "use strict";
    
    var closest = require('./closest');
    /**
     * Delegates event to a selector.
     *
     * @param {Element} element
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} useCapture
     * @return {Object}
     */
    
    
    function _delegate(element, selector, type, callback, useCapture) {
      var listenerFn = listener.apply(this, arguments);
      element.addEventListener(type, listenerFn, useCapture);
      return {
        destroy: function destroy() {
          element.removeEventListener(type, listenerFn, useCapture);
        }
      };
    }
    /**
     * Delegates event to a selector.
     *
     * @param {Element|String|Array} [elements]
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} useCapture
     * @return {Object}
     */
    
    
    function delegate(elements, selector, type, callback, useCapture) {
      // Handle the regular Element usage
      if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
      } // Handle Element-less usage, it defaults to global delegation
    
    
      if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
      } // Handle Selector-based usage
    
    
      if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
      } // Handle Array-like based usage
    
    
      return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
      });
    }
    /**
     * Finds closest match and invokes callback.
     *
     * @param {Element} element
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @return {Function}
     */
    
    
    function listener(element, selector, type, callback) {
      return function (e) {
        e.delegateTarget = closest(e.target, selector);
    
        if (e.delegateTarget) {
          callback.call(element, e);
        }
      };
    }
    
    module.exports = delegate;
    
    },{"./closest":48}],50:[function(require,module,exports){
    (function (global){(function (){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
    
    /*!
     *  howler.js v2.2.3
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
    (function () {
      'use strict';
      /** Global Methods **/
    
      /***************************************************************************/
    
      /**
       * Create the global controller. All contained methods and properties apply
       * to all sounds that are currently playing or will be in the future.
       */
    
      var HowlerGlobal = function HowlerGlobal() {
        this.init();
      };
    
      HowlerGlobal.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function init() {
          var self = this || Howler; // Create a global ID counter.
    
          self._counter = 1000; // Pool of unlocked HTML5 Audio objects.
    
          self._html5AudioPool = [];
          self.html5PoolSize = 10; // Internal properties.
    
          self._codecs = {};
          self._howls = [];
          self._muted = false;
          self._volume = 1;
          self._canPlayEvent = 'canplaythrough';
          self._navigator = typeof window !== 'undefined' && window.navigator ? window.navigator : null; // Public properties.
    
          self.masterGain = null;
          self.noAudio = false;
          self.usingWebAudio = true;
          self.autoSuspend = true;
          self.ctx = null; // Set to false to disable the auto audio unlocker.
    
          self.autoUnlock = true; // Setup the various state values for global tracking.
    
          self._setup();
    
          return self;
        },
    
        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function volume(vol) {
          var self = this || Howler;
          vol = parseFloat(vol); // If we don't have an AudioContext created yet, run the setup.
    
          if (!self.ctx) {
            setupAudioContext();
          }
    
          if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
            self._volume = vol; // Don't update any of the nodes if we are muted.
    
            if (self._muted) {
              return self;
            } // When using Web Audio, we just need to adjust the master gain.
    
    
            if (self.usingWebAudio) {
              self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } // Loop through and change volume for all HTML5 audio nodes.
    
    
            for (var i = 0; i < self._howls.length; i++) {
              if (!self._howls[i]._webAudio) {
                // Get all of the sounds in this Howl group.
                var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and change the volumes.
    
    
                for (var j = 0; j < ids.length; j++) {
                  var sound = self._howls[i]._soundById(ids[j]);
    
                  if (sound && sound._node) {
                    sound._node.volume = sound._volume * vol;
                  }
                }
              }
            }
    
            return self;
          }
    
          return self._volume;
        },
    
        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function mute(muted) {
          var self = this || Howler; // If we don't have an AudioContext created yet, run the setup.
    
          if (!self.ctx) {
            setupAudioContext();
          }
    
          self._muted = muted; // With Web Audio, we just need to mute the master gain.
    
          if (self.usingWebAudio) {
            self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
          } // Loop through and mute all HTML5 Audio nodes.
    
    
          for (var i = 0; i < self._howls.length; i++) {
            if (!self._howls[i]._webAudio) {
              // Get all of the sounds in this Howl group.
              var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and mark the audio node as muted.
    
    
              for (var j = 0; j < ids.length; j++) {
                var sound = self._howls[i]._soundById(ids[j]);
    
                if (sound && sound._node) {
                  sound._node.muted = muted ? true : sound._muted;
                }
              }
            }
          }
    
          return self;
        },
    
        /**
         * Handle stopping all sounds globally.
         */
        stop: function stop() {
          var self = this || Howler; // Loop through all Howls and stop them.
    
          for (var i = 0; i < self._howls.length; i++) {
            self._howls[i].stop();
          }
    
          return self;
        },
    
        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function unload() {
          var self = this || Howler;
    
          for (var i = self._howls.length - 1; i >= 0; i--) {
            self._howls[i].unload();
          } // Create a new AudioContext to make sure it is fully reset.
    
    
          if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
            self.ctx.close();
            self.ctx = null;
            setupAudioContext();
          }
    
          return self;
        },
    
        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function codecs(ext) {
          return (this || Howler)._codecs[ext.replace(/^x-/, '')];
        },
    
        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function _setup() {
          var self = this || Howler; // Keeps track of the suspend/resume state of the AudioContext.
    
          self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended'; // Automatically begin the 30-second suspend process
    
          self._autoSuspend(); // Check if audio is available.
    
    
          if (!self.usingWebAudio) {
            // No audio is available on this system if noAudio is set to true.
            if (typeof Audio !== 'undefined') {
              try {
                var test = new Audio(); // Check if the canplaythrough event is available.
    
                if (typeof test.oncanplaythrough === 'undefined') {
                  self._canPlayEvent = 'canplay';
                }
              } catch (e) {
                self.noAudio = true;
              }
            } else {
              self.noAudio = true;
            }
          } // Test to make sure audio isn't disabled in Internet Explorer.
    
    
          try {
            var test = new Audio();
    
            if (test.muted) {
              self.noAudio = true;
            }
          } catch (e) {} // Check for supported codecs.
    
    
          if (!self.noAudio) {
            self._setupCodecs();
          }
    
          return self;
        },
    
        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function _setupCodecs() {
          var self = this || Howler;
          var audioTest = null; // Must wrap in a try/catch because IE11 in server mode throws an error.
    
          try {
            audioTest = typeof Audio !== 'undefined' ? new Audio() : null;
          } catch (err) {
            return self;
          }
    
          if (!audioTest || typeof audioTest.canPlayType !== 'function') {
            return self;
          }
    
          var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, ''); // Opera version <33 has mixed MP3 support, so we need to check for and block it.
    
          var ua = self._navigator ? self._navigator.userAgent : '';
          var checkOpera = ua.match(/OPR\/([0-6].)/g);
          var isOldOpera = checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33;
          var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
          var safariVersion = ua.match(/Version\/(.*?) /);
          var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
          self._codecs = {
            mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
            mpeg: !!mpegTest,
            opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
            ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
            oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
            wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
            aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
            caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
            m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
            m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
            mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
            weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
            webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
            dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
            flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
          };
          return self;
        },
    
        /**
         * Some browsers/devices will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _unlockAudio: function _unlockAudio() {
          var self = this || Howler; // Only run this if Web Audio is supported and it hasn't already been unlocked.
    
          if (self._audioUnlocked || !self.ctx) {
            return;
          }
    
          self._audioUnlocked = false;
          self.autoUnlock = false; // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
          // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
          // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
    
          if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
            self._mobileUnloaded = true;
            self.unload();
          } // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
          // http://stackoverflow.com/questions/24119684
    
    
          self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050); // Call this method on touch start to create and play a buffer,
          // then check if the audio actually played to determine if
          // audio has now been unlocked on iOS, Android, etc.
    
          var unlock = function unlock(e) {
            // Create a pool of unlocked HTML5 Audio objects that can
            // be used for playing sounds without user interaction. HTML5
            // Audio objects must be individually unlocked, as opposed
            // to the WebAudio API which only needs a single activation.
            // This must occur before WebAudio setup or the source.onended
            // event will not fire.
            while (self._html5AudioPool.length < self.html5PoolSize) {
              try {
                var audioNode = new Audio(); // Mark this Audio object as unlocked to ensure it can get returned
                // to the unlocked pool when released.
    
                audioNode._unlocked = true; // Add the audio node to the pool.
    
                self._releaseHtml5Audio(audioNode);
              } catch (e) {
                self.noAudio = true;
                break;
              }
            } // Loop through any assigned audio nodes and unlock them.
    
    
            for (var i = 0; i < self._howls.length; i++) {
              if (!self._howls[i]._webAudio) {
                // Get all of the sounds in this Howl group.
                var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and unlock the audio nodes.
    
    
                for (var j = 0; j < ids.length; j++) {
                  var sound = self._howls[i]._soundById(ids[j]);
    
                  if (sound && sound._node && !sound._node._unlocked) {
                    sound._node._unlocked = true;
    
                    sound._node.load();
                  }
                }
              }
            } // Fix Android can not play in suspend state.
    
    
            self._autoResume(); // Create an empty buffer.
    
    
            var source = self.ctx.createBufferSource();
            source.buffer = self._scratchBuffer;
            source.connect(self.ctx.destination); // Play the empty buffer.
    
            if (typeof source.start === 'undefined') {
              source.noteOn(0);
            } else {
              source.start(0);
            } // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
    
    
            if (typeof self.ctx.resume === 'function') {
              self.ctx.resume();
            } // Setup a timeout to check that we are unlocked on the next event loop.
    
    
            source.onended = function () {
              source.disconnect(0); // Update the unlocked state and prevent this check from happening again.
    
              self._audioUnlocked = true; // Remove the touch start listener.
    
              document.removeEventListener('touchstart', unlock, true);
              document.removeEventListener('touchend', unlock, true);
              document.removeEventListener('click', unlock, true);
              document.removeEventListener('keydown', unlock, true); // Let all sounds know that audio has been unlocked.
    
              for (var i = 0; i < self._howls.length; i++) {
                self._howls[i]._emit('unlock');
              }
            };
          }; // Setup a touch start listener to attempt an unlock in.
    
    
          document.addEventListener('touchstart', unlock, true);
          document.addEventListener('touchend', unlock, true);
          document.addEventListener('click', unlock, true);
          document.addEventListener('keydown', unlock, true);
          return self;
        },
    
        /**
         * Get an unlocked HTML5 Audio object from the pool. If none are left,
         * return a new Audio object and throw a warning.
         * @return {Audio} HTML5 Audio object.
         */
        _obtainHtml5Audio: function _obtainHtml5Audio() {
          var self = this || Howler; // Return the next object from the pool if one exists.
    
          if (self._html5AudioPool.length) {
            return self._html5AudioPool.pop();
          } //.Check if the audio is locked and throw a warning.
    
    
          var testPlay = new Audio().play();
    
          if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
            testPlay["catch"](function () {
              console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
            });
          }
    
          return new Audio();
        },
    
        /**
         * Return an activated HTML5 Audio object to the pool.
         * @return {Howler}
         */
        _releaseHtml5Audio: function _releaseHtml5Audio(audio) {
          var self = this || Howler; // Don't add audio to the pool if we don't know if it has been unlocked.
    
          if (audio._unlocked) {
            self._html5AudioPool.push(audio);
          }
    
          return self;
        },
    
        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function _autoSuspend() {
          var self = this;
    
          if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
            return;
          } // Check if any sounds are playing.
    
    
          for (var i = 0; i < self._howls.length; i++) {
            if (self._howls[i]._webAudio) {
              for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                if (!self._howls[i]._sounds[j]._paused) {
                  return self;
                }
              }
            }
          }
    
          if (self._suspendTimer) {
            clearTimeout(self._suspendTimer);
          } // If no sound has played after 30 seconds, suspend the context.
    
    
          self._suspendTimer = setTimeout(function () {
            if (!self.autoSuspend) {
              return;
            }
    
            self._suspendTimer = null;
            self.state = 'suspending'; // Handle updating the state of the audio context after suspending.
    
            var handleSuspension = function handleSuspension() {
              self.state = 'suspended';
    
              if (self._resumeAfterSuspend) {
                delete self._resumeAfterSuspend;
    
                self._autoResume();
              }
            }; // Either the state gets suspended or it is interrupted.
            // Either way, we need to update the state to suspended.
    
    
            self.ctx.suspend().then(handleSuspension, handleSuspension);
          }, 30000);
          return self;
        },
    
        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function _autoResume() {
          var self = this;
    
          if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
            return;
          }
    
          if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
            clearTimeout(self._suspendTimer);
            self._suspendTimer = null;
          } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
            self.ctx.resume().then(function () {
              self.state = 'running'; // Emit to all Howls that the audio has resumed.
    
              for (var i = 0; i < self._howls.length; i++) {
                self._howls[i]._emit('resume');
              }
            });
    
            if (self._suspendTimer) {
              clearTimeout(self._suspendTimer);
              self._suspendTimer = null;
            }
          } else if (self.state === 'suspending') {
            self._resumeAfterSuspend = true;
          }
    
          return self;
        }
      }; // Setup the global audio controller.
    
      var Howler = new HowlerGlobal();
      /** Group Methods **/
    
      /***************************************************************************/
    
      /**
       * Create an audio group controller.
       * @param {Object} o Passed in properties for this group.
       */
    
      var Howl = function Howl(o) {
        var self = this; // Throw an error if no source is provided.
    
        if (!o.src || o.src.length === 0) {
          console.error('An array of source files must be passed with any new Howl.');
          return;
        }
    
        self.init(o);
      };
    
      Howl.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function init(o) {
          var self = this; // If we don't have an AudioContext created yet, run the setup.
    
          if (!Howler.ctx) {
            setupAudioContext();
          } // Setup user-defined default properties.
    
    
          self._autoplay = o.autoplay || false;
          self._format = typeof o.format !== 'string' ? o.format : [o.format];
          self._html5 = o.html5 || false;
          self._muted = o.mute || false;
          self._loop = o.loop || false;
          self._pool = o.pool || 5;
          self._preload = typeof o.preload === 'boolean' || o.preload === 'metadata' ? o.preload : true;
          self._rate = o.rate || 1;
          self._sprite = o.sprite || {};
          self._src = typeof o.src !== 'string' ? o.src : [o.src];
          self._volume = o.volume !== undefined ? o.volume : 1;
          self._xhr = {
            method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
            headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
            withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
          }; // Setup all other default properties.
    
          self._duration = 0;
          self._state = 'unloaded';
          self._sounds = [];
          self._endTimers = {};
          self._queue = [];
          self._playLock = false; // Setup event listeners.
    
          self._onend = o.onend ? [{
            fn: o.onend
          }] : [];
          self._onfade = o.onfade ? [{
            fn: o.onfade
          }] : [];
          self._onload = o.onload ? [{
            fn: o.onload
          }] : [];
          self._onloaderror = o.onloaderror ? [{
            fn: o.onloaderror
          }] : [];
          self._onplayerror = o.onplayerror ? [{
            fn: o.onplayerror
          }] : [];
          self._onpause = o.onpause ? [{
            fn: o.onpause
          }] : [];
          self._onplay = o.onplay ? [{
            fn: o.onplay
          }] : [];
          self._onstop = o.onstop ? [{
            fn: o.onstop
          }] : [];
          self._onmute = o.onmute ? [{
            fn: o.onmute
          }] : [];
          self._onvolume = o.onvolume ? [{
            fn: o.onvolume
          }] : [];
          self._onrate = o.onrate ? [{
            fn: o.onrate
          }] : [];
          self._onseek = o.onseek ? [{
            fn: o.onseek
          }] : [];
          self._onunlock = o.onunlock ? [{
            fn: o.onunlock
          }] : [];
          self._onresume = []; // Web Audio or HTML5 Audio?
    
          self._webAudio = Howler.usingWebAudio && !self._html5; // Automatically try to enable audio.
    
          if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
            Howler._unlockAudio();
          } // Keep track of this Howl group in the global controller.
    
    
          Howler._howls.push(self); // If they selected autoplay, add a play event to the load queue.
    
    
          if (self._autoplay) {
            self._queue.push({
              event: 'play',
              action: function action() {
                self.play();
              }
            });
          } // Load the source file unless otherwise specified.
    
    
          if (self._preload && self._preload !== 'none') {
            self.load();
          }
    
          return self;
        },
    
        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function load() {
          var self = this;
          var url = null; // If no audio is available, quit immediately.
    
          if (Howler.noAudio) {
            self._emit('loaderror', null, 'No audio support.');
    
            return;
          } // Make sure our source is in an array.
    
    
          if (typeof self._src === 'string') {
            self._src = [self._src];
          } // Loop through the sources and pick the first one that is compatible.
    
    
          for (var i = 0; i < self._src.length; i++) {
            var ext, str;
    
            if (self._format && self._format[i]) {
              // If an extension was specified, use that instead.
              ext = self._format[i];
            } else {
              // Make sure the source is a string.
              str = self._src[i];
    
              if (typeof str !== 'string') {
                self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
    
                continue;
              } // Extract the file extension from the URL or base64 data URI.
    
    
              ext = /^data:audio\/([^;,]+);/i.exec(str);
    
              if (!ext) {
                ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
              }
    
              if (ext) {
                ext = ext[1].toLowerCase();
              }
            } // Log a warning if no extension was found.
    
    
            if (!ext) {
              console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
            } // Check if this extension is available.
    
    
            if (ext && Howler.codecs(ext)) {
              url = self._src[i];
              break;
            }
          }
    
          if (!url) {
            self._emit('loaderror', null, 'No codec support for selected audio sources.');
    
            return;
          }
    
          self._src = url;
          self._state = 'loading'; // If the hosting page is HTTPS and the source isn't,
          // drop down to HTML5 Audio to avoid Mixed Content errors.
    
          if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
            self._html5 = true;
            self._webAudio = false;
          } // Create a new sound object and add it to the pool.
    
    
          new Sound(self); // Load and decode the audio data for playback.
    
          if (self._webAudio) {
            loadBuffer(self);
          }
    
          return self;
        },
    
        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function play(sprite, internal) {
          var self = this;
          var id = null; // Determine if a sprite, sound id or nothing was passed
    
          if (typeof sprite === 'number') {
            id = sprite;
            sprite = null;
          } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
            // If the passed sprite doesn't exist, do nothing.
            return null;
          } else if (typeof sprite === 'undefined') {
            // Use the default sound sprite (plays the full audio length).
            sprite = '__default'; // Check if there is a single paused sound that isn't ended.
            // If there is, play that sound. If not, continue as usual.
    
            if (!self._playLock) {
              var num = 0;
    
              for (var i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                  num++;
                  id = self._sounds[i]._id;
                }
              }
    
              if (num === 1) {
                sprite = null;
              } else {
                id = null;
              }
            }
          } // Get the selected node, or get one from the pool.
    
    
          var sound = id ? self._soundById(id) : self._inactiveSound(); // If the sound doesn't exist, do nothing.
    
          if (!sound) {
            return null;
          } // Select the sprite definition.
    
    
          if (id && !sprite) {
            sprite = sound._sprite || '__default';
          } // If the sound hasn't loaded, we must wait to get the audio's duration.
          // We also need to wait to make sure we don't run into race conditions with
          // the order of function calls.
    
    
          if (self._state !== 'loaded') {
            // Set the sprite value on this sound.
            sound._sprite = sprite; // Mark this sound as not ended in case another sound is played before this one loads.
    
            sound._ended = false; // Add the sound to the queue to be played on load.
    
            var soundId = sound._id;
    
            self._queue.push({
              event: 'play',
              action: function action() {
                self.play(soundId);
              }
            });
    
            return soundId;
          } // Don't play the sound if an id was passed and it is already playing.
    
    
          if (id && !sound._paused) {
            // Trigger the play event, in order to keep iterating through queue.
            if (!internal) {
              self._loadQueue('play');
            }
    
            return sound._id;
          } // Make sure the AudioContext isn't suspended, and resume it if it is.
    
    
          if (self._webAudio) {
            Howler._autoResume();
          } // Determine how long to play for and where to start playing.
    
    
          var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
          var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000 - seek);
          var timeout = duration * 1000 / Math.abs(sound._rate);
          var start = self._sprite[sprite][0] / 1000;
          var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
          sound._sprite = sprite; // Mark the sound as ended instantly so that this async playback
          // doesn't get grabbed by another call to play while this one waits to start.
    
          sound._ended = false; // Update the parameters of the sound.
    
          var setParams = function setParams() {
            sound._paused = false;
            sound._seek = seek;
            sound._start = start;
            sound._stop = stop;
            sound._loop = !!(sound._loop || self._sprite[sprite][2]);
          }; // End the sound instantly if seek is at the end.
    
    
          if (seek >= stop) {
            self._ended(sound);
    
            return;
          } // Begin the actual playback.
    
    
          var node = sound._node;
    
          if (self._webAudio) {
            // Fire this when the sound is ready to play to begin Web Audio playback.
            var playWebAudio = function playWebAudio() {
              self._playLock = false;
              setParams();
    
              self._refreshBuffer(sound); // Setup the playback params.
    
    
              var vol = sound._muted || self._muted ? 0 : sound._volume;
              node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
              sound._playStart = Howler.ctx.currentTime; // Play the sound using the supported method.
    
              if (typeof node.bufferSource.start === 'undefined') {
                sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
              } else {
                sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
              } // Start a new timer if none is present.
    
    
              if (timeout !== Infinity) {
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
              }
    
              if (!internal) {
                setTimeout(function () {
                  self._emit('play', sound._id);
    
                  self._loadQueue();
                }, 0);
              }
            };
    
            if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
              playWebAudio();
            } else {
              self._playLock = true; // Wait for the audio context to resume before playing.
    
              self.once('resume', playWebAudio); // Cancel the end timer.
    
              self._clearTimer(sound._id);
            }
          } else {
            // Fire this when the sound is ready to play to begin HTML5 Audio playback.
            var playHtml5 = function playHtml5() {
              node.currentTime = seek;
              node.muted = sound._muted || self._muted || Howler._muted || node.muted;
              node.volume = sound._volume * Howler.volume();
              node.playbackRate = sound._rate; // Some browsers will throw an error if this is called without user interaction.
    
              try {
                var play = node.play(); // Support older browsers that don't support promises, and thus don't have this issue.
    
                if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                  // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                  self._playLock = true; // Set param values immediately.
    
                  setParams(); // Releases the lock and executes queued actions.
    
                  play.then(function () {
                    self._playLock = false;
                    node._unlocked = true;
    
                    if (!internal) {
                      self._emit('play', sound._id);
                    } else {
                      self._loadQueue();
                    }
                  })["catch"](function () {
                    self._playLock = false;
    
                    self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' + 'on mobile devices and Chrome where playback was not within a user interaction.'); // Reset the ended and paused values.
    
    
                    sound._ended = true;
                    sound._paused = true;
                  });
                } else if (!internal) {
                  self._playLock = false;
                  setParams();
    
                  self._emit('play', sound._id);
                } // Setting rate before playing won't work in IE, so we set it again here.
    
    
                node.playbackRate = sound._rate; // If the node is still paused, then we can assume there was a playback issue.
    
                if (node.paused) {
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' + 'on mobile devices and Chrome where playback was not within a user interaction.');
    
                  return;
                } // Setup the end timer on sprites or listen for the ended event.
    
    
                if (sprite !== '__default' || sound._loop) {
                  self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                } else {
                  self._endTimers[sound._id] = function () {
                    // Fire ended on this audio node.
                    self._ended(sound); // Clear this listener.
    
    
                    node.removeEventListener('ended', self._endTimers[sound._id], false);
                  };
    
                  node.addEventListener('ended', self._endTimers[sound._id], false);
                }
              } catch (err) {
                self._emit('playerror', sound._id, err);
              }
            }; // If this is streaming audio, make sure the src is set and load again.
    
    
            if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
              node.src = self._src;
              node.load();
            } // Play immediately if ready, or wait for the 'canplaythrough'e vent.
    
    
            var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS;
    
            if (node.readyState >= 3 || loadedNoReadyState) {
              playHtml5();
            } else {
              self._playLock = true;
              self._state = 'loading';
    
              var listener = function listener() {
                self._state = 'loaded'; // Begin playback.
    
                playHtml5(); // Clear this listener.
    
                node.removeEventListener(Howler._canPlayEvent, listener, false);
              };
    
              node.addEventListener(Howler._canPlayEvent, listener, false); // Cancel the end timer.
    
              self._clearTimer(sound._id);
            }
          }
    
          return sound._id;
        },
    
        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function pause(id) {
          var self = this; // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
    
          if (self._state !== 'loaded' || self._playLock) {
            self._queue.push({
              event: 'pause',
              action: function action() {
                self.pause(id);
              }
            });
    
            return self;
          } // If no id is passed, get all ID's to be paused.
    
    
          var ids = self._getSoundIds(id);
    
          for (var i = 0; i < ids.length; i++) {
            // Clear the end timer.
            self._clearTimer(ids[i]); // Get the sound.
    
    
            var sound = self._soundById(ids[i]);
    
            if (sound && !sound._paused) {
              // Reset the seek position.
              sound._seek = self.seek(ids[i]);
              sound._rateSeek = 0;
              sound._paused = true; // Stop currently running fades.
    
              self._stopFade(ids[i]);
    
              if (sound._node) {
                if (self._webAudio) {
                  // Make sure the sound has been created.
                  if (!sound._node.bufferSource) {
                    continue;
                  }
    
                  if (typeof sound._node.bufferSource.stop === 'undefined') {
                    sound._node.bufferSource.noteOff(0);
                  } else {
                    sound._node.bufferSource.stop(0);
                  } // Clean up the buffer source.
    
    
                  self._cleanBuffer(sound._node);
                } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                  sound._node.pause();
                }
              }
            } // Fire the pause event, unless `true` is passed as the 2nd argument.
    
    
            if (!arguments[1]) {
              self._emit('pause', sound ? sound._id : null);
            }
          }
    
          return self;
        },
    
        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function stop(id, internal) {
          var self = this; // If the sound hasn't loaded, add it to the load queue to stop when capable.
    
          if (self._state !== 'loaded' || self._playLock) {
            self._queue.push({
              event: 'stop',
              action: function action() {
                self.stop(id);
              }
            });
    
            return self;
          } // If no id is passed, get all ID's to be stopped.
    
    
          var ids = self._getSoundIds(id);
    
          for (var i = 0; i < ids.length; i++) {
            // Clear the end timer.
            self._clearTimer(ids[i]); // Get the sound.
    
    
            var sound = self._soundById(ids[i]);
    
            if (sound) {
              // Reset the seek position.
              sound._seek = sound._start || 0;
              sound._rateSeek = 0;
              sound._paused = true;
              sound._ended = true; // Stop currently running fades.
    
              self._stopFade(ids[i]);
    
              if (sound._node) {
                if (self._webAudio) {
                  // Make sure the sound's AudioBufferSourceNode has been created.
                  if (sound._node.bufferSource) {
                    if (typeof sound._node.bufferSource.stop === 'undefined') {
                      sound._node.bufferSource.noteOff(0);
                    } else {
                      sound._node.bufferSource.stop(0);
                    } // Clean up the buffer source.
    
    
                    self._cleanBuffer(sound._node);
                  }
                } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                  sound._node.currentTime = sound._start || 0;
    
                  sound._node.pause(); // If this is a live stream, stop download once the audio is stopped.
    
    
                  if (sound._node.duration === Infinity) {
                    self._clearSound(sound._node);
                  }
                }
              }
    
              if (!internal) {
                self._emit('stop', sound._id);
              }
            }
          }
    
          return self;
        },
    
        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function mute(muted, id) {
          var self = this; // If the sound hasn't loaded, add it to the load queue to mute when capable.
    
          if (self._state !== 'loaded' || self._playLock) {
            self._queue.push({
              event: 'mute',
              action: function action() {
                self.mute(muted, id);
              }
            });
    
            return self;
          } // If applying mute/unmute to all sounds, update the group's value.
    
    
          if (typeof id === 'undefined') {
            if (typeof muted === 'boolean') {
              self._muted = muted;
            } else {
              return self._muted;
            }
          } // If no id is passed, get all ID's to be muted.
    
    
          var ids = self._getSoundIds(id);
    
          for (var i = 0; i < ids.length; i++) {
            // Get the sound.
            var sound = self._soundById(ids[i]);
    
            if (sound) {
              sound._muted = muted; // Cancel active fade and set the volume to the end value.
    
              if (sound._interval) {
                self._stopFade(sound._id);
              }
    
              if (self._webAudio && sound._node) {
                sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
              } else if (sound._node) {
                sound._node.muted = Howler._muted ? true : muted;
              }
    
              self._emit('mute', sound._id);
            }
          }
    
          return self;
        },
    
        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function volume() {
          var self = this;
          var args = arguments;
          var vol, id; // Determine the values based on arguments.
    
          if (args.length === 0) {
            // Return the value of the groups' volume.
            return self._volume;
          } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
            // First check if this is an ID, and if not, assume it is a new volume.
            var ids = self._getSoundIds();
    
            var index = ids.indexOf(args[0]);
    
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else {
              vol = parseFloat(args[0]);
            }
          } else if (args.length >= 2) {
            vol = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          } // Update the volume or return the current volume.
    
    
          var sound;
    
          if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
            // If the sound hasn't loaded, add it to the load queue to change volume when capable.
            if (self._state !== 'loaded' || self._playLock) {
              self._queue.push({
                event: 'volume',
                action: function action() {
                  self.volume.apply(self, args);
                }
              });
    
              return self;
            } // Set the group volume.
    
    
            if (typeof id === 'undefined') {
              self._volume = vol;
            } // Update one or all volumes.
    
    
            id = self._getSoundIds(id);
    
            for (var i = 0; i < id.length; i++) {
              // Get the sound.
              sound = self._soundById(id[i]);
    
              if (sound) {
                sound._volume = vol; // Stop currently running fades.
    
                if (!args[2]) {
                  self._stopFade(id[i]);
                }
    
                if (self._webAudio && sound._node && !sound._muted) {
                  sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                } else if (sound._node && !sound._muted) {
                  sound._node.volume = vol * Howler.volume();
                }
    
                self._emit('volume', sound._id);
              }
            }
          } else {
            sound = id ? self._soundById(id) : self._sounds[0];
            return sound ? sound._volume : 0;
          }
    
          return self;
        },
    
        /**
         * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function fade(from, to, len, id) {
          var self = this; // If the sound hasn't loaded, add it to the load queue to fade when capable.
    
          if (self._state !== 'loaded' || self._playLock) {
            self._queue.push({
              event: 'fade',
              action: function action() {
                self.fade(from, to, len, id);
              }
            });
    
            return self;
          } // Make sure the to/from/len values are numbers.
    
    
          from = Math.min(Math.max(0, parseFloat(from)), 1);
          to = Math.min(Math.max(0, parseFloat(to)), 1);
          len = parseFloat(len); // Set the volume to the start position.
    
          self.volume(from, id); // Fade the volume of one or all sounds.
    
          var ids = self._getSoundIds(id);
    
          for (var i = 0; i < ids.length; i++) {
            // Get the sound.
            var sound = self._soundById(ids[i]); // Create a linear fade or fall back to timeouts with HTML5 Audio.
    
    
            if (sound) {
              // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
              if (!id) {
                self._stopFade(ids[i]);
              } // If we are using Web Audio, let the native methods do the actual fade.
    
    
              if (self._webAudio && !sound._muted) {
                var currentTime = Howler.ctx.currentTime;
                var end = currentTime + len / 1000;
                sound._volume = from;
    
                sound._node.gain.setValueAtTime(from, currentTime);
    
                sound._node.gain.linearRampToValueAtTime(to, end);
              }
    
              self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
            }
          }
    
          return self;
        },
    
        /**
         * Starts the internal interval to fade a sound.
         * @param  {Object} sound Reference to sound to fade.
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id to fade.
         * @param  {Boolean} isGroup   If true, set the volume on the group.
         */
        _startFadeInterval: function _startFadeInterval(sound, from, to, len, id, isGroup) {
          var self = this;
          var vol = from;
          var diff = to - from;
          var steps = Math.abs(diff / 0.01);
          var stepLen = Math.max(4, steps > 0 ? len / steps : len);
          var lastTick = Date.now(); // Store the value being faded to.
    
          sound._fadeTo = to; // Update the volume value on each interval tick.
    
          sound._interval = setInterval(function () {
            // Update the volume based on the time since the last tick.
            var tick = (Date.now() - lastTick) / len;
            lastTick = Date.now();
            vol += diff * tick; // Round to within 2 decimal points.
    
            vol = Math.round(vol * 100) / 100; // Make sure the volume is in the right bounds.
    
            if (diff < 0) {
              vol = Math.max(to, vol);
            } else {
              vol = Math.min(to, vol);
            } // Change the volume.
    
    
            if (self._webAudio) {
              sound._volume = vol;
            } else {
              self.volume(vol, sound._id, true);
            } // Set the group's volume.
    
    
            if (isGroup) {
              self._volume = vol;
            } // When the fade is complete, stop it and fire event.
    
    
            if (to < from && vol <= to || to > from && vol >= to) {
              clearInterval(sound._interval);
              sound._interval = null;
              sound._fadeTo = null;
              self.volume(to, sound._id);
    
              self._emit('fade', sound._id);
            }
          }, stepLen);
        },
    
        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function _stopFade(id) {
          var self = this;
    
          var sound = self._soundById(id);
    
          if (sound && sound._interval) {
            if (self._webAudio) {
              sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
            }
    
            clearInterval(sound._interval);
            sound._interval = null;
            self.volume(sound._fadeTo, id);
            sound._fadeTo = null;
    
            self._emit('fade', id);
          }
    
          return self;
        },
    
        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function loop() {
          var self = this;
          var args = arguments;
          var loop, id, sound; // Determine the values for loop and id.
    
          if (args.length === 0) {
            // Return the grou's loop value.
            return self._loop;
          } else if (args.length === 1) {
            if (typeof args[0] === 'boolean') {
              loop = args[0];
              self._loop = loop;
            } else {
              // Return this sound's loop value.
              sound = self._soundById(parseInt(args[0], 10));
              return sound ? sound._loop : false;
            }
          } else if (args.length === 2) {
            loop = args[0];
            id = parseInt(args[1], 10);
          } // If no id is passed, get all ID's to be looped.
    
    
          var ids = self._getSoundIds(id);
    
          for (var i = 0; i < ids.length; i++) {
            sound = self._soundById(ids[i]);
    
            if (sound) {
              sound._loop = loop;
    
              if (self._webAudio && sound._node && sound._node.bufferSource) {
                sound._node.bufferSource.loop = loop;
    
                if (loop) {
                  sound._node.bufferSource.loopStart = sound._start || 0;
                  sound._node.bufferSource.loopEnd = sound._stop; // If playing, restart playback to ensure looping updates.
    
                  if (self.playing(ids[i])) {
                    self.pause(ids[i], true);
                    self.play(ids[i], true);
                  }
                }
              }
            }
          }
    
          return self;
        },
    
        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function rate() {
          var self = this;
          var args = arguments;
          var rate, id; // Determine the values based on arguments.
    
          if (args.length === 0) {
            // We will simply return the current rate of the first node.
            id = self._sounds[0]._id;
          } else if (args.length === 1) {
            // First check if this is an ID, and if not, assume it is a new rate value.
            var ids = self._getSoundIds();
    
            var index = ids.indexOf(args[0]);
    
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else {
              rate = parseFloat(args[0]);
            }
          } else if (args.length === 2) {
            rate = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          } // Update the playback rate or return the current value.
    
    
          var sound;
    
          if (typeof rate === 'number') {
            // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
            if (self._state !== 'loaded' || self._playLock) {
              self._queue.push({
                event: 'rate',
                action: function action() {
                  self.rate.apply(self, args);
                }
              });
    
              return self;
            } // Set the group rate.
    
    
            if (typeof id === 'undefined') {
              self._rate = rate;
            } // Update one or all volumes.
    
    
            id = self._getSoundIds(id);
    
            for (var i = 0; i < id.length; i++) {
              // Get the sound.
              sound = self._soundById(id[i]);
    
              if (sound) {
                // Keep track of our position when the rate changed and update the playback
                // start position so we can properly adjust the seek position for time elapsed.
                if (self.playing(id[i])) {
                  sound._rateSeek = self.seek(id[i]);
                  sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                }
    
                sound._rate = rate; // Change the playback rate.
    
                if (self._webAudio && sound._node && sound._node.bufferSource) {
                  sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
                } else if (sound._node) {
                  sound._node.playbackRate = rate;
                } // Reset the timers.
    
    
                var seek = self.seek(id[i]);
                var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000 - seek;
                var timeout = duration * 1000 / Math.abs(sound._rate); // Start a new end timer if sound is already playing.
    
                if (self._endTimers[id[i]] || !sound._paused) {
                  self._clearTimer(id[i]);
    
                  self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                }
    
                self._emit('rate', sound._id);
              }
            }
          } else {
            sound = self._soundById(id);
            return sound ? sound._rate : self._rate;
          }
    
          return self;
        },
    
        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function seek() {
          var self = this;
          var args = arguments;
          var seek, id; // Determine the values based on arguments.
    
          if (args.length === 0) {
            // We will simply return the current position of the first node.
            if (self._sounds.length) {
              id = self._sounds[0]._id;
            }
          } else if (args.length === 1) {
            // First check if this is an ID, and if not, assume it is a new seek position.
            var ids = self._getSoundIds();
    
            var index = ids.indexOf(args[0]);
    
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else if (self._sounds.length) {
              id = self._sounds[0]._id;
              seek = parseFloat(args[0]);
            }
          } else if (args.length === 2) {
            seek = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          } // If there is no ID, bail out.
    
    
          if (typeof id === 'undefined') {
            return 0;
          } // If the sound hasn't loaded, add it to the load queue to seek when capable.
    
    
          if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
            self._queue.push({
              event: 'seek',
              action: function action() {
                self.seek.apply(self, args);
              }
            });
    
            return self;
          } // Get the sound.
    
    
          var sound = self._soundById(id);
    
          if (sound) {
            if (typeof seek === 'number' && seek >= 0) {
              // Pause the sound and update position for restarting playback.
              var playing = self.playing(id);
    
              if (playing) {
                self.pause(id, true);
              } // Move the position of the track and cancel timer.
    
    
              sound._seek = seek;
              sound._ended = false;
    
              self._clearTimer(id); // Update the seek position for HTML5 Audio.
    
    
              if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
                sound._node.currentTime = seek;
              } // Seek and emit when ready.
    
    
              var seekAndEmit = function seekAndEmit() {
                // Restart the playback if the sound was playing.
                if (playing) {
                  self.play(id, true);
                }
    
                self._emit('seek', id);
              }; // Wait for the play lock to be unset before emitting (HTML5 Audio).
    
    
              if (playing && !self._webAudio) {
                var emitSeek = function emitSeek() {
                  if (!self._playLock) {
                    seekAndEmit();
                  } else {
                    setTimeout(emitSeek, 0);
                  }
                };
    
                setTimeout(emitSeek, 0);
              } else {
                seekAndEmit();
              }
            } else {
              if (self._webAudio) {
                var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
              } else {
                return sound._node.currentTime;
              }
            }
          }
    
          return self;
        },
    
        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function playing(id) {
          var self = this; // Check the passed sound ID (if any).
    
          if (typeof id === 'number') {
            var sound = self._soundById(id);
    
            return sound ? !sound._paused : false;
          } // Otherwise, loop through all sounds and check if any are playing.
    
    
          for (var i = 0; i < self._sounds.length; i++) {
            if (!self._sounds[i]._paused) {
              return true;
            }
          }
    
          return false;
        },
    
        /**
         * Get the duration of this sound. Passing a sound id will return the sprite duration.
         * @param  {Number} id The sound id to check. If none is passed, return full source duration.
         * @return {Number} Audio duration in seconds.
         */
        duration: function duration(id) {
          var self = this;
          var duration = self._duration; // If we pass an ID, get the sound and return the sprite length.
    
          var sound = self._soundById(id);
    
          if (sound) {
            duration = self._sprite[sound._sprite][1] / 1000;
          }
    
          return duration;
        },
    
        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function state() {
          return this._state;
        },
    
        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function unload() {
          var self = this; // Stop playing any active sounds.
    
          var sounds = self._sounds;
    
          for (var i = 0; i < sounds.length; i++) {
            // Stop the sound if it is currently playing.
            if (!sounds[i]._paused) {
              self.stop(sounds[i]._id);
            } // Remove the source or disconnect.
    
    
            if (!self._webAudio) {
              // Set the source to 0-second silence to stop any downloading (except in IE).
              self._clearSound(sounds[i]._node); // Remove any event listeners.
    
    
              sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
    
              sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
    
              sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false); // Release the Audio object back to the pool.
    
    
              Howler._releaseHtml5Audio(sounds[i]._node);
            } // Empty out all of the nodes.
    
    
            delete sounds[i]._node; // Make sure all timers are cleared out.
    
            self._clearTimer(sounds[i]._id);
          } // Remove the references in the global Howler object.
    
    
          var index = Howler._howls.indexOf(self);
    
          if (index >= 0) {
            Howler._howls.splice(index, 1);
          } // Delete this sound from the cache (if no other Howl is using it).
    
    
          var remCache = true;
    
          for (i = 0; i < Howler._howls.length; i++) {
            if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
              remCache = false;
              break;
            }
          }
    
          if (cache && remCache) {
            delete cache[self._src];
          } // Clear global errors.
    
    
          Howler.noAudio = false; // Clear out `self`.
    
          self._state = 'unloaded';
          self._sounds = [];
          self = null;
          return null;
        },
    
        /**
         * Listen to a custom event.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
         * @return {Howl}
         */
        on: function on(event, fn, id, once) {
          var self = this;
          var events = self['_on' + event];
    
          if (typeof fn === 'function') {
            events.push(once ? {
              id: id,
              fn: fn,
              once: once
            } : {
              id: id,
              fn: fn
            });
          }
    
          return self;
        },
    
        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function off(event, fn, id) {
          var self = this;
          var events = self['_on' + event];
          var i = 0; // Allow passing just an event and ID.
    
          if (typeof fn === 'number') {
            id = fn;
            fn = null;
          }
    
          if (fn || id) {
            // Loop through event store and remove the passed function.
            for (i = 0; i < events.length; i++) {
              var isId = id === events[i].id;
    
              if (fn === events[i].fn && isId || !fn && isId) {
                events.splice(i, 1);
                break;
              }
            }
          } else if (event) {
            // Clear out all events of this type.
            self['_on' + event] = [];
          } else {
            // Clear out all events of every type.
            var keys = Object.keys(self);
    
            for (i = 0; i < keys.length; i++) {
              if (keys[i].indexOf('_on') === 0 && Array.isArray(self[keys[i]])) {
                self[keys[i]] = [];
              }
            }
          }
    
          return self;
        },
    
        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function once(event, fn, id) {
          var self = this; // Setup the event listener.
    
          self.on(event, fn, id, 1);
          return self;
        },
    
        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function _emit(event, id, msg) {
          var self = this;
          var events = self['_on' + event]; // Loop through event store and fire all functions.
    
          for (var i = events.length - 1; i >= 0; i--) {
            // Only fire the listener if the correct ID is used.
            if (!events[i].id || events[i].id === id || event === 'load') {
              setTimeout(function (fn) {
                fn.call(this, id, msg);
              }.bind(self, events[i].fn), 0); // If this event was setup with `once`, remove it.
    
              if (events[i].once) {
                self.off(event, events[i].fn, events[i].id);
              }
            }
          } // Pass the event type into load queue so that it can continue stepping.
    
    
          self._loadQueue(event);
    
          return self;
        },
    
        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function _loadQueue(event) {
          var self = this;
    
          if (self._queue.length > 0) {
            var task = self._queue[0]; // Remove this task if a matching event was passed.
    
            if (task.event === event) {
              self._queue.shift();
    
              self._loadQueue();
            } // Run the task if no event type is passed.
    
    
            if (!event) {
              task.action();
            }
          }
    
          return self;
        },
    
        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function _ended(sound) {
          var self = this;
          var sprite = sound._sprite; // If we are using IE and there was network latency we may be clipping
          // audio before it completes playing. Lets check the node to make sure it
          // believes it has completed, before ending the playback.
    
          if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
            setTimeout(self._ended.bind(self, sound), 100);
            return self;
          } // Should this sound loop?
    
    
          var loop = !!(sound._loop || self._sprite[sprite][2]); // Fire the ended event.
    
          self._emit('end', sound._id); // Restart the playback for HTML5 Audio loop.
    
    
          if (!self._webAudio && loop) {
            self.stop(sound._id, true).play(sound._id);
          } // Restart this timer if on a Web Audio loop.
    
    
          if (self._webAudio && loop) {
            self._emit('play', sound._id);
    
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            sound._playStart = Howler.ctx.currentTime;
            var timeout = (sound._stop - sound._start) * 1000 / Math.abs(sound._rate);
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          } // Mark the node as paused.
    
    
          if (self._webAudio && !loop) {
            sound._paused = true;
            sound._ended = true;
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
    
            self._clearTimer(sound._id); // Clean up the buffer source.
    
    
            self._cleanBuffer(sound._node); // Attempt to auto-suspend AudioContext if no sounds are still playing.
    
    
            Howler._autoSuspend();
          } // When using a sprite, end the track.
    
    
          if (!self._webAudio && !loop) {
            self.stop(sound._id, true);
          }
    
          return self;
        },
    
        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function _clearTimer(id) {
          var self = this;
    
          if (self._endTimers[id]) {
            // Clear the timeout or remove the ended listener.
            if (typeof self._endTimers[id] !== 'function') {
              clearTimeout(self._endTimers[id]);
            } else {
              var sound = self._soundById(id);
    
              if (sound && sound._node) {
                sound._node.removeEventListener('ended', self._endTimers[id], false);
              }
            }
    
            delete self._endTimers[id];
          }
    
          return self;
        },
    
        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function _soundById(id) {
          var self = this; // Loop through all sounds and find the one with this ID.
    
          for (var i = 0; i < self._sounds.length; i++) {
            if (id === self._sounds[i]._id) {
              return self._sounds[i];
            }
          }
    
          return null;
        },
    
        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function _inactiveSound() {
          var self = this;
    
          self._drain(); // Find the first inactive node to recycle.
    
    
          for (var i = 0; i < self._sounds.length; i++) {
            if (self._sounds[i]._ended) {
              return self._sounds[i].reset();
            }
          } // If no inactive node was found, create a new one.
    
    
          return new Sound(self);
        },
    
        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function _drain() {
          var self = this;
          var limit = self._pool;
          var cnt = 0;
          var i = 0; // If there are less sounds than the max pool size, we are done.
    
          if (self._sounds.length < limit) {
            return;
          } // Count the number of inactive sounds.
    
    
          for (i = 0; i < self._sounds.length; i++) {
            if (self._sounds[i]._ended) {
              cnt++;
            }
          } // Remove excess inactive sounds, going in reverse order.
    
    
          for (i = self._sounds.length - 1; i >= 0; i--) {
            if (cnt <= limit) {
              return;
            }
    
            if (self._sounds[i]._ended) {
              // Disconnect the audio source when using Web Audio.
              if (self._webAudio && self._sounds[i]._node) {
                self._sounds[i]._node.disconnect(0);
              } // Remove sounds until we have the pool size.
    
    
              self._sounds.splice(i, 1);
    
              cnt--;
            }
          }
        },
    
        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function _getSoundIds(id) {
          var self = this;
    
          if (typeof id === 'undefined') {
            var ids = [];
    
            for (var i = 0; i < self._sounds.length; i++) {
              ids.push(self._sounds[i]._id);
            }
    
            return ids;
          } else {
            return [id];
          }
        },
    
        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function _refreshBuffer(sound) {
          var self = this; // Setup the buffer source for playback.
    
          sound._node.bufferSource = Howler.ctx.createBufferSource();
          sound._node.bufferSource.buffer = cache[self._src]; // Connect to the correct node.
    
          if (sound._panner) {
            sound._node.bufferSource.connect(sound._panner);
          } else {
            sound._node.bufferSource.connect(sound._node);
          } // Setup looping and playback rate.
    
    
          sound._node.bufferSource.loop = sound._loop;
    
          if (sound._loop) {
            sound._node.bufferSource.loopStart = sound._start || 0;
            sound._node.bufferSource.loopEnd = sound._stop || 0;
          }
    
          sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);
    
          return self;
        },
    
        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function _cleanBuffer(node) {
          var self = this;
          var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;
    
          if (Howler._scratchBuffer && node.bufferSource) {
            node.bufferSource.onended = null;
            node.bufferSource.disconnect(0);
    
            if (isIOS) {
              try {
                node.bufferSource.buffer = Howler._scratchBuffer;
              } catch (e) {}
            }
          }
    
          node.bufferSource = null;
          return self;
        },
    
        /**
         * Set the source to a 0-second silence to stop any downloading (except in IE).
         * @param  {Object} node Audio node to clear.
         */
        _clearSound: function _clearSound(node) {
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
    
          if (!checkIE) {
            node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }
        }
      };
      /** Single Sound Methods **/
    
      /***************************************************************************/
    
      /**
       * Setup the sound object, which each node attached to a Howl group is contained in.
       * @param {Object} howl The Howl parent group.
       */
    
      var Sound = function Sound(howl) {
        this._parent = howl;
        this.init();
      };
    
      Sound.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function init() {
          var self = this;
          var parent = self._parent; // Setup the default parameters.
    
          self._muted = parent._muted;
          self._loop = parent._loop;
          self._volume = parent._volume;
          self._rate = parent._rate;
          self._seek = 0;
          self._paused = true;
          self._ended = true;
          self._sprite = '__default'; // Generate a unique ID for this sound.
    
          self._id = ++Howler._counter; // Add itself to the parent's pool.
    
          parent._sounds.push(self); // Create the new node.
    
    
          self.create();
          return self;
        },
    
        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function create() {
          var self = this;
          var parent = self._parent;
          var volume = Howler._muted || self._muted || self._parent._muted ? 0 : self._volume;
    
          if (parent._webAudio) {
            // Create the gain node for controlling volume (the source will connect to this).
            self._node = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
    
            self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
    
            self._node.paused = true;
    
            self._node.connect(Howler.masterGain);
          } else if (!Howler.noAudio) {
            // Get an unlocked Audio object from the pool.
            self._node = Howler._obtainHtml5Audio(); // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
    
            self._errorFn = self._errorListener.bind(self);
    
            self._node.addEventListener('error', self._errorFn, false); // Listen for 'canplaythrough' event to let us know the sound is ready.
    
    
            self._loadFn = self._loadListener.bind(self);
    
            self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false); // Listen for the 'ended' event on the sound to account for edge-case where
            // a finite sound has a duration of Infinity.
    
    
            self._endFn = self._endListener.bind(self);
    
            self._node.addEventListener('ended', self._endFn, false); // Setup the new audio node.
    
    
            self._node.src = parent._src;
            self._node.preload = parent._preload === true ? 'auto' : parent._preload;
            self._node.volume = volume * Howler.volume(); // Begin loading the source.
    
            self._node.load();
          }
    
          return self;
        },
    
        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function reset() {
          var self = this;
          var parent = self._parent; // Reset all of the parameters of this sound.
    
          self._muted = parent._muted;
          self._loop = parent._loop;
          self._volume = parent._volume;
          self._rate = parent._rate;
          self._seek = 0;
          self._rateSeek = 0;
          self._paused = true;
          self._ended = true;
          self._sprite = '__default'; // Generate a new ID so that it isn't confused with the previous sound.
    
          self._id = ++Howler._counter;
          return self;
        },
    
        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function _errorListener() {
          var self = this; // Fire an error event and pass back the code.
    
          self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0); // Clear the event listener.
    
    
          self._node.removeEventListener('error', self._errorFn, false);
        },
    
        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function _loadListener() {
          var self = this;
          var parent = self._parent; // Round up the duration to account for the lower precision in HTML5 Audio.
    
          parent._duration = Math.ceil(self._node.duration * 10) / 10; // Setup a sprite if none is defined.
    
          if (Object.keys(parent._sprite).length === 0) {
            parent._sprite = {
              __default: [0, parent._duration * 1000]
            };
          }
    
          if (parent._state !== 'loaded') {
            parent._state = 'loaded';
    
            parent._emit('load');
    
            parent._loadQueue();
          } // Clear the event listener.
    
    
          self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
        },
    
        /**
         * HTML5 Audio ended listener callback.
         */
        _endListener: function _endListener() {
          var self = this;
          var parent = self._parent; // Only handle the `ended`` event if the duration is Infinity.
    
          if (parent._duration === Infinity) {
            // Update the parent duration to match the real audio duration.
            // Round up the duration to account for the lower precision in HTML5 Audio.
            parent._duration = Math.ceil(self._node.duration * 10) / 10; // Update the sprite that corresponds to the real duration.
    
            if (parent._sprite.__default[1] === Infinity) {
              parent._sprite.__default[1] = parent._duration * 1000;
            } // Run the regular ended method.
    
    
            parent._ended(self);
          } // Clear the event listener since the duration is now correct.
    
    
          self._node.removeEventListener('ended', self._endFn, false);
        }
      };
      /** Helper Methods **/
    
      /***************************************************************************/
    
      var cache = {};
      /**
       * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
       * @param  {Howl} self
       */
    
      var loadBuffer = function loadBuffer(self) {
        var url = self._src; // Check if the buffer has already been cached and use it instead.
    
        if (cache[url]) {
          // Set the duration from the cache.
          self._duration = cache[url].duration; // Load the sound into this Howl.
    
          loadSound(self);
          return;
        }
    
        if (/^data:[^;]+;base64,/.test(url)) {
          // Decode the base64 data URI without XHR, since some browsers don't support it.
          var data = atob(url.split(',')[1]);
          var dataView = new Uint8Array(data.length);
    
          for (var i = 0; i < data.length; ++i) {
            dataView[i] = data.charCodeAt(i);
          }
    
          decodeAudioData(dataView.buffer, self);
        } else {
          // Load the buffer from the URL.
          var xhr = new XMLHttpRequest();
          xhr.open(self._xhr.method, url, true);
          xhr.withCredentials = self._xhr.withCredentials;
          xhr.responseType = 'arraybuffer'; // Apply any custom headers to the request.
    
          if (self._xhr.headers) {
            Object.keys(self._xhr.headers).forEach(function (key) {
              xhr.setRequestHeader(key, self._xhr.headers[key]);
            });
          }
    
          xhr.onload = function () {
            // Make sure we get a successful response back.
            var code = (xhr.status + '')[0];
    
            if (code !== '0' && code !== '2' && code !== '3') {
              self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
    
              return;
            }
    
            decodeAudioData(xhr.response, self);
          };
    
          xhr.onerror = function () {
            // If there is an error, switch to HTML5 Audio.
            if (self._webAudio) {
              self._html5 = true;
              self._webAudio = false;
              self._sounds = [];
              delete cache[url];
              self.load();
            }
          };
    
          safeXhrSend(xhr);
        }
      };
      /**
       * Send the XHR request wrapped in a try/catch.
       * @param  {Object} xhr XHR to send.
       */
    
    
      var safeXhrSend = function safeXhrSend(xhr) {
        try {
          xhr.send();
        } catch (e) {
          xhr.onerror();
        }
      };
      /**
       * Decode audio data from an array buffer.
       * @param  {ArrayBuffer} arraybuffer The audio data.
       * @param  {Howl}        self
       */
    
    
      var decodeAudioData = function decodeAudioData(arraybuffer, self) {
        // Fire a load error if something broke.
        var error = function error() {
          self._emit('loaderror', null, 'Decoding audio data failed.');
        }; // Load the sound on success.
    
    
        var success = function success(buffer) {
          if (buffer && self._sounds.length > 0) {
            cache[self._src] = buffer;
            loadSound(self, buffer);
          } else {
            error();
          }
        }; // Decode the buffer into an audio source.
    
    
        if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
          Howler.ctx.decodeAudioData(arraybuffer).then(success)["catch"](error);
        } else {
          Howler.ctx.decodeAudioData(arraybuffer, success, error);
        }
      };
      /**
       * Sound is now loaded, so finish setting everything up and fire the loaded event.
       * @param  {Howl} self
       * @param  {Object} buffer The decoded buffer sound source.
       */
    
    
      var loadSound = function loadSound(self, buffer) {
        // Set the duration.
        if (buffer && !self._duration) {
          self._duration = buffer.duration;
        } // Setup a sprite if none is defined.
    
    
        if (Object.keys(self._sprite).length === 0) {
          self._sprite = {
            __default: [0, self._duration * 1000]
          };
        } // Fire the loaded event.
    
    
        if (self._state !== 'loaded') {
          self._state = 'loaded';
    
          self._emit('load');
    
          self._loadQueue();
        }
      };
      /**
       * Setup the audio context when available, or switch to HTML5 Audio mode.
       */
    
    
      var setupAudioContext = function setupAudioContext() {
        // If we have already detected that Web Audio isn't supported, don't run this step again.
        if (!Howler.usingWebAudio) {
          return;
        } // Check if we are using Web Audio and setup the AudioContext if we are.
    
    
        try {
          if (typeof AudioContext !== 'undefined') {
            Howler.ctx = new AudioContext();
          } else if (typeof webkitAudioContext !== 'undefined') {
            Howler.ctx = new webkitAudioContext();
          } else {
            Howler.usingWebAudio = false;
          }
        } catch (e) {
          Howler.usingWebAudio = false;
        } // If the audio context creation still failed, set using web audio to false.
    
    
        if (!Howler.ctx) {
          Howler.usingWebAudio = false;
        } // Check if a webview is being used on iOS8 or earlier (rather than the browser).
        // If it is, disable Web Audio as it causes crashing.
    
    
        var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform);
    
        var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
    
        if (iOS && version && version < 9) {
          var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
    
          if (Howler._navigator && !safari) {
            Howler.usingWebAudio = false;
          }
        } // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    
    
        if (Howler.usingWebAudio) {
          Howler.masterGain = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
          Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
          Howler.masterGain.connect(Howler.ctx.destination);
        } // Re-run the setup on Howler.
    
    
        Howler._setup();
      }; // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
    
    
      if (typeof define === 'function' && define.amd) {
        define([], function () {
          return {
            Howler: Howler,
            Howl: Howl
          };
        });
      } // Add support for CommonJS libraries such as browserify.
    
    
      if (typeof exports !== 'undefined') {
        exports.Howler = Howler;
        exports.Howl = Howl;
      } // Add to global in Node.js (for testing, etc).
    
    
      if (typeof global !== 'undefined') {
        global.HowlerGlobal = HowlerGlobal;
        global.Howler = Howler;
        global.Howl = Howl;
        global.Sound = Sound;
      } else if (typeof window !== 'undefined') {
        // Define globally in case AMD is not available or unused.
        window.HowlerGlobal = HowlerGlobal;
        window.Howler = Howler;
        window.Howl = Howl;
        window.Sound = Sound;
      }
    })();
    /*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *  
     *  howler.js v2.2.3
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
    
    
    (function () {
      'use strict'; // Setup default properties.
    
      HowlerGlobal.prototype._pos = [0, 0, 0];
      HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
      /** Global Methods **/
    
      /***************************************************************************/
    
      /**
       * Helper method to update the stereo panning position of all current Howls.
       * Future Howls will not use this value unless explicitly set.
       * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
       * @return {Howler/Number}     Self or current stereo panning value.
       */
    
      HowlerGlobal.prototype.stereo = function (pan) {
        var self = this; // Stop right here if not using Web Audio.
    
        if (!self.ctx || !self.ctx.listener) {
          return self;
        } // Loop through all Howls and update their stereo panning.
    
    
        for (var i = self._howls.length - 1; i >= 0; i--) {
          self._howls[i].stereo(pan);
        }
    
        return self;
      };
      /**
       * Get/set the position of the listener in 3D cartesian space. Sounds using
       * 3D position will be relative to the listener's position.
       * @param  {Number} x The x-position of the listener.
       * @param  {Number} y The y-position of the listener.
       * @param  {Number} z The z-position of the listener.
       * @return {Howler/Array}   Self or current listener position.
       */
    
    
      HowlerGlobal.prototype.pos = function (x, y, z) {
        var self = this; // Stop right here if not using Web Audio.
    
        if (!self.ctx || !self.ctx.listener) {
          return self;
        } // Set the defaults for optional 'y' & 'z'.
    
    
        y = typeof y !== 'number' ? self._pos[1] : y;
        z = typeof z !== 'number' ? self._pos[2] : z;
    
        if (typeof x === 'number') {
          self._pos = [x, y, z];
    
          if (typeof self.ctx.listener.positionX !== 'undefined') {
            self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
            self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
            self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
          } else {
            self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
          }
        } else {
          return self._pos;
        }
    
        return self;
      };
      /**
       * Get/set the direction the listener is pointing in the 3D cartesian space.
       * A front and up vector must be provided. The front is the direction the
       * face of the listener is pointing, and up is the direction the top of the
       * listener is pointing. Thus, these values are expected to be at right angles
       * from each other.
       * @param  {Number} x   The x-orientation of the listener.
       * @param  {Number} y   The y-orientation of the listener.
       * @param  {Number} z   The z-orientation of the listener.
       * @param  {Number} xUp The x-orientation of the top of the listener.
       * @param  {Number} yUp The y-orientation of the top of the listener.
       * @param  {Number} zUp The z-orientation of the top of the listener.
       * @return {Howler/Array}     Returns self or the current orientation vectors.
       */
    
    
      HowlerGlobal.prototype.orientation = function (x, y, z, xUp, yUp, zUp) {
        var self = this; // Stop right here if not using Web Audio.
    
        if (!self.ctx || !self.ctx.listener) {
          return self;
        } // Set the defaults for optional 'y' & 'z'.
    
    
        var or = self._orientation;
        y = typeof y !== 'number' ? or[1] : y;
        z = typeof z !== 'number' ? or[2] : z;
        xUp = typeof xUp !== 'number' ? or[3] : xUp;
        yUp = typeof yUp !== 'number' ? or[4] : yUp;
        zUp = typeof zUp !== 'number' ? or[5] : zUp;
    
        if (typeof x === 'number') {
          self._orientation = [x, y, z, xUp, yUp, zUp];
    
          if (typeof self.ctx.listener.forwardX !== 'undefined') {
            self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
          } else {
            self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
          }
        } else {
          return or;
        }
    
        return self;
      };
      /** Group Methods **/
    
      /***************************************************************************/
    
      /**
       * Add new properties to the core init.
       * @param  {Function} _super Core init method.
       * @return {Howl}
       */
    
    
      Howl.prototype.init = function (_super) {
        return function (o) {
          var self = this; // Setup user-defined default properties.
    
          self._orientation = o.orientation || [1, 0, 0];
          self._stereo = o.stereo || null;
          self._pos = o.pos || null;
          self._pannerAttr = {
            coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
            coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
            coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
            distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
            maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
            panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
            refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
            rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
          }; // Setup event listeners.
    
          self._onstereo = o.onstereo ? [{
            fn: o.onstereo
          }] : [];
          self._onpos = o.onpos ? [{
            fn: o.onpos
          }] : [];
          self._onorientation = o.onorientation ? [{
            fn: o.onorientation
          }] : []; // Complete initilization with howler.js core's init function.
    
          return _super.call(this, o);
        };
      }(Howl.prototype.init);
      /**
       * Get/set the stereo panning of the audio source for this sound or all in the group.
       * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
       * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
       * @return {Howl/Number}    Returns self or the current stereo panning value.
       */
    
    
      Howl.prototype.stereo = function (pan, id) {
        var self = this; // Stop right here if not using Web Audio.
    
        if (!self._webAudio) {
          return self;
        } // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    
    
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'stereo',
            action: function action() {
              self.stereo(pan, id);
            }
          });
    
          return self;
        } // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    
    
        var pannerType = typeof Howler.ctx.createStereoPanner === 'undefined' ? 'spatial' : 'stereo'; // Setup the group's stereo panning if no ID is passed.
    
        if (typeof id === 'undefined') {
          // Return the group's stereo panning if no parameters are passed.
          if (typeof pan === 'number') {
            self._stereo = pan;
            self._pos = [pan, 0, 0];
          } else {
            return self._stereo;
          }
        } // Change the streo panning of one or all sounds in group.
    
    
        var ids = self._getSoundIds(id);
    
        for (var i = 0; i < ids.length; i++) {
          // Get the sound.
          var sound = self._soundById(ids[i]);
    
          if (sound) {
            if (typeof pan === 'number') {
              sound._stereo = pan;
              sound._pos = [pan, 0, 0];
    
              if (sound._node) {
                // If we are falling back, make sure the panningModel is equalpower.
                sound._pannerAttr.panningModel = 'equalpower'; // Check if there is a panner setup and create a new one if not.
    
                if (!sound._panner || !sound._panner.pan) {
                  setupPanner(sound, pannerType);
                }
    
                if (pannerType === 'spatial') {
                  if (typeof sound._panner.positionX !== 'undefined') {
                    sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
    
                    sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
    
                    sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                  } else {
                    sound._panner.setPosition(pan, 0, 0);
                  }
                } else {
                  sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                }
              }
    
              self._emit('stereo', sound._id);
            } else {
              return sound._stereo;
            }
          }
        }
    
        return self;
      };
      /**
       * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
       * @param  {Number} x  The x-position of the audio source.
       * @param  {Number} y  The y-position of the audio source.
       * @param  {Number} z  The z-position of the audio source.
       * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
       * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
       */
    
    
      Howl.prototype.pos = function (x, y, z, id) {
        var self = this; // Stop right here if not using Web Audio.
    
        if (!self._webAudio) {
          return self;
        } // If the sound hasn't loaded, add it to the load queue to change position when capable.
    
    
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'pos',
            action: function action() {
              self.pos(x, y, z, id);
            }
          });
    
          return self;
        } // Set the defaults for optional 'y' & 'z'.
    
    
        y = typeof y !== 'number' ? 0 : y;
        z = typeof z !== 'number' ? -0.5 : z; // Setup the group's spatial position if no ID is passed.
    
        if (typeof id === 'undefined') {
          // Return the group's spatial position if no parameters are passed.
          if (typeof x === 'number') {
            self._pos = [x, y, z];
          } else {
            return self._pos;
          }
        } // Change the spatial position of one or all sounds in group.
    
    
        var ids = self._getSoundIds(id);
    
        for (var i = 0; i < ids.length; i++) {
          // Get the sound.
          var sound = self._soundById(ids[i]);
    
          if (sound) {
            if (typeof x === 'number') {
              sound._pos = [x, y, z];
    
              if (sound._node) {
                // Check if there is a panner setup and create a new one if not.
                if (!sound._panner || sound._panner.pan) {
                  setupPanner(sound, 'spatial');
                }
    
                if (typeof sound._panner.positionX !== 'undefined') {
                  sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
    
                  sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
    
                  sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                } else {
                  sound._panner.setPosition(x, y, z);
                }
              }
    
              self._emit('pos', sound._id);
            } else {
              return sound._pos;
            }
          }
        }
    
        return self;
      };
      /**
       * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
       * space. Depending on how direction the sound is, based on the `cone` attributes,
       * a sound pointing away from the listener can be quiet or silent.
       * @param  {Number} x  The x-orientation of the source.
       * @param  {Number} y  The y-orientation of the source.
       * @param  {Number} z  The z-orientation of the source.
       * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
       * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
       */
    
    
      Howl.prototype.orientation = function (x, y, z, id) {
        var self = this; // Stop right here if not using Web Audio.
    
        if (!self._webAudio) {
          return self;
        } // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    
    
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'orientation',
            action: function action() {
              self.orientation(x, y, z, id);
            }
          });
    
          return self;
        } // Set the defaults for optional 'y' & 'z'.
    
    
        y = typeof y !== 'number' ? self._orientation[1] : y;
        z = typeof z !== 'number' ? self._orientation[2] : z; // Setup the group's spatial orientation if no ID is passed.
    
        if (typeof id === 'undefined') {
          // Return the group's spatial orientation if no parameters are passed.
          if (typeof x === 'number') {
            self._orientation = [x, y, z];
          } else {
            return self._orientation;
          }
        } // Change the spatial orientation of one or all sounds in group.
    
    
        var ids = self._getSoundIds(id);
    
        for (var i = 0; i < ids.length; i++) {
          // Get the sound.
          var sound = self._soundById(ids[i]);
    
          if (sound) {
            if (typeof x === 'number') {
              sound._orientation = [x, y, z];
    
              if (sound._node) {
                // Check if there is a panner setup and create a new one if not.
                if (!sound._panner) {
                  // Make sure we have a position to setup the node with.
                  if (!sound._pos) {
                    sound._pos = self._pos || [0, 0, -0.5];
                  }
    
                  setupPanner(sound, 'spatial');
                }
    
                if (typeof sound._panner.orientationX !== 'undefined') {
                  sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
    
                  sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
    
                  sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                } else {
                  sound._panner.setOrientation(x, y, z);
                }
              }
    
              self._emit('orientation', sound._id);
            } else {
              return sound._orientation;
            }
          }
        }
    
        return self;
      };
      /**
       * Get/set the panner node's attributes for a sound or group of sounds.
       * This method can optionall take 0, 1 or 2 arguments.
       *   pannerAttr() -> Returns the group's values.
       *   pannerAttr(id) -> Returns the sound id's values.
       *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
       *   pannerAttr(o, id) -> Set's the values of passed sound id.
       *
       *   Attributes:
       *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
       *                      inside of which there will be no volume reduction.
       *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
       *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
       *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
       *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
       *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
       *                     listener. Can be `linear`, `inverse` or `exponential.
       *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
       *                   will not be reduced any further.
       *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
       *                   This is simply a variable of the distance model and has a different effect depending on which model
       *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
       *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
       *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
       *                     with `inverse` and `exponential`.
       *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
       *                     Can be `HRTF` or `equalpower`.
       *
       * @return {Howl/Object} Returns self or current panner attributes.
       */
    
    
      Howl.prototype.pannerAttr = function () {
        var self = this;
        var args = arguments;
        var o, id, sound; // Stop right here if not using Web Audio.
    
        if (!self._webAudio) {
          return self;
        } // Determine the values based on arguments.
    
    
        if (args.length === 0) {
          // Return the group's panner attribute values.
          return self._pannerAttr;
        } else if (args.length === 1) {
          if ((0, _typeof2["default"])(args[0]) === 'object') {
            o = args[0]; // Set the grou's panner attribute values.
    
            if (typeof id === 'undefined') {
              if (!o.pannerAttr) {
                o.pannerAttr = {
                  coneInnerAngle: o.coneInnerAngle,
                  coneOuterAngle: o.coneOuterAngle,
                  coneOuterGain: o.coneOuterGain,
                  distanceModel: o.distanceModel,
                  maxDistance: o.maxDistance,
                  refDistance: o.refDistance,
                  rolloffFactor: o.rolloffFactor,
                  panningModel: o.panningModel
                };
              }
    
              self._pannerAttr = {
                coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
                maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
                refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
                rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
              };
            }
          } else {
            // Return this sound's panner attribute values.
            sound = self._soundById(parseInt(args[0], 10));
            return sound ? sound._pannerAttr : self._pannerAttr;
          }
        } else if (args.length === 2) {
          o = args[0];
          id = parseInt(args[1], 10);
        } // Update the values of the specified sounds.
    
    
        var ids = self._getSoundIds(id);
    
        for (var i = 0; i < ids.length; i++) {
          sound = self._soundById(ids[i]);
    
          if (sound) {
            // Merge the new values into the sound.
            var pa = sound._pannerAttr;
            pa = {
              coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
              coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
              coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
              distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
              maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
              refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
              rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
              panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
            }; // Update the panner values or create a new panner if none exists.
    
            var panner = sound._panner;
    
            if (panner) {
              panner.coneInnerAngle = pa.coneInnerAngle;
              panner.coneOuterAngle = pa.coneOuterAngle;
              panner.coneOuterGain = pa.coneOuterGain;
              panner.distanceModel = pa.distanceModel;
              panner.maxDistance = pa.maxDistance;
              panner.refDistance = pa.refDistance;
              panner.rolloffFactor = pa.rolloffFactor;
              panner.panningModel = pa.panningModel;
            } else {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              } // Create a new panner node.
    
    
              setupPanner(sound, 'spatial');
            }
          }
        }
    
        return self;
      };
      /** Single Sound Methods **/
    
      /***************************************************************************/
    
      /**
       * Add new properties to the core Sound init.
       * @param  {Function} _super Core Sound init method.
       * @return {Sound}
       */
    
    
      Sound.prototype.init = function (_super) {
        return function () {
          var self = this;
          var parent = self._parent; // Setup user-defined default properties.
    
          self._orientation = parent._orientation;
          self._stereo = parent._stereo;
          self._pos = parent._pos;
          self._pannerAttr = parent._pannerAttr; // Complete initilization with howler.js core Sound's init function.
    
          _super.call(this); // If a stereo or position was specified, set it up.
    
    
          if (self._stereo) {
            parent.stereo(self._stereo);
          } else if (self._pos) {
            parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
          }
        };
      }(Sound.prototype.init);
      /**
       * Override the Sound.reset method to clean up properties from the spatial plugin.
       * @param  {Function} _super Sound reset method.
       * @return {Sound}
       */
    
    
      Sound.prototype.reset = function (_super) {
        return function () {
          var self = this;
          var parent = self._parent; // Reset all spatial plugin properties on this sound.
    
          self._orientation = parent._orientation;
          self._stereo = parent._stereo;
          self._pos = parent._pos;
          self._pannerAttr = parent._pannerAttr; // If a stereo or position was specified, set it up.
    
          if (self._stereo) {
            parent.stereo(self._stereo);
          } else if (self._pos) {
            parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
          } else if (self._panner) {
            // Disconnect the panner.
            self._panner.disconnect(0);
    
            self._panner = undefined;
    
            parent._refreshBuffer(self);
          } // Complete resetting of the sound.
    
    
          return _super.call(this);
        };
      }(Sound.prototype.reset);
      /** Helper Methods **/
    
      /***************************************************************************/
    
      /**
       * Create a new panner node and save it on the sound.
       * @param  {Sound} sound Specific sound to setup panning on.
       * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
       */
    
    
      var setupPanner = function setupPanner(sound, type) {
        type = type || 'spatial'; // Create the new panner node.
    
        if (type === 'spatial') {
          sound._panner = Howler.ctx.createPanner();
          sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
          sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
          sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
          sound._panner.distanceModel = sound._pannerAttr.distanceModel;
          sound._panner.maxDistance = sound._pannerAttr.maxDistance;
          sound._panner.refDistance = sound._pannerAttr.refDistance;
          sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
          sound._panner.panningModel = sound._pannerAttr.panningModel;
    
          if (typeof sound._panner.positionX !== 'undefined') {
            sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
    
            sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
    
            sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
          } else {
            sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
          }
    
          if (typeof sound._panner.orientationX !== 'undefined') {
            sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
    
            sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
    
            sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
          } else {
            sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
          }
        } else {
          sound._panner = Howler.ctx.createStereoPanner();
    
          sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
        }
    
        sound._panner.connect(sound._node); // Update the connections.
    
    
        if (!sound._paused) {
          sound._parent.pause(sound._id, true).play(sound._id, true);
        }
      };
    })();
    
    }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41}],51:[function(require,module,exports){
    "use strict";
    
    (function (global, factory) {
      if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
      } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, mod);
        global.Impetus = mod.exports;
      }
    })(void 0, function (exports, module) {
      'use strict';
    
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }
    
      var stopThresholdDefault = 0.3;
      var bounceDeceleration = 0.04;
      var bounceAcceleration = 0.11; // fixes weird safari 10 bug where preventDefault is prevented
      // @see https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356
    
      window.addEventListener('touchmove', function () {});
    
      var Impetus = function Impetus(_ref) {
        var _ref$source = _ref.source;
        var sourceEl = _ref$source === undefined ? document : _ref$source;
        var updateCallback = _ref.update;
        var _ref$multiplier = _ref.multiplier;
        var multiplier = _ref$multiplier === undefined ? 1 : _ref$multiplier;
        var _ref$friction = _ref.friction;
        var friction = _ref$friction === undefined ? 0.92 : _ref$friction;
        var initialValues = _ref.initialValues;
        var boundX = _ref.boundX;
        var boundY = _ref.boundY;
        var _ref$bounce = _ref.bounce;
        var bounce = _ref$bounce === undefined ? true : _ref$bounce;
    
        _classCallCheck(this, Impetus);
    
        var boundXmin, boundXmax, boundYmin, boundYmax, pointerLastX, pointerLastY, pointerCurrentX, pointerCurrentY, pointerId, decVelX, decVelY;
        var targetX = 0;
        var targetY = 0;
        var stopThreshold = stopThresholdDefault * multiplier;
        var ticking = false;
        var pointerActive = false;
        var paused = false;
        var decelerating = false;
        var trackingPoints = [];
        /**
         * Initialize instance
         */
    
        (function init() {
          sourceEl = typeof sourceEl === 'string' ? document.querySelector(sourceEl) : sourceEl;
    
          if (!sourceEl) {
            throw new Error('IMPETUS: source not found.');
          }
    
          if (!updateCallback) {
            throw new Error('IMPETUS: update function not defined.');
          }
    
          if (initialValues) {
            if (initialValues[0]) {
              targetX = initialValues[0];
            }
    
            if (initialValues[1]) {
              targetY = initialValues[1];
            }
    
            callUpdateCallback();
          } // Initialize bound values
    
    
          if (boundX) {
            boundXmin = boundX[0];
            boundXmax = boundX[1];
          }
    
          if (boundY) {
            boundYmin = boundY[0];
            boundYmax = boundY[1];
          }
    
          sourceEl.addEventListener('touchstart', onDown);
          sourceEl.addEventListener('mousedown', onDown);
        })();
        /**
         * In edge cases where you may need to
         * reinstanciate Impetus on the same sourceEl
         * this will remove the previous event listeners
         */
    
    
        this.destroy = function () {
          sourceEl.removeEventListener('touchstart', onDown);
          sourceEl.removeEventListener('mousedown', onDown);
          cleanUpRuntimeEvents(); // however it won't "destroy" a reference
          // to instance if you'd like to do that
          // it returns null as a convinience.
          // ex: `instance = instance.destroy();`
    
          return null;
        };
        /**
         * Disable movement processing
         * @public
         */
    
    
        this.pause = function () {
          cleanUpRuntimeEvents();
          pointerActive = false;
          paused = true;
        };
        /**
         * Enable movement processing
         * @public
         */
    
    
        this.resume = function () {
          paused = false;
        };
        /**
         * Update the current x and y values
         * @public
         * @param {Number} x
         * @param {Number} y
         */
    
    
        this.setValues = function (x, y) {
          if (typeof x === 'number') {
            targetX = x;
          }
    
          if (typeof y === 'number') {
            targetY = y;
          }
        };
        /**
         * Update the multiplier value
         * @public
         * @param {Number} val
         */
    
    
        this.setMultiplier = function (val) {
          multiplier = val;
          stopThreshold = stopThresholdDefault * multiplier;
        };
        /**
         * Update boundX value
         * @public
         * @param {Number[]} boundX
         */
    
    
        this.setBoundX = function (boundX) {
          boundXmin = boundX[0];
          boundXmax = boundX[1];
        };
        /**
         * Update boundY value
         * @public
         * @param {Number[]} boundY
         */
    
    
        this.setBoundY = function (boundY) {
          boundYmin = boundY[0];
          boundYmax = boundY[1];
        };
        /**
         * Removes all events set by this instance during runtime
         */
    
    
        function cleanUpRuntimeEvents() {
          // Remove all touch events added during 'onDown' as well.
          document.removeEventListener('touchmove', onMove, getPassiveSupported() ? {
            passive: false
          } : false);
          document.removeEventListener('touchend', onUp);
          document.removeEventListener('touchcancel', stopTracking);
          document.removeEventListener('mousemove', onMove, getPassiveSupported() ? {
            passive: false
          } : false);
          document.removeEventListener('mouseup', onUp);
        }
        /**
         * Add all required runtime events
         */
    
    
        function addRuntimeEvents() {
          cleanUpRuntimeEvents(); // @see https://developers.google.com/web/updates/2017/01/scrolling-intervention
    
          document.addEventListener('touchmove', onMove, getPassiveSupported() ? {
            passive: false
          } : false);
          document.addEventListener('touchend', onUp);
          document.addEventListener('touchcancel', stopTracking);
          document.addEventListener('mousemove', onMove, getPassiveSupported() ? {
            passive: false
          } : false);
          document.addEventListener('mouseup', onUp);
        }
        /**
         * Executes the update function
         */
    
    
        function callUpdateCallback() {
          updateCallback.call(sourceEl, targetX, targetY);
        }
        /**
         * Creates a custom normalized event object from touch and mouse events
         * @param  {Event} ev
         * @returns {Object} with x, y, and id properties
         */
    
    
        function normalizeEvent(ev) {
          if (ev.type === 'touchmove' || ev.type === 'touchstart' || ev.type === 'touchend') {
            var touch = ev.targetTouches[0] || ev.changedTouches[0];
            return {
              x: touch.clientX,
              y: touch.clientY,
              id: touch.identifier
            };
          } else {
            // mouse events
            return {
              x: ev.clientX,
              y: ev.clientY,
              id: null
            };
          }
        }
        /**
         * Initializes movement tracking
         * @param  {Object} ev Normalized event
         */
    
    
        function onDown(ev) {
          var event = normalizeEvent(ev);
    
          if (!pointerActive && !paused) {
            pointerActive = true;
            decelerating = false;
            pointerId = event.id;
            pointerLastX = pointerCurrentX = event.x;
            pointerLastY = pointerCurrentY = event.y;
            trackingPoints = [];
            addTrackingPoint(pointerLastX, pointerLastY);
            addRuntimeEvents();
          }
        }
        /**
         * Handles move events
         * @param  {Object} ev Normalized event
         */
    
    
        function onMove(ev) {
          ev.preventDefault();
          var event = normalizeEvent(ev);
    
          if (pointerActive && event.id === pointerId) {
            pointerCurrentX = event.x;
            pointerCurrentY = event.y;
            addTrackingPoint(pointerLastX, pointerLastY);
            requestTick();
          }
        }
        /**
         * Handles up/end events
         * @param {Object} ev Normalized event
         */
    
    
        function onUp(ev) {
          var event = normalizeEvent(ev);
    
          if (pointerActive && event.id === pointerId) {
            stopTracking();
          }
        }
        /**
         * Stops movement tracking, starts animation
         */
    
    
        function stopTracking() {
          pointerActive = false;
          addTrackingPoint(pointerLastX, pointerLastY);
          startDecelAnim();
          cleanUpRuntimeEvents();
        }
        /**
         * Records movement for the last 100ms
         * @param {number} x
         * @param {number} y [description]
         */
    
    
        function addTrackingPoint(x, y) {
          var time = Date.now();
    
          while (trackingPoints.length > 0) {
            if (time - trackingPoints[0].time <= 100) {
              break;
            }
    
            trackingPoints.shift();
          }
    
          trackingPoints.push({
            x: x,
            y: y,
            time: time
          });
        }
        /**
         * Calculate new values, call update function
         */
    
    
        function updateAndRender() {
          var pointerChangeX = pointerCurrentX - pointerLastX;
          var pointerChangeY = pointerCurrentY - pointerLastY;
          targetX += pointerChangeX * multiplier;
          targetY += pointerChangeY * multiplier;
    
          if (bounce) {
            var diff = checkBounds();
    
            if (diff.x !== 0) {
              targetX -= pointerChangeX * dragOutOfBoundsMultiplier(diff.x) * multiplier;
            }
    
            if (diff.y !== 0) {
              targetY -= pointerChangeY * dragOutOfBoundsMultiplier(diff.y) * multiplier;
            }
          } else {
            checkBounds(true);
          }
    
          callUpdateCallback();
          pointerLastX = pointerCurrentX;
          pointerLastY = pointerCurrentY;
          ticking = false;
        }
        /**
         * Returns a value from around 0.5 to 1, based on distance
         * @param {Number} val
         */
    
    
        function dragOutOfBoundsMultiplier(val) {
          return 0.000005 * Math.pow(val, 2) + 0.0001 * val + 0.55;
        }
        /**
         * prevents animating faster than current framerate
         */
    
    
        function requestTick() {
          if (!ticking) {
            requestAnimFrame(updateAndRender);
          }
    
          ticking = true;
        }
        /**
         * Determine position relative to bounds
         * @param {Boolean} restrict Whether to restrict target to bounds
         */
    
    
        function checkBounds(restrict) {
          var xDiff = 0;
          var yDiff = 0;
    
          if (boundXmin !== undefined && targetX < boundXmin) {
            xDiff = boundXmin - targetX;
          } else if (boundXmax !== undefined && targetX > boundXmax) {
            xDiff = boundXmax - targetX;
          }
    
          if (boundYmin !== undefined && targetY < boundYmin) {
            yDiff = boundYmin - targetY;
          } else if (boundYmax !== undefined && targetY > boundYmax) {
            yDiff = boundYmax - targetY;
          }
    
          if (restrict) {
            if (xDiff !== 0) {
              targetX = xDiff > 0 ? boundXmin : boundXmax;
            }
    
            if (yDiff !== 0) {
              targetY = yDiff > 0 ? boundYmin : boundYmax;
            }
          }
    
          return {
            x: xDiff,
            y: yDiff,
            inBounds: xDiff === 0 && yDiff === 0
          };
        }
        /**
         * Initialize animation of values coming to a stop
         */
    
    
        function startDecelAnim() {
          var firstPoint = trackingPoints[0];
          var lastPoint = trackingPoints[trackingPoints.length - 1];
          var xOffset = lastPoint.x - firstPoint.x;
          var yOffset = lastPoint.y - firstPoint.y;
          var timeOffset = lastPoint.time - firstPoint.time;
          var D = timeOffset / 15 / multiplier;
          decVelX = xOffset / D || 0; // prevent NaN
    
          decVelY = yOffset / D || 0;
          var diff = checkBounds();
    
          if (Math.abs(decVelX) > 1 || Math.abs(decVelY) > 1 || !diff.inBounds) {
            decelerating = true;
            requestAnimFrame(stepDecelAnim);
          }
        }
        /**
         * Animates values slowing down
         */
    
    
        function stepDecelAnim() {
          if (!decelerating) {
            return;
          }
    
          decVelX *= friction;
          decVelY *= friction;
          targetX += decVelX;
          targetY += decVelY;
          var diff = checkBounds();
    
          if (Math.abs(decVelX) > stopThreshold || Math.abs(decVelY) > stopThreshold || !diff.inBounds) {
            if (bounce) {
              var reboundAdjust = 2.5;
    
              if (diff.x !== 0) {
                if (diff.x * decVelX <= 0) {
                  decVelX += diff.x * bounceDeceleration;
                } else {
                  var adjust = diff.x > 0 ? reboundAdjust : -reboundAdjust;
                  decVelX = (diff.x + adjust) * bounceAcceleration;
                }
              }
    
              if (diff.y !== 0) {
                if (diff.y * decVelY <= 0) {
                  decVelY += diff.y * bounceDeceleration;
                } else {
                  var adjust = diff.y > 0 ? reboundAdjust : -reboundAdjust;
                  decVelY = (diff.y + adjust) * bounceAcceleration;
                }
              }
            } else {
              if (diff.x !== 0) {
                if (diff.x > 0) {
                  targetX = boundXmin;
                } else {
                  targetX = boundXmax;
                }
    
                decVelX = 0;
              }
    
              if (diff.y !== 0) {
                if (diff.y > 0) {
                  targetY = boundYmin;
                } else {
                  targetY = boundYmax;
                }
    
                decVelY = 0;
              }
            }
    
            callUpdateCallback();
            requestAnimFrame(stepDecelAnim);
          } else {
            decelerating = false;
          }
        }
      }
      /**
       * @see http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
       */
      ;
    
      module.exports = Impetus;
    
      var requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      }();
    
      function getPassiveSupported() {
        var passiveSupported = false;
    
        try {
          var options = Object.defineProperty({}, "passive", {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener("test", null, options);
        } catch (err) {}
    
        getPassiveSupported = function getPassiveSupported() {
          return passiveSupported;
        };
    
        return passiveSupported;
      }
    });
    
    },{}],52:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
    
    /*!
     * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
     * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
     * License: MIT
     */
    !function (t, e) {
      "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) && "object" == (typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) ? exports.inView = e() : t.inView = e();
    }(void 0, function () {
      return function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
          };
          return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
        }
    
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0);
      }([function (t, e, n) {
        "use strict";
    
        function r(t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        }
    
        var i = n(2),
            o = r(i);
        t.exports = o["default"];
      }, function (t, e) {
        function n(t) {
          var e = (0, _typeof2["default"])(t);
          return null != t && ("object" == e || "function" == e);
        }
    
        t.exports = n;
      }, function (t, e, n) {
        "use strict";
    
        function r(t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        }
    
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    
        var i = n(9),
            o = r(i),
            u = n(3),
            f = r(u),
            s = n(4),
            c = function c() {
          if ("undefined" != typeof window) {
            var t = 100,
                e = ["scroll", "resize", "load"],
                n = {
              history: []
            },
                r = {
              offset: {},
              threshold: 0,
              test: s.inViewport
            },
                i = (0, o["default"])(function () {
              n.history.forEach(function (t) {
                n[t].check();
              });
            }, t);
            e.forEach(function (t) {
              return addEventListener(t, i);
            }), window.MutationObserver && addEventListener("DOMContentLoaded", function () {
              new MutationObserver(i).observe(document.body, {
                attributes: !0,
                childList: !0,
                subtree: !0
              });
            });
    
            var u = function u(t) {
              if ("string" == typeof t) {
                var e = [].slice.call(document.querySelectorAll(t));
                return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), n.history.push(t)), n[t];
              }
            };
    
            return u.offset = function (t) {
              if (void 0 === t) return r.offset;
    
              var e = function e(t) {
                return "number" == typeof t;
              };
    
              return ["top", "right", "bottom", "left"].forEach(e(t) ? function (e) {
                return r.offset[e] = t;
              } : function (n) {
                return e(t[n]) ? r.offset[n] = t[n] : null;
              }), r.offset;
            }, u.threshold = function (t) {
              return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;
            }, u.test = function (t) {
              return "function" == typeof t ? r.test = t : r.test;
            }, u.is = function (t) {
              return r.test(t, r);
            }, u.offset(0), u;
          }
        };
    
        e["default"] = c();
      }, function (t, e) {
        "use strict";
    
        function n(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
    
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    
        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }
    
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function () {
          function t(e, r) {
            n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
              enter: [],
              exit: []
            }, this.singles = {
              enter: [],
              exit: []
            };
          }
    
          return r(t, [{
            key: "check",
            value: function value() {
              var t = this;
              return this.elements.forEach(function (e) {
                var n = t.options.test(e, t.options),
                    r = t.current.indexOf(e),
                    i = r > -1,
                    o = n && !i,
                    u = !n && i;
                o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e));
              }), this;
            }
          }, {
            key: "on",
            value: function value(t, e) {
              return this.handlers[t].push(e), this;
            }
          }, {
            key: "once",
            value: function value(t, e) {
              return this.singles[t].unshift(e), this;
            }
          }, {
            key: "emit",
            value: function value(t, e) {
              for (; this.singles[t].length;) {
                this.singles[t].pop()(e);
              }
    
              for (var n = this.handlers[t].length; --n > -1;) {
                this.handlers[t][n](e);
              }
    
              return this;
            }
          }]), t;
        }();
    
        e["default"] = function (t, e) {
          return new i(t, e);
        };
      }, function (t, e) {
        "use strict";
    
        function n(t, e) {
          var n = t.getBoundingClientRect(),
              r = n.top,
              i = n.right,
              o = n.bottom,
              u = n.left,
              f = n.width,
              s = n.height,
              c = {
            t: o,
            r: window.innerWidth - u,
            b: window.innerHeight - r,
            l: i
          },
              a = {
            x: e.threshold * f,
            y: e.threshold * s
          };
          return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;
        }
    
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.inViewport = n;
      }, function (t, e) {
        (function (e) {
          var n = "object" == (0, _typeof2["default"])(e) && e && e.Object === Object && e;
          t.exports = n;
        }).call(e, function () {
          return this;
        }());
      }, function (t, e, n) {
        var r = n(5),
            i = "object" == (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o;
      }, function (t, e, n) {
        function r(t, e, n) {
          function r(e) {
            var n = x,
                r = m;
            return x = m = void 0, E = e, w = t.apply(r, n);
          }
    
          function a(t) {
            return E = t, j = setTimeout(h, e), M ? r(t) : w;
          }
    
          function l(t) {
            var n = t - O,
                r = t - E,
                i = e - n;
            return _ ? c(i, g - r) : i;
          }
    
          function d(t) {
            var n = t - O,
                r = t - E;
            return void 0 === O || n >= e || n < 0 || _ && r >= g;
          }
    
          function h() {
            var t = o();
            return d(t) ? p(t) : void (j = setTimeout(h, l(t)));
          }
    
          function p(t) {
            return j = void 0, T && x ? r(t) : (x = m = void 0, w);
          }
    
          function v() {
            void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0;
          }
    
          function y() {
            return void 0 === j ? w : p(o());
          }
    
          function b() {
            var t = o(),
                n = d(t);
    
            if (x = arguments, m = this, O = t, n) {
              if (void 0 === j) return a(O);
              if (_) return j = setTimeout(h, e), r(O);
            }
    
            return void 0 === j && (j = setTimeout(h, e)), w;
          }
    
          var x,
              m,
              g,
              w,
              j,
              O,
              E = 0,
              M = !1,
              _ = !1,
              T = !0;
    
          if ("function" != typeof t) throw new TypeError(f);
          return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b;
        }
    
        var i = n(1),
            o = n(8),
            u = n(10),
            f = "Expected a function",
            s = Math.max,
            c = Math.min;
        t.exports = r;
      }, function (t, e, n) {
        var r = n(6),
            i = function i() {
          return r.Date.now();
        };
    
        t.exports = i;
      }, function (t, e, n) {
        function r(t, e, n) {
          var r = !0,
              f = !0;
          if ("function" != typeof t) throw new TypeError(u);
          return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), i(t, e, {
            leading: r,
            maxWait: e,
            trailing: f
          });
        }
    
        var i = n(7),
            o = n(1),
            u = "Expected a function";
        t.exports = r;
      }, function (t, e) {
        function n(t) {
          return t;
        }
    
        t.exports = n;
      }]);
    });
    
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41}],53:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Scrl = function Scrl(options) {
      var _this = this;
    
      _classCallCheck(this, Scrl);
    
      this._raf = null;
      this._positionY = 0;
      this._velocityY = 0;
      this._targetPositionY = 0;
      this._targetPositionYWithOffset = 0;
      this._direction = 0;
    
      this.scrollTo = function (offset) {
        if (offset && offset.nodeType) {
          // the offset is element
          _this._targetPositionY = Math.round(offset.getBoundingClientRect().top + window.pageYOffset);
        } else if (parseInt(_this._targetPositionY) === _this._targetPositionY) {
          // the offset is a number
          _this._targetPositionY = Math.round(offset);
        } else {
          console.error('Argument must be a number or an element.');
          return;
        } // don't animate beyond the document height
    
    
        if (_this._targetPositionY > document.documentElement.scrollHeight - window.innerHeight) {
          _this._targetPositionY = document.documentElement.scrollHeight - window.innerHeight;
        } // calculated required values
    
    
        _this._positionY = document.body.scrollTop || document.documentElement.scrollTop;
        _this._direction = _this._positionY > _this._targetPositionY ? -1 : 1;
        _this._targetPositionYWithOffset = _this._targetPositionY + _this._direction;
        _this._velocityY = 0;
    
        if (_this._positionY !== _this._targetPositionY) {
          // start animation
          _this.options.onStart();
    
          _this._animate();
        } else {
          // page is already at the position
          _this.options.onAlreadyAtPositions();
        }
      };
    
      this._animate = function () {
        var distance = _this._update();
    
        _this._render();
    
        if (_this._direction === 1 && _this._targetPositionY > _this._positionY || _this._direction === -1 && _this._targetPositionY < _this._positionY) {
          // calculate next position
          _this._raf = requestAnimationFrame(_this._animate);
    
          _this.options.onTick();
        } else {
          // finish and set position to the final position
          _this._positionY = _this._targetPositionY;
    
          _this._render();
    
          _this._raf = null;
    
          _this.options.onTick();
    
          _this.options.onEnd(); // this.triggerEvent('scrollDone')
    
        }
      };
    
      this._update = function () {
        var distance = _this._targetPositionYWithOffset - _this._positionY;
        var attraction = distance * _this.options.acceleration;
        _this._velocityY += attraction;
        _this._velocityY *= _this.options.friction;
        _this._positionY += _this._velocityY;
        return Math.abs(distance);
      };
    
      this._render = function () {
        window.scrollTo(0, _this._positionY);
      }; // default options
    
    
      var defaults = {
        onAlreadyAtPositions: function onAlreadyAtPositions() {},
        onCancel: function onCancel() {},
        onEnd: function onEnd() {},
        onStart: function onStart() {},
        onTick: function onTick() {},
        friction: .7,
        // 1 - .3
        acceleration: .04 // merge options
    
      };
      this.options = _extends({}, defaults, options); // set reverse friction
    
      if (options && options.friction) {
        this.options.friction = 1 - options.friction;
      } // register listener for cancel on wheel event
    
    
      window.addEventListener('mousewheel', function (event) {
        if (_this._raf) {
          _this.options.onCancel();
    
          cancelAnimationFrame(_this._raf);
          _this._raf = null;
        }
      }, {
        passive: true
      });
    };
    
    exports["default"] = Scrl;
    
    },{}],54:[function(require,module,exports){
    "use strict";
    /*
     * A fast javascript implementation of simplex noise by Jonas Wagner
    
    Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
    Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
    With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
    Better rank ordering method by Stefan Gustavson in 2012.
    
     Copyright (c) 2022 Jonas Wagner
    
     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:
    
     The above copyright notice and this permission notice shall be included in all
     copies or substantial portions of the Software.
    
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     SOFTWARE.
     */
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buildPermutationTable = exports.createNoise4D = exports.createNoise3D = exports.createNoise2D = void 0; // these #__PURE__ comments help uglifyjs with dead code removal
    // 
    
    var F2 = /*#__PURE__*/0.5 * (Math.sqrt(3.0) - 1.0);
    var G2 = /*#__PURE__*/(3.0 - Math.sqrt(3.0)) / 6.0;
    var F3 = 1.0 / 3.0;
    var G3 = 1.0 / 6.0;
    var F4 = /*#__PURE__*/(Math.sqrt(5.0) - 1.0) / 4.0;
    var G4 = /*#__PURE__*/(5.0 - Math.sqrt(5.0)) / 20.0; // I'm really not sure why this | 0 (basically a coercion to int)
    // is making this faster but I get ~5 million ops/sec more on the
    // benchmarks across the board or a ~10% speedup.
    
    var fastFloor = function fastFloor(x) {
      return Math.floor(x) | 0;
    };
    
    var grad2 = /*#__PURE__*/new Float64Array([1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0, -1]); // double seems to be faster than single or int's
    // probably because most operations are in double precision
    
    var grad3 = /*#__PURE__*/new Float64Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]); // double is a bit quicker here as well
    
    var grad4 = /*#__PURE__*/new Float64Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    /**
     * Creates a 2D noise function
     * @param random the random function that will be used to build the permutation table
     * @returns {NoiseFunction2D}
     */
    
    function createNoise2D() {
      var random = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Math.random;
      var perm = buildPermutationTable(random); // precalculating this yields a little ~3% performance improvement.
    
      var permGrad2x = new Float64Array(perm).map(function (v) {
        return grad2[v % 12 * 2];
      });
      var permGrad2y = new Float64Array(perm).map(function (v) {
        return grad2[v % 12 * 2 + 1];
      });
      return function noise2D(x, y) {
        // if(!isFinite(x) || !isFinite(y)) return 0;
        var n0 = 0; // Noise contributions from the three corners
    
        var n1 = 0;
        var n2 = 0; // Skew the input space to determine which simplex cell we're in
    
        var s = (x + y) * F2; // Hairy factor for 2D
    
        var i = fastFloor(x + s);
        var j = fastFloor(y + s);
        var t = (i + j) * G2;
        var X0 = i - t; // Unskew the cell origin back to (x,y) space
    
        var Y0 = j - t;
        var x0 = x - X0; // The x,y distances from the cell origin
    
        var y0 = y - Y0; // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
    
        var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    
        if (x0 > y0) {
          i1 = 1;
          j1 = 0;
        } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        else {
          i1 = 0;
          j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
    
    
        var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    
        var y1 = y0 - j1 + G2;
        var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
    
        var y2 = y0 - 1.0 + 2.0 * G2; // Work out the hashed gradient indices of the three simplex corners
    
        var ii = i & 255;
        var jj = j & 255; // Calculate the contribution from the three corners
    
        var t0 = 0.5 - x0 * x0 - y0 * y0;
    
        if (t0 >= 0) {
          var gi0 = ii + perm[jj];
          var g0x = permGrad2x[gi0];
          var g0y = permGrad2y[gi0];
          t0 *= t0; // n0 = t0 * t0 * (grad2[gi0] * x0 + grad2[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
    
          n0 = t0 * t0 * (g0x * x0 + g0y * y0);
        }
    
        var t1 = 0.5 - x1 * x1 - y1 * y1;
    
        if (t1 >= 0) {
          var gi1 = ii + i1 + perm[jj + j1];
          var g1x = permGrad2x[gi1];
          var g1y = permGrad2y[gi1];
          t1 *= t1; // n1 = t1 * t1 * (grad2[gi1] * x1 + grad2[gi1 + 1] * y1);
    
          n1 = t1 * t1 * (g1x * x1 + g1y * y1);
        }
    
        var t2 = 0.5 - x2 * x2 - y2 * y2;
    
        if (t2 >= 0) {
          var gi2 = ii + 1 + perm[jj + 1];
          var g2x = permGrad2x[gi2];
          var g2y = permGrad2y[gi2];
          t2 *= t2; // n2 = t2 * t2 * (grad2[gi2] * x2 + grad2[gi2 + 1] * y2);
    
          n2 = t2 * t2 * (g2x * x2 + g2y * y2);
        } // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
    
    
        return 70.0 * (n0 + n1 + n2);
      };
    }
    
    exports.createNoise2D = createNoise2D;
    /**
     * Creates a 3D noise function
     * @param random the random function that will be used to build the permutation table
     * @returns {NoiseFunction3D}
     */
    
    function createNoise3D() {
      var random = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Math.random;
      var perm = buildPermutationTable(random); // precalculating these seems to yield a speedup of over 15%
    
      var permGrad3x = new Float64Array(perm).map(function (v) {
        return grad3[v % 12 * 3];
      });
      var permGrad3y = new Float64Array(perm).map(function (v) {
        return grad3[v % 12 * 3 + 1];
      });
      var permGrad3z = new Float64Array(perm).map(function (v) {
        return grad3[v % 12 * 3 + 2];
      });
      return function noise3D(x, y, z) {
        var n0, n1, n2, n3; // Noise contributions from the four corners
        // Skew the input space to determine which simplex cell we're in
    
        var s = (x + y + z) * F3; // Very nice and simple skew factor for 3D
    
        var i = fastFloor(x + s);
        var j = fastFloor(y + s);
        var k = fastFloor(z + s);
        var t = (i + j + k) * G3;
        var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
    
        var Y0 = j - t;
        var Z0 = k - t;
        var x0 = x - X0; // The x,y,z distances from the cell origin
    
        var y0 = y - Y0;
        var z0 = z - Z0; // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
        // Determine which simplex we are in.
    
        var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    
        var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    
        if (x0 >= y0) {
          if (y0 >= z0) {
            i1 = 1;
            j1 = 0;
            k1 = 0;
            i2 = 1;
            j2 = 1;
            k2 = 0;
          } // X Y Z order
          else if (x0 >= z0) {
            i1 = 1;
            j1 = 0;
            k1 = 0;
            i2 = 1;
            j2 = 0;
            k2 = 1;
          } // X Z Y order
          else {
            i1 = 0;
            j1 = 0;
            k1 = 1;
            i2 = 1;
            j2 = 0;
            k2 = 1;
          } // Z X Y order
    
        } else {
          // x0<y0
          if (y0 < z0) {
            i1 = 0;
            j1 = 0;
            k1 = 1;
            i2 = 0;
            j2 = 1;
            k2 = 1;
          } // Z Y X order
          else if (x0 < z0) {
            i1 = 0;
            j1 = 1;
            k1 = 0;
            i2 = 0;
            j2 = 1;
            k2 = 1;
          } // Y Z X order
          else {
            i1 = 0;
            j1 = 1;
            k1 = 0;
            i2 = 1;
            j2 = 1;
            k2 = 0;
          } // Y X Z order
    
        } // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
        // c = 1/6.
    
    
        var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
    
        var y1 = y0 - j1 + G3;
        var z1 = z0 - k1 + G3;
        var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
    
        var y2 = y0 - j2 + 2.0 * G3;
        var z2 = z0 - k2 + 2.0 * G3;
        var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
    
        var y3 = y0 - 1.0 + 3.0 * G3;
        var z3 = z0 - 1.0 + 3.0 * G3; // Work out the hashed gradient indices of the four simplex corners
    
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255; // Calculate the contribution from the four corners
    
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) n0 = 0.0;else {
          var gi0 = ii + perm[jj + perm[kk]];
          t0 *= t0;
          n0 = t0 * t0 * (permGrad3x[gi0] * x0 + permGrad3y[gi0] * y0 + permGrad3z[gi0] * z0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) n1 = 0.0;else {
          var gi1 = ii + i1 + perm[jj + j1 + perm[kk + k1]];
          t1 *= t1;
          n1 = t1 * t1 * (permGrad3x[gi1] * x1 + permGrad3y[gi1] * y1 + permGrad3z[gi1] * z1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) n2 = 0.0;else {
          var gi2 = ii + i2 + perm[jj + j2 + perm[kk + k2]];
          t2 *= t2;
          n2 = t2 * t2 * (permGrad3x[gi2] * x2 + permGrad3y[gi2] * y2 + permGrad3z[gi2] * z2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) n3 = 0.0;else {
          var gi3 = ii + 1 + perm[jj + 1 + perm[kk + 1]];
          t3 *= t3;
          n3 = t3 * t3 * (permGrad3x[gi3] * x3 + permGrad3y[gi3] * y3 + permGrad3z[gi3] * z3);
        } // Add contributions from each corner to get the final noise value.
        // The result is scaled to stay just inside [-1,1]
    
        return 32.0 * (n0 + n1 + n2 + n3);
      };
    }
    
    exports.createNoise3D = createNoise3D;
    /**
     * Creates a 4D noise function
     * @param random the random function that will be used to build the permutation table
     * @returns {NoiseFunction3D}
     */
    
    function createNoise4D() {
      var random = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Math.random;
      var perm = buildPermutationTable(random); // precalculating these leads to a ~10% speedup
    
      var permGrad4x = new Float64Array(perm).map(function (v) {
        return grad4[v % 32 * 4];
      });
      var permGrad4y = new Float64Array(perm).map(function (v) {
        return grad4[v % 32 * 4 + 1];
      });
      var permGrad4z = new Float64Array(perm).map(function (v) {
        return grad4[v % 32 * 4 + 2];
      });
      var permGrad4w = new Float64Array(perm).map(function (v) {
        return grad4[v % 32 * 4 + 3];
      });
      return function noise4D(x, y, z, w) {
        var n0, n1, n2, n3, n4; // Noise contributions from the five corners
        // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
    
        var s = (x + y + z + w) * F4; // Factor for 4D skewing
    
        var i = fastFloor(x + s);
        var j = fastFloor(y + s);
        var k = fastFloor(z + s);
        var l = fastFloor(w + s);
        var t = (i + j + k + l) * G4; // Factor for 4D unskewing
    
        var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
    
        var Y0 = j - t;
        var Z0 = k - t;
        var W0 = l - t;
        var x0 = x - X0; // The x,y,z,w distances from the cell origin
    
        var y0 = y - Y0;
        var z0 = z - Z0;
        var w0 = w - W0; // For the 4D case, the simplex is a 4D shape I won't even try to describe.
        // To find out which of the 24 possible simplices we're in, we need to
        // determine the magnitude ordering of x0, y0, z0 and w0.
        // Six pair-wise comparisons are performed between each possible pair
        // of the four coordinates, and the results are used to rank the numbers.
    
        var rankx = 0;
        var ranky = 0;
        var rankz = 0;
        var rankw = 0;
        if (x0 > y0) rankx++;else ranky++;
        if (x0 > z0) rankx++;else rankz++;
        if (x0 > w0) rankx++;else rankw++;
        if (y0 > z0) ranky++;else rankz++;
        if (y0 > w0) ranky++;else rankw++;
        if (z0 > w0) rankz++;else rankw++; // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
        // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
        // impossible. Only the 24 indices which have non-zero entries make any sense.
        // We use a thresholding to set the coordinates in turn from the largest magnitude.
        // Rank 3 denotes the largest coordinate.
        // Rank 2 denotes the second largest coordinate.
        // Rank 1 denotes the second smallest coordinate.
        // The integer offsets for the second simplex corner
    
        var i1 = rankx >= 3 ? 1 : 0;
        var j1 = ranky >= 3 ? 1 : 0;
        var k1 = rankz >= 3 ? 1 : 0;
        var l1 = rankw >= 3 ? 1 : 0; // The integer offsets for the third simplex corner
    
        var i2 = rankx >= 2 ? 1 : 0;
        var j2 = ranky >= 2 ? 1 : 0;
        var k2 = rankz >= 2 ? 1 : 0;
        var l2 = rankw >= 2 ? 1 : 0; // The integer offsets for the fourth simplex corner
    
        var i3 = rankx >= 1 ? 1 : 0;
        var j3 = ranky >= 1 ? 1 : 0;
        var k3 = rankz >= 1 ? 1 : 0;
        var l3 = rankw >= 1 ? 1 : 0; // The fifth corner has all coordinate offsets = 1, so no need to compute that.
    
        var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
    
        var y1 = y0 - j1 + G4;
        var z1 = z0 - k1 + G4;
        var w1 = w0 - l1 + G4;
        var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
    
        var y2 = y0 - j2 + 2.0 * G4;
        var z2 = z0 - k2 + 2.0 * G4;
        var w2 = w0 - l2 + 2.0 * G4;
        var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
    
        var y3 = y0 - j3 + 3.0 * G4;
        var z3 = z0 - k3 + 3.0 * G4;
        var w3 = w0 - l3 + 3.0 * G4;
        var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
    
        var y4 = y0 - 1.0 + 4.0 * G4;
        var z4 = z0 - 1.0 + 4.0 * G4;
        var w4 = w0 - 1.0 + 4.0 * G4; // Work out the hashed gradient indices of the five simplex corners
    
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255;
        var ll = l & 255; // Calculate the contribution from the five corners
    
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
        if (t0 < 0) n0 = 0.0;else {
          var gi0 = ii + perm[jj + perm[kk + perm[ll]]];
          t0 *= t0;
          n0 = t0 * t0 * (permGrad4x[gi0] * x0 + permGrad4y[gi0] * y0 + permGrad4z[gi0] * z0 + permGrad4w[gi0] * w0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
        if (t1 < 0) n1 = 0.0;else {
          var gi1 = ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]];
          t1 *= t1;
          n1 = t1 * t1 * (permGrad4x[gi1] * x1 + permGrad4y[gi1] * y1 + permGrad4z[gi1] * z1 + permGrad4w[gi1] * w1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
        if (t2 < 0) n2 = 0.0;else {
          var gi2 = ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]];
          t2 *= t2;
          n2 = t2 * t2 * (permGrad4x[gi2] * x2 + permGrad4y[gi2] * y2 + permGrad4z[gi2] * z2 + permGrad4w[gi2] * w2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
        if (t3 < 0) n3 = 0.0;else {
          var gi3 = ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]];
          t3 *= t3;
          n3 = t3 * t3 * (permGrad4x[gi3] * x3 + permGrad4y[gi3] * y3 + permGrad4z[gi3] * z3 + permGrad4w[gi3] * w3);
        }
        var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
        if (t4 < 0) n4 = 0.0;else {
          var gi4 = ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]];
          t4 *= t4;
          n4 = t4 * t4 * (permGrad4x[gi4] * x4 + permGrad4y[gi4] * y4 + permGrad4z[gi4] * z4 + permGrad4w[gi4] * w4);
        } // Sum up and scale the result to cover the range [-1,1]
    
        return 27.0 * (n0 + n1 + n2 + n3 + n4);
      };
    }
    
    exports.createNoise4D = createNoise4D;
    /**
     * Builds a random permutation table.
     * This is exported only for (internal) testing purposes.
     * Do not rely on this export.
     * @private
     */
    
    function buildPermutationTable(random) {
      var tableSize = 512;
      var p = new Uint8Array(tableSize);
    
      for (var i = 0; i < tableSize / 2; i++) {
        p[i] = i;
      }
    
      for (var _i = 0; _i < tableSize / 2 - 1; _i++) {
        var r = _i + ~~(random() * (256 - _i));
        var aux = p[_i];
        p[_i] = p[r];
        p[r] = aux;
      }
    
      for (var _i2 = 256; _i2 < tableSize; _i2++) {
        p[_i2] = p[_i2 - 256];
      }
    
      return p;
    }
    
    exports.buildPermutationTable = buildPermutationTable;
    
    },{}],55:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Link = function () {
      function Link(elementOrUrl) {
        _classCallCheck(this, Link);
    
        if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) {
          this.link = elementOrUrl;
        } else {
          this.link = document.createElement('a');
          this.link.href = elementOrUrl;
        }
      }
    
      _createClass(Link, [{
        key: 'getPath',
        value: function getPath() {
          var path = this.link.pathname;
    
          if (path[0] !== '/') {
            path = '/' + path;
          }
    
          return path;
        }
      }, {
        key: 'getAddress',
        value: function getAddress() {
          var path = this.link.pathname + this.link.search;
    
          if (this.link.getAttribute('xlink:href')) {
            path = this.link.getAttribute('xlink:href');
          }
    
          if (path[0] !== '/') {
            path = '/' + path;
          }
    
          return path;
        }
      }, {
        key: 'getHash',
        value: function getHash() {
          return this.link.hash;
        }
      }]);
    
      return Link;
    }();
    
    exports["default"] = Link;
    
    },{}],56:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var classify = function classify(text) {
      var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
      .replace(/\//g, '-') // Replace / with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
    
      if (output[0] === '/') output = output.splice(1);
      if (output === '') output = 'homepage';
      return output;
    };
    
    exports["default"] = classify;
    
    },{}],57:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var createHistoryRecord = function createHistoryRecord(url) {
      window.history.pushState({
        url: url || window.location.href.split(window.location.hostname)[1],
        random: Math.random(),
        source: 'swup'
      }, document.getElementsByTagName('title')[0].innerText, url || window.location.href.split(window.location.hostname)[1]);
    };
    
    exports["default"] = createHistoryRecord;
    
    },{}],58:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var fetch = function fetch(setOptions) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaults = {
        url: window.location.pathname + window.location.search,
        method: 'GET',
        data: null,
        headers: {}
      };
    
      var options = _extends({}, defaults, setOptions);
    
      var request = new XMLHttpRequest();
    
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status !== 500) {
            callback(request);
          } else {
            callback(request);
          }
        }
      };
    
      request.open(options.method, options.url, true);
      Object.keys(options.headers).forEach(function (key) {
        request.setRequestHeader(key, options.headers[key]);
      });
      request.send(options.data);
      return request;
    };
    
    exports["default"] = fetch;
    
    },{}],59:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var getCurrentUrl = function getCurrentUrl() {
      return window.location.pathname + window.location.search;
    };
    
    exports["default"] = getCurrentUrl;
    
    },{}],60:[function(require,module,exports){
    'use strict';
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _typeof3 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
      return (0, _typeof3["default"])(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
    };
    
    var _utils = require('../utils');
    
    var getDataFromHtml = function getDataFromHtml(html, containers) {
      var fakeDom = document.createElement('html');
      fakeDom.innerHTML = html;
      var blocks = [];
    
      var _loop = function _loop(i) {
        if (fakeDom.querySelector(containers[i]) == null) {
          // page in invalid
          return {
            v: null
          };
        } else {
          (0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
            (0, _utils.queryAll)(containers[i], fakeDom)[index].setAttribute('data-swup', blocks.length); // marks element with data-swup
    
            blocks.push((0, _utils.queryAll)(containers[i], fakeDom)[index].outerHTML);
          });
        }
      };
    
      for (var i = 0; i < containers.length; i++) {
        var _ret = _loop(i);
    
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    
      var json = {
        title: fakeDom.querySelector('title').innerText,
        pageClass: fakeDom.querySelector('body').className,
        originalContent: html,
        blocks: blocks
      }; // to prevent memory leaks
    
      fakeDom.innerHTML = '';
      fakeDom = null;
      return json;
    };
    
    exports["default"] = getDataFromHtml;
    
    },{"../utils":75,"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41}],61:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Link = exports.markSwupElements = exports.getCurrentUrl = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;
    
    var _classify = require('./classify');
    
    var _classify2 = _interopRequireDefault(_classify);
    
    var _createHistoryRecord = require('./createHistoryRecord');
    
    var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);
    
    var _getDataFromHtml = require('./getDataFromHtml');
    
    var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);
    
    var _fetch = require('./fetch');
    
    var _fetch2 = _interopRequireDefault(_fetch);
    
    var _transitionEnd = require('./transitionEnd');
    
    var _transitionEnd2 = _interopRequireDefault(_transitionEnd);
    
    var _getCurrentUrl = require('./getCurrentUrl');
    
    var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);
    
    var _markSwupElements = require('./markSwupElements');
    
    var _markSwupElements2 = _interopRequireDefault(_markSwupElements);
    
    var _Link = require('./Link');
    
    var _Link2 = _interopRequireDefault(_Link);
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    var classify = exports.classify = _classify2["default"];
    var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2["default"];
    var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2["default"];
    var fetch = exports.fetch = _fetch2["default"];
    var transitionEnd = exports.transitionEnd = _transitionEnd2["default"];
    var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2["default"];
    var markSwupElements = exports.markSwupElements = _markSwupElements2["default"];
    var Link = exports.Link = _Link2["default"];
    
    },{"./Link":55,"./classify":56,"./createHistoryRecord":57,"./fetch":58,"./getCurrentUrl":59,"./getDataFromHtml":60,"./markSwupElements":62,"./transitionEnd":63}],62:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _utils = require('../utils');
    
    var markSwupElements = function markSwupElements(element, containers) {
      var blocks = 0;
    
      var _loop = function _loop(i) {
        if (element.querySelector(containers[i]) == null) {
          console.warn('Element ' + containers[i] + ' is not in current page.');
        } else {
          (0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
            (0, _utils.queryAll)(containers[i], element)[index].setAttribute('data-swup', blocks);
            blocks++;
          });
        }
      };
    
      for (var i = 0; i < containers.length; i++) {
        _loop(i);
      }
    };
    
    exports["default"] = markSwupElements;
    
    },{"../utils":75}],63:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var transitionEnd = function transitionEnd() {
      var el = document.createElement('div');
      var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
      };
    
      for (var name in transEndEventNames) {
        if (el.style[name] !== undefined) {
          return transEndEventNames[name];
        }
      }
    
      return false;
    };
    
    exports["default"] = transitionEnd;
    
    },{}],64:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }(); // modules
    
    
    var _delegate = require('delegate');
    
    var _delegate2 = _interopRequireDefault(_delegate);
    
    var _Cache = require('./modules/Cache');
    
    var _Cache2 = _interopRequireDefault(_Cache);
    
    var _loadPage = require('./modules/loadPage');
    
    var _loadPage2 = _interopRequireDefault(_loadPage);
    
    var _renderPage = require('./modules/renderPage');
    
    var _renderPage2 = _interopRequireDefault(_renderPage);
    
    var _triggerEvent = require('./modules/triggerEvent');
    
    var _triggerEvent2 = _interopRequireDefault(_triggerEvent);
    
    var _on = require('./modules/on');
    
    var _on2 = _interopRequireDefault(_on);
    
    var _off = require('./modules/off');
    
    var _off2 = _interopRequireDefault(_off);
    
    var _updateTransition = require('./modules/updateTransition');
    
    var _updateTransition2 = _interopRequireDefault(_updateTransition);
    
    var _getAnimationPromises = require('./modules/getAnimationPromises');
    
    var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);
    
    var _getPageData = require('./modules/getPageData');
    
    var _getPageData2 = _interopRequireDefault(_getPageData);
    
    var _plugins = require('./modules/plugins');
    
    var _utils = require('./utils');
    
    var _helpers = require('./helpers');
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Swup = function () {
      function Swup(setOptions) {
        _classCallCheck(this, Swup); // default options
    
    
        var defaults = {
          animateHistoryBrowsing: false,
          animationSelector: '[class*="transition-"]',
          linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
          cache: true,
          containers: ['#swup'],
          requestHeaders: {
            'X-Requested-With': 'swup',
            Accept: 'text/html, application/xhtml+xml'
          },
          plugins: [],
          skipPopStateHandling: function skipPopStateHandling(event) {
            return !(event.state && event.state.source === 'swup');
          }
        }; // merge options
    
        var options = _extends({}, defaults, setOptions); // handler arrays
    
    
        this._handlers = {
          animationInDone: [],
          animationInStart: [],
          animationOutDone: [],
          animationOutStart: [],
          animationSkipped: [],
          clickLink: [],
          contentReplaced: [],
          disabled: [],
          enabled: [],
          openPageInNewTab: [],
          pageLoaded: [],
          pageRetrievedFromCache: [],
          pageView: [],
          popState: [],
          samePage: [],
          samePageWithHash: [],
          serverError: [],
          transitionStart: [],
          transitionEnd: [],
          willReplaceContent: []
        }; // variable for id of element to scroll to after render
    
        this.scrollToElement = null; // variable for promise used for preload, so no new loading of the same page starts while page is loading
    
        this.preloadPromise = null; // variable for save options
    
        this.options = options; // variable for plugins array
    
        this.plugins = []; // variable for current transition object
    
        this.transition = {}; // variable for keeping event listeners from "delegate"
    
        this.delegatedListeners = {}; // so we are able to remove the listener
    
        this.boundPopStateHandler = this.popStateHandler.bind(this); // make modules accessible in instance
    
        this.cache = new _Cache2["default"]();
        this.cache.swup = this;
        this.loadPage = _loadPage2["default"];
        this.renderPage = _renderPage2["default"];
        this.triggerEvent = _triggerEvent2["default"];
        this.on = _on2["default"];
        this.off = _off2["default"];
        this.updateTransition = _updateTransition2["default"];
        this.getAnimationPromises = _getAnimationPromises2["default"];
        this.getPageData = _getPageData2["default"];
    
        this.log = function () {}; // here so it can be used by plugins
    
    
        this.use = _plugins.use;
        this.unuse = _plugins.unuse;
        this.findPlugin = _plugins.findPlugin; // enable swup
    
        this.enable();
      }
    
      _createClass(Swup, [{
        key: 'enable',
        value: function enable() {
          var _this = this; // check for Promise support
    
    
          if (typeof Promise === 'undefined') {
            console.warn('Promise is not supported');
            return;
          } // add event listeners
    
    
          this.delegatedListeners.click = (0, _delegate2["default"])(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
          window.addEventListener('popstate', this.boundPopStateHandler); // initial save to cache
    
          var page = (0, _helpers.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
          page.url = page.responseURL = (0, _helpers.getCurrentUrl)();
    
          if (this.options.cache) {
            this.cache.cacheUrl(page);
          } // mark swup blocks in html
    
    
          (0, _helpers.markSwupElements)(document.documentElement, this.options.containers); // mount plugins
    
          this.options.plugins.forEach(function (plugin) {
            _this.use(plugin);
          }); // modify initial history record
    
          window.history.replaceState(Object.assign({}, window.history.state, {
            url: window.location.href,
            random: Math.random(),
            source: 'swup'
          }), document.title, window.location.href); // trigger enabled event
    
          this.triggerEvent('enabled'); // add swup-enabled class to html tag
    
          document.documentElement.classList.add('swup-enabled'); // trigger page view event
    
          this.triggerEvent('pageView');
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          var _this2 = this; // remove delegated listeners
    
    
          this.delegatedListeners.click.destroy(); // remove popstate listener
    
          window.removeEventListener('popstate', this.boundPopStateHandler); // empty cache
    
          this.cache.empty(); // unmount plugins
    
          this.options.plugins.forEach(function (plugin) {
            _this2.unuse(plugin);
          }); // remove swup data atributes from blocks
    
          (0, _utils.queryAll)('[data-swup]').forEach(function (element) {
            element.removeAttribute('data-swup');
          }); // remove handlers
    
          this.off(); // trigger disable event
    
          this.triggerEvent('disabled'); // remove swup-enabled class from html tag
    
          document.documentElement.classList.remove('swup-enabled');
        }
      }, {
        key: 'linkClickHandler',
        value: function linkClickHandler(event) {
          // no control key pressed
          if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
            // index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
            if (event.button === 0) {
              this.triggerEvent('clickLink', event);
              event.preventDefault();
              var link = new _helpers.Link(event.delegateTarget);
    
              if (link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '') {
                // link to the same URL
                if (link.getHash() != '') {
                  // link to the same URL with hash
                  this.triggerEvent('samePageWithHash', event);
                  var element = document.querySelector(link.getHash());
    
                  if (element != null) {
                    history.replaceState({
                      url: link.getAddress() + link.getHash(),
                      random: Math.random(),
                      source: 'swup'
                    }, document.title, link.getAddress() + link.getHash());
                  } else {
                    // referenced element not found
                    console.warn('Element for offset not found (' + link.getHash() + ')');
                  }
                } else {
                  // link to the same URL without hash
                  this.triggerEvent('samePage', event);
                }
              } else {
                // link to different url
                if (link.getHash() != '') {
                  this.scrollToElement = link.getHash();
                } // get custom transition from data
    
    
                var customTransition = event.delegateTarget.getAttribute('data-swup-transition'); // load page
    
                this.loadPage({
                  url: link.getAddress(),
                  customTransition: customTransition
                }, false);
              }
            }
          } else {
            // open in new tab (do nothing)
            this.triggerEvent('openPageInNewTab', event);
          }
        }
      }, {
        key: 'popStateHandler',
        value: function popStateHandler(event) {
          if (this.options.skipPopStateHandling(event)) return;
          var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);
    
          if (link.getHash() !== '') {
            this.scrollToElement = link.getHash();
          } else {
            event.preventDefault();
          }
    
          this.triggerEvent('popState', event);
          this.loadPage({
            url: link.getAddress()
          }, event);
        }
      }]);
    
      return Swup;
    }();
    
    exports["default"] = Swup;
    
    },{"./helpers":61,"./modules/Cache":65,"./modules/getAnimationPromises":66,"./modules/getPageData":67,"./modules/loadPage":68,"./modules/off":69,"./modules/on":70,"./modules/plugins":71,"./modules/renderPage":72,"./modules/triggerEvent":73,"./modules/updateTransition":74,"./utils":75,"delegate":77}],65:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Cache = exports.Cache = function () {
      function Cache() {
        _classCallCheck(this, Cache);
    
        this.pages = {};
        this.last = null;
      }
    
      _createClass(Cache, [{
        key: 'cacheUrl',
        value: function cacheUrl(page) {
          if (page.url in this.pages === false) {
            this.pages[page.url] = page;
          }
    
          this.last = this.pages[page.url];
          this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
        }
      }, {
        key: 'getPage',
        value: function getPage(url) {
          return this.pages[url];
        }
      }, {
        key: 'getCurrentPage',
        value: function getCurrentPage() {
          return this.getPage(window.location.pathname + window.location.search);
        }
      }, {
        key: 'exists',
        value: function exists(url) {
          return url in this.pages;
        }
      }, {
        key: 'empty',
        value: function empty() {
          this.pages = {};
          this.last = null;
          this.swup.log('Cache cleared');
        }
      }, {
        key: 'remove',
        value: function remove(url) {
          delete this.pages[url];
        }
      }]);
    
      return Cache;
    }();
    
    exports["default"] = Cache;
    
    },{}],66:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _utils = require('../utils');
    
    var _helpers = require('../helpers');
    
    var getAnimationPromises = function getAnimationPromises() {
      var promises = [];
      var animatedElements = (0, _utils.queryAll)(this.options.animationSelector);
      animatedElements.forEach(function (element) {
        var promise = new Promise(function (resolve) {
          element.addEventListener((0, _helpers.transitionEnd)(), function (event) {
            if (element == event.target) {
              resolve();
            }
          });
        });
        promises.push(promise);
      });
      return promises;
    };
    
    exports["default"] = getAnimationPromises;
    
    },{"../helpers":61,"../utils":75}],67:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _helpers = require('../helpers');
    
    var getPageData = function getPageData(request) {
      // this method can be replaced in case other content than html is expected to be received from server
      // this function should always return {title, pageClass, originalContent, blocks, responseURL}
      // in case page has invalid structure - return null
      var html = request.responseText;
      var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);
    
      if (pageObject) {
        pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
      } else {
        console.warn('Received page is invalid.');
        return null;
      }
    
      return pageObject;
    };
    
    exports["default"] = getPageData;
    
    },{"../helpers":61}],68:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _helpers = require('../helpers');
    
    var loadPage = function loadPage(data, popstate) {
      var _this = this; // create array for storing animation promises
    
    
      var animationPromises = [],
          xhrPromise = void 0;
    
      var animateOut = function animateOut() {
        _this.triggerEvent('animationOutStart'); // handle classes
    
    
        document.documentElement.classList.add('is-changing');
        document.documentElement.classList.add('is-leaving');
        document.documentElement.classList.add('is-animating');
    
        if (popstate) {
          document.documentElement.classList.add('is-popstate');
        }
    
        document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url)); // animation promise stuff
    
        animationPromises = _this.getAnimationPromises('out');
        Promise.all(animationPromises).then(function () {
          _this.triggerEvent('animationOutDone');
        }); // create history record if this is not a popstate call
    
        if (!popstate) {
          // create pop element with or without anchor
          var state = void 0;
    
          if (_this.scrollToElement != null) {
            state = data.url + _this.scrollToElement;
          } else {
            state = data.url;
          }
    
          (0, _helpers.createHistoryRecord)(state);
        }
      };
    
      this.triggerEvent('transitionStart', popstate); // set transition object
    
      if (data.customTransition != null) {
        this.updateTransition(window.location.pathname, data.url, data.customTransition);
        document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
      } else {
        this.updateTransition(window.location.pathname, data.url);
      } // start/skip animation
    
    
      if (!popstate || this.options.animateHistoryBrowsing) {
        animateOut();
      } else {
        this.triggerEvent('animationSkipped');
      } // start/skip loading of page
    
    
      if (this.cache.exists(data.url)) {
        xhrPromise = new Promise(function (resolve) {
          resolve();
        });
        this.triggerEvent('pageRetrievedFromCache');
      } else {
        if (!this.preloadPromise || this.preloadPromise.route != data.url) {
          xhrPromise = new Promise(function (resolve, reject) {
            (0, _helpers.fetch)(_extends({}, data, {
              headers: _this.options.requestHeaders
            }), function (response) {
              if (response.status === 500) {
                _this.triggerEvent('serverError');
    
                reject(data.url);
                return;
              } else {
                // get json data
                var page = _this.getPageData(response);
    
                if (page != null) {
                  page.url = data.url;
                } else {
                  reject(data.url);
                  return;
                } // render page
    
    
                _this.cache.cacheUrl(page);
    
                _this.triggerEvent('pageLoaded');
              }
    
              resolve();
            });
          });
        } else {
          xhrPromise = this.preloadPromise;
        }
      } // when everything is ready, handle the outcome
    
    
      Promise.all(animationPromises.concat([xhrPromise])).then(function () {
        // render page
        _this.renderPage(_this.cache.getPage(data.url), popstate);
    
        _this.preloadPromise = null;
      })["catch"](function (errorUrl) {
        // rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
        _this.options.skipPopStateHandling = function () {
          window.location = errorUrl;
          return true;
        }; // go back to the actual page were still at
    
    
        window.history.go(-1);
      });
    };
    
    exports["default"] = loadPage;
    
    },{"../helpers":61}],69:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var off = function off(event, handler) {
      var _this = this;
    
      if (event != null) {
        if (handler != null) {
          if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
            return savedHandler === handler;
          }).length) {
            var toRemove = this._handlers[event].filter(function (savedHandler) {
              return savedHandler === handler;
            })[0];
    
            var index = this._handlers[event].indexOf(toRemove);
    
            if (index > -1) {
              this._handlers[event].splice(index, 1);
            }
          } else {
            console.warn("Handler for event '" + event + "' no found.");
          }
        } else {
          this._handlers[event] = [];
        }
      } else {
        Object.keys(this._handlers).forEach(function (keys) {
          _this._handlers[keys] = [];
        });
      }
    };
    
    exports["default"] = off;
    
    },{}],70:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var on = function on(event, handler) {
      if (this._handlers[event]) {
        this._handlers[event].push(handler);
      } else {
        console.warn("Unsupported event " + event + ".");
      }
    };
    
    exports["default"] = on;
    
    },{}],71:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var use = exports.use = function use(plugin) {
      if (!plugin.isSwupPlugin) {
        console.warn('Not swup plugin instance ' + plugin + '.');
        return;
      }
    
      this.plugins.push(plugin);
      plugin.swup = this;
    
      if (typeof plugin._beforeMount === 'function') {
        plugin._beforeMount();
      }
    
      plugin.mount();
      return this.plugins;
    };
    
    var unuse = exports.unuse = function unuse(plugin) {
      var pluginReference = void 0;
    
      if (typeof plugin === 'string') {
        pluginReference = this.plugins.find(function (p) {
          return plugin === p.name;
        });
      } else {
        pluginReference = plugin;
      }
    
      if (!pluginReference) {
        console.warn('No such plugin.');
        return;
      }
    
      pluginReference.unmount();
    
      if (typeof pluginReference._afterUnmount === 'function') {
        pluginReference._afterUnmount();
      }
    
      var index = this.plugins.indexOf(pluginReference);
      this.plugins.splice(index, 1);
      return this.plugins;
    };
    
    var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
      return this.plugins.find(function (p) {
        return pluginName === p.name;
      });
    };
    
    },{}],72:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _utils = require('../utils');
    
    var _helpers = require('../helpers');
    
    var renderPage = function renderPage(page, popstate) {
      var _this = this;
    
      document.documentElement.classList.remove('is-leaving'); // replace state in case the url was redirected
    
      var link = new _helpers.Link(page.responseURL);
    
      if (window.location.pathname !== link.getPath()) {
        window.history.replaceState({
          url: link.getPath(),
          random: Math.random(),
          source: 'swup'
        }, document.title, link.getPath()); // save new record for redirected url
    
        this.cache.cacheUrl(_extends({}, page, {
          url: link.getPath()
        }));
      } // only add for non-popstate transitions
    
    
      if (!popstate || this.options.animateHistoryBrowsing) {
        document.documentElement.classList.add('is-rendering');
      }
    
      this.triggerEvent('willReplaceContent', popstate); // replace blocks
    
      for (var i = 0; i < page.blocks.length; i++) {
        document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
      } // set title
    
    
      document.title = page.title;
      this.triggerEvent('contentReplaced', popstate);
      this.triggerEvent('pageView', popstate); // empty cache if it's disabled (because pages could be preloaded and stuff)
    
      if (!this.options.cache) {
        this.cache.empty();
      } // start animation IN
    
    
      setTimeout(function () {
        if (!popstate || _this.options.animateHistoryBrowsing) {
          _this.triggerEvent('animationInStart');
    
          document.documentElement.classList.remove('is-animating');
        }
      }, 10); // handle end of animation
    
      if (!popstate || this.options.animateHistoryBrowsing) {
        var animationPromises = this.getAnimationPromises('in');
        Promise.all(animationPromises).then(function () {
          _this.triggerEvent('animationInDone');
    
          _this.triggerEvent('transitionEnd', popstate); // remove "to-{page}" classes
    
    
          document.documentElement.className.split(' ').forEach(function (classItem) {
            if (new RegExp('^to-').test(classItem) || classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') {
              document.documentElement.classList.remove(classItem);
            }
          });
        });
      } else {
        this.triggerEvent('transitionEnd', popstate);
      } // reset scroll-to element
    
    
      this.scrollToElement = null;
    };
    
    exports["default"] = renderPage;
    
    },{"../helpers":61,"../utils":75}],73:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var triggerEvent = function triggerEvent(eventName, originalEvent) {
      // call saved handlers with "on" method and pass originalEvent object if available
      this._handlers[eventName].forEach(function (handler) {
        try {
          handler(originalEvent);
        } catch (error) {
          console.error(error);
        }
      }); // trigger event on document with prefix "swup:"
    
    
      var event = new CustomEvent('swup:' + eventName, {
        detail: eventName
      });
      document.dispatchEvent(event);
    };
    
    exports["default"] = triggerEvent;
    
    },{}],74:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var updateTransition = function updateTransition(from, to, custom) {
      // transition routes
      this.transition = {
        from: from,
        to: to,
        custom: custom
      };
    };
    
    exports["default"] = updateTransition;
    
    },{}],75:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var query = exports.query = function query(selector) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    
      if (typeof selector !== 'string') {
        return selector;
      }
    
      return context.querySelector(selector);
    };
    
    var queryAll = exports.queryAll = function queryAll(selector) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    
      if (typeof selector !== 'string') {
        return selector;
      }
    
      return Array.prototype.slice.call(context.querySelectorAll(selector));
    };
    
    },{}],76:[function(require,module,exports){
    arguments[4][48][0].apply(exports,arguments)
    },{"dup":48}],77:[function(require,module,exports){
    "use strict";
    
    var closest = require('./closest');
    /**
     * Delegates event to a selector.
     *
     * @param {Element} element
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} useCapture
     * @return {Object}
     */
    
    
    function delegate(element, selector, type, callback, useCapture) {
      var listenerFn = listener.apply(this, arguments);
      element.addEventListener(type, listenerFn, useCapture);
      return {
        destroy: function destroy() {
          element.removeEventListener(type, listenerFn, useCapture);
        }
      };
    }
    /**
     * Finds closest match and invokes callback.
     *
     * @param {Element} element
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @return {Function}
     */
    
    
    function listener(element, selector, type, callback) {
      return function (e) {
        e.delegateTarget = closest(e.target, selector);
    
        if (e.delegateTarget) {
          callback.call(element, e);
        }
      };
    }
    
    module.exports = delegate;
    
    },{"./closest":76}],78:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
    
    !function (n, t) {
      "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad = t();
    }(void 0, function () {
      "use strict";
    
      function n() {
        return n = Object.assign || function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
    
            for (var i in e) {
              Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
            }
          }
    
          return n;
        }, n.apply(this, arguments);
      }
    
      var t = "undefined" != typeof window,
          e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
          i = t && "IntersectionObserver" in window,
          o = t && "classList" in document.createElement("p"),
          a = t && window.devicePixelRatio > 1,
          r = {
        elements_selector: ".lazy",
        container: e || t ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1
      },
          c = function c(t) {
        return n({}, r, t);
      },
          u = function u(n, t) {
        var e,
            i = "LazyLoad::Initialized",
            o = new n(t);
    
        try {
          e = new CustomEvent(i, {
            detail: {
              instance: o
            }
          });
        } catch (n) {
          (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
            instance: o
          });
        }
    
        window.dispatchEvent(e);
      },
          l = "src",
          s = "srcset",
          f = "sizes",
          d = "poster",
          _ = "llOriginalAttrs",
          g = "loading",
          v = "loaded",
          b = "applied",
          p = "error",
          h = "native",
          m = "data-",
          E = "ll-status",
          I = function I(n, t) {
        return n.getAttribute(m + t);
      },
          y = function y(n) {
        return I(n, E);
      },
          A = function A(n, t) {
        return function (n, t, e) {
          var i = "data-ll-status";
          null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
        }(n, 0, t);
      },
          k = function k(n) {
        return A(n, null);
      },
          L = function L(n) {
        return null === y(n);
      },
          w = function w(n) {
        return y(n) === h;
      },
          x = [g, v, b, p],
          O = function O(n, t, e, i) {
        n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
      },
          N = function N(n, t) {
        o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
      },
          C = function C(n, t) {
        o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
      },
          M = function M(n) {
        return n.llTempImage;
      },
          z = function z(n, t) {
        if (t) {
          var e = t._observer;
          e && e.unobserve(n);
        }
      },
          R = function R(n, t) {
        n && (n.loadingCount += t);
      },
          T = function T(n, t) {
        n && (n.toLoadCount = t);
      },
          G = function G(n) {
        for (var t, e = [], i = 0; t = n.children[i]; i += 1) {
          "SOURCE" === t.tagName && e.push(t);
        }
    
        return e;
      },
          D = function D(n, t) {
        var e = n.parentNode;
        e && "PICTURE" === e.tagName && G(e).forEach(t);
      },
          V = function V(n, t) {
        G(n).forEach(t);
      },
          F = [l],
          j = [l, d],
          P = [l, s, f],
          S = function S(n) {
        return !!n[_];
      },
          U = function U(n) {
        return n[_];
      },
          $ = function $(n) {
        return delete n[_];
      },
          q = function q(n, t) {
        if (!S(n)) {
          var e = {};
          t.forEach(function (t) {
            e[t] = n.getAttribute(t);
          }), n[_] = e;
        }
      },
          H = function H(n, t) {
        if (S(n)) {
          var e = U(n);
          t.forEach(function (t) {
            !function (n, t, e) {
              e ? n.setAttribute(t, e) : n.removeAttribute(t);
            }(n, t, e[t]);
          });
        }
      },
          B = function B(n, t, e) {
        N(n, t.class_loading), A(n, g), e && (R(e, 1), O(t.callback_loading, n, e));
      },
          J = function J(n, t, e) {
        e && n.setAttribute(t, e);
      },
          K = function K(n, t) {
        J(n, f, I(n, t.data_sizes)), J(n, s, I(n, t.data_srcset)), J(n, l, I(n, t.data_src));
      },
          Q = {
        IMG: function IMG(n, t) {
          D(n, function (n) {
            q(n, P), K(n, t);
          }), q(n, P), K(n, t);
        },
        IFRAME: function IFRAME(n, t) {
          q(n, F), J(n, l, I(n, t.data_src));
        },
        VIDEO: function VIDEO(n, t) {
          V(n, function (n) {
            q(n, F), J(n, l, I(n, t.data_src));
          }), q(n, j), J(n, d, I(n, t.data_poster)), J(n, l, I(n, t.data_src)), n.load();
        }
      },
          W = ["IMG", "IFRAME", "VIDEO"],
          X = function X(n, t) {
        !t || function (n) {
          return n.loadingCount > 0;
        }(t) || function (n) {
          return n.toLoadCount > 0;
        }(t) || O(n.callback_finish, t);
      },
          Y = function Y(n, t, e) {
        n.addEventListener(t, e), n.llEvLisnrs[t] = e;
      },
          Z = function Z(n, t, e) {
        n.removeEventListener(t, e);
      },
          nn = function nn(n) {
        return !!n.llEvLisnrs;
      },
          tn = function tn(n) {
        if (nn(n)) {
          var t = n.llEvLisnrs;
    
          for (var e in t) {
            var i = t[e];
            Z(n, e, i);
          }
    
          delete n.llEvLisnrs;
        }
      },
          en = function en(n, t, e) {
        !function (n) {
          delete n.llTempImage;
        }(n), R(e, -1), function (n) {
          n && (n.toLoadCount -= 1);
        }(e), C(n, t.class_loading), t.unobserve_completed && z(n, e);
      },
          on = function on(n, t, e) {
        var i = M(n) || n;
        nn(i) || function (n, t, e) {
          nn(n) || (n.llEvLisnrs = {});
          var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
          Y(n, i, t), Y(n, "error", e);
        }(i, function (o) {
          !function (n, t, e, i) {
            var o = w(t);
            en(t, e, i), N(t, e.class_loaded), A(t, v), O(e.callback_loaded, t, i), o || X(e, i);
          }(0, n, t, e), tn(i);
        }, function (o) {
          !function (n, t, e, i) {
            var o = w(t);
            en(t, e, i), N(t, e.class_error), A(t, p), O(e.callback_error, t, i), o || X(e, i);
          }(0, n, t, e), tn(i);
        });
      },
          an = function an(n, t, e) {
        !function (n) {
          n.llTempImage = document.createElement("IMG");
        }(n), on(n, t, e), function (n) {
          S(n) || (n[_] = {
            backgroundImage: n.style.backgroundImage
          });
        }(n), function (n, t, e) {
          var i = I(n, t.data_bg),
              o = I(n, t.data_bg_hidpi),
              r = a && o ? o : i;
          r && (n.style.backgroundImage = 'url("'.concat(r, '")'), M(n).setAttribute(l, r), B(n, t, e));
        }(n, t, e), function (n, t, e) {
          var i = I(n, t.data_bg_multi),
              o = I(n, t.data_bg_multi_hidpi),
              r = a && o ? o : i;
          r && (n.style.backgroundImage = r, function (n, t, e) {
            N(n, t.class_applied), A(n, b), e && (t.unobserve_completed && z(n, t), O(t.callback_applied, n, e));
          }(n, t, e));
        }(n, t, e);
      },
          rn = function rn(n, t, e) {
        !function (n) {
          return W.indexOf(n.tagName) > -1;
        }(n) ? an(n, t, e) : function (n, t, e) {
          on(n, t, e), function (n, t, e) {
            var i = Q[n.tagName];
            i && (i(n, t), B(n, t, e));
          }(n, t, e);
        }(n, t, e);
      },
          cn = function cn(n) {
        n.removeAttribute(l), n.removeAttribute(s), n.removeAttribute(f);
      },
          un = function un(n) {
        D(n, function (n) {
          H(n, P);
        }), H(n, P);
      },
          ln = {
        IMG: un,
        IFRAME: function IFRAME(n) {
          H(n, F);
        },
        VIDEO: function VIDEO(n) {
          V(n, function (n) {
            H(n, F);
          }), H(n, j), n.load();
        }
      },
          sn = function sn(n, t) {
        (function (n) {
          var t = ln[n.tagName];
          t ? t(n) : function (n) {
            if (S(n)) {
              var t = U(n);
              n.style.backgroundImage = t.backgroundImage;
            }
          }(n);
        })(n), function (n, t) {
          L(n) || w(n) || (C(n, t.class_entered), C(n, t.class_exited), C(n, t.class_applied), C(n, t.class_loading), C(n, t.class_loaded), C(n, t.class_error));
        }(n, t), k(n), $(n);
      },
          fn = ["IMG", "IFRAME", "VIDEO"],
          dn = function dn(n) {
        return n.use_native && "loading" in HTMLImageElement.prototype;
      },
          _n = function _n(n, t, e) {
        n.forEach(function (n) {
          return function (n) {
            return n.isIntersecting || n.intersectionRatio > 0;
          }(n) ? function (n, t, e, i) {
            var o = function (n) {
              return x.indexOf(y(n)) >= 0;
            }(n);
    
            A(n, "entered"), N(n, e.class_entered), C(n, e.class_exited), function (n, t, e) {
              t.unobserve_entered && z(n, e);
            }(n, e, i), O(e.callback_enter, n, t, i), o || rn(n, e, i);
          }(n.target, n, t, e) : function (n, t, e, i) {
            L(n) || (N(n, e.class_exited), function (n, t, e, i) {
              e.cancel_on_exit && function (n) {
                return y(n) === g;
              }(n) && "IMG" === n.tagName && (tn(n), function (n) {
                D(n, function (n) {
                  cn(n);
                }), cn(n);
              }(n), un(n), C(n, e.class_loading), R(i, -1), k(n), O(e.callback_cancel, n, t, i));
            }(n, t, e, i), O(e.callback_exit, n, t, i));
          }(n.target, n, t, e);
        });
      },
          gn = function gn(n) {
        return Array.prototype.slice.call(n);
      },
          vn = function vn(n) {
        return n.container.querySelectorAll(n.elements_selector);
      },
          bn = function bn(n) {
        return function (n) {
          return y(n) === p;
        }(n);
      },
          pn = function pn(n, t) {
        return function (n) {
          return gn(n).filter(L);
        }(n || vn(t));
      },
          hn = function hn(n, e) {
        var o = c(n);
        this._settings = o, this.loadingCount = 0, function (n, t) {
          i && !dn(n) && (t._observer = new IntersectionObserver(function (e) {
            _n(e, n, t);
          }, function (n) {
            return {
              root: n.container === document ? null : n.container,
              rootMargin: n.thresholds || n.threshold + "px"
            };
          }(n)));
        }(o, this), function (n, e) {
          t && window.addEventListener("online", function () {
            !function (n, t) {
              var e;
              (e = vn(n), gn(e).filter(bn)).forEach(function (t) {
                C(t, n.class_error), k(t);
              }), t.update();
            }(n, e);
          });
        }(o, this), this.update(e);
      };
    
      return hn.prototype = {
        update: function update(n) {
          var t,
              o,
              a = this._settings,
              r = pn(n, a);
          T(this, r.length), !e && i ? dn(a) ? function (n, t, e) {
            n.forEach(function (n) {
              -1 !== fn.indexOf(n.tagName) && function (n, t, e) {
                n.setAttribute("loading", "lazy"), on(n, t, e), function (n, t) {
                  var e = Q[n.tagName];
                  e && e(n, t);
                }(n, t), A(n, h);
              }(n, t, e);
            }), T(e, 0);
          }(r, a, this) : (o = r, function (n) {
            n.disconnect();
          }(t = this._observer), function (n, t) {
            t.forEach(function (t) {
              n.observe(t);
            });
          }(t, o)) : this.loadAll(r);
        },
        destroy: function destroy() {
          this._observer && this._observer.disconnect(), vn(this._settings).forEach(function (n) {
            $(n);
          }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
        },
        loadAll: function loadAll(n) {
          var t = this,
              e = this._settings;
          pn(n, e).forEach(function (n) {
            z(n, t), rn(n, e, t);
          });
        },
        restoreAll: function restoreAll() {
          var n = this._settings;
          vn(n).forEach(function (t) {
            sn(t, n);
          });
        }
      }, hn.load = function (n, t) {
        var e = c(t);
        rn(n, e);
      }, hn.resetStatus = function (n) {
        k(n);
      }, t && function (n, t) {
        if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) {
          u(n, e);
        } else u(n, t);
      }(hn, window.lazyLoadOptions), hn;
    });
    
    },{"@babel/runtime/helpers/interopRequireDefault":38,"@babel/runtime/helpers/typeof":41}]},{},[28]);
    