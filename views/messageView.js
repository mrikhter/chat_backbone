app.MessageView = Backbone.View.extend({
  el: '#message'

  , template: _.template($('#message_template').html())
  , render: function() {
    this.$el.html(this.template({ to: 'blake', from: 'masha', text: 'type better'} ));
  }
});
