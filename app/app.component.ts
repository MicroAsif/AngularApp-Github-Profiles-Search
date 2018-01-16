import { SearchComponent } from './Component/search.component';
import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { ProfileComponent } from './Component/profile.component';

@RouteConfig([
        {path : '/', name : 'Search', component : SearchComponent, useAsDefault: true}, 
        {path : '/profile', name:'Profile', component: ProfileComponent},
        // {path : '/*other', name : 'Other', redirectTo : ['Search']},
])

@Component({
    selector: 'my-app',
    templateUrl : `app/Component/profile.component.html`, 
                
        //         <router-outlet></router-outlet>
                 
        //     `, 
    directives : [SearchComponent, ProfileComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {
        constructor(){
               
        }

 }