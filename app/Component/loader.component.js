System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var LoaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            LoaderComponent = (function () {
                function LoaderComponent() {
                    this.visible = true;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LoaderComponent.prototype, "visible", void 0);
                LoaderComponent = __decorate([
                    core_2.Component({
                        selector: 'spinner',
                        template: ' <i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoaderComponent);
                return LoaderComponent;
            }());
            exports_1("LoaderComponent", LoaderComponent);
        }
    }
});
//# sourceMappingURL=loader.component.js.map