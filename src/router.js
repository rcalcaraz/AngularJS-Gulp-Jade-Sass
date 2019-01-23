export default function Router($stateProvider, $urlRouterProvider) {
    const filmsState = {
        name: 'films',
        url: '/films',
        templateUrl: './templates/films.html'
    }

    const filmDetailState = {
        name: 'films.detail',
        url: '^/film/:id',
        views: {
            '@': {
                templateUrl: './templates/filmDetail.html',
            }
        }
    }

    const favouritesState = {
        name: 'favourites',
        url: '/favourites',
        templateUrl: './templates/favourites.html'
    }

    $urlRouterProvider.otherwise("/films");
    $stateProvider.state(filmsState);
    $stateProvider.state(filmDetailState);
    $stateProvider.state(favouritesState);
    
}