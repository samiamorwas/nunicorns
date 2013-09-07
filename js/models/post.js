App.Post = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string')
});

App.Post.FIXTURES = [
	{
		id: 1,
		title: "Test 1",
		body: "This is the first test post."
	},
	{
		id: 2,
		title: "Test 2",
		body: "Isn't this fun?"
	},
	{
		id: 3,
		title: "Test 3",
		body: "Yeah it is!"
	}
];