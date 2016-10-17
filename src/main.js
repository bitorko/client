import environment from './environment';
import {HttpClient} from 'aurelia-fetch-client';
import {config} from './auth-config';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-auth', (baseConfig)=>{
      baseConfig.configure(config);
    });

  let container = aurelia.container;
  let http = new HttpClient();
  http.configure(httpConfig => {
    httpConfig
      .useStandardConfiguration()
      .withBaseUrl(environment.base);
  });

  container.registerInstance(HttpClient, http);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
