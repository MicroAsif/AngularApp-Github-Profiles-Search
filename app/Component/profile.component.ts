import { GithubService } from './../Service/github.service';
import { Component, Input } from "angular2/core";

@Component({ 
    selector : 'profiles', 
        template : `
                    Profile Component
                `, 
        styles : [`
            img { 
                width : 90px;
            }
        `], 
        providers : [GithubService]

})

export class ProfileComponent { 
    users = [];
    constructor(private githubService : GithubService ){
        //this.githubService.getAsffollowers().subscribe(data => console.log(data));
        
    } 


}