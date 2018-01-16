System.register(['./../CustomerPipes/summary.pipes', './../Service/github.service', "angular2/core"], function(exports_1, context_1) {
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
    var summary_pipes_1, github_service_1, core_1;
    var ProfileComponent;
    return {
        setters:[
            function (summary_pipes_1_1) {
                summary_pipes_1 = summary_pipes_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(githubService) {
                    var _this = this;
                    this.githubService = githubService;
                    this.user = {};
                    this.followers = [];
                    this.followings = [];
                    this.repos = [];
                    //this.githubService.getProfile("Microasif").subscribe(d => console.log(d));
                    this.githubService.getProfile("Microasif").subscribe(function (d) { return _this.user = d; });
                    this.githubService.getFollowers("Microasif").subscribe(function (d) { return _this.followers = d; });
                    this.githubService.getFollowings("Microasif").subscribe(function (d) { return _this.followings = d; });
                    this.githubService.getRepositories("Microasif").subscribe(function (d) { return _this.repos = d; });
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    //this.loadUser();
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profiles',
                        templateUrl: 'app/component/profile.component.html',
                        styleUrls: ['app/component/profile.component.css'],
                        providers: [github_service_1.GithubService],
                        pipes: [summary_pipes_1.SummaryPipes]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map