App.Router.map(function() {
	this.resource('posts', { path: '/' }, function() {
		this.resource('post', { path: '/post/:post_id' });
	});
});

/*
	This is some funky junk, brother. We set the model for
	the index route to be the most recent post, so that
	going to the site will show that first. Then we pass that
	to the application controller, so that the brand logo
	will link to the right post. There seems to be no good
	way to get it to link to the index and show the latest
	post, because linkTo won't call the model hook for
	dynamic urls.
*/
App.PostsIndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('post').then(function(posts) {
			return posts.get('lastObject');
		});
	},

	renderTemplate: function() {
		this.render('post');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		this.controllerFor('application').set('recentPost', model);
	}
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('post');
	}
});