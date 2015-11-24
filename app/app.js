import reflectMetadata from 'reflect-metadata';
import {Component, View, bootstrap} from 'angular2/angular2';
import path from 'path';

@Component({
  selector: 'app',
})
@View({
  templateUrl: '/templates/todos.html',

})
class TodoApp {};


bootstrap(TodoApp);