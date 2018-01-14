System.register(['./Component/navbar.component', './Service/github.service', 'angular2/core', './test.component'], function(exports_1, context_1) {
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
    var navbar_component_1, github_service_1, core_1, test_component_1;
    var AppComponent;
    return {
        setters:[
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(githubService) {
                    githubService.GetAllProfiles("mic").subscribe(function (d) { return console.log(d); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <nav-bar></nav-bar>\n            ",
                        directives: [test_component_1.TestCompoent, navbar_component_1.NavbarComponent],
                        providers: [github_service_1.GithubService]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map