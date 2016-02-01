Meteor.methods({
  insertWebsite: function(data) {
    Websites.insert({
      url: data.url,
      title: data.title,
      description: data.description,
      createBy: data.user
    });
  },
  upvote: function(website_id) {
    Websites.update(website_id, {
      $inc: { vote: 1 }
    });
  },
  downvote: function(website_id) {
    Websites.update(website_id, {
      $inc: { vote: - 1 }
    });
  }
});
