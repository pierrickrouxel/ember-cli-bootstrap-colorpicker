'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-bootstrap-colorpicker',

  included(app) {
    this.app = app;

    this._super.included(app);
    
    app.import('vendor/ember-cli-bootstrap-colorpicker/bs-colorpicker.css');

    let vendorPath = path.join('vendor', 'bootstrap-colorpicker');
    app.import(path.join(vendorPath, 'bootstrap-colorpicker.css'));
    app.import(path.join(vendorPath, 'bootstrap-colorpicker.js'));
  },

  getColorpickerStylesPath() {
    let nodeModulesPath = this.app.project.nodeModulesPath;
    return path.join(nodeModulesPath, 'bootstrap-colorpicker', 'dist', 'css');
  },

  getColorpickerJavascriptsPath() {
    let nodeModulesPath = this.app.project.nodeModulesPath;
    return path.join(nodeModulesPath, 'bootstrap-colorpicker', 'dist', 'js');
  },

  getColorpickerImagePath() {
    let nodeModulesPath = this.app.project.nodeModulesPath;
    return path.join(nodeModulesPath, 'bootstrap-colorpicker', 'dist', 'img');
  },

  treeForVendor(tree) {
    let trees = tree ? [tree] : [];
    trees.push(new Funnel(this.getColorpickerStylesPath(), {
      destDir: 'bootstrap-colorpicker'
    }));
    trees.push(new Funnel(this.getColorpickerJavascriptsPath(), {
      destDir: 'bootstrap-colorpicker'
    }));
    return mergeTrees(trees, { overwrite: true });
  },

  treeForPublic() {
    return new Funnel(this.getColorpickerImagePath(), {
      destDir: 'img'
    });
  },
};
