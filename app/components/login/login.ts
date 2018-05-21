import { Component } from "@angular/core";
import { LoginService } from "../../services/login.service";


@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./loginView.html",
    providers: [ LoginService ]
})
export class LoginComponent {
    public userName = "";
    public passWord = "";

    constructor(private loginService: LoginService) {
    }

    public submit() {

        this.loginService.login()
            .subscribe((result) => {
                alert(JSON.stringify(result));
            }, (error) => {
                console.log(JSON.stringify(error));
                alert(JSON.stringify(error));
            });
    }
}

