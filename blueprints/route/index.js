/*jshint node:true*/
module.exports = {
  description: '',

  locals: function(options) {
    // Return custom template variables here.
    var path = options.args[1];
    return {
      classNames: path.replace('/',"','"),
      styleNames: path.replace('/','.'),
      pageName: path.replace('/','-') + '-page'
    };
  },

  afterInstall: function(options) {
    // Perform extra work here.
    var path = options.args[1];
    this.insertIntoFile('app/styles/routes.scss', "\n@import 'app/"+path+"/style';", {}).then(function() {
      // file has been inserted into!
    });
  }

};