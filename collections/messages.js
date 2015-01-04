var app = app || {}
var Messages = Backbone.Collection.extend({
  model: app.Message
});

var messages = [{ to: 'blake', from: 'masha', text: 'type better' }
  , { to: 'masha', from: 'blake', text: 'shut up' }]

app.Messages = new Messages();
app.Messages.reset(messages);

