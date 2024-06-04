import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponentComponent} from "./home-component/home-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulartospringboot';
  flag: boolean | undefined

  ngOnInit() {
    const checkToken = localStorage.getItem("authToken") || "";
    if (checkToken === "") {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  logout() {
    localStorage.clear()
    alert("Dang Xuat Thanh Cong")
  }
  ngOnDoCheck(){
    this.ngOnInit()
  }
}
