Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/website/:_id', {
  name: 'website',
  template: 'website',
  data: function() {
    return Websites.findOne({_id: this.params._id})
  }
});
