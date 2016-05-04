import { Meteor } from 'meteor/meteor';
lists = new Mongo.Collection("lists");
Meteor.startup(() => {
  // code to run on server at startup
});
