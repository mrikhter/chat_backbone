app.MessagesView = Backbone.View.extend({
  el: '#inbox'

  , events: {
     'click li': 'onClick'
  }

  , template: _.template($('#inbox_template').html())
  , render: function() {
    var self = this;
    app.Messages.each(function(message){
      self.$el.append(self.template({ from: message.get('from') }));
  })}

  , onClick: function (e) {
      // we need to add ids to the models of the messages, and i guess to the DOM also
      // we can use the where method on the collection to search by id, and pass taht to the message view
     messageView = new app.MessageView()
     messageView.render()
  }
});
