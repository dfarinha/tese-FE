import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, distinctUntilChanged, take, takeUntil } from "rxjs/operators";
import { interval, Subject, ReplaySubject } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  onCreatePost(postData: {
    email: string;
    name: string;
    location: string;
    password: string;
  }) {
    this.http
      .post(
        "http://localhost:8000/api/users/",
        { user: postData },
        {
          responseType: "json"
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(["/success"]);
      });
    console.log(postData);
  }
}
