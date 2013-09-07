App.Router.map(function() {
	this.resource('posts', { path: '/' }, function() {
		this.resource('post', { path: '/post/:post_id' });
	});
});

// App.IndexRoute = Ember.Route.extend({
// 	model: function() {
// 		// Do some promise finagling to get the most recent post
// 		return this.store.findAll('post').then(function(promise) {
// 			return promise.toArray();
// 		}).then(function(posts) {
// 			return posts.sort().reverse()[0];
// 		});
// 	},

// 	renderTemplate: function() {
// 		this.render('post');
// 	}
// });

App.PostsIndexRoute = Ember.Route.extend({
	model: function() {
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
		// Do some promise finagling to return the posts in reverse order
		return this.store.findAll('post').then(function(promise) {
			return promise.toArray();
		}).then(function(posts) {
			return posts.sort().reverse();
		});
	}
});