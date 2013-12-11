var app = app || {};

// Collection of books are libraries, right?
app.Library = Backbone.Collection.extend({
	model: app.Book
});