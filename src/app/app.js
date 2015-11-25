var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Angular2 App';
        this.day = '24/11/2015';
        this.lol = 'loooooooooooooooooooool';
        this.nameChanged = new angular2_1.EventEmitter();
    }
    Object.defineProperty(AppComponent.prototype, "nameModel", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.nameChanged.next(value);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>today is {{day}}</h2>   \n        <p>{{lol}}</p>     \n        <input id=\"name\" [(ng-model)]=\"nameModel\"/> {{nameModel}}\n        ",
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map