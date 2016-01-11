var App = Backbone.View.extend({

	// Notre vue est rattachée
	// à l'élément DOM <div id="app">
	// On pourra accéder à cet élément plus tard
	// via this.$el
	el: '#app',

	// On déclare les events DOM ainsi que
	// les fonctions de callback à appeler
	events: {
		'submit form': 'addNewMovie'
	},

	// Fonction appelée lorsque
	// le formulaire est soumis
	addNewMovie: function(event) {

		// On kill l'event pour éviter 
		// un rechargement de la page
		event.preventDefault();

		// On récupère la valeur des champs
		// En utilisant this.$el
		// Qui fait référence à #app
		var form = $(event.currentTarget);
		var movieName = this.$el.find('.movie-name').val();
		var moviePosterUrl = this.$el.find('.movie-poster').val();
		var movieSynopsis = this.$el.find('.movie-synopsis').val();
		var movieGenre = this.$el.find('.movie-genre').val();

		// On construit le nouveau film
		var movieData = {
			name: movieName,
			posterUrl: moviePosterUrl,
			synopsis: movieSynopsis,
			genre: movieGenre
		};

		// On rend la vue avec la nouvelle data
		this.render(movieData);
	},

	// Cette fonction construit le template
	// D'une nouvelle entrée de liste.
	// Nous verrons plus tard qu'il y a des moyens
	// Beaucoup plus simple de le faire ;)
	getMovieTemplate: function(movieData) {
		var movieTitle = '<h3>' + movieData.name + '</h3>';
		var movieGenre = '<h4> Genre: ' + movieData.genre + '</h4>';
		var movieDesc = '<p> Synopsis: ' + movieData.synopsis + '</p>';
		var movieImage = '<img src="' + movieData.posterUrl + '"/>';

		// On retourne un template jQuery
		return $('<li>' + movieTitle + movieImage + movieGenre + movieDesc  + '</li>');
	},

	// Permet de rendre la vue dans le DOM
	render: function(data) {
		if(!data) {
			return;
		}

		// On récupère l'élément js-movie-list
		// Pratique de préfixer les classes avec "js-"
		// Pour éviter de les confondre !
		var movieList = this.$el.find('.js-movie-list');

		// On récupère le template jQuery 
		// En lui passant la data
		var movieTemplate = this.getMovieTemplate(data);

		// On ajoute le nouveau film au DOM
		movieList.append(movieTemplate);
	}
});

// On initialise la vue
var MovieList = new App();