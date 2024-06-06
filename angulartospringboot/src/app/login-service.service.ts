import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {
  }

  loginAccount(data: { nameAccount: string, password: string }) {
    return this.http.post("http://localhost:8080/account/login", data)
  }

  findByIdAccount() {
    const idAccount = localStorage.getItem("idAccount") || ''
    const authToken = localStorage.getItem("authToken") || ''
    return this.http.get("http://localhost:8080/account/findById", {
      params: {
        idAccount: idAccount
      },
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }
}
