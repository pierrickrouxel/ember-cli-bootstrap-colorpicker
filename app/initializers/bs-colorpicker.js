import Ember from 'ember';
import BSColorpickerHelper from 'ember-cli-bootstrap-colorpicker/helpers/bs-colorpicker';

export function initialize() {
  Ember.Handlebars.registerHelper('bs-colorpicker', BSColorpickerHelper);
}

export default {
  name: 'ember-cli-bootstrap-colorpicker',
  initialize: initialize
};
