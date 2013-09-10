App.PostsController = Ember.ArrayController.extend({
	displayed: function() {
		var start = this.get('startSlice');
		var end = this.get('endSlice');
		return this.get('model').toArray().sort().reverse().slice(start, end)
	}.property('startSlice', 'endSlice'),

	startSlice: 0,

	endSlice: 2,

	interval: 2,

	hasNoNewer: function() {
		return !(this.get('startSlice') > 0);
	}.property('startSlice'),

	hasNoOlder: function() {
		return !(this.get('endSlice') < this.get('model').toArray().length);
	}.property('endSlice'),

	actions: {
		showNewer: function() {
			this.set('startSlice', this.get('startSlice') - this.get('interval'));
			this.set('endSlice', this.get('endSlice') - this.get('interval'));
		},

		showOlder: function() {
			this.set('startSlice', this.get('startSlice') + this.get('interval'));
			this.set('endSlice', this.get('endSlice') + this.get('interval'));
		}
	}
});