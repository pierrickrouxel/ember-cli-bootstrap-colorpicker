import Ember from 'ember';

var $ = Ember.$;

export default function(options) {
  var hash = options.hash;
  var element = options.element;
  var context = options.data.view.get('context');

  $(element).colorpicker({
    color: context.get('color'),
    format: hash.format,
    align: hash.align
  });

  options.data.view.on('willDestroyElement', function() {
    $(element).colorpicker('destroy');
  });
}
