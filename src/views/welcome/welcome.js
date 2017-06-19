import {inject} from "aurelia-framework";
import {Router} from 'aurelia-router';

@inject(Router)
export class Welcome {
    model;

    constructor(router) {
        this.model = new LoginModel();
        this.router = router;
    }

    login() {
        if (!this.model.valid()) {
            console.error("error");
        }
        else {
            this.router.navigate("list");
        }
    }
}

class LoginModel {
    userName;
    password;

    valid() {
        if (!this.userName || !this.password) {
            return false;
        }

        return true;
    }
}
