import { GithubService } from './../Service/github.service';
import { Component, Input } from "angular2/core";

@Component({ 
    selector : 'profiles', 
        templateUrl : 'app/component/profile.component.html',
        providers : [GithubService]

})

export class ProfileComponent { 
    users = [];
    constructor(private githubService : GithubService ){
        //this.githubService.getAsffollowers().subscribe(data => console.log(data));
        
    } 


}