App.Router.map(function() {
	this.resource('posts', { path: '/' }, function() {
		this.resource('post', { path: '/post/:post_id' });
	});
});

App.PostsIndexRoute = Ember.Route.extend({
	model: function() {
		// This doesn't seem to be working when transitioning back to the index
		return this.store.findAll('post').then(function(posts) {
			return posts.get('lastObject');
		});
	},

	renderTemplate: function() {
		this.render('post');
	}
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('post');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		controller.set('firstPost', 0);
		controller.set('lastPost', 1);
	}
});