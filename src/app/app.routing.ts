import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { AuthComponent } from "./auth/auth.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./auth-guard.service";
import { SuccessComponent } from "./success/success.component";
import { ChainsComponent } from "./success/chains/chains.component";
import { BlocksComponent } from "./success/chains/blocks/blocks.component";
import { InventoryComponent } from "./success/inventory/inventory.component";
import { InventoriesComponent } from "./success/inventories/inventories.component";
import { PartnersComponent } from "./success/partners/partners.component";
import { ProfilesComponent } from "./success/partners/profiles/profiles.component";
import { LoggedprofileComponent } from "./success/partners/loggedprofile/loggedprofile.component";
import { ProductComponent } from "./success/product/product.component";
import { CheckSerialComponent } from "./check-serial/check-serial.component";

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "", component: ComponentsComponent },
  { path: "home", component: ComponentsComponent },
  { path: "auth", component: AuthComponent },
  { path: "success", canActivate: [AuthGuard], component: SuccessComponent },
  { path: "signup", component: RegisterComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "chains", canActivate: [AuthGuard], component: ChainsComponent },
  { path: "chains/:id", canActivate: [AuthGuard], component: BlocksComponent },
  {
    path: "inventory",
    canActivate: [AuthGuard],
    component: InventoryComponent
  },
  {
    path: "inventories",
    canActivate: [AuthGuard],
    component: InventoriesComponent
  },
  { path: "partners", canActivate: [AuthGuard], component: PartnersComponent },
  {
    path: "profile/:id",
    canActivate: [AuthGuard],
    component: ProfilesComponent
  },
  {
    path: "loggedprofile",
    canActivate: [AuthGuard],
    component: LoggedprofileComponent
  },
  { path: "products", canActivate: [AuthGuard], component: ProductComponent },
  { path: "checkserial/:serial", component: CheckSerialComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
