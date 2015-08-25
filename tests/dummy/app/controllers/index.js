import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({

  color: '#ff0000',
  colorStyle: computed('color', function () {
    return `background-color: ${this.get('color')}`;
  })

});
