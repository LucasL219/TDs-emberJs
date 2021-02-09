import EmberRouter from '@ember/routing/router';
import config from 'td3/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Td3');
  this.route('pageun');
});
