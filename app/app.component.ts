import { NavbarComponent } from './Component/navbar.component';
import { GithubService } from './Service/github.service';

import {Component} from 'angular2/core';
import { TestCompoent } from './test.component';

@Component({
    selector: 'my-app',
    template : `
                <nav-bar></nav-bar>
            `, 
    directives : [TestCompoent, NavbarComponent], 
    providers : [GithubService]
})
export class AppComponent {

        constructor(githubService : GithubService){
                githubService.GetAllProfiles("mic").subscribe(d => console.log(d));
        }

 }