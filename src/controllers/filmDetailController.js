export default class FilmDetailController {

    constructor($stateParams, FilmsService) {
        this.$_stateParams = $stateParams;
        this.film = FilmsService.getFilmById(this.$_stateParams.id);
    }

}