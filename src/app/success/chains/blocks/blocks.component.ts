import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-blocks",
  templateUrl: "./blocks.component.html",
  styleUrls: ["./blocks.component.scss"]
})
export class BlocksComponent implements OnInit {
  chainId: string;
  chain$ = new ReplaySubject(1);
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => {
          this.chainId = params.id;
          return this.http.get(
            "http://localhost:8000/api/chains/" + this.chainId
          );
        })
      )
      .subscribe(res => {
        this.chain$.next(res);
        console.log(res);
      });
  }

  onSee(row) {
    console.log(row);
  }
}
