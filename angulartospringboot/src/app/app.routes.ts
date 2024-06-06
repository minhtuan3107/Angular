import {Routes} from '@angular/router';
import {HomeComponentComponent} from "./home-component/home-component.component";
import {LoginComponentComponent} from "./login-component/login-component.component";
import {InfoAccountComponentComponent} from "./info-account-component/info-account-component.component";
import {DetailsProductComponent} from "./details-product/details-product.component";
import {AddComponentComponent} from "./add-component/add-component.component";
import {EditComponentComponent} from "./edit-component/edit-component.component";

export const routes: Routes = [
  {path: "", component: HomeComponentComponent},
  {path: "login", component: LoginComponentComponent},
  {path: "info", component: InfoAccountComponentComponent},
  {path: "detail/:id", component: DetailsProductComponent},
  {path: "addProduct", component: AddComponentComponent},
  {path: "edit/:id", component: EditComponentComponent}
];
