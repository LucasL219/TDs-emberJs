import EmberRouter from '@ember/routing/router';
import config from 'td2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('TD2');
  this.route('ex2');
  this.route('Ex2');
});
