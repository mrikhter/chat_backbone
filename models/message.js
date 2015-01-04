var app = app || {}
app.Message = Backbone.Model.extend({
  defaults: {
    id: "",
    from: "",
    to: "",
    text: ""
  }
})
