import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SuccessComponent } from "./success.component";
import { ChainsComponent } from "./chains/chains.component";
import { BlocksComponent } from "./chains/blocks/blocks.component";
import { RouterModule } from "@angular/router";
import { InventoriesComponent } from './inventories/inventories.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PartnersComponent } from './partners/partners.component';
import { ProfilesComponent } from './partners/profiles/profiles.component';
import { LoggedprofileComponent } from './partners/loggedprofile/loggedprofile.component';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [SuccessComponent, ChainsComponent, BlocksComponent, InventoriesComponent, InventoryComponent, PartnersComponent, ProfilesComponent, LoggedprofileComponent, ProductComponent],
  imports: [CommonModule, FormsModule, NgbModule, RouterModule]
})
export class SuccessModule {}
