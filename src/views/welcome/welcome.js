

export class Welcome {
    model;

    constructor() {
        this.model = new LoginModel();
    }

    login() {
        if (!this.model.valid()) {
            console.error("error");
        }
        else {
            console.log("valid");
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
