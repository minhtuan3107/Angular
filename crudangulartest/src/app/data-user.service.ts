import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface IUser {
  name: string;
  address: string;
  phone: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataUserService {
  constructor(private http: HttpClient) {
  }

  addNewUser(user: { name: string, address: string, phone: string }): Observable<any> {
    console.log('http://localhost:3001/user/add', user);
    return this.http.post('http://localhost:3001/user/add', user);
  }

  getList() {
    return this.http.get('http://localhost:3001/user/getList');
  }

  deleteUserById(id: string) {
    return this.http.delete(`http://localhost:3001/user/delete/${id}`)
  }

  findUserById(id: string | null) {
    return this.http.get(`http://localhost:3001/user/find/${id}`)
  }
 searchUserByName(name: string) {
    return this.http.get(`http://localhost:3001/user/searchUser/${name}`)
  }

  editUser(user: { id: string, name: string, address: string, phone: string }): Observable<any> {
    return this.http.put(`http://localhost:3001/user/edit/${user.id}`, user)
  }
}
