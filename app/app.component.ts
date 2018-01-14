import { GithubService } from './Service/github.service';
import { NavbarComponent } from './navbar.component';

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
                githubService.getProfile("microasif").subscribe(d => console.log(d));
        }

 }