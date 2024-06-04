import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import {ListUserComponent} from "./list-user/list-user.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {FormatPhonePipe} from "./format-phone.pipe";
import {ParentComponentComponent} from "./parent-component/parent-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ListUserComponent, AddUserComponent, EditUserComponent, FormatPhonePipe, ParentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OK';
  user: any
}
