import { GithubService } from './../Service/github.service';
import { Component, Input } from "angular2/core";

@Component({ 
    selector : 'profiles', 
        template : `<br/> 
                    <div class="container" *ngIf="users">
                        <div class="row">
                            <div class="col-2" *ngFor="#u of users">
                                <img class="mr-3 rounded-circle" [src]="u.avatar_url"  alt="Generic placeholder image">
                                <h5 class="mt-0">{{u.login}}</h5>
                            </div>
                            
                        </div>  
                    </div>
                `, 
        styles : [`
            img { 
                width : 90px;
            }
        `]

})

export class ProfileComponent { 
    users = [];
    constructor(private githubService : GithubService ){
        //this.githubService.getAsffollowers().subscribe(data => console.log(data));
        
    } 


}