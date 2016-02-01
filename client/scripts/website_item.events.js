Template.website_item.events({
  "click .js-upvote":function(event){
    event.preventDefault();

    // (this is the data context for the template)
    var website_id = this._id;
    console.log("Up voting website with id "+website_id);

    Meteor.call('upvote', website_id, function(err, res) {
      if(err) console.log(err);

      console.log('Method called successfully! ' + res);
    });

  },
  "click .js-downvote":function(event){
    event.preventDefault();

    // (this is the data context for the template)
    var website_id = this._id;

    console.log("Down voting website with id "+website_id);

    Meteor.call('downvote', website_id);

  }
})
