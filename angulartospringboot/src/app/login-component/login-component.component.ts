import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginServiceService} from "../login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  constructor(private service: LoginServiceService, private router: Router) {
  }

  loginAccount(value: { nameAccount: string, password: string }) {
    this.service.loginAccount(value).subscribe((data : any) => {
      console.log(data)
      if(data.dataRes.isConfirm == true){
        localStorage.setItem("idAccount", data.dataRes.id)
        localStorage.setItem("authToken", data.token)
        console.log("Login thanh cong")
        alert("Dang Nhap Thanh Cong")
        this.router.navigate(['/'])
      }else {
        localStorage.clear()
        console.log("Sai tk mk")
      }
    })
  }
}
