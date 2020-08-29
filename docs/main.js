(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");



class AppComponent {
    constructor() {
        this.title = 'rl-blackjack01-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "game");
    } }, directives: [_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _show_strategy_show_strategy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-strategy/show-strategy.component */ "./src/app/show-strategy/show-strategy.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
        _chart_chart_component__WEBPACK_IMPORTED_MODULE_8__["ChartComponent"],
        _show_strategy_show_strategy_component__WEBPACK_IMPORTED_MODULE_9__["ShowStrategyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
                    _chart_chart_component__WEBPACK_IMPORTED_MODULE_8__["ChartComponent"],
                    _show_strategy_show_strategy_component__WEBPACK_IMPORTED_MODULE_9__["ShowStrategyComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-3d */ "./node_modules/d3-3d/build/d3-3d.js");
/* harmony import */ var d3_3d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_3d__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/state */ "./src/app/classes/state.ts");





/**
 * The code is from here:
 * https://gist.github.com/Niekes/e920c03edd7950578b8a6cded8b5a1a5
 *
 * Thank you, Stefan Nieke
 */
class ChartComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.j = 16;
        this.alpha = 0;
        this.beta = 0;
        this.startAngle = Math.PI / 4;
        this.d3Data = [];
        this.state = new _classes_state__WEBPACK_IMPORTED_MODULE_3__["State"]();
        this.hostElement = this.elRef.nativeElement;
    }
    set graphData(data) {
        if (!data || Object.keys(data).length === 0) {
            return;
        }
        console.log("data:", data);
        this.d3Data.length = 0;
        /*
    
        const rn1 = Math.floor(d3.randomUniform(1, 12)());
        const j = 16;
        for(let z = -j; z < j; z++){
            for(let x = -j; x < j; x++){
                this.d3Data.push({x: x, y: Math.cos(Math.sqrt(x*x+z*z)/5*Math.PI)*rn1, z: z});
            }
        }
    
        */
        const keys = Object.keys(data);
        keys.forEach(key => {
            const parts = this.state.splitKey(key);
            this.d3Data.push([parts.sum, data[key], parts.dealerCard]);
        });
        //this.d3Data = [[[0,-1,0],[-1,1,0],[1,1,0]]];
        this.init();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.hostElement.querySelector('svg'))
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().on('drag', this.dragged.bind(this))
            .on('start', this.dragStart.bind(this))
            .on('end', this.dragEnd.bind(this))).append('g');
        this.surface = Object(d3_3d__WEBPACK_IMPORTED_MODULE_2__["_3d"])()
            .scale(100)
            .origin([480, 250])
            .shape('TRIANGLE');
        /*
        this.surface = _3d()
          .scale(10)
          .x(function(d){ return d.x; })
          .y(function(d){ return d.y; })
          .z(function(d){ return d.z; })
          .origin([480, 250])
          .rotateY(this.startAngle)
          .rotateX(-this.startAngle)
          .shape('SURFACE', this.j*2);
        */
        this.color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]();
        d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('button').on('click', this.init.bind(this));
        //this.change();
    }
    processData(data, tt) {
        const planes = this.svg.selectAll('path').data(data, function (d) { return d.plane; });
        planes
            .enter()
            .append('path')
            .attr('class', '_3d')
            .attr('fill', this.colorize.bind(this))
            .attr('opacity', 0)
            .attr('stroke-opacity', 0.1)
            .merge(planes)
            .attr('stroke', 'black')
            .transition().duration(tt)
            .attr('opacity', 1)
            .attr('fill', this.colorize.bind(this))
            .attr('d', this.surface.draw);
        planes.exit().remove();
        d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('._3d').sort(this.surface.sort);
    }
    colorize(d) {
        //const _y = (d[0][1] + d[1][1] + d[2][1] + d[3][1])/4;
        const _y = (d[0][1] + d[1][1] + d[2][1]) / 3;
        return d.ccw ? d3__WEBPACK_IMPORTED_MODULE_1__["interpolateSpectral"](this.color(_y)) : d3__WEBPACK_IMPORTED_MODULE_1__["color"](d3__WEBPACK_IMPORTED_MODULE_1__["interpolateSpectral"](this.color(_y))).darker(2.5);
    }
    dragStart() {
        this.mx = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
        this.my = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
    }
    dragged() {
        this.mouseX = this.mouseX || 0;
        this.mouseY = this.mouseY || 0;
        this.beta = (d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - this.mx + this.mouseX) * Math.PI / 230;
        this.alpha = (d3__WEBPACK_IMPORTED_MODULE_1__["event"].y - this.my + this.mouseY) * Math.PI / 230 * (-1);
        this.processData(this.surface
            .rotateY(this.beta + this.startAngle)
            .rotateX(this.alpha - this.startAngle)(this.d3Data), 0);
    }
    dragEnd() {
        this.mouseX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - this.mx + this.mouseX;
        this.mouseY = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y - this.my + this.mouseY;
    }
    init() {
        if (!this.d3Data || this.d3Data.length === 0) {
            return;
        }
        const yMin = d3__WEBPACK_IMPORTED_MODULE_1__["min"](this.d3Data, function (d) { return d[1]; });
        const yMax = d3__WEBPACK_IMPORTED_MODULE_1__["max"](this.d3Data, function (d) { return d[1]; });
        this.color.domain([yMin, yMax]);
        this.processData(this.surface(this.d3Data), 1000);
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["chart"]], inputs: { graphData: "graphData" }, decls: 1, vars: 0, consts: [["width", "960", "height", "500"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { graphData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/classes/sar.ts":
/*!********************************!*\
  !*** ./src/app/classes/sar.ts ***!
  \********************************/
/*! exports provided: SAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAR", function() { return SAR; });
class SAR {
    constructor(state, action, reward = 0) {
        this.state = state;
        this.action = action;
        this.reward = reward;
    }
    getState() {
        return this.state;
    }
    getAction() {
        return this.action;
    }
    getReward() {
        return this.reward;
    }
}


/***/ }),

/***/ "./src/app/classes/state.ts":
/*!**********************************!*\
  !*** ./src/app/classes/state.ts ***!
  \**********************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
class State {
    constructor(sum = 0, usabelAce = false, dealerCard = 0) {
        this.SEPARATOR = '-';
        this.sum = 0;
        this.usableAce = false;
        this.dealerCard = 0;
        this.sum = sum;
        this.usableAce = usabelAce;
        this.dealerCard = dealerCard;
    }
    getKey(action) {
        let actionStr = '';
        if (action !== undefined) {
            actionStr = this.SEPARATOR + ((action === 0 /* HIT */) ? 'HIT' : 'STICK');
        }
        return this.sum + this.SEPARATOR + this.usableAce + this.SEPARATOR + this.dealerCard + actionStr;
    }
    splitKey(key) {
        const splitedKey = { sum: 0, usableAce: false, dealerCard: 0, action: 1 /* STICK */ };
        const parts = key.split(this.SEPARATOR);
        splitedKey.sum = +parts[0];
        splitedKey.usableAce = (parts[1] === 'true');
        splitedKey.dealerCard = +parts[2];
        splitedKey.action = (parts[3] === 'HIT') ? 0 /* HIT */ : 1 /* STICK */;
        return splitedKey;
    }
}


/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dealer.service */ "./src/app/services/dealer.service.ts");
/* harmony import */ var _services_mcplayer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mcplayer.service */ "./src/app/services/mcplayer.service.ts");
/* harmony import */ var _services_print_brain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/print-brain.service */ "./src/app/services/print-brain.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _show_strategy_show_strategy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../show-strategy/show-strategy.component */ "./src/app/show-strategy/show-strategy.component.ts");









function GameComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.playersName[i_r2], "'s score:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1, " ");
} }
class GameComponent {
    constructor(dealerService, mcPlayer, printBrain) {
        this.dealerService = dealerService;
        this.mcPlayer = mcPlayer;
        this.printBrain = printBrain;
        this.numOfLearningGames = 0;
        this.numOfPlayedGames = 0;
        this.dealersWin = 0;
        this.playersWin = [];
        this.playersName = [];
        this.playersStrategy = {};
        this.scores0 = {};
        this.data = {};
    }
    ngOnInit() {
        this.dealerService.addPlayer(this.mcPlayer);
        this.playersName = ['Monte Carlo'];
    }
    learn() {
        this.numOfPlayedGames = 0;
        this.dealersWin = 0;
        this.playersWin = Array(this.playersName.length).fill(0);
        for (let i = 0; i < 10000; i++) {
            setTimeout(() => {
                this.dealerService.playWithAllPlayers(true);
                this.numOfLearningGames++;
                if (i % 100 == 0)
                    this.playersStrategy = this.mcPlayer.getV();
            }, 0);
        }
        setTimeout(() => {
            this.data = this.mcPlayer.getV();
            this.printBrain.printV(this.data);
            this.scores0 = this.dealerService.getScores();
        }, 0);
    }
    play100Games() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => this.dealerService.playWithAllPlayers(false), 0);
        }
        setTimeout(() => {
            const scores1 = this.dealerService.getScores();
            this.numOfPlayedGames += 100;
            this.dealersWin = scores1.dealerReward - this.scores0.dealerReward;
            this.playersWin = scores1.rewards.map((v, i) => v - this.scores0.rewards[i]);
        }, 0);
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dealer_service__WEBPACK_IMPORTED_MODULE_1__["DealerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mcplayer_service__WEBPACK_IMPORTED_MODULE_2__["MCPlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_brain_service__WEBPACK_IMPORTED_MODULE_3__["PrintBrainService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["game"]], decls: 15, vars: 5, consts: [["mat-raised-button", "", 3, "click"], [1, "spacer"], [4, "ngFor", "ngForOf"], [3, "V"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_1_listener() { return ctx.learn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Learn from 10000 games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_4_listener() { return ctx.play100Games(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Play 100 games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GameComponent_li_13_Template, 4, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "show-strategy", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number of learning games: ", ctx.numOfLearningGames, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number of played games: ", ctx.numOfPlayedGames, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dealer's score:", ctx.dealersWin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playersWin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("V", ctx.playersStrategy);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _show_strategy_show_strategy_component__WEBPACK_IMPORTED_MODULE_7__["ShowStrategyComponent"]], styles: [".spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css']
            }]
    }], function () { return [{ type: _services_dealer_service__WEBPACK_IMPORTED_MODULE_1__["DealerService"] }, { type: _services_mcplayer_service__WEBPACK_IMPORTED_MODULE_2__["MCPlayerService"] }, { type: _services_print_brain_service__WEBPACK_IMPORTED_MODULE_3__["PrintBrainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interfaces/player.ts":
/*!**************************************!*\
  !*** ./src/app/interfaces/player.ts ***!
  \**************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    getName() { return 'Abstract player'; }
    ;
    prepareForANewGame() { }
    ;
    episodeDone(state, reward) { }
    ;
}


/***/ }),

/***/ "./src/app/services/card.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/card.service.ts ***!
  \******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _random_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-generator.service */ "./src/app/services/random-generator.service.ts");



class CardService {
    constructor(randomGenerator) {
        this.randomGenerator = randomGenerator;
    }
    getCard() {
        return this.randomGenerator.getRandom(2, 12);
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_random_generator_service__WEBPACK_IMPORTED_MODULE_1__["RandomGeneratorService"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _random_generator_service__WEBPACK_IMPORTED_MODULE_1__["RandomGeneratorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/dealer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dealer.service.ts ***!
  \********************************************/
/*! exports provided: Score, DealerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerService", function() { return DealerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dealer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dealer */ "./src/app/services/dealer.ts");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _game_player_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-player-factory.service */ "./src/app/services/game-player-factory.service.ts");





class Score {
}
class DealerService {
    constructor(cardService, gamePlayerFactory) {
        this.cardService = cardService;
        this.gamePlayerFactory = gamePlayerFactory;
        this.numOfGames = 0;
        this.dealerReward = 0;
        this.clearPlayers();
    }
    clearPlayers() {
        this.rawPlayers = [];
        this.rawPlayersRewards = [];
        this.numOfGames = 0;
        this.dealerReward = 0;
    }
    getScores() {
        return { rewards: this.rawPlayersRewards.map(r => r), numOfGames: this.numOfGames, dealerReward: this.dealerReward };
    }
    playWithAllPlayers(learningGame) {
        const dealer = this.initNewGame();
        if (this.players.length == 0) {
            return;
        }
        this.giveTwoCardToEveryPlayer();
        dealer.addCard(this.cardService.getCard());
        const dealerSecondCard = this.cardService.getCard();
        dealer.addCard(dealerSecondCard);
        this.players.forEach((player) => {
            this.playWithOnePlayer(player, dealerSecondCard, learningGame);
        });
        this.playWithOnePlayer(dealer, dealerSecondCard, learningGame);
        this.rewardPlayers(dealer.getState().sum);
    }
    initNewGame() {
        this.players = this.rawPlayers.map(player => this.gamePlayerFactory.createGamePlayer(player));
        this.numOfGames++;
        return this.gamePlayerFactory.createGamePlayer(new _dealer__WEBPACK_IMPORTED_MODULE_1__["Dealer"]());
    }
    rewardPlayers(dealerSum) {
        this.players.forEach((player, index) => {
            const reward = player.getReward(dealerSum);
            player.learn(reward);
            this.rawPlayersRewards[index] += reward;
            this.dealerReward += -reward;
        });
    }
    giveTwoCardToEveryPlayer() {
        this.players.forEach(player => {
            player.addCard(this.cardService.getCard());
            player.addCard(this.cardService.getCard());
        });
    }
    playWithOnePlayer(player, dealerOpenCard, learningGame = true) {
        let action = 0 /* HIT */;
        while (action === 0 /* HIT */ && player.getState().sum <= 21) {
            action = player.play(dealerOpenCard, learningGame);
            if (action === 0 /* HIT */) {
                player.addCard(this.cardService.getCard());
            }
        }
    }
    addPlayer(player) {
        this.rawPlayers.push(player);
        this.rawPlayersRewards.push(0);
    }
}
DealerService.ɵfac = function DealerService_Factory(t) { return new (t || DealerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_game_player_factory_service__WEBPACK_IMPORTED_MODULE_3__["GamePlayerFactoryService"])); };
DealerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DealerService, factory: DealerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"] }, { type: _game_player_factory_service__WEBPACK_IMPORTED_MODULE_3__["GamePlayerFactoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/dealer.ts":
/*!************************************!*\
  !*** ./src/app/services/dealer.ts ***!
  \************************************/
/*! exports provided: Dealer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dealer", function() { return Dealer; });
/* harmony import */ var _interfaces_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/player */ "./src/app/interfaces/player.ts");

class Dealer extends _interfaces_player__WEBPACK_IMPORTED_MODULE_0__["Player"] {
    play(state) {
        return (state.sum >= 17) ? 1 /* STICK */ : 0 /* HIT */;
    }
}


/***/ }),

/***/ "./src/app/services/first-visit-mcprediction.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/first-visit-mcprediction.service.ts ***!
  \**************************************************************/
/*! exports provided: FirstVisitMCPredictionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstVisitMCPredictionService", function() { return FirstVisitMCPredictionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/state */ "./src/app/classes/state.ts");
/* harmony import */ var _classes_sar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/sar */ "./src/app/classes/sar.ts");




class FirstVisitMCPredictionService {
    constructor() {
        this.V = {};
        this.Returns = {};
        this.episode = [];
        this.firstStates = {};
    }
    startEpisode() {
        this.episode = [];
        this.firstStates = {};
    }
    getEpisode() {
        return this.episode.map(sar => new _classes_sar__WEBPACK_IMPORTED_MODULE_2__["SAR"](sar.getState(), sar.getAction(), sar.getReward()));
    }
    addStep(state, action, reward = 0) {
        const _state = new _classes_state__WEBPACK_IMPORTED_MODULE_1__["State"](state.sum, state.usableAce, state.dealerCard);
        const key = state.getKey(action);
        if (!this.firstStates[key]) {
            this.firstStates[key] = this.episode.length;
        }
        this.episode.push(new _classes_sar__WEBPACK_IMPORTED_MODULE_2__["SAR"](_state, action, reward));
    }
    getAction(state, epsilon = 0) {
        const keyHit = state.getKey(0 /* HIT */);
        const keyStick = state.getKey(1 /* STICK */);
        const hitVal = this.V[keyHit];
        const stickVal = this.V[keyStick];
        let action = 0 /* HIT */;
        // both actions have been tried, epsilon-greedy action
        if (hitVal !== undefined && stickVal !== undefined) {
            action = (hitVal > stickVal) ? 0 /* HIT */ : 1 /* STICK */;
            if (Math.random() < epsilon) {
                action = (action === 0 /* HIT */) ? 1 /* STICK */ : 0 /* HIT */;
            }
        }
        else { // only one of the actions was tried, exploration 
            action = (hitVal === undefined) ? 0 /* HIT */ : 1 /* STICK */;
        }
        return action;
    }
    learnFromEpisode(reward) {
        const T = this.episode.length - 1;
        const lastSAR = this.episode[T];
        this.episode[T] = new _classes_sar__WEBPACK_IMPORTED_MODULE_2__["SAR"](lastSAR.getState(), lastSAR.getAction(), reward);
        let G = 0;
        for (let t = T; t >= 0; t--) {
            G += this.episode[t].getReward();
            const state = this.episode[t].getState();
            const action = this.episode[t].getAction();
            const key = state.getKey(action);
            if (this.firstVisit(key, t)) {
                if (!this.Returns[key]) {
                    this.Returns[key] = [G];
                }
                else {
                    this.Returns[key].push(G);
                }
                this.V[key] = this.Returns[key].reduce((total, actual) => total += actual, 0) / this.Returns[key].length;
            }
        }
    }
    getV() {
        return Object.assign({}, this.V);
    }
    firstVisit(key, t) {
        const keyIndex = this.firstStates[key];
        return (keyIndex !== undefined && keyIndex === t);
    }
}
FirstVisitMCPredictionService.ɵfac = function FirstVisitMCPredictionService_Factory(t) { return new (t || FirstVisitMCPredictionService)(); };
FirstVisitMCPredictionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirstVisitMCPredictionService, factory: FirstVisitMCPredictionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstVisitMCPredictionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/game-player-factory.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/game-player-factory.service.ts ***!
  \*********************************************************/
/*! exports provided: GamePlayerFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePlayerFactoryService", function() { return GamePlayerFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gameplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameplayer */ "./src/app/services/gameplayer.ts");



class GamePlayerFactoryService {
    constructor() { }
    createGamePlayer(player) {
        return new _gameplayer__WEBPACK_IMPORTED_MODULE_1__["GamePlayer"](player);
    }
}
GamePlayerFactoryService.ɵfac = function GamePlayerFactoryService_Factory(t) { return new (t || GamePlayerFactoryService)(); };
GamePlayerFactoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GamePlayerFactoryService, factory: GamePlayerFactoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamePlayerFactoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/gameplayer.ts":
/*!****************************************!*\
  !*** ./src/app/services/gameplayer.ts ***!
  \****************************************/
/*! exports provided: GamePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePlayer", function() { return GamePlayer; });
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/state */ "./src/app/classes/state.ts");

/**
 * An Ace in hand can be counted as 1 or 11
 * whichever is better
 * There would be many aces in hand, but only the last one
 * can be decidable as 1 or 11, because the previous aces
 * should be counted as 1 to not bust
 * (11 + 11 = 22, so the previous ace must be 1)
 */
class GamePlayer {
    constructor(player) {
        this.state = new _classes_state__WEBPACK_IMPORTED_MODULE_0__["State"](0, false, 0);
        if (player !== undefined) {
            this.player = player;
            this.player.prepareForANewGame();
        }
    }
    setPlayer(player) {
        this.player = player;
        this.player.prepareForANewGame();
    }
    setDealeCard(dealerOpenCard) {
        this.state.dealerCard = dealerOpenCard;
    }
    getState() {
        return this.state;
    }
    addCard(card) {
        let summa = this.state.sum + card;
        // maybe a previous card was ace
        summa = this.checkBustWithAceInHand(summa);
        if (card == 11) {
            this.state.usableAce = true;
            summa = this.checkBustWithAceInHand(summa);
        }
        this.state.sum = summa;
    }
    play(dealerCard, learningGame = true) {
        this.state.dealerCard = dealerCard;
        return this.player.play(this.state, learningGame);
    }
    checkBustWithAceInHand(summa) {
        if (summa > 21 && this.state.usableAce) {
            summa -= 10;
            this.state.usableAce = false;
        }
        return summa;
    }
    learn(reward) {
        this.player.episodeDone(this.state, reward);
    }
    getReward(dealerSum) {
        if (this.state.sum > 21) {
            return -1;
        }
        if (dealerSum > 21) {
            return 1;
        }
        const diffPlayer = 21 - this.state.sum;
        const diffDealer = 21 - dealerSum;
        if (diffDealer == diffPlayer) {
            return 0;
        }
        if (diffPlayer < diffDealer) {
            return 1;
        }
        return -1;
    }
}


/***/ }),

/***/ "./src/app/services/mcplayer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/mcplayer.service.ts ***!
  \**********************************************/
/*! exports provided: MCPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCPlayerService", function() { return MCPlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/player */ "./src/app/interfaces/player.ts");
/* harmony import */ var _first_visit_mcprediction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-visit-mcprediction.service */ "./src/app/services/first-visit-mcprediction.service.ts");




class MCPlayerService extends _interfaces_player__WEBPACK_IMPORTED_MODULE_1__["Player"] {
    constructor(learnModule) {
        super();
        this.learnModule = learnModule;
        this.V = {};
    }
    getName() {
        return 'MCPlayer';
    }
    prepareForANewGame() {
        this.learnModule.startEpisode();
    }
    play(state, learningGame) {
        const action = this.learnModule.getAction(state, learningGame ? 0.3 : 0);
        this.learnModule.addStep(state, action);
        return action;
    }
    episodeDone(state, reward) {
        this.learnModule.learnFromEpisode(reward);
    }
    getV() {
        return this.learnModule.getV();
    }
}
MCPlayerService.ɵfac = function MCPlayerService_Factory(t) { return new (t || MCPlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_first_visit_mcprediction_service__WEBPACK_IMPORTED_MODULE_2__["FirstVisitMCPredictionService"])); };
MCPlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MCPlayerService, factory: MCPlayerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MCPlayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _first_visit_mcprediction_service__WEBPACK_IMPORTED_MODULE_2__["FirstVisitMCPredictionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/print-brain.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/print-brain.service.ts ***!
  \*************************************************/
/*! exports provided: PrintBrainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintBrainService", function() { return PrintBrainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/state */ "./src/app/classes/state.ts");



class PrintBrainService {
    constructor() { }
    printV(V) {
        this.printAceInHand(V, false);
        this.printAceInHand(V, true);
    }
    printAceInHand(V, usableAce) {
        console.log("Usable ace: " + usableAce);
        console.log("   23456789TA");
        for (let hand = 2; hand < 22; hand++) {
            let line = (' ' + hand + "|").substr(-3);
            ;
            for (let dealerCard = 2; dealerCard < 12; dealerCard++) {
                const s = new _classes_state__WEBPACK_IMPORTED_MODULE_1__["State"](hand, usableAce, dealerCard);
                const pHIT = V[s.getKey(0 /* HIT */)];
                const pSTICK = V[s.getKey(1 /* STICK */)];
                let choose = '?';
                if (pHIT !== undefined && pSTICK !== undefined) {
                    choose = (pHIT > pSTICK) ? 'H' : 'S';
                }
                line += choose;
            }
            console.log(line);
        }
        console.log("");
    }
}
PrintBrainService.ɵfac = function PrintBrainService_Factory(t) { return new (t || PrintBrainService)(); };
PrintBrainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrintBrainService, factory: PrintBrainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintBrainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/random-generator.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/random-generator.service.ts ***!
  \******************************************************/
/*! exports provided: RandomGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomGeneratorService", function() { return RandomGeneratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RandomGeneratorService {
    /**
    * getRandom(max) - random number between 0 and max
    * getRandom() - random number between 0 and 1
    * getRandom(min, max) - random number between min and max
    * @param limits
    */
    getRandom(...limits) {
        if (!limits || limits.length === 0) {
            return Math.random();
        }
        if (limits.length === 1) {
            return Math.floor(Math.random() * limits[0]);
        }
        return Math.floor(Math.random() * (limits[1] - limits[0]) + limits[0]);
    }
}
RandomGeneratorService.ɵfac = function RandomGeneratorService_Factory(t) { return new (t || RandomGeneratorService)(); };
RandomGeneratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RandomGeneratorService, factory: RandomGeneratorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomGeneratorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/show-strategy/show-strategy.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/show-strategy/show-strategy.component.ts ***!
  \**********************************************************/
/*! exports provided: ShowStrategyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStrategyComponent", function() { return ShowStrategyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/state */ "./src/app/classes/state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ShowStrategyComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ShowStrategyComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ShowStrategyComponent_ng_template_15_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](col_r8.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", col_r8.probability);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r8.content, " ");
} }
function ShowStrategyComponent_ng_template_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowStrategyComponent_ng_template_15_tr_1_td_1_Template, 2, 4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r6);
} }
function ShowStrategyComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowStrategyComponent_ng_template_15_tr_1_Template, 2, 1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rows_r4 = ctx.ctxRows;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rows_r4);
} }
const _c0 = function (a0) { return { ctxRows: a0 }; };
class Cell {
    constructor(content, header = true, probability = 0) {
        this.header = false;
        this.content = '' + content;
        this.header = header;
        this.probability = probability;
        this.style = "";
        if (!header && this.content !== '?') {
            this.style = this.getStyle(probability);
        }
    }
    getStyle(probability) {
        const colorNum = 255 - Math.floor(Math.abs(probability) * 255);
        const c = ('0' + colorNum.toString(16)).substr(-2);
        let color = '00' + c + '00';
        if (probability < 0) {
            color = c + '0000';
        }
        return "background-color:#" + color + ((Math.abs(probability) > 0.25) ? ";color: white" : "");
    }
}
class ShowStrategyComponent {
    constructor() {
        this.rowsUsableAce = [[]];
        this.rowsNoUsableAce = [[]];
    }
    set V(v) {
        this.rowsNoUsableAce = this.getRowsAceInHand(v, false);
        this.rowsUsableAce = this.getRowsAceInHand(v, true);
    }
    getRowsAceInHand(V, usableAce) {
        let rows = [" 23456789TA".split('').map(c => new Cell(c))];
        for (let hand = 2; hand < 22; hand++) {
            let row = [new Cell(hand)];
            for (let dealerCard = 2; dealerCard < 12; dealerCard++) {
                const s = new _classes_state__WEBPACK_IMPORTED_MODULE_1__["State"](hand, usableAce, dealerCard);
                const pHIT = V[s.getKey(0 /* HIT */)];
                const pSTICK = V[s.getKey(1 /* STICK */)];
                let choose = '?';
                let probability = 0;
                if (pHIT !== undefined && pSTICK !== undefined) {
                    choose = (pHIT > pSTICK) ? 'H' : 'S';
                    probability = Math.max(pHIT, pSTICK);
                }
                row.push(new Cell(choose, false, probability));
            }
            rows.push(row);
        }
        return rows;
    }
    ngOnInit() {
    }
}
ShowStrategyComponent.ɵfac = function ShowStrategyComponent_Factory(t) { return new (t || ShowStrategyComponent)(); };
ShowStrategyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowStrategyComponent, selectors: [["show-strategy"]], inputs: { V: "V" }, decls: 17, vars: 8, consts: [[2, "width", "5em"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["brainTable", ""], [4, "ngFor", "ngForOf"], [3, "style", "title", 4, "ngFor", "ngForOf"], [3, "title"]], template: function ShowStrategyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Usable Ace In Hand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No Usable Ace In Hand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ShowStrategyComponent_ng_container_11_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ShowStrategyComponent_ng_container_14_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ShowStrategyComponent_ng_template_15_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.rowsUsableAce));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.rowsNoUsableAce));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctc3RyYXRlZ3kvc2hvdy1zdHJhdGVneS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowStrategyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'show-strategy',
                templateUrl: './show-strategy.component.html',
                styleUrls: ['./show-strategy.component.css']
            }]
    }], function () { return []; }, { V: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/peter/repo/rl-blackjack01-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map