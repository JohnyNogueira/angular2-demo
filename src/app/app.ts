import {Component,EventEmitter, FORM_DIRECTIVES, bootstrap} from 'angular2/angular2';
 
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>today is {{day}}</h2>   
        <p>{{lol}}</p>     
        <input id="name" [(ng-model)]="nameModel"/> {{nameModel}}
        `,
        directives: [FORM_DIRECTIVES]
})
class AppComponent { 
    
    public title = 'My Angular2 App';
    public day = '24/11/2015';
    public lol = 'loooooooooooooooooooool';
  
    name: string;
    nameChanged = new EventEmitter();
    
    get nameModel() {
        return this.name;
    }
    
    set nameModel(value) {
        this.nameChanged.next(value);
    }
}
bootstrap(AppComponent);