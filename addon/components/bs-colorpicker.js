import Ember from 'ember';

var $ = Ember.$;
var observer = Ember.observer;

export default Ember.Component.extend({

  color: null,

  tagName: 'button',
  attributeBindings: ['type', 'title'],
  type: 'button',
  classNames: ['btn', 'btn-default'],

  didInsertElement: function() {
    this.$().colorpicker({ color: this.get('color') || '#000000' });
    this.$().on('changeColor', $.proxy(this.colorChangedFromComponent, this));
    this.$().on('showPicker', $.proxy(this.colorChangedAtOpen, this));
    this.refreshElementColor();
  },

  colorChangedFromValue: observer('color', function() {
    // Prevent changing color if value is already set
    var color = this.$().data('colorpicker').color;
    if (this.get('color') && color.toHex() !== this.get('color').toLowerCase()) {
      color.setColor(this.get('color') || '#000000');
      this.$().colorpicker('update');
    }
    this.refreshElementColor();
  }),

  colorChangedFromComponent: function(event) {
    var componentColor = event.color.toHex();

    // Prevent changing color if component is already set
    if (this.get('color') && componentColor !== this.get('color').toLowerCase()) {

      // Prevent changing color at initialization
      if (componentColor !== "#000000" || this.get('color')) {
        this.set('color', componentColor);
      }
    }
  },

  colorChangedAtOpen: function(event) {
    var color = event.color;
    this.set('color', color.toHex());
  },

  willDestroyElement: function() {
    this.$().off('changeColor');
    this.$().off('showPicker');

    if (this.$().data('colorpicker')) {
      this.$().colorpicker('destroy');
    }
  },

  refreshElementColor: function() {
    // Set color to white if it's null
    this.$().css('background-color', this.get('color') || '#ffffff');
  }

});
