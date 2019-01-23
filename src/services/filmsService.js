import Film from '../models/film';

export default class FilmsService {

	constructor($http, $q) {
		this._$http = $http;
		this._$q = $q;
		this.films = [];
	}

	getFilmsByTitle(title) {
		let defered = this._$q.defer();
		let promise = defered.promise;
		this._$http.get("http://www.omdbapi.com/?apikey=f12ba140&s=" + title)
			.success(data => {
				this.films = [];
				data.Search.map(film =>{
					this.films.push(new Film(film.Poster,film.Title,film.Type,film.Year,film.imdbID));
				});
				defered.resolve(this.films);
			})
			.error(err => {
				defered.reject(err);
			});
		return promise;
	}

	getFilmById(imdbID){
		return this.films.find(film => film.imdbID === imdbID);
	}
}