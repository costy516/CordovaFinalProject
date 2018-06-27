webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function resize(arr) {
    var tempArray1 = new Array(1 + arr.length);
    for (var i = 0; i < arr.length; i++) {
        tempArray1[i] = arr[i];
    }
    return tempArray1;
}
function addPending(task) {
    PENDINGTASKS = resize(PENDINGTASKS);
    PENDINGTASKS[PENDINGTASKS.length - 1] = task;
}
function addOverdue(task) {
    OVERDUETASKS = resize(OVERDUETASKS);
    OVERDUETASKS[OVERDUETASKS.length - 1] = task;
}
function deletePending(task) {
    var tempArray3 = new Array(PENDINGTASKS.length - 1);
    var counter = 0;
    var hasBeenRemoved = false;
    for (var i = 0; i < PENDINGTASKS.length; i++) {
        if (equals(PENDINGTASKS[i], task) && !hasBeenRemoved) {
            hasBeenRemoved = true;
        }
        else {
            tempArray3[counter++] = PENDINGTASKS[i];
        }
    }
    PENDINGTASKS = tempArray3;
}
function deleteOverdue(task) {
    var tempArray3 = new Array(OVERDUETASKS.length - 1);
    var counter = 0;
    var hasBeenRemoved = false;
    for (var i = 0; i < OVERDUETASKS.length; i++) {
        if (equals(OVERDUETASKS[i], task) && !hasBeenRemoved) {
            hasBeenRemoved = true;
        }
        else {
            tempArray3[counter++] = OVERDUETASKS[i];
        }
    }
    OVERDUETASKS = tempArray3;
}
function equals(that, other) {
    return (other === undefined) ? ((that === undefined) ? (true) : (false)) : (that.id === other.id && that.status.localeCompare(other.status) === 0 && that.name.localeCompare(other.name) === 0);
}
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());
var idCounter = 1;
var PENDINGTASKS = new Array(0);
var OVERDUETASKS = new Array(0);
var TASKS = new Array(0);
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.statuses = ["pending", "completed", "overdue"];
        this.tempTask = new Task;
        this.pendingTasks = PENDINGTASKS;
        this.overdueTasks = OVERDUETASKS;
        //this.storage.clear();
        this.storage.ready().then(function () {
            _this.storage.forEach(function (value, key, iterationNumber) {
                if (value !== null) {
                    _this.tempTask = new Task;
                    _this.tempTask.id = iterationNumber;
                    _this.tempTask.status = value;
                    _this.tempTask.name = key;
                    idCounter = iterationNumber.valueOf();
                    console.log("adding");
                    if (_this.tempTask.status.localeCompare("pending") || _this.tempTask.status.localeCompare("completed") || _this.tempTask.status.localeCompare("overdue")) {
                        if (idCounter >= TASKS.length) {
                            TASKS = resize(TASKS);
                        }
                        _this.tempTask.id = new Number(idCounter);
                        TASKS[TASKS.length - 1] = _this.tempTask;
                        if (_this.tempTask.status.localeCompare("pending") === 0) {
                            addPending(_this.tempTask);
                            _this.pendingTasks = PENDINGTASKS;
                        }
                        if (_this.tempTask.status.localeCompare("overdue") === 0) {
                            addOverdue(_this.tempTask);
                            _this.overdueTasks = OVERDUETASKS;
                        }
                        _this.tempTask = new Task;
                        _this.tempTask.name = "name";
                        idCounter++;
                    }
                    _this.tasks = TASKS;
                    _this.pendingTasks = PENDINGTASKS;
                    _this.overdueTasks = OVERDUETASKS;
                    _this.tempTask = new Task;
                    _this.tempTask.name = "name";
                }
            });
        });
    }
    HomePage.prototype.addTask = function () {
        console.log("adding");
        if (idCounter >= TASKS.length) {
            TASKS = resize(TASKS);
        }
        this.tempTask.id = new Number(idCounter + 1);
        TASKS[TASKS.length - 1] = this.tempTask;
        if (this.tempTask.status.localeCompare("pending") === 0) {
            addPending(this.tempTask);
            this.pendingTasks = PENDINGTASKS;
        }
        if (this.tempTask.status.localeCompare("overdue") === 0) {
            addOverdue(this.tempTask);
            this.overdueTasks = OVERDUETASKS;
        }
        this.storage.set(this.tempTask.name, this.tempTask.status);
        this.tempTask = new Task;
        this.tempTask.name = "name";
        idCounter++;
        this.tasks = TASKS;
    };
    HomePage.prototype.onSelected = function (type) {
        this.tempTask.status = type;
        console.log(type);
    };
    HomePage.prototype.delete = function (task) {
        console.log("deleting");
        if (task.status.localeCompare("pending") === 0) {
            deletePending(task);
            this.pendingTasks = PENDINGTASKS;
        }
        if (task.status.localeCompare("overdue") === 0) {
            deleteOverdue(task);
            this.overdueTasks = OVERDUETASKS;
        }
        var tempArray2 = new Array(TASKS.length - 1);
        var hasBeenRemoved = false;
        var counter = 0;
        for (var i = 0; i < TASKS.length; i++) {
            if (equals(task, TASKS[i]) && !hasBeenRemoved) {
                hasBeenRemoved = true;
            }
            else {
                tempArray2[counter++] = TASKS[i];
            }
        }
        TASKS = tempArray2;
        this.tasks = TASKS;
        this.storage.remove(task.name);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\WozU\Module8\MyIonicApps\FinalProject\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      To-Do List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="add">\n    <input [(ngModel)] = "tempTask.name" placeholder="name"/>\n      <ul class="status">\n        <li *ngFor = "let status of statuses"\n          (click) = "onSelected(status)">\n          <span >{{status}}</span>\n        </li>\n      </ul>\n    <div (click)="addTask();">ADD</div>\n  </div>\n  <div class="pendingTasks">\n      <h1>Pending To-Dos</h1>\n      <ul>\n        <li *ngFor = "let task1 of pendingTasks">\n          <br/>\n          {{task1.id}}<br/>\n          {{task1.name}}<br/>\n          {{task1.status}}<br/>\n          <div (click)="delete(task1);">DELETE</div><br/>\n          <br/>\n        </li>\n      </ul>\n    </div>\n    <div class="overdueTasks">\n        <h1>Overdue To-Dos</h1>\n        <ul>\n          <li *ngFor = "let task2 of overdueTasks">\n            <br/>\n            {{task2.id}}<br/>\n            {{task2.name}}<br/>\n            {{task2.status}}<br/>\n            <div (click)="delete(task2);">DELETE</div><br/>\n            <br/>\n          </li>\n        </ul>\n      </div>\n  <div class="allTasks">\n    <h1>All To-Dos</h1>\n    <ul>\n      <li *ngFor = "let task of tasks">\n        <br/>\n        {{task.id}}<br/>\n        {{task.name}}<br/>\n        {{task.status}}<br/>\n        <div (click)="delete(task);">DELETE</div><br/>\n        <br/>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\WozU\Module8\MyIonicApps\FinalProject\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\WozU\Module8\MyIonicApps\FinalProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\WozU\Module8\MyIonicApps\FinalProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map