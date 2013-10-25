var app = app || {};

app.AppView = Backbone.View.extend({
  el: $('#projects'),

  // Let's initialize this view by populating the template and caching a selector
  initialize: function() {
    this.$list = $('#projects');
  },

  // let's render the sub tempaltes for our main app
  render: function() {
    // Create views for each post in the Posts collection and append them to the list (underscore style)
    this.collection.each(function(project) {
      console.log(project);
      // // generate the backbone view object and set the model
      var template = Handlebars.compile($('#project-view-template').html());
      var html = template(project.toJSON());
      // using our cached object from the initialize function, append the new view to the list for display
      this.$list.append(html);
    }, this); // "this" is the context in the callback

    // Returning the object is a good practice so we can do chaining
    return this;
  }

});

// var ZooView = Backbone.View.extend({
//   el: $('#main'),

//   initialize: function() {
//     this.$list = $('#animals');
//     this.template = Handlebars.compile($('#animal-template').html());
//   },

//   render: function(){
//     this.$el.html($('#zoo-template').html());

//     this.collection.each(function(model) {
//       this.$list.append(this.template(model.toJSON()));
//     }, this);
//     return this;
//   }
// }); 