import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { ReplaySubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { NgForm, Form } from "@angular/forms";

@Component({
  selector: "app-inventories",
  templateUrl: "./inventories.component.html",
  styleUrls: ["./inventories.component.scss"]
})
export class InventoriesComponent implements OnInit {
  loadedPartners = [];
  loadedPosts = [];
  loadedPartners$ = new ReplaySubject(1);
  loadedPosts$ = new ReplaySubject(1);

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.displayPartners();
    this.displayInvents();
  }

  private displayPartners() {
    this.http
      .get("http://localhost:8000/api/invent/showpartners")
      .subscribe(res => {
        this.loadedPartners$.next(res);
        console.log(res);
        console.log("entrou no display partners");
      });
  }

  private displayInvents() {
    this.route.params
      .pipe(
        switchMap(params => {
          return this.http.get(
            "http://localhost:8000/api/invent/showinventories"
          );
        })
      )
      .pipe(
        map((res: any[]) => {
          const arrayProducts = res.map(inventory => {
            inventory.products = inventory.products.map(product => {
              if (product && product._id) {
                return { ...product, owner: inventory.owner };
              }
            });
            return inventory.products;
          });
          return [].concat.apply([], arrayProducts).filter(x => {
            return x !== undefined;
          });
        })
      )
      .subscribe(res => {
        this.loadedPosts$.next(res);
        console.log(res);
        console.log("entrou no display invents");
      });
  }

  onBuy(item) {
    console.log(item.owner.name);
    console.log(item.name);
    console.log(item.amount);
    console.log(item.value);

    var issuer = item.owner.name;
    var data = item.name;
    var amount = item.amount;
    var value = item.value;

    var owner = item.owner._id;
    var id = item._id;

    console.log("teste");
    console.log(owner);
    console.log(id);
    var postData = { issuer, data, amount, value, owner, id };

    this.http
      .post("http://localhost:8000/api/users/addblocktochain/", postData, {
        responseType: "json"
      })
      .subscribe(responseData => {
        console.log(responseData);
      });
    console.log(postData);
  }
}
