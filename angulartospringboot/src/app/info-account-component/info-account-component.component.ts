import {Component} from '@angular/core';
import {LoginServiceService} from "../login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info-account-component',
  standalone: true,
  imports: [],
  templateUrl: './info-account-component.component.html',
  styleUrl: './info-account-component.component.css'
})
export class InfoAccountComponentComponent {
  constructor(private service: LoginServiceService, private router: Router) {
  }

  user: any

  ngOnInit() {
    const flag = localStorage.getItem("authToken")
    if (flag === "") {
      this.router.navigate(['/login'])
    } else {
      this.service.findByIdAccount().subscribe(data => {
        this.user = data
      })
    }
  }
}
