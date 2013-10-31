var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    this.projects = new app.ProjectList([
      new app.Project({title: 'Food Me', link: 'http://foodme.us/', image: 'images/foodme.png', description: 'A plataform that allows you to see where are food truck located near your area.', techspecs: [ 'Rails', 'Ruby', 'Javascript', 'jQuery', 'Postgresql', 'Googlemaps API', 'Frousquare API', 'Skeleton' ], github: 'https://github.com/camicano/food_trucks_app' }),
      new app.Project({title: 'Asana', link: 'http://yogapp.herokuapp.com/', image: 'images/asana.png', description: 'An app that allows you to find affortable yoga classes near your location and at a time that works for you.', techspecs: [ 'Rails', 'Ruby', 'Postgresql', 'Skeleton' ], github: 'https://github.com/camicano/yoga_app' }),
      new app.Project({title: 'Tunr', link: 'http://tunr-app.herokuapp.com', image: 'images/tunr.png', description: 'A plataform that allows you to create a database of artist, albums and songs.', techspecs: [ 'Rails', 'Ruby', 'Postgresql', 'Skeleton' ], github: 'https://github.com/camicano/turnapp' })
    ]);

    this.topmenu = new app.TopMenuList([
      new app.TopMenu({title: 'Contact'}),
      new app.TopMenu({title: 'Skills'}),
      new app.TopMenu({title: 'Projects'}),
      new app.TopMenu({title: 'Home'})
    ]);

    this.bottommenu = new app.BottomMenuList([
      new app.BottomMenu({name: 'fa fa-github-square fa-3x', link: 'https://github.com/camicano'}),
      new app.BottomMenu({name: 'fa fa-linkedin-square fa-3x', link: 'http://www.linkedin.com/in/camilacano/'}),
      new app.BottomMenu({name: 'fa fa-stack-overflow fa-3x', link: 'http://stackoverflow.com/users/2904279/camicano'}),
      new app.BottomMenu({name: 'fa fa-twitter fa-3x', link: 'https://twitter.com/camicanonyc'})
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
