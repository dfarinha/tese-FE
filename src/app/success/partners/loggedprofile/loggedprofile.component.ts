import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-loggedprofile",
  templateUrl: "./loggedprofile.component.html",
  styleUrls: ["./loggedprofile.component.scss"]
})
export class LoggedprofileComponent implements OnInit {
  chainId: string;
  chain$ = new ReplaySubject(1);
  loadedPosts = [];
  loadedPosts$ = new ReplaySubject(1);

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => {
          return this.http.get("http://localhost:8000/api/users/returnlogged");
        })
      )
      .subscribe(res => {
        this.loadedPosts$.next(res);
        console.log(res);
      });
  }

  onUpdate(form: NgForm) {
    console.log(form.value);

    const cellphone = form.value.cellphone;
    const affiliate = form.value.affiliate;
    const address = form.value.address;
    const country = form.value.country;
    const location = form.value.location;
    const postal = form.value.postal;
    const key = form.value.key;

    if (country != "") {
      this.http
        .post(
          "http://localhost:8000/api/users/updatecountry",
          { country },
          {
            responseType: "json"
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
      console.log("sera");
    }

    if (location != "") {
      this.http
        .post(
          "http://localhost:8000/api/users/updatelocation",
          { location },
          {
            responseType: "json"
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
      console.log("sera");
    }

    if (cellphone != "") {
      this.http
        .post(
          "http://localhost:8000/api/users/updatecellphone",
          { cellphone },
          {
            responseType: "json"
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
      console.log("sera");
    }

    if (postal != "") {
      this.http
        .post(
          "http://localhost:8000/api/users/updatezip",
          { postal },
          {
            responseType: "json"
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
          console.log("yeaaaaaaaa");
        });
      console.log("sera");
    }

    if (address != "") {
      this.http
        .post(
          "http://localhost:8000/api/users/updateaddress",
          { address },
          {
            responseType: "json"
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
      console.log("sera");
    }

    if (key != "") {
      this.http
        .post(
          "http://localhost:8000/api/users/updatekey",
          { key },
          {
            responseType: "json"
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
      console.log("sera");
    }

    if (affiliate != "") {
      this.http
        .post(
          "http://localhost:8000/api/users/updateaffiliate",
          { affiliate },
          {
            responseType: "json"
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
      console.log("sera");
    }
  }
}
