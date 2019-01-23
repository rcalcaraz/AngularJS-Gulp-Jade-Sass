export default class FilmsController {

    constructor(FilmsService, UserService, $rootScope) {
        this._FilmsService = FilmsService;
        this._UserService = UserService;
        this._$rootScope = $rootScope;
        this.films = [];
    }

    getFilmsByTitle(title) {
        this._FilmsService.getFilmsByTitle(title)
            .then(films => {
                this.films = films;
            })
            .catch(err => {
                this.films = [];
                console.log(err);
            });
    }

    saveLike(film) {
        if (!this._$rootScope.user.favourites.find(f => f.imdbID == film.imdbID)) {
            this._$rootScope.user.favourites.push(film);
            this._UserService.saveLike(this._$rootScope.user);
        }
    }

    isAlreadyFavourite(imdbID) {
        if (!this._$rootScope.user.favourites.find(f => f.imdbID == imdbID)) {

            return false;
        } else {
            return true;
        }
    }
}