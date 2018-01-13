import { Injectable } from "angular2/core";
import { Http } from "angular2/http";

@Injectable()
export class GithubService { 
    
    _baseUrl = "https://api.github.com";
    _search = "/search/users?q=";
    _user = "/users/";
    _followers = "/followers"; 
    _repos = "/repos";
    _followings = "/following";

    constructor(private http: Http) {
    }

    GetAllProfiles(names){ 
        return this.http.get(this._baseUrl + this._search + name).map(x=> x.json());
    }

    getProfile(username){ 
       return this.http.get(this._baseUrl + this._user+ username).map(x=>x.json());
    }

    getRepositories(username){ 
        return this.http.get(this._baseUrl+ this._user+username+this._repos).map(x=>x.json());
    }

    getFollowers(username){ 
        return this.http.get(this._baseUrl+this._user + username + this._followers).map(x=>x.json());
    }

    getFollowings(username){ 
        return this.http.get(this._baseUrl+this._user + username + this._followings).map(x=>x.json());

    }

    
}