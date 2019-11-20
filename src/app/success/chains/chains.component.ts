import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-chains",
  templateUrl: "./chains.component.html",
  styleUrls: ["./chains.component.scss"]
})
export class ChainsComponent implements OnInit {
  loadedPosts = [];
  loadedPosts$ = new ReplaySubject(1);
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get("http://localhost:8000/api/users/showpartnerchains")
      .pipe(
        map((res: any[]) => {
          var array = [];

          for (const chains of res) {
            if (chains.owner) {
              array.push(chains);
            }
          }
          return array;
        })
      )
      .subscribe(posts => {
        console.log(posts);
        this.loadedPosts$.next(posts);
      });
  }
}
