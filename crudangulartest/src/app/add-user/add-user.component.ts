import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DataUserService, IUser} from '../data-user.service';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private _http: DataUserService, private router : Router) { }

  addUser(data: IUser) {
    this._http.addNewUser(data).subscribe ( data =>{

      }
    );
    Swal.fire({
      title: "Add Success!",
      icon: "success"
    });
    this.router.navigate(['/']);
  }
}
