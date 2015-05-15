/* jshint node: true */

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('mjolnic-bootstrap-colorpicker');
  }
};
