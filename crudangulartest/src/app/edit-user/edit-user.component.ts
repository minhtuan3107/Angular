import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataUserService, IUser} from "../data-user.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  constructor(private _http: DataUserService, private route: ActivatedRoute, private router: Router) {

  }

  user: any
  name: any
  editUser(user: { id: string, name: string, address: string, phone: string }) {
    this._http.editUser(user).subscribe(status => {
      console.log("OK")

    })
    alert("Sua thanh cong")
    this.router.navigate(['/'])

  }

  ngOnInit(): any {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this._http.findUserById(id).subscribe(data => {
      this.user = data
      this.name = this.user.name
    })
  }
}
