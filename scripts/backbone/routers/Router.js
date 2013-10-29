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
      new app.Project({title: 'Final Project', link: '#', image: 'images/project.png'})
    ]);

    this.topmenu = new app.TopMenuList([
      new app.TopMenu({title: 'Contact', height_location: '0px'}),
      new app.TopMenu({title: 'Skills', height_location: '0px'}),
      new app.TopMenu({title: 'Projects', height_location: '0px'}),
      new app.TopMenu({title: 'Home', height_location: '0px'})
    ]);

    this.bottommenu = new app.BottomMenuList([
      new app.BottomMenu({name: 'fa fa-github-square fa-3x', link: 'https://github.com/camicano'}),
      new app.BottomMenu({name: 'fa fa-linkedin-square fa-3x', link: 'http://www.linkedin.com/in/camilacano/'}),
      new app.BottomMenu({name: 'fa fa-stack-overflow fa-3x', link: 'http://stackoverflow.com/users/2904279/camicano'})
    ]);
  },

  index: function() {
    app.projects = new app.ProjectListView({collection: this.projects});
    app.topMenu = new app.TopMenuListView({collection: this.topmenu});
    app.bottomMenu = new app.BottomMenuListView({collection: this.bottommenu});

    app.projects.render();
    app.topMenu.render();
    app.bottomMenu.render();
  }
});
