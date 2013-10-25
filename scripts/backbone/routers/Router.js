var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    this.projects = new app.ProjectList([
      new app.Project({title: 'Food Me', link: 'http://evening-sierra-8143.herokuapp.com/', image: 'images/foodme.jpg'}),
      new app.Project({title: 'Asana', link: 'http://yogapp.herokuapp.com/', image: 'images/asana.jpg'}),
      new app.Project({title: 'Tunr', link: 'http://tunr-app.herokuapp.com', image: 'images/tunr.jpg'}),
      new app.Project({title: 'Final Project', link: '#', image: 'images/project.jpg'}),
    ]);
  },

  index: function() {
    app.appView = new app.AppView({collection: this.projects});
    app.appView.render();
  }
});
