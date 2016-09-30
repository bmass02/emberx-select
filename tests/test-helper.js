import Ember from 'ember';
import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';
import xSelectHelper from './helpers/x-select';
xSelectHelper();


setResolver(resolver);

export function beforeEach(fn) {
  window.beforeEach(function() {
    let test = this;
    Ember.run(function() {
      fn.call(test);
    });
  });
}
export function afterEach(fn) {
  window.afterEach(function() {
    let test = this;
    Ember.run(function() {
      fn.call(test);
    });
  });
}

export const describe = window.describe;
