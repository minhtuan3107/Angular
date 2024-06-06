import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number) {
    const authToken = localStorage.getItem("authToken") || ''
    return this.http.get("http://localhost:8080/admin/getAllAccessary", {
      params:{
        page: page
      },
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
  }

  findByIdProduct(idProduct: string | null) {
    const authToken = localStorage.getItem("authToken") || ''
    return this.http.get("http://localhost:8080/api/find?id=" + idProduct, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }
  addProduct(product: any){
    const authToken = localStorage.getItem("authToken") || ''
    return this.http.post("http://localhost:8080/admin/addAccessary", product,{
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }
  deleteProduct(id: string){
    const authToken = localStorage.getItem("authToken") || ''
    console.log("http://localhost:8080/admin/deleteAccessary?id=" + id)
     return this.http.get("http://localhost:8080/admin/deleteAccessary?id=" + id,{
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }


  getAllTypeProduct(){
    return this.http.get("http://localhost:8080/type/getAll");
  }
}
