import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get("http://localhost:8080/api/findAllNew")
  }

  findByIdProduct(idProduct: string | null) {
    const authToken = localStorage.getItem("authToken") || ''
    return this.http.get("https://localhost:8080/api/find?id=" + idProduct, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }
}
