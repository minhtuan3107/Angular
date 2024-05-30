import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {DataUserService} from "../data-user.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
  constructor(private _http: DataUserService, private route: Router) {

  }

  listUser: any;

  deleteUser(id: number) {
    console.log(id)
     if (confirm("Chac chan muon xoa ?")){
       this._http.deleteUserById(id).subscribe(data => {
         alert("Xoa thanh cong")
         this.ngOnInit();
       }, error => {
         console.log(error)
       })
     }
  }
  setIdUser(id:number){
    this.route.navigate([`/edit/${id}`])
  }
  searchUser(name:string){
    if (name === ""){
      this.ngOnInit();
    }else {
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
