import {Component, bootstrap} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>today is {{day}}</h2>   
        <p>{{lol}}</p>     
        `
})
class AppComponent { 
    
    public title = 'My Angular2 App';
    public day = '24/11/2015';
    public lol = 'loooooooooooooooooooool';
}
bootstrap(AppComponent);