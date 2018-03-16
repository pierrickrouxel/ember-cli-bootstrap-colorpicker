'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const resolve = require('resolve');

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

  resolvePackagePath(pkgPath) {
    let parts = pkgPath.split('/');
    let pkg = parts[0];
    let result = path.dirname(resolve.sync(`${pkg}/package.json`, { basedir: this.app.project.root }));

    // add sub folders to path
    if (parts.length > 1) {
      let args = parts.map((part, i) => i === 0 ? result : part);
      result = path.join.apply(path, args);
    }
    return result;
  },

  treeForVendor(tree) {
    let trees = tree ? [tree] : [];
    trees.push(new Funnel(this.resolvePackagePath('bootstrap-colorpicker/dist/css'), {
      destDir: 'bootstrap-colorpicker'
    }));
    trees.push(new Funnel(this.resolvePackagePath('bootstrap-colorpicker/dist/js'), {
      destDir: 'bootstrap-colorpicker'
    }));
    return mergeTrees(trees, { overwrite: true });
  },

  treeForPublic() {
    return new Funnel(this.resolvePackagePath('bootstrap-colorpicker/dist/img'), {
      destDir: 'img'
    });
  },
};
