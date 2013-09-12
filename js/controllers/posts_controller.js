App.PostsController = Ember.ArrayController.extend({
	displayed: function() {
		var start = this.get('startSlice');
		var end = this.get('endSlice');
		return this.get('model').toArray().sort().reverse().slice(start, end)
	}.property('startSlice', 'endSlice'),

	startSlice: 0,

	endSlice: 10,

	interval: 10,

	hasNoNewer: function() {
		return !(this.get('startSlice') > 0);
	}.property('startSlice'),

	hasNoOlder: function() {
		return !(this.get('endSlice') < this.get('model').get('length'));
	}.property('endSlice'),

	actions: {
		showNewer: function() {
			var len = this.get('model').get('length');
			var lessThanIntervalFromStart = (this.get('interval') - this.get('startSlice') > 0);
			var diff = lessThanIntervalFromStart ? len - (len - this.get('startSlice')) : this.get('interval');
			this.set('startSlice', this.get('startSlice') - diff);
			this.set('endSlice', this.get('endSlice') - diff);
		},

		showOlder: function() {
			var maxDiff = this.get('model').get('length') - this.get('endSlice');
			var diff = Math.min(this.get('interval'), maxDiff);
			this.set('startSlice', this.get('startSlice') + diff);
			this.set('endSlice', this.get('endSlice') + diff);
		}
	}
});