import { Routes } from '@angular/router';
import {ListUserComponent} from "./list-user/list-user.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

export const routes: Routes = [
  { path: '', component: ListUserComponent, title:"Trang chủ" },
  { path: 'add', component: AddUserComponent, title:"Them User" },
  {path : 'edit/:id', component: EditUserComponent, title: "Edit User"}
];
