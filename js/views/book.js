var app = app || {};

// displays the book attribs
app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _.template( $('#book-template').html() ),
	
	render: function(){
		// tmpl is a function taht takes JSON and returns HTML
		// this.el was defined @tagName
		// use $el to access teh jQuery .html() function
		
		this.$el.html( this.template( this.model.toJSON() ));
		return this;
	},
	events: {
		'click .delete': 'deleteBook'
	},
	deleteBook: function(){
		// delete model
		this.model.destroy();
		// delete view
		this.remove();
	},
});