/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-bootstrap-colorpicker',

  included: function(app) {
    this.app = app;

    this._super.included(app);

    app.import(app.bowerDirectory + '/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js');
    app.import(app.bowerDirectory + '/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css');
    app.import('vendor/ember-cli-bootstrap-colorpicker/bs-colorpicker.css');

    app.import(app.bowerDirectory + '/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/alpha-horizontal.png', { destDir: 'img/bootstrap-colorpicker' });
    app.import(app.bowerDirectory + '/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/alpha.png', { destDir: 'img/bootstrap-colorpicker' });
    app.import(app.bowerDirectory + '/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/hue-horizontal.png', { destDir: 'img/bootstrap-colorpicker' });
    app.import(app.bowerDirectory + '/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/hue.png', { destDir: 'img/bootstrap-colorpicker' });
    app.import(app.bowerDirectory + '/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/saturation.png', { destDir: 'img/bootstrap-colorpicker' });
  }
};
