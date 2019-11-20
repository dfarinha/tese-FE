import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-profiles",
  templateUrl: "./profiles.component.html",
  styleUrls: ["./profiles.component.scss"]
})
export class ProfilesComponent implements OnInit {
  userID: string;
  profile$ = new ReplaySubject(1);

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => {
          this.userID = params.id;
          return this.http.get(
            "http://localhost:8000/api/users/getuser/" + this.userID
          );
        })
      )
      .subscribe(res => {
        this.profile$.next(res);
        console.log(res);
      });
  }
}
