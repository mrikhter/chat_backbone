app.HeaderView = Backbone.View.extend({
  el: '#header'

  , events: {
     'click #header': 'onClick'
  }

  , template: _.template($('#header_template').html())
  , render: function() {
    this.$el.html(this.template({ count: app.Messages.length } ));
  }

  , onClick: function () {
     messagesView = new app.MessagesView()
     messagesView.render()
  }
});
