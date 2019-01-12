/*jshint node:true*/
module.exports = {
  description: '',

  locals: function(options) {
    // Return custom template variables here.
    var path = options.args[1];
    return {
      classNames: path.replace('/',"','"),
      styleNames: path.replace('/','.')
    };
  },

  afterInstall: function(options) {
    // Perform extra work here.
    var path = options.args[1];
    this.insertIntoFile('app/styles/pods.scss', "\n@import 'app/components/"+path+"/style';", {}).then(function() {
      // file has been inserted into!
    });
  }

};
