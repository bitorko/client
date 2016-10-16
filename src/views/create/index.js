export class CreateRouter {
  heading = 'Create Router';

  configureRouter(config, router) {
    config.map([
        {route: '', redirect: 'tournament'},
        {route: 'tournament', name: 'tournament', moduleId: 'views/create/tournament', nav: true, title: 'Tourn'},
        {route: 'institution', name: 'institution', moduleId: 'views/create/institution', nav: true, title: 'Inst'}
    ]);

    this.router = router;
  }
}
