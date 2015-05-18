import Ember from 'ember';

var $ = Ember.$;

var BsColorpicker = Ember.Object.extend({

  color: Ember.computed.alias('context.color'),

  $: function(selector) {
    if (selector) {
      return $(this.get('element')).find(selector);
    } else {
      return $(this.get('element'));
    }
  },

  didInsertElement: function() {
    this.$().colorpicker(this.getProperties('color', 'format', 'align'));
    this.$().on('changeColor', $.proxy(this.didChangeColorFromComponent, this));
    this.$().on('showPicker', $.proxy(this.didChangeColorFromComponent, this));
  },

  willDestroyElement: function() {
    this.$().off('changeColor');
    this.$().off('showPicker');
    this.$().colorpicker('destroy');
  },

  didChangeColorFromComponent: function(event) {
    var componentColor = event.color.toHex();

    // Prevent changing color if component is already set
    if (componentColor !== this.get('color')) {
      this.set('color', componentColor);
    }
  },

  didChangeColorFromProperty: Ember.observer('color', function() {
    // Prevent changing color if value is already set
    var color = this.$().data('colorpicker').color;
    if (color.toHex() !== this.get('color')) {
      color.setColor(this.get('color'));
      this.$().colorpicker('update');
    }
  })

});

export default function(options) {
  var hash = options.hash;
  var element = options.element;
  var context = options.data.view.get('context');

  var colorpicker = BsColorpicker.create({
    element: element,
    context: context,
    format: hash.format,
    align: hash.align
  });
  colorpicker.didInsertElement();

  options.data.view.on('willDestroyElement', function() {
    colorpicker.willDestroyElement();
  });
}
