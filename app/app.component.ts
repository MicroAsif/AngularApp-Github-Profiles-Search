import { SearchComponent } from './Component/search.component';

import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template : `
                <search-bar></search-bar>
            `, 
    directives : [SearchComponent]
})
export class AppComponent {
        constructor(){
               
        }

 }