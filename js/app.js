var app = app || {};

// start the app 
$(function(){
	var books = [
		{title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming'},
		{title: 'The Little Book On CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeScript Programming'},
		{title: 'Scala For The Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming'},
		{title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter'},
		{title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming'}
	];
	
	new app.LibraryView( books );
});