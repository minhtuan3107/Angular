import {Component} from '@angular/core';
import {LoginServiceService} from "../login-service.service";

@Component({
  selector: 'app-info-account-component',
  standalone: true,
  imports: [],
  templateUrl: './info-account-component.component.html',
  styleUrl: './info-account-component.component.css'
})
export class InfoAccountComponentComponent {
  constructor(private service: LoginServiceService) {
  }

  user: any

  ngOnInit() {
    this.service.findByIdAccount().subscribe(data => {
      this.user = data
    })
  }
}
