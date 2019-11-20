import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrls: ["./success.component.scss"]
})
export class SuccessComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  onClick() {
    this.auth.logout();
  }

  onClickChains() {}
}
