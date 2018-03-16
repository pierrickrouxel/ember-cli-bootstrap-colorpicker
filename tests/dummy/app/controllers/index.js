import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  color: '#ff0000',
  colorStyle: computed('color', function () {
    return `background-color: ${this.get('color')}`;
  })

});
