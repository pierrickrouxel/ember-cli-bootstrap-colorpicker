import Ember from 'ember';

const { $, observer } = Ember;

export default Ember.Component.extend({
  attributeBindings: ['title', 'style', 'type'],

  didInsertElement: function() {
    this._initializeValues();
    this.$().colorpicker(this.getProperties('color', 'format', 'align', 'container'));
    this.$().on('changeColor', $.proxy(this.didChangeColorFromComponent, this));
    this.$().on('showPicker', $.proxy(this.didChangeColorFromComponent, this));
  },

  willDestroyElement: function() {
    this.$().off('changeColor');
    this.$().off('showPicker');
    this.$().colorpicker('destroy');
  },

  didChangeColorFromComponent: function(event) {
    var componentColor = event.color.toString(this.get('format'));

    // Prevent changing color if component is already set
    if (componentColor !== this.get('color')) {
      this.set('color', componentColor);
    }
  },

  didChangeColorFromProperty: observer('color', function() {
    if (this.get('element')) {
      // Prevent changing color if value is already set
      var color = this.$().data('colorpicker').color;
      if (this.get('color') !== color.toString(this.get('format'))) {
        color.setColor(this.get('color') || '#000000');
        this.$().colorpicker('update');
      }
    }
  }),

  // If value of input is empty, the colorpicker doesn't initialize properly
  _initializeValues: function() {
    var color = this.get('color');
    if (color) {
      if (this.$().is('input')) {
        this.$().val(color);
      } else if (this.$('input').length) {
        this.$('input').val(color);
      }
    }
    this.$().data('color', color);
  }
});
