import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { ReplaySubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { NgForm, Form } from "@angular/forms";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"]
})
export class PartnersComponent implements OnInit {
  chainId: string;
  chain$ = new ReplaySubject(1);
  loadedPosts = [];
  loadedPosts$ = new ReplaySubject(1);

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.showPartners();
  }

  private showPartners() {
    this.route.params
      .pipe(
        switchMap(params => {
          return this.http.get("http://localhost:8000/api/invent/showpartners");
        })
      )
      .subscribe(res => {
        this.loadedPosts$.next(res);
        console.log(res);
      });
  }

  onAddPartner(postData: { email: string }) {
    this.http
      .post("http://localhost:8000/api/invent/addpartner", postData, {
        responseType: "json"
      })
      .subscribe(responseData => {
        console.log(responseData);
        console.log(postData);
      });
    console.log(postData);

    // form.reset();
  }

  onDeletePartner(event, item) {
    event.stopPropagation();
    this.http
      .post(
        "http://localhost:8000/api/invent/deletepartner",
        { item },
        {
          responseType: "json"
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
        console.log(item);
      });
    console.log(item);
    // form.reset();
  }
}
