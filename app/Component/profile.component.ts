import { LoaderComponent } from './loader.component';
import { SummaryPipes } from './../CustomerPipes/summary.pipes';
import { GithubService } from './../Service/github.service';
import { Component, Input, OnInit } from "angular2/core";
import { RouteParams } from 'angular2/router';


@Component({ 
    selector : 'profiles', 
        templateUrl : 'app/component/profile.component.html',
        styleUrls : ['app/component/profile.component.css'],
        directives : [LoaderComponent],
        providers : [GithubService], 
        pipes : [SummaryPipes]

})

export class ProfileComponent implements OnInit { 
    
    user = {};
    followers = []; 
    followings = []; 
    repos = []; 
    username: string ;
    isUserDataLoading;
    constructor(private githubService : GithubService, private routerParams : RouteParams ){
        this.isUserDataLoading = true;
        this.username = this.routerParams.get("username");
       
        this.githubService.getProfile(this.username).subscribe(d => this.user = d);
        this.githubService.getFollowers(this.username).subscribe(d => this.followers = d);
        this.githubService.getFollowings(this.username).subscribe(d => this.followings = d);
        this.githubService.getRepositories(this.username).subscribe(d => this.repos = d);
        this.isUserDataLoading = false;
    } 

    ngOnInit() {
        //this.loadUser();
    }

   



}