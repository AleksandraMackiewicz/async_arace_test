/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ce049f697844c8d639fe8630466d8a21.png");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageViewController": () => (/* binding */ PageViewController)
/* harmony export */ });
/* harmony import */ var _CarViewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _WinnerViewController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var PageViewController = /*#__PURE__*/function () {
  function PageViewController(parentElement) {
    _classCallCheck(this, PageViewController);
    this.allMyPages = [];
    this.allMyLinks = [];
    this.stripe = document.createElement('div');
    this.pageList = document.createElement('div');
    this.stripe.classList.add('stripe');
    parentElement.appendChild(this.stripe);
    parentElement.appendChild(this.pageList);
    var garagePage = this.addTabPageWithLink('Garage');
    var controllerCars = new _CarViewController_js__WEBPACK_IMPORTED_MODULE_0__.CarViewController(garagePage);
    var winnersPage = this.addTabPageWithLink('Winners');
    var controllerWinners = new _WinnerViewController_js__WEBPACK_IMPORTED_MODULE_1__.WinnerViewController(winnersPage);
    this.showPage(null, garagePage);
  }
  _createClass(PageViewController, [{
    key: "addTabPageWithLink",
    value:
    //mylink = button, mypage = div;

    function addTabPageWithLink(label) {
      var myLink = document.createElement('button');
      myLink.innerText = label;
      myLink.classList.add('tablinks');
      var myPage = document.createElement('div');
      myPage.classList.add('garage_content');
      this.allMyLinks.push(myLink);
      this.allMyPages.push(myPage);
      this.stripe.appendChild(myLink);
      this.pageList.appendChild(myPage);
      var that = this;
      myLink.onclick = function () {
        that.showPage(myLink, myPage);
      };
      return myPage;
    }
  }, {
    key: "showPage",
    value: function showPage(myLink, clickedPage) {
      for (var i = 0; i < this.allMyPages.length; i++) {
        this.allMyPages[i].style.display = 'none';
      }
      for (var _i = 0; _i < this.allMyLinks.length; _i++) {
        this.allMyLinks[_i].className = this.allMyLinks[_i].className.replace('active', '');
      }
      if (myLink != null) {
        myLink.className += "active";
      }
      clickedPage.style.display = 'block';
      var activeLink = document.querySelector('.tablinksactive');
      if (activeLink != null) {
        activeLink.style.boxSizing = 'border-box';
        activeLink.style.backgroundColor = 'rgba(171, 171, 243, 0.8)';
        activeLink.style.border = '0.5rem solid rgb(171, 171, 243)';
      }
      var normalLink = document.querySelector('.tablinks');
      if (normalLink != null) {
        normalLink.style.boxSizing = 'border-box';
        normalLink.style.backgroundColor = 'rgb(69, 73, 84)';
        normalLink.style.border = '0.1rem solid white';
      }
      // stop animation after changing page
      var carImages = document.querySelectorAll('.car_image');
      carImages.forEach(function (carImage) {
        carImage.style.animation = 'none';
      });
    }
  }]);
  return PageViewController;
}();

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarViewController": () => (/* binding */ CarViewController)
/* harmony export */ });
/* harmony import */ var _dom_TableCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _APICallCarList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _dom_FormCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _APICallCarCreate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _APICallCarDelete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _APICallCarUpdate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _APICallWinnersList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var CarViewController = /*#__PURE__*/function () {
  function CarViewController(parentElement) {
    var _this = this;
    _classCallCheck(this, CarViewController);
    //create update pop up

    this.updateContainer = document.createElement('div');
    this.updateContainer.classList.add('update_container');
    this.updateDiv = document.createElement('div');
    this.updateDiv.classList.add('update_div');
    this.cf2 = new _dom_FormCreator_js__WEBPACK_IMPORTED_MODULE_2__.FormCreator();
    this.cf2.appendField("text", "New car name", "Volvo", "update_name", 'updateName', 'updateName');
    this.cf2.appendField("color", "Your paint", "#000000", "update_color", 'updateColor', 'updateColor');
    var garage_ = document.querySelector('.garage_content');
    garage_.appendChild(this.updateContainer);
    garage_.appendChild(this.updateDiv);
    this.updateDiv.appendChild(this.cf2.getForm());
    this.updateContainer.style.backgroundColor = 'rgba(171, 171, 171, 0.1)';
    this.updateContainer.style.position = 'absolute';
    this.updateContainer.style.width = '100%';
    this.updateContainer.style.height = '100%';
    this.updateContainer.style.marginLeft = '-70px';
    this.updateContainer.style.display = 'none';
    this.updateDiv.style.position = 'absolute';
    this.updateDiv.style.backgroundColor = 'grey';
    this.updateDiv.style.top = '50%';
    this.updateDiv.style.left = '50%';
    this.updateDiv.style.display = 'none';

    //create top form
    this.cf = new _dom_FormCreator_js__WEBPACK_IMPORTED_MODULE_2__.FormCreator();
    this.cf.appendField("text", "New car name", "Volvo", "new_car_name", "new_car_name", "new_car_name");
    this.cf.appendField("color", "Your paint", "#000000", "new_car_color", "new_car_color", "new_car_color");
    this.cf.appendButton('Create!', this.createCar.bind(this));
    this.cf.appendRandom(this.createRandom.bind(this));
    parentElement.appendChild(this.cf.getForm());

    //create table
    this.garageStatusDiv = document.createElement('div');
    this.garageStatusDiv.innerText = '';
    parentElement.appendChild(this.garageStatusDiv);
    this.table = new _dom_TableCreator_js__WEBPACK_IMPORTED_MODULE_0__.TableCreator(parentElement);
    this.table.appendTableHead('ID');
    this.table.appendTableHead('Name');
    this.table.appendTableHead('Color');
    // ---------button race-----------------

    this.table.appendTableHead('');
    this.table.appendTableHeadButton('RACE!');
    this.table.appendTableHeadButtonStop('stop');

    //create pagination

    this.paginationDiv = document.createElement('div');
    parentElement.appendChild(this.paginationDiv);
    this.paginationDiv.innerText = 'Pagination';
    var next = document.createElement('button');
    var prev = document.createElement('button');
    this.paginationDiv.appendChild(prev);
    this.paginationDiv.appendChild(next);
    next.innerHTML = 'next';
    prev.innerHTML = 'prev ';
    this.pageIndex = 0;
    this.pPageIndex = document.createElement('p');
    this.paginationDiv.appendChild(this.pPageIndex);
    this.pPageIndex.innerText = 1;
    next.onclick = function () {
      var x = 0;
      x = Math.ceil(_this.count / 7);
      if (_this.pageIndex < x) {
        _this.pageIndex++;
        _this.refreshCarTable();
        _this.pPageIndex.innerText = _this.pageIndex + 1;
      }
    };
    prev.onclick = function () {
      if (_this.pageIndex > 0) {
        _this.pageIndex--;
        _this.refreshCarTable();
        _this.pPageIndex.innerText = _this.pageIndex + 1;
      }
    };
    this.refreshCarTable();
  }
  _createClass(CarViewController, [{
    key: "deleteCar",
    value: function deleteCar(id) {
      var deleter = new _APICallCarDelete_js__WEBPACK_IMPORTED_MODULE_4__.APICallCarDelete(id);
      deleter.processRequestJSON(this.refreshCarTable.bind(this));
    }
  }, {
    key: "updateCar",
    value: function updateCar(id) {
      var _this2 = this;
      this.editingCarID = id;
      this.updateContainer.style.display = 'block';
      this.updateContainer.style.zIndex = '1';
      this.updateDiv.style.zIndex = '2';
      this.updateDiv.style.display = 'block';
      this.updateContainer.addEventListener('click', function () {
        _this2.updateContainer.style.display = 'none';
        _this2.updateDiv.style.display = 'none';
      });
      this.cf2.appendButton('Done!', this.updateCarDone.bind(this), 'update');
    }
  }, {
    key: "updateCarDone",
    value: function updateCarDone(id) {
      id = this.editingCarID;
      var updateColorField = document.querySelector('#updateColor');
      var updateNameField = document.querySelector('#updateName');
      var color = updateColorField.value;
      var name = updateNameField.value;
      console.log(name);
      this.updateDiv.style.display = 'none';
      this.updateContainer.style.display = 'none';
      // this.cf2.style.display = 'none'

      var updater = new _APICallCarUpdate_js__WEBPACK_IMPORTED_MODULE_5__.APICallCarUpdate(id, name, color);
      updater.processRequestJSON(this.refreshCarTable.bind(this));
    }
  }, {
    key: "showJson",
    value: function showJson(json, count) {
      var _this3 = this;
      this.count = count;
      this.table.clearBody();
      var color = document.querySelector("#new_car_color");
      this.json = json;
      var _loop = function _loop() {
        var row_i = json[i];
        var id = row_i['id'];
        var name = row_i['name'];
        var color = row_i['color'];
        _this3.table.beginRow();
        _this3.table.addRowText(id);
        _this3.table.addRowText(name);
        _this3.table.addRowText(color);
        var fc = new _dom_FormCreator_js__WEBPACK_IMPORTED_MODULE_2__.FormCreator();
        var that = _this3;
        fc.appendButton('Delete', function () {
          that.deleteCar(id);
        }, 'delete_button');
        fc.appendButton('Update', function () {
          that.updateCar(id);
        }, 'upgrade_button');
        _this3.table.addRowObject(fc.getForm());
        _this3.table.endRow();
        _this3.table.beginRow();
        _this3.table.addRowImage(color);
        _this3.table.endRow();
        _this3.table.beginRow();

        //add play pause icons
        _this3.table.addRowIcons('play', 'pause', id);
        _this3.table.endRow();
      };
      for (var i = 0; i < json.length; i++) {
        _loop();
      }
      this.garageStatusDiv.innerText = "Cars count: ".concat(this.count);
    }
  }, {
    key: "createCar",
    value: function createCar() {
      var fieldColor = document.querySelector('#new_car_color');
      var fieldName = document.querySelector('#new_car_name');
      var color = fieldColor.value;
      var name = fieldName.value;
      var creator = new _APICallCarCreate_js__WEBPACK_IMPORTED_MODULE_3__.APICallCarCreate(name, color);
      creator.processRequestJSON(this.refreshCarTable.bind(this));
    }
  }, {
    key: "createRandom",
    value: function createRandom() {
      var names = ['BMW', 'Nissan', 'Toyota', 'Fiat', 'Chevrolet'];
      var models = ['i8', '3 series', 'S series', '1500 Club Coupe', '124 Spider'];
      for (var i = 0; i < 100; i++) {
        var randomName = names[Math.floor(Math.random() * names.length)];
        var randomModel = models[Math.floor(Math.random() * models.length)];
        var name = randomName + randomModel;
        console.log(name);
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var _i = 0; _i < 6; _i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        console.log(name);
        var aPICallCreate = new _APICallCarCreate_js__WEBPACK_IMPORTED_MODULE_3__.APICallCarCreate(name, color);
        aPICallCreate.processRequestJSON(this.refreshCarTable.bind(this)); // I dont get it at all :()
      }
    }
  }, {
    key: "refreshCarTable",
    value: function refreshCarTable() {
      this.listener = new _APICallCarList_js__WEBPACK_IMPORTED_MODULE_1__.APICallCarList(this.pageIndex);
      this.listener.processRequestJSON(this.showJson.bind(this)); ///???????????
    }
  }]);
  return CarViewController;
}();

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableCreator": () => (/* binding */ TableCreator)
/* harmony export */ });
/* harmony import */ var _components_CarViewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _components_APICallCarEngineState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _components_APICallCreateWinner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var TableCreator = /*#__PURE__*/function () {
  function TableCreator(parentElement) {
    _classCallCheck(this, TableCreator);
    this.form = document.createElement('form');
    this.table = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');
    this.headeRow = document.createElement('tr');
    this.table.appendChild(this.thead);
    this.thead.appendChild(this.headeRow);
    //header object to add this.img?
    this.table.appendChild(this.tbody);
    parentElement.appendChild(this.table);

    // this.tr4 = document.createElement('tr');
  }
  _createClass(TableCreator, [{
    key: "appendTableHead",
    value: function appendTableHead(text) {
      var td = document.createElement('td');
      td.innerText = text;
      this.headeRow.appendChild(td);
    }
  }, {
    key: "appendTableHeadButton",
    value: function appendTableHeadButton(text) {
      var td = document.createElement('td');
      this.btRace = document.createElement('button');
      this.btRace.innerText = text;
      this.btRace.style.backgroundColor = 'red';
      td.appendChild(this.btRace);
      var bt = this.btRace;
      this.headeRow.appendChild(td);
    }
  }, {
    key: "appendTableHeadButtonStop",
    value: function appendTableHeadButtonStop(text) {
      var td = document.createElement('td');
      this.btStop = document.createElement('button');
      this.btStop.innerText = text;
      this.btStop.style.backgroundColor = 'red';
      td.appendChild(this.btStop);
      var bt = this.btStop;
      this.headeRow.appendChild(td);
    }
  }, {
    key: "clearBody",
    value: function clearBody() {
      this.tbody.innerHTML = '';
    }
  }, {
    key: "beginRow",
    value: function beginRow() {
      this.newRow = document.createElement('tr');
      var newRow = this.newRow;
      return newRow;
    }
  }, {
    key: "addRowText",
    value: function addRowText(text) {
      var td = document.createElement('td');
      td.innerText = text;
      this.newRow.appendChild(td);
    }
  }, {
    key: "addRowObject",
    value: function addRowObject(obj) {
      var td = document.createElement('td');
      // console.log(obj);
      td.appendChild(obj);
      this.newRow.appendChild(td);
    }
  }, {
    key: "addRowImage",
    value: function addRowImage(color) {
      var td = document.createElement('td');
      td.setAttribute('colspan', '4 ');
      var img = document.createElement('object');
      img.classList.add('car_image');
      //------This is needed ----
      this.img = img;
      //---------------------
      img.setAttribute('id', 'colorChangeSvg');
      img.setAttribute('type', 'image/svg+xml');
      img.setAttribute('data', './src/assets/racing_car2.svg');
      img.addEventListener("load", function () {
        // console.log("loaded"+img);

        var svg = img.contentDocument;
        // console.log("Svg" +svg);
        var element = svg.querySelector("#path12");

        // console.log('el'+ element)
        element.style.fill = color;
        img.width = 100;
        img.height = 40;
      });

      // console.log('show img'+img);
      td.appendChild(img);
      this.newRow.appendChild(td);

      // upewnij sie ze nie pokazuje sie przed zmiana koloru!!!
      // console.log("Stary display: " + img.style.display);
      img.width = 1;
      img.height = 1;
      return this.img;
    }
  }, {
    key: "addRowIcons",
    value: function addRowIcons(iconClass1, iconClass2, id) {
      var td = document.createElement('td');
      var div = document.createElement('icons_div');
      var bt1 = document.createElement('button');
      var bt2 = document.createElement('button');
      var meta = document.createElement('img');
      meta.src = "src/assets/racing-flag.png";
      meta.classList.add('meta');
      var editingCarId = id;
      // console.log(iconClass1);
      // console.log(div)
      div.innerText = '';
      bt1.classList.add(iconClass1);
      bt2.classList.add(iconClass2);
      bt1.setAttribute('id', iconClass1);
      bt2.setAttribute('id', iconClass2);
      td.appendChild(div);
      div.appendChild(bt1);
      div.appendChild(bt2);
      div.appendChild(meta);
      this.newRow.appendChild(td);
      var img = this.img;
      var btRace = this.btRace;

      // this.btRace.addEventListener('click', () => {

      //     bt1.click();

      // })

      // //----------------------------NEW

      // this.btStop.addEventListener('click', () => {

      //     bt2.click();

      // })

      // bt2.addEventListener('click', () => {
      //     let status = 'stopped';
      //     let aPICallCarEngineState = new APICallCarEngineState(id, status);

      // });

      //   this.btRace.addEventListener('click', () => {

      //     img.style.animation =  'car_move 2s ease-in'

      //   })

      //WELL, it works but without velocity

      this.showButtons(bt1, bt2, img, editingCarId);
    }
  }, {
    key: "showButtons",
    value: function showButtons(bt1, bt2, img, editingCarId) {
      var btRace = this.btRace;
      var playBts = document.querySelectorAll('.play');
      var isAnimating = false;
      function animation(img) {
        isAnimating = true;
        btRace.disabled = true;
        var status = 'started';
        var aPICallCarEngineState = new _components_APICallCarEngineState_js__WEBPACK_IMPORTED_MODULE_1__.APICallCarEngineState(editingCarId, status);
        aPICallCarEngineState.processRequestJSON(function (res) {
          //    let resStr = JSON.stringify(res);
          // console.log('I got ' + res)
          res.velocity = res.velocity * 0.01;
          //    res.distance = res.distance * 0.001
          res.distance = 500;

          // ===========Animation===================
          img.style.animation = "car_move ".concat(res.velocity, "s ease-in");
          img.addEventListener('animationend', function () {
            isAnimating = false;
            btRace.disabled = false;
          });
        });
      }
      //================Stop Animation===============
      function stopAnimation() {
        isAnimating = false;
        btRace.disabled = false;
        img.style.animation = 'none';
        console.log(bt2 + 'stopp');
      }
      bt1.addEventListener('click', function () {
        animation(img);
      });
      bt2.addEventListener('click', function () {
        stopAnimation();
      });
      this.btRace.addEventListener('click', function () {
        bt1.click();
      });
      this.btStop.addEventListener('click', function () {
        bt2.click();
      });
    }
  }, {
    key: "getImg",
    value: function getImg() {
      return this.img;
    }
  }, {
    key: "endRow",
    value: function endRow() {
      this.tbody.appendChild(this.newRow);
      this.newRow = null;
      //  let  tbody = this.tbody
      return this.tbody;
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return this.form;
      // console.log(this.form)  
    }
  }]);
  return TableCreator;
}();

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APICallCarEngineState": () => (/* binding */ APICallCarEngineState)
/* harmony export */ });
/* harmony import */ var _APICallBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var APICallCarEngineState = /*#__PURE__*/function (_APICallBase) {
  _inherits(APICallCarEngineState, _APICallBase);
  var _super = _createSuper(APICallCarEngineState);
  function APICallCarEngineState(id, status) {
    _classCallCheck(this, APICallCarEngineState);
    var args = {
      id: id,
      status: status
    };
    var json_str = JSON.stringify(args);
    var parms = {
      method: 'PATCH'
    };
    return _super.call(this, "/engine?id=" + id + "&status=" + status, parms);
  }
  return _createClass(APICallCarEngineState);
}(_APICallBase_js__WEBPACK_IMPORTED_MODULE_0__.APICallBase);
//test
function emptyCallback() {}
function test2(a, b) {
  console.log('tesing function');
  var t1 = new APICallCarEngineState(a, b);
  return t1.processRequestJSON(emptyCallback());
}
window.test2 = test2;

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APICallBase": () => (/* binding */ APICallBase)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var APICallBase = /*#__PURE__*/function () {
  function APICallBase(subURL, parms) {
    _classCallCheck(this, APICallBase);
    this.url = "http://127.0.0.1:3000" + subURL;
    this.parms = parms;
  }
  _createClass(APICallBase, [{
    key: "processRequestJSON",
    value: function () {
      var _processRequestJSON = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback) {
        var response, json, count;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(this.url, this.parms);
            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();
            case 5:
              json = _context.sent;
              count = response.headers.get('X-Total-Count');
              callback(json, count);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function processRequestJSON(_x) {
        return _processRequestJSON.apply(this, arguments);
      }
      return processRequestJSON;
    }()
  }]);
  return APICallBase;
}();

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APICallCreateWinner": () => (/* binding */ APICallCreateWinner)
/* harmony export */ });
/* harmony import */ var _APICallBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var APICallCreateWinner = /*#__PURE__*/function (_APICallBase) {
  _inherits(APICallCreateWinner, _APICallBase);
  var _super = _createSuper(APICallCreateWinner);
  function APICallCreateWinner(id) {
    _classCallCheck(this, APICallCreateWinner);
    args = {
      id: id
    };
    var json_str = JSON.stringify(args);
    console.log("json string in APICallCarCreate is " + json_str);
    var parms = {
      method: 'POST',
      body: json_str,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return _super.call(this, "/winners", parms);
  }
  return _createClass(APICallCreateWinner);
}(_APICallBase_js__WEBPACK_IMPORTED_MODULE_0__.APICallBase);

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APICallCarList": () => (/* binding */ APICallCarList)
/* harmony export */ });
/* harmony import */ var _APICallBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var APICallCarList = /*#__PURE__*/function (_APICallBase) {
  _inherits(APICallCarList, _APICallBase);
  var _super = _createSuper(APICallCarList);
  function APICallCarList(pageIndex, _limit) {
    _classCallCheck(this, APICallCarList);
    var parms = {
      method: 'GET'
    };
    _limit = 7;
    return _super.call(this, "/garage?_page=".concat(pageIndex, "&_limit=").concat(_limit), parms);
  }
  return _createClass(APICallCarList);
}(_APICallBase_js__WEBPACK_IMPORTED_MODULE_0__.APICallBase);
//test
function emptyCallback() {}
function test1(a, b) {
  console.log("Funkcja testowa!");
  var t1 = new APICallCarList(a, b);
  t1.processRequestJSON(emptyCallback);
}
window.test1 = test1;

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCreator": () => (/* binding */ FormCreator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormCreator = /*#__PURE__*/function () {
  function FormCreator() {
    _classCallCheck(this, FormCreator);
    this.form = document.createElement('form');
    this.form.setAttribute('onSubmit', 'return false;');
  }
  _createClass(FormCreator, [{
    key: "appendField",
    value: function appendField(type, label, value, name, css, id) {
      this.form.appendChild(document.createElement('br'));
      var lab = document.createElement('label');
      lab["for"] = name;
      lab.innerHTML = label;
      this.form.appendChild(lab);
      var inp = document.createElement('input');
      this.form.appendChild(inp);
      inp.type = type;
      inp.name = name;
      inp.id = name;
      inp.value = value;
      inp.classList.add(css);
      inp.setAttribute('id', id);
    }
  }, {
    key: "appendButton",
    value: function appendButton(text, click, css) {
      var bt = document.createElement('button');
      bt.innerHTML = text;
      bt.classList.add(css);
      bt.addEventListener('click', click);
      this.form.appendChild(bt);
    }
  }, {
    key: "appendRandom",
    value: function appendRandom(click) {
      var bt = document.createElement('button');
      bt.innerHTML = "Create Random!";
      bt.addEventListener('click', click);
      this.form.appendChild(bt);
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return this.form;
    }
  }]);
  return FormCreator;
}();

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APICallCarCreate": () => (/* binding */ APICallCarCreate)
/* harmony export */ });
/* harmony import */ var _APICallBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var APICallCarCreate = /*#__PURE__*/function (_APICallBase) {
  _inherits(APICallCarCreate, _APICallBase);
  var _super = _createSuper(APICallCarCreate);
  function APICallCarCreate(name, color) {
    _classCallCheck(this, APICallCarCreate);
    var args = {
      name: name,
      color: color
    };
    var json_str = JSON.stringify(args);
    console.log("json string in APICallCarCreate is " + json_str);
    var parms = {
      method: 'POST',
      body: json_str,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return _super.call(this, "/garage", parms);
  }
  return _createClass(APICallCarCreate);
}(_APICallBase_js__WEBPACK_IMPORTED_MODULE_0__.APICallBase);

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APICallCarDelete": () => (/* binding */ APICallCarDelete)
/* harmony export */ });
/* harmony import */ var _APICallBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var APICallCarDelete = /*#__PURE__*/function (_APICallBase) {
  _inherits(APICallCarDelete, _APICallBase);
  var _super = _createSuper(APICallCarDelete);
  function APICallCarDelete(id) {
    _classCallCheck(this, APICallCarDelete);
    var parms = {
      method: 'DELETE'
    };
    return _super.call(this, "/garage/" + id, parms);
  }
  return _createClass(APICallCarDelete);
}(_APICallBase_js__WEBPACK_IMPORTED_MODULE_0__.APICallBase);
;

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APICallCarUpdate": () => (/* binding */ APICallCarUpdate)
/* harmony export */ });
/* harmony import */ var _APICallBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var APICallCarUpdate = /*#__PURE__*/function (_APICallBase) {
  _inherits(APICallCarUpdate, _APICallBase);
  var _super = _createSuper(APICallCarUpdate);
  function APICallCarUpdate(id, name, color) {
    _classCallCheck(this, APICallCarUpdate);
    var args = {
      name: name,
      color: color
    };
    var json_str = JSON.stringify(args);
    console.log("json string in APICallCarUpdate is " + json_str);
    var parms = {
      method: 'PUT',
      body: json_str,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return _super.call(this, "/garage/" + id, parms);
  }
  return _createClass(APICallCarUpdate);
}(_APICallBase_js__WEBPACK_IMPORTED_MODULE_0__.APICallBase);
;

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APICallWinnersList": () => (/* binding */ APICallWinnersList)
/* harmony export */ });
/* harmony import */ var _APICallBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var APICallWinnersList = /*#__PURE__*/function (_APICallBase) {
  _inherits(APICallWinnersList, _APICallBase);
  var _super = _createSuper(APICallWinnersList);
  function APICallWinnersList() {
    _classCallCheck(this, APICallWinnersList);
    var parms = {
      method: 'GET'
    };
    var _page = 7;
    var _limit = 7;
    // let _sort
    // let _order
    return _super.call(this, "/winners?_page=".concat(_page, "&_limit=").concat(_limit), parms); // super(`/winners?_page=${_page}&_limit=${_limit}&_sort=${sort}}`, parms)
  }
  return _createClass(APICallWinnersList);
}(_APICallBase_js__WEBPACK_IMPORTED_MODULE_0__.APICallBase);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinnerViewController": () => (/* binding */ WinnerViewController)
/* harmony export */ });
/* harmony import */ var _dom_TableCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _APICallCarList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _APICallCarDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _APICallWinnersList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var WinnerViewController = /*#__PURE__*/function () {
  function WinnerViewController(parentElement) {
    var _this = this;
    _classCallCheck(this, WinnerViewController);
    this.table = new _dom_TableCreator_js__WEBPACK_IMPORTED_MODULE_0__.TableCreator(parentElement);
    this.table.appendTableHead('Nr');
    this.table.appendTableHead('Image of the car');
    this.table.appendTableHead('Name of the car');
    this.table.appendTableHead('Wins number');
    this.table.appendTableHead('Best time in seconds');
    this.paginationDiv = document.createElement('div');
    parentElement.appendChild(this.paginationDiv);
    this.paginationDiv.innerText = 'Pagination';
    var next = document.createElement('button');
    var prev = document.createElement('button');
    this.paginationDiv.appendChild(prev);
    this.paginationDiv.appendChild(next);
    next.innerHTML = 'next';
    prev.innerHTML = 'prev ';
    this.pageIndex = 0;
    next.onclick = function () {
      _this.pageIndex++;
      _this.refreshCarTable();
    };
    prev.onclick = function () {
      if (_this.pageIndex > 0) {
        _this.pageIndex--;
        _this.refreshCarTable();
      }
    };
    this.refreshCarTable();
    var aPICallWinnersList = new _APICallWinnersList_js__WEBPACK_IMPORTED_MODULE_3__.APICallWinnersList();
  }
  _createClass(WinnerViewController, [{
    key: "deleteCar",
    value: function deleteCar(id) {
      var deleter = new _APICallCarDelete_js__WEBPACK_IMPORTED_MODULE_2__.APICallCarDelete(id);
      deleter.processRequestJSON(this.refreshCarTable.bind(this));
    }
  }, {
    key: "showJson",
    value: function showJson(json) {
      this.table.clearBody();
      var color = document.querySelector("#new_car_color");
      this.json = json;
      for (var i = 0; i < json.length; i++) {
        var row_i = json[i];
        var id = row_i['id'];
        var name = row_i['name'];
        var _color = row_i['color'];

        // this.table.beginRow();
        // this.table.addRowText(id);
        // this.table.addRowImage(color);
        // this.table.addRowText(name);
        // this.table.addRowText("123");
        // this.table.addRowText("60.00");

        // this.table.endRow();
      }
    }
  }, {
    key: "refreshCarTable",
    value: function refreshCarTable() {
      this.listener = new _APICallCarList_js__WEBPACK_IMPORTED_MODULE_1__.APICallCarList(this.pageIndex);
      this.listener.processRequestJSON(this.showJson.bind(this)); ///???????????
    }
  }]);
  return WinnerViewController;
}();

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d3c62de7032b275c477df9f3956c0b20.png");

/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_racing_flag_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_components_PageViewController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _src_assets_racing_car_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);



var div = document.querySelector(".main");
var pageViewController = new _src_components_PageViewController_js__WEBPACK_IMPORTED_MODULE_1__.PageViewController(div);
})();

/******/ })()
;