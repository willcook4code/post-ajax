
var willsmovies = [
	{
		title: 'Midnight Special',
		year: 2016,
		description: 'A father and son go on the run after the dad learns his child possesses special powers.',
	},
	{
		title: 'Mud',
		year: 2012,
		description: 'Two young boys encounter a fugitive and form a pact to help him evade the vigilantes that are on his trail and to reunite him with his true love.',
	},
	{
		title: 'Take Shelter',
		year: 2011,
		description: 'Plagued by a series of apocalyptic visions, a young husband and father questions whether to shelter his family from a coming storm, or from himself.',
	}
];

willsmovies.forEach(function(movie){
$.ajax({
	url: 'http://small-tiyfe.herokuapp.com/collections/willsmovies',
	type: 'POST',
	data: movie,
	dataType: 'json',
	success: function(data) {
		console.log(willsmovies)
	},
	error: function(errorMsg) {

	},
	complete: function() {
		console.log('You got it.')
	}
});
});
