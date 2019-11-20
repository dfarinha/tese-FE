import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  login(email: string, password: string) {
    return this.http.post("http://localhost:8000/api/users/login", {
      user: {
        email: email,
        password: password
      }
    });
  }

  logout() {
    console.log("clean storage");
    console.log("logged out");
    localStorage.clear();
    this.router.navigate(["home"]);
    return this.http.get("http://localhost:8000/api/users/logout");
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("access_token");
    console.log("tas loggado");
    console.log(token);
    return !this.jwtHelper.isTokenExpired(token);
  }
}
