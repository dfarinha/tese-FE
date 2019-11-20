import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ReplaySubject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  chainId: string;
  chain$ = new ReplaySubject(1);
  loadedPosts = [];
  loadedPosts$ = new ReplaySubject(1);

  productsArray = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.displayChain();
  }

  private displayChain() {
    this.route.params
      .pipe(
        switchMap(params => {
          return this.http.get("http://localhost:8000/api/users/showchain");
        })
      )
      .subscribe(res => {
        this.chain$.next(res);
        console.log(res);
      });
  }
  onSee(block) {
    console.log(block);

    // if(this.productsArray.includes(block)) {
    //   console.log('entrou');

    //   for(var i = 0; i<this.productsArray.length; i++) {
    //     if(this.productsArray[i] === block) {
    //       this.productsArray.splice(i, block)
    //       console.log('removeu');

    //     }
    //   }
    // }
    // else {
    console.log(this.productsArray);

    this.productsArray.push(block);
    console.log(
      this.productsArray.map(block => {
        return block._id;
      })
    );

    // }
  }

  onAssemble(form: NgForm) {
    console.log(form.name);

    this.http
      .post("http://localhost:8000/api/invent/addfinal", {
        blocks: this.productsArray.map(block => {
          return block._id;
        }),
        name: form.name
      })
      .subscribe(response => {
        console.log(response);
      });
  }

  // getFinal(form: NgForm) {
  getFinal(postdata: { serial: string }) {
    console.log(postdata);

    // console.log(serial);

    this.http
      .post("http://localhost:8000/api/invent/getfinal", postdata, {
        responseType: "json"
      })
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
