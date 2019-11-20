import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.isLoading = true;
    console.log(form.value);

    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe(
      (resData: any) => {
        console.log(resData);
        this.isLoading = false;
        localStorage.setItem("access_token", resData.user.token);
        // this.router.navigate([this.redirectUrl])
        this.router.navigate(["success"]);
      },
      error => {
        console.log(error);
        this.error = "Failed to authenticate";
        this.isLoading = false;
      }
    );
    form.reset();
  }
}
