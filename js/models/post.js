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
		body: "Here's some text talking about stuff that I'll keep typing blah blah blah \n blah blah blah some more."
	}, 
	{
		id: 4,
		title: "Test 4",
		body: "Blaaaaaaaaaaaaaaaaaaaaaaah"
	},
	{
		id: 5,
		title: "Test 5",
		body: "I'm so good."
	},
	{
		id: 6,
		title: "Test 6",
		body: "I really am."
	},
	{
		id: 7,
		title: "Test 7",
		body: "Hope this works."
	},
	{
		id: 8,
		title: "Test 8",
		body: "This is absurd."
	}
];