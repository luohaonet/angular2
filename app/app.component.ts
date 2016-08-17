import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: '<h1>{{content}}</h1>'
})
export class AppComponent {

    public content: string;

    constructor() {
        this.content = "Hello Angular ！";
    }

}
