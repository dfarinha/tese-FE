import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { ReplaySubject } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm, Form } from "@angular/forms";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {
  chainId: string;
  chain$ = new ReplaySubject(1);
  loadedPosts = [];
  loadedPosts$ = new ReplaySubject(1);

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.route.params
      .pipe(
        switchMap(params => {
          return this.http.get("http://localhost:8000/api/invent/showinvent");
        })
      )
      .subscribe(res => {
        this.loadedPosts$.next(res);
        console.log(res);
      });
  }

  onAddProduct(postData: { name: string; value: number; amount: number }) {
    this.http
      .post("http://localhost:8000/api/invent/addproduct", postData, {
        responseType: "json"
      })
      .subscribe(responseData => {
        console.log(responseData);
      });
    console.log(postData);
    // form.reset();

    // window.location.reload()
  }

  onDelete(item) {
    console.log(item);

    this.http
      .post(
        "http://localhost:8000/api/invent/deleteproduct",
        { item },
        {
          responseType: "json"
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
        console.log(item);
      });
    console.log("deleted?");
    // window.location.reload()
  }
}
