var app = app || {};

// Create a model for the posts
app.Project = Backbone.Model.extend({
	defaults: {
    title: 'Project',
    link: '#',
    image: '#'
  }
});
 