import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {DataUserService} from "../data-user.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {FormatPhonePipe} from "../format-phone.pipe";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, FormsModule, FormatPhonePipe],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
  constructor(private _http: DataUserService, private route: Router) {

  }

  listUser: any;
  userDelete : any;
  deleteUser(id: string) {
    this._http.findUserById(id).subscribe(data => {
      this.userDelete = data
      Swal.fire({
        title: "Delete user " + this.userDelete.name + " ?",
        showCancelButton: true,
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          this._http.deleteUserById(id).subscribe(data => {
            Swal.fire({
              title: "Delete Success!",
              icon: "success"
            });
            this.ngOnInit()
          })
        }
      });
    })

  }

  setIdUser(id: number) {
    this.route.navigate([`/edit/${id}`])
  }
  searchUser(name: string) {
    if (name === "") {
      this.ngOnInit();
    } else {
      this._http.searchUserByName(name).subscribe(data => {
        this.listUser = data
      })
    }
  }


  ngOnInit(): void {
    this._http.getList().subscribe(data => {
      this.listUser = data;
    });
  }
}
