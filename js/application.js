window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.postSlice = function(store, start, end, action, arg) {
	return store.findAll('post').then(function(promise) {
		return promise.toArray();
	}).then(function(posts) {
		return posts.sort().reverse().slice(start, end);
	}).then(function(slicedPosts) {
		return action(arg, slicedPosts);
	});
};

App.ApplicationAdapter = DS.FixtureAdapter.extend();