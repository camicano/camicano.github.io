// This is included at the beginning of the backbone files to ensure we have an app object as each file is loaded and minimize potential errors
var app = app || {};

$(function() {

  app.router = new app.Router();
  Backbone.history.start();
});
