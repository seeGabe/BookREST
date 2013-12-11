var app = app || {};

// Some default book information to fill model
app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.gif',
		title: 'No title',
		author: 'Anon',
		releaseDate: 'Unk.',
		keywords: 'N/A'
	}
});