export default class HomeController {

    constructor(UserService, $rootScope) {
        this.UserService = UserService;
        this._$rootScope = $rootScope;
        if(sessionStorage.getItem("currentUser") !== null){
            this._$rootScope.user = JSON.parse(sessionStorage.getItem("currentUser"));
        }
    }

    login(user){
        this.UserService.login(user);
    }

    logOut(){
        this.UserService.logOut();
    }
}