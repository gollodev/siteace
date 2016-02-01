Template.website_form.events({
  "click .js-toggle-website-form":function(event){
    $("#website_form").toggle('slow');
  },
  "submit .js-save-website-form":function(event){
    event.preventDefault();

    // data values
    var data = {
      url: event.target.url.value,
      title: event.target.title.value,
      description: event.target.description.value,
      user: Meteor.user().username
    }

    console.log("The url they entered is: " + data.url);

    // calling insertWebsite in server
    Meteor.call('insertWebsite', data);

    console.log('Website Save!');
    event.target.url.value = '';
    event.target.title.value = '';
    event.target.description.value = '';

  }
});
