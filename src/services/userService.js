import User from "../models/user";

export default class UserService {

    constructor($rootScope) {
        this._$rootScope = $rootScope;
    }

    login(user) {
        if (JSON.parse(sessionStorage.getItem(user.username)) == null) {
            sessionStorage.setItem(user.username, JSON.stringify(new User(user.username, user.password)));
            sessionStorage.setItem("currentUser", JSON.stringify(new User(user.username, user.password)));
        } 
        this._$rootScope.user = JSON.parse(sessionStorage.getItem(user.username));
        if(localStorage.getItem(user.username) !== null){
            this._$rootScope.user.favourites = JSON.parse(localStorage.getItem(user.username));
        } else{
            this._$rootScope.user.favourites = [];
        }
    }

    logOut() {
        sessionStorage.removeItem("currentUser");
        this._$rootScope.user = null;
    }

    saveLike(user) {
        localStorage.setItem(user.username, JSON.stringify(user.favourites));
        this._$rootScope.user.favourites = JSON.parse(localStorage.getItem(user.username));
    }

}