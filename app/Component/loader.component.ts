import { Input } from 'angular2/core';
import { Component } from 'angular2/core';
@Component({
    selector : 'spinner', 
    template : ' <i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>'
})
export class LoaderComponent { 
    @Input() visible = true;
}