import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";

import { AuthGuard } from "./auth-guard.service";
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

import { ComponentsModule } from "./components/components.module";
import { AuthComponent } from "./auth/auth.component";
import { RegisterComponent } from "./register/register.component";
import { SuccessModule } from "./success/success.module";
import { CheckSerialComponent } from "./check-serial/check-serial.component";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    RegisterComponent,
    CheckSerialComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule,
    SuccessModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:8000"],
        blacklistedRoutes: []
      }
    })
  ],
  exports: [NavbarComponent],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
