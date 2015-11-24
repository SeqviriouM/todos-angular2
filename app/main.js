import reflectMetadata from 'reflect-metadata';
import {ComponentMetadata, ViewMetadata, bootstrap} from 'angular2/angular2';

function AppComponent() {}
AppComponent.annotations = [
  new ComponentMetadata({
    selector: 'app'
  }),
  new ViewMetadata({
    template: '<h1>My first Angular 2 App</h1>'
  })
];
document.addEventListener('DOMContentLoaded', function() {
  bootstrap(AppComponent);
});
