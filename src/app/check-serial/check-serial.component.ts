import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-check-serial",
  templateUrl: "./check-serial.component.html",
  styleUrls: ["./check-serial.component.scss"]
})
export class CheckSerialComponent implements OnInit {
  serial: string;
  chain$ = new ReplaySubject(1);

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => {
          this.serial = params.serial;
          console.log(this.serial);

          return this.http.get(
            "http://localhost:8000/api/invent/getfinal/" + this.serial
          );
        })
      )
      .subscribe(res => {
        this.chain$.next(res);
        console.log(res);
      });
  }
}
