System.register(["angular2/core", "angular2/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var GithubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            GithubService = (function () {
                function GithubService(http) {
                    this.http = http;
                    this._baseUrl = "https://api.github.com";
                    this._search = "/search/users?q=";
                    this._user = "/users/";
                    this._followers = "/followers";
                    this._repos = "/repos";
                    this._followings = "/following";
                }
                GithubService.prototype.GetAllProfiles = function (names) {
                    return this.http.get(this._baseUrl + this._search + names).map(function (x) { return x.json().items; });
                };
                GithubService.prototype.getProfile = function (username) {
                    return this.http.get(this._baseUrl + this._user + username).map(function (x) { return x.json(); });
                };
                GithubService.prototype.getRepositories = function (username) {
                    return this.http.get(this._baseUrl + this._user + username + this._repos).map(function (x) { return x.json(); });
                };
                GithubService.prototype.getFollowers = function (username) {
                    return this.http.get(this._baseUrl + this._user + username + this._followers).map(function (x) { return x.json(); });
                };
                GithubService.prototype.getFollowings = function (username) {
                    return this.http.get(this._baseUrl + this._user + username + this._followings).map(function (x) { return x.json(); });
                };
                GithubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GithubService);
                return GithubService;
            }());
            exports_1("GithubService", GithubService);
        }
    }
});
//# sourceMappingURL=github.service.js.map