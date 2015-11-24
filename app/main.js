function AppComponent() {}
AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'app'
  }),
  new angular.ViewAnnotation({
    template: '<h1>My first Angular 2 App</h1>'
  })
];
document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(AppComponent);
});
