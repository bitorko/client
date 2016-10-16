export class App {
  configureRouter(config, router) {
    config.title = 'Bitorko';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: 'views/home/tournament',
        nav: true,
        title: 'Tournament'
      },
      {
        route: 'create',
        name: 'create',
        moduleId: 'views/create/index',
        nav: true,
        title: 'Create'
      }
    ]);

    this.router = router;
  }
}
