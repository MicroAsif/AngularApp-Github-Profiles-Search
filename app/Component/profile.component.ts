import { SummaryPipes } from './../CustomerPipes/summary.pipes';
import { GithubService } from './../Service/github.service';
import { Component, Input, OnInit } from "angular2/core";

@Component({ 
    selector : 'profiles', 
        templateUrl : 'app/component/profile.component.html',
        styleUrls : ['app/component/profile.component.css'],
        providers : [GithubService], 
        pipes : [SummaryPipes]

})

export class ProfileComponent implements OnInit { 
    
    user = {};
    followers = []; 
    followings = []; 
    repos = []; 
    constructor(private githubService : GithubService ){
        //this.githubService.getProfile("Microasif").subscribe(d => console.log(d));
        this.githubService.getProfile("Microasif").subscribe(d => this.user = d);
        this.githubService.getFollowers("Microasif").subscribe(d => this.followers = d);
        this.githubService.getFollowings("Microasif").subscribe(d => this.followings = d);
        this.githubService.getRepositories("Microasif").subscribe(d => this.repos = d);
    } 

    ngOnInit() {
        //this.loadUser();
    }

   



}