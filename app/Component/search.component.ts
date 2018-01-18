import { ProfileComponent } from './profile.component';
import { GithubService } from './../Service/github.service';
import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { LoaderComponent } from './loader.component';

@Component({
    selector : 'search-bar', 
    templateUrl : 'app/Component/search.component.html',
    styles : [`
            img { 
                width : 90px;
            }
        `], 
    providers : [GithubService], 
    directives : [ProfileComponent, ROUTER_DIRECTIVES, LoaderComponent]
})

export class SearchComponent{ 
    isUserLoading = false;
    private username; 
    users = [];
    constructor(private githubService : GithubService){
        
    }
    onSubmit(username){
        console.log(this.isUserLoading);
        if (username.length > 3){
            this.isUserLoading = true;
            console.log(this.isUserLoading);
            console.log(username);
            this.githubService.GetAllProfiles(username).subscribe(data => this.users = data);
            this.isUserLoading = false;
        }
                
    }

    
}