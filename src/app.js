import HomeController from './controllers/homeController';
import FilmsController from './controllers/filmsController';
import FilmDetailController from './controllers/filmDetailController';
import FilmsService from './services/filmsService';
import UserService from './services/userService';
import FavouriteFilmsController from './controllers/favouriteFilmsController';
import Router from './router';

angular.module('myApp', ['ui.router'])
    .config(Router)
    .controller('HomeController', HomeController)
    .controller('FilmsController', FilmsController)
    .controller('FilmDetailController', FilmDetailController)
    .controller('FavouriteFilmsController', FavouriteFilmsController)
    .service('FilmsService', FilmsService)
    .service('UserService', UserService);